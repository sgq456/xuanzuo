(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-593d9d5e"],{"0b27":function(t,e,s){e.f=s("a4e2")},"113f":function(t,e,s){var r=s("6584")("meta"),a=s("c5d5"),n=s("8fa9"),i=s("5d02").f,o=0,c=Object.isExtensible||function(){return!0},l=!s("5cfa")((function(){return c(Object.preventExtensions({}))})),u=function(t){i(t,r,{value:{i:"O"+ ++o,w:{}}})},f=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!n(t,r)){if(!c(t))return"F";if(!e)return"E";u(t)}return t[r].i},p=function(t,e){if(!n(t,r)){if(!c(t))return!0;if(!e)return!1;u(t)}return t[r].w},d=function(t){return l&&h.NEED&&c(t)&&!n(t,r)&&u(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:p,onFreeze:d}},"24ec":function(t,e,s){"use strict";var r=s("8fc5"),a=s.n(r);a.a},"4b2c":function(t,e,s){"use strict";s("d472")("big",(function(t){return function(){return t(this,"big","","")}}))},"57e2":function(t,e,s){var r=s("63f1"),a=s("675c"),n=s("2e0f"),i=s("0b27"),o=s("5d02").f;t.exports=function(t){var e=a.Symbol||(a.Symbol=n?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:i.f(t)})}},"80a5":function(t,e,s){s("57e2")("asyncIterator")},"8fc5":function(t,e,s){},a5fd:function(t,e,s){"use strict";var r=s("63f1"),a=s("8fa9"),n=s("e5cc"),i=s("1cfd"),o=s("99ed"),c=s("113f").KEY,l=s("5cfa"),u=s("20e3"),f=s("2a87"),p=s("6584"),d=s("a4e2"),h=s("0b27"),v=s("57e2"),b=s("e668"),y=s("b5b2"),m=s("a534"),w=s("c5d5"),_=s("3525"),g=s("6d72"),C=s("44fc"),S=s("4453"),k=s("66e0"),O=s("c209"),x=s("ed0a"),N=s("2a35"),E=s("5d02"),P=s("7b86"),j=x.f,F=E.f,J=O.f,I=r.Symbol,T=r.JSON,D=T&&T.stringify,K="prototype",L=d("_hidden"),W=d("toPrimitive"),M={}.propertyIsEnumerable,Y=u("symbol-registry"),$=u("symbols"),q=u("op-symbols"),z=Object[K],A="function"==typeof I&&!!N.f,G=r.QObject,Q=!G||!G[K]||!G[K].findChild,V=n&&l((function(){return 7!=k(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a}))?function(t,e,s){var r=j(z,e);r&&delete z[e],F(t,e,s),r&&t!==z&&F(z,e,r)}:F,B=function(t){var e=$[t]=k(I[K]);return e._k=t,e},H=A&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},R=function(t,e,s){return t===z&&R(q,e,s),m(t),e=C(e,!0),m(s),a($,e)?(s.enumerable?(a(t,L)&&t[L][e]&&(t[L][e]=!1),s=k(s,{enumerable:S(0,!1)})):(a(t,L)||F(t,L,S(1,{})),t[L][e]=!0),V(t,e,s)):F(t,e,s)},U=function(t,e){m(t);var s,r=b(e=g(e)),a=0,n=r.length;while(n>a)R(t,s=r[a++],e[s]);return t},X=function(t,e){return void 0===e?k(t):U(k(t),e)},Z=function(t){var e=M.call(this,t=C(t,!0));return!(this===z&&a($,t)&&!a(q,t))&&(!(e||!a(this,t)||!a($,t)||a(this,L)&&this[L][t])||e)},tt=function(t,e){if(t=g(t),e=C(e,!0),t!==z||!a($,e)||a(q,e)){var s=j(t,e);return!s||!a($,e)||a(t,L)&&t[L][e]||(s.enumerable=!0),s}},et=function(t){var e,s=J(g(t)),r=[],n=0;while(s.length>n)a($,e=s[n++])||e==L||e==c||r.push(e);return r},st=function(t){var e,s=t===z,r=J(s?q:g(t)),n=[],i=0;while(r.length>i)!a($,e=r[i++])||s&&!a(z,e)||n.push($[e]);return n};A||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(s){this===z&&e.call(q,s),a(this,L)&&a(this[L],t)&&(this[L][t]=!1),V(this,t,S(1,s))};return n&&Q&&V(z,t,{configurable:!0,set:e}),B(t)},o(I[K],"toString",(function(){return this._k})),x.f=tt,E.f=R,s("fc84").f=O.f=et,s("dd50").f=Z,N.f=st,n&&!s("2e0f")&&o(z,"propertyIsEnumerable",Z,!0),h.f=function(t){return B(d(t))}),i(i.G+i.W+i.F*!A,{Symbol:I});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),at=0;rt.length>at;)d(rt[at++]);for(var nt=P(d.store),it=0;nt.length>it;)v(nt[it++]);i(i.S+i.F*!A,"Symbol",{for:function(t){return a(Y,t+="")?Y[t]:Y[t]=I(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in Y)if(Y[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),i(i.S+i.F*!A,"Object",{create:X,defineProperty:R,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:st});var ot=l((function(){N.f(1)}));i(i.S+i.F*ot,"Object",{getOwnPropertySymbols:function(t){return N.f(_(t))}}),T&&i(i.S+i.F*(!A||l((function(){var t=I();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}))),"JSON",{stringify:function(t){var e,s,r=[t],a=1;while(arguments.length>a)r.push(arguments[a++]);if(s=e=r[1],(w(e)||void 0!==t)&&!H(t))return y(e)||(e=function(t,e){if("function"==typeof s&&(e=s.call(this,t,e)),!H(e))return e}),r[1]=e,D.apply(T,r)}}),I[K][W]||s("e3a5")(I[K],W,I[K].valueOf),f(I,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},c209:function(t,e,s){var r=s("6d72"),a=s("fc84").f,n={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==n.call(t)?o(t):a(r(t))}},d472:function(t,e,s){var r=s("1cfd"),a=s("5cfa"),n=s("caef"),i=/"/g,o=function(t,e,s,r){var a=String(n(t)),o="<"+e;return""!==s&&(o+=" "+s+'="'+String(r).replace(i,"&quot;")+'"'),o+">"+a+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(o),r(r.P+r.F*a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",s)}},e668:function(t,e,s){var r=s("7b86"),a=s("2a35"),n=s("dd50");t.exports=function(t){var e=r(t),s=a.f;if(s){var i,o=s(t),c=n.f,l=0;while(o.length>l)c.call(t,i=o[l++])&&e.push(i)}return e}},e798:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("h2",{staticClass:"center maincolor"},[t._v("请选择座位")]),s("v-touch",{staticClass:"content",style:"transform: scale("+t.big+")",on:{pinchout:t.pinchout,pinchin:t.pinchin}},[s("div",{staticClass:"wins"},[s("div",{staticClass:"toplab",style:"left:"+t.toplableft+"px"},[s("div",{staticClass:"row lab",staticStyle:{order:"0"}},[s("div",{staticClass:"col lab",staticStyle:{order:"0"}}),t._l(t.seats.data.col,(function(e){return s("div",{key:"lab"+e,staticClass:"col lab",style:"order:"+e,domProps:{textContent:t._s(e)}})})),t._l(t.seprator_collums,(function(t){return s("div",{key:"seprator"+t,staticClass:"col lab seprator",style:"order:"+t})}))],2)]),s("div",{staticClass:"leftlab",style:"top:"+t.leftlabtop+"px"},[s("div",{staticClass:"row"}),t._l(t.seats.data.row,(function(e){return s("div",{key:e,staticClass:"row",style:"order:"+e},[s("div",{staticClass:"col lab",staticStyle:{order:"0"},domProps:{textContent:t._s(e)}})])})),t._l(t.seprator_rows,(function(t){return s("div",{key:"seprator"+t,staticClass:"row seprator",style:"order:"+t})}))],2),s("div",{staticClass:"table",on:{scroll:t.scrolls}},[t._l(t.seats.data.row,(function(e){return s("div",{key:e,staticClass:"row",class:{vip:e>=t.seats.data.vip_row1&&e<=t.seats.data.vip_row2},style:"order:"+e},[t._l(t.seats.data.col,(function(r){return s("div",{key:r,staticClass:"col",class:{vip:r>=t.seats.data.vip_column1&&r<=t.seats.data.vip_column2,check:-1!=t.checks.indexOf(e+"/"+r),mycheck:e+"/"+r===t.set,seprator:"1"!=t.seats.type&&-1==t.seprators.indexOf(e+"/"+r)},style:"order:"+r,attrs:{"data-set":e+"/"+r},on:{click:t.check}})})),t._l(t.seprator_collums,(function(t){return s("div",{key:"seprator"+t,staticClass:"col seprator",style:"order:"+t})}))],2)})),t._l(t.seprator_rows,(function(t){return s("div",{key:"seprator"+t,staticClass:"row seprator",style:"order:"+t})}))],2)])]),t._m(0),s("div",{staticClass:"btns"},[s("cube-button",{attrs:{type:"button",inline:!0},on:{click:t.next}},[t._v("\n      上一步\n    ")]),s("cube-button",{attrs:{type:"button",inline:!0,primary:!0},on:{click:t.next}},[t._v("\n      下一步\n    ")])],1)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shili"},[s("div",{staticClass:"list"},[s("div",{staticClass:"col vip"}),s("span",[t._v("VIP")])]),s("div",{staticClass:"list"},[s("div",{staticClass:"col"}),s("span",[t._v("可选")])]),s("div",{staticClass:"list"},[s("div",{staticClass:"col check"}),s("span",[t._v("不可选")])]),s("div",{staticClass:"list"},[s("div",{staticClass:"col mycheck"}),s("span",[t._v("已选")])])])}],n=(s("4b2c"),s("80a5"),s("a5fd"),s("f011"),s("2718"),s("a1fb"),s("e09c")),i={mixins:[n["a"]],name:"page",data:function(){return{seats:{type:"1",data:{row:0,col:0,step:0,row_collums:"25,32",row_seprator1:12,row_seprator2:0,row_seprator3:0,collum_seprator1:15,collum_seprator2:0,vip_row1:1,vip_row2:3,vip_column1:6,vip_column2:10,sel:"5/2-10,8/2"}},toplableft:0,leftlabtop:0,set:"",big:1}},created:function(){if("1"===this.seats.type)this.seats.data.row=Number(this.seats.data.row_collums.split(",")[0]),this.seats.data.col=Number(this.seats.data.row_collums.split(",")[1]);else if("2"===this.seats.type){var t=this.seats.data.row_collums.split(",");this.seats.data.row=Number(t[0]),this.seats.data.col=Number(t[1])+Number(t[2])*(Number(t[0])-1),this.seats.data.step=Number(t[2])}},computed:{seprator_rows:function(){var t=[];return this.seats.data.row_seprator1&&t.push(this.seats.data.row_seprator1),this.seats.data.row_seprator2&&t.push(this.seats.data.row_seprator2),this.seats.data.row_seprator3&&t.push(this.seats.data.row_seprator3),t},seprator_collums:function(){var t=[];return this.seats.data.collum_seprator1&&t.push(this.seats.data.collum_seprator1),this.seats.data.collum_seprator2&&t.push(this.seats.data.collum_seprator2),t},seprators:function(){var t=[];if("2"===this.seats.type)for(var e=Number(this.seats.data.row_collums.split(",")[1]),s=1;s<=this.seats.data.row;s++){for(var r=0;r<e;r++)t.push("".concat(s,"/").concat(r+(this.seats.data.col-e)/2+1));e+=this.seats.data.step}return t},checks:function(){var t=[],e=this.seats.data.sel.split(/,|，/),s=!0,r=!1,a=void 0;try{for(var n,i=e[Symbol.iterator]();!(s=(n=i.next()).done);s=!0){var o=n.value,c=o.split("-");if(2===c.length)for(var l=Number(c[0].split("/")[1]);l<=Number(c[1]);l++)t.push("".concat(c[0].split("/")[0],"/").concat(l));else t.push(c[0])}}catch(u){r=!0,a=u}finally{try{s||null==i.return||i.return()}finally{if(r)throw a}}return t}},methods:{check:function(t){1===t.target.classList.length&&(this.set=t.target.dataset.set)},scrolls:function(t){this.toplableft=-t.target.scrollLeft,this.leftlabtop=-t.target.scrollTop},pinchout:function(){this.big<=1.1&&(this.big+=.01)},pinchin:function(){this.big>=1&&(this.big-=.01)},next:function(){this.linkTo("/home/0")}}},o=i,c=(s("24ec"),s("3bb1")),l=Object(c["a"])(o,r,a,!1,null,"60fb8ed4",null);e["default"]=l.exports}}]);