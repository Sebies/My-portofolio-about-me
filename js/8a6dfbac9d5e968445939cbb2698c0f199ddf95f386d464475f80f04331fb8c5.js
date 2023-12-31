!function() {
    "use strict";
    class e {
        constructor() {
            this.callbacks = [],
            window.addEventListener("DOMContentLoaded", (()=>this.onDOMContentLoaded()))
        }
        onDOMContentLoaded() {
            this.callbacks.sort(((e,t)=>e.priority - t.priority)).forEach((({callback: e})=>e()))
        }
        runOnLoad(e) {
            "loading" === document.readyState ? this.callbacks.push(e) : e.callback()
        }
    }
    const t = async e=>{
        const a = e.classList.contains("animated")
          , r = ()=>window.requestAnimationFrame((()=>e.style.animationPlayState = "running"));
        a && n(e) ? (await o(e),
        r()) : a ? r() : null != e.firstElementChild && t(e.firstElementChild)
    }
      , n = e=>{
        const t = e.getElementsByTagName("img").length > 0
          , n = e.getElementsByTagName("video").length > 0;
        return a(e) || t || n
    }
      , a = e=>{
        var t;
        return !!(null === (t = e.textContent) || void 0 === t ? void 0 : t.trim().length)
    }
      , o = async e=>{
        const t = []
          , n = e.getElementsByTagName("img");
        for (let e = 0; e < n.length; e++) {
            const a = n.item(e);
            t.push(r(a))
        }
        const o = e.getElementsByTagName("video");
        for (let e = 0; e < o.length; e++) {
            const n = o.item(e);
            t.push(i(n))
        }
        return a(e) && t.push(document.fonts.ready),
        Promise.all(t)
    }
      , r = e=>new Promise(((t,n)=>{
        e.complete ? t() : (e.loading = "eager",
        e.addEventListener("load", (()=>t())),
        e.addEventListener("error", (()=>n())))
    }
    ))
      , i = e=>new Promise(((t,n)=>{
        e.readyState >= 2 || e.poster ? t() : (e.addEventListener("loadeddata", (()=>t())),
        e.addEventListener("error", (()=>n())))
    }
    ));
    !function(t, n=Number.MAX_VALUE) {
        var a;
        (window.canva_scriptExecutor = null !== (a = window.canva_scriptExecutor) && void 0 !== a ? a : new e).runOnLoad({
            callback: t,
            priority: n
        })
    }((()=>{
        (()=>{
            const e = document.querySelectorAll(".animation_container");
            if (0 === e.length)
                return;
            const n = new IntersectionObserver((e=>{
                e.forEach((e=>{
                    if (!e.isIntersecting)
                        return;
                    const a = e.target;
                    t(a),
                    n.unobserve(a)
                }
                ))
            }
            ),{
                threshold: .01
            });
            e.forEach((e=>n.observe(e)))
        }
        )()
    }
    ))
}();