(this["webpackJsonpstreamlit-code-editor"]=this["webpackJsonpstreamlit-code-editor"]||[]).push([[0],{501:function(e,t,n){"use strict";n.r(t);var o,r=n(0),s=n.n(r),i=n(32),a=n.n(i),c=n(3),m=n(2),u=n(12),l=n(6),d=n(4),p=n(33),f=n(7),g=n(15),b=n(8),y=n.n(b),h=n(34),v=n.n(h),S=(n(25),n(26),n(27),n(28),n(29),n(30),n(31),n(497),n(5)),O=function(e){var t=e.lang,n=e.theme,o=e.shortcuts,s=e.props,i=e.snippetString,a=e.commands,u=e.keybindingString,l=e.editorRef,p=e.code,f=e.onChange;return Object(r.useEffect)((function(){if(l.current){y.a.require("ace/autocomplete").Autocomplete.for(l.current.editor);var e=JSON.parse(u);e.commands&&e.commands.length>0&&e.commands.forEach((function(e){var t;if(e.name&&"string"===typeof e.name&&JSON.stringify(null!==(t=l.current.editor.commands.commands[e.name].bindKey)&&void 0!==t?t:"")!==JSON.stringify(e.bindkey)){var n=Object(c.a)({},l.current.editor.commands.commands[e.name]);n.bindKey=e.bindkey,l.current.editor.commands.addCommand(n),a=[].concat(Object(m.a)(a),[n])}})),e.completer&&e.completer.length>0&&e.completer.forEach((function(e){var t;if(e.name&&"string"===typeof e.name&&JSON.stringify(null!==(t=l.current.editor.completer.keyboardHandler.commands[e.name].bindKey)&&void 0!==t?t:"")!==JSON.stringify(e.bindkey)){var n=Object(c.a)({},l.current.editor.completer.keyboardHandler.commands[e.name]);n.bindKey=e.bindkey,l.current.editor.completer.keyboardHandler.addCommand(n)}})),y.a.require("ace/ext/keybinding_menu").init(l.current.editor);for(var t=y.a.require("ace/snippets").snippetManager,n=JSON.parse(i),o=0,r=Object.entries(n);o<r.length;o++){var s=Object(d.a)(r[o],2),p=s[0],f=s[1];f[0]&&t.register(t.parseSnippetFile(f[0],p),p),f[1]&&t.unregister(t.parseSnippetFile(f[1],p),p)}}}),[i,u]),Object(S.jsx)(v.a,Object(c.a)({ref:l,name:"REACT_ACE_EDITOR",mode:t,theme:n,value:p,keyboardHandler:o,commands:a,onChange:f},s))},j=n(38),x=f.c.div.withConfig({displayName:"button-menu__StyledDiv",componentId:"sc-rz5v7a-0"})([""]),k=Object(f.c)(x).withConfig({displayName:"button-menu___StyledStyledDiv2",componentId:"sc-rz5v7a-1"})(["",""],(function(e){return e.$_css2})),C=Object(f.c)(x).withConfig({displayName:"button-menu___StyledStyledDiv",componentId:"sc-rz5v7a-2"})(["",""],(function(e){return e.$_css})),w=f.c.span.withConfig({displayName:"button-menu__StyledRegSpan",componentId:"sc-rz5v7a-3"})([""]),_=f.c.span.withConfig({displayName:"button-menu__StyledSpan",componentId:"sc-rz5v7a-4"})(["height:2.5rem;line-height:2.5rem;margin:0px 0.4rem 0.15rem 0.4rem;opacity:0;transform:scale(0);transition:opacity 300ms 150ms,transform 300ms 150ms;"]),E=f.c.button.withConfig({displayName:"button-menu__StyledButton",componentId:"sc-rz5v7a-5"})(["border:none;border-radius:5px;background:none;height:2.5rem;line-height:0;display:flex;align-items:center;justify-content:center;opacity:0;position:absolute;transform:scale(0);transition:opacity 20ms 300ms,transform 20ms 300ms;z-index:9994;:focus{outline:none;}span{color:",";transform:scale(0);transform-origin:right;transition:opacity 300ms 150ms,transform 300ms 150ms;}:hover span{color:",";opacity:1;transform:scale(1);}svg{stroke:",";transform:scale(0);transition:opacity 300ms 150ms,transform 300ms 150ms;}:hover svg{stroke:",";}"],(function(e){return"streamlit_dark"===e.themeProp?"rgba(250,250,250,0.6)":"rgba(0,0,0,0.5)"}),(function(e){return e.primary?e.theme.primaryColor:"streamlit_dark"===e.themeProp?"rgb(250,250,250)":"rgb(49, 51, 63)"}),(function(e){return"streamlit_dark"===e.themeProp?"rgba(250,250,250,0.6)":"rgba(0,0,0,0.5)"}),(function(e){return e.primary?e.theme.primaryColor:"streamlit_dark"===e.themeProp?"rgb(250,250,250)":"rgb(49, 51, 63)"})),N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,n=j[e];return Object(S.jsx)(n,{size:"".concat(t)})},A=function(e){var t=e.info,n=e.theme,o=e.infoRef;return Object(S.jsx)(f.a,{theme:n,children:0===Object.keys(t).length?"":Object(S.jsxs)(C,{className:"custom_info_bar "+(t.name?t.name:""),style:t.style,$_css:t.css,children:[Object(S.jsx)(w,{ref:o,className:"code_editor-info message"},"code_editor_info_message"),(t.info||[]).map((function(e){return Object(S.jsx)(w,{className:e.class,style:e.style,children:e.name},"info_"+e.name)}))]},"info_bar")})},I=function(e){var t=e.button,n=e.theme,o=e.themeProp,s=e.executeAll,i=Object(r.useState)(!1),a=Object(d.a)(i,2),c=a[0],m=a[1],u=Object(r.useRef)(null);return Object(S.jsxs)(E,{ref:u,primary:!!t.primary&&t.primary,className:(t.class?t.class:"")+(t.alwaysOn?" always-on":"")+(t.showWithIcon?" with-icon":""),themeProp:o,style:t.style,theme:n,onClick:function(){var e,n,o;return n=null!==(e=t.commands)&&void 0!==e?e:[],o=t.toggledCommands,void(t.classToggle?(m(!c),u.current?(u.current.classList.toggle(t.classToggle),u.current.classList.contains(t.classToggle)?s(u,n):s(u,null!==o&&void 0!==o?o:n)):s(u,c&&null!==o&&void 0!==o?o:n)):s(u,n))},children:[t.hasText&&t.name?Object(S.jsx)(_,{children:t.name}):"",t.feather?N(t.feather||"X",t.iconSize):""]})},T=function(e){var t=e.buttonGroup,n=e.executeAll,o=e.theme,r=e.themeProp,s=function(e,t){t&&n(t)};return Object(S.jsx)(f.a,{theme:o,children:t.buttons.map((function(e){return Object(S.jsx)(I,{button:e,themeProp:r,theme:o,executeAll:function(e,t){return s(0,t)}},t.name+"_"+e.name)}))})},P=function(e){var t=e.menu,n=e.executeAll,o=e.theme,r=e.themeProp,s=function(e,t){t&&n(t)};return Object(S.jsx)(f.a,{theme:o,children:0===Object.keys(t).length?"":Object(S.jsx)(k,{className:"custom_menu",style:t.style,$_css2:t.css,children:t.groups?t.groups.map((function(e,t){return Object(S.jsx)(x,{className:"menu_group "+e.name,style:e.style,"data-one-toggle-only":e.toggleOnlyOne,children:e.buttons.map((function(t){return Object(S.jsx)(I,{button:t,themeProp:r,theme:o,executeAll:function(e,t){return s(0,t)}},e.name+"_"+t.name)}))},"group_"+e.name+t)})):""},"menu_bar")})},J=["info","menu","focus","code"],K={fontFamily:'"Source Code Pro", monospace',cursorStyle:"smooth",displayIndentGuides:!1,wrap:!1,highlightActiveLine:!0,showPrintMargin:!1,showLineNumbers:!1,foldStyle:"markbegin",autoScrollEditorIntoView:!1,animatedScroll:!0,fadeFoldWidgets:!0},L={editorProps:{$blockScrolling:!0}},R={cursorStart:1,enableBasicAutocompletion:!1,enableLiveAutocompletion:!0,enableSnippets:!0,focus:!1,fontSize:14,highlightActiveLine:!0,navigateToFileEnd:!0,placeholder:null,readOnly:!1,scrollMargin:[15,15,0,0],setOptions:K,showGutter:!0,showPrintMargin:!1,style:{},tabSize:4,width:"auto",debounceChangePeriod:250},M=Object(f.b)(o||(o=Object(p.a)(["\n  html {\n    opacity: ",";\n    cursor: ",";\n    pointer-events: ",";\n  }\n  ","\n"])),(function(e){return e.isDisabled?"0.5":"1"}),(function(e){return e.isDisabled?"not-allowed":"auto"}),(function(e){return e.isDisabled?"none":"auto"}),(function(e){return e.inject})),D=f.c.div.withConfig({displayName:"CodeEditor__StyledCodeEditor",componentId:"sc-wmif04-0"})(["width:100%;border-radius:8px;overflow:hidden;display:flex;flex-direction:column;:hover button{opacity:1;transform:scale(1);}button.always-on{opacity:1;transform:scale(1);transition:none;}:hover button svg{opacity:1;transform:scale(1);}:hover button.with-icon span{opacity:1;transform:scale(1);}button.always-on > span{opacity:1;transform:scale(1);transition:none;}button.always-on > svg{opacity:1;transform:scale(1);transition:none;}"]),$=Object(f.c)(D).withConfig({displayName:"CodeEditor___StyledStyledCodeEditor",componentId:"sc-wmif04-1"})(["",""],(function(e){return e.$_css})),z=Object(g.b)((function(e){var t,n,o=e.args,s=(e.width,e.disabled),i=e.theme,a=Object(r.useState)(o.code),p=Object(d.a)(a,2),f=p[0],b=p[1],h=Object(r.useRef)(null),v=Object(r.useRef)(null),j=Object(r.useRef)(null),x=Object(r.useRef)(!1),k=Object(r.useRef)(!1),C=function(e){return"string"===typeof e?e:(Array.isArray(e)?e:[e]).map((function(e){return["snippet "+e.name,e.code.split("\n").map((function(e){return"\t"+e})).join("\n")].join("\n")})).join("\n")},w=Object(r.useState)(Object(l.a)({},o.lang,[C(o.snippets[0]),C(o.snippets[1])])),_=Object(d.a)(w,2),E=_[0],N=_[1],I=Object(r.useState)(o.keybindings),D=Object(d.a)(I,2),z=D[0],H=D[1];Object(r.useEffect)((function(){return function(){n&&clearTimeout(n)}}),[]),Object(r.useEffect)((function(){h.current&&x.current&&(h.current.editor.focus(),x.current=!1)}),[x.current]),Object(r.useEffect)((function(){h.current&&o.focus&&h.current.editor.focus()}),[o.focus]);var V={commands:[{name:"submit",description:"Send 'submit' response",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:function(e){var t=e.getSession().$modeId.split("/").pop();g.a.setComponentValue({text:e.getValue(),type:"submit",lang:t,cursor:e.getCursorPosition()})}},{name:"saveState",description:"Save state",bindKey:{win:"Ctrl-Alt-S",mac:"Command-Alt-S"},exec:function(e){b(e.getValue())}},{name:"copyAll",description:"Copy all text to clipboard",exec:function(e){Q(e.getValue())}},{name:"reset",exec:function(){F()}},{name:"keepFocus",description:"Return cursor to editor",exec:function(){x.current=!0}},{name:"setMode",description:"Set language mode",exec:function(e,t){t&&"string"===typeof t&&e.getSession().setMode("ace/mode/"+t)},readOnly:!0},{name:"changeShortcuts",description:"Switch shortcuts",exec:function(e,t){if(t&&"string"===typeof t)e.setKeyboardHandler("ace/keyboard/"+t);else{var n=["ace/keyboard/vim","ace/keyboard/emacs","ace/keyboard/sublime","ace/keyboard/vscode"],o=n[(n.indexOf(e.$keybindingId)+1)%4];e.setKeyboardHandler(o)}},readOnly:!0},{name:"toggleKeyboardShortcuts",exec:function(e){document.getElementById("kbshortcutmenu")?e.execCommand("simulateKeyPress",{type:"keydown",keyCode:27}):e.execCommand("showKeyboardShortcuts")}},{name:"simulateKeyPress",exec:function(e,t){t.key?document.dispatchEvent(new KeyboardEvent(t.type,{key:t.key})):t.keyCode&&document.dispatchEvent(new KeyboardEvent(t.type,{keyCode:t.keyCode}))}},{name:"infoMessage",description:"Display message in info bar",exec:function(e,t){if(t.targetQueryString){var o=document.querySelector(t.targetQueryString);o&&(o.innerText=t.text,o.classList.add(t.classToggle||""),t.timeout&&(n=setTimeout((function(){o.classList.remove(t.classToggle||"")}),t.timeout)))}else v.current&&(v.current.innerText=t.text,v.current.classList.add(t.classToggle||""),t.timeout&&(n=setTimeout((function(){var e;null===(e=v.current)||void 0===e||e.classList.remove(t.classToggle||"")}),t.timeout)))}},{name:"response",description:"Send custom response",exec:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.getSession().$modeId.split("/").pop();g.a.setComponentValue({text:e.getValue(),type:t,lang:n,cursor:e.getCursorPosition()})}},{name:"editSnippets",description:"Edit snippets",bindKey:{win:"Ctrl-Alt-M",mac:"Command-Alt-M"},exec:function(e){var t=y.a.require("ace/snippets").snippetManager;if(j.current){var n=e.getSession().$modeId.split("/").pop();if("snippets"===n){var r=e.getSession().getValue();e.setSession(j.current),j.current=null,b(e.getSession().getValue());try{var s=r.split("###~~~")[1].split("###---"),i=Object(d.a)(s,2),a=i[0],c=i[1],m=a.split("###+++")[1],u=c,p=e.getSession().$modeId.split("/").pop();N(Object(l.a)({},p,[E[p][0]+m,E[p][1]+u]))}catch(x){e.execCommand("infoMessage",{text:"error parsing file, restoring original file",timeout:2e3,classToggle:"show"})}}}else{var f=e.getSession().$modeId.split("/").pop(),g="\n###~~~#(DO NOT EDIT THIS LINE)\n# Commented out above are all the snippets that are currently\n# registered for ".concat(o.lang," mode.\n\n\n###+++#(DO NOT EDIT THIS LINE) \n# Put the snippets you want to add below this line.\n\n\n\n\n\n\n\n###---#(DO NOT EDIT THIS LINE) \n# Put the snippets you want to remove below this line.\n\n\n\n\n\n\n"),h="#"+C(t.snippetMap[f].map((function(e){return{name:e.name,code:e.content}}))).replace(/\n/g,"\n#")+g,v=(h.match(/\n/g)||[]).length;j.current=e.getSession();var S=y.a.createEditSession(h,"ace/mode/snippets");e.setSession(S);var O={row:v-15>0?v-15:0,column:0};e.moveCursorTo(O.row,O.column),e.renderer.scrollCursorIntoView(O,.5)}}},{name:"editKeyBindings",description:"Edit keybindings",bindKey:{win:"Ctrl-Alt-B",mac:"Command-Alt-B"},exec:function(e){if(y.a.require("ace/autocomplete").Autocomplete.for(e),j.current){if("json"===e.getSession().$modeId.split("/").pop()){var t=e.getSession().getValue();e.setSession(j.current),j.current=null,b(e.getSession().getValue());try{H(JSON.parse(t))}catch(s){e.execCommand("infoMessage",{text:"error parsing file, restoring original file",timeout:2e3,classToggle:"show"})}}}else{var n={commands:{},completer:{}};e.completer&&e.completer.keyboardHandler.commands&&(n.completer=Object.keys(e.completer.keyboardHandler.commands).map((function(t){var n;return{bindkey:null!==(n=e.completer.keyboardHandler.commands[t].bindKey)&&void 0!==n?n:"",name:e.completer.keyboardHandler.commands[t].name}}))),e.commands.commands&&(n.commands=Object.keys(e.commands.commands).map((function(t){var n;return{bindkey:null!==(n=e.commands.commands[t].bindKey)&&void 0!==n?n:"",name:e.commands.commands[t].name}})));var o=JSON.stringify(n,void 0,2);j.current=e.getSession();var r=y.a.createEditSession(o,"ace/mode/json");e.setSession(r)}}},{name:"exitSession",bindKey:{win:"Esc",mac:"Esc"},description:"Return to main session (keep changes)",exec:function(e){if(j.current){var t=e.getSession().$modeId.split("/").pop();"snippets"===t?e.execCommand("editSnippets"):"json"===t&&e.execCommand("editKeyBindings")}}},{name:"abandonSession",bindKey:{win:"Ctrl-Alt-Esc",mac:"Command-Alt-Esc"},description:"Return to main session (discard changes)",exec:function(e){j.current&&(e.setSession(j.current),j.current=null,b(e.getSession().getValue()))}},{name:"classART",description:"Add/Remove/Toggle class for element",exec:function(e,t){var n,o,r;if(t.targetQueryString&&t.type&&t.class)switch(t.type){case"add":null===(n=document.querySelectorAll(t.targetQueryString))||void 0===n||n.forEach((function(e){return e.classList.add(t.class)}));break;case"remove":null===(o=document.querySelectorAll(t.targetQueryString))||void 0===o||o.forEach((function(e){return e.classList.remove(t.class)}));break;case"toggle":null===(r=document.querySelectorAll(t.targetQueryString))||void 0===r||r.forEach((function(e){return e.classList.toggle(t.class)}))}}},{name:"conditionalExecute",description:"Execute command if element exists",exec:function(e,t){var n;t.targetQueryString&&t.command&&Array.isArray(t.command)&&(!(null===(n=t.condition)||void 0===n||n)===!document.querySelector(t.targetQueryString)&&("string"===typeof t.command[0]?q(t.command[0],t.command[1]):console.warn("Editor command - conditionalExecute: improper command format! Command array must contain name of command as first element and arguments as second element.")))}}]},q=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=null===(t=h.current)||void 0===t?void 0:t.editor;if(o)if(n)if("number"===typeof n||"string"===typeof n)o.execCommand(e,n);else if("object"!==typeof n||Array.isArray(n))console.warn('Function - execute: failed to parse/execute "'.concat(e,'" command!'));else{var r=!0;Object.keys(n).forEach((function(e){r="string"===typeof n[e]||"number"===typeof n[e]||Array.isArray(n[e])})),Object.keys(n).length<4&&r&&o.execCommand(e,n)}else o.execCommand(e)},B=function(e){e.forEach((function(e){Array.isArray(e)?"string"===typeof e[0]?q(e[0],e[1]):console.warn("Function - executeAll: improper command format! Singular commands must contain name of command as first element and arguments as second element."):"string"===typeof e?q(e):console.warn("Function - executeAll: failed to parse/execute command(s)!")}))},F=function(){b(o.code)},Q=function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()},G=new ResizeObserver((function(e){var t;g.a.setFrameHeight(null!==(t=e[0].contentBoxSize.blockSize)&&void 0!==t?t:e[0].contentRect.height)}));Object(r.useEffect)((function(){!0===o.allow_reset&&o.code!==f&&(k.current=!k.current,F())}),[o.code]);var W=function(){var e=!i||"dark"===i.base;switch(o.theme){case"contrast":return e?"streamlit_light":"streamlit_dark";case"light":return"streamlit_light";case"dark":return"streamlit_dark";default:return e?"streamlit_dark":"streamlit_light"}}(),X=o.component_props,U=o.info,Y=o.menu,Z=(o.focus,o.code,Object(u.a)(o,J)),ee=JSON.stringify(Z),te=JSON.stringify(Y),ne=JSON.stringify(U),oe=JSON.stringify(o.buttons),re=JSON.stringify(i),se=JSON.stringify(E),ie=Object(r.useMemo)((function(){var e=JSON.stringify(z),t=JSON.parse(ee);t.buttons.length>0&&t.buttons.forEach((function(e){V.commands=[].concat(Object(m.a)(V.commands),[{name:e.name.trim().replace(/\s+/g,"_")+"_button",bindKey:e.bindKey,description:"Execute '"+e.name+"' button command(s)",exec:function(){B(e.commands)}}])}));var n={};"number"===typeof t.height?n={minLines:1,maxLines:t.height}:"string"===typeof t.height?n={height:t.height}:Array.isArray(t.height)&&2===t.height.length&&(n={minLines:t.height[0],maxLines:t.height[1]});var o=Object(c.a)(Object(c.a)({},L),t.editorProps),r={setOptions:Object(c.a)(Object(c.a)({},K),t.options),editorProps:o},s=Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},R),r),n),t.props);return Object(S.jsx)(O,{editorRef:h,code:f,lang:t.lang,theme:W,shortcuts:t.shortcuts,snippetString:se,commands:V.commands,keybindingString:e,props:s,onChange:function(e){b(e)}})}),[ee,W,se,z,k.current]),ae=Object(r.useMemo)((function(){var e=JSON.parse(oe),t=JSON.parse(re),n=null!==t&&void 0!==t?t:{},o={buttons:null!==e&&void 0!==e?e:[],name:"customButtons"};return Object(S.jsx)(T,{buttonGroup:o,theme:n,themeProp:W,executeAll:function(e){return B(e)}})}),[oe,re,W]),ce=Object(r.useMemo)((function(){var e=JSON.parse(te),t=JSON.parse(re),n=null!==t&&void 0!==t?t:{};return Object(S.jsx)(P,{menu:e,theme:n,themeProp:W,executeAll:function(e){return B(e)}})}),[te,re,W]),me=Object(r.useMemo)((function(){var e=JSON.parse(ne),t=JSON.parse(re),n=null!==t&&void 0!==t?t:{};return Object(S.jsx)(A,{infoRef:v,info:e,theme:n})}),[ne,re]),ue=Object(r.useMemo)((function(){return Object(S.jsx)(M,{isDisabled:s,inject:X.globalCSS})}),[X.globalCSS,s]);return Object(S.jsxs)($,{ref:function(e){e?G.observe(e):G.disconnect()},style:X.style,className:null!==(t="streamlit_code-editor "+(null===i||void 0===i?void 0:i.base))&&void 0!==t?t:"",$_css:X.css,children:[ue,ie,ae,ce,me]})}));a.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(z,{})}),document.getElementById("root"))}},[[501,1,2]]]);
//# sourceMappingURL=main.830bcf97.chunk.js.map