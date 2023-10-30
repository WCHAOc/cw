(function(){"use strict";var e={199:function(e,s,n){var t=n(963),o=n(252);function a(e,s){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var l=n(744);const i={},r=(0,l.Z)(i,[["render",a]]);var u=r,c=n(201),p=n(577);const d=e=>((0,o.dD)("data-v-51495386"),e=e(),(0,o.Cn)(),e),f={class:"common-layout"},w={style:{}},m={class:"card-header"},g=d((()=>(0,o._)("span",{class:"key"},"主机名:",-1))),_={class:"value"},y=d((()=>(0,o._)("span",{class:"key"},"系统平台:",-1))),v={class:"value"},k=d((()=>(0,o._)("span",{class:"key"},"系统版本:",-1))),h={class:"value"},b=d((()=>(0,o._)("span",{class:"key"},"CPU:",-1))),x={class:"value"},W=d((()=>(0,o._)("span",{class:"key"},"内存:",-1))),z={class:"value"},D=d((()=>(0,o._)("span",{class:"key"},"系统盘:",-1))),O={class:"value"},U=d((()=>(0,o._)("span",{class:"key"},"系统运行时长:",-1))),j={class:"value"},C=d((()=>(0,o._)("p",null,[(0,o._)("span",{class:"key"},"网络信息:")],-1))),L={style:{padding:"10px"}},S={class:"key"},P={class:"value"},T={class:"key"},Z={class:"value"},H=d((()=>(0,o._)("p",null,[(0,o._)("span",{class:"key"},"连接数量:")],-1))),I={style:{padding:"10px"}},K={style:{margin:"5px"}},Y=d((()=>(0,o._)("span",{class:"key"},"TCP:",-1))),$={class:"value"},M=d((()=>(0,o._)("span",{class:"key"},"UDP:",-1))),E={class:"value"},F=d((()=>(0,o._)("p",null,[(0,o._)("span",{class:"key"},"实时速率:")],-1))),Q={style:{padding:"10px"}},R={class:"value"},q=d((()=>(0,o._)("br",null,null,-1))),A=d((()=>(0,o._)("p",null,[(0,o._)("span",{class:"key"},"总上/下行:")],-1))),B={style:{padding:"10px"}},G={class:"value"},J=d((()=>(0,o._)("br",null,null,-1)));function N(e,s,n,t,a,l){const i=(0,o.up)("SysLogo"),r=(0,o.up)("el-header"),u=(0,o.up)("arrow-down"),c=(0,o.up)("el-icon"),d=(0,o.up)("el-button"),N=(0,o.up)("el-dropdown-item"),V=(0,o.up)("el-dropdown-menu"),X=(0,o.up)("el-dropdown"),ee=(0,o.up)("el-progress"),se=(0,o.up)("el-divider"),ne=(0,o.up)("el-button-group"),te=(0,o.up)("el-card"),oe=(0,o.up)("el-main"),ae=(0,o.up)("el-container"),le=(0,o.Q2)("loading");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o.Wm)(ae,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{style:{"background-color":"#e5e7ec",display:"flex","justify-content":"flex-start"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1}),(0,o.wy)(((0,o.wg)(),(0,o.j4)(oe,{style:{"background-color":"#f7f7f7"}},{default:(0,o.w5)((()=>[(0,o._)("div",w,[(0,o.Wm)(te,{class:"box-card"},{header:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("span",null,(0,p.zw)(a.infos["hostname"]),1),(0,o.Wm)(X,{trigger:"click"},{dropdown:(0,o.w5)((()=>[(0,o.Wm)(V,null,{default:(0,o.w5)((()=>[(0,o.Wm)(N,{icon:"Link",onClick:s[0]||(s[0]=e=>this.$message.error("连不了一点"))},{default:(0,o.w5)((()=>[(0,o.Uk)("远程连接")])),_:1})])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(d,{type:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)(" 操作"),(0,o.Wm)(c,{class:"el-icon--right"},{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1})])),_:1})])),_:1})])])),default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("p",null,[g,(0,o._)("span",_,(0,p.zw)(a.infos["hostname"]),1)]),(0,o._)("p",null,[y,(0,o._)("span",v,(0,p.zw)(a.infos["system_type"]),1)]),(0,o._)("p",null,[k,(0,o._)("span",h,(0,p.zw)(a.infos["os"]),1)]),(0,o._)("p",null,[b,(0,o._)("span",x,(0,p.zw)(a.infos["cpu"]),1)]),(0,o.Wm)(ee,{color:l.progressColor(a.infos["cpu_usage"]),"text-inside":!0,"stroke-width":24,percentage:a.infos["cpu_usage"]},null,8,["color","percentage"]),(0,o._)("p",null,[W,(0,o._)("span",z,(0,p.zw)(a.infos["used_memory"])+" / "+(0,p.zw)(a.infos["memory"]),1)]),(0,o.Wm)(ee,{color:l.progressColor(a.infos["memory_usage"]),"text-inside":!0,"stroke-width":24,percentage:a.infos["memory_usage"]},null,8,["color","percentage"]),(0,o._)("p",null,[D,(0,o._)("span",O,(0,p.zw)(a.disks["usage"])+" / "+(0,p.zw)(a.disks["total"]),1)]),(0,o.Wm)(ee,{color:l.progressColor(a.disks["disk_usage"]),"text-inside":!0,"stroke-width":24,percentage:a.disks["disk_usage"]},null,8,["color","percentage"]),(0,o._)("p",null,[U,(0,o._)("span",j,(0,p.zw)(a.infos["uptime"]),1)]),C,(0,o._)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.infos["networks"],((e,s)=>((0,o.wg)(),(0,o.iD)("div",{style:{margin:"5px"},key:s},[(0,o._)("span",S,(0,p.zw)(s)+":",1),(0,o._)("span",P,(0,p.zw)(e),1)])))),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.infos["macs"],((e,s)=>((0,o.wg)(),(0,o.iD)("div",{style:{margin:"5px"},key:s},[(0,o._)("span",T,(0,p.zw)(e.net)+":",1),(0,o._)("span",Z,(0,p.zw)(e.mac),1)])))),128)),(0,o.Wm)(se)]),H,(0,o._)("div",I,[(0,o._)("div",K,[Y,(0,o._)("span",$,(0,p.zw)(a.infos["tcp"]),1),(0,o.Wm)(se,{direction:"vertical"}),M,(0,o._)("span",E,(0,p.zw)(a.infos["udp"]),1)]),(0,o.Wm)(se)]),F,(0,o._)("div",Q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.infos["network_speeds"],(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.net,style:{margin:"5px"}},[(0,o._)("span",R,[(0,o.Uk)(" net: "+(0,p.zw)(e["net"]),1),(0,o.Wm)(se,{direction:"vertical"}),(0,o.Uk)("ip: "+(0,p.zw)(e.ip),1),q,(0,o.Wm)(ne,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"custom-button",icon:"Upload",text:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e["up"]),1)])),_:2},1024),(0,o.Wm)(d,{class:"custom-button",icon:"Download",text:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e["down"]),1)])),_:2},1024)])),_:2},1024)])])))),128)),(0,o.Wm)(se)]),A,(0,o._)("div",B,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.infos["network_traffic"],(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.ip[0],style:{margin:"5px"}},[(0,o._)("span",G,[(0,o.Uk)(" net: "+(0,p.zw)(e["net"]),1),(0,o.Wm)(se,{direction:"vertical"}),(0,o.Uk)("ip: "+(0,p.zw)(e.ip[0]),1),J,(0,o.Wm)(ne,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"custom-button",icon:"Upload",text:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e["up"]),1)])),_:2},1024),(0,o.Wm)(d,{class:"custom-button",icon:"Download",text:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e["down"]),1)])),_:2},1024)])),_:2},1024)])])))),128)),(0,o.Wm)(se)])])])),_:1})])])),_:1})),[[le,a.showLoading]])])),_:1})])}var V=n(154);const X="",ee=V.Z.create({baseURL:X,timeout:1e4,headers:{"Content-Type":"application/json;charset=utf-8"}});function se(e){return ee.get(e).then((e=>e.data)).catch((e=>e))}const ne=e=>((0,o.dD)("data-v-4e2b5a29"),e=e(),(0,o.Cn)(),e),te={style:{display:"flex","justify-content":"center","align-items":"center"}},oe=ne((()=>(0,o._)("div",{class:"text"},"状态监控-(实时获取系统状态)",-1)));function ae(e,s,t,a,l,i){const r=(0,o.up)("el-image");return(0,o.wg)(),(0,o.iD)("div",te,[(0,o.Wm)(r,{style:{width:"30px",height:"30px","border-radius":"50%"},src:n(949),fit:"scale-down"},null,8,["src"]),oe])}var le={name:"SysLogo"};const ie=(0,l.Z)(le,[["render",ae],["__scopeId","data-v-4e2b5a29"]]);var re=ie,ue={name:"SysIndex",components:{SysLogo:re},data(){return{infos:{},disks:{usage:"-",total:"-",disk_usage:0},showLoading:!0,msg:!0}},methods:{async init(){await se("/info").then((e=>{this.showLoading=!0,null!==e?(this.msg&&(this.$message.success("获取数据成功"),this.msg=!1),this.infos=e,this.disks=e["disk"],this.showLoading=!1):this.$message.error("获取数据失败")})).catch((()=>{this.$message.error("请求失败"),this.showLoading=!1}))},progressColor(e){return e<20?"#5cb87a":e>20&&e<40?"#1989fa":e>=40&&e<=80?"#e6a23c":"#f56c6c"}},created(){setInterval(this.init,1e3)}};const ce=(0,l.Z)(ue,[["render",N],["__scopeId","data-v-51495386"]]);var pe=ce;const de=[{path:"/",name:"index",component:pe}],fe=(0,c.p7)({history:(0,c.PO)("/"),routes:de});var we=fe,me=n(907),ge=(0,me.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),_e=n(363),ye=n(781);n(415);const ve=(0,t.ri)(u);for(const[ke,he]of Object.entries(ye))ve.component(ke,he);ve.use(_e.Z),ve.use(ge),ve.use(we),ve.mount("#app")},949:function(e,s,n){e.exports=n.p+"static/img/logo.8de7ca56.png"}},s={};function n(t){var o=s[t];if(void 0!==o)return o.exports;var a=s[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(s,t,o,a){if(!t){var l=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],a=e[c][2];for(var i=!0,r=0;r<t.length;r++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[r])}))?t.splice(r--,1):(i=!1,a<l&&(l=a));if(i){e.splice(c--,1);var u=o();void 0!==u&&(s=u)}}return s}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,o,a]}}(),function(){n.d=function(e,s){for(var t in s)n.o(s,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(s){return 0===e[s]};var s=function(s,t){var o,a,l=t[0],i=t[1],r=t[2],u=0;if(l.some((function(s){return 0!==e[s]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(r)var c=r(n)}for(s&&s(t);u<l.length;u++)a=l[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},t=self["webpackChunksys"]=self["webpackChunksys"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(199)}));t=n.O(t)})();
//# sourceMappingURL=app.96fd093b.js.map