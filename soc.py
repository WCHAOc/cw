import threading
import psutil
from flask import Flask, jsonify, render_template
import socket
import platform
import datetime
import subprocess
import distro
import logging
import time
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
# 如果只希望本机能访问到,那么就改成127.0.0.1，0.0.0.0表示绑定到所有网卡[默认不需要改]
host = "0.0.0.0"
# web端口
port = 5000
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

app = Flask(__name__, template_folder='dist', static_folder='dist/static')
app.env = 'production'
app.debug = False
# 移除flask启动时的开发服务器警告消息
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)


# 获取内存已使用大小和总大小
def get_total_memory_size():
    memory = psutil.virtual_memory()
    total_size = memory.total
    used_memory = memory.used
    # 根据内存总大小转换单位
    if total_size < 1024 * 1024 * 1024:
        total_size_str = f"{total_size / (1024 * 1024):.2f} MB"
    else:
        total_size_str = f"{total_size / (1024 * 1024 * 1024):.2f} GB"
    if used_memory < 1024 * 1024 * 1024:
        used_size_str = f"{used_memory / (1024 * 1024):.2f} MB"
    else:
        used_size_str = f"{used_memory / (1024 * 1024 * 1024):.2f} GB"
    return total_size_str, used_size_str


# 获取内存使用百分比
def get_memory_usage():
    # 获取系统的内存信息
    memory = psutil.virtual_memory()
    # 计算内存使用率百分比
    usage_percent = memory.percent
    return usage_percent


# 获取cpu使用率
def get_cpu_usage():
    # 获取系统的CPU使用率
    cpu_usage = psutil.cpu_percent(interval=1)
    return cpu_usage


# 单位转换函数
def convert_unit(b):
    units = ['B', 'KB', 'MB', 'GB', 'TB']
    unit_index = 0
    while b >= 1024 and unit_index < len(units)-1:
        b /= 1024
        unit_index += 1
    return f'{b:.2f} {units[unit_index]}'


# 获取每个网卡上下行
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


# 获取网卡地址信息
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


# 获取根目录使用情况
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


# 获取系统启动时间
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


# 获取cpu型号
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


# 获取每个网卡的mac地址
def get_network_interface_mac():
    result = []
    net_if_addrs = psutil.net_if_addrs()

    for interface, addresses in net_if_addrs.items():
        has_ip_address = False
        for address in addresses:
            if address.family == socket.AF_INET:
                has_ip_address = True
                break
        if has_ip_address:
            for address in addresses:
                if address.family == psutil.AF_LINK:
                    mac_address = address.address
                    result.append({"net": interface, "mac": mac_address})
    return result


# 获取系统tcp连接数
def get_tcp_connections():
    try:
        connections = psutil.net_connections(kind='tcp')
        established_connections = len([conn for conn in connections if conn.status == 'ESTABLISHED'])
    except PermissionError:
        established_connections = 'Permission denied'
    except psutil.AccessDenied:
        established_connections = 'Permission denied'
    return established_connections


# 获取系统udp连接数
def get_udp_connections():
    try:
        connections = psutil.net_connections(kind='udp')
        established_connections = len([conn for conn in connections if conn.status == 'ESTABLISHED'])
    except PermissionError:
        established_connections = 'Permission denied'
    except psutil.AccessDenied:
        established_connections = 'Permission denied'
    return established_connections


# 利用多线程+线程锁的方式，将实时获取网速放在子线程内，net_speeds就为实时速率
net_speeds = []
net_speeds_lock = threading.Lock()


