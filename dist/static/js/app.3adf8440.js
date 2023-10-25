(function(){"use strict";var e={293:function(e,n,s){var t=s(963),o=s(252);function a(e,n){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(s)}var r=s(744);const l={},i=(0,r.Z)(l,[["render",a]]);var u=i,c=s(201),p=s(577);const d=e=>((0,o.dD)("data-v-81b80a10"),e=e(),(0,o.Cn)(),e),f={class:"common-layout"},g={style:{}},m={class:"card-header"},w=d((()=>(0,o._)("span",{class:"key"},"主机名:",-1))),_={class:"value"},y=d((()=>(0,o._)("span",{class:"key"},"系统平台:",-1))),v={class:"value"},h=d((()=>(0,o._)("span",{class:"key"},"系统版本:",-1))),k={class:"value"},b=d((()=>(0,o._)("span",{class:"key"},"CPU:",-1))),x={class:"value"},W=d((()=>(0,o._)("span",{class:"key"},"内存:",-1))),z={class:"value"},O=d((()=>(0,o._)("span",{class:"key"},"系统盘:",-1))),j={class:"value"},C=d((()=>(0,o._)("span",{class:"key"},"系统运行时长:",-1))),D={class:"value"},S=d((()=>(0,o._)("p",null,[(0,o._)("span",{class:"key"},"网络信息:")],-1))),U={style:{padding:"10px"}},P={class:"key"},T={class:"value"},L={class:"key"},Z={class:"value"},I=d((()=>(0,o._)("p",null,[(0,o._)("span",{class:"key"},"总上/下行:")],-1))),$={style:{padding:"10px"}},H={class:"value"},K=d((()=>(0,o._)("br",null,null,-1)));function M(e,n,s,t,a,r){const l=(0,o.up)("SysLogo"),i=(0,o.up)("el-header"),u=(0,o.up)("arrow-down"),c=(0,o.up)("el-icon"),d=(0,o.up)("el-button"),M=(0,o.up)("el-dropdown-item"),Y=(0,o.up)("el-dropdown-menu"),E=(0,o.up)("el-dropdown"),F=(0,o.up)("el-progress"),Q=(0,o.up)("el-divider"),R=(0,o.up)("el-button-group"),q=(0,o.up)("el-card"),A=(0,o.up)("el-main"),B=(0,o.up)("el-container"),G=(0,o.Q2)("loading");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o.Wm)(B,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{style:{"background-color":"#e5e7ec",display:"flex","justify-content":"flex-start"}},{default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1}),(0,o.wy)(((0,o.wg)(),(0,o.j4)(A,{style:{"background-color":"#f7f7f7"}},{default:(0,o.w5)((()=>[(0,o._)("div",g,[(0,o.Wm)(q,{class:"box-card"},{header:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("span",null,(0,p.zw)(a.infos["hostname"]),1),(0,o.Wm)(E,{trigger:"click"},{dropdown:(0,o.w5)((()=>[(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(M,{icon:"Link",onClick:n[0]||(n[0]=e=>this.$message.error("连不了一点"))},{default:(0,o.w5)((()=>[(0,o.Uk)("远程连接")])),_:1})])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(d,{type:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)(" 操作"),(0,o.Wm)(c,{class:"el-icon--right"},{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1})])),_:1})])),_:1})])])),default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("p",null,[w,(0,o._)("span",_,(0,p.zw)(a.infos["hostname"]),1)]),(0,o._)("p",null,[y,(0,o._)("span",v,(0,p.zw)(a.infos["system_type"]),1)]),(0,o._)("p",null,[h,(0,o._)("span",k,(0,p.zw)(a.infos["os"]),1)]),(0,o._)("p",null,[b,(0,o._)("span",x,(0,p.zw)(a.infos["cpu"]),1)]),(0,o.Wm)(F,{color:r.progressColor(a.infos["cpu_usage"]),"text-inside":!0,"stroke-width":24,percentage:a.infos["cpu_usage"]},null,8,["color","percentage"]),(0,o._)("p",null,[W,(0,o._)("span",z,(0,p.zw)(a.infos["used_memory"])+" / "+(0,p.zw)(a.infos["memory"]),1)]),(0,o.Wm)(F,{color:r.progressColor(a.infos["memory_usage"]),"text-inside":!0,"stroke-width":24,percentage:a.infos["memory_usage"]},null,8,["color","percentage"]),(0,o._)("p",null,[O,(0,o._)("span",j,(0,p.zw)(a.disks["usage"])+" / "+(0,p.zw)(a.disks["total"]),1)]),(0,o.Wm)(F,{color:r.progressColor(a.disks["disk_usage"]),"text-inside":!0,"stroke-width":24,percentage:a.disks["disk_usage"]},null,8,["color","percentage"]),(0,o._)("p",null,[C,(0,o._)("span",D,(0,p.zw)(a.infos["uptime"]),1)]),S,(0,o._)("div",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.infos["networks"],((e,n)=>((0,o.wg)(),(0,o.iD)("div",{style:{margin:"5px"},key:n},[(0,o._)("span",P,(0,p.zw)(n)+":",1),(0,o._)("span",T,(0,p.zw)(e),1)])))),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.infos["macs"],((e,n)=>((0,o.wg)(),(0,o.iD)("div",{style:{margin:"5px"},key:n},[(0,o._)("span",L,(0,p.zw)(e.net)+":",1),(0,o._)("span",Z,(0,p.zw)(e.mac),1)])))),128)),(0,o.Wm)(Q)]),I,(0,o._)("div",$,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.infos["network_traffic"],(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.ip[0],style:{margin:"5px"}},[(0,o._)("span",H,[(0,o.Uk)(" net: "+(0,p.zw)(e["net"]),1),(0,o.Wm)(Q,{direction:"vertical"}),(0,o.Uk)("ip: "+(0,p.zw)(e.ip[0]),1),K,(0,o.Wm)(R,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{icon:"Upload",text:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e["up"]),1)])),_:2},1024),(0,o.Wm)(d,{icon:"Download",text:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e["down"]),1)])),_:2},1024)])),_:2},1024)])])))),128)),(0,o.Wm)(Q)])])])),_:1})])])),_:1})),[[G,a.msg]])])),_:1})])}var Y=s(154);const E="",F=Y.Z.create({baseURL:E,timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"}});function Q(e){return F.get(e).then((e=>e.data)).catch((e=>e))}const R=e=>((0,o.dD)("data-v-4e2b5a29"),e=e(),(0,o.Cn)(),e),q={style:{display:"flex","justify-content":"center","align-items":"center"}},A=R((()=>(0,o._)("div",{class:"text"},"状态监控-(实时获取系统状态)",-1)));function B(e,n,t,a,r,l){const i=(0,o.up)("el-image");return(0,o.wg)(),(0,o.iD)("div",q,[(0,o.Wm)(i,{style:{width:"30px",height:"30px","border-radius":"50%"},src:s(949),fit:"scale-down"},null,8,["src"]),A])}var G={name:"SysLogo"};const J=(0,r.Z)(G,[["render",B],["__scopeId","data-v-4e2b5a29"]]);var N=J,V={name:"SysIndex",components:{SysLogo:N},data(){return{infos:{},disks:{usage:"-",total:"-",disk_usage:0},msg:!0}},methods:{init(){Q("/info").then((e=>{this.msg&&this.$message.success("获取数据成功"),this.msg=!1,null!==e?(this.infos=e,this.disks=e["disk"]):this.$message.error("获取数据失败")})).catch((()=>{this.$message.error("请求失败")}))},progressColor(e){return e<20?"#5cb87a":e>20&&e<40?"#1989fa":e>=40&&e<=80?"#e6a23c":"#f56c6c"}},created(){setInterval(this.init,3e3)}};const X=(0,r.Z)(V,[["render",M],["__scopeId","data-v-81b80a10"]]);var ee=X;const ne=[{path:"/",name:"index",component:ee}],se=(0,c.p7)({history:(0,c.PO)("/"),routes:ne});var te=se,oe=s(907),ae=(0,oe.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),re=s(363),le=s(781);s(415);const ie=(0,t.ri)(u);for(const[ue,ce]of Object.entries(le))ie.component(ue,ce);ie.use(re.Z),ie.use(ae),ie.use(te),ie.mount("#app")},949:function(e,n,s){e.exports=s.p+"static/img/logo.8de7ca56.png"}},n={};function s(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(n,t,o,a){if(!t){var r=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],a=e[c][2];for(var l=!0,i=0;i<t.length;i++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](t[i])}))?t.splice(i--,1):(l=!1,a<r&&(r=a));if(l){e.splice(c--,1);var u=o();void 0!==u&&(n=u)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,o,a]}}(),function(){s.d=function(e,n){for(var t in n)s.o(n,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,r=t[0],l=t[1],i=t[2],u=0;if(r.some((function(n){return 0!==e[n]}))){for(o in l)s.o(l,o)&&(s.m[o]=l[o]);if(i)var c=i(s)}for(n&&n(t);u<r.length;u++)a=r[u],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(c)},t=self["webpackChunksys"]=self["webpackChunksys"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=s.O(void 0,[998],(function(){return s(293)}));t=s.O(t)})();
//# sourceMappingURL=app.3adf8440.js.map