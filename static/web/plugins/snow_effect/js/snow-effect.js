var k = null,
    m = null,
    n = null,
    p = null,
    q = null,
    r = null,
    t = null,
    u = null,
    v = null,
    w = null,
    x = null;
function y(a, f, b, d, c, e, g, h, l) {
    n = a;
    p = f;
    q = b;
    r = d;
    t = c;
    u = e;
    v = g;
    w = h;
    x = l;
    m = new z();
    m.Wb(a, f);
    m.Xa(d);
    m.Zb(c);
    c && m.V(b);
    m.Wa(e);
    m.qb(g);
    m.sb(h);
    m.pb(l);
}
window.goAdorSnow = y;
function A(a, f, b, d) {
    this.id = a;
    this.top = f;
    this.left = b;
    this.R = this.P = this.Za = 0;
    this.size = d;
    this.zb = 0;
}
function B(a) {
    var f = [];
    10 >= a
        ? (f.push("snowflake01_10px.png"), f.push("snowflake02_10px.png"), f.push("snowflake03_10px.png"), f.push("snowflake04_10px.png"))
        : 20 >= a
        ? (f.push("snowflake01_20px.png"), f.push("snowflake02_20px.png"), f.push("snowflake03_20px.png"), f.push("snowflake04_20px.png"))
        : 30 >= a
        ? (f.push("snowflake01_30px.png"), f.push("snowflake02_30px.png"), f.push("snowflake03_30px.png"), f.push("snowflake04_30px.png"))
        : (f.push("snowflake01_40px.png"), f.push("snowflake02_40px.png"), f.push("snowflake03_40px.png"), f.push("snowflake04_40px.png"));
    return f;
}
function z() {
    var a = this;
    a.ra = !1;
    a.sa = !1;
    a.Oa = !1;
    a.Ha = !1;
    a.Fb = !1;
    a.yc = !1;
    a.Sa = 80;
    a.h = 300;
    a.Tb = 30;
    a.X = 33;
    a.aa = 1800;
    a.va = 220;
    a.G = 0.4;
    a.Rb = 5.5;
    a.Sb = 0.2;
    a.g = 40;
    a.Nb = 3500;
    a.O = 20;
    a.N = 100;
    a.Ua = 16;
    a.wc = 17;
    a.l = 4;
    a.ua = 40;
    a.Ub = 100;
    a.Vb = 0.1;
    a.Cb = 0.5;
    a.Bb = 99999999;
    a.Ka = 3;
    a.Mb = 150;
    a.v = 1;
    a.Jb = 0.4;
    a.Gb = 0.4;
    a.Y = -0.1;
    a.Hb = 0.7;
    a.Z = 0.8;
    a.Lb = 20;
    a.Kb = 1;
    a.zc = a.Ka + 0.1;
    a.xc = 1500;
    a.Va = 0;
    var f = a.X / 1e3;
    a.Na = 1e3 / a.O;
    a.Ra = 10;
    a.Qa = a.aa * f;
    a.wa = a.g * f;
    a.Pa = a.va * f;
    a.Qb = (a.G * f) / a.Rb;
    a.Ta = (a.Mb / 100) * f;
    a.Ib = (a.v * f) / a.Jb;
    a.$ = (a.v * f) / a.Kb;
    a.Da = -1;
    a.Fa = [];
    a.jb = [];
    a.kb = [];
    a.lb = [];
    a.a = [];
    a.qa = [];
    a.F = 100;
    a.i = 100;
    a.gb = [];
    a.ib = [];
    a.hb = [];
    a.u = [];
    a.oa = [];
    a.K = [];
    a.L = null;
    a.b = null;
    a.f = null;
    a.j = null;
    a.m = null;
    a.D = null;
    a.T = null;
    a.J = null;
    a.la = null;
    a.na = 0;
    a.S = 0;
    a.o = 1;
    a.s = 0;
    a.fa = 0;
    a.I = 1;
    a.U = !1;
    a.ga = !1;
    a.ba = null;
    a.$a = null;
    a.ab = null;
    a.ca = null;
    a.bb = null;
    a.cb = null;
    a.B = null;
    a.ha = 0;
    a.M = -1;
    a.C = "";
    a.ic = "";
    a.Ec = 0;
    a.ma = 0;
    a.pa = 0;
    a.ia = 0;
    a.ka = 0;
    a.ja = 0;
    a.jc = !1;
    a.Ea = 1e4;
    a.Ca = !1;
    a.yb = function () {
        a.Na = 1e3 / a.O;
    };
    a.vb = function () {
        a.Pa = a.va * f;
    };
    a.wb = function () {
        a.Qa = a.aa * f;
    };
    a.xb = function () {
        a.wa = a.g * f;
    };
    a.rb = function (b) {
        a.c.style.position = b;
        a.b.style.position = b;
    };
    a.pc = function (b) {
        a.b.style.zIndex = b;
        a.c.style.zIndex = b - 1;
    };
    a.Xa = function (b) {
        a.Oa = b;
    };
    a.V = function (b) {
        a.ra = "undefined" != typeof b && b && "none" != b ? "url(" + a.C + b + ")" : "none";
        a.c.style.backgroundImage = a.ra;
    };
    a.Zb = function (b) {
        a.sa = b;
        "undefined" != typeof a.c && (a.sa ? a.V(a.ra) : a.V(!1));
    };
    a.Wa = function (b) {
        a.Ha = b;
        (a.U = b) && a.Ya();
    };
    a.qb = function (b) {
        0.2 > b ? ((a.O = 1), (a.G = 0.2)) : 0.4 > b ? ((a.O = 2), (a.G = 0.3)) : 0.6 > b ? ((a.O = 17), (a.G = 0.4)) : ((a.O = 0.8 > b ? 30 : 60), (a.G = 0.5));
        a.yb();
    };
    a.sb = function (b) {
        0.05 > b
            ? ((a.g = 0.001), (a.h = 0))
            : 0.15 > b
            ? ((a.g = 1), (a.h = 10))
            : 0.25 > b
            ? ((a.g = 3), (a.h = 26))
            : 0.35 > b
            ? ((a.g = 5), (a.h = 36))
            : 0.45 > b
            ? ((a.g = 7), (a.h = 50))
            : 0.55 > b
            ? ((a.g = 11), (a.h = 77))
            : 0.65 > b
            ? ((a.g = 14), (a.h = 100))
            : 0.75 > b
            ? ((a.g = 22), (a.h = 170))
            : 0.85 > b
            ? ((a.g = 40), (a.h = 300))
            : 0.95 > b
            ? ((a.g = 85), (a.h = 550))
            : ((a.g = 145), (a.h = 1100));
        a.ob();
        a.xb();
    };
    a.pb = function (b) {
        a.aa = 0.05 > b ? 200 : 0.15 > b ? 300 : 0.25 > b ? 450 : 0.35 > b ? 600 : 0.45 > b ? 800 : 0.55 > b ? 1e3 : 0.65 > b ? 1400 : 0.75 > b ? 1800 : 0.85 > b ? 2500 : 0.95 > b ? 3200 : 3800;
        a.va = 0.5 * a.aa;
        a.wb();
        a.vb();
    };
    a.rc = function () {
        a.b.width = a.b.width;
        a.uc();
        a.ga && a.tc();
        a.U && (a.U = k.sc());
        for (var b = 0; b < a.a.length; b++) (a.ga ? a.ec(b) : a.tb(b)) && a.vc(b);
        for (b = 0; b < a.qa.length; b++) a.nc(a.qa[b] - b);
        a.qa = [];
        if (0 >= a.pa && ((a.pa = a.Na), a.a.length < a.Nb)) for (b = 0; b < a.Ra; b++) a.oc(b);
        a.pa -= a.X;
    };
    a.ec = function (b) {
        var d = (a.a[b].top * (a.$a - a.ba)) / a.ab + a.ba;
        if (d < a.a[b].left) {
            var c = (a.a[b].top * (a.bb - a.ca)) / a.cb + a.ca;
            if (c > a.a[b].left) return (c -= d), (d = a.a[b].left - d), d <= c / 2 ? a.lc(b, d) : a.mc(b, c - d), a.nb(b);
        }
        return a.tb(b);
    };
    a.lc = function (b, d) {
        a.a[b].left -= a.Ta * d;
    };
    a.mc = function (b, d) {
        a.a[b].left += a.Ta * d;
    };
    a.tb = function (b) {
        a.kc(b);
        return a.nb(b);
    };
    a.kc = function (b) {
        if (0 >= a.a[b].R) {
            var d = a.$b() * a.u[a.a[b].size - a.l];
            a.a[b].Za = d * a.wa;
            a.a[b].P = Math.abs(Math.floor(d / a.wa));
            a.a[b].R = a.a[b].P;
            a.a[b].zb = a.a[b].P - (a.a[b].P / 100) * a.Ub;
        }
        d = 0;
        0 < a.a[b].P && ((d = (a.a[b].Za * a.a[b].R) / a.a[b].P), a.a[b].R >= a.a[b].zb && (d *= a.Vb));
        a.a[b].left += d;
        --a.a[b].R;
        a.a[b].left > a.F ? (a.a[b].left = a.a[b].left - a.a[b].size - Math.floor(a.a[b].left)) : a.a[b].left < -1 * a.a[b].size && (a.a[b].left = a.F + (a.a[b].left - Math.floor(a.a[b].left)));
    };
    a.nb = function (b) {
        if (a.a[b].top > a.i + a.Ua) return a.qa.push(b), !1;
        a.a[b].top += a.Qa * a.u[a.a[b].size - a.l];
        return !0;
    };
    a.vc = function (b) {
        a.f.drawImage(a.K[a.a[b].size][a.a[b].id], Math.floor(a.a[b].left), Math.floor(a.a[b].top), a.a[b].size, a.a[b].size);
    };
    a.oc = function (b) {
        var d = a.dc();
        !a.jc && a.Ea > a.l && d < a.Ea && (a.Ea = d);
        var c = a.bc() - a.Ua;
        b = a.ac() + b * a.Sa;
        if (!(a.ga && a.ba < b && b < a.ca)) {
            var e = new A(a.cc(d), c, b, d);
            a.a.push(e);
            a.f.drawImage(a.K[d.toString()][e.id], b, c, d, d);
        }
    };
    a.dc = function () {
        for (var b = Math.random(), d = 0; d < a.u.length; d++) if (b <= a.oa[d]) return d + a.l;
        return a.ua;
    };
    a.Ac = function (b) {
        b -= a.l;
        return 0 <= b ? a.u[b] : a.u[0];
    };
    a.nc = function (b) {
        a.a.splice(b, 1);
    };
    a.uc = function () {
        if (a.Oa && !isNaN(a.m) && null != a.m) {
            a.na < a.G ? ((a.f.globalAlpha = a.na), (a.na += a.Qb)) : (a.f.globalAlpha = a.G);
            a.D = a.J;
            a.T = a.D;
            for (0 < a.D && a.f.drawImage(a.j, 0, 0, a.la, a.j.height, 0, a.D - a.m, a.b.width, a.m); a.b.height > a.T; ) a.f.drawImage(a.j, 0, 0, a.la, a.j.height, 0, a.D, a.b.width, a.m), (a.D += a.m), (a.T += a.m);
            a.J += a.Pa;
            a.J > a.m && (a.J -= a.m);
            a.f.globalAlpha = 1;
        }
    };
    a.tc = function () {
        a.S < a.v
            ? ((a.f.globalAlpha = a.S), (a.S += a.Ib))
            : (a.Ca ? ((a.o += a.$), (a.s -= a.$), 0 > a.s && (a.s = 0)) : ((a.o -= a.$), 0 > a.o && (a.o = 0), (a.s += a.$)),
              a.o > a.v ? ((a.o = a.v), (a.Ca = !1), (a.ha = Math.floor(Math.random() * a.Lb)), 0.5 < Math.random() && (a.ha *= -1)) : 0 >= a.o && (a.Ca = !0),
              a.s > a.v && (a.s = a.v));
        a.f.drawImage(a.B, 0, 0, a.B.width, a.B.height, a.fa, 0, a.I, a.b.height);
        a.S >= a.v && ((a.f.globalAlpha = a.s), a.f.drawImage(a.B, 0, 0, a.B.width, a.B.height, a.fa + a.ha, 0, a.I, a.b.height));
        a.f.globalAlpha = 1;
    };
    a.$b = function () {
        a.ia++;
        a.ia >= a.N && (a.ia = 0);
        return a.gb[a.ia];
    };
    a.bc = function () {
        a.ka++;
        a.ka >= a.N && (a.ka = 0);
        return a.ib[a.ka];
    };
    a.ac = function () {
        a.ja++;
        a.ja >= a.N && (a.ja = 0);
        return a.hb[a.ja];
    };
    a.cc = function (b) {
        if (!(0 >= a.K.length || null == a.K[b.toString()])) return a.ma++, a.ma >= a.K[b.toString()].length && (a.ma = 0), a.ma;
    };
    a.ob = function () {
        for (var b = 0; b < a.N; b++) {
            var d = Math.floor(Math.random() * a.h);
            0.5 < Math.random() && (d *= -1);
            a.gb.push(d);
        }
    };
    a.Ya = function () {
        a.Ha &&
            (setTimeout(function () {
                k.gc(a.b, a.f, a.X);
                a.U = !0;
            }, 1e3 * a.Cb),
            setTimeout(function () {
                a.U = !1;
            }, 1e3 * a.Bb));
    };
    a.hc = function () {
        a.Fb &&
            setTimeout(function () {
                a.ga = !0;
            }, 1e3 * a.Ka);
    };
    a.fc = function (b, d) {
        var c = null;
        a.yb();
        a.xb();
        a.wb();
        a.vb();
        var e = document.documentElement;
        windowOffsetTop = window.pageYOffset || e.scrollTop;
        windowOffsetLeft = window.pageXOffset || e.scrollLeft;
        var g = (e = "");
        "undefined" !== typeof b && "" != b
            ? ((c = document.getElementById(b)), (a.F = c.scrollWidth), (a.i = c.scrollHeight), (g = c.getBoundingClientRect()), (e = g.top + windowOffsetTop + "px"), (g = g.left + windowOffsetLeft + "px"))
            : ("undefined" != typeof window.innerWidth
                  ? ((a.F = window.innerWidth), (a.i = window.innerHeight))
                  : "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth
                  ? ((a.F = document.documentElement.clientWidth), (a.i = document.documentElement.clientHeight))
                  : ((a.F = document.getElementsByTagName("body")[0].clientWidth), (a.i = document.getElementsByTagName("body")[0].clientHeight)),
              (e = -1 * windowOffsetTop + "px"),
              (g = -1 * windowOffsetLeft + "px"));
        a.Va = a.i;
        var h = a.F;
        0 < a.i && (a.M = h / a.i);
        a.ba = h * a.Gb;
        a.$a = h * a.Y;
        a.ab = a.i;
        a.ca = h * a.Hb;
        a.bb = h * a.Z;
        a.cb = a.i;
        a.c = document.createElement("div");
        a.c.id = "snowBackgroundDiv";
        a.c.style.pointerEvents = "none";
        a.sa || a.V(!1);
        a.c.style.position = "absolute";
        a.c.style.top = e;
        a.c.style.left = g;
        a.c.style.width = h.toString() + "px";
        a.c.style.height = a.i.toString() + "px";
        a.c.style.display = "inherit";
        document.body.appendChild(a.c);
        a.L = document.createElement("div");
        a.L.id = "snowflakeImgDiv";
        a.L.style.pointerEvents = "none";
        a.L.style.display = "none";
        document.body.appendChild(a.L);
        a.b = document.createElement("canvas");
        a.b.id = "snowflakeCanvasDiv";
        a.b.style.pointerEvents = "none";
        a.b.style.position = "absolute";
        a.b.style.top = e;
        a.b.style.left = g;
        a.b.width = h;
        a.b.height = a.i;
        a.b.style.opacity = 1;
        a.pc(d);
        document.body.appendChild(a.b);
        a.f = a.b.getContext("2d");
        null == c &&
            0 < window.pageXOffset &&
            ((e = a.b.style.left),
            (e = e.substring(0, e.indexOf("px"))),
            (e = parseInt(e, 10) + window.pageXOffset),
            (e = String(e) + "px"),
            (a.b.style.left = e),
            (e = a.c.style.left),
            (e = e.substring(0, e.indexOf("px"))),
            (e = parseInt(e, 10) + window.pageXOffset),
            (e = String(e) + "px"),
            (a.c.style.left = e));
        null == c &&
            0 < window.pageYOffset &&
            ((c = a.b.style.top),
            (c = c.substring(0, c.indexOf("px"))),
            (c = parseInt(c, 10) + window.pageYOffset),
            (c = String(c) + "px"),
            (a.b.style.top = c),
            (c = a.c.style.top),
            (c = c.substring(0, c.indexOf("px"))),
            (c = parseInt(c, 10) + window.pageYOffset),
            (c = String(c) + "px"),
            (a.c.style.top = c));
        0 < a.M && 1 >= a.M
            ? (0.75 < a.M ? ((a.I = 1.25 * a.b.width), (a.Y = -0.9), (a.Z = 1.7)) : 0.5 < a.M ? ((a.I = 1.5 * a.b.width), (a.Y = -1.7), (a.Z = 2.5)) : ((a.I = 1.75 * a.b.width), (a.Y = -2.5), (a.Z = 3.3)),
              (a.fa = ((a.I - a.b.width) / 2) * -1))
            : ((a.I = a.b.width), (a.fa = 0));
        a.j = new Image();
        a.j.src = a.C + "snow_background.jpg";
        a.j.onload = function () {
            a.m = a.b.width / (a.j.width / a.j.height);
            a.D = 0;
            a.T = 0;
            a.J = 0;
            a.la = a.j.width;
            1 > a.M && (a.la = a.j.width * a.M);
        };
        a.B = new Image();
        a.B.src = a.C + "illumination_ray.png";
        a.Ya();
        a.hc();
        a.Ra = a.F / a.Sa;
        "undefined" !== typeof b && "" != b ? a.rb("absolute") : a.rb("fixed");
        a.c.style.backgroundSize = "contain";
        a.c.style.backgroundRepeat = "no-repeat";
        a.ob();
        for (c = 0; c < a.N; c++) a.ib.push(-1 * Math.floor(Math.random() * a.Va));
        for (c = 0; c < a.N; c++) (e = Math.floor(Math.random() * a.Tb)), 0.5 < Math.random() && (e *= -1), a.hb.push(e);
        e = a.ua - a.l;
        g = a.ua - a.l;
        h = g - g * (1 - a.Sb);
        var l = a.l;
        for (c = 0; c <= e; c++) a.u[c] = (a.l + c - l) / g;
        for (c = 0; c <= e - 1; c++) a.u[c] += (a.u[e - c] * h) / g;
        for (c = 0; c <= e; c++) a.oa[c] = 0 == c ? 0.25 : a.oa[c - 1] + 0.25 * (1 - a.oa[c - 1]);
        for (c = 0; c <= e; c++)
            for (g = c + a.l, a.K[g.toString()] = [], h = 0; h < a.Fa.length; h++)
                (l = document.createElement("img")),
                    (l.src = 10 >= g ? a.C + a.Fa[h] : 20 >= g ? a.C + a.jb[h] : 30 >= g ? a.C + a.kb[h] : a.C + a.lb[h]),
                    (l.id = "snow_" + h + "_" + g + "x" + g),
                    (l.alt = "snow"),
                    a.L.appendChild(l),
                    a.K[g.toString()].push(l);
    };
    a.Xb = function () {
        clearInterval(a.Da);
        document.body.removeChild(a.L);
        document.body.removeChild(a.b);
        document.body.removeChild(a.c);
        var b = document.getElementById("ador_plg_actionButton");
        null != b && b.parentNode.removeChild(b);
        location.reload();
    };
    a.qc = function () {
        clearInterval(a.Da);
        var b = document.getElementById("snowBackgroundDiv");
        b.parentNode.removeChild(b);
        b = document.getElementById("snowflakeImgDiv");
        b.parentNode.removeChild(b);
        b = document.getElementById("snowflakeCanvasDiv");
        b.parentNode.removeChild(b);
    };
    a.Wb = function (b, d) {
        k = new C();
        a.C = "/web/plugins/snow_effect/images/";
        a.ic = "";
        a.Fa = B(10);
        a.jb = B(20);
        a.kb = B(30);
        a.lb = B(40);
        a.fc(b, d);
        a.Da = setInterval(function () {
            a.rc();
        }, a.X);
        window.clearFbAction = a.Xb;
    };
}
var D,
    E = !1,
    F = !0,
    G = !1;
