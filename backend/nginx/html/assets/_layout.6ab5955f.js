import{S as k,i as v,s as $,w as A,e as d,a as b,b as u,c as p,x as S,y as j,z as q,A as w,B as z,f as h,j as B,g as C,u as L,t as D,d as _}from"./index.d118c188.js";function g(r,s,c){const l=r.slice();return l[3]=s[c],l[5]=c,l}function y(r){let s,c,l,i,t;return{c(){s=d("a"),c=d("div"),l=D(r[5]),i=b(),u(c,"class","content"),u(s,"class","card"),u(s,"href",t=r[0]("./:key",{key:r[5]}))},m(n,o){p(n,s,o),_(s,c),_(c,l),_(s,i)},p(n,o){o&1&&t!==(t=n[0]("./:key",{key:n[5]}))&&u(s,"href",t)},d(n){n&&h(s)}}}function E(r){let s,c,l,i=Array(12),t=[];for(let e=0;e<i.length;e+=1)t[e]=y(g(r,i,e));const n=r[2].default,o=A(n,r,r[1],null);return{c(){s=d("div");for(let e=0;e<t.length;e+=1)t[e].c();c=b(),o&&o.c(),u(s,"class","cards")},m(e,f){p(e,s,f);for(let a=0;a<t.length;a+=1)t[a].m(s,null);p(e,c,f),o&&o.m(e,f),l=!0},p(e,[f]){if(f&1){i=Array(12);let a;for(a=0;a<i.length;a+=1){const m=g(e,i,a);t[a]?t[a].p(m,f):(t[a]=y(m),t[a].c(),t[a].m(s,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=i.length}o&&o.p&&(!l||f&2)&&S(o,n,e,e[1],l?q(n,e[1],f,null):j(e[1]),null)},i(e){l||(w(o,e),l=!0)},o(e){z(o,e),l=!1},d(e){e&&h(s),B(t,e),e&&h(c),o&&o.d(e)}}}function F(r,s,c){let l;C(r,L,n=>c(0,l=n));let{$$slots:i={},$$scope:t}=s;return r.$$set=n=>{"$$scope"in n&&c(1,t=n.$$scope)},[l,t,i]}class H extends k{constructor(s){super(),v(this,s,F,E,$,{})}}export{H as default};