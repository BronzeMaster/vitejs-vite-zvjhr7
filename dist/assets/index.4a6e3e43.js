(function(e){"use strict";const i=(t=>(e.pushScopeId("data-v-c9303bff"),t=t(),e.popScopeId(),t))(()=>e.createElementVNode("h1",null,"Hello World",-1)),l=e.defineComponent({__name:"App",setup(t){const n=e.ref(0),r=()=>n.value+=1;return(c,o)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[i,e.createElementVNode("button",{onClick:r},"Click Me!"),e.createElementVNode("div",null,"Clicked: "+e.toDisplayString(n.value),1)],64))}}),d="",p=((t,n)=>{const r=t.__vccOpts||t;for(const[c,o]of n)r[c]=o;return r})(l,[["__scopeId","data-v-c9303bff"]]),u="";e.createApp(p).mount("#app")})(Vue);