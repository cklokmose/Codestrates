(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){function e(t,e){for(var r=0,n=t.length;r<n;++r)e(t[r])}function r(t,e){if(!Array.prototype.indexOf){for(var r=t.length;r--;)if(t[r]===e)return!0;return!1}return t.indexOf(e)!=-1}function n(e,r,n,i){var o=e.getCursor(),s=n(e,o);if(!/\b(?:string|comment)\b/.test(s.type)){s.state=t.innerMode(e.getMode(),s.state).state,/^[\w$_]*$/.test(s.string)?s.end>o.ch&&(s.end=o.ch,s.string=s.string.slice(0,o.ch-s.start)):s={start:o.ch,end:o.ch,string:"",state:s.state,type:"."==s.string?"property":null};for(var a=s;"property"==a.type;){if(a=n(e,l(o.line,a.start)),"."!=a.string)return;if(a=n(e,l(o.line,a.start)),!c)var c=[];c.push(a)}return{list:f(s,c,r,i),from:l(o.line,s.start),to:l(o.line,s.end)}}}function i(t,e){return n(t,g,function(t,e){return t.getTokenAt(e)},e)}function o(t,e){var r=t.getTokenAt(e);return e.ch==r.start+1&&"."==r.string.charAt(0)?(r.end=r.start,r.string=".",r.type="property"):/^\.[\w$_]*$/.test(r.string)&&(r.type="property",r.start++,r.string=r.string.replace(/\./,"")),r}function s(t,e){return n(t,d,o,e)}function a(t,e){if(Object.getOwnPropertyNames&&Object.getPrototypeOf)for(var r=t;r;r=Object.getPrototypeOf(r))Object.getOwnPropertyNames(r).forEach(e);else for(var n in t)e(n)}function f(t,n,i,o){function s(t){0!=t.lastIndexOf(g,0)||r(l,t)||l.push(t)}function f(t){"string"==typeof t?e(c,s):t instanceof Array?e(p,s):t instanceof Function&&e(u,s),a(t,s)}var l=[],g=t.string,d=o&&o.globalScope||window;if(n&&n.length){var y,h=n.pop();for(h.type&&0===h.type.indexOf("variable")?(o&&o.additionalContext&&(y=o.additionalContext[h.string]),o&&o.useGlobalScope===!1||(y=y||d[h.string])):"string"==h.type?y="":"atom"==h.type?y=1:"function"==h.type&&(null==d.jQuery||"$"!=h.string&&"jQuery"!=h.string||"function"!=typeof d.jQuery?null!=d._&&"_"==h.string&&"function"==typeof d._&&(y=d._()):y=d.jQuery());null!=y&&n.length;)y=y[n.pop().string];null!=y&&f(y)}else{for(var b=t.state.localVars;b;b=b.next)s(b.name);for(var b=t.state.globalVars;b;b=b.next)s(b.name);o&&o.useGlobalScope===!1||f(d),e(i,s)}return l}var l=t.Pos;t.registerHelper("hint","javascript",i),t.registerHelper("hint","coffeescript",s);var c="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),p="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),u="prototype apply call bind".split(" "),g="break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with".split(" "),d="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")});