window.addEventListener("resize", H);
function H() {
    D = new Date();
    !1 === E && ((E = !0), setTimeout(I, 200));
    F && !1 === G && ((G = !0), setTimeout(J, 250));
}
function I() {
    200 > new Date() - D ? (setTimeout(I, 200), (F = G = E = !1)) : (K(), (G = !1), (F = !0));
}
function J() {
    F && (250 > new Date() - D ? (setTimeout(J, 250), (G = !1)) : K());
}
function K() {
    null != m && L();
    "undefined" !== typeof _adSnowConfigurationFileInUse ? restartSnowFromConfig() : y(n, p, q, r, t, u, v, w, x);
}
window.restartSnow = K;
function L() {
    m.qc();
    m = null;
}
window.stopSnow = L;
window.adSetSnowAmount = function (a) {
    m.qb(a);
};
window.adSetTurbulence = function (a) {
    m.sb(a);
};
window.adSetFallSpeed = function (a) {
    m.pb(a);
};
window.adEnableSnowBackground = function (a) {
    m.Xa(a);
};
window.adSetBackgroundImage = function (a) {
    m.V(a);
};
window.adEnableFlashes = function (a) {
    m.Wa(a);
};
function C() {
    var a = this;
    a.W = 3;
    a.Ga = 6;
    a.Ja = 0.05;
    a.Eb = 0.2;
    a.La = 0.1;
    a.Ob = 0.35;
    a.Ab = 100;
    a.Ma = 1;
    a.Pb = 2.5;
    a.ta = 0;
    a.Ia = 0.7;
    a.Db = a.Ia - a.ta;
    a.H = null;
    a.w = null;
    a.ea = null;
    a.mb = null;
    a.Cc = 0;
    a.Aa = !1;
    a.Ba = !0;
    a.A = 0;
    a.fb = 0;
    a.xa = 0;
    a.Dc = null;
    a.ya = 0;
    a.za = 0;
    a.eb = 0;
    a.da = !1;
    a.Bc = 0;
    a.sc = function () {
        if (a.Aa) {
            if ((a.Yb(a.A), a.Ba ? ((a.A += a.xa), a.A >= a.Ia && (a.Ba = !1)) : (a.A -= a.xa), a.A <= a.ta && ((a.Aa = !1), a.za >= a.ya))) {
                a.za = 0;
                a.eb++;
                if (a.eb >= a.Ab) return !1;
                a.da = !1;
                setTimeout(function () {
                    a.da = !0;
                }, 1e3 * (Math.random() * (a.Pb - a.Ma) + a.Ma));
            }
        } else
            a.da &&
                setTimeout(function () {
                    a.ya = Math.floor(Math.random() * (a.Ga - a.W + 1) + a.W);
                    a.ub();
                }, 1e3 * (Math.random() * (a.Ob - a.La) + a.La));
        return !0;
    };
    a.ub = function () {
        a.da = !0;
        a.za++;
        a.fb = Math.random() * (a.Eb - a.Ja) + a.Ja;
        a.xa = (a.Db / ((1e3 * a.fb) / a.mb)) * 2;
        a.A = a.ta;
        a.Aa = !0;
        a.Ba = !0;
    };
    a.Yb = function (f) {
        var b = a.w.globalAlpha;
        a.w.globalAlpha = f;
        a.w.rect(0, 0, a.H.width, a.H.height);
        a.w.fillStyle = a.ea;
        a.w.fill();
        a.w.globalAlpha = b;
    };
    a.gc = function (f, b, d) {
        a.H = f;
        a.w = b;
        a.mb = d;
        a.ea = a.w.createLinearGradient(0.8 * a.H.width, 0.15 * a.H.height, -0.2 * a.H.width, 0.9 * a.H.height);
        a.ea.addColorStop(0, "#FFFFFF");
        a.ea.addColorStop(1, "#000000");
        a.ya = Math.floor(Math.random() * (a.Ga - a.W + 1) + a.W);
        a.ub();
    };
}