# 获取每个网卡上下行速率
def get_net_speeds():
    global net_speeds
    while True:
        key_info = psutil.net_io_counters(pernic=True).keys()
        recv = {}
        sent = {}
        for key in key_info:
            if psutil.net_if_addrs().get(key):
                recv.setdefault(key, psutil.net_io_counters(pernic=True).get(key).bytes_recv)
                sent.setdefault(key, psutil.net_io_counters(pernic=True).get(key).bytes_sent)
        time.sleep(1)
        now_recv = {}
        now_sent = {}
        for key in key_info:
            if psutil.net_if_addrs().get(key):
                now_recv.setdefault(key, psutil.net_io_counters(pernic=True).get(key).bytes_recv)
                now_sent.setdefault(key, psutil.net_io_counters(pernic=True).get(key).bytes_sent)
        new_net_speeds = []
        for key in key_info:
            if psutil.net_if_addrs().get(key):
                download = (now_recv.get(key) - recv.get(key))
                upload = (now_sent.get(key) - sent.get(key))
                ip_addresses = []
                net_addrs = psutil.net_if_addrs().get(key)
                for interface in net_addrs:
                    if interface.family == socket.AF_INET:
                        ip_addresses.append(interface.address)
                if not ip_addresses:
                    continue
                new_net_speeds.append({
                    'net': key,
                    'ip': ip_addresses[0],
                    'up': convert_unit(upload) + '/s',
                    'down': convert_unit(download) + '/s'
                })
        with net_speeds_lock:
            net_speeds = new_net_speeds


# 开一个线程实时获取速率，不占用主进程
threading.Thread(target=get_net_speeds).start()


def get_info():
    # 根目录使用情况
    disk = get_root_usage()
    # 获取主机名
    hostname = socket.gethostname()
    # 判断当前系统环境
    system = platform.system()
    # 获取系统详细信息
    os = platform.platform()
    # 返回系统平台
    if system == 'Windows':
        system_type = distro.name()
    elif system == "Linux":
        system_type = distro.name()
    elif system == 'Darwin':
        system_type = 'Mac OS X'
    else:
        system_type = 'Unknown'
    # 获取CPU逻辑核心数
    cpu_count = psutil.cpu_count(logical=True)
    # 获取CPU物理核心数
    cpu_phys_count = psutil.cpu_count(logical=False)
    cpu = get_cpu_model() + "(" + "物理:" + str(cpu_count) + "核" + "*" + "逻辑:" + str(cpu_phys_count) + "核" + ")"
    # 获取CPU使用率
    cpu_usage = get_cpu_usage()
    # 获取内存总大小
    memory, used_memory = get_total_memory_size()
    # 获取已使用内存大小
    memory_usage = get_memory_usage()
    # 系统运行时长
    # 获取系统启动时间
    uptime = get_system_uptime()
    # 网络上下行
    network_traffic = get_network_traffic()
    networks = get_networks()
    # 获取所有网卡的mac地址信息
    macs = get_network_interface_mac()
    # tcp连接数
    tcp = get_tcp_connections()
    # udp连接数
    udp = get_udp_connections()
    # 获取每个网卡速率
    network_speeds = net_speeds
    message = {
        'hostname': hostname,  # 主机名/计算机名
        'system_type': system_type,  # 操作系统平台
        'os': os,   # 操作系统平台名称
        'disk': disk,   # 根目录/c盘/系统盘使用统计
        'cpu': cpu,  # cpu信息
        'cpu_usage': cpu_usage,  # cpu使用率
        'memory': memory,  # 内存大小
        'used_memory': used_memory,  # 已使用内存大小
        'memory_usage': memory_usage,  # 内存使用率
        'uptime': uptime,  # 系统启动时间
        'networks': networks,  # 网卡信息
        'macs': macs,  # mac地址
        'tcp': tcp,  # tcp连接数
        'udp': udp,  # udp连接数
        'network_speeds': network_speeds,  # 每个网卡上下行速率
        'network_traffic': network_traffic,  # 每个网卡总上下行
    }
    return message


# 将所有需要返回的数据也在后台获取，这样请求接口代码就会在0.5s内返回结果
Info = {}


def i():
    global Info
    while True:
        Info = get_info()
        time.sleep(0.5)


threading.Thread(target=i).start()


# 定义接口，返回总上下行流量和实时上下行流量
@app.route('/info', methods=['GET'])
def info():
    response = Info
    return jsonify(response)


# 开放api "/info", 有前端开发能力可自己开发视图模版，
# 如果不希望"/info"此接口被跨域请求到，那么注释掉下面的函数修饰符(@app.after_request)
@app.after_request
def cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'  # 设置允许跨域访问的域名
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'  # 允许的请求方法
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'  # 允许的请求头
    return response


# 由于前端是vue单页应用+历史路由，所以这里需要动态配置路径，或改用hash模式路由
@app .route('/', defaults={'path': ''})
@app .route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


if __name__ == '__main__':
    app.run(host=host, port=port)
