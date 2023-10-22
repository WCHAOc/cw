import psutil
from flask import Flask, jsonify, render_template
import socket
import platform
import datetime
import subprocess
app = Flask(__name__, template_folder='dist', static_folder='dist/static')


def get_total_memory_size():
    memory = psutil.virtual_memory()
    total_size = memory.total
    # 根据内存总大小转换单位
    if total_size < 1024 * 1024 * 1024:
        total_size_str = f"{total_size / (1024 * 1024):.2f} MB"
    else:
        total_size_str = f"{total_size / (1024 * 1024 * 1024):.2f} GB"
    return total_size_str


def get_memory_usage():
    # 获取系统的内存信息
    memory = psutil.virtual_memory()
    # 计算内存使用率百分比
    usage_percent = memory.percent
    return usage_percent


def get_cpu_usage():
    # 获取系统的CPU使用率
    cpu_usage = psutil.cpu_percent(interval=1)
    return cpu_usage


def convert_unit(bytes):
    units = ['B', 'KB', 'MB', 'GB', 'TB']
    unit_index = 0
    while bytes >= 1024 and unit_index < len(units)-1:
        bytes /= 1024
        unit_index += 1
    return f'{bytes:.2f} {units[unit_index]}'


def get_network_traffic():
    # 获取所有网络接口的流量信息
    net_io = psutil.net_io_counters(pernic=True)
    # 获取每个网卡的地址信息
    net_addrs = psutil.net_if_addrs()
    # 创建网卡对象列表
    network_interfaces = []
    # 遍历每个网卡的流量信息
    for interface, traffic in net_io.items():
        # 检查网卡是否有 IP 地址
        if interface in net_addrs and net_addrs[interface]:
            bytes_sent = convert_unit(traffic.bytes_sent)
            bytes_recv = convert_unit(traffic.bytes_recv)
            ip_addresses = []
            for addr in net_addrs[interface]:
                if addr.family == socket.AF_INET:
                    ip_addresses.append(addr.address)
            # 判断是否有 IP 地址，如果没有则跳过当前网卡
            if not ip_addresses:
                continue
            network_interface = {
                'net': interface,
                'ip': ip_addresses,
                'up': bytes_sent,
                'down': bytes_recv
            }
            network_interfaces.append(network_interface)
    return network_interfaces


def get_networks():
    networks = {}
    # 获取所有网卡的IP地址信息
    net_addrs = psutil.net_if_addrs()
    # 遍历每个网卡的IP地址信息
    for nic, addrs in net_addrs.items():
        for addr in addrs:
            if addr.family == socket.AF_INET:
                networks[nic] = addr.address
    return networks


def get_root_usage():
    root = '/'
    usage = psutil.disk_usage(root)
    total = convert_unit(usage.total)
    used = convert_unit(usage.used)
    free = convert_unit(usage.free)
    percent = usage.percent
    root_usage = {
        'disk': root,
        'total': total,
        'usage': used,
        'free': free,
        'disk_usage': f'{percent:.2f}'
    }
    return root_usage


def get_system_uptime():
    boot_time = psutil.boot_time()  # 获取系统启动的时间戳
    uptime = datetime.datetime.now() - datetime.datetime.fromtimestamp(boot_time)  # 计算启动时长
    # 将启动时长转换为自定义格式
    if uptime.days >= 1:
        days = uptime.days
        hours, remainder = divmod(uptime.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        uptime_str = f"{days} day {hours:02d}:{minutes:02d}"
    elif uptime.seconds >= 3600:
        hours, remainder = divmod(uptime.seconds, 3600)
        minutes, seconds = divmod(remainder, 60)
        uptime_str = f"{hours}:{minutes:02d}"
    else:
        minutes, seconds = divmod(uptime.seconds, 60)
        uptime_str = f"{minutes} min"

    return uptime_str


def get_cpu_model():
    try:
        if platform.system() == "Windows":
            return platform.processor()
        elif platform.system() == "Darwin":
            command = "/usr/sbin/sysctl -n machdep.cpu.brand_string"
            return subprocess.check_output(command, shell=True).strip().decode()
        elif platform.system() == "Linux":
            command = "cat /proc/cpuinfo | grep 'model name' | uniq | awk -F: '{print $2}'"
            return subprocess.check_output(command, shell=True).strip().decode()
        else:
            return "Unknown"
    except Exception:
        return "Unknown"


def get_info():
    # 根目录使用情况
    disk = get_root_usage()
    # 获取主机名
    hostname = socket.gethostname()
    # 判断当前系统环境
    system = platform.system()
    os = platform.platform()
    # 返回系统名
    if system == 'Windows':
        system_type = platform.win32_ver()[0]
    elif system == 'Linux':
        system_type = platform.linux_distribution()[0]
    elif system == 'Darwin':
        system_type = 'Mac OS X'
    else:
        system_type = 'Unknown'
    # 获取CPU逻辑核心数
    cpu_count = psutil.cpu_count(logical=True)
    # 获取CPU物理核心数
    cpu_phys_count = psutil.cpu_count(logical=False)
    cpu = get_cpu_model() + "(" + str(cpu_count) + "*" + str(cpu_phys_count) + ")"
    # 获取CPU使用率
    cpu_usage = get_cpu_usage()
    # 获取内存总大小
    memory = get_total_memory_size()
    # 获取已使用内存大小
    memory_usage = get_memory_usage()
    # 系统运行时长
    # 获取系统启动时间
    uptime = get_system_uptime()
    # 网络上下行
    network_traffic = get_network_traffic()
    networks = get_networks()
    # 获取所有网卡的IP地址信息
    message = {
        'hostname': hostname,  # 主机名/计算机名
        'system_type': system_type,  # 操作系统平台
        'os': os,   # 操作系统平台名称
        'disk': disk,
        'cpu': cpu,  # cpu信息
        'cpu_usage': cpu_usage,  # cpu使用率
        'memory': memory,  # 内存大小
        'memory_usage': memory_usage,  # 内存使用率
        'uptime': uptime,  # 系统启动时间
        'networks': networks,  # 网卡信息
        'network_traffic': network_traffic,  # 每个网卡详细信息
    }
    return message


# 定义接口，返回总上下行流量和实时上下行流量
@app.route('/info', methods=['GET'])
def info():
    response = get_info()
    return jsonify(response)


@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'  # 设置允许跨域访问的域名
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'  # 允许的请求方法
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'  # 允许的请求头
    return response


@app .route('/', defaults={'path': ''})
@app .route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0')