function _0xe58d(){var _0x38d9a2=['#slider_turbulence','#code_div','#setBgrClouds','15138AggwFi','#setFlash','#code_zindex','4Qmnuvi','value','22267630avuQvg','#code_bgr_clouds','33215UvVTaA','#slider_rateOfFall','#setMist','#setDiv','#code_turbulence','checked','click','wolken1.png','#code_mist','8465AgxSpI','children','keyup','false','66VdAXUG','slider','#code_amount','#code_flash','1487232hKMiiW','true','#setZindex','1814331HSksBt','#code_clouds','488AYfPpB','1000','#code_rate_of_fall','text','374627WjEfOm'];_0xe58d=function(){return _0x38d9a2;};return _0xe58d();}var _0x534de1=_0x5842;function _0x5842(_0x32246c,_0x92c670){var _0xe58d0e=_0xe58d();return _0x5842=function(_0x5842bb,_0x5ac20b){_0x5842bb=_0x5842bb-0x84;var _0x42b8a7=_0xe58d0e[_0x5842bb];return _0x42b8a7;},_0x5842(_0x32246c,_0x92c670);}(function(_0x1a8907,_0x28a74b){var _0x1ea6fa=_0x5842,_0x183da6=_0x1a8907();while(!![]){try{var _0x20077a=-parseInt(_0x1ea6fa(0xa3))/0x1+-parseInt(_0x1ea6fa(0x9a))/0x2+-parseInt(_0x1ea6fa(0x9d))/0x3*(parseInt(_0x1ea6fa(0x85))/0x4)+-parseInt(_0x1ea6fa(0x92))/0x5*(parseInt(_0x1ea6fa(0x96))/0x6)+-parseInt(_0x1ea6fa(0x89))/0x7+-parseInt(_0x1ea6fa(0x9f))/0x8*(parseInt(_0x1ea6fa(0xa7))/0x9)+parseInt(_0x1ea6fa(0x87))/0xa;if(_0x20077a===_0x28a74b)break;else _0x183da6['push'](_0x183da6['shift']());}catch(_0x341791){_0x183da6['push'](_0x183da6['shift']());}}}(_0xe58d,0x5c3ad),goAdorSnow('',0x1,_0x534de1(0x90),!![],!![],![],0.5,0.5,0.4),$(_0x534de1(0x8b))[_0x534de1(0x8f)](function(_0x54564c){var _0x2cb6a7=_0x534de1;this[_0x2cb6a7(0x8e)]?(adEnableSnowBackground(!![]),$(_0x2cb6a7(0x91))[_0x2cb6a7(0xa2)](_0x2cb6a7(0x9b))):(adEnableSnowBackground(![]),$(_0x2cb6a7(0x91))[_0x2cb6a7(0xa2)](_0x2cb6a7(0x95)));}),$(_0x534de1(0xa6))['change'](function(){var _0x58bbe1=_0x534de1,_0x992607=$(this)[_0x58bbe1(0x93)]('option:selected')['val']();adSetBackgroundImage(_0x992607),!_0x992607?$(_0x58bbe1(0x88))[_0x58bbe1(0xa2)](_0x58bbe1(0x95)):$(_0x58bbe1(0x88))['text'](_0x58bbe1(0x9b)),$(_0x58bbe1(0x9e))['text'](_0x992607);}),$(_0x534de1(0xa8))[_0x534de1(0x8f)](function(_0x28829a){var _0x271484=_0x534de1;this['checked']?(adEnableFlashes(!![]),$(_0x271484(0x99))['text']('true')):(adEnableFlashes(![]),$('#code_flash')[_0x271484(0xa2)](_0x271484(0x95)));}),$(_0x534de1(0x9c))[_0x534de1(0x8f)](function(_0x4f1c0b){var _0x5d4706=_0x534de1;this['checked']?$(_0x5d4706(0x84))[_0x5d4706(0xa2)]('-1000'):$(_0x5d4706(0x84))[_0x5d4706(0xa2)](_0x5d4706(0xa0));}),$(_0x534de1(0x8c))[_0x534de1(0x94)](function(){var _0x2eca72=_0x534de1,_0x75e053=$(this)['val']();$(_0x2eca72(0xa5))[_0x2eca72(0xa2)](_0x75e053);}),$(function(){var _0x343a5d=_0x534de1;$('#slider_amount')[_0x343a5d(0x97)]({'value':0.4,'min':0.1,'max':0.9,'step':0.2,'slide':function(_0x879c09,_0x928f6e){var _0x23a165=_0x343a5d;adSetSnowAmount(_0x928f6e[_0x23a165(0x86)]),$(_0x23a165(0x98))[_0x23a165(0xa2)](_0x928f6e['value']);}}),$(_0x343a5d(0xa4))[_0x343a5d(0x97)]({'value':0.4,'min':0x0,'max':0x1,'step':0.1,'slide':function(_0x13eeb2,_0x5f3db7){var _0x11d454=_0x343a5d;adSetTurbulence(_0x5f3db7[_0x11d454(0x86)]),$(_0x11d454(0x8d))['text'](_0x5f3db7[_0x11d454(0x86)]);}}),$(_0x343a5d(0x8a))[_0x343a5d(0x97)]({'value':0.5,'min':0x0,'max':0x1,'step':0.1,'slide':function(_0x4f7219,_0x26ee8a){var _0x322945=_0x343a5d;adSetFallSpeed(_0x26ee8a[_0x322945(0x86)]),$(_0x322945(0xa1))['text'](_0x26ee8a[_0x322945(0x86)]);}});}));