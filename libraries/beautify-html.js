(function(){var t=function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){function i(t){return t.replace(/^\s+/g,"")}function s(t){return t.replace(/\s+$/g,"")}function r(t,e,n,r){function h(){function t(t){var e="",n=function(n){var i=e+n.toLowerCase();e=i.length<=t.length?i:i.substr(i.length-t.length,t.length)},i=function(){return e.indexOf(t)===-1};return{add:n,doesNotMatch:i}}return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.newlines=0,this.indent_content=p,this.indent_body_inner_html=l,this.indent_head_inner_html=c,this.Utils={whitespace:"\n\r\t ".split(""),single_token:e.void_elements||["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr","!doctype","?xml","?php","basefont","isindex"],extra_liners:C,in_array:function(t,e){for(var n=0;n<e.length;n++)if(t===e[n])return!0;return!1}},this.is_whitespace=function(t){for(var e=0;e<t.length;e++)if(!this.Utils.in_array(t.charAt(e),this.Utils.whitespace))return!1;return!0},this.traverse_whitespace=function(){var t="";if(t=this.input.charAt(this.pos),this.Utils.in_array(t,this.Utils.whitespace)){for(this.newlines=0;this.Utils.in_array(t,this.Utils.whitespace);)b&&"\n"===t&&this.newlines<=y&&(this.newlines+=1),this.pos++,t=this.input.charAt(this.pos);return!0}return!1},this.space_or_wrap=function(t){return this.line_char_count>=this.wrap_line_length?(this.print_newline(!1,t),this.print_indentation(t),!0):(this.line_char_count++,t.push(" "),!1)},this.get_content=function(){for(var t="",e=[],n=0;"<"!==this.input.charAt(this.pos)||2===n;){if(this.pos>=this.input.length)return e.length?e.join(""):["","TK_EOF"];if(n<2&&this.traverse_whitespace())this.space_or_wrap(e);else{if(t=this.input.charAt(this.pos),k){if("{"===t?n+=1:n<2&&(n=0),"}"===t&&n>0&&0===n--)break;var i=this.input.substr(this.pos,3);if("{{#"===i||"{{/"===i)break;if("{{!"===i)return[this.get_tag(),"TK_TAG_HANDLEBARS_COMMENT"];if("{{"===this.input.substr(this.pos,2)&&"{{else}}"===this.get_tag(!0))break}this.pos++,this.line_char_count++,e.push(t)}}return e.length?e.join(""):""},this.get_contents_to=function(t){if(this.pos===this.input.length)return["","TK_EOF"];var e="",n=new RegExp("</"+t+"\\s*>","igm");n.lastIndex=this.pos;var i=n.exec(this.input),s=i?i.index:this.input.length;return this.pos<s&&(e=this.input.substring(this.pos,s),this.pos=s),e},this.record_tag=function(t){this.tags[t+"count"]?(this.tags[t+"count"]++,this.tags[t+this.tags[t+"count"]]=this.indent_level):(this.tags[t+"count"]=1,this.tags[t+this.tags[t+"count"]]=this.indent_level),this.tags[t+this.tags[t+"count"]+"parent"]=this.tags.parent,this.tags.parent=t+this.tags[t+"count"]},this.retrieve_tag=function(t){if(this.tags[t+"count"]){for(var e=this.tags.parent;e&&t+this.tags[t+"count"]!==e;)e=this.tags[e+"parent"];e&&(this.indent_level=this.tags[t+this.tags[t+"count"]],this.tags.parent=this.tags[e+"parent"]),delete this.tags[t+this.tags[t+"count"]+"parent"],delete this.tags[t+this.tags[t+"count"]],1===this.tags[t+"count"]?delete this.tags[t+"count"]:this.tags[t+"count"]--}},this.indent_to_tag=function(t){if(this.tags[t+"count"]){for(var e=this.tags.parent;e&&t+this.tags[t+"count"]!==e;)e=this.tags[e+"parent"];e&&(this.indent_level=this.tags[t+this.tags[t+"count"]])}},this.get_tag=function(t){var e,n,i,s,r="",a=[],h="",o=!1,_=!0,u=!1,p=this.pos,l=this.line_char_count,c=!1;t=void 0!==t&&t;do{if(this.pos>=this.input.length)return t&&(this.pos=p,this.line_char_count=l),a.length?a.join(""):["","TK_EOF"];if(r=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(r,this.Utils.whitespace))o=!0;else{if("'"!==r&&'"'!==r||(r+=this.get_unformatted(r),o=!0),"="===r&&(o=!1),s=this.input.substr(this.pos-1),!E||!u||c||">"!==r&&"/"!==r||s.match(/^\/?\s*>/)&&(o=!1,c=!0,this.print_newline(!1,a),this.print_indentation(a)),a.length&&"="!==a[a.length-1]&&">"!==r&&o){var f=this.space_or_wrap(a),d=f&&"/"!==r&&!A;if(o=!1,A&&"/"!==r){var g=!1;if(E&&_){var v=null!==s.match(/^\S*(="([^"]|\\")*")?\s*\/?\s*>/);g=!v}_&&!g||(this.print_newline(!1,a),this.print_indentation(a),d=!0)}if(d){u=!0;var b=T;O&&(b=a.indexOf(" ")+1);for(var y=0;y<b;y++)a.push(" ")}if(_)for(var x=0;x<a.length;x++)if(" "===a[x]){_=!1;break}}if(k&&"<"===i&&r+this.input.charAt(this.pos)==="{{"&&(r+=this.get_unformatted("}}"),a.length&&" "!==a[a.length-1]&&"<"!==a[a.length-1]&&(r=" "+r),o=!0),"<"!==r||i||(e=this.pos-1,i="<"),k&&!i&&a.length>=2&&"{"===a[a.length-1]&&"{"===a[a.length-2]&&(e="#"===r||"/"===r||"!"===r?this.pos-3:this.pos-2,i="{"),this.line_char_count++,a.push(r),a[1]&&("!"===a[1]||"?"===a[1]||"%"===a[1])){a=[this.get_comment(e)];break}if(k&&a[1]&&"{"===a[1]&&a[2]&&"!"===a[2]){a=[this.get_comment(e)];break}if(k&&"{"===i&&a.length>2&&"}"===a[a.length-2]&&"}"===a[a.length-1])break}}while(">"!==r);var N,C,S=a.join("");N=S.indexOf(" ")!==-1?S.indexOf(" "):S.indexOf("\n")!==-1?S.indexOf("\n"):"{"===S.charAt(0)?S.indexOf("}"):S.indexOf(">"),C="<"!==S.charAt(0)&&k?"#"===S.charAt(2)?3:2:1;var K=S.substring(C,N).toLowerCase();return"/"===S.charAt(S.length-2)||this.Utils.in_array(K,this.Utils.single_token)?t||(this.tag_type="SINGLE"):k&&"{"===S.charAt(0)&&"else"===K?t||(this.indent_to_tag("if"),this.tag_type="HANDLEBARS_ELSE",this.indent_content=!0,this.traverse_whitespace()):this.is_unformatted(K,m)||this.is_unformatted(K,w)?(h=this.get_unformatted("</"+K+">",S),a.push(h),n=this.pos-1,this.tag_type="SINGLE"):"script"===K&&(S.search("type")===-1||S.search("type")>-1&&S.search(/\b(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/)>-1)?t||(this.record_tag(K),this.tag_type="SCRIPT"):"style"===K&&(S.search("type")===-1||S.search("type")>-1&&S.search("text/css")>-1)?t||(this.record_tag(K),this.tag_type="STYLE"):"!"===K.charAt(0)?t||(this.tag_type="SINGLE",this.traverse_whitespace()):t||("/"===K.charAt(0)?(this.retrieve_tag(K.substring(1)),this.tag_type="END"):(this.record_tag(K),"html"!==K.toLowerCase()&&(this.indent_content=!0),this.tag_type="START"),this.traverse_whitespace()&&this.space_or_wrap(a),this.Utils.in_array(K,this.Utils.extra_liners)&&(this.print_newline(!1,this.output),this.output.length&&"\n"!==this.output[this.output.length-2]&&this.print_newline(!0,this.output))),t&&(this.pos=p,this.line_char_count=l),a.join("")},this.get_comment=function(t){var e="",n=">",i=!1;this.pos=t;var s=this.input.charAt(this.pos);for(this.pos++;this.pos<=this.input.length&&(e+=s,e.charAt(e.length-1)!==n.charAt(n.length-1)||e.indexOf(n)===-1);)!i&&e.length<10&&(0===e.indexOf("<![if")?(n="<![endif]>",i=!0):0===e.indexOf("<![cdata[")?(n="]]>",i=!0):0===e.indexOf("<![")?(n="]>",i=!0):0===e.indexOf("<!--")?(n="-->",i=!0):0===e.indexOf("{{!--")?(n="--}}",i=!0):0===e.indexOf("{{!")?5===e.length&&e.indexOf("{{!--")===-1&&(n="}}",i=!0):0===e.indexOf("<?")?(n="?>",i=!0):0===e.indexOf("<%")&&(n="%>",i=!0)),s=this.input.charAt(this.pos),this.pos++;return e},this.get_unformatted=function(e,n){if(n&&n.toLowerCase().indexOf(e)!==-1)return"";var i="",s="",r=!0,a=t(e);do{if(this.pos>=this.input.length)return s;if(i=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(i,this.Utils.whitespace)){if(!r){this.line_char_count--;continue}if("\n"===i||"\r"===i){s+="\n",this.line_char_count=0;continue}}s+=i,a.add(i),this.line_char_count++,r=!0,k&&"{"===i&&s.length&&"{"===s.charAt(s.length-2)&&(s+=this.get_unformatted("}}"))}while(a.doesNotMatch());return s},this.get_token=function(){var t;if("TK_TAG_SCRIPT"===this.last_token||"TK_TAG_STYLE"===this.last_token){var e=this.last_token.substr(7);return t=this.get_contents_to(e),"string"!=typeof t?t:[t,"TK_"+e]}if("CONTENT"===this.current_mode)return t=this.get_content(),"string"!=typeof t?t:[t,"TK_CONTENT"];if("TAG"===this.current_mode){if(t=this.get_tag(),"string"!=typeof t)return t;var n="TK_TAG_"+this.tag_type;return[t,n]}},this.get_full_indent=function(t){return t=this.indent_level+t||0,t<1?"":Array(t+1).join(this.indent_string)},this.is_unformatted=function(t,e){if(!this.Utils.in_array(t,e))return!1;if("a"!==t.toLowerCase()||!this.Utils.in_array("a",e))return!0;var n=this.get_tag(!0),i=(n||"").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);return!(i&&!this.Utils.in_array(i[1],e))},this.printer=function(t,e,n,r,a){this.input=t||"",this.input=this.input.replace(/\r\n|[\r\u2028\u2029]/g,"\n"),this.output=[],this.indent_character=e,this.indent_string="",this.indent_size=n,this.brace_style=a,this.indent_level=0,this.wrap_line_length=r,this.line_char_count=0;for(var h=0;h<this.indent_size;h++)this.indent_string+=this.indent_character;this.print_newline=function(t,e){this.line_char_count=0,e&&e.length&&(t||"\n"!==e[e.length-1])&&("\n"!==e[e.length-1]&&(e[e.length-1]=s(e[e.length-1])),e.push("\n"))},this.print_indentation=function(t){for(var e=0;e<this.indent_level;e++)t.push(this.indent_string),this.line_char_count+=this.indent_string.length},this.print_token=function(t){this.is_whitespace(t)&&!this.output.length||((t||""!==t)&&this.output.length&&"\n"===this.output[this.output.length-1]&&(this.print_indentation(this.output),t=i(t)),this.print_token_raw(t))},this.print_token_raw=function(t){this.newlines>0&&(t=s(t)),t&&""!==t&&(t.length>1&&"\n"===t.charAt(t.length-1)?(this.output.push(t.slice(0,-1)),this.print_newline(!1,this.output)):this.output.push(t));for(var e=0;e<this.newlines;e++)this.print_newline(e>0,this.output);this.newlines=0},this.indent=function(){this.indent_level++},this.unindent=function(){this.indent_level>0&&this.indent_level--}},this}t=t||"";var u,p,l,c,f,d,g,v,m,w,b,y,k,x,T,A,E,O,N,C,S;e=e||{},e=a(e,"html"),void 0!==e.wrap_line_length&&0!==parseInt(e.wrap_line_length,10)||void 0===e.max_char||0===parseInt(e.max_char,10)||(e.wrap_line_length=e.max_char),p=void 0!==e.indent_inner_html&&e.indent_inner_html,l=void 0===e.indent_body_inner_html||e.indent_body_inner_html,c=void 0===e.indent_head_inner_html||e.indent_head_inner_html,f=void 0===e.indent_size?4:parseInt(e.indent_size,10),d=void 0===e.indent_char?" ":e.indent_char,v=void 0===e.brace_style?"collapse":e.brace_style,g=0===parseInt(e.wrap_line_length,10)?32786:parseInt(e.wrap_line_length||250,10),m=e.unformatted||["a","abbr","area","audio","b","bdi","bdo","br","button","canvas","cite","code","data","datalist","del","dfn","em","embed","i","iframe","img","input","ins","kbd","keygen","label","map","mark","math","meter","noscript","object","output","progress","q","ruby","s","samp","select","small","span","strong","sub","sup","svg","template","textarea","time","u","var","video","wbr","text","acronym","address","big","dt","ins","strike","tt"],w=e.content_unformatted||["pre"],b=void 0===e.preserve_newlines||e.preserve_newlines,y=b?isNaN(parseInt(e.max_preserve_newlines,10))?32786:parseInt(e.max_preserve_newlines,10):0,k=void 0!==e.indent_handlebars&&e.indent_handlebars,x=void 0===e.wrap_attributes?"auto":e.wrap_attributes,T=isNaN(parseInt(e.wrap_attributes_indent_size,10))?f:parseInt(e.wrap_attributes_indent_size,10),A="force"===x.substr(0,"force".length),E="force-expand-multiline"===x,O="force-aligned"===x,N=void 0!==e.end_with_newline&&e.end_with_newline,C="object"==typeof e.extra_liners&&e.extra_liners?e.extra_liners.concat():"string"==typeof e.extra_liners?e.extra_liners.split(","):"head,body,/html".split(","),S=e.eol?e.eol:"auto",e.indent_with_tabs&&(d="\t",f=1),"auto"===S&&(S="\n",t&&o.test(t||"")&&(S=t.match(o)[0])),S=S.replace(/\\r/,"\r").replace(/\\n/,"\n"),t=t.replace(_,"\n"),this.beautify=function(){for(u=new h,u.printer(t,d,f,g,v);;){var i=u.get_token();if(u.token_text=i[0],u.token_type=i[1],"TK_EOF"===u.token_type)break;switch(u.token_type){case"TK_TAG_START":u.print_newline(!1,u.output),u.print_token(u.token_text),u.indent_content&&(!u.indent_body_inner_html&&u.token_text.match(/<body(?:.*)>/)||!u.indent_head_inner_html&&u.token_text.match(/<head(?:.*)>/)||u.indent(),u.indent_content=!1),u.current_mode="CONTENT";break;case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":u.print_newline(!1,u.output),u.print_token(u.token_text),u.current_mode="CONTENT";break;case"TK_TAG_END":if("TK_CONTENT"===u.last_token&&""===u.last_text){var s=(u.token_text.match(/\w+/)||[])[0],a=null;u.output.length&&(a=u.output[u.output.length-1].match(/(?:<|{{#)\s*(\w+)/)),(null===a||a[1]!==s&&!u.Utils.in_array(a[1],m))&&u.print_newline(!1,u.output)}u.print_token(u.token_text),u.current_mode="CONTENT";break;case"TK_TAG_SINGLE":var o=u.token_text.match(/^\s*<([a-z-]+)/i);o&&u.Utils.in_array(o[1],m)||u.print_newline(!1,u.output),u.print_token(u.token_text),u.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_ELSE":for(var _=!1,p=u.output.length-1;p>=0&&"\n"!==u.output[p];p--)if(u.output[p].match(/{{#if/)){_=!0;break}_||u.print_newline(!1,u.output),u.print_token(u.token_text),u.indent_content&&(u.indent(),u.indent_content=!1),u.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_COMMENT":u.print_token(u.token_text),u.current_mode="TAG";break;case"TK_CONTENT":u.print_token(u.token_text),u.current_mode="TAG";break;case"TK_STYLE":case"TK_SCRIPT":if(""!==u.token_text){u.print_newline(!1,u.output);var l,c=u.token_text,w=1;"TK_SCRIPT"===u.token_type?l="function"==typeof n&&n:"TK_STYLE"===u.token_type&&(l="function"==typeof r&&r),"keep"===e.indent_scripts?w=0:"separate"===e.indent_scripts&&(w=-u.indent_level);var b=u.get_full_indent(w);if(l){var y=function(){this.eol="\n"};y.prototype=e;var k=new y;c=l(c.replace(/^\s*/,b),k)}else{var x=c.match(/^\s*/)[0],T=x.match(/[^\n\r]*$/)[0].split(u.indent_string).length-1,A=u.get_full_indent(w-T);c=c.replace(/^\s*/,b).replace(/\r\n|\r|\n/g,"\n"+A).replace(/\s+$/,"")}c&&(u.print_token_raw(c),u.print_newline(!0,u.output))}u.current_mode="TAG";break;default:""!==u.token_text&&u.print_token(u.token_text)}u.last_token=u.token_type,u.last_text=u.token_text}var E=u.output.join("").replace(/[\r\n\t ]+$/,"");return N&&(E+="\n"),"\n"!==S&&(E=E.replace(/[\n]/g,S)),E}}var a=n(2).mergeOpts,h=n(1),o=h.lineBreak,_=h.allLineBreaks;t.exports.Beautifier=r},function(t,e){var n="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",i="̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿",s=new RegExp("["+n+"]"),r=new RegExp("["+n+i+"]");e.newline=/[\n\r\u2028\u2029]/,e.lineBreak=new RegExp("\r\n|"+e.newline.source),e.allLineBreaks=new RegExp(e.lineBreak.source,"g"),e.isIdentifierStart=function(t){return t<65?36===t||64===t:t<91||(t<97?95===t:t<123||t>=170&&s.test(String.fromCharCode(t)))},e.isIdentifierChar=function(t){return t<48?36===t:t<58||!(t<65)&&(t<91||(t<97?95===t:t<123||t>=170&&r.test(String.fromCharCode(t))))}},function(t,e){function n(t,e){var n,i={};for(n in t)n!==e&&(i[n]=t[n]);if(e in t)for(n in t[e])i[n]=t[e][n];return i}t.exports.mergeOpts=n},function(t,e,n){function i(t,e,n,i){var r=new s(t,e,n,i);return r.beautify()}var s=n(0).Beautifier;t.exports=i}]),e=t;if("function"==typeof define&&define.amd)define(["require","./beautify","./beautify-css"],function(t){var n=t("./beautify"),i=t("./beautify-css");return{html_beautify:function(t,s){return e(t,s,n.js_beautify,i.css_beautify)}}});else if("undefined"!=typeof exports){var n=require("./beautify.js"),i=require("./beautify-css.js");exports.html_beautify=function(t,s){return e(t,s,n.js_beautify,i.css_beautify)}}else"undefined"!=typeof window?window.html_beautify=function(t,n){return e(t,n,window.js_beautify,window.css_beautify)}:"undefined"!=typeof global&&(global.html_beautify=function(t,n){return e(t,n,global.js_beautify,global.css_beautify)})})();