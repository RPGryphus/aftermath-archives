//	FONT FAMILIES
$(function() {
    if (!$["sceditor"]) return;
    $.sceditor.defaultOptions.fonts = 'Gothish,Fraktur,Grenze,Insular,Manuscript,Magiscript,Cinzel,Army';
});

//	COLOR PALETTE
$(function() {
    $(function() {

        if ($("#text_editor_textarea").length != 0) {
            $.sceditor.command.get('color')._menu = function(editor, caller, callback) {
                var mColorBasic = [],
                    html = $('<div />');

                // liste des couleurs

                mColorBasic["Noir"] = "#000000";
                mColorBasic["Bleu foncé"] = "#00008B";
                mColorBasic["Sarcelle"] = "#008080";
                mColorBasic["Vert foncé"] = "#006400";
                mColorBasic["Indigo"] = "#4B0082";
                mColorBasic["Cramoisi"] = "#DC143C";
                mColorBasic["Orange"] = "#FF4500";
                mColorBasic["Marron"] = "#663300";

                mColorBasic["Gris foncé"] = "#666666";
                mColorBasic["Bleu royal"] = "#4169E1";
                mColorBasic["Turquoise foncé"] = "#00CED1";
                mColorBasic["Vert"] = "#008000";
                mColorBasic["Pourpre"] = "#9400D3";
                mColorBasic["Rouge"] = "#FF0000";
                mColorBasic["Orange clair"] = "#FF9933";
                mColorBasic["Sienne"] = "#A0522D";

                mColorBasic["Gris clair"] = "#D3D3D3";
                mColorBasic["Bleu ciel"] = "#87CEEB";
                mColorBasic["Cyan"] = "#00FFFF";
                mColorBasic["Vert pomme"] = "#32CD32";
                mColorBasic["Mauve"] = "#DA70D6";
                mColorBasic["Saumon"] = "#FA8072";
                mColorBasic["Or"] = "#FFD700";
                mColorBasic["Brun clair"] = "#CD853F";

                mColorBasic["Blanc"] = "#FFFFFF";
                mColorBasic["Turquoise pâle"] = "#AFEEEE";
                mColorBasic["Bleu vert"] = "#7FFFD4";
                mColorBasic["Vert pâle"] = "#98FB98";
                mColorBasic["Rose"] = "#FFC0CB";
                mColorBasic["Pêche"] = "#FFDAB9";
                mColorBasic["Jaune"] = "#FFFF00";
                mColorBasic["Bois"] = "#DEB887";

                // fin de la liste des couleurs

                for (key in mColorBasic) html.append('<div class="color-option" title="' + key + '"><span color="' + mColorBasic[key] + '" style="background-color: ' + mColorBasic[key] + ' !important;"></span></div>');

                html.find('span').click(function(e) {
                    callback($(this).attr('color'));
                    editor.closeDropDown(true);
                    e.preventDefault();
                });

                editor.createDropDown(caller, "color-picker", html);
            }
        }
    })
});

//	BURGER MENU LINK REMOVAL
$(function() {
    $(function() {
        $('#main-menu ul li  a[href*="/memberlist"]').each(function() {
            $(this).attr('href', 'https://sanguo-sengoku.goodforum.net/memberlist');
            $(this).find('span').text('Members');
        });
    })
});

$(function() {
    $(function() {
        $('#main-menu ul li  a[href*="/groups"]').each(function() {
            $(this).attr('href', 'https://sanguo-sengoku.goodforum.net/groups');
            $(this).find('span').text('Groups');
        });
    })
});

$(function() {
    $(function() {
        $('#main-menu ul li  a[href*="/images"]').each(function() {
            $(this).attr('href', 'https://sanguo-sengoku.goodforum.net/images');
            $(this).find('span').text('Gallery');
        });
    })
});

//	F12 LOGOFF
document.addEventListener("keydown", function(event) {
  if ((event.key === "F12") || // F12
      (event.ctrlKey && event.shiftKey && event.code === "KeyI") || // Ctrl + Shift + I
      (event.metaKey && event.altKey && event.code === "KeyI")) { // Cmd + Opt + I
    var exceptionSelector = '#main-user-menu a[href="/u1"], #main-user-menu a[href="/u2"]';
    var logoutLinks = document.querySelectorAll('a[href*="/login?logout"]');
    var hasException = document.querySelector(exceptionSelector) !== null;
    if (hasException) {
      return;
    } else if (logoutLinks.length > 0) {
      window.location.href = logoutLinks[0].href;
    } else {
      window.location.href = "https://aftermath-archives.goodforum.net/";
    }
  }
});

//	PROFILE MENU BUTTON POSITION SWAP
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.querySelector('#wrap > div.dropdown.mobile-visible.cp-mobile-menu');
    const advancedProfile = document.querySelector('#wrap > div.cp.advanced-profile');
    if (mobileMenu && advancedProfile) {
        advancedProfile.parentNode.insertBefore(mobileMenu, advancedProfile);
    }
});

//	RADIO UNCHECK FUNCTION
$(document).on("click", function(event) {
    var clickedElement = $(event.target);

    // Check if clicked element is not a radio button
    if (!clickedElement.hasClass("unradio")) {
        // Deselect all radio buttons
        $(".unradio").prop("checked", false);
    }
});

//	CODEBOX 'SELECT ALL' BUTTON
function selectCode(e) {
    var s = $(e).closest("div").find("code").get(0),
        range, selection;
    var a = s,
        z = s;
    while (a.nodeType == 1 && a.childNodes.length) a = a.firstChild;
    while (z.nodeType == 1 && z.childNodes.length) z = z.lastChild;
    if (!$(a).is('.fixff')) {
        var fix = $('<span class="fixff"/>').insertBefore(a);
    } else {
        a = a.nextSibling;
    }
    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(s);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.setStart(a, 0);
        range.setEnd(z, z.nodeValue ? z.nodeValue.length : 0);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};
$(function() {
    $("div.codebox:not(.spoiler,.hidecode) ").find('p').append('<span onClick="selectCode(this)" class="material-symbols-rounded">\ue14d</span>')
});

