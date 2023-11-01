import{v as q}from"./index-a6f6b7ce.js";import{h as D,az as b,w as L,aA as V,E as j,ar as x,q as Q,X as k,o as O,O as U,P as B,_ as K,k as ee,V as re,U as te,z as _,m as oe,p as ne,W as ae}from"./vue-99362bf9.js";/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var T=function(){return T=Object.assign||function(l){for(var f,s=1,h=arguments.length;s<h;s++){f=arguments[s];for(var v in f)Object.prototype.hasOwnProperty.call(f,v)&&(l[v]=f[v])}return l},T.apply(this,arguments)};var N;(function(u){var l=function(){function o(e,r,t,n){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var a=[],i=0;i<this.size;i++)a.push(!1);for(var i=0;i<this.size;i++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var c=this.addEccAndInterleave(t);if(this.drawCodewords(c),n==-1)for(var d=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var p=this.getPenaltyScore();p<d&&(n=i,d=p),this.applyMask(i)}h(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}return o.encodeText=function(e,r){var t=u.QrSegment.makeSegments(e);return o.encodeSegments(t,r)},o.encodeBinary=function(e,r){var t=u.QrSegment.makeBytes(e);return o.encodeSegments([t],r)},o.encodeSegments=function(e,r,t,n,a,i){if(t===void 0&&(t=1),n===void 0&&(n=40),a===void 0&&(a=-1),i===void 0&&(i=!0),!(o.MIN_VERSION<=t&&t<=n&&n<=o.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");var c,d;for(c=t;;c++){var p=o.getNumDataCodewords(c,r)*8,E=v.getTotalBits(e,c);if(E<=p){d=E;break}if(c>=n)throw new RangeError("Data too long")}for(var m=0,C=[o.Ecc.MEDIUM,o.Ecc.QUARTILE,o.Ecc.HIGH];m<C.length;m++){var w=C[m];i&&d<=o.getNumDataCodewords(c,w)*8&&(r=w)}for(var g=[],M=0,A=e;M<A.length;M++){var R=A[M];f(R.mode.modeBits,4,g),f(R.numChars,R.mode.numCharCountBits(c),g);for(var S=0,I=R.getData();S<I.length;S++){var J=I[S];g.push(J)}}h(g.length==d);var F=o.getNumDataCodewords(c,r)*8;h(g.length<=F),f(0,Math.min(4,F-g.length),g),f(0,(8-g.length%8)%8,g),h(g.length%8==0);for(var Y=236;g.length<F;Y^=253)f(Y,8,g);for(var z=[];z.length*8<g.length;)z.push(0);return g.forEach(function(Z,G){return z[G>>>3]|=Z<<7-(G&7)}),new o(c,r,z,a)},o.prototype.getModule=function(e,r){return 0<=e&&e<this.size&&0<=r&&r<this.size&&this.modules[r][e]},o.prototype.getModules=function(){return this.modules},o.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var r=this.getAlignmentPatternPositions(),t=r.length,e=0;e<t;e++)for(var n=0;n<t;n++)e==0&&n==0||e==0&&n==t-1||e==t-1&&n==0||this.drawAlignmentPattern(r[e],r[n]);this.drawFormatBits(0),this.drawVersion()},o.prototype.drawFormatBits=function(e){for(var r=this.errorCorrectionLevel.formatBits<<3|e,t=r,n=0;n<10;n++)t=t<<1^(t>>>9)*1335;var a=(r<<10|t)^21522;h(a>>>15==0);for(var n=0;n<=5;n++)this.setFunctionModule(8,n,s(a,n));this.setFunctionModule(8,7,s(a,6)),this.setFunctionModule(8,8,s(a,7)),this.setFunctionModule(7,8,s(a,8));for(var n=9;n<15;n++)this.setFunctionModule(14-n,8,s(a,n));for(var n=0;n<8;n++)this.setFunctionModule(this.size-1-n,8,s(a,n));for(var n=8;n<15;n++)this.setFunctionModule(8,this.size-15+n,s(a,n));this.setFunctionModule(8,this.size-8,!0)},o.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,r=0;r<12;r++)e=e<<1^(e>>>11)*7973;var t=this.version<<12|e;h(t>>>18==0);for(var r=0;r<18;r++){var n=s(t,r),a=this.size-11+r%3,i=Math.floor(r/3);this.setFunctionModule(a,i,n),this.setFunctionModule(i,a,n)}}},o.prototype.drawFinderPattern=function(e,r){for(var t=-4;t<=4;t++)for(var n=-4;n<=4;n++){var a=Math.max(Math.abs(n),Math.abs(t)),i=e+n,c=r+t;0<=i&&i<this.size&&0<=c&&c<this.size&&this.setFunctionModule(i,c,a!=2&&a!=4)}},o.prototype.drawAlignmentPattern=function(e,r){for(var t=-2;t<=2;t++)for(var n=-2;n<=2;n++)this.setFunctionModule(e+n,r+t,Math.max(Math.abs(n),Math.abs(t))!=1)},o.prototype.setFunctionModule=function(e,r,t){this.modules[r][e]=t,this.isFunction[r][e]=!0},o.prototype.addEccAndInterleave=function(e){var r=this.version,t=this.errorCorrectionLevel;if(e.length!=o.getNumDataCodewords(r,t))throw new RangeError("Invalid argument");for(var n=o.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][r],a=o.ECC_CODEWORDS_PER_BLOCK[t.ordinal][r],i=Math.floor(o.getNumRawDataModules(r)/8),c=n-i%n,d=Math.floor(i/n),p=[],E=o.reedSolomonComputeDivisor(a),m=0,C=0;m<n;m++){var w=e.slice(C,C+d-a+(m<c?0:1));C+=w.length;var g=o.reedSolomonComputeRemainder(w,E);m<c&&w.push(0),p.push(w.concat(g))}for(var M=[],A=function(R){p.forEach(function(S,I){(R!=d-a||I>=c)&&M.push(S[R])})},m=0;m<p[0].length;m++)A(m);return h(M.length==i),M},o.prototype.drawCodewords=function(e){if(e.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var r=0,t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(var n=0;n<this.size;n++)for(var a=0;a<2;a++){var i=t-a,c=(t+1&2)==0,d=c?this.size-1-n:n;!this.isFunction[d][i]&&r<e.length*8&&(this.modules[d][i]=s(e[r>>>3],7-(r&7)),r++)}}h(r==e.length*8)},o.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var r=0;r<this.size;r++)for(var t=0;t<this.size;t++){var n=void 0;switch(e){case 0:n=(t+r)%2==0;break;case 1:n=r%2==0;break;case 2:n=t%3==0;break;case 3:n=(t+r)%3==0;break;case 4:n=(Math.floor(t/3)+Math.floor(r/2))%2==0;break;case 5:n=t*r%2+t*r%3==0;break;case 6:n=(t*r%2+t*r%3)%2==0;break;case 7:n=((t+r)%2+t*r%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[r][t]&&n&&(this.modules[r][t]=!this.modules[r][t])}},o.prototype.getPenaltyScore=function(){for(var e=0,r=0;r<this.size;r++){for(var t=!1,n=0,a=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[r][i]==t?(n++,n==5?e+=o.PENALTY_N1:n>5&&e++):(this.finderPenaltyAddHistory(n,a),t||(e+=this.finderPenaltyCountPatterns(a)*o.PENALTY_N3),t=this.modules[r][i],n=1);e+=this.finderPenaltyTerminateAndCount(t,n,a)*o.PENALTY_N3}for(var i=0;i<this.size;i++){for(var t=!1,c=0,a=[0,0,0,0,0,0,0],r=0;r<this.size;r++)this.modules[r][i]==t?(c++,c==5?e+=o.PENALTY_N1:c>5&&e++):(this.finderPenaltyAddHistory(c,a),t||(e+=this.finderPenaltyCountPatterns(a)*o.PENALTY_N3),t=this.modules[r][i],c=1);e+=this.finderPenaltyTerminateAndCount(t,c,a)*o.PENALTY_N3}for(var r=0;r<this.size-1;r++)for(var i=0;i<this.size-1;i++){var d=this.modules[r][i];d==this.modules[r][i+1]&&d==this.modules[r+1][i]&&d==this.modules[r+1][i+1]&&(e+=o.PENALTY_N2)}for(var p=0,E=0,m=this.modules;E<m.length;E++){var C=m[E];p=C.reduce(function(M,A){return M+(A?1:0)},p)}var w=this.size*this.size,g=Math.ceil(Math.abs(p*20-w*10)/w)-1;return h(0<=g&&g<=9),e+=g*o.PENALTY_N4,h(0<=e&&e<=2568888),e},o.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,r=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,t=[6],n=this.size-7;t.length<e;n-=r)t.splice(1,0,n);return t},o.getNumRawDataModules=function(e){if(e<o.MIN_VERSION||e>o.MAX_VERSION)throw new RangeError("Version number out of range");var r=(16*e+128)*e+64;if(e>=2){var t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return h(208<=r&&r<=29648),r},o.getNumDataCodewords=function(e,r){return Math.floor(o.getNumRawDataModules(e)/8)-o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]},o.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var r=[],t=0;t<e-1;t++)r.push(0);r.push(1);for(var n=1,t=0;t<e;t++){for(var a=0;a<r.length;a++)r[a]=o.reedSolomonMultiply(r[a],n),a+1<r.length&&(r[a]^=r[a+1]);n=o.reedSolomonMultiply(n,2)}return r},o.reedSolomonComputeRemainder=function(e,r){for(var t=r.map(function(d){return 0}),n=function(d){var p=d^t.shift();t.push(0),r.forEach(function(E,m){return t[m]^=o.reedSolomonMultiply(E,p)})},a=0,i=e;a<i.length;a++){var c=i[a];n(c)}return t},o.reedSolomonMultiply=function(e,r){if(e>>>8||r>>>8)throw new RangeError("Byte out of range");for(var t=0,n=7;n>=0;n--)t=t<<1^(t>>>7)*285,t^=(r>>>n&1)*e;return h(t>>>8==0),t},o.prototype.finderPenaltyCountPatterns=function(e){var r=e[1];h(r<=this.size*3);var t=r>0&&e[2]==r&&e[3]==r*3&&e[4]==r&&e[5]==r;return(t&&e[0]>=r*4&&e[6]>=r?1:0)+(t&&e[6]>=r*4&&e[0]>=r?1:0)},o.prototype.finderPenaltyTerminateAndCount=function(e,r,t){return e&&(this.finderPenaltyAddHistory(r,t),r=0),r+=this.size,this.finderPenaltyAddHistory(r,t),this.finderPenaltyCountPatterns(t)},o.prototype.finderPenaltyAddHistory=function(e,r){r[0]==0&&(e+=this.size),r.pop(),r.unshift(e)},o.MIN_VERSION=1,o.MAX_VERSION=40,o.PENALTY_N1=3,o.PENALTY_N2=3,o.PENALTY_N3=40,o.PENALTY_N4=10,o.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],o.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],o}();u.QrCode=l;function f(o,e,r){if(e<0||e>31||o>>>e)throw new RangeError("Value out of range");for(var t=e-1;t>=0;t--)r.push(o>>>t&1)}function s(o,e){return(o>>>e&1)!=0}function h(o){if(!o)throw new Error("Assertion error")}var v=function(){function o(e,r,t){if(this.mode=e,this.numChars=r,this.bitData=t,r<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}return o.makeBytes=function(e){for(var r=[],t=0,n=e;t<n.length;t++){var a=n[t];f(a,8,r)}return new o(o.Mode.BYTE,e.length,r)},o.makeNumeric=function(e){if(!o.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var r=[],t=0;t<e.length;){var n=Math.min(e.length-t,3);f(parseInt(e.substring(t,t+n),10),n*3+1,r),t+=n}return new o(o.Mode.NUMERIC,e.length,r)},o.makeAlphanumeric=function(e){if(!o.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var r=[],t;for(t=0;t+2<=e.length;t+=2){var n=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t))*45;n+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),f(n,11,r)}return t<e.length&&f(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,r),new o(o.Mode.ALPHANUMERIC,e.length,r)},o.makeSegments=function(e){return e==""?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]},o.makeEci=function(e){var r=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)f(e,8,r);else if(e<16384)f(2,2,r),f(e,14,r);else if(e<1e6)f(6,3,r),f(e,21,r);else throw new RangeError("ECI assignment value out of range");return new o(o.Mode.ECI,0,r)},o.isNumeric=function(e){return o.NUMERIC_REGEX.test(e)},o.isAlphanumeric=function(e){return o.ALPHANUMERIC_REGEX.test(e)},o.prototype.getData=function(){return this.bitData.slice()},o.getTotalBits=function(e,r){for(var t=0,n=0,a=e;n<a.length;n++){var i=a[n],c=i.mode.numCharCountBits(r);if(i.numChars>=1<<c)return 1/0;t+=4+c+i.bitData.length}return t},o.toUtf8ByteArray=function(e){e=encodeURI(e);for(var r=[],t=0;t<e.length;t++)e.charAt(t)!="%"?r.push(e.charCodeAt(t)):(r.push(parseInt(e.substring(t+1,t+3),16)),t+=2);return r},o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",o}();u.QrSegment=v})(N||(N={}));(function(u){(function(l){var f=function(){function s(h,v){this.ordinal=h,this.formatBits=v}return s.LOW=new s(0,1),s.MEDIUM=new s(1,0),s.QUARTILE=new s(2,3),s.HIGH=new s(3,2),s}();l.Ecc=f})(u.QrCode||(u.QrCode={}))})(N||(N={}));(function(u){(function(l){var f=function(){function s(h,v){this.modeBits=h,this.numBitsCharCount=v}return s.prototype.numCharCountBits=function(h){return this.numBitsCharCount[Math.floor((h+7)/17)]},s.NUMERIC=new s(1,[10,12,14]),s.ALPHANUMERIC=new s(2,[9,11,13]),s.BYTE=new s(4,[8,16,16]),s.KANJI=new s(8,[8,10,12]),s.ECI=new s(7,[0,0,0]),s}();l.Mode=f})(u.QrSegment||(u.QrSegment={}))})(N||(N={}));var P=N,W="H",y={L:P.QrCode.Ecc.LOW,M:P.QrCode.Ecc.MEDIUM,Q:P.QrCode.Ecc.QUARTILE,H:P.QrCode.Ecc.HIGH},ie=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function X(u){return u in y}function $(u,l){l===void 0&&(l=0);var f=[];return u.forEach(function(s,h){var v=null;s.forEach(function(o,e){if(!o&&v!==null){f.push("M".concat(v+l," ").concat(h+l,"h").concat(e-v,"v1H").concat(v+l,"z")),v=null;return}if(e===s.length-1){if(!o)return;v===null?f.push("M".concat(e+l,",").concat(h+l," h1v1H").concat(e+l,"z")):f.push("M".concat(v+l,",").concat(h+l," h").concat(e+1-v,"v1H").concat(v+l,"z"));return}o&&v===null&&(v=e)})}),f.join("")}var H={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:W,validator:function(u){return X(u)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},se=T(T({},H),{renderAs:{type:String,required:!1,default:"canvas",validator:function(u){return["canvas","svg"].indexOf(u)>-1}}}),ue=D({name:"QRCodeSvg",props:H,setup:function(u){var l=L(0),f=L(""),s=function(){var h=u.value,v=u.level,o=u.margin,e=P.QrCode.encodeText(h,y[v]).getModules();l.value=e.length+o*2,f.value=$(e,o)};return s(),V(s),function(){return b("svg",{width:u.size,height:u.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(l.value," ").concat(l.value)},[b("path",{fill:u.background,d:"M0,0 h".concat(l.value,"v").concat(l.value,"H0z")}),b("path",{fill:u.foreground,d:f.value})])}}}),le=D({name:"QRCodeCanvas",props:H,setup:function(u){var l=L(null),f=function(){var s=u.value,h=u.level,v=u.size,o=u.margin,e=u.background,r=u.foreground,t=l.value;if(t){var n=t.getContext("2d");if(n){var a=P.QrCode.encodeText(s,y[h]).getModules(),i=a.length+o*2,c=window.devicePixelRatio||1,d=v/i*c;t.height=t.width=v*c,n.scale(d,d),n.fillStyle=e,n.fillRect(0,0,i,i),n.fillStyle=r,ie?n.fill(new Path2D($(a,o))):a.forEach(function(p,E){p.forEach(function(m,C){m&&n.fillRect(C+o,E+o,1,1)})})}}};return j(f),V(f),function(){return b("canvas",{ref:l,style:{width:"".concat(u.size,"px"),height:"".concat(u.size,"px")}})}}}),fe=D({name:"Qrcode",render:function(){var u=this.$props,l=u.renderAs,f=u.value,s=u.size,h=u.margin,v=u.level,o=u.background,e=u.foreground,r=s>>>0,t=h>>>0,n=X(v)?v:W;return b(l==="svg"?ue:le,{value:f,size:r,margin:t,level:n,background:o,foreground:e})},props:se});const ce={class:"title"},he={style:{"text-align":"center","margin-top":"10%"}},ge=D({__name:"scanQrCode",setup(u){const l=x("baTable"),{t:f}=q(),s=L(""),h=()=>{s.value=JSON.parse(JSON.stringify(l.form.operateIds)).shift().toString()};return(v,o)=>{const e=Q("block"),r=Q("el-scrollbar"),t=Q("el-dialog"),n=k("drag"),a=k("zoom"),i=k("loading");return O(),U(t,{class:"ba-operate-dialog",onOpen:h,"close-on-click-modal":!1,"model-value":["Qrcode"].includes(_(l).form.operate),onClose:_(l).toggleForm,width:"25%"},{header:B(()=>[K((O(),ee("div",ce,[re(te(_(l).form.operate?_(f)(_(l).form.operate):""),1)])),[[n,[".ba-operate-dialog",".el-dialog__header"]],[a,".ba-operate-dialog"]])]),default:B(()=>[K((O(),U(r,{class:"ba-table-form-scrollbar"},{default:B(()=>[s.value>0?(O(),U(e,{key:0},{default:B(()=>[oe("div",he,[ne(fe,{value:s.value,size:300,level:"L",margin:1,style:{border:"5px solid #000"}},null,8,["value"])])]),_:1})):ae("",!0)]),_:1})),[[i,_(l).form.loading]])]),_:1},8,["model-value","onClose"])}}});export{ge as _};