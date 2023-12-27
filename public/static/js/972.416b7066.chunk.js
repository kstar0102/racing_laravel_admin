"use strict";(self.webpackChunkreact_typscript_racing_site_frontend=self.webpackChunkreact_typscript_racing_site_frontend||[]).push([[972],{834:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(4578),l=n(8219),i=n(4517),c=n(2766),o=n(8182),s=n(2791),d=n(5831),p=n(7826),u=n(6755),m=n(6246),h=n(1126),v=n(2836),Z=n(6303);function f(e){var t=e.children,n=e.className,r=e.content,l=e.hidden,i=e.visible,c=(0,o.Z)((0,p.lG)(i,"visible"),(0,p.lG)(l,"hidden"),"content",n),h=(0,u.Z)(f,e),v=(0,m.Z)(f,e);return s.createElement(v,(0,a.Z)({},h,{className:c}),d.kK(t)?r:t)}f.handledProps=["as","children","className","content","hidden","visible"],f.propTypes={};const b=f;var G=n(4210);function y(e){var t=e.attached,n=e.basic,r=e.buttons,l=e.children,c=e.className,h=e.color,v=e.compact,Z=e.content,f=e.floated,b=e.fluid,k=e.icon,N=e.inverted,g=e.labeled,C=e.negative,K=e.positive,P=e.primary,T=e.secondary,I=e.size,x=e.toggle,A=e.vertical,z=e.widths,_=(0,o.Z)("ui",h,I,(0,p.lG)(n,"basic"),(0,p.lG)(v,"compact"),(0,p.lG)(b,"fluid"),(0,p.lG)(k,"icon"),(0,p.lG)(N,"inverted"),(0,p.lG)(g,"labeled"),(0,p.lG)(C,"negative"),(0,p.lG)(K,"positive"),(0,p.lG)(P,"primary"),(0,p.lG)(T,"secondary"),(0,p.lG)(x,"toggle"),(0,p.lG)(A,"vertical"),(0,p.sU)(t,"attached"),(0,p.cD)(f,"floated"),(0,p.H0)(z),"buttons",c),w=(0,u.Z)(y,e),R=(0,m.Z)(y,e);return(0,i.Z)(r)?s.createElement(R,(0,a.Z)({},w,{className:_}),d.kK(l)?Z:l):s.createElement(R,(0,a.Z)({},w,{className:_}),(0,G.Z)(r,(function(e){return E.create(e)})))}y.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],y.propTypes={};const k=y;function N(e){var t=e.className,n=e.text,r=(0,o.Z)("or",t),l=(0,u.Z)(N,e),i=(0,m.Z)(N,e);return s.createElement(i,(0,a.Z)({},l,{className:r,"data-text":n}))}N.handledProps=["as","className","text"],N.propTypes={};const g=N;var C=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).ref=(0,s.createRef)(),t.computeElementType=function(){var e=t.props,n=e.attached,a=e.label;if(!(0,i.Z)(n)||!(0,i.Z)(a))return"div"},t.computeTabIndex=function(e){var n=t.props,a=n.disabled,r=n.tabIndex;return(0,i.Z)(r)?a?-1:"div"===e?0:void 0:r},t.focus=function(e){return(0,l.Z)(t.ref.current,"focus",e)},t.handleClick=function(e){t.props.disabled?e.preventDefault():(0,l.Z)(t.props,"onClick",e,t.props)},t.hasIconClass=function(){var e=t.props,n=e.labelPosition,a=e.children,r=e.content,l=e.icon;return!0===l||l&&(n||d.kK(a)&&(0,i.Z)(r))},t}(0,r.Z)(t,e);var n=t.prototype;return n.computeButtonAriaRole=function(e){var t=this.props.role;return(0,i.Z)(t)?"button"!==e?"button":void 0:t},n.render=function(){var e=this.props,n=e.active,r=e.animated,l=e.attached,h=e.basic,f=e.children,b=e.circular,G=e.className,y=e.color,k=e.compact,N=e.content,g=e.disabled,C=e.floated,E=e.fluid,K=e.icon,P=e.inverted,T=e.label,I=e.labelPosition,x=e.loading,A=e.negative,z=e.positive,_=e.primary,w=e.secondary,R=e.size,D=e.toggle,O=e.type,U=(0,o.Z)(y,R,(0,p.lG)(n,"active"),(0,p.lG)(h,"basic"),(0,p.lG)(b,"circular"),(0,p.lG)(k,"compact"),(0,p.lG)(E,"fluid"),(0,p.lG)(this.hasIconClass(),"icon"),(0,p.lG)(P,"inverted"),(0,p.lG)(x,"loading"),(0,p.lG)(A,"negative"),(0,p.lG)(z,"positive"),(0,p.lG)(_,"primary"),(0,p.lG)(w,"secondary"),(0,p.lG)(D,"toggle"),(0,p.sU)(r,"animated"),(0,p.sU)(l,"attached")),B=(0,o.Z)((0,p.sU)(I||!!T,"labeled")),H=(0,o.Z)((0,p.lG)(g,"disabled"),(0,p.cD)(C,"floated")),L=(0,u.Z)(t,this.props),V=(0,m.Z)(t,this.props,this.computeElementType),j=this.computeTabIndex(V);if(!(0,i.Z)(T)){var q=(0,o.Z)("ui",U,"button",G),F=(0,o.Z)("ui",B,"button",G,H),J=Z.Z.create(T,{defaultProps:{basic:!0,pointing:"left"===I?"right":"left"},autoGenerateKey:!1});return s.createElement(V,(0,a.Z)({},L,{className:F,onClick:this.handleClick}),"left"===I&&J,s.createElement(c.R,{innerRef:this.ref},s.createElement("button",{className:q,"aria-pressed":D?!!n:void 0,disabled:g,type:O,tabIndex:j},v.Z.create(K,{autoGenerateKey:!1})," ",N)),("right"===I||!I)&&J)}var M=(0,o.Z)("ui",U,H,B,"button",G),Q=!d.kK(f),S=this.computeButtonAriaRole(V);return s.createElement(c.R,{innerRef:this.ref},s.createElement(V,(0,a.Z)({},L,{className:M,"aria-pressed":D?!!n:void 0,disabled:g&&"button"===V||void 0,onClick:this.handleClick,role:S,type:O,tabIndex:j}),Q&&f,!Q&&v.Z.create(K,{autoGenerateKey:!1}),!Q&&N))},t}(s.Component);C.handledProps=["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle","type"],C.propTypes={},C.defaultProps={as:"button"},C.Content=b,C.Group=k,C.Or=g,C.create=(0,h.u5)(C,(function(e){return{content:e}}));const E=C},3825:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),r=n(4578),l=n(4210),i=n(8219),c=n(8182),o=n(2791),s=n(7826),d=n(6755),p=n(6246),u=n(5831),m=n(1126);function h(e){var t=e.children,n=e.className,r=e.content,l=(0,c.Z)(n,"description"),i=(0,d.Z)(h,e),s=(0,p.Z)(h,e);return o.createElement(s,(0,a.Z)({},i,{className:l}),u.kK(t)?r:t)}h.handledProps=["as","children","className","content"],h.propTypes={},h.create=(0,m.u5)(h,(function(e){return{content:e}}));const v=h;function Z(e){var t=e.children,n=e.className,r=e.content,l=(0,c.Z)("header",n),i=(0,d.Z)(Z,e),s=(0,p.Z)(Z,e);return o.createElement(s,(0,a.Z)({},i,{className:l}),u.kK(t)?r:t)}Z.handledProps=["as","children","className","content"],Z.propTypes={},Z.create=(0,m.u5)(Z,(function(e){return{content:e}}));const f=Z;function b(e){var t=e.children,n=e.className,r=e.content,l=e.description,i=e.floated,m=e.header,h=e.verticalAlign,Z=(0,c.Z)((0,s.cD)(i,"floated"),(0,s.Ok)(h),"content",n),G=(0,d.Z)(b,e),y=(0,p.Z)(b,e);return u.kK(t)?o.createElement(y,(0,a.Z)({},G,{className:Z}),f.create(m),v.create(l),r):o.createElement(y,(0,a.Z)({},G,{className:Z}),t)}b.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],b.propTypes={},b.create=(0,m.u5)(b,(function(e){return{content:e}}));const G=b;var y=n(2836);function k(e){var t=e.className,n=e.verticalAlign,r=(0,c.Z)((0,s.Ok)(n),t),l=(0,d.Z)(k,e);return o.createElement(y.Z,(0,a.Z)({},l,{className:r}))}k.handledProps=["className","verticalAlign"],k.propTypes={},k.create=(0,m.u5)(k,(function(e){return{name:e}}));const N=k;var g=n(6759),C=n(992),E=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){t.props.disabled||(0,i.Z)(t.props,"onClick",e,t.props)},t}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,r=e.children,l=e.className,i=e.content,m=e.description,h=e.disabled,Z=e.header,b=e.icon,y=e.image,k=e.value,E=(0,p.Z)(t,this.props),K=(0,c.Z)((0,s.lG)(n,"active"),(0,s.lG)(h,"disabled"),(0,s.lG)("li"!==E,"item"),l),P=(0,d.Z)(t,this.props),T="li"===E?{value:k}:{"data-value":k};if(!u.kK(r))return o.createElement(E,(0,a.Z)({},T,{role:"listitem",className:K,onClick:this.handleClick},P),r);var I=N.create(b,{autoGenerateKey:!1}),x=C.Z.create(y,{autoGenerateKey:!1});if(!(0,o.isValidElement)(i)&&(0,g.Z)(i))return o.createElement(E,(0,a.Z)({},T,{role:"listitem",className:K,onClick:this.handleClick},P),I||x,G.create(i,{autoGenerateKey:!1,defaultProps:{header:Z,description:m}}));var A=f.create(Z,{autoGenerateKey:!1}),z=v.create(m,{autoGenerateKey:!1});return I||x?o.createElement(E,(0,a.Z)({},T,{role:"listitem",className:K,onClick:this.handleClick},P),I||x,(i||A||z)&&o.createElement(G,null,A,z,i)):o.createElement(E,(0,a.Z)({},T,{role:"listitem",className:K,onClick:this.handleClick},P),A,z,i)},t}(o.Component);E.handledProps=["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"],E.propTypes={},E.create=(0,m.u5)(E,(function(e){return{content:e}}));const K=E;function P(e){var t=e.children,n=e.className,r=e.content,l=(0,d.Z)(P,e),i=(0,p.Z)(P,e),m=(0,c.Z)((0,s.lG)("ul"!==i&&"ol"!==i,"list"),n);return o.createElement(i,(0,a.Z)({},l,{className:m}),u.kK(t)?r:t)}P.handledProps=["as","children","className","content"],P.propTypes={};const T=P;var I=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleItemOverrides=function(e){return{onClick:function(n,a){(0,i.Z)(e,"onClick",n,a),(0,i.Z)(t.props,"onItemClick",n,a)}}},t}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this,n=this.props,r=n.animated,i=n.bulleted,m=n.celled,h=n.children,v=n.className,Z=n.content,f=n.divided,b=n.floated,G=n.horizontal,y=n.inverted,k=n.items,N=n.link,g=n.ordered,C=n.relaxed,E=n.selection,P=n.size,T=n.verticalAlign,I=(0,c.Z)("ui",P,(0,s.lG)(r,"animated"),(0,s.lG)(i,"bulleted"),(0,s.lG)(m,"celled"),(0,s.lG)(f,"divided"),(0,s.lG)(G,"horizontal"),(0,s.lG)(y,"inverted"),(0,s.lG)(N,"link"),(0,s.lG)(g,"ordered"),(0,s.lG)(E,"selection"),(0,s.sU)(C,"relaxed"),(0,s.cD)(b,"floated"),(0,s.Ok)(T),"list",v),x=(0,d.Z)(t,this.props),A=(0,p.Z)(t,this.props);return u.kK(h)?u.kK(Z)?o.createElement(A,(0,a.Z)({role:"list",className:I},x),(0,l.Z)(k,(function(t){return K.create(t,{overrideProps:e.handleItemOverrides})}))):o.createElement(A,(0,a.Z)({role:"list",className:I},x),Z):o.createElement(A,(0,a.Z)({role:"list",className:I},x),h)},t}(o.Component);I.handledProps=["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"],I.propTypes={},I.Content=G,I.Description=v,I.Header=f,I.Icon=N,I.Item=K,I.List=T;const x=I}}]);
//# sourceMappingURL=972.416b7066.chunk.js.map