//	CODEBOX LANGUAGES
var hljs = new function() {
    function k(v) {
        return v.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function t(v) {
        return v.nodeName.toLowerCase()
    }

    function i(w, x) {
        var v = w && w.exec(x);
        return v && v.index == 0
    }

    function d(v) {
        return Array.prototype.map.call(v.childNodes, function(w) {
            if (w.nodeType == 3) {
                return b.useBR ? w.nodeValue.replace(/\n/g, "") : w.nodeValue
            }
            if (t(w) == "br") {
                return "\n"
            }
            return d(w)
        }).join("")
    }

    function r(w) {
        var v = (w.className + " " + (w.parentNode ? w.parentNode.className : "")).split(/\s+/);
        v = v.map(function(x) {
            return x.replace(/^language-/, "")
        });
        return v.filter(function(x) {
            return j(x) || x == "no-highlight"
        })[0]
    }

    function o(x, y) {
        var v = {};
        for (var w in x) {
            v[w] = x[w]
        }
        if (y) {
            for (var w in y) {
                v[w] = y[w]
            }
        }
        return v
    }

    function u(x) {
        var v = [];
        (function w(y, z) {
            for (var A = y.firstChild; A; A = A.nextSibling) {
                if (A.nodeType == 3) {
                    z += A.nodeValue.length
                } else {
                    if (t(A) == "br") {
                        z += 1
                    } else {
                        if (A.nodeType == 1) {
                            v.push({
                                event: "start",
                                offset: z,
                                node: A
                            });
                            z = w(A, z);
                            v.push({
                                event: "stop",
                                offset: z,
                                node: A
                            })
                        }
                    }
                }
            }
            return z
        })(x, 0);
        return v
    }

    function q(w, y, C) {
        var x = 0;
        var F = "";
        var z = [];

        function B() {
            if (!w.length || !y.length) {
                return w.length ? w : y
            }
            if (w[0].offset != y[0].offset) {
                return (w[0].offset < y[0].offset) ? w : y
            }
            return y[0].event == "start" ? w : y
        }

        function A(H) {
            function G(I) {
                return " " + I.nodeName + '="' + k(I.value) + '"'
            }
            F += "<" + t(H) + Array.prototype.map.call(H.attributes, G).join("") + ">"
        }

        function E(G) {
            F += "</" + t(G) + ">"
        }

        function v(G) {
            (G.event == "start" ? A : E)(G.node)
        }
        while (w.length || y.length) {
            var D = B();
            F += k(C.substr(x, D[0].offset - x));
            x = D[0].offset;
            if (D == w) {
                z.reverse().forEach(E);
                do {
                    v(D.splice(0, 1)[0]);
                    D = B()
                } while (D == w && D.length && D[0].offset == x);
                z.reverse().forEach(A)
            } else {
                if (D[0].event == "start") {
                    z.push(D[0].node)
                } else {
                    z.pop()
                }
                v(D.splice(0, 1)[0])
            }
        }
        return F + k(C.substr(x))
    }

    function m(y) {
        function v(z) {
            return (z && z.source) || z
        }

        function w(A, z) {
            return RegExp(v(A), "m" + (y.cI ? "i" : "") + (z ? "g" : ""))
        }

        function x(D, C) {
            if (D.compiled) {
                return
            }
            D.compiled = true;
            D.k = D.k || D.bK;
            if (D.k) {
                var z = {};

                function E(G, F) {
                    if (y.cI) {
                        F = F.toLowerCase()
                    }
                    F.split(" ").forEach(function(H) {
                        var I = H.split("|");
                        z[I[0]] = [G, I[1] ? Number(I[1]) : 1]
                    })
                }
                if (typeof D.k == "string") {
                    E("keyword", D.k)
                } else {
                    Object.keys(D.k).forEach(function(F) {
                        E(F, D.k[F])
                    })
                }
                D.k = z
            }
            D.lR = w(D.l || /\b[A-Za-z0-9_]+\b/, true);
            if (C) {
                if (D.bK) {
                    D.b = D.bK.split(" ").join("|")
                }
                if (!D.b) {
                    D.b = /\B|\b/
                }
                D.bR = w(D.b);
                if (!D.e && !D.eW) {
                    D.e = /\B|\b/
                }
                if (D.e) {
                    D.eR = w(D.e)
                }
                D.tE = v(D.e) || "";
                if (D.eW && C.tE) {
                    D.tE += (D.e ? "|" : "") + C.tE
                }
            }
            if (D.i) {
                D.iR = w(D.i)
            }
            if (D.r === undefined) {
                D.r = 1
            }
            if (!D.c) {
                D.c = []
            }
            var B = [];
            D.c.forEach(function(F) {
                if (F.v) {
                    F.v.forEach(function(G) {
                        B.push(o(F, G))
                    })
                } else {
                    B.push(F == "self" ? D : F)
                }
            });
            D.c = B;
            D.c.forEach(function(F) {
                x(F, D)
            });
            if (D.starts) {
                x(D.starts, C)
            }
            var A = D.c.map(function(F) {
                return F.bK ? "\\.?\\b(" + F.b + ")\\b\\.?" : F.b
            }).concat([D.tE]).concat([D.i]).map(v).filter(Boolean);
            D.t = A.length ? w(A.join("|"), true) : {
                exec: function(F) {
                    return null
                }
            };
            D.continuation = {}
        }
        x(y)
    }

    function c(S, L, J, R) {
        function v(U, V) {
            for (var T = 0; T < V.c.length; T++) {
                if (i(V.c[T].bR, U)) {
                    return V.c[T]
                }
            }
        }

        function z(U, T) {
            if (i(U.eR, T)) {
                return U
            }
            if (U.eW) {
                return z(U.parent, T)
            }
        }

        function A(T, U) {
            return !J && i(U.iR, T)
        }

        function E(V, T) {
            var U = M.cI ? T[0].toLowerCase() : T[0];
            return V.k.hasOwnProperty(U) && V.k[U]
        }

        function w(Z, X, W, V) {
            var T = V ? "" : b.classPrefix,
                U = '<span class="' + T,
                Y = W ? "" : "</span>";
            U += Z + '">';
            return U + X + Y
        }

        function N() {
            var U = k(C);
            if (!I.k) {
                return U
            }
            var T = "";
            var X = 0;
            I.lR.lastIndex = 0;
            var V = I.lR.exec(U);
            while (V) {
                T += U.substr(X, V.index - X);
                var W = E(I, V);
                if (W) {
                    H += W[1];
                    T += w(W[0], V[0])
                } else {
                    T += V[0]
                }
                X = I.lR.lastIndex;
                V = I.lR.exec(U)
            }
            return T + U.substr(X)
        }

        function F() {
            if (I.sL && !f[I.sL]) {
                return k(C)
            }
            var T = I.sL ? c(I.sL, C, true, I.continuation.top) : g(C);
            if (I.r > 0) {
                H += T.r
            }
            if (I.subLanguageMode == "continuous") {
                I.continuation.top = T.top
            }
            return w(T.language, T.value, false, true)
        }

        function Q() {
            return I.sL !== undefined ? F() : N()
        }

        function P(V, U) {
            var T = V.cN ? w(V.cN, "", true) : "";
            if (V.rB) {
                D += T;
                C = ""
            } else {
                if (V.eB) {
                    D += k(U) + T;
                    C = ""
                } else {
                    D += T;
                    C = U
                }
            }
            I = Object.create(V, {
                parent: {
                    value: I
                }
            })
        }

        function G(T, X) {
            C += T;
            if (X === undefined) {
                D += Q();
                return 0
            }
            var V = v(X, I);
            if (V) {
                D += Q();
                P(V, X);
                return V.rB ? 0 : X.length
            }
            var W = z(I, X);
            if (W) {
                var U = I;
                if (!(U.rE || U.eE)) {
                    C += X
                }
                D += Q();
                do {
                    if (I.cN) {
                        D += "</span>"
                    }
                    H += I.r;
                    I = I.parent
                } while (I != W.parent);
                if (U.eE) {
                    D += k(X)
                }
                C = "";
                if (W.starts) {
                    P(W.starts, "")
                }
                return U.rE ? 0 : X.length
            }
            if (A(X, I)) {
                throw new Error('Illegal lexeme "' + X + '" for mode "' + (I.cN || "<unnamed>") + '"')
            }
            C += X;
            return X.length || 1
        }
        var M = j(S);
        if (!M) {
            throw new Error('Unknown language: "' + S + '"')
        }
        m(M);
        var I = R || M;
        var D = "";
        for (var K = I; K != M; K = K.parent) {
            if (K.cN) {
                D = w(K.cN, D, true)
            }
        }
        var C = "";
        var H = 0;
        try {
            var B, y, x = 0;
            while (true) {
                I.t.lastIndex = x;
                B = I.t.exec(L);
                if (!B) {
                    break
                }
                y = G(L.substr(x, B.index - x), B[0]);
                x = B.index + y
            }
            G(L.substr(x));
            for (var K = I; K.parent; K = K.parent) {
                if (K.cN) {
                    D += "</span>"
                }
            }
            return {
                r: H,
                value: D,
                language: S,
                top: I
            }
        } catch (O) {
            if (O.message.indexOf("Illegal") != -1) {
                return {
                    r: 0,
                    value: k(L)
                }
            } else {
                throw O
            }
        }
    }

    function g(y, x) {
        x = x || b.languages || Object.keys(f);
        var v = {
            r: 0,
            value: k(y)
        };
        var w = v;
        x.forEach(function(z) {
            if (!j(z)) {
                return
            }
            var A = c(z, y, false);
            A.language = z;
            if (A.r > w.r) {
                w = A
            }
            if (A.r > v.r) {
                w = v;
                v = A
            }
        });
        if (w.language) {
            v.second_best = w
        }
        return v
    }

    function h(v) {
        if (b.tabReplace) {
            v = v.replace(/^((<[^>]+>|\t)+)/gm, function(w, z, y, x) {
                return z.replace(/\t/g, b.tabReplace)
            })
        }
        if (b.useBR) {
            v = v.replace(/\n/g, "<br>")
        }
        return v
    }

    function p(z) {
        var y = d(z);
        var A = r(z);
        if (A == "no-highlight") {
            return
        }
        var v = A ? c(A, y, true) : g(y);
        var w = u(z);
        if (w.length) {
            var x = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
            x.innerHTML = v.value;
            v.value = q(w, u(x), y)
        }
        v.value = h(v.value);
        z.innerHTML = v.value;
        z.className += " hljs " + (!A && v.language || "");
        z.result = {
            language: v.language,
            re: v.r
        };
        if (v.second_best) {
            z.second_best = {
                language: v.second_best.language,
                re: v.second_best.r
            }
        }
    }
    var b = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: false,
        languages: undefined
    };

    function s(v) {
        b = o(b, v)
    }

    function l() {
        if (l.called) {
            return
        }
        l.called = true;
        var v = document.querySelectorAll("pre code");
        Array.prototype.forEach.call(v, p)
    }

    function a() {
        addEventListener("DOMContentLoaded", l, false);
        addEventListener("load", l, false)
    }
    var f = {};
    var n = {};

    function e(v, x) {
        var w = f[v] = x(this);
        if (w.aliases) {
            w.aliases.forEach(function(y) {
                n[y] = v
            })
        }
    }

    function j(v) {
        return f[v] || f[n[v]]
    }
    this.highlight = c;
    this.highlightAuto = g;
    this.fixMarkup = h;
    this.highlightBlock = p;
    this.configure = s;
    this.initHighlighting = l;
    this.initHighlightingOnLoad = a;
    this.registerLanguage = e;
    this.getLanguage = j;
    this.inherit = o;
    this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
    this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
    this.NR = "\\b\\d+(\\.\\d+)?";
    this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    this.BNR = "\\b(0b[01]+)";
    this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    this.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    };
    this.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [this.BE]
    };
    this.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [this.BE]
    };
    this.CLCM = {
        cN: "comment",
        b: "//",
        e: "$"
    };
    this.CBLCLM = {
        cN: "comment",
        b: "/\\*",
        e: "\\*/"
    };
    this.HCM = {
        cN: "comment",
        b: "#",
        e: "$"
    };
    this.NM = {
        cN: "number",
        b: this.NR,
        r: 0
    };
    this.CNM = {
        cN: "number",
        b: this.CNR,
        r: 0
    };
    this.BNM = {
        cN: "number",
        b: this.BNR,
        r: 0
    };
    this.REGEXP_MODE = {
        cN: "regexp",
        b: /\//,
        e: /\/[gim]*/,
        i: /\n/,
        c: [this.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [this.BE]
        }]
    };
    this.TM = {
        cN: "title",
        b: this.IR,
        r: 0
    };
    this.UTM = {
        cN: "title",
        b: this.UIR,
        r: 0
    }
}();
hljs.registerLanguage("bash", function(b) {
    var a = {
        cN: "variable",
        v: [{
            b: /\$[\w\d#@][\w\d_]*/
        }, {
            b: /\$\{(.*?)\}/
        }]
    };
    var d = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [b.BE, a, {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [b.BE]
        }]
    };
    var c = {
        cN: "string",
        b: /'/,
        e: /'/
    };
    return {
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for break continue while in do done exit return set declare case esac export exec",
            literal: "true false",
            built_in: "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "shebang",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: true,
            c: [b.inherit(b.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, b.HCM, b.NM, d, c, a]
    }
});
hljs.registerLanguage("cs", function(b) {
    var a = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";
    return {
        k: a,
        c: [{
            cN: "comment",
            b: "///",
            e: "$",
            rB: true,
            c: [{
                cN: "xmlDocTag",
                b: "///|<!--|-->"
            }, {
                cN: "xmlDocTag",
                b: "</?",
                e: ">"
            }]
        }, b.CLCM, b.CBLCLM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {
            cN: "string",
            b: '@"',
            e: '"',
            c: [{
                b: '""'
            }]
        }, b.ASM, b.QSM, b.CNM, {
            bK: "protected public private internal",
            e: /[{;=]/,
            k: a,
            c: [{
                bK: "class namespace interface",
                starts: {
                    c: [b.TM]
                }
            }, {
                b: b.IR + "\\s*\\(",
                rB: true,
                c: [b.TM]
            }]
        }]
    }
});
hljs.registerLanguage("ruby", function(e) {
    var h = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
    var g = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor";
    var a = {
        cN: "yardoctag",
        b: "@[A-Za-z]+"
    };
    var i = {
        cN: "comment",
        v: [{
            b: "#",
            e: "$",
            c: [a]
        }, {
            b: "^\\=begin",
            e: "^\\=end",
            c: [a],
            r: 10
        }, {
            b: "^__END__",
            e: "\\n$"
        }]
    };
    var c = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        k: g
    };
    var d = {
        cN: "string",
        c: [e.BE, c],
        v: [{
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        }, {
            b: "%[qw]?\\(",
            e: "\\)"
        }, {
            b: "%[qw]?\\[",
            e: "\\]"
        }, {
            b: "%[qw]?{",
            e: "}"
        }, {
            b: "%[qw]?<",
            e: ">",
            r: 10
        }, {
            b: "%[qw]?/",
            e: "/",
            r: 10
        }, {
            b: "%[qw]?%",
            e: "%",
            r: 10
        }, {
            b: "%[qw]?-",
            e: "-",
            r: 10
        }, {
            b: "%[qw]?\\|",
            e: "\\|",
            r: 10
        }, {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
        }]
    };
    var b = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        k: g
    };
    var f = [d, i, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [e.inherit(e.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
        }), {
            cN: "inheritance",
            b: "<\\s*",
            c: [{
                cN: "parent",
                b: "(" + e.IR + "::)?" + e.IR
            }]
        }, i]
    }, {
        cN: "function",
        bK: "def",
        e: " |$|;",
        r: 0,
        c: [e.inherit(e.TM, {
            b: h
        }), b, i]
    }, {
        cN: "constant",
        b: "(::)?(\\b[A-Z]\\w*(::)?)+",
        r: 0
    }, {
        cN: "symbol",
        b: ":",
        c: [d, {
            b: h
        }],
        r: 0
    }, {
        cN: "symbol",
        b: e.UIR + "(\\!|\\?)?:",
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
        b: "(" + e.RSR + ")\\s*",
        c: [i, {
            cN: "regexp",
            c: [e.BE, c],
            i: /\n/,
            v: [{
                b: "/",
                e: "/[a-z]*"
            }, {
                b: "%r{",
                e: "}[a-z]*"
            }, {
                b: "%r\\(",
                e: "\\)[a-z]*"
            }, {
                b: "%r!",
                e: "![a-z]*"
            }, {
                b: "%r\\[",
                e: "\\][a-z]*"
            }]
        }],
        r: 0
    }];
    c.c = f;
    b.c = f;
    return {
        k: g,
        c: f
    }
});
hljs.registerLanguage("diff", function(a) {
    return {
        c: [{
            cN: "chunk",
            r: 10,
            v: [{
                b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/
            }, {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            }, {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            }]
        }, {
            cN: "header",
            v: [{
                b: /Index: /,
                e: /$/
            }, {
                b: /=====/,
                e: /=====$/
            }, {
                b: /^\-\-\-/,
                e: /$/
            }, {
                b: /^\*{3} /,
                e: /$/
            }, {
                b: /^\+\+\+/,
                e: /$/
            }, {
                b: /\*{5}/,
                e: /\*{5}$/
            }]
        }, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        }, {
            cN: "change",
            b: "^\\!",
            e: "$"
        }]
    }
});
hljs.registerLanguage("javascript", function(a) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"
        },
        c: [{
            cN: "pi",
            b: /^\s*('|")use strict('|")/,
            r: 10
        }, a.ASM, a.QSM, a.CLCM, a.CBLCLM, a.CNM, {
            b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [a.CLCM, a.CBLCLM, a.REGEXP_MODE, {
                b: /</,
                e: />;/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            c: [a.inherit(a.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [a.CLCM, a.CBLCLM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + a.IR,
            r: 0
        }]
    }
});
hljs.registerLanguage("xml", function(a) {
    var c = "[A-Za-z0-9\\._:-]+";
    var d = {
        b: /<\?(php)?(?!\w)/,
        e: /\?>/,
        sL: "php",
        subLanguageMode: "continuous"
    };
    var b = {
        eW: true,
        i: /</,
        r: 0,
        c: [d, {
            cN: "attribute",
            b: c,
            r: 0
        }, {
            b: "=",
            r: 0,
            c: [{
                cN: "value",
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s\/>]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html"],
        cI: true,
        c: [{
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, {
            cN: "comment",
            b: "<!--",
            e: "-->",
            r: 10
        }, {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [b],
            starts: {
                e: "</style>",
                rE: true,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [b],
            starts: {
                e: "<\/script>",
                rE: true,
                sL: "javascript"
            }
        }, {
            b: "<%",
            e: "%>",
            sL: "vbscript"
        }, d, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "title",
                b: "[^ /><]+",
                r: 0
            }, b]
        }]
    }
});
hljs.registerLanguage("markdown", function(a) {
    return {
        c: [{
            cN: "header",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "blockquote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "`.+?`"
            }, {
                b: "^( {4}|\t)",
                e: "$",
                r: 0
            }]
        }, {
            cN: "horizontal_rule",
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].+?[\\)\\]]",
            rB: true,
            c: [{
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: true,
                rE: true,
                r: 0
            }, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: true,
                eE: true
            }, {
                cN: "link_reference",
                b: "\\]\\[",
                e: "\\]",
                eB: true,
                eE: true,
            }],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            e: "$",
            rB: true,
            c: [{
                cN: "link_reference",
                b: "\\[",
                e: "\\]",
                eB: true,
                eE: true
            }, {
                cN: "link_url",
                b: "\\s",
                e: "$"
            }]
        }]
    }
});
hljs.registerLanguage("css", function(a) {
    var b = "[a-zA-Z-][a-zA-Z0-9_-]*";
    var c = {
        cN: "function",
        b: b + "\\(",
        e: "\\)",
        c: ["self", a.NM, a.ASM, a.QSM]
    };
    return {
        cI: true,
        i: "[=/|']",
        c: [a.CBLCLM, {
            cN: "id",
            b: "\\#[A-Za-z0-9_-]+"
        }, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "attr_selector",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "pseudo",
            b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: true,
                eE: true,
                r: 0,
                c: [c, a.ASM, a.QSM, a.NM]
            }]
        }, {
            cN: "tag",
            b: b,
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: "[^\\s]",
            r: 0,
            c: [a.CBLCLM, {
                cN: "rule",
                b: "[^\\s]",
                rB: true,
                e: ";",
                eW: true,
                c: [{
                    cN: "attribute",
                    b: "[A-Z\\_\\.\\-]+",
                    e: ":",
                    eE: true,
                    i: "[^\\s]",
                    starts: {
                        cN: "value",
                        eW: true,
                        eE: true,
                        c: [c, a.NM, a.QSM, a.ASM, a.CBLCLM, {
                            cN: "hexcolor",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            }]
        }]
    }
});
hljs.registerLanguage("http", function(a) {
    return {
        i: "\\S",
        c: [{
            cN: "status",
            b: "^HTTP/[0-9\\.]+",
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: true,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: true,
                eE: true
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: true,
            i: "\\n|\\s|=",
            starts: {
                cN: "string",
                e: "$"
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: "",
                eW: true
            }
        }]
    }
});
hljs.registerLanguage("java", function(b) {
    var a = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";
    return {
        k: a,
        i: /<\//,
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            c: [{
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            }],
            r: 10
        }, b.CLCM, b.CBLCLM, b.ASM, b.QSM, {
            bK: "protected public private",
            e: /[{;=]/,
            k: a,
            c: [{
                cN: "class",
                bK: "class interface",
                eW: true,
                i: /[:"<>]/,
                c: [{
                    bK: "extends implements",
                    r: 10
                }, b.UTM]
            }, {
                b: b.UIR + "\\s*\\(",
                rB: true,
                c: [b.UTM]
            }]
        }, b.CNM, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }]
    }
});
hljs.registerLanguage("php", function(b) {
    var e = {
        cN: "variable",
        b: "\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"
    };
    var a = {
        cN: "preprocessor",
        b: /<\?(php)?|\?>/
    };
    var c = {
        cN: "string",
        c: [b.BE, a],
        v: [{
            b: 'b"',
            e: '"'
        }, {
            b: "b'",
            e: "'"
        }, b.inherit(b.ASM, {
            i: null
        }), b.inherit(b.QSM, {
            i: null
        })]
    };
    var d = {
        v: [b.BNM, b.CNM]
    };
    return {
        cI: true,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [b.CLCM, b.HCM, {
            cN: "comment",
            b: "/\\*",
            e: "\\*/",
            c: [{
                cN: "phpdoc",
                b: "\\s@[A-Za-z]+"
            }, a]
        }, {
            cN: "comment",
            b: "__halt_compiler.+?;",
            eW: true,
            k: "__halt_compiler",
            l: b.UIR
        }, {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [b.BE]
        }, a, e, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            i: "\\$|\\[|%",
            c: [b.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", e, b.CBLCLM, c, d]
            }]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements",
                r: 10
            }, b.UTM]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [b.UTM]
        }, {
            bK: "use",
            e: ";",
            c: [b.UTM]
        }, {
            b: "=>"
        }, c, d]
    }
});
hljs.registerLanguage("python", function(a) {
    var f = {
        cN: "prompt",
        b: /^(>>>|\.\.\.) /
    };
    var b = {
        cN: "string",
        c: [a.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [f],
            r: 10
        }, {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [f],
            r: 10
        }, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        }, {
            b: /(b|br)'/,
            e: /'/,
        }, {
            b: /(b|br)"/,
            e: /"/,
        }, a.ASM, a.QSM]
    };
    var d = {
        cN: "number",
        r: 0,
        v: [{
            b: a.BNR + "[lLjJ]?"
        }, {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        }, {
            b: a.CNR + "[lLjJ]?"
        }]
    };
    var e = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: ["self", f, d, b]
    };
    var c = {
        e: /:/,
        i: /[${=;\n]/,
        c: [a.UTM, e]
    };
    return {
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [f, d, b, a.HCM, a.inherit(c, {
            cN: "function",
            bK: "def",
            r: 10
        }), a.inherit(c, {
            cN: "class",
            bK: "class"
        }), {
            cN: "decorator",
            b: /@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
});
hljs.registerLanguage("sql", function(a) {
    return {
        cI: true,
        i: /[<>]/,
        c: [{
            cN: "operator",
            b: "\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",
            e: ";",
            eW: true,
            k: {
                keyword: "all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",
                aggregate: "count sum min max avg"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [a.BE, {
                    b: "''"
                }]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [a.BE, {
                    b: '""'
                }]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [a.BE]
            }, a.CNM]
        }, a.CBLCLM, {
            cN: "comment",
            b: "--",
            e: "$"
        }]
    }
});
hljs.registerLanguage("ini", function(a) {
    return {
        cI: true,
        i: /\S/,
        c: [{
            cN: "comment",
            b: ";",
            e: "$"
        }, {
            cN: "title",
            b: "^\\[",
            e: "\\]"
        }, {
            cN: "setting",
            b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
            e: "$",
            c: [{
                cN: "value",
                eW: true,
                k: "on off true false yes no",
                c: [a.QSM, a.NM],
                r: 0
            }]
        }]
    }
});
hljs.registerLanguage("perl", function(c) {
    var d = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";
    var f = {
        cN: "subst",
        b: "[$@]\\{",
        e: "\\}",
        k: d
    };
    var g = {
        b: "->{",
        e: "}"
    };
    var a = {
        cN: "variable",
        v: [{
            b: /\$\d/
        }, {
            b: /[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/
        }, {
            b: /[\$\%\@\*][^\s\w{]/,
            r: 0
        }]
    };
    var e = {
        cN: "comment",
        b: "^(__END__|__DATA__)",
        e: "\\n$",
        r: 5
    };
    var h = [c.BE, f, a];
    var b = [a, c.HCM, e, {
        cN: "comment",
        b: "^\\=\\w",
        e: "\\=cut",
        eW: true
    }, g, {
        cN: "string",
        c: h,
        v: [{
            b: "q[qwxr]?\\s*\\(",
            e: "\\)",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\[",
            e: "\\]",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\|",
            e: "\\|",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\<",
            e: "\\>",
            r: 5
        }, {
            b: "qw\\s+q",
            e: "q",
            r: 5
        }, {
            b: "'",
            e: "'",
            c: [c.BE]
        }, {
            b: '"',
            e: '"'
        }, {
            b: "`",
            e: "`",
            c: [c.BE]
        }, {
            b: "{\\w+}",
            c: [],
            r: 0
        }, {
            b: "-?\\w+\\s*\\=\\>",
            c: [],
            r: 0
        }]
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\/\\/|" + c.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [c.HCM, e, {
            cN: "regexp",
            b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
            r: 10
        }, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [c.BE],
            r: 0
        }]
    }, {
        cN: "sub",
        bK: "sub",
        e: "(\\s*\\(.*?\\))?[;{]",
        r: 5
    }, {
        cN: "operator",
        b: "-\\w\\b",
        r: 0
    }];
    f.c = b;
    g.c = b;
    return {
        k: d,
        c: b
    }
});
hljs.registerLanguage("objectivec", function(a) {
    var d = {
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    };
    var c = /[a-zA-Z@][a-zA-Z0-9_]*/;
    var b = "@interface @class @protocol @implementation";
    return {
        k: d,
        l: c,
        i: "</",
        c: [a.CLCM, a.CBLCLM, a.CNM, a.QSM, {
            cN: "string",
            b: "'",
            e: "[^\\\\]'",
            i: "[^\\\\][^']"
        }, {
            cN: "preprocessor",
            b: "#import",
            e: "$",
            c: [{
                cN: "title",
                b: '"',
                e: '"'
            }, {
                cN: "title",
                b: "<",
                e: ">"
            }]
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$"
        }, {
            cN: "class",
            b: "(" + b.split(" ").join("|") + ")\\b",
            e: "({|$)",
            k: b,
            l: c,
            c: [a.UTM]
        }, {
            cN: "variable",
            b: "\\." + a.UIR,
            r: 0
        }]
    }
});
hljs.registerLanguage("coffeescript", function(c) {
    var b = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
        built_in: "npm require console print module exports global window document"
    };
    var a = "[A-Za-z$_][0-9A-Za-z$_]*";
    var f = c.inherit(c.TM, {
        b: a
    });
    var e = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: b
    };
    var d = [c.BNM, c.inherit(c.CNM, {
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }), {
        cN: "string",
        v: [{
            b: /'''/,
            e: /'''/,
            c: [c.BE]
        }, {
            b: /'/,
            e: /'/,
            c: [c.BE]
        }, {
            b: /"""/,
            e: /"""/,
            c: [c.BE, e]
        }, {
            b: /"/,
            e: /"/,
            c: [c.BE, e]
        }]
    }, {
        cN: "regexp",
        v: [{
            b: "///",
            e: "///",
            c: [e, c.HCM]
        }, {
            b: "//[gim]*",
            r: 0
        }, {
            b: "/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"
        }]
    }, {
        cN: "property",
        b: "@" + a
    }, {
        b: "`",
        e: "`",
        eB: true,
        eE: true,
        sL: "javascript"
    }];
    e.c = d;
    return {
        k: b,
        c: d.concat([{
            cN: "comment",
            b: "###",
            e: "###"
        }, c.HCM, {
            cN: "function",
            b: "(" + a + "\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",
            e: "[-=]>",
            rB: true,
            c: [f, {
                cN: "params",
                b: "\\(",
                rB: true,
                c: [{
                    b: /\(/,
                    e: /\)/,
                    k: b,
                    c: ["self"].concat(d)
                }]
            }]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{
                bK: "extends",
                eW: true,
                i: /[:="\[\]]/,
                c: [f]
            }, f]
        }, {
            cN: "attribute",
            b: a + ":",
            e: ":",
            rB: true,
            eE: true,
            r: 0
        }])
    }
});
hljs.registerLanguage("nginx", function(c) {
    var b = {
        cN: "variable",
        v: [{
            b: /\$\d+/
        }, {
            b: /\$\{/,
            e: /}/
        }, {
            b: "[\\$\\@]" + c.UIR
        }]
    };
    var a = {
        eW: true,
        l: "[a-z/_]+",
        k: {
            built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        r: 0,
        i: "=>",
        c: [c.HCM, {
            cN: "string",
            c: [c.BE, b],
            v: [{
                b: /"/,
                e: /"/
            }, {
                b: /'/,
                e: /'/
            }]
        }, {
            cN: "url",
            b: "([a-z]+):/",
            e: "\\s",
            eW: true,
            eE: true
        }, {
            cN: "regexp",
            c: [c.BE, b],
            v: [{
                b: "\\s\\^",
                e: "\\s|{|;",
                rE: true
            }, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: true
            }, {
                b: "\\*(\\.[a-z\\-]+)+"
            }, {
                b: "([a-z\\-]+\\.)+\\*"
            }]
        }, {
            cN: "number",
            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        }, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, b]
    };
    return {
        c: [c.HCM, {
            b: c.UIR + "\\s",
            e: ";|{",
            rB: true,
            c: [c.inherit(c.UTM, {
                starts: a
            })],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
});
hljs.registerLanguage("json", function(a) {
    var e = {
        literal: "true false null"
    };
    var d = [a.QSM, a.CNM];
    var c = {
        cN: "value",
        e: ",",
        eW: true,
        eE: true,
        c: d,
        k: e
    };
    var b = {
        b: "{",
        e: "}",
        c: [{
            cN: "attribute",
            b: '\\s*"',
            e: '"\\s*:\\s*',
            eB: true,
            eE: true,
            c: [a.BE],
            i: "\\n",
            starts: c
        }],
        i: "\\S"
    };
    var f = {
        b: "\\[",
        e: "\\]",
        c: [a.inherit(c, {
            cN: null
        })],
        i: "\\S"
    };
    d.splice(d.length, 0, b, f);
    return {
        c: d,
        k: e,
        i: "\\S"
    }
});
hljs.registerLanguage("apache", function(a) {
    var b = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        cI: true,
        c: [a.HCM, {
            cN: "tag",
            b: "</?",
            e: ">"
        }, {
            cN: "keyword",
            b: /\w+/,
            r: 0,
            k: {
                common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [{
                    cN: "sqbracket",
                    b: "\\s\\[",
                    e: "\\]$"
                }, {
                    cN: "cbracket",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", b]
                }, b, a.QSM]
            }
        }],
        i: /\S/
    }
});
hljs.registerLanguage("cpp", function(a) {
    var b = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: ["c"],
        k: b,
        i: "</",
        c: [a.CLCM, a.CBLCLM, a.QSM, {
            cN: "string",
            b: "'\\\\?.",
            e: "'",
            i: "."
        }, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, a.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            c: [{
                b: "include\\s*<",
                e: ">",
                i: "\\n"
            }, a.CLCM]
        }, {
            cN: "stl_container",
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: b,
            r: 10,
            c: ["self"]
        }]
    }
});
hljs.registerLanguage("makefile", function(a) {
    var b = {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [a.BE]
    };
    return {
        c: [a.HCM, {
            b: /^\w+\s*\W*=/,
            rB: true,
            r: 0,
            starts: {
                cN: "constant",
                e: /\s*\W*=/,
                eE: true,
                starts: {
                    e: /$/,
                    r: 0,
                    c: [b],
                }
            }
        }, {
            cN: "title",
            b: /^[\w]+:\s*$/
        }, {
            cN: "phony",
            b: /^\.PHONY:/,
            e: /$/,
            k: ".PHONY",
            l: /[\.\w]+/
        }, {
            b: /^\t+/,
            e: /$/,
            c: [a.QSM, b]
        }]
    }
});

