(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../fold/xml-fold")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../fold/xml-fold"],t):t(CodeMirror)})(function(t){"use strict";function e(t){t.state.tagHit&&t.state.tagHit.clear(),t.state.tagOther&&t.state.tagOther.clear(),t.state.tagHit=t.state.tagOther=null}function a(a){a.state.failedTagMatch=!1,a.operation(function(){if(e(a),!a.somethingSelected()){var o=a.getCursor(),i=a.getViewport();i.from=Math.min(i.from,o.line),i.to=Math.max(o.line+1,i.to);var r=t.findMatchingTag(a,o,i);if(r){if(a.state.matchBothTags){var n="open"==r.at?r.open:r.close;n&&(a.state.tagHit=a.markText(n.from,n.to,{className:"CodeMirror-matchingtag"}))}var c="close"==r.at?r.open:r.close;c?a.state.tagOther=a.markText(c.from,c.to,{className:"CodeMirror-matchingtag"}):a.state.failedTagMatch=!0}}})}function o(t){t.state.failedTagMatch&&a(t)}t.defineOption("matchTags",!1,function(i,r,n){n&&n!=t.Init&&(i.off("cursorActivity",a),i.off("viewportChange",o),e(i)),r&&(i.state.matchBothTags="object"==typeof r&&r.bothTags,i.on("cursorActivity",a),i.on("viewportChange",o),a(i))}),t.commands.toMatchingTag=function(e){var a=t.findMatchingTag(e,e.getCursor());if(a){var o="close"==a.at?a.open:a.close;o&&e.extendSelection(o.to,o.from)}}});