	var themeSettings = {
		'logoAnimated' 	: true,
		'logoHover'		: true,
		'twitter'		: {
			'active'		: true,
			'username'		: 'ermarkstudio'
			}
	};
	
		
	/*** jQuery Cufon Plugin  -  ver 1.09 ***/
	var Cufon=(function(){var m=function(){return m.replace.apply(null,arguments)};var x=m.DOM={ready:(function(){var C=false,E={loaded:1,complete:1};var B=[],D=function(){if(C){return}C=true;for(var F;F=B.shift();F()){}};if(document.addEventListener){document.addEventListener("DOMContentLoaded",D,false);window.addEventListener("pageshow",D,false)}if(!window.opera&&document.readyState){(function(){E[document.readyState]?D():setTimeout(arguments.callee,10)})()}if(document.readyState&&document.createStyleSheet){(function(){try{document.body.doScroll("left");D()}catch(F){setTimeout(arguments.callee,1)}})()}q(window,"load",D);return function(F){if(!arguments.length){D()}else{C?F():B.push(F)}}})(),root:function(){return document.documentElement||document.body}};var n=m.CSS={Size:function(C,B){this.value=parseFloat(C);this.unit=String(C).match(/[a-z%]*$/)[0]||"px";this.convert=function(D){return D/B*this.value};this.convertFrom=function(D){return D/this.value*B};this.toString=function(){return this.value+this.unit}},addClass:function(C,B){var D=C.className;C.className=D+(D&&" ")+B;return C},color:j(function(C){var B={};B.color=C.replace(/^rgba\((.*?),\s*([\d.]+)\)/,function(E,D,F){B.opacity=parseFloat(F);return"rgb("+D+")"});return B}),fontStretch:j(function(B){if(typeof B=="number"){return B}if(/%$/.test(B)){return parseFloat(B)/100}return{"ultra-condensed":0.5,"extra-condensed":0.625,condensed:0.75,"semi-condensed":0.875,"semi-expanded":1.125,expanded:1.25,"extra-expanded":1.5,"ultra-expanded":2}[B]||1}),getStyle:function(C){var B=document.defaultView;if(B&&B.getComputedStyle){return new a(B.getComputedStyle(C,null))}if(C.currentStyle){return new a(C.currentStyle)}return new a(C.style)},gradient:j(function(F){var G={id:F,type:F.match(/^-([a-z]+)-gradient\(/)[1],stops:[]},C=F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);for(var E=0,B=C.length,D;E<B;++E){D=C[E].split("=",2).reverse();G.stops.push([D[1]||E/(B-1),D[0]])}return G}),quotedList:j(function(E){var D=[],C=/\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,B;while(B=C.exec(E)){D.push(B[3]||B[1])}return D}),recognizesMedia:j(function(G){var E=document.createElement("style"),D,C,B;E.type="text/css";E.media=G;try{E.appendChild(document.createTextNode("/**/"))}catch(F){}C=g("head")[0];C.insertBefore(E,C.firstChild);D=(E.sheet||E.styleSheet);B=D&&!D.disabled;C.removeChild(E);return B}),removeClass:function(D,C){var B=RegExp("(?:^|\\s+)"+C+"(?=\\s|$)","g");D.className=D.className.replace(B,"");return D},supports:function(D,C){var B=document.createElement("span").style;if(B[D]===undefined){return false}B[D]=C;return B[D]===C},textAlign:function(E,D,B,C){if(D.get("textAlign")=="right"){if(B>0){E=" "+E}}else{if(B<C-1){E+=" "}}return E},textShadow:j(function(F){if(F=="none"){return null}var E=[],G={},B,C=0;var D=/(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;while(B=D.exec(F)){if(B[0]==","){E.push(G);G={};C=0}else{if(B[1]){G.color=B[1]}else{G[["offX","offY","blur"][C++]]=B[2]}}}E.push(G);return E}),textTransform:(function(){var B={uppercase:function(C){return C.toUpperCase()},lowercase:function(C){return C.toLowerCase()},capitalize:function(C){return C.replace(/\b./g,function(D){return D.toUpperCase()})}};return function(E,D){var C=B[D.get("textTransform")];return C?C(E):E}})(),whiteSpace:(function(){var D={inline:1,"inline-block":1,"run-in":1};var C=/^\s+/,B=/\s+$/;return function(H,F,G,E){if(E){if(E.nodeName.toLowerCase()=="br"){H=H.replace(C,"")}}if(D[F.get("display")]){return H}if(!G.previousSibling){H=H.replace(C,"")}if(!G.nextSibling){H=H.replace(B,"")}return H}})()};n.ready=(function(){var B=!n.recognizesMedia("all"),E=false;var D=[],H=function(){B=true;for(var K;K=D.shift();K()){}};var I=g("link"),J=g("style");function C(K){return K.disabled||G(K.sheet,K.media||"screen")}function G(M,P){if(!n.recognizesMedia(P||"all")){return true}if(!M||M.disabled){return false}try{var Q=M.cssRules,O;if(Q){search:for(var L=0,K=Q.length;O=Q[L],L<K;++L){switch(O.type){case 2:break;case 3:if(!G(O.styleSheet,O.media.mediaText)){return false}break;default:break search}}}}catch(N){}return true}function F(){if(document.createStyleSheet){return true}var L,K;for(K=0;L=I[K];++K){if(L.rel.toLowerCase()=="stylesheet"&&!C(L)){return false}}for(K=0;L=J[K];++K){if(!C(L)){return false}}return true}x.ready(function(){if(!E){E=n.getStyle(document.body).isUsable()}if(B||(E&&F())){H()}else{setTimeout(arguments.callee,10)}});return function(K){if(B){K()}else{D.push(K)}}})();function s(D){var C=this.face=D.face,B={"\u0020":1,"\u00a0":1,"\u3000":1};this.glyphs=D.glyphs;this.w=D.w;this.baseSize=parseInt(C["units-per-em"],10);this.family=C["font-family"].toLowerCase();this.weight=C["font-weight"];this.style=C["font-style"]||"normal";this.viewBox=(function(){var F=C.bbox.split(/\s+/);var E={minX:parseInt(F[0],10),minY:parseInt(F[1],10),maxX:parseInt(F[2],10),maxY:parseInt(F[3],10)};E.width=E.maxX-E.minX;E.height=E.maxY-E.minY;E.toString=function(){return[this.minX,this.minY,this.width,this.height].join(" ")};return E})();this.ascent=-parseInt(C.ascent,10);this.descent=-parseInt(C.descent,10);this.height=-this.ascent+this.descent;this.spacing=function(L,N,E){var O=this.glyphs,M,K,G,P=[],F=0,J=-1,I=-1,H;while(H=L[++J]){M=O[H]||this.missingGlyph;if(!M){continue}if(K){F-=G=K[H]||0;P[I]-=G}F+=P[++I]=~~(M.w||this.w)+N+(B[H]?E:0);K=M.k}P.total=F;return P}}function f(){var C={},B={oblique:"italic",italic:"oblique"};this.add=function(D){(C[D.style]||(C[D.style]={}))[D.weight]=D};this.get=function(H,I){var G=C[H]||C[B[H]]||C.normal||C.italic||C.oblique;if(!G){return null}I={normal:400,bold:700}[I]||parseInt(I,10);if(G[I]){return G[I]}var E={1:1,99:0}[I%100],K=[],F,D;if(E===undefined){E=I>400}if(I==500){I=400}for(var J in G){if(!k(G,J)){continue}J=parseInt(J,10);if(!F||J<F){F=J}if(!D||J>D){D=J}K.push(J)}if(I<F){I=F}if(I>D){I=D}K.sort(function(M,L){return(E?(M>=I&&L>=I)?M<L:M>L:(M<=I&&L<=I)?M>L:M<L)?-1:1});return G[K[0]]}}function r(){function D(F,G){if(F.contains){return F.contains(G)}return F.compareDocumentPosition(G)&16}function B(G){var F=G.relatedTarget;if(!F||D(this,F)){return}C(this,G.type=="mouseover")}function E(F){C(this,F.type=="mouseenter")}function C(F,G){setTimeout(function(){var H=d.get(F).options;m.replace(F,G?h(H,H.hover):H,true)},10)}this.attach=function(F){if(F.onmouseenter===undefined){q(F,"mouseover",B);q(F,"mouseout",B)}else{q(F,"mouseenter",E);q(F,"mouseleave",E)}}}function u(){var C=[],D={};function B(H){var E=[],G;for(var F=0;G=H[F];++F){E[F]=C[D[G]]}return E}this.add=function(F,E){D[F]=C.push(E)-1};this.repeat=function(){var E=arguments.length?B(arguments):C,F;for(var G=0;F=E[G++];){m.replace(F[0],F[1],true)}}}function A(){var D={},B=0;function C(E){return E.cufid||(E.cufid=++B)}this.get=function(E){var F=C(E);return D[F]||(D[F]={})}}function a(B){var D={},C={};this.extend=function(E){for(var F in E){if(k(E,F)){D[F]=E[F]}}return this};this.get=function(E){return D[E]!=undefined?D[E]:B[E]};this.getSize=function(F,E){return C[F]||(C[F]=new n.Size(this.get(F),E))};this.isUsable=function(){return !!B}}function q(C,B,D){if(C.addEventListener){C.addEventListener(B,D,false)}else{if(C.attachEvent){C.attachEvent("on"+B,function(){return D.call(C,window.event)})}}}function v(C,B){var D=d.get(C);if(D.options){return C}if(B.hover&&B.hoverables[C.nodeName.toLowerCase()]){b.attach(C)}D.options=B;return C}function j(B){var C={};return function(D){if(!k(C,D)){C[D]=B.apply(null,arguments)}return C[D]}}function c(F,E){var B=n.quotedList(E.get("fontFamily").toLowerCase()),D;for(var C=0;D=B[C];++C){if(i[D]){return i[D].get(E.get("fontStyle"),E.get("fontWeight"))}}return null}function g(B){return document.getElementsByTagName(B)}function k(C,B){return C.hasOwnProperty(B)}function h(){var C={},B,F;for(var E=0,D=arguments.length;B=arguments[E],E<D;++E){for(F in B){if(k(B,F)){C[F]=B[F]}}}return C}function o(E,M,C,N,F,D){var K=document.createDocumentFragment(),H;if(M===""){return K}var L=N.separate;var I=M.split(p[L]),B=(L=="words");if(B&&t){if(/^\s/.test(M)){I.unshift("")}if(/\s$/.test(M)){I.push("")}}for(var J=0,G=I.length;J<G;++J){H=z[N.engine](E,B?n.textAlign(I[J],C,J,G):I[J],C,N,F,D,J<G-1);if(H){K.appendChild(H)}}return K}function l(D,M){var C=D.nodeName.toLowerCase();if(M.ignore[C]){return}var E=!M.textless[C];var B=n.getStyle(v(D,M)).extend(M);var F=c(D,B),G,K,I,H,L,J;if(!F){return}for(G=D.firstChild;G;G=I){K=G.nodeType;I=G.nextSibling;if(E&&K==3){if(H){H.appendData(G.data);D.removeChild(G)}else{H=G}if(I){continue}}if(H){D.replaceChild(o(F,n.whiteSpace(H.data,B,H,J),B,M,G,D),H);H=null}if(K==1){if(G.firstChild){if(G.nodeName.toLowerCase()=="cufon"){z[M.engine](F,null,B,M,G,D)}else{arguments.callee(G,M)}}J=G}}}var t=" ".split(/\s+/).length==0;var d=new A();var b=new r();var y=new u();var e=false;var z={},i={},w={autoDetect:false,engine:null,forceHitArea:false,hover:false,hoverables:{a:true},ignore:{applet:1,canvas:1,col:1,colgroup:1,head:1,iframe:1,map:1,optgroup:1,option:1,script:1,select:1,style:1,textarea:1,title:1,pre:1},printable:true,selector:(window.Sizzle||(window.jQuery&&function(B){return jQuery(B)})||(window.dojo&&dojo.query)||(window.Ext&&Ext.query)||(window.YAHOO&&YAHOO.util&&YAHOO.util.Selector&&YAHOO.util.Selector.query)||(window.$$&&function(B){return $$(B)})||(window.$&&function(B){return $(B)})||(document.querySelectorAll&&function(B){return document.querySelectorAll(B)})||g),separate:"words",textless:{dl:1,html:1,ol:1,table:1,tbody:1,thead:1,tfoot:1,tr:1,ul:1},textShadow:"none"};var p={words:/\s/.test("\u00a0")?/[^\S\u00a0]+/:/\s+/,characters:"",none:/^/};m.now=function(){x.ready();return m};m.refresh=function(){y.repeat.apply(y,arguments);return m};m.registerEngine=function(C,B){if(!B){return m}z[C]=B;return m.set("engine",C)};m.registerFont=function(D){if(!D){return m}var B=new s(D),C=B.family;if(!i[C]){i[C]=new f()}i[C].add(B);return m.set("fontFamily",'"'+C+'"')};m.replace=function(D,C,B){C=h(w,C);if(!C.engine){return m}if(!e){n.addClass(x.root(),"cufon-active cufon-loading");n.ready(function(){n.addClass(n.removeClass(x.root(),"cufon-loading"),"cufon-ready")});e=true}if(C.hover){C.forceHitArea=true}if(C.autoDetect){delete C.fontFamily}if(typeof C.textShadow=="string"){C.textShadow=n.textShadow(C.textShadow)}if(typeof C.color=="string"&&/^-/.test(C.color)){C.textGradient=n.gradient(C.color)}else{delete C.textGradient}if(!B){y.add(D,arguments)}if(D.nodeType||typeof D=="string"){D=[D]}n.ready(function(){for(var F=0,E=D.length;F<E;++F){var G=D[F];if(typeof G=="string"){m.replace(C.selector(G),C,true)}else{l(G,C)}}});return m};m.set=function(B,C){w[B]=C;return m};return m})();Cufon.registerEngine("canvas",(function(){var b=document.createElement("canvas");if(!b||!b.getContext||!b.getContext.apply){return}b=null;var a=Cufon.CSS.supports("display","inline-block");var e=!a&&(document.compatMode=="BackCompat"||/frameset|transitional/i.test(document.doctype.publicId));var f=document.createElement("style");f.type="text/css";f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;"+(e?"":"font-size:1px;line-height:1px;")+"}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}"+(a?"cufon canvas{position:relative;}":"cufon canvas{position:absolute;}")+"}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g,"!important;")));document.getElementsByTagName("head")[0].appendChild(f);function d(p,h){var n=0,m=0;var g=[],o=/([mrvxe])([^a-z]*)/g,k;generate:for(var j=0;k=o.exec(p);++j){var l=k[2].split(",");switch(k[1]){case"v":g[j]={m:"bezierCurveTo",a:[n+~~l[0],m+~~l[1],n+~~l[2],m+~~l[3],n+=~~l[4],m+=~~l[5]]};break;case"r":g[j]={m:"lineTo",a:[n+=~~l[0],m+=~~l[1]]};break;case"m":g[j]={m:"moveTo",a:[n=~~l[0],m=~~l[1]]};break;case"x":g[j]={m:"closePath"};break;case"e":break generate}h[g[j].m].apply(h,g[j].a)}return g}function c(m,k){for(var j=0,h=m.length;j<h;++j){var g=m[j];k[g.m].apply(k,g.a)}}return function(V,w,P,t,C,W){var k=(w===null);if(k){w=C.getAttribute("alt")}var A=V.viewBox;var m=P.getSize("fontSize",V.baseSize);var B=0,O=0,N=0,u=0;var z=t.textShadow,L=[];if(z){for(var U=z.length;U--;){var F=z[U];var K=m.convertFrom(parseFloat(F.offX));var I=m.convertFrom(parseFloat(F.offY));L[U]=[K,I];if(I<B){B=I}if(K>O){O=K}if(I>N){N=I}if(K<u){u=K}}}var Z=Cufon.CSS.textTransform(w,P).split("");var E=V.spacing(Z,~~m.convertFrom(parseFloat(P.get("letterSpacing"))||0),~~m.convertFrom(parseFloat(P.get("wordSpacing"))||0));if(!E.length){return null}var h=E.total;O+=A.width-E[E.length-1];u+=A.minX;var s,n;if(k){s=C;n=C.firstChild}else{s=document.createElement("cufon");s.className="cufon cufon-canvas";s.setAttribute("alt",w);n=document.createElement("canvas");s.appendChild(n);if(t.printable){var S=document.createElement("cufontext");S.appendChild(document.createTextNode(w));s.appendChild(S)}}var aa=s.style;var H=n.style;var j=m.convert(A.height);var Y=Math.ceil(j);var M=Y/j;var G=M*Cufon.CSS.fontStretch(P.get("fontStretch"));var J=h*G;var Q=Math.ceil(m.convert(J+O-u));var o=Math.ceil(m.convert(A.height-B+N));n.width=Q;n.height=o;H.width=Q+"px";H.height=o+"px";B+=A.minY;H.top=Math.round(m.convert(B-V.ascent))+"px";H.left=Math.round(m.convert(u))+"px";var r=Math.max(Math.ceil(m.convert(J)),0)+"px";if(a){aa.width=r;aa.height=m.convert(V.height)+"px"}else{aa.paddingLeft=r;aa.paddingBottom=(m.convert(V.height)-1)+"px"}var X=n.getContext("2d"),D=j/A.height;X.scale(D,D*M);X.translate(-u,-B);X.save();function T(){var x=V.glyphs,ab,l=-1,g=-1,y;X.scale(G,1);while(y=Z[++l]){var ab=x[Z[l]]||V.missingGlyph;if(!ab){continue}if(ab.d){X.beginPath();if(ab.code){c(ab.code,X)}else{ab.code=d("m"+ab.d,X)}X.fill()}X.translate(E[++g],0)}X.restore()}if(z){for(var U=z.length;U--;){var F=z[U];X.save();X.fillStyle=F.color;X.translate.apply(X,L[U]);T()}}var q=t.textGradient;if(q){var v=q.stops,p=X.createLinearGradient(0,A.minY,0,A.maxY);for(var U=0,R=v.length;U<R;++U){p.addColorStop.apply(p,v[U])}X.fillStyle=p}else{X.fillStyle=P.get("color")}T();return s}})());Cufon.registerEngine("vml",(function(){var e=document.namespaces;if(!e){return}e.add("cvml","urn:schemas-microsoft-com:vml");e=null;var b=document.createElement("cvml:shape");b.style.behavior="url(#default#VML)";if(!b.coordsize){return}b=null;var h=(document.documentMode||0)<8;document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:'+(h?"middle":"text-bottom")+";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g,"!important;"));function c(i,j){return a(i,/(?:em|ex|%)$|^[a-z-]+$/i.test(j)?"1em":j)}function a(l,m){if(m==="0"){return 0}if(/px$/i.test(m)){return parseFloat(m)}var k=l.style.left,j=l.runtimeStyle.left;l.runtimeStyle.left=l.currentStyle.left;l.style.left=m.replace("%","em");var i=l.style.pixelLeft;l.style.left=k;l.runtimeStyle.left=j;return i}function f(l,k,j,n){var i="computed"+n,m=k[i];if(isNaN(m)){m=k.get(n);k[i]=m=(m=="normal")?0:~~j.convertFrom(a(l,m))}return m}var g={};function d(p){var q=p.id;if(!g[q]){var n=p.stops,o=document.createElement("cvml:fill"),i=[];o.type="gradient";o.angle=180;o.focus="0";o.method="sigma";o.color=n[0][1];for(var m=1,l=n.length-1;m<l;++m){i.push(n[m][0]*100+"% "+n[m][1])}o.colors=i.join(",");o.color2=n[l][1];g[q]=o}return g[q]}return function(ac,G,Y,C,K,ad,W){var n=(G===null);if(n){G=K.alt}var I=ac.viewBox;var p=Y.computedFontSize||(Y.computedFontSize=new Cufon.CSS.Size(c(ad,Y.get("fontSize"))+"px",ac.baseSize));var y,q;if(n){y=K;q=K.firstChild}else{y=document.createElement("cufon");y.className="cufon cufon-vml";y.alt=G;q=document.createElement("cufoncanvas");y.appendChild(q);if(C.printable){var Z=document.createElement("cufontext");Z.appendChild(document.createTextNode(G));y.appendChild(Z)}if(!W){y.appendChild(document.createElement("cvml:shape"))}}var ai=y.style;var R=q.style;var l=p.convert(I.height),af=Math.ceil(l);var V=af/l;var P=V*Cufon.CSS.fontStretch(Y.get("fontStretch"));var U=I.minX,T=I.minY;R.height=af;R.top=Math.round(p.convert(T-ac.ascent));R.left=Math.round(p.convert(U));ai.height=p.convert(ac.height)+"px";var F=Y.get("color");var ag=Cufon.CSS.textTransform(G,Y).split("");var L=ac.spacing(ag,f(ad,Y,p,"letterSpacing"),f(ad,Y,p,"wordSpacing"));if(!L.length){return null}var k=L.total;var x=-U+k+(I.width-L[L.length-1]);var ah=p.convert(x*P),X=Math.round(ah);var O=x+","+I.height,m;var J="r"+O+"ns";var u=C.textGradient&&d(C.textGradient);var o=ac.glyphs,S=0;var H=C.textShadow;var ab=-1,aa=0,w;while(w=ag[++ab]){var D=o[ag[ab]]||ac.missingGlyph,v;if(!D){continue}if(n){v=q.childNodes[aa];while(v.firstChild){v.removeChild(v.firstChild)}}else{v=document.createElement("cvml:shape");q.appendChild(v)}v.stroked="f";v.coordsize=O;v.coordorigin=m=(U-S)+","+T;v.path=(D.d?"m"+D.d+"xe":"")+"m"+m+J;v.fillcolor=F;if(u){v.appendChild(u.cloneNode(false))}var ae=v.style;ae.width=X;ae.height=af;if(H){var s=H[0],r=H[1];var B=Cufon.CSS.color(s.color),z;var N=document.createElement("cvml:shadow");N.on="t";N.color=B.color;N.offset=s.offX+","+s.offY;if(r){z=Cufon.CSS.color(r.color);N.type="double";N.color2=z.color;N.offset2=r.offX+","+r.offY}N.opacity=B.opacity||(z&&z.opacity)||1;v.appendChild(N)}S+=L[aa++]}var M=v.nextSibling,t,A;if(C.forceHitArea){if(!M){M=document.createElement("cvml:rect");M.stroked="f";M.className="cufon-vml-cover";t=document.createElement("cvml:fill");t.opacity=0;M.appendChild(t);q.appendChild(M)}A=M.style;A.width=X;A.height=af}else{if(M){q.removeChild(M)}}ai.width=Math.max(Math.ceil(p.convert(k*P)),0);if(h){var Q=Y.computedYAdjust;if(Q===undefined){var E=Y.get("lineHeight");if(E=="normal"){E="1em"}else{if(!isNaN(E)){E+="em"}}Y.computedYAdjust=Q=0.5*(a(ad,E)-parseFloat(ai.height))}if(Q){ai.marginTop=Math.ceil(Q)+"px";ai.marginBottom=Q+"px"}}return y}})());
	
	/*** Register - Steelfish font ***/
	Cufon.registerFont({"w":121,"face":{"font-family":"Steelfish","font-weight":400,"font-stretch":"normal","units-per-em":"360","panose-1":"2 1 6 8 2 2 2 4 5 4","ascent":"306","descent":"-54","bbox":"-6 -354 274 64","underline-thickness":"18","underline-position":"-27","unicode-range":"U+0020-U+2122"},"glyphs":{" ":{"w":48},"!":{"d":"14,-32r32,0r0,32r-32,0r0,-32xm46,-161r-8,97r-16,0v-9,-78,-9,-167,-8,-255r32,0r0,158","w":60},"\"":{"d":"56,-319r27,0v1,30,-3,55,-7,80r-13,0v-4,-25,-8,-50,-7,-80xm11,-319r27,0v1,30,-3,55,-7,80r-12,0v-4,-25,-10,-49,-8,-80","w":68,"k":{"t":-4,"s":12,"m":5,"n":5}},"#":{"d":"52,-184r33,0r9,-33r-33,0xm19,-239r26,0r19,-71r22,0r-19,71r33,0r18,-71r22,0r-19,71r27,0r-5,22r-27,0r-9,33r27,0r-6,21r-27,0r-20,71r-21,0r20,-71r-34,0r-19,71r-21,0r19,-71r-26,0r6,-21r25,0r10,-33r-26,0","w":146},"$":{"d":"41,-269v1,32,-5,51,12,74r0,-92v-8,2,-12,8,-12,18xm81,-50v0,-33,3,-51,-13,-75r0,92v8,-2,13,-7,13,-17xm68,-175v31,33,45,55,45,105v0,43,-15,67,-45,70r0,20r-15,0r0,-20v-42,-1,-47,-57,-44,-110r32,0v4,26,-10,70,12,77r0,-112v-28,-25,-44,-54,-44,-104v0,-43,14,-66,44,-70r0,-18r15,0r0,18v39,1,48,48,45,99r-32,0v-3,-24,9,-62,-13,-67r0,112","w":123},"%":{"d":"165,-107v0,-9,-4,-13,-12,-13v-7,0,-11,4,-11,13r0,72v0,9,4,13,11,13v8,0,12,-4,12,-13r0,-72xm187,-93v1,41,3,93,-34,93v-38,0,-34,-53,-33,-93v0,-33,10,-49,33,-49v22,0,34,16,34,49xm55,-285v0,-9,-4,-13,-12,-13v-7,0,-11,4,-11,13r0,72v0,9,4,13,11,13v8,0,12,-4,12,-13r0,-72xm77,-271v1,41,3,93,-34,93v-38,0,-35,-52,-34,-93v0,-33,11,-49,34,-49v22,0,34,16,34,49xm176,-319r-134,319r-20,0r135,-319r19,0","w":199},"&":{"d":"55,-204v11,-24,17,-41,16,-65v0,-12,-4,-19,-12,-19v-24,9,-8,59,-4,84xm50,-135v-13,15,-13,47,-13,77v0,31,32,31,43,18xm57,0v-72,3,-59,-138,-21,-170v-14,-38,-21,-68,-21,-89v0,-40,15,-60,44,-60v27,0,40,20,40,60v0,25,-10,55,-29,89r28,84r8,-24r27,0r-22,75v3,7,13,8,22,6r0,29v-18,0,-35,1,-39,-13v-8,9,-20,13,-37,13","w":138},"'":{"d":"11,-319r27,0v1,30,-3,55,-7,80r-12,0v-4,-25,-10,-49,-8,-80","w":37,"k":{"t":-4,"s":12,"m":5,"n":5}},"(":{"d":"28,-32v0,30,11,45,34,45r0,19v-36,0,-53,-23,-53,-70r0,-243v0,-47,17,-70,53,-70r0,19v-23,0,-34,14,-34,44r0,256","w":75},")":{"d":"43,-288v0,-30,-11,-44,-34,-44r0,-19v36,0,53,23,53,70r0,243v0,47,-17,70,-53,70r0,-19v23,0,34,-15,34,-45r0,-256","w":75},"*":{"d":"97,-205r-23,39r44,-10r0,35r-44,-9r23,38r-34,11r-5,-44r-29,33r-21,-29r41,-17r-41,-18r21,-29r29,34r5,-45","w":125},"+":{"d":"66,-210r0,34r34,0r0,26r-34,0r0,34r-25,0r0,-34r-35,0r0,-26r35,0r0,-34r25,0","w":106},",":{"d":"7,-38r29,0v-1,27,6,62,-24,61r0,-14v9,0,13,-5,13,-14r-18,0r0,-33","w":45,"k":{",":-18,".":-18,"\u2026":-18}},"-":{"d":"6,-176r54,0r0,26r-54,0r0,-26","w":66},".":{"d":"7,-38r29,0r0,38r-29,0r0,-38","w":45,"k":{",":-18,".":-18,"\u2026":-18}},"\/":{"d":"82,-319r-61,319r-20,0r61,-319r20,0","w":83},"0":{"d":"77,-269v0,-12,-5,-19,-16,-19v-11,0,-16,7,-16,19r0,219v0,12,5,18,16,18v11,0,16,-6,16,-18r0,-219xm109,-70v0,47,-16,70,-48,70v-32,0,-48,-23,-48,-70r0,-179v0,-47,16,-70,48,-70v32,0,48,23,48,70r0,179"},"1":{"d":"6,-288v14,1,18,-13,17,-31r32,0r0,319r-32,0r0,-256r-17,0r0,-32","w":68},"2":{"d":"109,-249v0,89,-74,122,-64,217r64,0r0,32r-96,0r0,-61v-3,-72,64,-115,64,-208v0,-12,-5,-19,-16,-19v-26,1,-13,44,-16,68r-32,0v-3,-52,6,-99,48,-99v32,0,48,23,48,70"},"3":{"d":"77,-129v1,-15,-10,-19,-26,-18r0,-32v44,8,26,-57,26,-90v0,-12,-5,-19,-16,-19v-26,1,-13,44,-16,68r-32,0v-3,-52,6,-104,48,-99v42,-4,48,49,48,102v0,29,-7,47,-20,54v22,8,21,57,20,93v0,47,-16,70,-48,70v-45,0,-51,-56,-48,-110r32,0v4,27,-12,76,16,78v11,0,16,-6,16,-18r0,-79"},"4":{"d":"33,-96r35,0r0,-133xm3,-98r65,-221r30,0r0,223r16,0r0,32r-16,0r0,64r-30,0r0,-64r-65,0r0,-34","w":120},"5":{"d":"13,-319r96,0r0,31r-64,0r0,96v37,-19,64,10,64,64v0,56,4,134,-47,128v-45,5,-51,-56,-48,-110r31,0v4,27,-12,76,17,78v11,0,15,-6,15,-18r0,-98v4,-25,-35,-28,-37,-6r-27,0r0,-165","w":122},"6":{"d":"77,-147v0,-12,-5,-18,-16,-18v-11,0,-16,5,-16,17r0,98v0,12,5,18,16,18v11,0,16,-6,16,-18r0,-97xm109,-220r-32,0v-3,-25,10,-67,-16,-68v-11,0,-16,7,-16,19r0,78v37,-19,64,11,64,64v0,57,4,127,-48,127v-32,0,-48,-23,-48,-70r0,-179v0,-47,16,-70,48,-70v41,0,51,46,48,99"},"7":{"d":"22,0v0,-112,16,-207,51,-288r-69,0r0,-31r96,0r0,35v-35,79,-45,172,-46,284r-32,0","w":105},"8":{"d":"45,-197v-2,11,5,17,16,18v10,0,16,-6,16,-18r0,-72v0,-12,-5,-19,-16,-19v-31,0,-12,61,-16,91xm77,-129v1,-12,-6,-17,-16,-18v-11,0,-16,6,-16,18r0,79v0,12,5,18,16,18v11,0,16,-6,16,-18r0,-79xm109,-249v0,35,0,79,-20,86v22,8,21,57,20,93v0,47,-16,70,-48,70v-45,0,-48,-55,-48,-109v0,-29,6,-47,19,-54v-20,-7,-20,-52,-19,-86v0,-47,16,-70,48,-70v32,0,48,23,48,70"},"9":{"d":"45,-173v0,12,5,19,16,19v10,0,16,-5,16,-17r0,-98v0,-12,-5,-19,-16,-19v-11,0,-16,7,-16,19r0,96xm13,-99r32,0v3,24,-10,67,16,67v11,0,16,-6,16,-18r0,-78v-37,19,-64,-12,-64,-65v0,-57,-3,-126,48,-126v32,0,48,23,48,70r0,179v0,47,-16,70,-48,70v-41,0,-51,-46,-48,-99"},":":{"d":"7,-148r29,0r0,39r-29,0r0,-39xm7,-38r29,0r0,38r-29,0r0,-38","w":45},";":{"d":"7,-148r29,0r0,39r-29,0r0,-39xm7,-38r29,0v-1,27,6,62,-24,61r0,-14v9,0,13,-5,13,-14r-18,0r0,-33","w":45},"<":{"d":"102,-106r-96,-41r0,-32r96,-40r0,18r-90,37r90,40r0,18","w":108},"=":{"d":"6,-195r79,0r0,23r-79,0r0,-23xm6,-140r79,0r0,22r-79,0r0,-22","w":95},">":{"d":"6,-219r96,41r0,31r-96,41r0,-18r90,-37r-90,-40r0,-18","w":108},"?":{"d":"37,-32r32,0r0,32r-32,0r0,-32xm109,-249v0,68,-41,82,-40,139r0,46r-32,0r0,-50v-2,-66,40,-77,40,-155v0,-12,-5,-19,-16,-19v-26,1,-13,44,-16,68r-32,0v-3,-52,6,-99,48,-99v32,0,48,23,48,70","w":123},"@":{"d":"94,-150v-15,5,-20,18,-18,40v0,7,3,11,8,11v18,-2,7,-34,10,-51xm58,-117v-4,-33,19,-43,36,-55v-2,-15,7,-44,-8,-44v-14,0,-6,26,-8,39r-18,0v-2,-28,2,-59,26,-57v43,3,20,83,26,125v0,6,5,9,14,9v10,0,14,-3,14,-9r0,-121v0,-25,-18,-38,-55,-38v-36,0,-54,13,-54,38r0,142v-3,52,71,35,119,38r0,17v-57,0,-143,9,-138,-45v8,-89,-34,-210,73,-210v49,0,74,22,74,65v0,51,22,140,-32,142v-11,0,-19,-4,-24,-10v-15,20,-49,9,-45,-26","w":171},"A":{"d":"42,-82r32,0r-16,-147v-2,52,-10,99,-16,147xm0,0r42,-319r33,0r42,319r-32,0r-7,-48r-40,0r-6,48r-32,0","w":117,"k":{"W":18,"V":18,"T":14,"v":12,"w":12,"Y":18}},"B":{"d":"45,-288r0,109v18,1,34,1,32,-18v-3,-37,18,-102,-32,-91xm77,-129v1,-18,-14,-19,-32,-18r0,115v18,1,32,1,32,-18r0,-79xm109,-249v0,36,0,79,-23,86v24,8,23,55,23,93v0,70,-34,74,-96,70r0,-319v61,-3,96,-1,96,70"},"C":{"d":"77,-110r30,0v3,53,-2,110,-46,110v-32,0,-48,-23,-48,-70r0,-179v0,-47,16,-70,48,-70v40,0,49,47,46,99r-30,0v-3,-25,10,-67,-16,-68v-11,0,-16,7,-16,19r0,219v0,12,5,18,16,18v29,-2,12,-52,16,-78","w":118},"D":{"d":"77,-269v1,-19,-14,-20,-32,-19r0,256v18,1,32,1,32,-18r0,-219xm109,-70v2,70,-34,74,-96,70r0,-319v61,-3,96,-1,96,70r0,179"},"E":{"d":"45,-32r49,0r0,32r-81,0r0,-319r81,0r0,31r-49,0r0,109r28,0r0,32r-28,0r0,115","w":101},"F":{"d":"45,0r-32,0r0,-319r81,0r0,31r-49,0r0,109r28,0r0,32r-28,0r0,147","w":99,"k":{"y":18,"u":23,"o":23,"e":23,"a":27,"r":23}},"G":{"d":"61,-147r49,0r0,147r-16,-22v-6,14,-17,22,-33,22v-32,0,-48,-23,-48,-70r0,-179v0,-47,16,-70,48,-70v43,0,52,46,49,99r-30,0v-3,-26,10,-68,-19,-68v-11,0,-16,7,-16,19r0,219v0,12,5,18,16,18v33,-1,13,-55,18,-84r-18,0r0,-31","w":120},"H":{"d":"45,-179r32,0r0,-140r32,0r0,319r-32,0r0,-147r-32,0r0,147r-32,0r0,-319r32,0r0,140"},"I":{"d":"13,0r0,-319r32,0r0,319r-32,0","w":57},"J":{"d":"33,-319r32,0r0,249v-1,51,-16,73,-57,70r0,-32v16,1,26,-2,25,-18r0,-269","w":75},"K":{"d":"13,0r0,-319r32,0r0,145r47,-145r33,0r-53,155r57,164r-34,0r-50,-154r0,154r-32,0","w":129,"k":{"y":17,"u":7,"o":9,"e":6,"a":8}},"L":{"d":"45,-32r49,0r0,32r-81,0r0,-319r32,0r0,287","w":98,"k":{"a":7,"e":7,"o":4,"Y":26,"u":3}},"M":{"d":"13,0r0,-319r46,0r27,228r26,-228r48,0r0,319r-29,0r0,-250r-32,250r-26,0r-32,-249r0,249r-28,0","w":172},"N":{"d":"81,0r-40,-230r0,230r-28,0r0,-319r38,0r33,181r6,49r0,-230r29,0r0,319r-38,0","w":131},"O":{"d":"77,-269v0,-12,-5,-19,-16,-19v-11,0,-16,7,-16,19r0,219v0,12,5,18,16,18v11,0,16,-6,16,-18r0,-219xm109,-70v0,47,-16,70,-48,70v-32,0,-48,-23,-48,-70r0,-179v0,-47,16,-70,48,-70v32,0,48,23,48,70r0,179","k":{"J":13,"\"":14,"'":14,"\u2018":14,"\u2019":14,"\u201c":14,"\u201d":14}},"P":{"d":"45,-192v21,1,39,0,38,-21v-2,-36,14,-85,-38,-75r0,96xm45,0r-32,0r0,-319v70,-7,106,7,102,86v-3,56,-21,77,-70,73r0,160","w":123,"k":{"u":8,"o":8,"e":8,"a":9,"r":8}},"Q":{"d":"109,34v-30,16,-62,4,-59,-35v-25,-5,-37,-28,-37,-69r0,-179v0,-47,16,-70,48,-70v32,0,48,23,48,70r0,179v0,42,-13,65,-39,69v-3,25,24,23,39,13r0,22xm77,-269v0,-12,-5,-19,-16,-19v-11,0,-16,7,-16,19r0,219v0,12,5,18,16,18v11,0,16,-6,16,-18r0,-219","k":{"J":13,"\"":14,"'":14,"\u2018":14,"\u2019":14,"\u201c":14,"\u201d":14}},"R":{"d":"45,-179v21,1,40,-1,38,-22v-4,-37,19,-98,-38,-87r0,109xm45,0r-32,0r0,-319v61,-3,102,-1,102,67v0,42,-1,81,-25,98r24,154r-32,0r-20,-147r-17,0r0,147","k":{"L":7}},"S":{"d":"72,-87v2,-48,-74,-97,-59,-162v0,-47,15,-70,45,-70v39,0,50,47,46,99r-32,0v-3,-24,9,-68,-14,-68v-21,0,-10,41,-13,62v-4,29,66,96,59,128v3,51,-7,103,-46,98v-43,5,-48,-57,-45,-110r32,0v4,25,-11,75,13,78v21,2,13,-35,14,-55","w":116},"T":{"d":"1,-319r96,0r0,31r-32,0r0,288r-32,0r0,-288r-32,0r0,-31","w":98,"k":{"y":6,"w":4,"v":4,"u":15,"o":18,"n":15,"m":15,"e":18,"c":18,"a":21,"r":16}},"U":{"d":"77,-319r32,0r0,249v0,47,-16,70,-48,70v-32,0,-48,-23,-48,-70r0,-249r32,0r0,269v0,12,5,18,16,18v11,0,16,-6,16,-18r0,-269"},"V":{"d":"117,-319r-42,319r-33,0r-42,-319r32,0r22,172r4,56r27,-228r32,0","w":117,"k":{"u":9,"o":14,"e":14,"a":17,"J":15}},"W":{"d":"195,-319r-42,319r-29,0r-26,-204r-26,204r-30,0r-42,-319r32,0r27,228v5,-80,17,-152,26,-228r26,0r26,228r26,-228r32,0","w":195,"k":{"u":9,"o":14,"e":14,"a":17,"r":9}},"X":{"d":"114,-319r-37,147r45,172r-33,0r-28,-123r-28,123r-33,0r44,-172r-36,-147r33,0r20,98r20,-98r33,0"},"Y":{"d":"42,0r0,-136r-42,-183r33,0r25,141v6,-49,16,-94,25,-141r33,0r-42,183r0,136r-32,0","w":115,"k":{"a":19,"e":16,"o":20,"u":12}},"Z":{"d":"9,-319r93,0r0,39r-64,248r64,0r0,32r-96,0r0,-36r66,-252r-63,0r0,-31","w":107},"[":{"d":"62,13r0,19r-53,0r0,-383r53,0r0,19r-34,0r0,345r34,0","w":75},"\\":{"d":"22,-319r62,319r-21,0r-60,-319r19,0","w":86},"]":{"d":"9,-332r0,-19r53,0r0,383r-53,0r0,-19r34,0r0,-345r-34,0","w":75},"^":{"d":"4,-224r41,-95r32,0r41,95r-18,0r-38,-90r-40,90r-18,0","w":122},"_":{"d":"0,32r128,0r0,32r-128,0r0,-32","w":127},"`":{"d":"40,-354r19,20v-26,2,-35,-13,-53,-20r34,0","w":63},"a":{"d":"68,-107v-22,8,-28,28,-28,62v0,11,4,17,13,17v28,-3,10,-53,15,-79xm13,-56v-6,-51,28,-67,55,-85v-4,-22,11,-67,-13,-67v-21,0,-9,40,-12,60r-28,0v-3,-44,2,-89,40,-89v27,0,40,18,40,56r0,181r-27,0r0,-10v-27,24,-59,4,-55,-46","w":108,"k":{"t":5,"W":14,"V":14,"T":17}},"b":{"d":"68,-193v0,-11,-5,-15,-14,-15v-9,0,-14,4,-14,15r0,148v0,11,5,17,14,17v9,0,14,-6,14,-17r0,-148xm13,-319r27,0r0,91v25,-22,56,-4,56,47r0,125v6,56,-45,73,-66,38r-5,18r-12,0r0,-319","w":108},"c":{"d":"68,-148v-3,-21,10,-60,-14,-60v-9,0,-14,4,-14,15r0,148v0,11,5,17,14,17v24,-1,11,-40,14,-62r28,0v3,45,-2,92,-42,90v-65,-3,-41,-118,-41,-181v0,-38,13,-56,41,-56v40,0,45,43,42,89r-28,0","w":106,"k":{"T":17}},"d":{"d":"40,-45v0,11,5,17,14,17v9,0,14,-6,14,-17r0,-148v0,-11,-5,-15,-14,-15v-9,0,-14,4,-14,15r0,148xm96,0r-28,0r0,-11v-29,25,-55,6,-55,-45r0,-125v-5,-52,30,-68,55,-47r0,-91r28,0r0,319","w":108,"k":{"\u201d":10,"\u201c":10,"\u2019":10,"\u2018":10,"'":10,"\"":10}},"e":{"d":"40,-141r28,0v-4,-23,11,-67,-14,-67v-25,0,-10,45,-14,67xm40,-45v0,11,5,17,14,17v24,-1,11,-40,14,-62r28,0v3,45,-2,92,-42,90v-65,-3,-41,-118,-41,-181v0,-38,13,-56,41,-56v51,0,42,72,42,124r-56,0r0,68","w":108,"k":{"t":5,"W":14,"V":14,"T":17,"?":13,"v":8,"w":8,"y":8}},"f":{"d":"0,-237r10,0v-3,-45,7,-85,46,-82r0,28v-27,-2,-16,32,-18,54r12,0r0,29r-12,0r0,208r-28,0r0,-208r-10,0r0,-29","w":56},"g":{"d":"40,-50v0,11,5,16,14,16v8,0,14,-5,14,-14r0,-145v0,-11,-5,-16,-14,-16v-9,0,-14,5,-14,16r0,143xm54,28v20,2,13,-25,14,-43v-24,22,-55,4,-55,-47r0,-119v-2,-53,26,-69,55,-45r0,-11r28,0r0,237v9,69,-82,76,-83,13r27,0v0,10,5,15,14,15","w":108},"h":{"d":"68,-193v0,-11,-5,-15,-14,-15v-9,0,-14,4,-14,15r0,193r-27,0r0,-319r27,0r0,91v25,-22,56,-4,56,47r0,181r-28,0r0,-193","w":108},"i":{"d":"40,-276r-27,0r0,-43r27,0r0,43xm40,0r-27,0r0,-237r27,0r0,237","w":53},"j":{"d":"43,-276r-28,0r0,-43r28,0r0,43xm-6,28v14,0,21,-8,21,-22r0,-243r28,0r0,234v0,39,-16,59,-49,59r0,-28","w":55},"k":{"d":"13,-319r27,0r0,191r36,-109r29,0r-41,120r41,117r-29,0r-36,-109r0,109r-27,0r0,-319","w":106,"k":{"s":7,"o":10,"e":10,"a":9}},"l":{"d":"9,-319r28,0r0,319r-28,0r0,-319","w":46},"m":{"d":"123,-193v0,-11,-5,-15,-14,-15v-9,0,-13,5,-13,15r0,193r-28,0r0,-193v0,-11,-5,-15,-14,-15v-9,0,-14,4,-14,15r0,193r-27,0r0,-237r27,0r0,9v9,-14,42,-12,49,6v22,-30,62,-15,62,41r0,181r-28,0r0,-193","w":163,"k":{"\"":19,"'":19,"\u2018":19,"\u2019":19,"\u201c":19,"\u201d":19}},"n":{"d":"68,-193v0,-11,-5,-15,-14,-15v-9,0,-14,4,-14,15r0,193r-27,0r0,-237r27,0r0,9v25,-22,56,-4,56,47r0,181r-28,0r0,-193","w":108,"k":{"\"":19,"'":19,"\u2018":19,"\u2019":19,"\u201c":19,"\u201d":19}},"o":{"d":"68,-193v0,-11,-4,-15,-14,-15v-9,0,-14,4,-14,15r0,148v0,11,5,17,14,17v10,0,14,-6,14,-17r0,-148xm96,-181v0,65,24,181,-42,181v-65,0,-41,-118,-41,-181v0,-38,13,-56,41,-56v28,0,42,18,42,56","w":108,"k":{"t":5,"W":14,"V":14,"T":17,"v":7,"w":7,"y":8}},"p":{"d":"13,-237r27,0r0,11v28,-24,56,-8,56,45r0,125v5,52,-31,69,-56,46r0,66r-27,0r0,-293xm68,-193v0,-11,-5,-16,-14,-16v-9,0,-14,5,-14,16r0,148v0,11,5,16,14,16v9,0,14,-5,14,-16r0,-148","w":108},"q":{"d":"96,56r-28,0r0,-66v-23,23,-55,6,-55,-46r0,-125v-2,-53,26,-69,55,-45r0,-11r28,0r0,293xm40,-45v0,11,5,16,14,16v9,0,14,-5,14,-16r0,-148v0,-11,-5,-16,-14,-16v-9,0,-14,5,-14,16r0,148","w":108},"r":{"d":"40,-228v3,-6,11,-9,24,-9r0,35v-7,-11,-24,-7,-24,9r0,193r-27,0r0,-237r27,0r0,9","w":69,"k":{"T":8}},"s":{"d":"61,-44v12,-58,-51,-79,-51,-133v0,-40,13,-60,38,-60v32,0,42,36,39,80r-28,0v-2,-18,6,-52,-11,-53v-14,-1,-11,23,-11,38v-1,27,52,78,52,113v0,40,-14,59,-40,59v-29,0,-41,-28,-39,-71r27,0v1,17,-5,45,12,44v8,0,12,-6,12,-17","w":97,"k":{"y":4}},"t":{"d":"2,-237r11,0r0,-82r28,0r0,82r13,0r0,29r-13,0r0,163v0,11,4,16,14,16r0,29v-28,0,-42,-19,-42,-56r0,-152r-11,0r0,-29","w":62,"k":{"u":9,"o":11,"e":10,"a":11}},"u":{"d":"40,-45v0,11,5,16,14,16v9,0,14,-5,14,-16r0,-192r28,0r0,237r-28,0r0,-10v-24,23,-55,5,-55,-46r0,-181r27,0r0,192","w":108,"k":{"W":9,"V":9,"T":15}},"v":{"d":"48,-81r17,-156r29,0r-32,237r-29,0r-31,-237r28,0","w":95,"k":{"a":10,"e":7,"o":8}},"w":{"d":"103,-81v3,-55,11,-105,18,-156r28,0r-31,237r-25,0r-17,-131r-18,131r-25,0r-31,-237r28,0r18,156r17,-156r21,0","w":151,"k":{"a":10,"e":7,"o":8}},"x":{"d":"93,0r-30,0r-15,-72r-17,72r-29,0r30,-117r-29,-120r29,0r16,76r15,-76r29,0r-30,120","w":94},"y":{"d":"8,28v16,-1,25,-10,28,-28r-33,-237r29,0r17,156r17,-156r29,0r-32,237v-4,34,-20,56,-55,56r0,-28","w":98,"k":{"j":5,"T":5,"a":12,"e":8,"o":9,"s":7}},"z":{"d":"12,-237r73,0r0,34r-47,175r47,0r0,28r-74,0r0,-31r49,-177r-48,0r0,-29","w":96},"{":{"d":"60,-121v4,49,-17,135,34,134r0,19v-63,6,-53,-85,-53,-149r-36,-43r36,-44v0,-64,-10,-153,53,-147r0,19v-52,-2,-29,85,-34,134r-32,38","w":103},"|":{"d":"28,-319r0,319r-20,0r0,-319r20,0","w":36},"}":{"d":"39,-199v-4,-49,17,-134,-34,-133r0,-19v63,-6,53,84,53,148r36,43r-36,44v0,64,10,154,-53,148r0,-19v51,1,30,-85,34,-134r32,-39","w":103},"\u00d7":{"d":"96,-187r-24,25r23,23r-18,18r-23,-23r-25,24r-18,-18r24,-24r-24,-25r18,-18r25,24r24,-24","w":106},"\u2013":{"d":"6,-176r94,0r0,26r-94,0r0,-26","w":109},"\u2014":{"d":"6,-176r160,0r0,26r-160,0r0,-26","w":174},"\u2018":{"d":"36,-258r-29,0v1,-27,-6,-62,24,-61r0,14v-8,0,-13,4,-13,13r18,0r0,34","w":39,"k":{"t":-4,"s":12,"m":5,"n":5}},"\u2019":{"d":"9,-320r29,0v-1,27,7,63,-24,61r0,-14v8,0,13,-5,13,-14r-18,0r0,-33","w":42,"k":{"t":-4,"s":12,"m":5,"n":5}},"\u201c":{"d":"40,-258r-29,0v1,-27,-6,-62,24,-61r0,14v-8,0,-13,4,-13,13r18,0r0,34xm80,-258r-29,0v1,-27,-6,-62,24,-61r0,14v-8,0,-13,4,-13,13r18,0r0,34","w":83,"k":{"t":-4,"s":12,"m":5,"n":5}},"\u201d":{"d":"48,-320r29,0v-1,27,7,63,-24,61r0,-14v8,0,13,-5,13,-14r-18,0r0,-33xm8,-320r29,0v-1,27,7,63,-24,61r0,-14v8,0,13,-5,13,-14r-18,0r0,-33","w":81,"k":{"t":-4,"s":12,"m":5,"n":5}},"\u2026":{"d":"56,-38r29,0r0,38r-29,0r0,-38xm150,-38r29,0r0,38r-29,0r0,-38xm245,-38r29,0r0,38r-29,0r0,-38","w":331,"k":{",":-18,".":-18,"\u2026":-18}},"\u2122":{"d":"12,-319r66,0r0,25r-23,0r0,99r-24,0r0,-99r-19,0r0,-25xm89,-195r0,-124r25,0r16,105r16,-105r26,0r0,124r-18,0r0,-89r-14,89r-20,0r-13,-87r0,87r-18,0","w":192},"\u00a0":{"w":48}}});

	
	if (themeSettings.logoAnimated){
		//** load the animation javscript 
		$.getScript('js/jquery.frame.animation.js', function() {
		
				$(window).load(function() { 
					//** create a hidden element and load animation frames
					$('body').append('<img id="preload-logo" style="display:none;" src="images/brown/logo-anim.png"> ');
					
					//** on image load
					$('#preload-logo').load(function(){
						
						//** replace the current static logo with an animated one
						$('#header').css("background","url('images/brown/logo-anim.png') no-repeat center 0px")
									.frameAnimation({ 
										imageHeight:1640, 
										delay:50,
										horizontalOffset:397,
										hoverMode:false,
										repeat:-1
									});
					
					}); // image load
					
				}); // on document load
		
		
		}); // load remote script for logo animation
	}
	
	
	
	

	
	//** on DOM loaded
	$(function() {
		
		//** Replace text with cufon using the right color theme
		cufonReplace('light');
		
		//** check if the slider exist on the current page
		if ( $("#slider").size() ) { loadSlider(); } 			
			
		//** load the latest update on twitter account
		if (themeSettings.twitter.active){ loadTwitter(); }
		
		//** check if inGallery is needed and load the script
		loadInGallery()
		
		//** load the newsletter validation and behavior
		loadNewsletterValidation();
		
		//** check if logo hover is active
		if (themeSettings.logoHover){
			$('.logo').hover(function(){
				$('#header .logo').stop(true, false).animate({'opacity':0.7}, 500);
			},function(){
				$('#header .logo').stop(true, false).animate({'opacity':1}, 500);
			});
		}
	  

		// The "Get in touch" button behavior
		$('#notice .touch').click(function(){
			if ($('#notice').css('top')=='-230px') {
				$('#notice').animate({top:'-30px'}, 250,'easeInOutCirc');
				$(this).removeClass('down').addClass('up');						// add the arrow pointing up
			}else{
				$('#notice').animate({top:'-230px'}, 650,'easeInOutCirc');
				$(this).removeClass('up').addClass('down');						// add the arrow pointing down
			}
			
			return false;
		});
	});
	
	function loadInGallery(){
		var setDefault = false;
		
		// Check if there are articles with more than one image
		$('.section.articles div.imgLarge').each( function(){
			if ( $('img',this).size()>1 ){ setDefault=true; }
		});
		
		if (setDefault){
			$.getScript('js/jquery.inGallery.js', function() {
			
				$('.section.articles div.imgLarge').each( function(){
					if ($('img',this).size()>1){
						var newGal = new inGallery(this, {'slideInArticle':true });
					}
				});
				
			});
		}
	}
	
	function loadTwitter(){
		//** load tweetable javscript 
		$.getScript('js/jquery.tweetable.js', function() {
			$('.tweets span').tweetable({'username':themeSettings.twitter.username, 'callback':function(){
				$('.tweets').fadeIn('slow');
			}});
		});
	}
	
	function loadSlider(){
		//** load coin slider javscript 
		$.getScript('js/jquery.coin-slider.js', function() {
			var slideDelay = 2500;
			
			// attach the slider to #slider
			$("#slides").coinslider({
				width			: 850, 						// width of slider panel
				height			: 250, 						// height of slider panel
				spw				: 12,						// squares per width
				sph				: 1, 						// squares per height
				delay			: slideDelay,				// delay between images in ms
				sDelay			: 70, 						// delay beetwen squares in ms
				opacity			: 0.7, 						// opacity of title and navigation
				titleSpeed		: 500, 						// speed of title appereance in ms
				effect			: 'straight', 				// random, swirl, rain, straight
				navigation		: true, 					// prev next and buttonsu 
				links 			: false, 					// show images as links 
				navLetters		: false,					// show letters on nav buttons
				navHolder		: '#slider div.pager',		// pager navigation
				hoverPause		: true 						// pause on hover
			});
			
		});
	}
	
	
	function loadNewsletterValidation(){
		$('.newsletter input').click(function(){
			var mail = $(this).attr('value');
			
			if (mail=='Please enter a valid email...' || mail=='Enter your e-mail address') { 
				$(this).css('color', '#3d393a').attr('value','');
			}
		});
		
		$('.newsletter a').click(function(){
			var mail = $('.newsletter input').attr('value');
			
			if (mail=='Enter your e-mail address') { 
				$('.newsletter input').fadeOut(350, function(){
					$(this).css('color','#cd2707')
						   .attr('value', 'Please enter a valid email...')
						   .fadeIn(350);
				});
				
				return false;
			}
			
			if (mail=='Please enter a valid email...') { 
				$('.newsletter input').fadeOut(350, function(){
					$(this).fadeIn(350);
				});
				
				return false;
			}
			
			if (isValidEmailAddress(mail)){
				$('.newsletter div>*').fadeOut('fast', function(){
					$('.newsletter a').css('display','none');
					
					$('.newsletter input').css('width', '380px')
										  .css('color','#3d393a')
										  .css('text-align','center')
										  .attr('value','Thank you for your intrest!')
										  .fadeIn();
				});
			}else{
				$('.newsletter input').fadeOut(350, function(){
					$(this).css('color','#cd2707')
						   .attr('value', 'Please enter a valid email...')
						   .fadeIn(350);
				});
			}
		});
	}
	
	// Replace text style  for the correct color theme 
	function cufonReplace(){
		Cufon.replace('h1, h2, h3, h4, h5, a.info, a.collection, .form-button', { fontFamily:'Steelfish',fontWeight:'normal',textShadow:'0px 2px #000' });
		Cufon.replace('a.more', { fontFamily:'Steelfish',fontWeight:'normal', hover:'true',textShadow:'0px 2px #000'});
		Cufon.replace('.menu a', { fontFamily:'Steelfish',fontWeight:'normal', fontSize:'30px' ,hover:'true', textShadow:'0px 2px #000' });
		Cufon.replace('a.collection', { fontFamily:'Steelfish',fontWeight:'normal',textShadow:'0px 2px #000' });
	}
	
	// debuging purpose when new functionality is added
	function log(msg){
		if(window.console&&window.console.log){
			window.console.log("** "+msg);
		}
	}
	
	//Function for e-mail validation on newsletter field
	function isValidEmailAddress(emailAddress) {
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		return pattern.test(emailAddress);
	}