//	FANCYBOX MODAL
$(function() {
    $('.post-body div img, .post .post-content img, #preview img')
        .filter('[width],[height],[style*="width"],[style*="height"]')
        .each(function() {
            $(this).not('a>img').not('img[src*="/smiles/"]').wrap('<a href="' + $(this).attr('src') + '" class="fa_fancybox"></a>')
        });
    $(".fa_fancybox").fancybox()
});
(function(s, l, d, t) {
  var m = d(s)
    , q = d(l)
    , a = d.fancybox = function() {
    a.open.apply(this, arguments)
  }
    , u = !1
    , k = l.createTouch !== t
    , o = function(a) {
    return "string" === d.type(a)
  }
    , n = function(b, c) {
    c && o(b) && 0 < b.indexOf("%") && (b = a.getViewport()[c] / 100 * parseInt(b, 10));
    return Math.round(b) + "px"
  };
  d.extend(a, {
    version: "2.0.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      autoSize: !0,
      autoResize: !k,
      autoCenter: !k,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      fixed: !1,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3E3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      keys: {
        next: [13, 32, 34, 39, 40],
        prev: [8, 33, 37, 38],
        close: [27]
      },
      tpl: {
        wrap: '<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' + (d.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
        swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
        next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
      },
      openEffect: "fade",
      openSpeed: 300,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 300,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 300,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 300,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: {
          speedIn: 0,
          speedOut: 300,
          opacity: 0.8,
          css: {
            cursor: "pointer"
          },
          closeClick: !0
        },
        title: {
          type: "float"
        }
      }
    },
    group: {},
    opts: {},
    coming: null,
    current: null,
    isOpen: !1,
    isOpened: !1,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function(b, c) {
      a.close(!0);
      b && !d.isArray(b) && (b = b instanceof d ? d(b).get() : [b]);
      a.isActive = !0;
      a.opts = d.extend(!0, {}, a.defaults, c);
      d.isPlainObject(c) && c.keys !== t && (a.opts.keys = c.keys ? d.extend({}, a.defaults.keys, c.keys) : !1);
      a.group = b;
      a._start(a.opts.index || 0)
    },
    cancel: function() {
      a.coming && !1 === a.trigger("onCancel") || (a.coming = null,
      a.hideLoading(),
      a.ajaxLoad && a.ajaxLoad.abort(),
      a.ajaxLoad = null,
      a.imgPreload && (a.imgPreload.onload = a.imgPreload.onabort = a.imgPreload.onerror = null))
    },
    close: function(b) {
      a.cancel();
      a.current && !1 !== a.trigger("beforeClose") && (a.unbindEvents(),
      !a.isOpen || b && !0 === b[0] ? (d(".fancybox-wrap").stop().trigger("onReset").remove(),
      a._afterZoomOut()) : (a.isOpen = a.isOpened = !1,
      d(".fancybox-item, .fancybox-nav").remove(),
      a.wrap.stop(!0).removeClass("fancybox-opened"),
      a.inner.css("overflow", "hidden"),
      a.transitions[a.current.closeMethod]()))
    },
    play: function(b) {
      var c = function() {
        clearTimeout(a.player.timer)
      }
        , e = function() {
        c();
        a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
      }
        , f = function() {
        c();
        d("body").unbind(".player");
        a.player.isActive = !1;
        a.trigger("onPlayEnd")
      };
      if (a.player.isActive || b && !1 === b[0])
        f();
      else if (a.current && (a.current.loop || a.current.index < a.group.length - 1))
        a.player.isActive = !0,
        d("body").bind({
          "afterShow.player onUpdate.player": e,
          "onCancel.player beforeClose.player": f,
          "beforeLoad.player": c
        }),
        e(),
        a.trigger("onPlayStart")
    },
    next: function() {
      a.current && a.jumpto(a.current.index + 1)
    },
    prev: function() {
      a.current && a.jumpto(a.current.index - 1)
    },
    jumpto: function(b) {
      a.current && (b = parseInt(b, 10),
      1 < a.group.length && a.current.loop && (b >= a.group.length ? b = 0 : 0 > b && (b = a.group.length - 1)),
      a.group[b] !== t && (a.cancel(),
      a._start(b)))
    },
    reposition: function(b, c) {
      var e;
      a.isOpen && (e = a._getPosition(c),
      b && "scroll" === b.type ? (delete e.position,
      a.wrap.stop(!0, !0).animate(e, 200)) : a.wrap.css(e))
    },
    update: function(b) {
      a.isOpen && (u || setTimeout(function() {
        var c = a.current
          , e = !b || b && "orientationchange" === b.type;
        if (u && (u = !1,
        c)) {
          if (!b || "scroll" !== b.type || e)
            c.autoSize && "iframe" !== c.type && (a.inner.height("auto"),
            c.height = a.inner.height()),
            (c.autoResize || e) && a._setDimension(),
            c.canGrow && "iframe" !== c.type && a.inner.height("auto");
          (c.autoCenter || e) && a.reposition(b);
          a.trigger("onUpdate")
        }
      }, 200),
      u = !0)
    },
    toggle: function() {
      a.isOpen && (a.current.fitToView = !a.current.fitToView,
      a.update())
    },
    hideLoading: function() {
      q.unbind("keypress.fb");
      d("#fancybox-loading").remove()
    },
    showLoading: function() {
      a.hideLoading();
      q.bind("keypress.fb", function(b) {
        27 === b.keyCode && (b.preventDefault(),
        a.cancel())
      });
      d('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body")
    },
    getViewport: function() {
      return {
        x: m.scrollLeft(),
        y: m.scrollTop(),
        w: k && s.innerWidth ? s.innerWidth : m.width(),
        h: k && s.innerHeight ? s.innerHeight : m.height()
      }
    },
    unbindEvents: function() {
      a.wrap && a.wrap.unbind(".fb");
      q.unbind(".fb");
      m.unbind(".fb")
    },
    bindEvents: function() {
      var b = a.current
        , c = b.keys;
      b && (m.bind("resize.fb orientationchange.fb" + (b.autoCenter && !b.fixed ? " scroll.fb" : ""), a.update),
      c && q.bind("keydown.fb", function(b) {
        var f;
        f = b.target || b.srcElement;
        if (!b.ctrlKey && !b.altKey && !b.shiftKey && !b.metaKey && (!f || !f.type && !d(f).is("[contenteditable]")))
          f = b.keyCode,
          -1 < d.inArray(f, c.close) ? (a.close(),
          b.preventDefault()) : -1 < d.inArray(f, c.next) ? (a.next(),
          b.preventDefault()) : -1 < d.inArray(f, c.prev) && (a.prev(),
          b.preventDefault())
      }),
      d.fn.mousewheel && b.mouseWheel && 1 < a.group.length && a.wrap.bind("mousewheel.fb", function(b, c) {
        var d = b.target || null;
        if (0 !== c && (!d || 0 === d.clientHeight || d.scrollHeight === d.clientHeight && d.scrollWidth === d.clientWidth))
          b.preventDefault(),
          a[0 < c ? "prev" : "next"]()
      }))
    },
    trigger: function(b, c) {
      var e, f = c || a[-1 < d.inArray(b, ["onCancel", "beforeLoad", "afterLoad"]) ? "coming" : "current"];
      if (f) {
        d.isFunction(f[b]) && (e = f[b].apply(f, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e)
          return !1;
        f.helpers && d.each(f.helpers, function(c, e) {
          if (e && d.isPlainObject(a.helpers[c]) && d.isFunction(a.helpers[c][b]))
            a.helpers[c][b](e, f)
        });
        d.event.trigger(b + ".fb")
      }
    },
    isImage: function(a) {
      return o(a) && a.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i)
    },
    isSWF: function(a) {
      return o(a) && a.match(/\.(swf)((\?|#).*)?$/i)
    },
    _start: function(b) {
      var c = {}, e = a.group[b] || null, f, g, i;
      if (e && (e.nodeType || e instanceof d))
        f = !0,
        d.metadata && (c = d(e).metadata());
      c = d.extend(!0, {}, a.opts, {
        index: b,
        element: e
      }, d.isPlainObject(e) ? e : c);
      d.each(["href", "title", "content", "type"], function(b, g) {
        c[g] = a.opts[g] || f && d(e).attr(g) || c[g] || null
      });
      "number" === typeof c.margin && (c.margin = [c.margin, c.margin, c.margin, c.margin]);
      c.modal && d.extend(!0, c, {
        closeBtn: !1,
        closeClick: !1,
        nextClick: !1,
        arrows: !1,
        mouseWheel: !1,
        keys: null,
        helpers: {
          overlay: {
            css: {
              cursor: "auto"
            },
            closeClick: !1
          }
        }
      });
      a.coming = c;
      if (!1 === a.trigger("beforeLoad"))
        a.coming = null;
      else {
        g = c.type;
        b = c.href || e;
        g || (f && (g = d(e).data("fancybox-type"),
        g || (g = (g = e.className.match(/fancybox\.(\w+)/)) ? g[1] : null)),
        !g && o(b) && (a.isImage(b) ? g = "image" : a.isSWF(b) ? g = "swf" : b.match(/^#/) && (g = "inline")),
        g || (g = f ? "inline" : "html"),
        c.type = g);
        if ("inline" === g || "html" === g) {
          if (c.content || (c.content = "inline" === g ? d(o(b) ? b.replace(/.*(?=#[^\s]+$)/, "") : b) : e),
          !c.content || !c.content.length)
            g = null
        } else
          b || (g = null);
        "ajax" === g && o(b) && (i = b.split(/\s+/, 2),
        b = i.shift(),
        c.selector = i.shift());
        c.href = b;
        c.group = a.group;
        c.isDom = f;
        switch (g) {
        case "image":
          a._loadImage();
          break;
        case "ajax":
          a._loadAjax();
          break;
        case "inline":
        case "iframe":
        case "swf":
        case "html":
          a._afterLoad();
          break;
        default:
          a._error("type")
        }
      }
    },
    _error: function(b) {
      a.hideLoading();
      d.extend(a.coming, {
        type: "html",
        autoSize: !0,
        minWidth: 0,
        minHeight: 0,
        padding: 15,
        hasError: b,
        content: a.coming.tpl.error
      });
      a._afterLoad()
    },
    _loadImage: function() {
      var b = a.imgPreload = new Image;
      b.onload = function() {
        this.onload = this.onerror = null;
        a.coming.width = this.width;
        a.coming.height = this.height;
        a._afterLoad()
      }
      ;
      b.onerror = function() {
        this.onload = this.onerror = null;
        a._error("image")
      }
      ;
      b.src = a.coming.href;
      (b.complete === t || !b.complete) && a.showLoading()
    },
    _loadAjax: function() {
      a.showLoading();
      a.ajaxLoad = d.ajax(d.extend({}, a.coming.ajax, {
        url: a.coming.href,
        error: function(b, c) {
          a.coming && "abort" !== c ? a._error("ajax", b) : a.hideLoading()
        },
        success: function(b, c) {
          "success" === c && (a.coming.content = b,
          a._afterLoad())
        }
      }))
    },
    _preloadImages: function() {
      var b = a.group, c = a.current, e = b.length, f, g, i, h = Math.min(c.preload, e - 1);
      if (c.preload && !(2 > b.length))
        for (i = 1; i <= h; i += 1)
          if (f = b[(c.index + i) % e],
          g = f.href || d(f).attr("href") || f,
          "image" === f.type || a.isImage(g))
            (new Image).src = g
    },
    _afterLoad: function() {
      a.hideLoading();
      !a.coming || !1 === a.trigger("afterLoad", a.current) ? a.coming = !1 : (a.isOpened ? (d(".fancybox-item, .fancybox-nav").remove(),
      a.wrap.stop(!0).removeClass("fancybox-opened"),
      a.inner.css("overflow", "hidden"),
      a.transitions[a.current.prevMethod]()) : (d(".fancybox-wrap").stop().trigger("onReset").remove(),
      a.trigger("afterClose")),
      a.unbindEvents(),
      a.isOpen = !1,
      a.current = a.coming,
      a.wrap = d(a.current.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + a.current.type + " fancybox-tmp " + a.current.wrapCSS).appendTo("body"),
      a.skin = d(".fancybox-skin", a.wrap).css("padding", n(a.current.padding)),
      a.outer = d(".fancybox-outer", a.wrap),
      a.inner = d(".fancybox-inner", a.wrap),
      a._setContent())
    },
    _setContent: function() {
      var b = a.current
        , c = b.content
        , e = b.type
        , f = b.minWidth
        , g = b.minHeight
        , i = b.maxWidth
        , h = b.maxHeight;
      switch (e) {
      case "inline":
      case "ajax":
      case "html":
        b.selector ? c = d("<div>").html(c).find(b.selector) : c instanceof d && (c.parent().hasClass("fancybox-inner") && c.parents(".fancybox-wrap").unbind("onReset"),
        c = c.show().detach(),
        d(a.wrap).bind("onReset", function() {
          c.appendTo("body").hide()
        }));
        b.autoSize && (f = d('<div class="fancybox-wrap ' + a.current.wrapCSS + ' fancybox-tmp"></div>').appendTo("body").css({
          minWidth: n(f, "w"),
          minHeight: n(g, "h"),
          maxWidth: n(i, "w"),
          maxHeight: n(h, "h")
        }).append(c),
        b.width = f.width(),
        b.height = f.height(),
        f.width(a.current.width),
        f.height() > b.height && (f.width(b.width + 1),
        b.width = f.width(),
        b.height = f.height()),
        c = f.contents().detach(),
        f.remove());
        break;
      case "image":
        c = b.tpl.image.replace("{href}", b.href);
        b.aspectRatio = !0;
        break;
      case "swf":
        c = b.tpl.swf.replace(/\{width\}/g, b.width).replace(/\{height\}/g, b.height).replace(/\{href\}/g, b.href);
        break;
      case "iframe":
        c = d(b.tpl.iframe.replace("{rnd}", (new Date).getTime())).attr("scrolling", b.scrolling).attr("src", b.href),
        b.scrolling = k ? "scroll" : "auto"
      }
      if ("image" === e || "swf" === e)
        b.autoSize = !1,
        b.scrolling = "visible";
      "iframe" === e && b.autoSize ? (a.showLoading(),
      a._setDimension(),
      a.inner.css("overflow", b.scrolling),
      c.bind({
        onCancel: function() {
          d(this).unbind();
          a._afterZoomOut()
        },
        load: function() {
          a.hideLoading();
          try {
            this.contentWindow.document.location && (a.current.height = d(this).contents().find("body").height())
          } catch (b) {
            a.current.autoSize = !1
          }
          a[a.isOpen ? "_afterZoomIn" : "_beforeShow"]()
        }
      }).appendTo(a.inner)) : (a.inner.append(c),
      a._beforeShow())
    },
    _beforeShow: function() {
      a.coming = null;
      a.trigger("beforeShow");
      a._setDimension();
      a.wrap.hide().removeClass("fancybox-tmp");
      a.bindEvents();
      a._preloadImages();
      a.transitions[a.isOpened ? a.current.nextMethod : a.current.openMethod]()
    },
    _setDimension: function() {
      var b = a.wrap, c = a.inner, e = a.current, f = a.getViewport(), g = e.margin, i = 2 * e.padding, h = e.width, j = e.height, r = e.maxWidth + i, k = e.maxHeight + i, l = e.minWidth + i, m = e.minHeight + i, p;
      f.w -= g[1] + g[3];
      f.h -= g[0] + g[2];
      o(h) && 0 < h.indexOf("%") && (h = (f.w - i) * parseFloat(h) / 100);
      o(j) && 0 < j.indexOf("%") && (j = (f.h - i) * parseFloat(j) / 100);
      g = h / j;
      h += i;
      j += i;
      e.fitToView && (r = Math.min(f.w, r),
      k = Math.min(f.h, k));
      if (e.aspectRatio) {
        if (h > r && (h = r,
        j = (h - i) / g + i),
        j > k && (j = k,
        h = (j - i) * g + i),
        h < l && (h = l,
        j = (h - i) / g + i),
        j < m)
          j = m,
          h = (j - i) * g + i
      } else
        h = Math.max(l, Math.min(h, r)),
        j = Math.max(m, Math.min(j, k));
      h = Math.round(h);
      j = Math.round(j);
      d(b.add(c)).width("auto").height("auto");
      c.width(h - i).height(j - i);
      b.width(h);
      p = b.height();
      if (h > r || p > k)
        for (; (h > r || p > k) && h > l && p > m; )
          j -= 10,
          e.aspectRatio ? (h = Math.round((j - i) * g + i),
          h < l && (h = l,
          j = (h - i) / g + i)) : h -= 10,
          c.width(h - i).height(j - i),
          b.width(h),
          p = b.height();
      e.dim = {
        width: n(h),
        height: n(p)
      };
      e.canGrow = e.autoSize && j > m && j < k;
      e.canShrink = !1;
      e.canExpand = !1;
      if (h - i < e.width || j - i < e.height)
        e.canExpand = !0;
      else if ((h > f.w || p > f.h) && h > l && j > m)
        e.canShrink = !0;
      a.innerSpace = p - i - c.height()
    },
    _getPosition: function(b) {
      var c = a.current
        , e = a.getViewport()
        , f = c.margin
        , d = a.wrap.width() + f[1] + f[3]
        , i = a.wrap.height() + f[0] + f[2]
        , h = {
        position: "absolute",
        top: f[0] + e.y,
        left: f[3] + e.x
      };
      c.autoCenter && c.fixed && !b && i <= e.h && d <= e.w && (h = {
        position: "fixed",
        top: f[0],
        left: f[3]
      });
      h.top = n(Math.max(h.top, h.top + (e.h - i) * c.topRatio));
      h.left = n(Math.max(h.left, h.left + 0.5 * (e.w - d)));
      return h
    },
    _afterZoomIn: function() {
      var b = a.current
        , c = b ? b.scrolling : "no";
      if (b && (a.isOpen = a.isOpened = !0,
      a.wrap.addClass("fancybox-opened"),
      a.inner.css("overflow", "yes" === c ? "scroll" : "no" === c ? "hidden" : c),
      a.trigger("afterShow"),
      a.update(),
      (b.closeClick || b.nextClick) && a.inner.css("cursor", "pointer").bind("click.fb", function(c) {
        if (!d(c.target).is("a") && !d(c.target).parent().is("a"))
          a[b.closeClick ? "close" : "next"]()
      }),
      b.closeBtn && d(b.tpl.closeBtn).appendTo(a.skin).bind("click.fb", a.close),
      b.arrows && 1 < a.group.length && ((b.loop || 0 < b.index) && d(b.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev),
      (b.loop || b.index < a.group.length - 1) && d(b.tpl.next).appendTo(a.outer).bind("click.fb", a.next)),
      a.opts.autoPlay && !a.player.isActive))
        a.opts.autoPlay = !1,
        a.play()
    },
    _afterZoomOut: function() {
      var b = a.current;
      a.wrap.trigger("onReset").remove();
      d.extend(a, {
        group: {},
        opts: {},
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });
      a.trigger("afterClose", b)
    }
  });
  a.transitions = {
    getOrigPosition: function() {
      var b = a.current
        , c = b.element
        , e = b.padding
        , f = d(b.orig)
        , g = {}
        , i = 50
        , h = 50;
      !f.length && b.isDom && d(c).is(":visible") && (f = d(c).find("img:first"),
      f.length || (f = d(c)));
      f.length ? (g = f.offset(),
      f.is("img") && (i = f.outerWidth(),
      h = f.outerHeight())) : (b = a.getViewport(),
      g.top = b.y + 0.5 * (b.h - h),
      g.left = b.x + 0.5 * (b.w - i));
      return g = {
        top: n(g.top - e),
        left: n(g.left - e),
        width: n(i + 2 * e),
        height: n(h + 2 * e)
      }
    },
    step: function(b, c) {
      var e = c.prop, d, g;
      if ("width" === e || "height" === e)
        d = Math.ceil(b - 2 * a.current.padding),
        "height" === e && (g = (b - c.start) / (c.end - c.start),
        c.start > c.end && (g = 1 - g),
        d -= a.innerSpace * g),
        a.inner[e](d)
    },
    zoomIn: function() {
      var b = a.wrap
        , c = a.current
        , e = c.openEffect
        , f = "elastic" === e
        , g = d.extend({}, c.dim, a._getPosition(f))
        , i = d.extend({
        opacity: 1
      }, g);
      delete i.position;
      f ? (g = this.getOrigPosition(),
      c.openOpacity && (g.opacity = 0),
      a.outer.add(a.inner).width("auto").height("auto")) : "fade" === e && (g.opacity = 0);
      b.css(g).show().animate(i, {
        duration: "none" === e ? 0 : c.openSpeed,
        easing: c.openEasing,
        step: f ? this.step : null,
        complete: a._afterZoomIn
      })
    },
    zoomOut: function() {
      var b = a.wrap
        , c = a.current
        , d = c.openEffect
        , f = "elastic" === d
        , g = {
        opacity: 0
      };
      f && ("fixed" === b.css("position") && b.css(a._getPosition(!0)),
      g = this.getOrigPosition(),
      c.closeOpacity && (g.opacity = 0));
      b.animate(g, {
        duration: "none" === d ? 0 : c.closeSpeed,
        easing: c.closeEasing,
        step: f ? this.step : null,
        complete: a._afterZoomOut
      })
    },
    changeIn: function() {
      var b = a.wrap
        , c = a.current
        , d = c.nextEffect
        , f = "elastic" === d
        , g = a._getPosition(f)
        , i = {
        opacity: 1
      };
      g.opacity = 0;
      f && (g.top = n(parseInt(g.top, 10) - 200),
      i.top = "+=200px");
      b.css(g).show().animate(i, {
        duration: "none" === d ? 0 : c.nextSpeed,
        easing: c.nextEasing,
        complete: a._afterZoomIn
      })
    },
    changeOut: function() {
      var b = a.wrap
        , c = a.current
        , e = c.prevEffect
        , f = {
        opacity: 0
      };
      b.removeClass("fancybox-opened");
      "elastic" === e && (f.top = "+=200px");
      b.animate(f, {
        duration: "none" === e ? 0 : c.prevSpeed,
        easing: c.prevEasing,
        complete: function() {
          d(this).trigger("onReset").remove()
        }
      })
    }
  };
  a.helpers.overlay = {
    overlay: null,
    update: function() {
      var a, c;
      this.overlay.width("100%").height("100%");
      d.browser.msie || k ? (a = Math.max(l.documentElement.scrollWidth, l.body.scrollWidth),
      c = Math.max(l.documentElement.offsetWidth, l.body.offsetWidth),
      a = a < c ? m.width() : a) : a = q.width();
      this.overlay.width(a).height(q.height())
    },
    beforeShow: function(b) {
      this.overlay || (b = d.extend(!0, {}, a.defaults.helpers.overlay, b),
      this.overlay = d('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"),
      b.closeClick && this.overlay.bind("click.fb", a.close),
      a.current.fixed && !k ? this.overlay.addClass("overlay-fixed") : (this.update(),
      this.onUpdate = function() {
        this.update()
      }
      ),
      this.overlay.fadeTo(b.speedIn, b.opacity))
    },
    afterClose: function(a) {
      this.overlay && this.overlay.fadeOut(a.speedOut || 0, function() {
        d(this).remove()
      });
      this.overlay = null
    }
  };
  a.helpers.title = {
    beforeShow: function(b) {
      var c;
      if (c = a.current.title)
        c = d('<div class="fancybox-title fancybox-title-' + b.type + '-wrap">' + c + "</div>").appendTo("body"),
        "float" === b.type && (c.width(c.width()),
        c.wrapInner('<span class="child"></span>'),
        a.current.margin[2] += Math.abs(parseInt(c.css("margin-bottom"), 10))),
        c.appendTo("over" === b.type ? a.inner : "outside" === b.type ? a.wrap : a.skin)
    }
  };
  d.fn.fancybox = function(b) {
    var c = d(this), e = this.selector || "", f, g = function(g) {
      var h = this, j = f, k;
      !g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !d(h).is(".fancybox-wrap") && (g.preventDefault(),
      g = b.groupAttr || "data-fancybox-group",
      k = d(h).attr(g),
      k || (g = "rel",
      k = h[g]),
      k && "" !== k && "nofollow" !== k && (h = e.length ? d(e) : c,
      h = h.filter("[" + g + '="' + k + '"]'),
      j = h.index(this)),
      b.index = j,
      a.open(h, b))
    }, b = b || {};
    f = b.index || 0;
    e ? q.undelegate(e, "click.fb-start").delegate(e, "click.fb-start", g) : c.unbind("click.fb-start").bind("click.fb-start", g);
    return this
  }
  ;
  d(l).ready(function() {
    a.defaults.fixed = d.support.fixedPosition || !(d.browser.msie && 6 >= d.browser.version) && !k
  })
}
)(window, document, jQuery);