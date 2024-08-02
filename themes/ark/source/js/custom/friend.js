/*! For license information please see friend.min.js.LICENSE.txt */ ! function() {
  var t = {
      926: function(t) {
        function e(t, e, r, n, i, o, a) {
          try {
            var c = t[o](a),
              s = c.value
          } catch (l) {
            return void r(l)
          }
          c.done ? e(s) : Promise.resolve(s).then(n, i)
        }
        t.exports = function(t) {
          return function() {
            var r = this,
              n = arguments;
            return new Promise((function(i, o) {
              var a = t.apply(r, n);

              function c(t) {
                e(a, i, o, c, s, "next", t)
              }

              function s(t) {
                e(a, i, o, c, s, "throw", t)
              }
              c(undefined)
            }))
          }
        }
      },
      575: function(t) {
        t.exports = function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
      },
      913: function(t) {
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        t.exports = function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      },
      655: function(t) {
        t.exports = function(t, e) {
          return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
            raw: {
              value: Object.freeze(e)
            }
          }))
        }
      },
      757: function(t, e, r) {
        t.exports = r(666)
      },
      540: function(t, e, r) {
        "use strict";
        var n = r(645),
          i = r.n(n)()((function(t) {
            return t[1]
          }));
        i.push([t.id, ".loader{width:150px;height:150px;margin:0 auto}svg{width:90%;fill:none}.load{transform-origin:50% 50%;stroke-dasharray:570;stroke-width:20px}.load.one{stroke:#554d73}.load.one,.load.two{animation:load 1.5s infinite}.load.two{stroke:#a496a4;animation-delay:.1s}.load.three{stroke:#a5a7bb;animation:load 1.5s infinite;animation-delay:.2s}.point{animation:bounce 1s ease-in-out infinite}.point.one{fill:#a5a7bb;animation-delay:0s}.point.two{fill:#a496a4;animation-delay:.1s}.point.three{fill:#554d73;animation-delay:.2s}@keyframes bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes load{0%{stroke-dashoffset:570}50%{stroke-dashoffset:530}to{stroke-dashoffset:570;transform:rotate(1turn)}}@keyframes link_custom{0%{box-shadow:0 0 5px grey,inset 0 0 5px grey,0 1px 0 grey;box-shadow:0 0 5px grey,inset 0 0 5px grey,0 1px 0 grey;box-shadow:0 0 5px var(--primary-color,grey),inset 0 0 5px var(--primary-color,grey),0 1px 0 var(--primary-color,grey)}to{box-shadow:0 0 20px grey,inset 0 0 10px grey,0 1px 0 grey;box-shadow:0 0 20px grey,inset 0 0 10px grey,0 1px 0 grey;box-shadow:0 0 20px var(--primary-color,grey),inset 0 0 10px var(--primary-color,grey),0 1px 0 var(--primary-color,grey)}}@keyframes link_custom1{0%{box-shadow:0 0 4px #ca00ff}25%{box-shadow:0 0 16px #00b5e5}50%{box-shadow:0 0 4px #00f}75%{box-shadow:0 0 16px #b1da21}to{box-shadow:0 0 4px red}}@keyframes borderFlash{0%{border-color:transparent}to{border-color:grey;border-color:grey;border-color:var(--primary-color,grey)}}@keyframes auto_rotate_left{0%{transform:rotate(0)}to{transform:rotate(-1turn)}}@keyframes auto_rotate_right{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.flink#article-container .flink-list>.flink-list-item a:hover{color:#fff}.flink#article-container .flink-list>.flink-list-item a:hover img{transition:.6s;transform:translateX(-75px);opacity:0}.flink#article-container .flink-list>.flink-list-item a:hover span{transition:.6s;transform:translateX(-75px)}.flink#article-container .flink-list>.flink-list-item a .lauto{animation:auto_rotate_left var(--autotime) linear infinite}.flink#article-container .flink-list>.flink-list-item a .rauto{animation:auto_rotate_right var(--autotime) linear infinite}.flink#article-container .flink-list>.flink-list-item a span{transition:.3s}.flink#article-container .flink-list>.flink-list-item:before{background:#49b1f5;background:#49b1f5;background:var(--primary-color,#49b1f5)}.flink#article-container .flink-list>.flink-list-item:hover img{transform:rotate(var(--primary-rotate))}.flink#article-container .flink-list>.flink-list-item .customcolor{color:#1f2d3d;color:#1f2d3d;color:var(--namecolor,#1f2d3d)}.flink#article-container .flink-list>.flink-list-item .customcolor:hover{color:#fff}.flink .flink-list>.flink-list-item{border:0 solid #49b1f5;border:0 solid #49b1f5;border:0 solid var(--primary-color,#49b1f5)}.flink .flink-list>.flink-list-item a{color:#49b1f5;color:#49b1f5;color:var(--primary-color,#49b1f5);text-decoration:none}.flink .flink-list>.flink-list-item:hover{box-shadow:0 2px 20px #49b1f5;box-shadow:0 2px 20px #49b1f5;box-shadow:0 2px 20px var(--primary-color,#49b1f5);animation-play-state:paused}@keyframes coverIn{0%{opacity:.6}to{opacity:1}}#article-container img{margin:0}.flink-list-card{overflow:auto}.flink-list-card>a{width:calc(25% - 15px);height:130px;position:relative;display:block;margin:15px 7px;float:left;overflow:hidden;border-radius:3px;transition:all .3s ease 0s,transform .6s cubic-bezier(.6,.2,.1,1) 0s;box-shadow:0 14px 38px rgba(0,0,0,.08),0 3px 8px rgba(0,0,0,.06)}.flink-list-card>a:hover .info{transform:translateY(-100%)}.flink-list-card>a:hover .wrapper img{transform:scale(1.2)}.flink-list-card>a .cover{width:100%;transition:transform .5s ease-out}.flink-list-card>a .wrapper{position:relative}.flink-list-card>a .wrapper .fadeIn{animation:coverIn .8s ease-out forwards}.flink-list-card>a .info,.flink-list-card>a .wrapper .cover{position:absolute;top:0;left:0}.flink-list-card>a .info{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;overflow:hidden;border-radius:3px;background-color:hsla(0,0%,100%,.7);transition:transform .5s cubic-bezier(.6,.2,.1,1) 0s}.flink-list-card>a .info img{position:relative;top:22px;width:66px;height:66px;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.3);z-index:1}.flink-list-card>a .info span{padding:20px 0 12px;font-size:16px;width:100%;text-align:center;box-shadow:0 0 10px rgba(0,0,0,.3);background-color:hsla(0,0%,100%,.7);color:var(--font-color)}@media screen and (max-width:1024px){.flink-list-card>a{width:calc(33.33333% - 15px)}}@media screen and (max-width:600px){.flink-list-card>a{width:calc(50% - 15px)}}[data-theme=dark] .flink-list-card a .info,[data-theme=dark] .flink-list-card a .info span{background-color:rgba(0,0,0,.6)}", ""]), e.Z = i
      },
      645: function(t) {
        "use strict";
        t.exports = function(t) {
          var e = [];
          return e.toString = function() {
            return this.map((function(e) {
              var r = t(e);
              return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r
            })).join("")
          }, e.i = function(t, r, n) {
            "string" == typeof t && (t = [
              [null, t, ""]
            ]);
            var i = {};
            if (n)
              for (var o = 0; o < this.length; o++) {
                var a = this[o][0];
                null != a && (i[a] = !0)
              }
            for (var c = 0; c < t.length; c++) {
              var s = [].concat(t[c]);
              n && i[s[0]] || (r && (s[2] ? s[2] = "".concat(r, " and ").concat(s[2]) : s[2] = r), e.push(s))
            }
          }, e
        }
      },
      666: function(t) {
        var e = function(t) {
          "use strict";
          var e, r = Object.prototype,
            n = r.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            c = i.toStringTag || "@@toStringTag";

          function s(t, e, r) {
            return Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), t[e]
          }
          try {
            s({}, "")
          } catch (P) {
            s = function(t, e, r) {
              return t[e] = r
            }
          }

          function l(t, e, r, n) {
            var i = e && e.prototype instanceof m ? e : m,
              o = Object.create(i.prototype),
              a = new F(n || []);
            return o._invoke = function(t, e, r) {
              var n = u;
              return function(i, o) {
                if (n === h) throw new Error("Generator is already running");
                if (n === p) {
                  if ("throw" === i) throw o;
                  return N()
                }
                for (r.method = i, r.arg = o;;) {
                  var a = r.delegate;
                  if (a) {
                    var c = E(a, r);
                    if (c) {
                      if (c === v) continue;
                      return c
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (n === u) throw n = p, r.arg;
                    r.dispatchException(r.arg)
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = h;
                  var s = f(t, e, r);
                  if ("normal" === s.type) {
                    if (n = r.done ? p : d, s.arg === v) continue;
                    return {
                      value: s.arg,
                      done: r.done
                    }
                  }
                  "throw" === s.type && (n = p, r.method = "throw", r.arg = s.arg)
                }
              }
            }(t, r, a), o
          }

          function f(t, e, r) {
            try {
              return {
                type: "normal",
                arg: t.call(e, r)
              }
            } catch (P) {
              return {
                type: "throw",
                arg: P
              }
            }
          }
          t.wrap = l;
          var u = "suspendedStart",
            d = "suspendedYield",
            h = "executing",
            p = "completed",
            v = {};

          function m() {}

          function y() {}

          function g() {}
          var x = {};
          x[o] = function() {
            return this
          };
          var b = Object.getPrototypeOf,
            w = b && b(b(S([])));
          w && w !== r && n.call(w, o) && (x = w);
          var k = g.prototype = m.prototype = Object.create(x);

          function _(t) {
            ["next", "throw", "return"].forEach((function(e) {
              s(t, e, (function(t) {
                return this._invoke(e, t)
              }))
            }))
          }

          function L(t, e) {
            function r(i, o, a, c) {
              var s = f(t[i], t, o);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == typeof u && n.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                  r("next", t, a, c)
                }), (function(t) {
                  r("throw", t, a, c)
                })) : e.resolve(u).then((function(t) {
                  l.value = t, a(l)
                }), (function(t) {
                  return r("throw", t, a, c)
                }))
              }
              c(s.arg)
            }
            var i;
            this._invoke = function(t, n) {
              function o() {
                return new e((function(e, i) {
                  r(t, n, e, i)
                }))
              }
              return i = i ? i.then(o, o) : o()
            }
          }

          function E(t, r) {
            var n = t.iterator[r.method];
            if (n === e) {
              if (r.delegate = null, "throw" === r.method) {
                if (t.iterator["return"] && (r.method = "return", r.arg = e, E(t, r), "throw" === r.method)) return v;
                r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
              }
              return v
            }
            var i = f(n, t.iterator, r.arg);
            if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
            var o = i.arg;
            return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, v) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
          }

          function j(t) {
            var e = {
              tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
          }

          function O(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
          }

          function F(t) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t.forEach(j, this), this.reset(!0)
          }

          function S(t) {
            if (t) {
              var r = t[o];
              if (r) return r.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var i = -1,
                  a = function r() {
                    for (; ++i < t.length;)
                      if (n.call(t, i)) return r.value = t[i], r.done = !1, r;
                    return r.value = e, r.done = !0, r
                  };
                return a.next = a
              }
            }
            return {
              next: N
            }
          }

          function N() {
            return {
              value: e,
              done: !0
            }
          }
          return y.prototype = k.constructor = g, g.constructor = y, y.displayName = s(g, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
          }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, s(t, c, "GeneratorFunction")), t.prototype = Object.create(k), t
          }, t.awrap = function(t) {
            return {
              __await: t
            }
          }, _(L.prototype), L.prototype[a] = function() {
            return this
          }, t.AsyncIterator = L, t.async = function(e, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new L(l(e, r, n, i), o);
            return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
              return t.done ? t.value : a.next()
            }))
          }, _(k), s(k, c, "Generator"), k[o] = function() {
            return this
          }, k.toString = function() {
            return "[object Generator]"
          }, t.keys = function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(),
              function n() {
                for (; e.length;) {
                  var r = e.pop();
                  if (r in t) return n.value = r, n.done = !1, n
                }
                return n.done = !0, n
              }
          }, t.values = S, F.prototype = {
            constructor: F,
            reset: function(t) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t)
                for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
            },
            stop: function() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval
            },
            dispatchException: function(t) {
              if (this.done) throw t;
              var r = this;

              function i(n, i) {
                return c.type = "throw", c.arg = t, r.next = n, i && (r.method = "next", r.arg = e), !!i
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  c = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var s = n.call(a, "catchLoc"),
                    l = n.call(a, "finallyLoc");
                  if (s && l) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  } else if (s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                  } else {
                    if (!l) throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  }
                }
              }
            },
            abrupt: function(t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                  var o = i;
                  break
                }
              }
              o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
              var a = o ? o.completion : {};
              return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(a)
            },
            complete: function(t, e) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
            },
            finish: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), v
              }
            },
            "catch": function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    O(r)
                  }
                  return i
                }
              }
              throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, r, n) {
              return this.delegate = {
                iterator: S(t),
                resultName: r,
                nextLoc: n
              }, "next" === this.method && (this.arg = e), v
            }
          }, t
        }(t.exports);
        try {
          regeneratorRuntime = e
        } catch (r) {
          Function("r", "regeneratorRuntime = r")(e)
        }
      },
      379: function(t, e, r) {
        "use strict";
        var n, i = function() {
            return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n
          },
          o = function() {
            var t = {};
            return function(e) {
              if ("undefined" == typeof t[e]) {
                var r = document.querySelector(e);
                if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                  r = r.contentDocument.head
                } catch (n) {
                  r = null
                }
                t[e] = r
              }
              return t[e]
            }
          }(),
          a = [];

        function c(t) {
          for (var e = -1, r = 0; r < a.length; r++)
            if (a[r].identifier === t) {
              e = r;
              break
            } return e
        }

        function s(t, e) {
          for (var r = {}, n = [], i = 0; i < t.length; i++) {
            var o = t[i],
              s = e.base ? o[0] + e.base : o[0],
              l = r[s] || 0,
              f = "".concat(s, " ").concat(l);
            r[s] = l + 1;
            var u = c(f),
              d = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
              }; - 1 !== u ? (a[u].references++, a[u].updater(d)) : a.push({
              identifier: f,
              updater: m(d, e),
              references: 1
            }), n.push(f)
          }
          return n
        }

        function l(t) {
          var e = document.createElement("style"),
            n = t.attributes || {};
          if ("undefined" == typeof n.nonce) {
            var i = r.nc;
            i && (n.nonce = i)
          }
          if (Object.keys(n).forEach((function(t) {
              e.setAttribute(t, n[t])
            })), "function" == typeof t.insert) t.insert(e);
          else {
            var a = o(t.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(e)
          }
          return e
        }
        var f, u = (f = [], function(t, e) {
          return f[t] = e, f.filter(Boolean).join("\n")
        });

        function d(t, e, r, n) {
          var i = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
          if (t.styleSheet) t.styleSheet.cssText = u(e, i);
          else {
            var o = document.createTextNode(i),
              a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
          }
        }

        function h(t, e, r) {
          var n = r.css,
            i = r.media,
            o = r.sourceMap;
          if (i ? t.setAttribute("media", i) : t.removeAttribute("media"), o && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
          }
        }
        var p = null,
          v = 0;

        function m(t, e) {
          var r, n, i;
          if (e.singleton) {
            var o = v++;
            r = p || (p = l(e)), n = d.bind(null, r, o, !1), i = d.bind(null, r, o, !0)
          } else r = l(e), n = h.bind(null, r, e), i = function() {
            ! function(t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t)
            }(r)
          };
          return n(t),
            function(e) {
              if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                n(t = e)
              } else i()
            }
        }
        t.exports = function(t, e) {
          (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = i());
          var r = s(t = t || [], e);
          return function(t) {
            if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
              for (var n = 0; n < r.length; n++) {
                var i = c(r[n]);
                a[i].references--
              }
              for (var o = s(t, e), l = 0; l < r.length; l++) {
                var f = c(r[l]);
                0 === a[f].references && (a[f].updater(), a.splice(f, 1))
              }
              r = o
            }
          }
        }
      }
    },
    e = {};

  function r(n) {
    if (e[n]) return e[n].exports;
    var i = e[n] = {
      id: n,
      exports: {}
    };
    return t[n](i, i.exports, r), i.exports
  }
  r.n = function(t) {
      var e = t && t.__esModule ? function() {
        return t["default"]
      } : function() {
        return t
      };
      return r.d(e, {
        a: e
      }), e
    }, r.d = function(t, e) {
      for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
        enumerable: !0,
        get: e[n]
      })
    }, r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    },
    function() {
      "use strict";
      var t = r(757),
        e = r.n(t),
        n = r(926),
        i = r.n(n),
        o = r(575),
        a = r.n(o),
        c = r(913),
        s = r.n(c),
        l = r(379),
        f = r.n(l),
        u = r(540),
        d = {
          insert: "head",
          singleton: !1
        },
        h = (f()(u.Z, d), u.Z.locals, r(655)),
        p = r.n(h);

      function v() {
        var t = p()(["(", ":[s]*|[\r\n]*)"], ["(", ":[\\s]*|[\\r\\n]*)"]);
        return v = function() {
          return t
        }, t
      }

      function m() {
        var t = p()(["", ":[^\n]*\n"], ["", ":[^\\n]*\\n"]);
        return m = function() {
          return t
        }, t
      }
      var y = function(t, e) {
          var r = new RegExp(String.raw(m(), e)),
            n = new RegExp(String.raw(v(), e), "g"),
            i = "你写的好像不对哦！";
          return (t = t.match(r)) && t.length > 0 && (i = t[0].replace(n, "")), i
        },
        g = function(t) {
          var e = ["--primary-color", "border-width", "border-style", "animation", "background", "--primary-rotate"],
            r = "";
          for (var n in e) {
            var i = y(t, e[n]);
            "你写的好像不对哦！" !== i && (r += "".concat(e[n], ":").concat(i, ";"))
          }
          return r
        },
        x = function(t) {
          var e = ["img_animation"],
            r = "";
          for (var n in e) {
            var i = y(t, e[n]);
            "你写的好像不对哦！" !== i && (r += "".concat(i, ";"))
          }
          return r
        },
        b = function(t) {
          if (t.length) return t[0].name
        },
        w = function(t) {
          var e = y(t, "screenshot"),
            r = y(t, "link");
          return -1 != e.indexOf("http") ? e : "https://image.thum.io/get/width/1024/crop/768/".concat(r)
        },
        k = function(t, e) {
          var r = "";
          return t.labelDescr[e] && (r = t.labelDescr[e]), r
        },
        _ = function() {
          function t(e) {
            a()(this, t);
            var r = e.owner,
              n = e.repo,
              i = e.direction_sort,
              o = e.sort_container,
              c = e.labelDescr,
              s = e.el;
            this.owner = r, this.repo = n, this.direction_sort = i, this.sort_container = o, this.labelDescr = c, this.page = 1, this.per_page = 100, this.el = s, this.text = [], this.init()
          }
          var r;
          return s()(t, [{
            key: "init",
            value: function() {
              this.getPageFriend()
            }
          }, {
            key: "getPageFriend",
            value: (r = i()(e().mark((function n() {
              return e().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    return this.showLoading(), t.next = 3, this.getFriends(this);
                  case 3:
                    this.createFriend();
                  case 4:
                  case "end":
                    return t.stop()
                }
              }), n, this)
            }))), function() {
              return r.apply(this, arguments)
            })
          }, {
            key: "showLoading",
            value: function() {
              $("".concat(this.el)).html('<div class="loader"><svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle class="load one" cx="60" cy="60" r="40"></circle><circle class="load two" cx="60" cy="60" r="40"></circle><circle class="load three" cx="60" cy="60" r="40"></circle><g><circle class="point one" cx="45" cy="70" r="5"></circle><circle class="point two" cx="60" cy="70" r="5"></circle><circle class="point three" cx="75" cy="70" r="5"></circle></g></svg></div>')
            }
          }, {
            key: "createContainer",
            value: function() {
              for (var t in this.sort_container) $("".concat(this.el)).append("<h2 id=".concat(this.sort_container[t], ">").concat(this.sort_container[t], '</h2><div class="flink-desc">').concat(k(this, this.sort_container[t]), '</div><div class="flink-list-card"></div><div class="flink-list"></div>'))
            }
          }, {
            key: "createFriend",
            value: function() {
              var t = "",
                e = this.text;
              for (var r in $(".loader").hide(), this.createContainer(), e)
                if (e[r].labels) {
                  var n = e[r].body;
                  t = n.template, "card" == n.type ? $("#" + e[r].labels).length ? $("#".concat(e[r].labels)).next().next().append(t) : $(this.el).append("<h2 id=".concat(e[r].labels, ">").concat(e[r].labels, '</h2><div class="flink-desc">').concat(k(this, e[r].labels), "</div>") + '<div class="flink-list-card">' + t + '</div><div class="flink-list"></div>') : $("#" + e[r].labels).length ? $("#".concat(e[r].labels)).next().next().next().append(t) : $(this.el).append("<h2 id=".concat(e[r].labels, ">").concat(e[r].labels, '</h2><div class="flink-desc">').concat(k(this, e[r].labels), '</div><div class="flink-list">') + t + "</div>")
                }
            }
          }, {
            key: "getFriends",
            value: function(t) {
              return $.ajax({
                url: "https://gitee.com/api/v5/repos/".concat(this.owner, "/").concat(this.repo, "/issues?state=open&sort=created&direction=").concat(this.direction_sort, "&page=").concat(this.page, "&per_page=").concat(this.per_page),
                type: "get",
                success: function(e, r, n) {
                  var i, o, a, c, s, l, f;
                  if (t.text = [], e)
                    for (var u in e) {
                      var d = {};
                      d.body = (i = e[u].body, o = void 0, a = void 0, c = void 0, s = void 0, l = void 0, f = void 0, o = y(i, "link"), a = y(i, "name"), c = y(i, "avatar"), s = y(i, "descr"), l = y(i, "card_style"), f = {
                        item: '<div class="flink-list-item" style="'.concat(g(i), '"><a href="').concat(o, '" title="').concat(a, '" target="_blank"><img class="rauto" style="animation:').concat(x(i), '" data-lazy-src="').concat(c, '" onerror="this.onerror=null,this.src=&quot;https://cdn.jsdelivr.net/gh/blogimg/HexoStaticFile1/imgbed/2020/03/21/20200321213747.gif&quot;" alt="').concat(a, '" src="').concat(c, '"><span class="flink-item-name">').concat(a, '</span><span class="flink-item-desc" title="').concat(s, '">').concat(s, "</span></a></div>"),
                        card: '<a href="'.concat(o, '" target="_blank"\n    ><div class="wrapper cover">\n      <img\n        src="').concat(w(i), '"\n        class="cover fadeIn"\n      />\n    </div>\n    <div class="info">\n    <img data-lazy-src="').concat(c, '" onerror="this.onerror=null;this.src=\'https://cdn.jsdelivr.net/gh/blogimg/HexoStaticFile1/imgbed/2020/03/21/20200321213747.gif\'" alt="').concat(a, '" src="').concat(c, '">\n      <span>').concat(a, "</span>\n    </div>\n    </a>")
                      }, {
                        type: l,
                        template: f[l] ? f[l] : f.item
                      }), d.labels = b(e[u].labels), t.text.push(d)
                    }
                }
              })
            }
          }]), t
        }();
      window.Friend = _
    }()
}();
