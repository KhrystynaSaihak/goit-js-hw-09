!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i");function i(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}({formRef:document.querySelector(".form")}).formRef.addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget.elements,t=+n.delay.value,r=+n.step.value,u=+n.amount.value,f=1;f<=u;f++)i(f,t).then((function(e){return o.Notify.success(e)})).catch((function(e){return o.Notify.failure(e)})),t+=r}))}();
//# sourceMappingURL=03-promises.3151a2e4.js.map