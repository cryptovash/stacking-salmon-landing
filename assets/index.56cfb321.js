import {j as a, R as n, a as d} from "./vendor.d243c27f.js";
const m = function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload"))
        return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        c(e);
    new MutationObserver(e=>{
        for (const r of e)
            if (r.type === "childList")
                for (const i of r.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && c(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function l(e) {
        const r = {};
        return e.integrity && (r.integrity = e.integrity),
        e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
        e.crossorigin === "use-credentials" ? r.credentials = "include" : e.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function c(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const r = l(e);
        fetch(e.href, r)
    }
};
m();
var h = "/assets/stacking-salmon-logo.png"
  , u = "/assets/twitter.e240e92d.svg"
  , g = "/assets/github.754c5459.svg"
  , f = "/assets/medium.f6a7c053.svg"
  , p = "/assets/gitbook.b256bd6c.svg"
  , v = "/assets/discord.2d4c44c7.svg";
const t = a.exports.jsx
  , s = a.exports.jsxs;
function y() {
    return s("div", {
        className: "App",
        children: [t("div", {
            className: "bg"
        }), s("div", {
            className: "center",
            children: [t("img", {
                src: h,
                alt: "Aries logo with text"
            }), s("h2", {
                children: ["Coming soon to", " ", t("a", {
                    href: "https://aurora.dev/",
                    style: {
                        textDecoration: "none",
                        color: "inherit"
                    },
                    children: "Aurora"
                })]
            }), s("div", {
                className: "logos-container",
                children: [t("a", {
                    className: "logo",
                    href: "https://aries.so/discord",
                    children: t("img", {
                        src: v,
                        alt: "Discord",
                        width: 24
                    })
                }), t("a", {
                    className: "logo",
                    href: "https://twitter.com/ariesprotocol",
                    children: t("img", {
                        src: u,
                        alt: "Twitter",
                        width: 24
                    })
                }), t("a", {
                    className: "logo",
                    href: "https://ariesprotocol.medium.com",
                    children: t("img", {
                        src: f,
                        alt: "Medium",
                        width: 24
                    })
                }), t("a", {
                    className: "logo",
                    href: "https://github.com/aries-protocol",
                    children: t("img", {
                        src: g,
                        alt: "GitHub",
                        width: 24
                    })
                }), t("a", {
                    className: "logo",
                    href: "https://docs.aries.so",
                    children: t("img", {
                        src: p,
                        alt: "Documentation",
                        width: 24
                    })
                })]
            })]
        })]
    })
}
n.render(t(d.StrictMode, {
    children: t(y, {})
}), document.getElementById("root"));