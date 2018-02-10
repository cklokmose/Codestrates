(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict";function e(t,e){function i(t){clearTimeout(n.doRedraw),n.doRedraw=setTimeout(function(){n.redraw()},t)}this.cm=t,this.options=e,this.buttonHeight=e.scrollButtonHeight||t.getOption("scrollButtonHeight"),this.annotations=[],this.doRedraw=this.doUpdate=null,this.div=t.getWrapperElement().appendChild(document.createElement("div")),this.div.style.cssText="position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none",this.computeScale();var n=this;t.on("refresh",this.resizeHandler=function(){clearTimeout(n.doUpdate),n.doUpdate=setTimeout(function(){n.computeScale()&&i(20)},100)}),t.on("markerAdded",this.resizeHandler),t.on("markerCleared",this.resizeHandler),e.listenForChanges!==!1&&t.on("change",this.changeHandler=function(){i(250)})}t.defineExtension("annotateScrollbar",function(t){return"string"==typeof t&&(t={className:t}),new e(this,t)}),t.defineOption("scrollButtonHeight",0),e.prototype.computeScale=function(){var t=this.cm,e=(t.getWrapperElement().clientHeight-t.display.barHeight-2*this.buttonHeight)/t.getScrollerElement().scrollHeight;if(e!=this.hScale)return this.hScale=e,!0},e.prototype.update=function(t){this.annotations=t,this.redraw()},e.prototype.redraw=function(t){function e(t,e){if(h!=t.line&&(h=t.line,l=i.getLineHandle(h)),l.widgets&&l.widgets.length||a&&l.height>s)return i.charCoords(t,"local")[e?"top":"bottom"];var n=i.heightAtLine(l,"local");return n+(e?0:l.height)}t!==!1&&this.computeScale();var i=this.cm,n=this.hScale,o=document.createDocumentFragment(),r=this.annotations,a=i.getOption("lineWrapping"),s=a&&1.5*i.defaultTextHeight(),h=null,l=null,d=i.lastLine();if(i.display.barWidth)for(var c,p=0;p<r.length;p++){var u=r[p];if(!(u.to.line>d)){for(var f=c||e(u.from,!0)*n,m=e(u.to,!1)*n;p<r.length-1&&!(r[p+1].to.line>d)&&(c=e(r[p+1].from,!0)*n,!(c>m+.9));)u=r[++p],m=e(u.to,!1)*n;if(m!=f){var g=Math.max(m-f,3),H=o.appendChild(document.createElement("div"));H.style.cssText="position: absolute; right: 0px; width: "+Math.max(i.display.barWidth-1,2)+"px; top: "+(f+this.buttonHeight)+"px; height: "+g+"px",H.className=this.options.className,u.id&&H.setAttribute("annotation-id",u.id)}}}this.div.textContent="",this.div.appendChild(o)},e.prototype.clear=function(){this.cm.off("refresh",this.resizeHandler),this.cm.off("markerAdded",this.resizeHandler),this.cm.off("markerCleared",this.resizeHandler),this.changeHandler&&this.cm.off("change",this.changeHandler),this.div.parentNode.removeChild(this.div)}});