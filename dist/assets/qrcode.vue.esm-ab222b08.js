import{h as L,aC as I,w as B,aD as U,E as K}from"./vue-9888607f.js";/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var O=function(){return O=Object.assign||function(h){for(var f,s=1,c=arguments.length;s<c;s++){f=arguments[s];for(var v in f)Object.prototype.hasOwnProperty.call(f,v)&&(h[v]=f[v])}return h},O.apply(this,arguments)};var A;(function(u){var h=function(){function n(e,r,t,o){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var a=[],i=0;i<this.size;i++)a.push(!1);for(var i=0;i<this.size;i++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var l=this.addEccAndInterleave(t);if(this.drawCodewords(l),o==-1)for(var d=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var C=this.getPenaltyScore();C<d&&(o=i,d=C),this.applyMask(i)}c(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return n.encodeText=function(e,r){var t=u.QrSegment.makeSegments(e);return n.encodeSegments(t,r)},n.encodeBinary=function(e,r){var t=u.QrSegment.makeBytes(e);return n.encodeSegments([t],r)},n.encodeSegments=function(e,r,t,o,a,i){if(t===void 0&&(t=1),o===void 0&&(o=40),a===void 0&&(a=-1),i===void 0&&(i=!0),!(n.MIN_VERSION<=t&&t<=o&&o<=n.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");var l,d;for(l=t;;l++){var C=n.getNumDataCodewords(l,r)*8,m=v.getTotalBits(e,l);if(m<=C){d=m;break}if(l>=o)throw new RangeError("Data too long")}for(var E=0,p=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];E<p.length;E++){var w=p[E];i&&d<=n.getNumDataCodewords(l,w)*8&&(r=w)}for(var g=[],M=0,N=e;M<N.length;M++){var R=N[M];f(R.mode.modeBits,4,g),f(R.numChars,R.mode.numCharCountBits(l),g);for(var S=0,z=R.getData();S<z.length;S++){var Y=z[S];g.push(Y)}}c(g.length==d);var _=n.getNumDataCodewords(l,r)*8;c(g.length<=_),f(0,Math.min(4,_-g.length),g),f(0,(8-g.length%8)%8,g),c(g.length%8==0);for(var F=236;g.length<_;F^=253)f(F,8,g);for(var b=[];b.length*8<g.length;)b.push(0);return g.forEach(function(G,Q){return b[Q>>>3]|=G<<7-(Q&7)}),new n(l,r,b,a)},n.prototype.getModule=function(e,r){return 0<=e&&e<this.size&&0<=r&&r<this.size&&this.modules[r][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var r=this.getAlignmentPatternPositions(),t=r.length,e=0;e<t;e++)for(var o=0;o<t;o++)e==0&&o==0||e==0&&o==t-1||e==t-1&&o==0||this.drawAlignmentPattern(r[e],r[o]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var r=this.errorCorrectionLevel.formatBits<<3|e,t=r,o=0;o<10;o++)t=t<<1^(t>>>9)*1335;var a=(r<<10|t)^21522;c(a>>>15==0);for(var o=0;o<=5;o++)this.setFunctionModule(8,o,s(a,o));this.setFunctionModule(8,7,s(a,6)),this.setFunctionModule(8,8,s(a,7)),this.setFunctionModule(7,8,s(a,8));for(var o=9;o<15;o++)this.setFunctionModule(14-o,8,s(a,o));for(var o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,s(a,o));for(var o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,s(a,o));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,r=0;r<12;r++)e=e<<1^(e>>>11)*7973;var t=this.version<<12|e;c(t>>>18==0);for(var r=0;r<18;r++){var o=s(t,r),a=this.size-11+r%3,i=Math.floor(r/3);this.setFunctionModule(a,i,o),this.setFunctionModule(i,a,o)}}},n.prototype.drawFinderPattern=function(e,r){for(var t=-4;t<=4;t++)for(var o=-4;o<=4;o++){var a=Math.max(Math.abs(o),Math.abs(t)),i=e+o,l=r+t;0<=i&&i<this.size&&0<=l&&l<this.size&&this.setFunctionModule(i,l,a!=2&&a!=4)}},n.prototype.drawAlignmentPattern=function(e,r){for(var t=-2;t<=2;t++)for(var o=-2;o<=2;o++)this.setFunctionModule(e+o,r+t,Math.max(Math.abs(o),Math.abs(t))!=1)},n.prototype.setFunctionModule=function(e,r,t){this.modules[r][e]=t,this.isFunction[r][e]=!0},n.prototype.addEccAndInterleave=function(e){var r=this.version,t=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(r,t))throw new RangeError("Invalid argument");for(var o=n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][r],a=n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][r],i=Math.floor(n.getNumRawDataModules(r)/8),l=o-i%o,d=Math.floor(i/o),C=[],m=n.reedSolomonComputeDivisor(a),E=0,p=0;E<o;E++){var w=e.slice(p,p+d-a+(E<l?0:1));p+=w.length;var g=n.reedSolomonComputeRemainder(w,m);E<l&&w.push(0),C.push(w.concat(g))}for(var M=[],N=function(R){C.forEach(function(S,z){(R!=d-a||z>=l)&&M.push(S[R])})},E=0;E<C[0].length;E++)N(E);return c(M.length==i),M},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var r=0,t=this.size-1;t>=1;t-=2){t==6&&(t=5);for(var o=0;o<this.size;o++)for(var a=0;a<2;a++){var i=t-a,l=(t+1&2)==0,d=l?this.size-1-o:o;!this.isFunction[d][i]&&r<e.length*8&&(this.modules[d][i]=s(e[r>>>3],7-(r&7)),r++)}}c(r==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var r=0;r<this.size;r++)for(var t=0;t<this.size;t++){var o=void 0;switch(e){case 0:o=(t+r)%2==0;break;case 1:o=r%2==0;break;case 2:o=t%3==0;break;case 3:o=(t+r)%3==0;break;case 4:o=(Math.floor(t/3)+Math.floor(r/2))%2==0;break;case 5:o=t*r%2+t*r%3==0;break;case 6:o=(t*r%2+t*r%3)%2==0;break;case 7:o=((t+r)%2+t*r%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[r][t]&&o&&(this.modules[r][t]=!this.modules[r][t])}},n.prototype.getPenaltyScore=function(){for(var e=0,r=0;r<this.size;r++){for(var t=!1,o=0,a=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[r][i]==t?(o++,o==5?e+=n.PENALTY_N1:o>5&&e++):(this.finderPenaltyAddHistory(o,a),t||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),t=this.modules[r][i],o=1);e+=this.finderPenaltyTerminateAndCount(t,o,a)*n.PENALTY_N3}for(var i=0;i<this.size;i++){for(var t=!1,l=0,a=[0,0,0,0,0,0,0],r=0;r<this.size;r++)this.modules[r][i]==t?(l++,l==5?e+=n.PENALTY_N1:l>5&&e++):(this.finderPenaltyAddHistory(l,a),t||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),t=this.modules[r][i],l=1);e+=this.finderPenaltyTerminateAndCount(t,l,a)*n.PENALTY_N3}for(var r=0;r<this.size-1;r++)for(var i=0;i<this.size-1;i++){var d=this.modules[r][i];d==this.modules[r][i+1]&&d==this.modules[r+1][i]&&d==this.modules[r+1][i+1]&&(e+=n.PENALTY_N2)}for(var C=0,m=0,E=this.modules;m<E.length;m++){var p=E[m];C=p.reduce(function(M,N){return M+(N?1:0)},C)}var w=this.size*this.size,g=Math.ceil(Math.abs(C*20-w*10)/w)-1;return c(0<=g&&g<=9),e+=g*n.PENALTY_N4,c(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,r=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,t=[6],o=this.size-7;t.length<e;o-=r)t.splice(1,0,o);return t},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var r=(16*e+128)*e+64;if(e>=2){var t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return c(208<=r&&r<=29648),r},n.getNumDataCodewords=function(e,r){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var r=[],t=0;t<e-1;t++)r.push(0);r.push(1);for(var o=1,t=0;t<e;t++){for(var a=0;a<r.length;a++)r[a]=n.reedSolomonMultiply(r[a],o),a+1<r.length&&(r[a]^=r[a+1]);o=n.reedSolomonMultiply(o,2)}return r},n.reedSolomonComputeRemainder=function(e,r){for(var t=r.map(function(d){return 0}),o=function(d){var C=d^t.shift();t.push(0),r.forEach(function(m,E){return t[E]^=n.reedSolomonMultiply(m,C)})},a=0,i=e;a<i.length;a++){var l=i[a];o(l)}return t},n.reedSolomonMultiply=function(e,r){if(e>>>8||r>>>8)throw new RangeError("Byte out of range");for(var t=0,o=7;o>=0;o--)t=t<<1^(t>>>7)*285,t^=(r>>>o&1)*e;return c(t>>>8==0),t},n.prototype.finderPenaltyCountPatterns=function(e){var r=e[1];c(r<=this.size*3);var t=r>0&&e[2]==r&&e[3]==r*3&&e[4]==r&&e[5]==r;return(t&&e[0]>=r*4&&e[6]>=r?1:0)+(t&&e[6]>=r*4&&e[0]>=r?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,r,t){return e&&(this.finderPenaltyAddHistory(r,t),r=0),r+=this.size,this.finderPenaltyAddHistory(r,t),this.finderPenaltyCountPatterns(t)},n.prototype.finderPenaltyAddHistory=function(e,r){r[0]==0&&(e+=this.size),r.pop(),r.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();u.QrCode=h;function f(n,e,r){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var t=e-1;t>=0;t--)r.push(n>>>t&1)}function s(n,e){return(n>>>e&1)!=0}function c(n){if(!n)throw new Error("Assertion error")}var v=function(){function n(e,r,t){if(this.mode=e,this.numChars=r,this.bitData=t,r<0)throw new RangeError("Invalid argument");this.bitData=t.slice()}return n.makeBytes=function(e){for(var r=[],t=0,o=e;t<o.length;t++){var a=o[t];f(a,8,r)}return new n(n.Mode.BYTE,e.length,r)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var r=[],t=0;t<e.length;){var o=Math.min(e.length-t,3);f(parseInt(e.substring(t,t+o),10),o*3+1,r),t+=o}return new n(n.Mode.NUMERIC,e.length,r)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var r=[],t;for(t=0;t+2<=e.length;t+=2){var o=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t))*45;o+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),f(o,11,r)}return t<e.length&&f(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,r),new n(n.Mode.ALPHANUMERIC,e.length,r)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var r=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)f(e,8,r);else if(e<16384)f(2,2,r),f(e,14,r);else if(e<1e6)f(6,3,r),f(e,21,r);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,r)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,r){for(var t=0,o=0,a=e;o<a.length;o++){var i=a[o],l=i.mode.numCharCountBits(r);if(i.numChars>=1<<l)return 1/0;t+=4+l+i.bitData.length}return t},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var r=[],t=0;t<e.length;t++)e.charAt(t)!="%"?r.push(e.charCodeAt(t)):(r.push(parseInt(e.substring(t+1,t+3),16)),t+=2);return r},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();u.QrSegment=v})(A||(A={}));(function(u){(function(h){var f=function(){function s(c,v){this.ordinal=c,this.formatBits=v}return s.LOW=new s(0,1),s.MEDIUM=new s(1,0),s.QUARTILE=new s(2,3),s.HIGH=new s(3,2),s}();h.Ecc=f})(u.QrCode||(u.QrCode={}))})(A||(A={}));(function(u){(function(h){var f=function(){function s(c,v){this.modeBits=c,this.numBitsCharCount=v}return s.prototype.numCharCountBits=function(c){return this.numBitsCharCount[Math.floor((c+7)/17)]},s.NUMERIC=new s(1,[10,12,14]),s.ALPHANUMERIC=new s(2,[9,11,13]),s.BYTE=new s(4,[8,16,16]),s.KANJI=new s(8,[8,10,12]),s.ECI=new s(7,[0,0,0]),s}();h.Mode=f})(u.QrSegment||(u.QrSegment={}))})(A||(A={}));var P=A,k="H",D={L:P.QrCode.Ecc.LOW,M:P.QrCode.Ecc.MEDIUM,Q:P.QrCode.Ecc.QUARTILE,H:P.QrCode.Ecc.HIGH},W=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function y(u){return u in D}function H(u,h){h===void 0&&(h=0);var f=[];return u.forEach(function(s,c){var v=null;s.forEach(function(n,e){if(!n&&v!==null){f.push("M".concat(v+h," ").concat(c+h,"h").concat(e-v,"v1H").concat(v+h,"z")),v=null;return}if(e===s.length-1){if(!n)return;v===null?f.push("M".concat(e+h,",").concat(c+h," h1v1H").concat(e+h,"z")):f.push("M".concat(v+h,",").concat(c+h," h").concat(e+1-v,"v1H").concat(v+h,"z"));return}n&&v===null&&(v=e)})}),f.join("")}var T={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:k,validator:function(u){return y(u)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},$=O(O({},T),{renderAs:{type:String,required:!1,default:"canvas",validator:function(u){return["canvas","svg"].indexOf(u)>-1}}}),X=L({name:"QRCodeSvg",props:T,setup:function(u){var h=B(0),f=B(""),s=function(){var c=u.value,v=u.level,n=u.margin,e=P.QrCode.encodeText(c,D[v]).getModules();h.value=e.length+n*2,f.value=H(e,n)};return s(),U(s),function(){return I("svg",{width:u.size,height:u.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h.value," ").concat(h.value)},[I("path",{fill:u.background,d:"M0,0 h".concat(h.value,"v").concat(h.value,"H0z")}),I("path",{fill:u.foreground,d:f.value})])}}}),J=L({name:"QRCodeCanvas",props:T,setup:function(u){var h=B(null),f=function(){var s=u.value,c=u.level,v=u.size,n=u.margin,e=u.background,r=u.foreground,t=h.value;if(t){var o=t.getContext("2d");if(o){var a=P.QrCode.encodeText(s,D[c]).getModules(),i=a.length+n*2,l=window.devicePixelRatio||1,d=v/i*l;t.height=t.width=v*l,o.scale(d,d),o.fillStyle=e,o.fillRect(0,0,i,i),o.fillStyle=r,W?o.fill(new Path2D(H(a,n))):a.forEach(function(C,m){C.forEach(function(E,p){E&&o.fillRect(p+n,m+n,1,1)})})}}};return K(f),U(f),function(){return I("canvas",{ref:h,style:{width:"".concat(u.size,"px"),height:"".concat(u.size,"px")}})}}}),Z=L({name:"Qrcode",render:function(){var u=this.$props,h=u.renderAs,f=u.value,s=u.size,c=u.margin,v=u.level,n=u.background,e=u.foreground,r=s>>>0,t=c>>>0,o=y(v)?v:k;return I(h==="svg"?X:J,{value:f,size:r,margin:t,level:o,background:n,foreground:e})},props:$});export{Z as Q};