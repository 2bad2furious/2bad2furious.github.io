(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9191)}])},9191:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ru}});var n=t(5893),i=t(9444),o=t(7294),a=t(2445),l=t(8495),s=t(6817),c=(0,s.k)((e,{spacing:r,align:t,justify:n})=>({root:{display:"flex",flexDirection:"column",alignItems:t,justifyContent:n,gap:e.fn.size({size:r,sizes:e.spacing})}})),d=t(5396),p=Object.defineProperty,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))m.call(r,t)&&b(e,t,r[t]);if(f)for(var t of f(r))g.call(r,t)&&b(e,t,r[t]);return e},h=(e,r)=>{var t={};for(var n in e)m.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&f)for(var n of f(e))0>r.indexOf(n)&&g.call(e,n)&&(t[n]=e[n]);return t};let u={spacing:"md",align:"stretch",justify:"flex-start"},x=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("Stack",u,e),{spacing:n,className:i,align:a,justify:s,unstyled:p}=t,f=h(t,["spacing","className","align","justify","unstyled"]),{classes:m,cx:g}=c({spacing:n,align:a,justify:s},{name:"Stack",unstyled:p});return o.createElement(d.x,y({className:g(m.root,i),ref:r},f))});x.displayName="@mantine/core/Stack";var O=Object.defineProperty,v=Object.defineProperties,j=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,P=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))z.call(r,t)&&P(e,t,r[t]);if(w)for(var t of w(r))S.call(r,t)&&P(e,t,r[t]);return e},N=(e,r)=>v(e,j(r)),I=(0,s.k)((e,{element:r,weight:t,size:n,inline:i})=>({root:N(k({},e.fn.fontStyles()),{fontFamily:e.headings.fontFamily,fontWeight:t||e.headings.sizes[r].fontWeight||e.headings.fontWeight,fontSize:void 0!==n?n in e.headings.sizes?e.headings.sizes[n].fontSize:n:e.headings.sizes[r].fontSize,lineHeight:i?1:void 0!==n&&n in e.headings.sizes?e.headings.sizes[n].lineHeight:e.headings.sizes[r].lineHeight,margin:0})})),E=t(5117),T=Object.defineProperty,M=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,R=(e,r,t)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,D=(e,r)=>{for(var t in r||(r={}))$.call(r,t)&&R(e,t,r[t]);if(M)for(var t of M(r))L.call(r,t)&&R(e,t,r[t]);return e},C=(e,r)=>{var t={};for(var n in e)$.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&M)for(var n of M(e))0>r.indexOf(n)&&L.call(e,n)&&(t[n]=e[n]);return t};let W={order:1},_=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("Title",W,e),{className:n,order:i,children:a,unstyled:s,size:c,weight:d,inline:p}=t,f=C(t,["className","order","children","unstyled","size","weight","inline"]),{classes:m,cx:g}=I({element:`h${i}`,weight:d,size:c,inline:p},{name:"Title",unstyled:s});return[1,2,3,4,5,6].includes(i)?o.createElement(E.x,D({component:`h${i}`,ref:r,className:g(m.root,n)},f),a):null});_.displayName="@mantine/core/Title";var H=t(6772),F=t(8427),B=Object.defineProperty,Z=Object.defineProperties,A=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,Q=(e,r,t)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Y=(e,r)=>{for(var t in r||(r={}))X.call(r,t)&&Q(e,t,r[t]);if(J)for(var t of J(r))K.call(r,t)&&Q(e,t,r[t]);return e},q=(e,r)=>Z(e,A(r));let G={xs:{fontSize:9,height:16},sm:{fontSize:10,height:18},md:{fontSize:11,height:20},lg:{fontSize:13,height:26},xl:{fontSize:16,height:32}},U={xs:4,sm:4,md:6,lg:8,xl:10};var V=(0,s.k)((e,{color:r,size:t,radius:n,gradient:i,fullWidth:o,variant:a})=>{let{fontSize:l,height:s}=t in G?G[t]:G.md;return{leftSection:{marginRight:`calc(${e.spacing.xs}px / 2)`},rightSection:{marginLeft:`calc(${e.spacing.xs}px / 2)`},inner:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},root:Y(q(Y(Y({},e.fn.focusStyles()),e.fn.fontStyles()),{fontSize:l,height:s,WebkitTapHighlightColor:"transparent",lineHeight:`${s-2}px`,textDecoration:"none",padding:`0 ${e.fn.size({size:t,sizes:e.spacing})/1.5}px`,boxSizing:"border-box",display:o?"flex":"inline-flex",alignItems:"center",justifyContent:"center",width:o?"100%":"auto",textTransform:"uppercase",borderRadius:e.fn.radius(n),fontWeight:700,letterSpacing:.25,cursor:"inherit",textOverflow:"ellipsis",overflow:"hidden"}),function({theme:e,variant:r,color:t,size:n,gradient:i}){if("dot"===r){let r=e.fn.size({size:n,sizes:U});return{backgroundColor:"transparent",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],border:`1px solid ${"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[3]}`,paddingLeft:e.fn.size({size:n,sizes:e.spacing})/1.5-r/2,"&::before":{content:'""',display:"block",width:r,height:r,borderRadius:r,backgroundColor:e.fn.themeColor(t,"dark"===e.colorScheme?4:e.fn.primaryShade("light"),!0),marginRight:r}}}let o=e.fn.variant({color:t,variant:r,gradient:i});return{background:o.background,color:o.color,border:`${"gradient"===r?0:1}px solid ${o.border}`}}({theme:e,variant:a,color:r,size:t,gradient:i}))}}),ee=Object.defineProperty,er=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,ei=(e,r,t)=>r in e?ee(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eo=(e,r)=>{for(var t in r||(r={}))et.call(r,t)&&ei(e,t,r[t]);if(er)for(var t of er(r))en.call(r,t)&&ei(e,t,r[t]);return e},ea=(e,r)=>{var t={};for(var n in e)et.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&er)for(var n of er(e))0>r.indexOf(n)&&en.call(e,n)&&(t[n]=e[n]);return t};let el={variant:"light",size:"md",radius:"xl"},es=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("Badge",el,e),{className:n,color:i,variant:a,fullWidth:s,children:c,size:p,leftSection:f,rightSection:m,radius:g,gradient:b,classNames:y,styles:h,unstyled:u}=t,x=ea(t,["className","color","variant","fullWidth","children","size","leftSection","rightSection","radius","gradient","classNames","styles","unstyled"]),{classes:O,cx:v}=V({size:p,fullWidth:s,color:i,radius:g,variant:a,gradient:b},{classNames:y,styles:h,name:"Badge",unstyled:u});return o.createElement(d.x,eo({className:v(O.root,n),ref:r},x),f&&o.createElement("span",{className:O.leftSection},f),o.createElement("span",{className:O.inner},c),m&&o.createElement("span",{className:O.rightSection},m))});es.displayName="@mantine/core/Badge";let ec=(0,F.F)(es),ed={xs:1,sm:2,md:3,lg:4,xl:5};function ep(e,r){let t=e.fn.variant({variant:"outline",color:r}).border;return"string"==typeof r&&(r in e.colors||r.split(".")[0]in e.colors)?t:void 0===r?"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]:r}var ef=(0,s.k)((e,{size:r,variant:t,color:n})=>({root:{},withLabel:{borderTop:"0 !important"},left:{"&::before":{display:"none"}},right:{"&::after":{display:"none"}},label:{display:"flex",alignItems:"center","&::before":{content:'""',flex:1,height:1,borderTop:`${e.fn.size({size:r,sizes:ed})}px ${t} ${ep(e,n)}`,marginRight:e.spacing.xs},"&::after":{content:'""',flex:1,borderTop:`${e.fn.size({size:r,sizes:ed})}px ${t} ${ep(e,n)}`,marginLeft:e.spacing.xs}},labelDefaultStyles:{color:"dark"===n?e.colors.dark[1]:e.fn.themeColor(n,"dark"===e.colorScheme?5:e.fn.primaryShade(),!1)},horizontal:{border:0,borderTopWidth:e.fn.size({size:r,sizes:ed}),borderTopColor:ep(e,n),borderTopStyle:t,margin:0},vertical:{border:0,alignSelf:"stretch",height:"auto",borderLeftWidth:e.fn.size({size:r,sizes:ed}),borderLeftColor:ep(e,n),borderLeftStyle:t}})),em=Object.defineProperty,eg=Object.defineProperties,eb=Object.getOwnPropertyDescriptors,ey=Object.getOwnPropertySymbols,eh=Object.prototype.hasOwnProperty,eu=Object.prototype.propertyIsEnumerable,ex=(e,r,t)=>r in e?em(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eO=(e,r)=>{for(var t in r||(r={}))eh.call(r,t)&&ex(e,t,r[t]);if(ey)for(var t of ey(r))eu.call(r,t)&&ex(e,t,r[t]);return e},ev=(e,r)=>eg(e,eb(r)),ej=(e,r)=>{var t={};for(var n in e)eh.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&ey)for(var n of ey(e))0>r.indexOf(n)&&eu.call(e,n)&&(t[n]=e[n]);return t};let ew={orientation:"horizontal",size:"xs",labelPosition:"left",variant:"solid"},ez=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("Divider",ew,e),{className:n,color:i,orientation:a,size:s,label:c,labelPosition:p,labelProps:f,variant:m,styles:g,classNames:b,unstyled:y}=t,h=ej(t,["className","color","orientation","size","label","labelPosition","labelProps","variant","styles","classNames","unstyled"]),{classes:u,cx:x}=ef({color:i,size:s,variant:m},{classNames:b,styles:g,unstyled:y,name:"Divider"}),O="horizontal"===a,v=!!c&&O,j=!(null==f?void 0:f.color);return o.createElement(d.x,eO({ref:r,className:x(u.root,{[u.vertical]:"vertical"===a,[u.horizontal]:O,[u.withLabel]:v},n),role:"separator"},h),v&&o.createElement(E.x,ev(eO({},f),{size:(null==f?void 0:f.size)||"xs",sx:{marginTop:2},className:x(u.label,u[p],{[u.labelDefaultStyles]:j})}),c))});ez.displayName="@mantine/core/Divider";var eS=t(8216);let[eP,ek]=(0,eS.R)("List component was not found in tree");var eN=(0,s.k)((e,{spacing:r,center:t},n)=>({itemWrapper:{ref:n("itemWrapper"),display:"inline-flex",flexDirection:"column",whiteSpace:"normal"},item:{whiteSpace:"nowrap",lineHeight:t?1:e.lineHeight,"&:not(:first-of-type)":{marginTop:e.fn.size({size:r,sizes:e.spacing})}},withIcon:{listStyle:"none",[`& .${n("itemWrapper")}`]:{display:"inline-flex",alignItems:t?"center":"flex-start",flexDirection:"row"}},itemIcon:{display:"inline-block",verticalAlign:"middle",marginRight:e.spacing.sm}})),eI=Object.defineProperty,eE=Object.getOwnPropertySymbols,eT=Object.prototype.hasOwnProperty,eM=Object.prototype.propertyIsEnumerable,e$=(e,r,t)=>r in e?eI(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eL=(e,r)=>{for(var t in r||(r={}))eT.call(r,t)&&e$(e,t,r[t]);if(eE)for(var t of eE(r))eM.call(r,t)&&e$(e,t,r[t]);return e},eR=(e,r)=>{var t={};for(var n in e)eT.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&eE)for(var n of eE(e))0>r.indexOf(n)&&eM.call(e,n)&&(t[n]=e[n]);return t};let eD={},eC=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("ListItem",eD,e),{className:n,children:i,icon:a}=t,s=eR(t,["className","children","icon"]),{icon:c,spacing:p,center:f,listStyleType:m,size:g,withPadding:b,classNames:y,styles:h,unstyled:u}=ek(),x=a||c,{classes:O,cx:v}=eN({withPadding:b,size:g,listStyleType:m,center:f,spacing:p},{classNames:y,styles:h,unstyled:u,name:"List"});return o.createElement(d.x,eL({component:"li",className:v(O.item,{[O.withIcon]:x},n),ref:r},s),o.createElement("div",{className:O.itemWrapper},x&&o.createElement("span",{className:O.itemIcon},x),o.createElement("span",null,i)))});eC.displayName="@mantine/core/ListItem";var eW=Object.defineProperty,e_=Object.defineProperties,eH=Object.getOwnPropertyDescriptors,eF=Object.getOwnPropertySymbols,eB=Object.prototype.hasOwnProperty,eZ=Object.prototype.propertyIsEnumerable,eA=(e,r,t)=>r in e?eW(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eJ=(e,r)=>{for(var t in r||(r={}))eB.call(r,t)&&eA(e,t,r[t]);if(eF)for(var t of eF(r))eZ.call(r,t)&&eA(e,t,r[t]);return e},eX=(e,r)=>e_(e,eH(r)),eK=(0,s.k)((e,{withPadding:r,size:t,listStyleType:n})=>({root:eX(eJ({},e.fn.fontStyles()),{listStyleType:n,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,fontSize:e.fn.size({size:t,sizes:e.fontSizes}),lineHeight:e.lineHeight,margin:0,paddingLeft:r?e.spacing.xl:0,listStylePosition:"inside"})})),eQ=Object.defineProperty,eY=Object.getOwnPropertySymbols,eq=Object.prototype.hasOwnProperty,eG=Object.prototype.propertyIsEnumerable,eU=(e,r,t)=>r in e?eQ(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eV=(e,r)=>{for(var t in r||(r={}))eq.call(r,t)&&eU(e,t,r[t]);if(eY)for(var t of eY(r))eG.call(r,t)&&eU(e,t,r[t]);return e},e0=(e,r)=>{var t={};for(var n in e)eq.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&eY)for(var n of eY(e))0>r.indexOf(n)&&eG.call(e,n)&&(t[n]=e[n]);return t};let e1={type:"unordered",size:"md",spacing:0},e2=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("List",e1,e),{children:n,type:i,size:a,listStyleType:s,withPadding:c,center:p,spacing:f,icon:m,className:g,styles:b,classNames:y,unstyled:h}=t,u=e0(t,["children","type","size","listStyleType","withPadding","center","spacing","icon","className","styles","classNames","unstyled"]),{classes:x,cx:O}=eK({withPadding:c,size:a,listStyleType:s,center:p,spacing:f},{classNames:y,styles:b,name:"List",unstyled:h});return o.createElement(eP,{value:{spacing:f,center:p,icon:m,listStyleType:s,size:a,withPadding:c,classNames:y,styles:b,unstyled:h}},o.createElement(d.x,eV({component:"unordered"===i?"ul":"ol",className:O(x.root,g),ref:r},u),n))});e2.Item=eC,e2.displayName="@mantine/core/List";var e4=Object.defineProperty,e9=Object.defineProperties,e5=Object.getOwnPropertyDescriptors,e3=Object.getOwnPropertySymbols,e8=Object.prototype.hasOwnProperty,e6=Object.prototype.propertyIsEnumerable,e7=(e,r,t)=>r in e?e4(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,re=(e,r)=>{for(var t in r||(r={}))e8.call(r,t)&&e7(e,t,r[t]);if(e3)for(var t of e3(r))e6.call(r,t)&&e7(e,t,r[t]);return e},rr=(e,r)=>e9(e,e5(r));let rt={xs:16,sm:20,md:26,lg:32,xl:40};var rn=(0,s.k)((e,{color:r,size:t,radius:n,gradient:i,variant:o})=>{let a=e.fn.variant({variant:o,color:r||e.primaryColor,gradient:i,primaryFallback:!1}),l=e.fn.size({size:t,sizes:rt});return{root:rr(re({},e.fn.fontStyles()),{display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:l,height:l,minWidth:l,minHeight:l,borderRadius:e.fn.radius(n),backgroundColor:a.background,color:a.color,backgroundImage:"gradient"===o?a.background:void 0,border:`${"gradient"===o?0:1}px solid ${a.border}`})}}),ri=Object.defineProperty,ro=Object.getOwnPropertySymbols,ra=Object.prototype.hasOwnProperty,rl=Object.prototype.propertyIsEnumerable,rs=(e,r,t)=>r in e?ri(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,rc=(e,r)=>{for(var t in r||(r={}))ra.call(r,t)&&rs(e,t,r[t]);if(ro)for(var t of ro(r))rl.call(r,t)&&rs(e,t,r[t]);return e},rd=(e,r)=>{var t={};for(var n in e)ra.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&ro)for(var n of ro(e))0>r.indexOf(n)&&rl.call(e,n)&&(t[n]=e[n]);return t};let rp={size:"md",variant:"filled"},rf=(0,o.forwardRef)((e,r)=>{let t=(0,l.N4)("ThemeIcon",rp,e),{className:n,size:i,radius:a,variant:s,color:c,children:p,gradient:f,unstyled:m}=t,g=rd(t,["className","size","radius","variant","color","children","gradient","unstyled"]),{classes:b,cx:y}=rn({variant:s,radius:a,color:c,size:i,gradient:f},{name:"ThemeIcon",unstyled:m});return o.createElement(d.x,rc({className:y(b.root,n),ref:r},g),p)});rf.displayName="@mantine/core/ThemeIcon";var rm=t(853),rg=(0,rm.Z)("mood-smile-dizzy","IconMoodSmileDizzy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M14.5 15a3.5 3.5 0 0 1 -5 0",key:"svg-1"}],["path",{d:"M8 9l2 2",key:"svg-2"}],["path",{d:"M10 9l-2 2",key:"svg-3"}],["path",{d:"M14 9l2 2",key:"svg-4"}],["path",{d:"M16 9l-2 2",key:"svg-5"}]]),rb=(0,rm.Z)("mood-smile","IconMoodSmile",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 10l.01 0",key:"svg-1"}],["path",{d:"M15 10l.01 0",key:"svg-2"}],["path",{d:"M9.5 15a3.5 3.5 0 0 0 5 0",key:"svg-3"}]]),ry=t(129);let rh=e=>{let{children:r,header:t,size:i="lg",spacing:o,align:l="start",contentPl:s="sm"}=e;return(0,n.jsx)(a.W,{size:i,children:(0,n.jsxs)(x,{align:l,w:"100%",spacing:o,children:[t,(0,n.jsx)(d.x,{pl:s,children:r})]})})};function ru(){var e;e="Martin Macura",(0,ry.Y)(()=>{"string"==typeof e&&e.trim().length>0&&(document.title=e.trim())},[e]);let r=(0,l.rZ)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(i._,{children:[(0,n.jsx)(rh,{spacing:0,align:"stretch",contentPl:0,header:(0,n.jsx)(_,{align:"center",size:"xxx-large",mt:"lg",mb:"sm",order:1,children:"Martin Macura"}),children:(0,n.jsxs)(H.k,{gap:"md",justify:"center",children:[(0,n.jsx)(ec,{children:"Fullstack web dev"}),(0,n.jsx)(ec,{children:"Teacher"}),(0,n.jsx)(ec,{children:"Student"})]})}),(0,n.jsx)(ez,{my:"lg"}),(0,n.jsx)(rh,{header:(0,n.jsx)(_,{order:2,children:"Technologies"}),children:(0,n.jsxs)(e2,{icon:(0,n.jsx)(rf,{color:"teal",size:"xl",radius:"xl",children:(0,n.jsx)(rg,{size:40})}),styles:{itemWrapper:{alignItems:"center!important"},itemIcon:{lineHeight:1}},children:[(0,n.jsx)(e2.Item,{children:"Kotlin, Java, Spring"}),(0,n.jsx)(e2.Item,{children:"JavaScript, Typescript, Angular"}),(0,n.jsx)(e2.Item,{children:"MySQL, MariaDB"}),(0,n.jsx)(e2.Item,{icon:(0,n.jsx)(rf,{color:"cyan",size:"xl",radius:"xl",children:(0,n.jsx)(rb,{size:40})}),children:"React, Next, TRPC"})]})}),(0,n.jsx)(ez,{my:"lg"}),(0,n.jsx)(rh,{contentPl:0,header:(0,n.jsx)(_,{order:2,children:"Plans"}),children:(0,n.jsx)(E.x,{sx:{textIndent:r.spacing.md},children:"I'd like to continue teaching up-and-coming programmers, build tools to simplify teaching for others and continue learning and coming up with new approaches."})})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);