/*!
 * RETINA
 */
! function() {
    function t(t) {
        return Array.prototype.slice.call(t)
    }

    function e(t) {
        var e = parseInt(t, 10);
        return e > f ? f : e
    }

    function r(t) {
        return t.hasAttribute("data-no-resize") || (0 === t.offsetWidth && 0 === t.offsetHeight ? (t.setAttribute("width", t.naturalWidth), t.setAttribute("height", t.naturalHeight)) : (t.setAttribute("width", t.offsetWidth), t.setAttribute("height", t.offsetHeight))), t
    }

    function n(t, e) {
        var n = t.nodeName.toLowerCase(),
            i = document.createElement("img");
        i.addEventListener("load", function() {
            "img" === n ? r(t).setAttribute("src", e) : t.style.backgroundImage = "url(" + e + ")"
        }), i.setAttribute("src", e), t.setAttribute(h, !0)
    }

    function i(t, r) {
        var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2],
            o = e(i);
        if (r && o > 1) {
            var a = r.replace(c, "@" + o + "x$1");
            n(t, a)
        }
    }

    function o(t, e, r) {
        f > 1 && n(t, r)
    }

    function a(e) {
        return e ? "function" == typeof e.forEach ? e : t(e) : "undefined" != typeof document ? t(document.querySelectorAll(g)) : []
    }

    function u(t) {
        return t.style.backgroundImage.replace(l, "$2")
    }

    function d(t) {
        a(t).forEach(function(t) {
            if (!t.getAttribute(h)) {
                var e = "img" === t.nodeName.toLowerCase(),
                    r = e ? t.getAttribute("src") : u(t),
                    n = t.getAttribute("data-rjs"),
                    a = !isNaN(parseInt(n, 10));
                a ? i(t, r, n) : o(t, r, n)
            }
        })
    }
    "undefined" == typeof exports && (exports = {}), Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var s = "undefined" != typeof window,
        f = s ? window.devicePixelRatio || 1 : 1,
        c = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
        l = /url\(('|")?([^\)'"]+)('|")?\)/i,
        g = "[data-rjs]",
        h = "data-rjs-processed";
    s && (window.addEventListener("load", d), window.retinajs = d), exports["default"] = d
}();