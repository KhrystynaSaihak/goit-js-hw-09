const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyRef:document.querySelector("button[data-stop]")};let e=null;t.startBtn.addEventListener("click",(a=>{a.currentTarget.disablet||(e=setInterval((()=>{t.bodyRef.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1)})),t.stopBtn.addEventListener("click",(a=>{clearInterval(e),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}));
//# sourceMappingURL=01-color-switcher.16078d5b.js.map