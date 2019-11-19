;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1: function(e, t, r) {
      'use strict'
      r.d(t, 'i', function() {
        return w
      }),
        r.d(t, 'j', function() {
          return m
        }),
        r.d(t, 'a', function() {
          return v
        }),
        r.d(t, 'o', function() {
          return x
        }),
        r.d(t, 'e', function() {
          return A
        }),
        r.d(t, 'f', function() {
          return y
        }),
        r.d(t, 'c', function() {
          return k
        }),
        r.d(t, 'n', function() {
          return _
        }),
        r.d(t, 'h', function() {
          return C
        }),
        r.d(t, 'p', function() {
          return j
        }),
        r.d(t, 'k', function() {
          return $
        }),
        r.d(t, 'm', function() {
          return R
        }),
        r.d(t, 'd', function() {
          return B
        }),
        r.d(t, 'b', function() {
          return z
        }),
        r.d(t, 'g', function() {
          return N
        }),
        r.d(t, 'l', function() {
          return P
        })
      r(92), r(40)
      var n = r(36),
        o = (r(133), r(134), r(135), r(25)),
        c = (r(93), r(94), r(138), r(141), r(95), r(44), r(5)),
        l = (r(56), r(35), r(17), r(65), r(66), r(54)),
        d = r(0)
      function f(object, e) {
        var t = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object)
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function h(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? f(source, !0).forEach(function(t) {
                Object(l.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : f(source).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                )
              })
        }
        return e
      }
      function w(e) {
        d.a.config.errorHandler && d.a.config.errorHandler(e)
      }
      function m(e) {
        return e.then(function(e) {
          return e.default || e
        })
      }
      function v(e, t) {
        if (t || !e.options.__hasNuxtData) {
          var r =
            e.options._originDataFn ||
            e.options.data ||
            function() {
              return {}
            }
          ;(e.options._originDataFn = r),
            (e.options.data = function() {
              var data = r.call(this, this)
              return (
                this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]),
                h({}, data, {}, t)
              )
            }),
            (e.options.__hasNuxtData = !0),
            e._Ctor &&
              e._Ctor.options &&
              (e._Ctor.options.data = e.options.data)
        }
      }
      function x(e) {
        return e.options && e._Ctor === e
          ? e
          : (e.options
              ? ((e._Ctor = e), (e.extendOptions = e.options))
              : ((e = d.a.extend(e))._Ctor = e),
            !e.options.name &&
              e.options.__file &&
              (e.options.name = e.options.__file),
            e)
      }
      function A(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'components'
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function(e, n) {
            return Object.keys(e[r]).map(function(o) {
              return t && t.push(n), e[r][o]
            })
          })
        )
      }
      function y(e) {
        return A(
          e,
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          'instances'
        )
      }
      function k(e, t) {
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function(e, r) {
            return Object.keys(e.components).reduce(function(n, o) {
              return (
                e.components[o]
                  ? n.push(t(e.components[o], e.instances[o], e, o, r))
                  : delete e.components[o],
                n
              )
            }, [])
          })
        )
      }
      function _(e, t) {
        return Promise.all(
          k(
            e,
            (function() {
              var e = Object(c.a)(
                regeneratorRuntime.mark(function e(r, n, o, c) {
                  return regeneratorRuntime.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('function' != typeof r || r.options) {
                            e.next = 4
                            break
                          }
                          return (e.next = 3), r()
                        case 3:
                          r = e.sent
                        case 4:
                          return (
                            (o.components[c] = r = x(r)),
                            e.abrupt(
                              'return',
                              'function' == typeof t ? t(r, n, o, c) : r
                            )
                          )
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function(t, r, n, o) {
                return e.apply(this, arguments)
              }
            })()
          )
        )
      }
      function C(e) {
        return O.apply(this, arguments)
      }
      function O() {
        return (O = Object(c.a)(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2
                      break
                    }
                    return e.abrupt('return')
                  case 2:
                    return (e.next = 4), _(t)
                  case 4:
                    return e.abrupt(
                      'return',
                      h({}, t, {
                        meta: A(t).map(function(e, r) {
                          return h(
                            {},
                            e.options.meta,
                            {},
                            (t.matched[r] || {}).meta
                          )
                        })
                      })
                    )
                  case 5:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function j(e, t) {
        return E.apply(this, arguments)
      }
      function E() {
        return (E = Object(c.a)(
          regeneratorRuntime.mark(function e(t, r) {
            var c, l, d, f
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t.context ||
                        ((t.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: t,
                          payload: r.payload,
                          error: r.error,
                          base: '/',
                          env: {}
                        }),
                        r.req && (t.context.req = r.req),
                        r.res && (t.context.res = r.res),
                        r.ssrContext && (t.context.ssrContext = r.ssrContext),
                        (t.context.redirect = function(e, path, r) {
                          if (e) {
                            t.context._redirected = !0
                            var n = Object(o.a)(path)
                            if (
                              ('number' == typeof e ||
                                ('undefined' !== n && 'object' !== n) ||
                                ((r = path || {}),
                                (path = e),
                                (n = Object(o.a)(path)),
                                (e = 302)),
                              'object' === n &&
                                (path = t.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw ((path = M(path, r)),
                              window.location.replace(path),
                              new Error('ERR_REDIRECT'))
                            t.context.next({ path: path, query: r, status: e })
                          }
                        }),
                        (t.context.nuxtState = window.__NUXT__)),
                      (e.next = 3),
                      Promise.all([C(r.route), C(r.from)])
                    )
                  case 3:
                    ;(c = e.sent),
                      (l = Object(n.a)(c, 2)),
                      (d = l[0]),
                      (f = l[1]),
                      r.route && (t.context.route = d),
                      r.from && (t.context.from = f),
                      (t.context.next = r.next),
                      (t.context._redirected = !1),
                      (t.context._errored = !1),
                      (t.context.isHMR = !1),
                      (t.context.params = t.context.route.params || {}),
                      (t.context.query = t.context.route.query || {})
                  case 15:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function $(e, t) {
        return !e.length || t._redirected || t._errored
          ? Promise.resolve()
          : R(e[0], t).then(function() {
              return $(e.slice(1), t)
            })
      }
      function R(e, t) {
        var r
        return (r =
          2 === e.length
            ? new Promise(function(r) {
                e(t, function(e, data) {
                  e && t.error(e), r((data = data || {}))
                })
              })
            : e(t)) &&
          r instanceof Promise &&
          'function' == typeof r.then
          ? r
          : Promise.resolve(r)
      }
      function B(base, e) {
        var path = decodeURI(window.location.pathname)
        return 'hash' === e
          ? window.location.hash.replace(/^#\//, '')
          : (base &&
              0 === path.indexOf(base) &&
              (path = path.slice(base.length)),
            (path || '/') + window.location.search + window.location.hash)
      }
      function z(e, t) {
        return (function(e) {
          for (var t = new Array(e.length), i = 0; i < e.length; i++)
            'object' === Object(o.a)(e[i]) &&
              (t[i] = new RegExp('^(?:' + e[i].pattern + ')$'))
          return function(r, n) {
            for (
              var path = '',
                data = r || {},
                o = (n || {}).pretty ? Y : encodeURIComponent,
                c = 0;
              c < e.length;
              c++
            ) {
              var l = e[c]
              if ('string' != typeof l) {
                var d = data[l.name || 'pathMatch'],
                  f = void 0
                if (null == d) {
                  if (l.optional) {
                    l.partial && (path += l.prefix)
                    continue
                  }
                  throw new TypeError('Expected "' + l.name + '" to be defined')
                }
                if (Array.isArray(d)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(d) +
                        '`'
                    )
                  if (0 === d.length) {
                    if (l.optional) continue
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty'
                    )
                  }
                  for (var h = 0; h < d.length; h++) {
                    if (((f = o(d[h])), !t[c].test(f)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '", but received `' +
                          JSON.stringify(f) +
                          '`'
                      )
                    path += (0 === h ? l.prefix : l.delimiter) + f
                  }
                } else {
                  if (((f = l.asterisk ? Y(d, !0) : o(d)), !t[c].test(f)))
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but received "' +
                        f +
                        '"'
                    )
                  path += l.prefix + f
                }
              } else path += l
            }
            return path
          }
        })(
          (function(e, t) {
            var r,
              n = [],
              o = 0,
              c = 0,
              path = '',
              l = (t && t.delimiter) || '/'
            for (; null != (r = S.exec(e)); ) {
              var d = r[0],
                f = r[1],
                h = r.index
              if (((path += e.slice(c, h)), (c = h + d.length), f)) path += f[1]
              else {
                var w = e[c],
                  m = r[2],
                  v = r[3],
                  x = r[4],
                  A = r[5],
                  y = r[6],
                  k = r[7]
                path && (n.push(path), (path = ''))
                var _ = null != m && null != w && w !== m,
                  C = '+' === y || '*' === y,
                  O = '?' === y || '*' === y,
                  j = r[2] || l,
                  pattern = x || A
                n.push({
                  name: v || o++,
                  prefix: m || '',
                  delimiter: j,
                  optional: O,
                  repeat: C,
                  partial: _,
                  asterisk: Boolean(k),
                  pattern: pattern ? T(pattern) : k ? '.*' : '[^' + D(j) + ']+?'
                })
              }
            }
            c < e.length && (path += e.substr(c))
            path && n.push(path)
            return n
          })(e, t)
        )
      }
      function N(e, t) {
        var r = {},
          n = h({}, e, {}, t)
        for (var o in n) String(e[o]) !== String(t[o]) && (r[o] = !0)
        return r
      }
      function P(e) {
        var t
        if (e.message || 'string' == typeof e) t = e.message || e
        else
          try {
            t = JSON.stringify(e, null, 2)
          } catch (r) {
            t = '['.concat(e.constructor.name, ']')
          }
        return h({}, e, {
          message: t,
          statusCode:
            e.statusCode || e.status || (e.response && e.response.status) || 500
        })
      }
      ;(window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function(e) {
          window.onNuxtReadyCbs.push(e)
        })
      var S = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
        ].join('|'),
        'g'
      )
      function Y(e, t) {
        var r = t ? /[?#]/g : /[/?#]/g
        return encodeURI(e).replace(r, function(e) {
          return (
            '%' +
            e
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()
          )
        })
      }
      function D(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
      }
      function T(e) {
        return e.replace(/([=!:$/()])/g, '\\$1')
      }
      function M(e, t) {
        var r,
          o = e.indexOf('://')
        ;-1 !== o
          ? ((r = e.substring(0, o)), (e = e.substring(o + 3)))
          : e.startsWith('//') && (e = e.substring(2))
        var c,
          l = e.split('/'),
          d = (r ? r + '://' : '//') + l.shift(),
          path = l.filter(Boolean).join('/')
        if (2 === (l = path.split('#')).length) {
          var f = l,
            h = Object(n.a)(f, 2)
          ;(path = h[0]), (c = h[1])
        }
        return (
          (d += path ? '/' + path : ''),
          t &&
            '{}' !== JSON.stringify(t) &&
            (d +=
              (2 === e.split('?').length ? '&' : '?') +
              (function(e) {
                return Object.keys(e)
                  .sort()
                  .map(function(t) {
                    var r = e[t]
                    return null == r
                      ? ''
                      : Array.isArray(r)
                      ? r
                          .slice()
                          .map(function(e) {
                            return [t, '=', e].join('')
                          })
                          .join('&')
                      : t + '=' + r
                  })
                  .filter(Boolean)
                  .join('&')
              })(t)),
          (d += c ? '#' + c : '')
        )
      }
    },
    101: function(e, t, r) {
      e.exports = r(102)
    },
    102: function(e, t, r) {
      'use strict'
      r.r(t),
        function(e) {
          r(56), r(79), r(40)
          var t = r(25),
            n = (r(44), r(112), r(5)),
            o =
              (r(82),
              r(84),
              r(35),
              r(17),
              r(65),
              r(66),
              r(87),
              r(116),
              r(128),
              r(130),
              r(0)),
            c = r(97),
            l = r(68),
            d = r(1),
            f = r(18),
            h = r(55)
          o.a.component(h.a.name, h.a),
            o.a.component('NLink', h.a),
            e.fetch || (e.fetch = c.a)
          var w,
            m,
            v = [],
            x = window.__NUXT__ || {}
          Object.assign(o.a.config, { silent: !0, performance: !1 })
          var A = o.a.config.errorHandler || console.error
          function y(e, t, r) {
            var n = function(component) {
              var e =
                (function(component, e) {
                  if (!component || !component.options || !component.options[e])
                    return {}
                  var option = component.options[e]
                  if ('function' == typeof option) {
                    for (
                      var t = arguments.length,
                        r = new Array(t > 2 ? t - 2 : 0),
                        n = 2;
                      n < t;
                      n++
                    )
                      r[n - 2] = arguments[n]
                    return option.apply(void 0, r)
                  }
                  return option
                })(component, 'transition', t, r) || {}
              return 'string' == typeof e ? { name: e } : e
            }
            return e.map(function(e) {
              var t = Object.assign({}, n(e))
              if (r && r.matched.length && r.matched[0].components.default) {
                var o = n(r.matched[0].components.default)
                Object.keys(o)
                  .filter(function(e) {
                    return o[e] && e.toLowerCase().includes('leave')
                  })
                  .forEach(function(e) {
                    t[e] = o[e]
                  })
              }
              return t
            })
          }
          function k(e, t, r) {
            return _.apply(this, arguments)
          }
          function _() {
            return (_ = Object(n.a)(
              regeneratorRuntime.mark(function e(t, r, n) {
                var o,
                  c,
                  l,
                  f,
                  h = this
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((this._pathChanged =
                              Boolean(w.nuxt.err) || r.path !== t.path),
                            (this._queryChanged =
                              JSON.stringify(t.query) !==
                              JSON.stringify(r.query)),
                            (this._diffQuery = this._queryChanged
                              ? Object(d.g)(t.query, r.query)
                              : []),
                            this._pathChanged &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (e.prev = 4),
                            this._pathChanged || !this._queryChanged)
                          ) {
                            e.next = 11
                            break
                          }
                          return (
                            (e.next = 8),
                            Object(d.n)(t, function(e, t) {
                              return { Component: e, instance: t }
                            })
                          )
                        case 8:
                          ;(o = e.sent),
                            o.some(function(e) {
                              var n = e.Component,
                                o = e.instance,
                                c = n.options.watchQuery
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function(e) {
                                      return h._diffQuery[e]
                                    })
                                  : 'function' == typeof c &&
                                    c.apply(o, [t.query, r.query]))
                              )
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start()
                        case 11:
                          n(), (e.next = 25)
                          break
                        case 14:
                          if (
                            ((e.prev = 14),
                            (e.t0 = e.catch(4)),
                            (c = e.t0 || {}),
                            (l =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (f = c.message || ''),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(f))
                          ) {
                            e.next = 22
                            break
                          }
                          return window.location.reload(!0), e.abrupt('return')
                        case 22:
                          this.error({ statusCode: l, message: f }),
                            this.$nuxt.$emit('routeChanged', t, r, c),
                            n()
                        case 25:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this,
                  [[4, 14]]
                )
              })
            )).apply(this, arguments)
          }
          function C(e, t) {
            return x.serverRendered && t && Object(d.a)(e, t), (e._Ctor = e), e
          }
          function O(e) {
            var path = Object(d.d)(e.options.base, e.options.mode)
            return Object(d.c)(
              e.match(path),
              (function() {
                var e = Object(n.a)(
                  regeneratorRuntime.mark(function e(t, r, n, o, c) {
                    var l
                    return regeneratorRuntime.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ('function' != typeof t || t.options) {
                              e.next = 4
                              break
                            }
                            return (e.next = 3), t()
                          case 3:
                            t = e.sent
                          case 4:
                            return (
                              (l = C(
                                Object(d.o)(t),
                                x.data ? x.data[c] : null
                              )),
                              (n.components[o] = l),
                              e.abrupt('return', l)
                            )
                          case 7:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function(t, r, n, o, c) {
                  return e.apply(this, arguments)
                }
              })()
            )
          }
          function j(e, t, r) {
            var n = this,
              o = [],
              c = !1
            if (
              (void 0 !== r &&
                ((o = []),
                (r = Object(d.o)(r)).options.middleware &&
                  (o = o.concat(r.options.middleware)),
                e.forEach(function(e) {
                  e.options.middleware && (o = o.concat(e.options.middleware))
                })),
              (o = o.map(function(e) {
                return 'function' == typeof e
                  ? e
                  : ('function' != typeof l.a[e] &&
                      ((c = !0),
                      n.error({
                        statusCode: 500,
                        message: 'Unknown middleware ' + e
                      })),
                    l.a[e])
              })),
              !c)
            )
              return Object(d.k)(o, t)
          }
          function E(e, t, r) {
            return $.apply(this, arguments)
          }
          function $() {
            return ($ = Object(n.a)(
              regeneratorRuntime.mark(function e(t, r, n) {
                var o,
                  c,
                  l,
                  h,
                  m,
                  x,
                  A,
                  k,
                  _,
                  C,
                  O,
                  E,
                  $,
                  R,
                  B,
                  z,
                  N,
                  P = this
                return regeneratorRuntime.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !1 !== this._pathChanged ||
                            !1 !== this._queryChanged
                          ) {
                            e.next = 2
                            break
                          }
                          return e.abrupt('return', n())
                        case 2:
                          return (
                            t === r
                              ? (v = [])
                              : ((o = []),
                                (v = Object(d.e)(r, o).map(function(e, i) {
                                  return Object(
                                    d.b
                                  )(r.matched[o[i]].path)(r.params)
                                }))),
                            (c = !1),
                            (l = function(path) {
                              r.path === path.path &&
                                P.$loading.finish &&
                                P.$loading.finish(),
                                r.path !== path.path &&
                                  P.$loading.pause &&
                                  P.$loading.pause(),
                                c || ((c = !0), n(path))
                            }),
                            (e.next = 7),
                            Object(d.p)(w, {
                              route: t,
                              from: r,
                              next: l.bind(this)
                            })
                          )
                        case 7:
                          if (
                            ((this._dateLastError = w.nuxt.dateErr),
                            (this._hadError = Boolean(w.nuxt.err)),
                            (h = []),
                            (m = Object(d.e)(t, h)).length)
                          ) {
                            e.next = 25
                            break
                          }
                          return (e.next = 14), j.call(this, m, w.context)
                        case 14:
                          if (!c) {
                            e.next = 16
                            break
                          }
                          return e.abrupt('return')
                        case 16:
                          return (
                            (e.next = 18),
                            this.loadLayout(
                              'function' == typeof f.a.layout
                                ? f.a.layout(w.context)
                                : f.a.layout
                            )
                          )
                        case 18:
                          return (
                            (x = e.sent),
                            (e.next = 21),
                            j.call(this, m, w.context, x)
                          )
                        case 21:
                          if (!c) {
                            e.next = 23
                            break
                          }
                          return e.abrupt('return')
                        case 23:
                          return (
                            w.context.error({
                              statusCode: 404,
                              message: 'This page could not be found'
                            }),
                            e.abrupt('return', n())
                          )
                        case 25:
                          return (
                            m.forEach(function(e) {
                              e._Ctor &&
                                e._Ctor.options &&
                                ((e.options.asyncData =
                                  e._Ctor.options.asyncData),
                                (e.options.fetch = e._Ctor.options.fetch))
                            }),
                            this.setTransitions(y(m, t, r)),
                            (e.prev = 27),
                            (e.next = 30),
                            j.call(this, m, w.context)
                          )
                        case 30:
                          if (!c) {
                            e.next = 32
                            break
                          }
                          return e.abrupt('return')
                        case 32:
                          if (!w.context._errored) {
                            e.next = 34
                            break
                          }
                          return e.abrupt('return', n())
                        case 34:
                          return (
                            'function' == typeof (A = m[0].options.layout) &&
                              (A = A(w.context)),
                            (e.next = 38),
                            this.loadLayout(A)
                          )
                        case 38:
                          return (
                            (A = e.sent),
                            (e.next = 41),
                            j.call(this, m, w.context, A)
                          )
                        case 41:
                          if (!c) {
                            e.next = 43
                            break
                          }
                          return e.abrupt('return')
                        case 43:
                          if (!w.context._errored) {
                            e.next = 45
                            break
                          }
                          return e.abrupt('return', n())
                        case 45:
                          ;(k = !0),
                            (e.prev = 46),
                            (_ = !0),
                            (C = !1),
                            (O = void 0),
                            (e.prev = 50),
                            (E = m[Symbol.iterator]())
                        case 52:
                          if ((_ = ($ = E.next()).done)) {
                            e.next = 64
                            break
                          }
                          if (
                            'function' == typeof (R = $.value).options.validate
                          ) {
                            e.next = 56
                            break
                          }
                          return e.abrupt('continue', 61)
                        case 56:
                          return (e.next = 58), R.options.validate(w.context)
                        case 58:
                          if ((k = e.sent)) {
                            e.next = 61
                            break
                          }
                          return e.abrupt('break', 64)
                        case 61:
                          ;(_ = !0), (e.next = 52)
                          break
                        case 64:
                          e.next = 70
                          break
                        case 66:
                          ;(e.prev = 66),
                            (e.t0 = e.catch(50)),
                            (C = !0),
                            (O = e.t0)
                        case 70:
                          ;(e.prev = 70),
                            (e.prev = 71),
                            _ || null == E.return || E.return()
                        case 73:
                          if (((e.prev = 73), !C)) {
                            e.next = 76
                            break
                          }
                          throw O
                        case 76:
                          return e.finish(73)
                        case 77:
                          return e.finish(70)
                        case 78:
                          e.next = 84
                          break
                        case 80:
                          return (
                            (e.prev = 80),
                            (e.t1 = e.catch(46)),
                            this.error({
                              statusCode: e.t1.statusCode || '500',
                              message: e.t1.message
                            }),
                            e.abrupt('return', n())
                          )
                        case 84:
                          if (k) {
                            e.next = 87
                            break
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: 'This page could not be found'
                            }),
                            e.abrupt('return', n())
                          )
                        case 87:
                          return (
                            (e.next = 89),
                            Promise.all(
                              m.map(function(e, i) {
                                if (
                                  ((e._path = Object(d.b)(t.matched[h[i]].path)(
                                    t.params
                                  )),
                                  (e._dataRefresh = !1),
                                  (P._pathChanged && P._queryChanged) ||
                                    e._path !== v[i])
                                )
                                  e._dataRefresh = !0
                                else if (!P._pathChanged && P._queryChanged) {
                                  var n = e.options.watchQuery
                                  !0 === n
                                    ? (e._dataRefresh = !0)
                                    : Array.isArray(n)
                                    ? (e._dataRefresh = n.some(function(e) {
                                        return P._diffQuery[e]
                                      }))
                                    : 'function' == typeof n &&
                                      (B || (B = Object(d.f)(t)),
                                      (e._dataRefresh = n.apply(B[i], [
                                        t.query,
                                        r.query
                                      ])))
                                }
                                if (
                                  P._hadError ||
                                  !P._isMounted ||
                                  e._dataRefresh
                                ) {
                                  var o = [],
                                    c =
                                      e.options.asyncData &&
                                      'function' == typeof e.options.asyncData,
                                    l = Boolean(e.options.fetch),
                                    f = c && l ? 30 : 45
                                  if (c) {
                                    var m = Object(d.m)(
                                      e.options.asyncData,
                                      w.context
                                    ).then(function(t) {
                                      Object(d.a)(e, t),
                                        P.$loading.increase &&
                                          P.$loading.increase(f)
                                    })
                                    o.push(m)
                                  }
                                  if (
                                    ((P.$loading.manual =
                                      !1 === e.options.loading),
                                    l)
                                  ) {
                                    var p = e.options.fetch(w.context)
                                    ;(p &&
                                      (p instanceof Promise ||
                                        'function' == typeof p.then)) ||
                                      (p = Promise.resolve(p)),
                                      p.then(function(e) {
                                        P.$loading.increase &&
                                          P.$loading.increase(f)
                                      }),
                                      o.push(p)
                                  }
                                  return Promise.all(o)
                                }
                              })
                            )
                          )
                        case 89:
                          c ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            n()),
                            (e.next = 106)
                          break
                        case 92:
                          if (
                            ((e.prev = 92),
                            (e.t2 = e.catch(27)),
                            'ERR_REDIRECT' !== (z = e.t2 || {}).message)
                          ) {
                            e.next = 97
                            break
                          }
                          return e.abrupt(
                            'return',
                            this.$nuxt.$emit('routeChanged', t, r, z)
                          )
                        case 97:
                          return (
                            (v = []),
                            Object(d.i)(z),
                            'function' == typeof (N = f.a.layout) &&
                              (N = N(w.context)),
                            (e.next = 103),
                            this.loadLayout(N)
                          )
                        case 103:
                          this.error(z),
                            this.$nuxt.$emit('routeChanged', t, r, z),
                            n()
                        case 106:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  this,
                  [[27, 92], [46, 80], [50, 66, 70, 78], [71, , 73, 77]]
                )
              })
            )).apply(this, arguments)
          }
          function R(e, r) {
            Object(d.c)(e, function(e, r, n, c) {
              return (
                'object' !== Object(t.a)(e) ||
                  e.options ||
                  (((e = o.a.extend(e))._Ctor = e), (n.components[c] = e)),
                e
              )
            })
          }
          function B(e) {
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              this.error()
            var t = this.$options.nuxt.err
              ? f.a.layout
              : e.matched[0].components.default.options.layout
            'function' == typeof t && (t = t(w.context)), this.setLayout(t)
          }
          function z(e, t) {
            var r = this
            if (!1 !== this._pathChanged || !1 !== this._queryChanged) {
              var n = Object(d.f)(e),
                c = Object(d.e)(e)
              o.a.nextTick(function() {
                n.forEach(function(e, i) {
                  if (
                    e &&
                    !e._isDestroyed &&
                    e.constructor._dataRefresh &&
                    c[i] === e.constructor &&
                    !0 !== e.$vnode.data.keepAlive &&
                    'function' == typeof e.constructor.options.data
                  ) {
                    var t = e.constructor.options.data.call(e)
                    for (var r in t) o.a.set(e.$data, r, t[r])
                    window.$nuxt.$nextTick(function() {
                      window.$nuxt.$emit('triggerScroll')
                    })
                  }
                }),
                  B.call(r, e)
              })
            }
          }
          function N(e) {
            window.onNuxtReadyCbs.forEach(function(t) {
              'function' == typeof t && t(e)
            }),
              'function' == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(e),
              m.afterEach(function(t, r) {
                o.a.nextTick(function() {
                  return e.$nuxt.$emit('routeChanged', t, r)
                })
              })
          }
          function P() {
            return (P = Object(n.a)(
              regeneratorRuntime.mark(function e(t) {
                var r, n, c, l, f
                return regeneratorRuntime.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (w = t.app),
                          (m = t.router),
                          (r = new o.a(w)),
                          (n = x.layout || 'default'),
                          (e.next = 6),
                          r.loadLayout(n)
                        )
                      case 6:
                        return (
                          r.setLayout(n),
                          (c = function() {
                            r.$mount('#__nuxt'),
                              m.afterEach(R),
                              m.afterEach(z.bind(r)),
                              o.a.nextTick(function() {
                                N(r)
                              })
                          }),
                          (e.next = 10),
                          Promise.all(O(m))
                        )
                      case 10:
                        if (
                          ((l = e.sent),
                          (r.setTransitions = r.$options.nuxt.setTransitions.bind(
                            r
                          )),
                          l.length &&
                            (r.setTransitions(y(l, m.currentRoute)),
                            (v = m.currentRoute.matched.map(function(e) {
                              return Object(d.b)(e.path)(m.currentRoute.params)
                            }))),
                          (r.$loading = {}),
                          x.error && r.error(x.error),
                          m.beforeEach(k.bind(r)),
                          m.beforeEach(E.bind(r)),
                          !x.serverRendered)
                        ) {
                          e.next = 20
                          break
                        }
                        return c(), e.abrupt('return')
                      case 20:
                        ;(f = function() {
                          R(m.currentRoute, m.currentRoute),
                            B.call(r, m.currentRoute),
                            c()
                        }),
                          E.call(r, m.currentRoute, m.currentRoute, function(
                            path
                          ) {
                            if (path) {
                              var e = m.afterEach(function(t, r) {
                                e(), f()
                              })
                              m.push(path, void 0, function(e) {
                                e && A(e)
                              })
                            } else f()
                          })
                      case 22:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )).apply(this, arguments)
          }
          Object(f.b)()
            .then(function(e) {
              return P.apply(this, arguments)
            })
            .catch(A)
        }.call(this, r(27))
    },
    146: function(e, t, r) {
      'use strict'
      var n = r(49)
      r.n(n).a
    },
    147: function(e, t, r) {
      ;(e.exports = r(19)(!1)).push([
        e.i,
        '.__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}',
        ''
      ])
    },
    148: function(e, t, r) {
      'use strict'
      var n = r(50)
      r.n(n).a
    },
    149: function(e, t, r) {
      ;(e.exports = r(19)(!1)).push([
        e.i,
        '.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}',
        ''
      ])
    },
    150: function(e, t, r) {
      var content = r(151)
      'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(20).default)('12ba2d00', content, !0, { sourceMap: !1 })
    },
    151: function(e, t, r) {
      ;(e.exports = r(19)(!1)).push([
        e.i,
        'html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;box-sizing:border-box;font-family:sans-serif;font-size:16px;scroll-behavior:smooth}*,:after,:before{box-sizing:content-box}article,aside,blockquote,body,button,code,dd,details,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,input,legend,li,menu,nav,ol,p,pre,section,td,textarea,th,ul{margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}body,button,input,select,textarea{font:14px/1.5 PingFang SC,Helvetica Neue,Helvetica,Lucida Grande,Lantinghei SC,Open Sans,Microsoft YaHei,STHeiti,WenQuanYi Micro Hei,SimSun,sans-serif;background-color:#fff}input,select,textarea{font-size:100%}body,body a{color:#000;-webkit-transition:color .3s ease;transition:color .3s ease}body a:hover{color:#3f9fff}table{border-collapse:collapse;border-spacing:0}th{text-align:inherit}fieldset,img{border:0}img{vertical-align:top}iframe{display:block}abbr,acronym{border:0;font-feature-settings:normal;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal}li,ol,ul{list-style:none}caption,th{text-align:center}q:after,q:before{content:""}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a,a:hover,ins{text-decoration:none}.clear:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.clear{zoom:1}body .hide{display:none}.show{display:block}.hide{display:none!important}.fl,.fr{display:inline}.fl{float:left}.fr{float:right}@font-face{font-family:Noto Sans;src:url(/font/NotoSans.woff2)}.pagination{z-index:3;position:absolute;left:0;bottom:-5px;text-align:center}.pagination-btn{margin:0 20px;width:14px;height:14px;display:inline-block;border-radius:100%;border:2px solid #293754;cursor:pointer}.pagination-active{background-color:#293754}',
        ''
      ])
    },
    152: function(e, t, r) {
      'use strict'
      var n = r(51)
      r.n(n).a
    },
    153: function(e, t, r) {
      ;(e.exports = r(19)(!1)).push([
        e.i,
        '@font-face{font-family:swiper-icons;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(-1*var(--swiper-navigation-size)/2);z-index:10;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-feature-settings:normal,;font-variant:normal}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:"next"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:transform .2s,top .2s;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,left .2s;transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,right .2s;transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite;box-sizing:border-box;border-left:4px solid var(--swiper-theme-color);border-bottom:4px solid var(--swiper-theme-color);border-right:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.header{position:relative;width:100%;z-index:1;background:#c7a164;overflow:visible;padding:20px 0 0;border-bottom:1px solid #959393}.header-warp{max-width:1190px;-webkit-box-pack:justify;justify-content:space-between;margin-left:auto;margin-right:auto;padding-bottom:20px;padding-left:10px;padding-right:10px}.header-logo,.header-warp{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex}.header-logo{-webkit-tap-highlight-color:rgba(0,0,0,0)}.header-logo .logo{margin-right:20px;height:50px}.header-logo .logo img{height:100%}.header-nav{height:50px;line-height:50px;background-color:#000;font-size:16px}.header-nav-warp{max-width:1190px;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;margin-left:auto;margin-right:auto;color:#a2a3a3}.header-nav .line{padding:0 4%;width:2px}.header-nav a{color:#a2a3a3}.header-nav a.nuxt-link-active,.header-nav a:hover{color:#fff}@media (max-width:320px){.header-nav{font-size:14px}}@media (max-width:779px){.header{padding-top:10px}.header-warp{padding-left:20px;padding-bottom:10px}.header-logo .logo{height:35px}.header-nav .line{padding:0 2%}}.banner{background-color:#383635}.banner-warp{max-width:1190px;margin-right:auto;margin-left:auto}.banner-warp img{width:100%}.container{max-width:1190px;margin-right:auto;margin-left:auto;padding:0 10px}',
        ''
      ])
    },
    154: function(e, t, r) {
      'use strict'
      var n = r(52)
      r.n(n).a
    },
    155: function(e, t, r) {
      ;(e.exports = r(19)(!1)).push([
        e.i,
        '.footer[data-v-e38e8d90]{background-color:#000;color:#fff}.footer-warp[data-v-e38e8d90]{max-width:1190px;display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;margin-left:auto;margin-right:auto;padding:60px 0}.footer-info[data-v-e38e8d90]{text-align:right;font-size:14px;margin-right:15px}.footer-info p[data-v-e38e8d90]{margin-bottom:5px}.footer-info a[data-v-e38e8d90]{color:#fff}.footer-info .links a[data-v-e38e8d90]{padding:0 3%}.footer-info .links img[data-v-e38e8d90]{height:25px}.footer-qr[data-v-e38e8d90]{border:1px solid #fff}.footer-qr img[data-v-e38e8d90]{margin:1px;height:130px}@media (min-width:320px) and (max-width:779px){.footer[data-v-e38e8d90]{padding:0 20px}.footer-warp[data-v-e38e8d90]{padding:30px 0;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.footer-info[data-v-e38e8d90]{text-align:center;padding-bottom:20px}}',
        ''
      ])
    },
    156: function(e, t, r) {
      'use strict'
      var n = r(53)
      r.n(n).a
    },
    157: function(e, t, r) {
      ;(e.exports = r(19)(!1)).push([
        e.i,
        '.main[data-v-599b8d34],.main-open[data-v-599b8d34]{-webkit-transition:all .5s ease 0s;transition:all .5s ease 0s}.main-open[data-v-599b8d34]{-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)}',
        ''
      ])
    },
    18: function(e, t, r) {
      'use strict'
      r(44), r(92), r(40), r(35), r(17), r(65)
      var n = r(5),
        o = r(54),
        c = (r(66), r(0)),
        l = r(98),
        d = r(69),
        f = r.n(d),
        h = r(26),
        w = r.n(h),
        m = r(70),
        v = r(1)
      'scrollRestoration' in window.history &&
        ((window.history.scrollRestoration = 'manual'),
        window.addEventListener('beforeunload', function() {
          window.history.scrollRestoration = 'auto'
        }),
        window.addEventListener('load', function() {
          window.history.scrollRestoration = 'manual'
        }))
      c.a.use(m.a)
      var x = {
        mode: 'history',
        base: decodeURI('/'),
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
        scrollBehavior: function(e, t, r) {
          var n = !1,
            o = Object(v.e)(e)
          o.length < 2 &&
          o.every(function(e) {
            return !1 !== e.options.scrollToTop
          })
            ? (n = { x: 0, y: 0 })
            : o.some(function(e) {
                return e.options.scrollToTop
              }) && (n = { x: 0, y: 0 }),
            r && (n = r)
          var c = window.$nuxt
          return (
            e.path === t.path &&
              e.hash !== t.hash &&
              c.$nextTick(function() {
                return c.$emit('triggerScroll')
              }),
            new Promise(function(t) {
              c.$once('triggerScroll', function() {
                if (e.hash) {
                  var r = e.hash
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (r = '#' + window.CSS.escape(r.substr(1)))
                  try {
                    document.querySelector(r) && (n = { selector: r })
                  } catch (e) {
                    console.warn(
                      'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
                    )
                  }
                }
                t(n)
              })
            })
          )
        },
        routes: [
          {
            path: '/aboutus',
            component: function() {
              return Object(v.j)(r.e(2).then(r.bind(null, 174)))
            },
            name: 'aboutus'
          },
          {
            path: '/contact',
            component: function() {
              return Object(v.j)(r.e(4).then(r.bind(null, 175)))
            },
            name: 'contact'
          },
          {
            path: '/team',
            component: function() {
              return Object(v.j)(r.e(6).then(r.bind(null, 176)))
            },
            name: 'team'
          },
          {
            path: '/case/:id?',
            component: function() {
              return Object(v.j)(r.e(3).then(r.bind(null, 177)))
            },
            name: 'case-id'
          },
          {
            path: '/',
            component: function() {
              return Object(v.j)(r.e(5).then(r.bind(null, 178)))
            },
            name: 'index'
          },
          { path: '*', redirect: '/' }
        ],
        fallback: !1
      }
      var A,
        y = {
          name: 'NuxtChild',
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: '' },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 }
          },
          render: function(e, t) {
            var r = t.parent,
              data = t.data,
              n = t.props
            data.nuxtChild = !0
            for (
              var o = r,
                c = r.$nuxt.nuxt.transitions,
                l = r.$nuxt.nuxt.defaultTransition,
                d = 0;
              r;

            )
              r.$vnode && r.$vnode.data.nuxtChild && d++, (r = r.$parent)
            data.nuxtChildDepth = d
            var f = c[d] || l,
              h = {}
            k.forEach(function(e) {
              void 0 !== f[e] && (h[e] = f[e])
            })
            var w = {}
            _.forEach(function(e) {
              'function' == typeof f[e] && (w[e] = f[e].bind(o))
            })
            var m = w.beforeEnter
            if (
              ((w.beforeEnter = function(e) {
                if (
                  (window.$nuxt.$nextTick(function() {
                    window.$nuxt.$emit('triggerScroll')
                  }),
                  m)
                )
                  return m.call(o, e)
              }),
              !1 === f.css)
            ) {
              var v = w.leave
              ;(!v || v.length < 2) &&
                (w.leave = function(e, t) {
                  v && v.call(o, e), o.$nextTick(t)
                })
            }
            var x = e('routerView', data)
            return (
              n.keepAlive &&
                (x = e('keep-alive', { props: n.keepAliveProps }, [x])),
              e('transition', { props: h, on: w }, [x])
            )
          }
        },
        k = [
          'name',
          'mode',
          'appear',
          'css',
          'type',
          'duration',
          'enterClass',
          'leaveClass',
          'appearClass',
          'enterActiveClass',
          'enterActiveClass',
          'leaveActiveClass',
          'appearActiveClass',
          'enterToClass',
          'leaveToClass',
          'appearToClass'
        ],
        _ = [
          'beforeEnter',
          'enter',
          'afterEnter',
          'enterCancelled',
          'beforeLeave',
          'leave',
          'afterLeave',
          'leaveCancelled',
          'beforeAppear',
          'appear',
          'afterAppear',
          'appearCancelled'
        ],
        C = {
          name: 'NuxtError',
          props: { error: { type: Object, default: null } },
          head: function() {
            return {
              title: this.message,
              meta: [
                {
                  name: 'viewport',
                  content:
                    'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
                }
              ]
            }
          },
          computed: {
            statusCode: function() {
              return (this.error && this.error.statusCode) || 500
            },
            message: function() {
              return this.error.message || 'Error'
            }
          }
        },
        O = (r(146), r(8)),
        j = Object(O.a)(
          C,
          function() {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t
            return r('div', { staticClass: '__nuxt-error-page' }, [
              r('div', { staticClass: 'error' }, [
                r(
                  'svg',
                  {
                    attrs: {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '90',
                      height: '90',
                      fill: '#DBE1EC',
                      viewBox: '0 0 48 48'
                    }
                  },
                  [
                    r('path', {
                      attrs: {
                        d:
                          'M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z'
                      }
                    })
                  ]
                ),
                e._v(' '),
                r('div', { staticClass: 'title' }, [e._v(e._s(e.message))]),
                e._v(' '),
                404 === e.statusCode
                  ? r(
                      'p',
                      { staticClass: 'description' },
                      [
                        r(
                          'NuxtLink',
                          { staticClass: 'error-link', attrs: { to: '/' } },
                          [e._v('Back to the home page')]
                        )
                      ],
                      1
                    )
                  : e._e(),
                e._v(' '),
                e._m(0)
              ])
            ])
          },
          [
            function() {
              var e = this.$createElement,
                t = this._self._c || e
              return t('div', { staticClass: 'logo' }, [
                t(
                  'a',
                  {
                    attrs: {
                      href: 'https://nuxtjs.org',
                      target: '_blank',
                      rel: 'noopener'
                    }
                  },
                  [this._v('Nuxt.js')]
                )
              ])
            }
          ],
          !1,
          null,
          null,
          null
        ).exports,
        E = (r(93), r(94), r(95), r(36)),
        $ = {
          name: 'Nuxt',
          components: { NuxtChild: y, NuxtError: j },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: 'default' }
          },
          errorCaptured: function(e) {
            this.displayingNuxtError &&
              ((this.errorFromNuxtError = e), this.$forceUpdate())
          },
          computed: {
            routerViewKey: function() {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(v.b)(this.$route.matched[0].path)(this.$route.params)
                )
              var e = Object(E.a)(this.$route.matched, 1)[0]
              if (!e) return this.$route.path
              var t = e.components.default
              if (t && t.options) {
                var r = t.options
                if (r.key)
                  return 'function' == typeof r.key ? r.key(this.$route) : r.key
              }
              return /\/$/.test(e.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, '')
            }
          },
          beforeCreate: function() {
            c.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt)
          },
          render: function(e) {
            var t = this
            return this.nuxt.err
              ? this.errorFromNuxtError
                ? (this.$nextTick(function() {
                    return (t.errorFromNuxtError = !1)
                  }),
                  e('div', {}, [
                    e('h2', 'An error occured while showing the error page'),
                    e(
                      'p',
                      'Unfortunately an error occured and while showing the error page another error occured'
                    ),
                    e(
                      'p',
                      'Error details: '.concat(
                        this.errorFromNuxtError.toString()
                      )
                    ),
                    e('nuxt-link', { props: { to: '/' } }, 'Go back to home')
                  ]))
                : ((this.displayingNuxtError = !0),
                  this.$nextTick(function() {
                    return (t.displayingNuxtError = !1)
                  }),
                  e(j, { props: { error: this.nuxt.err } }))
              : e('NuxtChild', { key: this.routerViewKey, props: this.$props })
          }
        },
        R =
          (r(56),
          {
            name: 'NuxtLoading',
            data: function() {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1
              }
            },
            computed: {
              left: function() {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? '0px'
                      : 'auto'
                    : this.reversed
                    ? 'auto'
                    : '0px')
                )
              }
            },
            beforeDestroy: function() {
              this.clear()
            },
            methods: {
              clear: function() {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null)
              },
              start: function() {
                var e = this
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function() {
                        return e.startTimer()
                      }, this.throttle))
                    : this.startTimer(),
                  this
                )
              },
              set: function(e) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(e)))),
                  this
                )
              },
              get: function() {
                return this.percent
              },
              increase: function(e) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + e))),
                  this
                )
              },
              decrease: function(e) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - e))),
                  this
                )
              },
              pause: function() {
                return clearInterval(this._timer), this
              },
              resume: function() {
                return this.startTimer(), this
              },
              finish: function() {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                )
              },
              hide: function() {
                var e = this
                return (
                  this.clear(),
                  setTimeout(function() {
                    ;(e.show = !1),
                      e.$nextTick(function() {
                        ;(e.percent = 0), (e.reversed = !1)
                      })
                  }, 500),
                  this
                )
              },
              fail: function() {
                return (this.canSucceed = !1), this
              },
              startTimer: function() {
                var e = this
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function() {
                    e.skipTimerCount > 0
                      ? e.skipTimerCount--
                      : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut),
                        e.continuous &&
                          (e.percent >= 100
                            ? ((e.skipTimerCount = 1),
                              (e.reversed = !e.reversed))
                            : e.percent <= 0 &&
                              ((e.skipTimerCount = 1),
                              (e.reversed = !e.reversed))))
                  }, 100))
              }
            },
            render: function(e) {
              var t = e(!1)
              return (
                this.show &&
                  (t = e('div', {
                    staticClass: 'nuxt-progress',
                    class: {
                      'nuxt-progress-notransition': this.skipTimerCount > 0,
                      'nuxt-progress-failed': !this.canSucceed
                    },
                    style: { width: this.percent + '%', left: this.left }
                  })),
                t
              )
            }
          }),
        B =
          (r(148),
          Object(O.a)(R, void 0, void 0, !1, null, null, null).exports),
        z = (r(150), r(96)),
        N = r.n(z),
        P = {
          name: 'Header',
          data: function() {
            return { swiperVal: null }
          },
          mounted: function() {
            this.createSwiper()
          },
          methods: {
            createSwiper: function() {
              this.swiperVal = new N.a('.swiper-banner', {
                loop: !0,
                autoplay: !0,
                pagination: { el: '.swiper-banner-pagination' }
              })
            }
          }
        },
        header =
          (r(152),
          Object(O.a)(
            P,
            function() {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t
              return r('div', { staticClass: 'main' }, [
                r('header', { staticClass: 'header' }, [
                  e._m(0),
                  e._v(' '),
                  r('nav', { staticClass: 'header-nav' }, [
                    r(
                      'section',
                      { staticClass: 'header-nav-warp' },
                      [
                        r('nuxt-link', { attrs: { to: '/', exact: '' } }, [
                          e._v('首页')
                        ]),
                        e._v(' '),
                        r('span', { staticClass: 'line' }, [e._v('|')]),
                        e._v(' '),
                        r('nuxt-link', { attrs: { to: '/aboutus' } }, [
                          e._v('公司介绍')
                        ]),
                        e._v(' '),
                        r('span', { staticClass: 'line' }, [e._v('|')]),
                        e._v(' '),
                        r('nuxt-link', { attrs: { to: '/case/1' } }, [
                          e._v('案例欣赏')
                        ]),
                        e._v(' '),
                        r('span', { staticClass: 'line' }, [e._v('|')]),
                        e._v(' '),
                        r('nuxt-link', { attrs: { to: '/team' } }, [
                          e._v('团队介绍')
                        ]),
                        e._v(' '),
                        r('span', { staticClass: 'line' }, [e._v('|')]),
                        e._v(' '),
                        r('nuxt-link', { attrs: { to: '/contact' } }, [
                          e._v('联系我们')
                        ])
                      ],
                      1
                    )
                  ])
                ]),
                e._v(' '),
                e._m(1)
              ])
            },
            [
              function() {
                var e = this.$createElement,
                  t = this._self._c || e
                return t('section', { staticClass: 'header-warp' }, [
                  t('a', { staticClass: 'header-logo', attrs: { href: '/' } }, [
                    t('section', { staticClass: 'logo' }, [
                      t('img', {
                        attrs: { src: '/images/header/logo.png', alt: '' }
                      })
                    ])
                  ])
                ])
              },
              function() {
                var e = this.$createElement,
                  t = this._self._c || e
                return t('div', { staticClass: 'banner' }, [
                  t(
                    'div',
                    {
                      staticClass: 'banner-warp swiper-container swiper-banner'
                    },
                    [
                      t('div', { staticClass: 'swiper-wrapper' }, [
                        t('div', { staticClass: 'swiper-slide' }, [
                          t('img', {
                            attrs: {
                              src: '/images/header/banner1.png',
                              alt: 'banner'
                            }
                          })
                        ]),
                        this._v(' '),
                        t('div', { staticClass: 'swiper-slide' }, [
                          t('img', {
                            attrs: {
                              src: '/images/header/banner2.png',
                              alt: 'banner'
                            }
                          })
                        ]),
                        this._v(' '),
                        t('div', { staticClass: 'swiper-slide' }, [
                          t('img', {
                            attrs: {
                              src: '/images/header/banner3.png',
                              alt: 'banner'
                            }
                          })
                        ]),
                        this._v(' '),
                        t('div', { staticClass: 'swiper-slide' }, [
                          t('img', {
                            attrs: {
                              src: '/images/header/banner4.png',
                              alt: 'banner'
                            }
                          })
                        ]),
                        this._v(' '),
                        t('div', { staticClass: 'swiper-slide' }, [
                          t('img', {
                            attrs: {
                              src: '/images/header/banner5.png',
                              alt: 'banner'
                            }
                          })
                        ]),
                        this._v(' '),
                        t('div', { staticClass: 'swiper-slide' }, [
                          t('img', {
                            attrs: {
                              src: '/images/header/banner6.png',
                              alt: 'banner'
                            }
                          })
                        ]),
                        this._v(' '),
                        t('div', { staticClass: 'swiper-slide' }, [
                          t('img', {
                            attrs: {
                              src: '/images/header/banner7.png',
                              alt: 'banner'
                            }
                          })
                        ])
                      ]),
                      this._v(' '),
                      t('div', {
                        staticClass:
                          'swiper-pagination swiper-banner-pagination'
                      })
                    ]
                  )
                ])
              }
            ],
            !1,
            null,
            null,
            null
          ).exports),
        S = { name: 'Footer' },
        Y =
          (r(154),
          {
            components: {
              Header: header,
              Footer: Object(O.a)(
                S,
                function() {
                  var e = this.$createElement
                  this._self._c
                  return this._m(0)
                },
                [
                  function() {
                    var e = this,
                      t = e.$createElement,
                      r = e._self._c || t
                    return r('footer', { staticClass: 'footer' }, [
                      r('div', { staticClass: 'footer-warp' }, [
                        r('section', { staticClass: 'footer-info' }, [
                          r('p', [
                            e._v('电话：'),
                            r('a', { attrs: { href: 'tel:021-65152596' } }, [
                              e._v('021-65152596')
                            ])
                          ]),
                          e._v(' '),
                          r('p', [
                            e._v('手机：'),
                            r('a', { attrs: { href: 'tel:18516102232' } }, [
                              e._v('18516102232')
                            ])
                          ]),
                          e._v(' '),
                          r('p', [
                            e._v('\n        邮箱：'),
                            r(
                              'a',
                              {
                                attrs: {
                                  href: 'mailto:giulia.qin@dkingbrand.com'
                                }
                              },
                              [e._v('giulia.qin@dkingbrand.com')]
                            )
                          ]),
                          e._v(' '),
                          r('p', [
                            e._v('地址：上海市杨浦区大连路990号海上海10号楼')
                          ]),
                          e._v(' '),
                          r('div', { staticClass: 'links' }, [
                            r('a', { attrs: { href: '/' } }, [
                              r('img', {
                                attrs: {
                                  src: '/images/footer/weibo.png',
                                  alt: ''
                                }
                              })
                            ]),
                            e._v(' '),
                            r('a', { attrs: { href: '/' } }, [
                              r('img', {
                                attrs: {
                                  src: '/images/footer/wechat.png',
                                  alt: ''
                                }
                              })
                            ]),
                            e._v(' '),
                            r(
                              'a',
                              {
                                attrs: {
                                  href: 'mailto:giulia.qin@dkingbrand.com'
                                }
                              },
                              [
                                r('img', {
                                  attrs: {
                                    src: '/images/footer/mail.png',
                                    alt: ''
                                  }
                                })
                              ]
                            )
                          ])
                        ]),
                        e._v(' '),
                        r('section', { staticClass: 'footer-qr' }, [
                          r('img', {
                            attrs: { src: '/images/footer/qr.png', alt: '' }
                          })
                        ])
                      ])
                    ])
                  }
                ],
                !1,
                null,
                'e38e8d90',
                null
              ).exports
            },
            data: function() {
              return { isOpenNav: !1 }
            },
            beforeMount: function() {
              var e = this
              this.$bus.$on('closeMenu', function() {
                e.isOpenNav = !1
              })
            },
            beforeDestroy: function() {
              this.$bus.$off('closeMenu')
            },
            methods: {
              handleFoldNav: function(e) {
                this.isOpenNav = e
              }
            }
          }),
        D =
          (r(156),
          {
            _layout: Object(O.a)(
              Y,
              function() {
                var e = this.$createElement,
                  t = this._self._c || e
                return t(
                  'section',
                  [
                    t('Header', { on: { foldNav: this.handleFoldNav } }),
                    this._v(' '),
                    t(
                      'main',
                      {
                        staticClass: 'main',
                        class: [this.isOpenNav ? 'main-open' : '']
                      },
                      [this._t('main', [t('nuxt')])],
                      2
                    ),
                    this._v(' '),
                    t('Footer')
                  ],
                  1
                )
              },
              [],
              !1,
              null,
              '599b8d34',
              null
            ).exports,
            _default: Object(O.a)(
              {},
              function() {
                var e = this.$createElement
                return (this._self._c || e)('Nuxt')
              },
              [],
              !1,
              null,
              null,
              null
            ).exports
          }),
        T = {
          head: {
            title: 'dk website',
            meta: [
              { charset: 'utf-8' },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
              },
              { name: 'Keywords', content: 'dk website' },
              { name: 'Description', content: 'dk website' }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            style: [],
            script: []
          },
          render: function(e, t) {
            var r = e('NuxtLoading', { ref: 'loading' }),
              n = e(this.layout || 'nuxt'),
              o = e(
                'div',
                { domProps: { id: '__layout' }, key: this.layoutName },
                [n]
              ),
              c = e(
                'transition',
                {
                  props: { name: 'layout', mode: 'out-in' },
                  on: {
                    beforeEnter: function(e) {
                      window.$nuxt.$nextTick(function() {
                        window.$nuxt.$emit('triggerScroll')
                      })
                    }
                  }
                },
                [o]
              )
            return e('div', { domProps: { id: '__nuxt' } }, [r, c])
          },
          data: function() {
            return { isOnline: !0, layout: null, layoutName: '' }
          },
          beforeCreate: function() {
            c.a.util.defineReactive(this, 'nuxt', this.$options.nuxt)
          },
          created: function() {
            ;(c.a.prototype.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener('online', this.refreshOnlineStatus),
              window.addEventListener('offline', this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context)
          },
          mounted: function() {
            this.$loading = this.$refs.loading
          },
          watch: { 'nuxt.err': 'errorChanged' },
          computed: {
            isOffline: function() {
              return !this.isOnline
            }
          },
          methods: {
            refreshOnlineStatus: function() {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine)
            },
            refresh:
              ((A = Object(n.a)(
                regeneratorRuntime.mark(function e() {
                  var t,
                    r,
                    n = this
                  return regeneratorRuntime.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((t = Object(v.f)(this.$route)).length) {
                              e.next = 3
                              break
                            }
                            return e.abrupt('return')
                          case 3:
                            return (
                              this.$loading.start(),
                              (r = t.map(function(e) {
                                var p = []
                                return (
                                  e.$options.fetch &&
                                    p.push(
                                      Object(v.m)(e.$options.fetch, n.context)
                                    ),
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(v.m)(
                                        e.$options.asyncData,
                                        n.context
                                      ).then(function(t) {
                                        for (var r in t)
                                          c.a.set(e.$data, r, t[r])
                                      })
                                    ),
                                  Promise.all(p)
                                )
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            )
                          case 8:
                            e.next = 15
                            break
                          case 10:
                            ;(e.prev = 10),
                              (e.t0 = e.catch(5)),
                              this.$loading.fail(),
                              Object(v.i)(e.t0),
                              this.error(e.t0)
                          case 15:
                            this.$loading.finish()
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this,
                    [[5, 10]]
                  )
                })
              )),
              function() {
                return A.apply(this, arguments)
              }),
            errorChanged: function() {
              this.nuxt.err &&
                this.$loading &&
                (this.$loading.fail && this.$loading.fail(),
                this.$loading.finish && this.$loading.finish())
            },
            setLayout: function(e) {
              return (
                (e && D['_' + e]) || (e = 'default'),
                (this.layoutName = e),
                (this.layout = D['_' + e]),
                this.layout
              )
            },
            loadLayout: function(e) {
              return (
                (e && D['_' + e]) || (e = 'default'),
                Promise.resolve(D['_' + e])
              )
            }
          },
          components: { NuxtLoading: B }
        },
        M = r(100),
        L = r.n(M)
      function G(object, e) {
        var t = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object)
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function F(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? G(source, !0).forEach(function(t) {
                Object(o.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : G(source).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                )
              })
        }
        return e
      }
      c.a.use(L.a),
        (c.a.prototype.$bus = new c.a()),
        r.d(t, 'b', function() {
          return I
        }),
        r.d(t, 'a', function() {
          return j
        }),
        c.a.component(f.a.name, f.a),
        c.a.component(
          w.a.name,
          F({}, w.a, {
            render: function(e, t) {
              return (
                w.a._warned ||
                  ((w.a._warned = !0),
                  console.warn(
                    '<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead'
                  )),
                w.a.render(e, t)
              )
            }
          })
        ),
        c.a.component(y.name, y),
        c.a.component('NChild', y),
        c.a.component($.name, $),
        c.a.use(l.a, {
          keyName: 'head',
          attribute: 'data-n-head',
          ssrAttribute: 'data-n-head-ssr',
          tagIDKeyName: 'hid'
        })
      var Q = {
        name: 'page',
        mode: 'out-in',
        appear: !1,
        appearClass: 'appear',
        appearActiveClass: 'appear-active',
        appearToClass: 'appear-to'
      }
      function I(e) {
        return Z.apply(this, arguments)
      }
      function Z() {
        return (Z = Object(n.a)(
          regeneratorRuntime.mark(function e(t) {
            var r, n, o, l, path
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), new m.a(x)
                  case 2:
                    return (
                      (r = e.sent),
                      (n = F(
                        {
                          router: r,
                          nuxt: {
                            defaultTransition: Q,
                            transitions: [Q],
                            setTransitions: function(e) {
                              return (
                                Array.isArray(e) || (e = [e]),
                                (e = e.map(function(e) {
                                  return (e = e
                                    ? 'string' == typeof e
                                      ? Object.assign({}, Q, { name: e })
                                      : Object.assign({}, Q, e)
                                    : Q)
                                })),
                                (this.$options.nuxt.transitions = e),
                                e
                              )
                            },
                            err: null,
                            dateErr: null,
                            error: function(e) {
                              ;(e = e || null),
                                (n.context._errored = Boolean(e)),
                                (e = e ? Object(v.l)(e) : null)
                              var r = this.nuxt || this.$options.nuxt
                              return (
                                (r.dateErr = Date.now()),
                                (r.err = e),
                                t && (t.nuxt.error = e),
                                e
                              )
                            }
                          }
                        },
                        T
                      )),
                      (o = t
                        ? t.next
                        : function(e) {
                            return n.router.push(e)
                          }),
                      t
                        ? (l = r.resolve(t.url).route)
                        : ((path = Object(v.d)(r.options.base)),
                          (l = r.resolve(path).route)),
                      (e.next = 8),
                      Object(v.p)(n, {
                        route: l,
                        next: o,
                        error: n.nuxt.error.bind(n),
                        payload: t ? t.payload : void 0,
                        req: t ? t.req : void 0,
                        res: t ? t.res : void 0,
                        beforeRenderFns: t ? t.beforeRenderFns : void 0,
                        ssrContext: t
                      })
                    )
                  case 8:
                    ;(function(e, t) {
                      if (!e)
                        throw new Error(
                          'inject(key, value) has no key provided'
                        )
                      if (void 0 === t)
                        throw new Error(
                          'inject(key, value) has no value provided'
                        )
                      n[(e = '$' + e)] = t
                      var r = '__nuxt_' + e + '_installed__'
                      c.a[r] ||
                        ((c.a[r] = !0),
                        c.a.use(function() {
                          c.a.prototype.hasOwnProperty(e) ||
                            Object.defineProperty(c.a.prototype, e, {
                              get: function() {
                                return this.$root.$options[e]
                              }
                            })
                        }))
                    },
                      (e.next = 12))
                    break
                  case 12:
                    e.next = 15
                    break
                  case 15:
                    e.next = 18
                    break
                  case 18:
                    return e.abrupt('return', { app: n, router: r })
                  case 19:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
    },
    49: function(e, t, r) {
      var content = r(147)
      'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(20).default)('72daabed', content, !0, { sourceMap: !1 })
    },
    50: function(e, t, r) {
      var content = r(149)
      'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(20).default)('3191d5ad', content, !0, { sourceMap: !1 })
    },
    51: function(e, t, r) {
      var content = r(153)
      'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(20).default)('0cb6f612', content, !0, { sourceMap: !1 })
    },
    52: function(e, t, r) {
      var content = r(155)
      'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(20).default)('77c14196', content, !0, { sourceMap: !1 })
    },
    53: function(e, t, r) {
      var content = r(157)
      'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(20).default)('173cdf58', content, !0, { sourceMap: !1 })
    },
    55: function(e, t, r) {
      'use strict'
      r(17), r(79), r(40), r(35), r(82), r(84)
      var n = r(0),
        o =
          window.requestIdleCallback ||
          function(e) {
            var t = Date.now()
            return setTimeout(function() {
              e({
                didTimeout: !1,
                timeRemaining: function() {
                  return Math.max(0, 50 - (Date.now() - t))
                }
              })
            }, 1)
          },
        c =
          window.cancelIdleCallback ||
          function(e) {
            clearTimeout(e)
          },
        l =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function(e) {
            e.forEach(function(e) {
              var t = e.intersectionRatio,
                link = e.target
              t <= 0 || link.__prefetch()
            })
          })
      t.a = {
        name: 'NuxtLink',
        extends: n.a.component('RouterLink'),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 }
        },
        mounted: function() {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = o(this.observe, { timeout: 2e3 }))
        },
        beforeDestroy: function() {
          c(this.handleId),
            this.__observed &&
              (l.unobserve(this.$el), delete this.$el.__prefetch)
        },
        methods: {
          observe: function() {
            l &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              l.observe(this.$el),
              (this.__observed = !0))
          },
          shouldPrefetch: function() {
            return this.getPrefetchComponents().length > 0
          },
          canPrefetch: function() {
            var e = navigator.connection
            return !(
              this.$nuxt.isOffline ||
              (e && ((e.effectiveType || '').includes('2g') || e.saveData))
            )
          },
          getPrefetchComponents: function() {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function(e) {
                return e.components.default
              })
              .filter(function(e) {
                return 'function' == typeof e && !e.options && !e.__prefetched
              })
          },
          prefetchLink: function() {
            if (this.canPrefetch()) {
              l.unobserve(this.$el)
              var e = this.getPrefetchComponents(),
                t = !0,
                r = !1,
                n = void 0
              try {
                for (
                  var o, c = e[Symbol.iterator]();
                  !(t = (o = c.next()).done);
                  t = !0
                ) {
                  var d = o.value,
                    f = d()
                  f instanceof Promise && f.catch(function() {}),
                    (d.__prefetched = !0)
                }
              } catch (e) {
                ;(r = !0), (n = e)
              } finally {
                try {
                  t || null == c.return || c.return()
                } finally {
                  if (r) throw n
                }
              }
            }
          }
        }
      }
    },
    68: function(e, t, r) {
      'use strict'
      t.a = {}
    }
  },
  [[101, 7, 1, 8]]
])
