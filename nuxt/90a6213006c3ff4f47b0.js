/*! For license information please see LICENSES */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    100: function(e, t, n) {
      'undefined' != typeof self && self,
        (e.exports = (function(e) {
          function i(n) {
            if (t[n]) return t[n].exports
            var r = (t[n] = { i: n, l: !1, exports: {} })
            return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports
          }
          var t = {}
          return (
            (i.m = e),
            (i.c = t),
            (i.d = function(e, t, n) {
              i.o(e, t) ||
                Object.defineProperty(e, t, {
                  configurable: !1,
                  enumerable: !0,
                  get: n
                })
            }),
            (i.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default
                    }
                  : function() {
                      return e
                    }
              return i.d(t, 'a', t), t
            }),
            (i.o = function(e, i) {
              return Object.prototype.hasOwnProperty.call(e, i)
            }),
            (i.p = ''),
            i((i.s = 1))
          )
        })([
          function(e, i, t) {
            'use strict'
            Object.defineProperty(i, '__esModule', { value: !0 }), t(4)()
            var n = t(5),
              r = t(6)
            i.default = {
              name: 'vue-seamless-scroll',
              data: function() {
                return {
                  xPos: 0,
                  yPos: 0,
                  delay: 0,
                  copyHtml: '',
                  height: 0,
                  width: 0,
                  realBoxWidth: 0,
                  reqFrame: null,
                  singleWaitTime: null,
                  isHover: !1
                }
              },
              props: {
                data: {
                  type: Array,
                  default: function() {
                    return []
                  }
                },
                classOption: {
                  type: Object,
                  default: function() {
                    return {}
                  }
                }
              },
              computed: {
                leftSwitchState: function() {
                  return this.xPos < 0
                },
                rightSwitchState: function() {
                  return Math.abs(this.xPos) < this.realBoxWidth - this.width
                },
                leftSwitchClass: function() {
                  return this.leftSwitchState
                    ? ''
                    : this.options.switchDisabledClass
                },
                rightSwitchClass: function() {
                  return this.rightSwitchState
                    ? ''
                    : this.options.switchDisabledClass
                },
                leftSwitch: function() {
                  return {
                    position: 'absolute',
                    margin:
                      this.height / 2 +
                      'px 0 0 -' +
                      this.options.switchOffset +
                      'px',
                    transform: 'translate(-100%,-50%)'
                  }
                },
                rightSwitch: function() {
                  return {
                    position: 'absolute',
                    margin:
                      this.height / 2 +
                      'px 0 0 ' +
                      (this.width + this.options.switchOffset) +
                      'px',
                    transform: 'translateY(-50%)'
                  }
                },
                float: function() {
                  return this.isHorizontal
                    ? { float: 'left', overflow: 'hidden' }
                    : { overflow: 'hidden' }
                },
                pos: function() {
                  return {
                    transform:
                      'translate(' + this.xPos + 'px,' + this.yPos + 'px)',
                    transition:
                      'all ' +
                      (this.ease || 'ease-in') +
                      ' ' +
                      this.delay +
                      'ms',
                    overflow: 'hidden'
                  }
                },
                defaultOption: function() {
                  return {
                    step: 1,
                    limitMoveNum: 5,
                    hoverStop: !0,
                    direction: 1,
                    openTouch: !0,
                    singleHeight: 0,
                    singleWidth: 0,
                    waitTime: 1e3,
                    switchOffset: 30,
                    autoPlay: !0,
                    navigation: !1,
                    switchSingleStep: 134,
                    switchDelay: 400,
                    switchDisabledClass: 'disabled',
                    isSingleRemUnit: !1
                  }
                },
                options: function() {
                  return r({}, this.defaultOption, this.classOption)
                },
                navigation: function() {
                  return this.options.navigation
                },
                autoPlay: function() {
                  return !this.navigation && this.options.autoPlay
                },
                scrollSwitch: function() {
                  return this.data.length >= this.options.limitMoveNum
                },
                hoverStopSwitch: function() {
                  return (
                    this.options.hoverStop && this.autoPlay && this.scrollSwitch
                  )
                },
                canTouchScroll: function() {
                  return this.options.openTouch
                },
                isHorizontal: function() {
                  return this.options.direction > 1
                },
                baseFontSize: function() {
                  return this.options.isSingleRemUnit
                    ? parseInt(
                        window.getComputedStyle(document.documentElement, null)
                          .fontSize
                      )
                    : 1
                },
                realSingleStopWidth: function() {
                  return this.options.singleWidth * this.baseFontSize
                },
                realSingleStopHeight: function() {
                  return this.options.singleHeight * this.baseFontSize
                },
                step: function() {
                  var e = this.options.step
                  return (
                    this.isHorizontal
                      ? this.realSingleStopWidth
                      : this.realSingleStopHeight,
                    e
                  )
                }
              },
              methods: {
                leftSwitchClick: function() {
                  if (this.leftSwitchState)
                    return Math.abs(this.xPos) < this.options.switchSingleStep
                      ? void (this.xPos = 0)
                      : void (this.xPos += this.options.switchSingleStep)
                },
                rightSwitchClick: function() {
                  if (this.rightSwitchState)
                    return this.realBoxWidth - this.width + this.xPos <
                      this.options.switchSingleStep
                      ? void (this.xPos = this.width - this.realBoxWidth)
                      : void (this.xPos -= this.options.switchSingleStep)
                },
                _cancle: function() {
                  cancelAnimationFrame(this.reqFrame || '')
                },
                touchStart: function(e) {
                  var i = this
                  if (this.canTouchScroll) {
                    var t = void 0,
                      n = e.targetTouches[0],
                      r = this.options,
                      s = r.waitTime,
                      o = r.singleHeight,
                      a = r.singleWidth
                    ;(this.startPos = { x: n.pageX, y: n.pageY }),
                      (this.startPosY = this.yPos),
                      (this.startPosX = this.xPos),
                      o && a
                        ? (t && clearTimeout(t),
                          (t = setTimeout(function() {
                            i._cancle()
                          }, s + 20)))
                        : this._cancle()
                  }
                },
                touchMove: function(e) {
                  if (
                    !(
                      !this.canTouchScroll ||
                      e.targetTouches.length > 1 ||
                      (e.scale && 1 !== e.scale)
                    )
                  ) {
                    var i = e.targetTouches[0],
                      t = this.options.direction
                    ;(this.endPos = {
                      x: i.pageX - this.startPos.x,
                      y: i.pageY - this.startPos.y
                    }),
                      event.preventDefault()
                    var n =
                      Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1 : 0
                    1 === n && t < 2
                      ? (this.yPos = this.startPosY + this.endPos.y)
                      : 0 === n &&
                        t > 1 &&
                        (this.xPos = this.startPosX + this.endPos.x)
                  }
                },
                touchEnd: function() {
                  var e = this
                  if (this.canTouchScroll) {
                    var i = void 0,
                      t = this.options.direction
                    if (((this.delay = 50), 1 === t))
                      this.yPos > 0 && (this.yPos = 0)
                    else if (0 === t) {
                      var n = (this.realBoxHeight / 2) * -1
                      this.yPos < n && (this.yPos = n)
                    } else if (2 === t) this.xPos > 0 && (this.xPos = 0)
                    else if (3 === t) {
                      var r = -1 * this.realBoxWidth
                      this.xPos < r && (this.xPos = r)
                    }
                    i && clearTimeout(i),
                      (i = setTimeout(function() {
                        ;(e.delay = 0), e._move()
                      }, this.delay))
                  }
                },
                enter: function() {
                  this.hoverStopSwitch &&
                    ((this.isHover = !0),
                    this.singleWaitTime && clearTimeout(this.singleWaitTime),
                    this._cancle())
                },
                leave: function() {
                  this.hoverStopSwitch && ((this.isHover = !1), this._move())
                },
                _move: function() {
                  this.isHover ||
                    (this._cancle(),
                    (this.reqFrame = requestAnimationFrame(
                      function() {
                        var e = this,
                          i = this.realBoxHeight / 2,
                          t = this.realBoxWidth / 2,
                          n = this.options,
                          r = n.direction,
                          s = n.waitTime,
                          o = this.step
                        1 === r
                          ? (Math.abs(this.yPos) >= i &&
                              (this.$emit('ScrollEnd'), (this.yPos = 0)),
                            (this.yPos -= o))
                          : 0 === r
                          ? (this.yPos >= 0 &&
                              (this.$emit('ScrollEnd'), (this.yPos = -1 * i)),
                            (this.yPos += o))
                          : 2 === r
                          ? (Math.abs(this.xPos) >= t &&
                              (this.$emit('ScrollEnd'), (this.xPos = 0)),
                            (this.xPos -= o))
                          : 3 === r &&
                            (this.xPos >= 0 &&
                              (this.$emit('ScrollEnd'), (this.xPos = -1 * t)),
                            (this.xPos += o)),
                          this.singleWaitTime &&
                            clearTimeout(this.singleWaitTime),
                          this.realSingleStopHeight
                            ? Math.abs(this.yPos) % this.realSingleStopHeight <
                              o
                              ? (this.singleWaitTime = setTimeout(function() {
                                  e._move()
                                }, s))
                              : this._move()
                            : this.realSingleStopWidth &&
                              Math.abs(this.xPos) % this.realSingleStopWidth < o
                            ? (this.singleWaitTime = setTimeout(function() {
                                e._move()
                              }, s))
                            : this._move()
                      }.bind(this)
                    )))
                },
                _initMove: function() {
                  var e = this
                  this.$nextTick(function() {
                    e._dataWarm(e.data),
                      (e.copyHtml = ''),
                      (e.height = e.$refs.wrap.offsetHeight),
                      (e.width = e.$refs.wrap.offsetWidth)
                    var i = e.$refs.slotList.offsetWidth,
                      t = e.options.switchDelay,
                      n = e.autoPlay
                    if (
                      (e.isHorizontal && n && (i = 2 * i + 1),
                      (e.$refs.realBox.style.width = i + 'px'),
                      (e.realBoxWidth = i),
                      !n)
                    )
                      return (e.ease = 'linear'), void (e.delay = t)
                    e.scrollSwitch
                      ? ((e.copyHtml = e.$refs.slotList.innerHTML),
                        setTimeout(function() {
                          ;(e.realBoxHeight = e.$refs.realBox.offsetHeight),
                            e._move()
                        }, 0))
                      : (e._cancle(), (e.yPos = e.xPos = 0))
                  })
                },
                _dataWarm: function(e) {
                  e.length
                }
              },
              mounted: function() {
                this._initMove()
              },
              watch: {
                data: function(e, i) {
                  this._dataWarm(e),
                    n(e, i) || (this._cancle(), this._initMove())
                }
              },
              beforeDestroy: function() {
                this._cancle()
              }
            }
          },
          function(e, i, t) {
            'use strict'
            Object.defineProperty(i, '__esModule', { value: !0 })
            var n = (function(e) {
              return e && e.__esModule ? e : { default: e }
            })(t(2))
            ;(n.default.install = function(e) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              e.component(i.componentName || n.default.name, n.default)
            }),
              'undefined' != typeof window &&
                window.Vue &&
                Vue.component(n.default.name, n.default),
              (i.default = n.default)
          },
          function(e, i, t) {
            'use strict'
            Object.defineProperty(i, '__esModule', { value: !0 })
            var n = t(0),
              r = t.n(n)
            for (var s in n)
              'default' !== s &&
                (function(e) {
                  t.d(i, e, function() {
                    return n[e]
                  })
                })(s)
            var o = t(7),
              l = t(3)(r.a, o.a, !1, null, null, null)
            i.default = l.exports
          },
          function(e, i) {
            e.exports = function(e, i, t, n, r, s) {
              var o,
                a = (e = e || {}),
                l = typeof e.default
              ;('object' !== l && 'function' !== l) ||
                ((o = e), (a = e.default))
              var d,
                h = 'function' == typeof a ? a.options : a
              if (
                (i &&
                  ((h.render = i.render),
                  (h.staticRenderFns = i.staticRenderFns),
                  (h._compiled = !0)),
                t && (h.functional = !0),
                r && (h._scopeId = r),
                s
                  ? ((d = function(e) {
                      ;(e =
                        e ||
                        (this.$vnode && this.$vnode.ssrContext) ||
                        (this.parent &&
                          this.parent.$vnode &&
                          this.parent.$vnode.ssrContext)) ||
                        'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                        (e = __VUE_SSR_CONTEXT__),
                        n && n.call(this, e),
                        e &&
                          e._registeredComponents &&
                          e._registeredComponents.add(s)
                    }),
                    (h._ssrRegister = d))
                  : n && (d = n),
                d)
              ) {
                var u = h.functional,
                  c = u ? h.render : h.beforeCreate
                u
                  ? ((h._injectStyles = d),
                    (h.render = function(e, i) {
                      return d.call(i), c(e, i)
                    }))
                  : (h.beforeCreate = c ? [].concat(c, d) : [d])
              }
              return { esModule: o, exports: a, options: h }
            }
          },
          function(e, i) {
            e.exports = function() {
              ;(window.cancelAnimationFrame =
                window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.oCancelAnimationFrame ||
                window.msCancelAnimationFrame ||
                function(e) {
                  return window.clearTimeout(e)
                }),
                (window.requestAnimationFrame =
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function(e) {
                    return window.setTimeout(e, 1e3 / 60)
                  })
            }
          },
          function(e, i) {
            e.exports = function(e, i) {
              if (e === i) return !0
              if (e.length !== i.length) return !1
              for (var t = 0; t < e.length; ++t) if (e[t] !== i[t]) return !1
              return !0
            }
          },
          function(e, i) {
            var t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function(e) {
                    return typeof e
                  }
                : function(e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }
            e.exports = function e() {
              Array.isArray ||
                (Array.isArray = function(e) {
                  return '[object Array]' === Object.prototype.toString.call(e)
                })
              var n = void 0,
                i = void 0,
                r = void 0,
                s = void 0,
                o = void 0,
                a = void 0,
                l = 1,
                d = arguments[0] || {},
                h = !1,
                u = arguments.length
              if (
                ('boolean' == typeof d &&
                  ((h = d), (d = arguments[1] || {}), l++),
                'object' !== (void 0 === d ? 'undefined' : t(d)) &&
                  'function' != typeof d &&
                  (d = {}),
                l === u)
              )
                return d
              for (; l < u; l++)
                if (null != (i = arguments[l]))
                  for (n in i)
                    (r = d[n]),
                      (s = i[n]),
                      (o = Array.isArray(s)),
                      h &&
                      s &&
                      ('object' === (void 0 === s ? 'undefined' : t(s)) || o)
                        ? (o
                            ? ((o = !1), (a = r && Array.isArray(r) ? r : []))
                            : (a =
                                r &&
                                'object' === (void 0 === r ? 'undefined' : t(r))
                                  ? r
                                  : {}),
                          (d[n] = e(h, a, s)))
                        : void 0 !== s && (d[n] = s)
              return d
            }
          },
          function(e, i, t) {
            'use strict'
            var s = {
              render: function() {
                var e = this,
                  i = e.$createElement,
                  t = e._self._c || i
                return t('div', { ref: 'wrap' }, [
                  e.navigation
                    ? t(
                        'div',
                        {
                          class: e.leftSwitchClass,
                          style: e.leftSwitch,
                          on: { click: e.leftSwitchClick }
                        },
                        [e._t('left-switch')],
                        2
                      )
                    : e._e(),
                  e._v(' '),
                  e.navigation
                    ? t(
                        'div',
                        {
                          class: e.rightSwitchClass,
                          style: e.rightSwitch,
                          on: { click: e.rightSwitchClick }
                        },
                        [e._t('right-switch')],
                        2
                      )
                    : e._e(),
                  e._v(' '),
                  t(
                    'div',
                    {
                      ref: 'realBox',
                      style: e.pos,
                      on: {
                        mouseenter: e.enter,
                        mouseleave: e.leave,
                        touchstart: e.touchStart,
                        touchmove: e.touchMove,
                        touchend: e.touchEnd
                      }
                    },
                    [
                      t(
                        'div',
                        { ref: 'slotList', style: e.float },
                        [e._t('default')],
                        2
                      ),
                      e._v(' '),
                      t('div', {
                        style: e.float,
                        domProps: { innerHTML: e._s(e.copyHtml) }
                      })
                    ]
                  )
                ])
              },
              staticRenderFns: []
            }
            i.a = s
          }
        ]).default)
    },
    19: function(e, t, n) {
      'use strict'
      e.exports = function(e) {
        var t = []
        return (
          (t.toString = function() {
            return this.map(function(t) {
              var content = (function(e, t) {
                var content = e[1] || '',
                  n = e[3]
                if (!n) return content
                if (t && 'function' == typeof btoa) {
                  var r =
                      ((l = n),
                      (d = btoa(
                        unescape(encodeURIComponent(JSON.stringify(l)))
                      )),
                      (data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        d
                      )),
                      '/*# '.concat(data, ' */')),
                    o = n.sources.map(function(source) {
                      return '/*# sourceURL='
                        .concat(n.sourceRoot)
                        .concat(source, ' */')
                    })
                  return [content]
                    .concat(o)
                    .concat([r])
                    .join('\n')
                }
                var l, d, data
                return [content].join('\n')
              })(t, e)
              return t[2]
                ? '@media '.concat(t[2], '{').concat(content, '}')
                : content
            }).join('')
          }),
          (t.i = function(e, n) {
            'string' == typeof e && (e = [[null, e, '']])
            for (var r = {}, i = 0; i < this.length; i++) {
              var o = this[i][0]
              null != o && (r[o] = !0)
            }
            for (var l = 0; l < e.length; l++) {
              var d = e[l]
              ;(null != d[0] && r[d[0]]) ||
                (n && !d[2]
                  ? (d[2] = n)
                  : n && (d[2] = '('.concat(d[2], ') and (').concat(n, ')')),
                t.push(d))
            }
          }),
          t
        )
      }
    },
    20: function(e, t, n) {
      'use strict'
      function r(e, t) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
          var o = t[i],
            l = o[0],
            d = { id: e + ':' + i, css: o[1], media: o[2], sourceMap: o[3] }
          r[l] ? r[l].parts.push(d) : n.push((r[l] = { id: l, parts: [d] }))
        }
        return n
      }
      n.r(t),
        n.d(t, 'default', function() {
          return y
        })
      var o = 'undefined' != typeof document
      if ('undefined' != typeof DEBUG && DEBUG && !o)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        )
      var l = {},
        head = o && (document.head || document.getElementsByTagName('head')[0]),
        d = null,
        h = 0,
        c = !1,
        f = function() {},
        v = null,
        m = 'data-vue-ssr-id',
        w =
          'undefined' != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
      function y(e, t, n, o) {
        ;(c = n), (v = o || {})
        var d = r(e, t)
        return (
          x(d),
          function(t) {
            for (var n = [], i = 0; i < d.length; i++) {
              var o = d[i]
              ;(h = l[o.id]).refs--, n.push(h)
            }
            t ? x((d = r(e, t))) : (d = [])
            for (i = 0; i < n.length; i++) {
              var h
              if (0 === (h = n[i]).refs) {
                for (var c = 0; c < h.parts.length; c++) h.parts[c]()
                delete l[h.id]
              }
            }
          }
        )
      }
      function x(e) {
        for (var i = 0; i < e.length; i++) {
          var t = e[i],
            n = l[t.id]
          if (n) {
            n.refs++
            for (var r = 0; r < n.parts.length; r++) n.parts[r](t.parts[r])
            for (; r < t.parts.length; r++) n.parts.push(S(t.parts[r]))
            n.parts.length > t.parts.length && (n.parts.length = t.parts.length)
          } else {
            var o = []
            for (r = 0; r < t.parts.length; r++) o.push(S(t.parts[r]))
            l[t.id] = { id: t.id, refs: 1, parts: o }
          }
        }
      }
      function T() {
        var e = document.createElement('style')
        return (e.type = 'text/css'), head.appendChild(e), e
      }
      function S(e) {
        var t,
          n,
          r = document.querySelector('style[' + m + '~="' + e.id + '"]')
        if (r) {
          if (c) return f
          r.parentNode.removeChild(r)
        }
        if (w) {
          var o = h++
          ;(r = d || (d = T())),
            (t = M.bind(null, r, o, !1)),
            (n = M.bind(null, r, o, !0))
        } else
          (r = T()),
            (t = P.bind(null, r)),
            (n = function() {
              r.parentNode.removeChild(r)
            })
        return (
          t(e),
          function(r) {
            if (r) {
              if (
                r.css === e.css &&
                r.media === e.media &&
                r.sourceMap === e.sourceMap
              )
                return
              t((e = r))
            } else n()
          }
        )
      }
      var E,
        C =
          ((E = []),
          function(e, t) {
            return (E[e] = t), E.filter(Boolean).join('\n')
          })
      function M(e, t, n, r) {
        var o = n ? '' : r.css
        if (e.styleSheet) e.styleSheet.cssText = C(t, o)
        else {
          var l = document.createTextNode(o),
            d = e.childNodes
          d[t] && e.removeChild(d[t]),
            d.length ? e.insertBefore(l, d[t]) : e.appendChild(l)
        }
      }
      function P(e, t) {
        var n = t.css,
          r = t.media,
          o = t.sourceMap
        if (
          (r && e.setAttribute('media', r),
          v.ssrId && e.setAttribute(m, t.id),
          o &&
            ((n += '\n/*# sourceURL=' + o.sources[0] + ' */'),
            (n +=
              '\n/*# sourceMappingURL=data:application/json;base64,' +
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
              ' */')),
          e.styleSheet)
        )
          e.styleSheet.cssText = n
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild)
          e.appendChild(document.createTextNode(n))
        }
      }
    },
    26: function(e, t, n) {
      'use strict'
      var r = {
        name: 'NoSsr',
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: 'div' }
        },
        render: function(e, t) {
          var n = t.parent,
            r = t.slots,
            o = t.props,
            l = r(),
            d = l.default
          void 0 === d && (d = [])
          var h = l.placeholder
          return n._isMounted
            ? d
            : (n.$once('hook:mounted', function() {
                n.$forceUpdate()
              }),
              o.placeholderTag && (o.placeholder || h)
                ? e(
                    o.placeholderTag,
                    { class: ['no-ssr-placeholder'] },
                    o.placeholder || h
                  )
                : d.length > 0
                ? d.map(function() {
                    return e(!1)
                  })
                : e(!1))
        }
      }
      e.exports = r
    },
    69: function(e, t, n) {
      'use strict'
      var r = {
        name: 'ClientOnly',
        functional: !0,
        props: {
          placeholder: String,
          placeholderTag: { type: String, default: 'div' }
        },
        render: function(e, t) {
          var n = t.parent,
            r = t.slots,
            o = t.props,
            l = r(),
            d = l.default
          void 0 === d && (d = [])
          var h = l.placeholder
          return n._isMounted
            ? d
            : (n.$once('hook:mounted', function() {
                n.$forceUpdate()
              }),
              o.placeholderTag && (o.placeholder || h)
                ? e(
                    o.placeholderTag,
                    { class: ['client-only-placeholder'] },
                    o.placeholder || h
                  )
                : d.length > 0
                ? d.map(function() {
                    return e(!1)
                  })
                : e(!1))
        }
      }
      e.exports = r
    },
    96: function(e, t, n) {
      e.exports = (function() {
        'use strict'
        var e =
            'undefined' == typeof document
              ? {
                  body: {},
                  addEventListener: function() {},
                  removeEventListener: function() {},
                  activeElement: { blur: function() {}, nodeName: '' },
                  querySelector: function() {
                    return null
                  },
                  querySelectorAll: function() {
                    return []
                  },
                  getElementById: function() {
                    return null
                  },
                  createEvent: function() {
                    return { initEvent: function() {} }
                  },
                  createElement: function() {
                    return {
                      children: [],
                      childNodes: [],
                      style: {},
                      setAttribute: function() {},
                      getElementsByTagName: function() {
                        return []
                      }
                    }
                  },
                  location: { hash: '' }
                }
              : document,
          t =
            'undefined' == typeof window
              ? {
                  document: e,
                  navigator: { userAgent: '' },
                  location: {},
                  history: {},
                  CustomEvent: function() {
                    return this
                  },
                  addEventListener: function() {},
                  removeEventListener: function() {},
                  getComputedStyle: function() {
                    return {
                      getPropertyValue: function() {
                        return ''
                      }
                    }
                  },
                  Image: function() {},
                  Date: function() {},
                  screen: {},
                  setTimeout: function() {},
                  clearTimeout: function() {}
                }
              : window,
          i = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t]
            return (this.length = e.length), this
          }
        function s(s, a) {
          var n = [],
            r = 0
          if (s && !a && s instanceof i) return s
          if (s)
            if ('string' == typeof s) {
              var o,
                l,
                d = s.trim()
              if (d.indexOf('<') >= 0 && d.indexOf('>') >= 0) {
                var h = 'div'
                for (
                  0 === d.indexOf('<li') && (h = 'ul'),
                    0 === d.indexOf('<tr') && (h = 'tbody'),
                    (0 !== d.indexOf('<td') && 0 !== d.indexOf('<th')) ||
                      (h = 'tr'),
                    0 === d.indexOf('<tbody') && (h = 'table'),
                    0 === d.indexOf('<option') && (h = 'select'),
                    (l = e.createElement(h)).innerHTML = d,
                    r = 0;
                  r < l.childNodes.length;
                  r += 1
                )
                  n.push(l.childNodes[r])
              } else
                for (
                  o =
                    a || '#' !== s[0] || s.match(/[ .<>:~]/)
                      ? (a || e).querySelectorAll(s.trim())
                      : [e.getElementById(s.trim().split('#')[1])],
                    r = 0;
                  r < o.length;
                  r += 1
                )
                  o[r] && n.push(o[r])
            } else if (s.nodeType || s === t || s === e) n.push(s)
            else if (s.length > 0 && s[0].nodeType)
              for (r = 0; r < s.length; r += 1) n.push(s[r])
          return new i(n)
        }
        function a(e) {
          for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i])
          return t
        }
        ;(s.fn = i.prototype), (s.Class = i), (s.Dom7 = i)
        var n = {
          addClass: function(e) {
            if (void 0 === e) return this
            for (var t = e.split(' '), i = 0; i < t.length; i += 1)
              for (var s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.add(t[i])
            return this
          },
          removeClass: function(e) {
            for (var t = e.split(' '), i = 0; i < t.length; i += 1)
              for (var s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.remove(t[i])
            return this
          },
          hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
          },
          toggleClass: function(e) {
            for (var t = e.split(' '), i = 0; i < t.length; i += 1)
              for (var s = 0; s < this.length; s += 1)
                void 0 !== this[s] &&
                  void 0 !== this[s].classList &&
                  this[s].classList.toggle(t[i])
            return this
          },
          attr: function(e, t) {
            var i = arguments
            if (1 === arguments.length && 'string' == typeof e)
              return this[0] ? this[0].getAttribute(e) : void 0
            for (var s = 0; s < this.length; s += 1)
              if (2 === i.length) this[s].setAttribute(e, t)
              else
                for (var a in e)
                  (this[s][a] = e[a]), this[s].setAttribute(a, e[a])
            return this
          },
          removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e)
            return this
          },
          data: function(e, t) {
            var i
            if (void 0 !== t) {
              for (var s = 0; s < this.length; s += 1)
                (i = this[s]).dom7ElementDataStorage ||
                  (i.dom7ElementDataStorage = {}),
                  (i.dom7ElementDataStorage[e] = t)
              return this
            }
            if ((i = this[0]))
              return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage
                ? i.dom7ElementDataStorage[e]
                : i.getAttribute('data-' + e) || void 0
          },
          transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
              var i = this[t].style
              ;(i.webkitTransform = e), (i.transform = e)
            }
            return this
          },
          transition: function(e) {
            'string' != typeof e && (e += 'ms')
            for (var t = 0; t < this.length; t += 1) {
              var i = this[t].style
              ;(i.webkitTransitionDuration = e), (i.transitionDuration = e)
            }
            return this
          },
          on: function() {
            for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i]
            var a = t[0],
              n = t[1],
              r = t[2],
              o = t[3]
            function l(e) {
              var t = e.target
              if (t) {
                var i = e.target.dom7EventData || []
                if ((i.indexOf(e) < 0 && i.unshift(e), s(t).is(n)))
                  r.apply(t, i)
                else
                  for (var a = s(t).parents(), o = 0; o < a.length; o += 1)
                    s(a[o]).is(n) && r.apply(a[o], i)
              }
            }
            function d(e) {
              var t = (e && e.target && e.target.dom7EventData) || []
              t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            'function' == typeof t[1] &&
              ((a = (e = t)[0]), (r = e[1]), (o = e[2]), (n = void 0)),
              o || (o = !1)
            for (var h, p = a.split(' '), c = 0; c < this.length; c += 1) {
              var u = this[c]
              if (n)
                for (h = 0; h < p.length; h += 1) {
                  var f = p[h]
                  u.dom7LiveListeners || (u.dom7LiveListeners = {}),
                    u.dom7LiveListeners[f] || (u.dom7LiveListeners[f] = []),
                    u.dom7LiveListeners[f].push({
                      listener: r,
                      proxyListener: l
                    }),
                    u.addEventListener(f, l, o)
                }
              else
                for (h = 0; h < p.length; h += 1) {
                  var v = p[h]
                  u.dom7Listeners || (u.dom7Listeners = {}),
                    u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
                    u.dom7Listeners[v].push({ listener: r, proxyListener: d }),
                    u.addEventListener(v, d, o)
                }
            }
            return this
          },
          off: function() {
            for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i]
            var s = t[0],
              a = t[1],
              n = t[2],
              r = t[3]
            'function' == typeof t[1] &&
              ((s = (e = t)[0]), (n = e[1]), (r = e[2]), (a = void 0)),
              r || (r = !1)
            for (var o = s.split(' '), l = 0; l < o.length; l += 1)
              for (var d = o[l], h = 0; h < this.length; h += 1) {
                var p = this[h],
                  c = void 0
                if (
                  (!a && p.dom7Listeners
                    ? (c = p.dom7Listeners[d])
                    : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
                  c && c.length)
                )
                  for (var u = c.length - 1; u >= 0; u -= 1) {
                    var f = c[u]
                    n && f.listener === n
                      ? (p.removeEventListener(d, f.proxyListener, r),
                        c.splice(u, 1))
                      : n &&
                        f.listener &&
                        f.listener.dom7proxy &&
                        f.listener.dom7proxy === n
                      ? (p.removeEventListener(d, f.proxyListener, r),
                        c.splice(u, 1))
                      : n ||
                        (p.removeEventListener(d, f.proxyListener, r),
                        c.splice(u, 1))
                  }
              }
            return this
          },
          trigger: function() {
            for (var i = [], s = arguments.length; s--; ) i[s] = arguments[s]
            for (var a = i[0].split(' '), n = i[1], r = 0; r < a.length; r += 1)
              for (var o = a[r], l = 0; l < this.length; l += 1) {
                var d = this[l],
                  h = void 0
                try {
                  h = new t.CustomEvent(o, {
                    detail: n,
                    bubbles: !0,
                    cancelable: !0
                  })
                } catch (t) {
                  ;(h = e.createEvent('Event')).initEvent(o, !0, !0),
                    (h.detail = n)
                }
                ;(d.dom7EventData = i.filter(function(e, t) {
                  return t > 0
                })),
                  d.dispatchEvent(h),
                  (d.dom7EventData = []),
                  delete d.dom7EventData
              }
            return this
          },
          transitionEnd: function(e) {
            var t,
              i = ['webkitTransitionEnd', 'transitionend'],
              s = this
            function a(n) {
              if (n.target === this)
                for (e.call(this, n), t = 0; t < i.length; t += 1)
                  s.off(i[t], a)
            }
            if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a)
            return this
          },
          outerWidth: function(e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles()
                return (
                  this[0].offsetWidth +
                  parseFloat(t.getPropertyValue('margin-right')) +
                  parseFloat(t.getPropertyValue('margin-left'))
                )
              }
              return this[0].offsetWidth
            }
            return null
          },
          outerHeight: function(e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles()
                return (
                  this[0].offsetHeight +
                  parseFloat(t.getPropertyValue('margin-top')) +
                  parseFloat(t.getPropertyValue('margin-bottom'))
                )
              }
              return this[0].offsetHeight
            }
            return null
          },
          offset: function() {
            if (this.length > 0) {
              var i = this[0],
                s = i.getBoundingClientRect(),
                a = e.body,
                n = i.clientTop || a.clientTop || 0,
                r = i.clientLeft || a.clientLeft || 0,
                o = i === t ? t.scrollY : i.scrollTop,
                l = i === t ? t.scrollX : i.scrollLeft
              return { top: s.top + o - n, left: s.left + l - r }
            }
            return null
          },
          css: function(e, i) {
            var s
            if (1 === arguments.length) {
              if ('string' != typeof e) {
                for (s = 0; s < this.length; s += 1)
                  for (var a in e) this[s].style[a] = e[a]
                return this
              }
              if (this[0])
                return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && 'string' == typeof e) {
              for (s = 0; s < this.length; s += 1) this[s].style[e] = i
              return this
            }
            return this
          },
          each: function(e) {
            if (!e) return this
            for (var t = 0; t < this.length; t += 1)
              if (!1 === e.call(this[t], t, this[t])) return this
            return this
          },
          html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e
            return this
          },
          text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e
            return this
          },
          is: function(a) {
            var n,
              r,
              o = this[0]
            if (!o || void 0 === a) return !1
            if ('string' == typeof a) {
              if (o.matches) return o.matches(a)
              if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a)
              if (o.msMatchesSelector) return o.msMatchesSelector(a)
              for (n = s(a), r = 0; r < n.length; r += 1)
                if (n[r] === o) return !0
              return !1
            }
            if (a === e) return o === e
            if (a === t) return o === t
            if (a.nodeType || a instanceof i) {
              for (n = a.nodeType ? [a] : a, r = 0; r < n.length; r += 1)
                if (n[r] === o) return !0
              return !1
            }
            return !1
          },
          index: function() {
            var e,
              t = this[0]
            if (t) {
              for (e = 0; null !== (t = t.previousSibling); )
                1 === t.nodeType && (e += 1)
              return e
            }
          },
          eq: function(e) {
            if (void 0 === e) return this
            var t,
              s = this.length
            return new i(
              e > s - 1
                ? []
                : e < 0
                ? (t = s + e) < 0
                  ? []
                  : [this[t]]
                : [this[e]]
            )
          },
          append: function() {
            for (var t, s = [], a = arguments.length; a--; ) s[a] = arguments[a]
            for (var n = 0; n < s.length; n += 1) {
              t = s[n]
              for (var r = 0; r < this.length; r += 1)
                if ('string' == typeof t) {
                  var o = e.createElement('div')
                  for (o.innerHTML = t; o.firstChild; )
                    this[r].appendChild(o.firstChild)
                } else if (t instanceof i)
                  for (var l = 0; l < t.length; l += 1)
                    this[r].appendChild(t[l])
                else this[r].appendChild(t)
            }
            return this
          },
          prepend: function(t) {
            var s, a
            for (s = 0; s < this.length; s += 1)
              if ('string' == typeof t) {
                var n = e.createElement('div')
                for (
                  n.innerHTML = t, a = n.childNodes.length - 1;
                  a >= 0;
                  a -= 1
                )
                  this[s].insertBefore(n.childNodes[a], this[s].childNodes[0])
              } else if (t instanceof i)
                for (a = 0; a < t.length; a += 1)
                  this[s].insertBefore(t[a], this[s].childNodes[0])
              else this[s].insertBefore(t, this[s].childNodes[0])
            return this
          },
          next: function(e) {
            return this.length > 0
              ? e
                ? this[0].nextElementSibling &&
                  s(this[0].nextElementSibling).is(e)
                  ? new i([this[0].nextElementSibling])
                  : new i([])
                : this[0].nextElementSibling
                ? new i([this[0].nextElementSibling])
                : new i([])
              : new i([])
          },
          nextAll: function(e) {
            var t = [],
              a = this[0]
            if (!a) return new i([])
            for (; a.nextElementSibling; ) {
              var n = a.nextElementSibling
              e ? s(n).is(e) && t.push(n) : t.push(n), (a = n)
            }
            return new i(t)
          },
          prev: function(e) {
            if (this.length > 0) {
              var t = this[0]
              return e
                ? t.previousElementSibling && s(t.previousElementSibling).is(e)
                  ? new i([t.previousElementSibling])
                  : new i([])
                : t.previousElementSibling
                ? new i([t.previousElementSibling])
                : new i([])
            }
            return new i([])
          },
          prevAll: function(e) {
            var t = [],
              a = this[0]
            if (!a) return new i([])
            for (; a.previousElementSibling; ) {
              var n = a.previousElementSibling
              e ? s(n).is(e) && t.push(n) : t.push(n), (a = n)
            }
            return new i(t)
          },
          parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
              null !== this[i].parentNode &&
                (e
                  ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode)
                  : t.push(this[i].parentNode))
            return s(a(t))
          },
          parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
              for (var n = this[i].parentNode; n; )
                e ? s(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode)
            return s(a(t))
          },
          closest: function(e) {
            var t = this
            return void 0 === e
              ? new i([])
              : (t.is(e) || (t = t.parents(e).eq(0)), t)
          },
          find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
              for (
                var a = this[s].querySelectorAll(e), n = 0;
                n < a.length;
                n += 1
              )
                t.push(a[n])
            return new i(t)
          },
          children: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
              for (var r = this[n].childNodes, o = 0; o < r.length; o += 1)
                e
                  ? 1 === r[o].nodeType && s(r[o]).is(e) && t.push(r[o])
                  : 1 === r[o].nodeType && t.push(r[o])
            return new i(a(t))
          },
          filter: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
              e.call(this[s], s, this[s]) && t.push(this[s])
            return new i(t)
          },
          remove: function() {
            for (var e = 0; e < this.length; e += 1)
              this[e].parentNode && this[e].parentNode.removeChild(this[e])
            return this
          },
          add: function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            var i, a
            for (i = 0; i < e.length; i += 1) {
              var n = s(e[i])
              for (a = 0; a < n.length; a += 1)
                (this[this.length] = n[a]), (this.length += 1)
            }
            return this
          },
          styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
          }
        }
        Object.keys(n).forEach(function(e) {
          s.fn[e] = s.fn[e] || n[e]
        })
        var r = {
            deleteProps: function(e) {
              var t = e
              Object.keys(t).forEach(function(e) {
                try {
                  t[e] = null
                } catch (e) {}
                try {
                  delete t[e]
                } catch (e) {}
              })
            },
            nextTick: function(e, t) {
              return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
              return Date.now()
            },
            getTranslate: function(e, i) {
              var s, a, n
              void 0 === i && (i = 'x')
              var r = t.getComputedStyle(e, null)
              return (
                t.WebKitCSSMatrix
                  ? ((a = r.transform || r.webkitTransform).split(',').length >
                      6 &&
                      (a = a
                        .split(', ')
                        .map(function(e) {
                          return e.replace(',', '.')
                        })
                        .join(', ')),
                    (n = new t.WebKitCSSMatrix('none' === a ? '' : a)))
                  : (s = (n =
                      r.MozTransform ||
                      r.OTransform ||
                      r.MsTransform ||
                      r.msTransform ||
                      r.transform ||
                      r
                        .getPropertyValue('transform')
                        .replace('translate(', 'matrix(1, 0, 0, 1,'))
                      .toString()
                      .split(',')),
                'x' === i &&
                  (a = t.WebKitCSSMatrix
                    ? n.m41
                    : 16 === s.length
                    ? parseFloat(s[12])
                    : parseFloat(s[4])),
                'y' === i &&
                  (a = t.WebKitCSSMatrix
                    ? n.m42
                    : 16 === s.length
                    ? parseFloat(s[13])
                    : parseFloat(s[5])),
                a || 0
              )
            },
            parseUrlQuery: function(e) {
              var i,
                s,
                a,
                n,
                r = {},
                o = e || t.location.href
              if ('string' == typeof o && o.length)
                for (
                  n = (s = (o =
                    o.indexOf('?') > -1 ? o.replace(/\S*\?/, '') : '')
                    .split('&')
                    .filter(function(e) {
                      return '' !== e
                    })).length,
                    i = 0;
                  i < n;
                  i += 1
                )
                  (a = s[i].replace(/#\S+/g, '').split('=')),
                    (r[decodeURIComponent(a[0])] =
                      void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || '')
              return r
            },
            isObject: function(e) {
              return (
                'object' == typeof e &&
                null !== e &&
                e.constructor &&
                e.constructor === Object
              )
            },
            extend: function() {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
              for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s]
                if (null != a)
                  for (
                    var n = Object.keys(Object(a)), o = 0, l = n.length;
                    o < l;
                    o += 1
                  ) {
                    var d = n[o],
                      h = Object.getOwnPropertyDescriptor(a, d)
                    void 0 !== h &&
                      h.enumerable &&
                      (r.isObject(i[d]) && r.isObject(a[d])
                        ? r.extend(i[d], a[d])
                        : !r.isObject(i[d]) && r.isObject(a[d])
                        ? ((i[d] = {}), r.extend(i[d], a[d]))
                        : (i[d] = a[d]))
                  }
              }
              return i
            }
          },
          o = {
            touch:
              (t.Modernizr && !0 === t.Modernizr.touch) ||
              !!(
                t.navigator.maxTouchPoints > 0 ||
                'ontouchstart' in t ||
                (t.DocumentTouch && e instanceof t.DocumentTouch)
              ),
            pointerEvents:
              !!t.PointerEvent &&
              'maxTouchPoints' in t.navigator &&
              t.navigator.maxTouchPoints > 0,
            observer: 'MutationObserver' in t || 'WebkitMutationObserver' in t,
            passiveListener: (function() {
              var e = !1
              try {
                var i = Object.defineProperty({}, 'passive', {
                  get: function() {
                    e = !0
                  }
                })
                t.addEventListener('testPassiveListener', null, i)
              } catch (e) {}
              return e
            })(),
            gestures: 'ongesturestart' in t
          },
          l = function(e) {
            void 0 === e && (e = {})
            var t = this
            ;(t.params = e),
              (t.eventsListeners = {}),
              t.params &&
                t.params.on &&
                Object.keys(t.params.on).forEach(function(e) {
                  t.on(e, t.params.on[e])
                })
          },
          d = { components: { configurable: !0 } }
        ;(l.prototype.on = function(e, t, i) {
          var s = this
          if ('function' != typeof t) return s
          var a = i ? 'unshift' : 'push'
          return (
            e.split(' ').forEach(function(e) {
              s.eventsListeners[e] || (s.eventsListeners[e] = []),
                s.eventsListeners[e][a](t)
            }),
            s
          )
        }),
          (l.prototype.once = function(e, t, i) {
            var s = this
            if ('function' != typeof t) return s
            function a() {
              for (var i = [], n = arguments.length; n--; ) i[n] = arguments[n]
              t.apply(s, i), s.off(e, a), a.f7proxy && delete a.f7proxy
            }
            return (a.f7proxy = t), s.on(e, a, i)
          }),
          (l.prototype.off = function(e, t) {
            var i = this
            return i.eventsListeners
              ? (e.split(' ').forEach(function(e) {
                  void 0 === t
                    ? (i.eventsListeners[e] = [])
                    : i.eventsListeners[e] &&
                      i.eventsListeners[e].length &&
                      i.eventsListeners[e].forEach(function(s, a) {
                        ;(s === t || (s.f7proxy && s.f7proxy === t)) &&
                          i.eventsListeners[e].splice(a, 1)
                      })
                }),
                i)
              : i
          }),
          (l.prototype.emit = function() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t]
            var i,
              s,
              a,
              n = this
            if (!n.eventsListeners) return n
            'string' == typeof e[0] || Array.isArray(e[0])
              ? ((i = e[0]), (s = e.slice(1, e.length)), (a = n))
              : ((i = e[0].events), (s = e[0].data), (a = e[0].context || n))
            var r = Array.isArray(i) ? i : i.split(' ')
            return (
              r.forEach(function(e) {
                if (n.eventsListeners && n.eventsListeners[e]) {
                  var t = []
                  n.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                  }),
                    t.forEach(function(e) {
                      e.apply(a, s)
                    })
                }
              }),
              n
            )
          }),
          (l.prototype.useModulesParams = function(e) {
            var t = this
            t.modules &&
              Object.keys(t.modules).forEach(function(i) {
                var s = t.modules[i]
                s.params && r.extend(e, s.params)
              })
          }),
          (l.prototype.useModules = function(e) {
            void 0 === e && (e = {})
            var t = this
            t.modules &&
              Object.keys(t.modules).forEach(function(i) {
                var s = t.modules[i],
                  a = e[i] || {}
                s.instance &&
                  Object.keys(s.instance).forEach(function(e) {
                    var i = s.instance[e]
                    t[e] = 'function' == typeof i ? i.bind(t) : i
                  }),
                  s.on &&
                    t.on &&
                    Object.keys(s.on).forEach(function(e) {
                      t.on(e, s.on[e])
                    }),
                  s.create && s.create.bind(t)(a)
              })
          }),
          (d.components.set = function(e) {
            this.use && this.use(e)
          }),
          (l.installModule = function(e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; )
              t[i] = arguments[i + 1]
            var s = this
            s.prototype.modules || (s.prototype.modules = {})
            var a =
              e.name || Object.keys(s.prototype.modules).length + '_' + r.now()
            return (
              (s.prototype.modules[a] = e),
              e.proto &&
                Object.keys(e.proto).forEach(function(t) {
                  s.prototype[t] = e.proto[t]
                }),
              e.static &&
                Object.keys(e.static).forEach(function(t) {
                  s[t] = e.static[t]
                }),
              e.install && e.install.apply(s, t),
              s
            )
          }),
          (l.use = function(e) {
            for (var t = [], i = arguments.length - 1; i-- > 0; )
              t[i] = arguments[i + 1]
            var s = this
            return Array.isArray(e)
              ? (e.forEach(function(e) {
                  return s.installModule(e)
                }),
                s)
              : s.installModule.apply(s, [e].concat(t))
          }),
          Object.defineProperties(l, d)
        var h,
          g,
          b,
          c,
          f,
          v,
          m,
          w,
          y,
          x,
          T,
          S,
          E,
          C,
          M,
          P = {
            updateSize: function() {
              var e,
                t,
                i = this.$el
              ;(e =
                void 0 !== this.params.width
                  ? this.params.width
                  : i[0].clientWidth),
                (t =
                  void 0 !== this.params.height
                    ? this.params.height
                    : i[0].clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt(i.css('padding-left'), 10) -
                    parseInt(i.css('padding-right'), 10)),
                  (t =
                    t -
                    parseInt(i.css('padding-top'), 10) -
                    parseInt(i.css('padding-bottom'), 10)),
                  r.extend(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t
                  }))
            },
            updateSlides: function() {
              var e = this.params,
                i = this.$wrapperEl,
                s = this.size,
                a = this.rtlTranslate,
                n = this.wrongRTL,
                o = this.virtual && e.virtual.enabled,
                l = o ? this.virtual.slides.length : this.slides.length,
                d = i.children('.' + this.params.slideClass),
                h = o ? this.virtual.slides.length : d.length,
                p = [],
                c = [],
                u = []
              function f(t) {
                return !e.cssMode || t !== d.length - 1
              }
              var v = e.slidesOffsetBefore
              'function' == typeof v && (v = e.slidesOffsetBefore.call(this))
              var m = e.slidesOffsetAfter
              'function' == typeof m && (m = e.slidesOffsetAfter.call(this))
              var g = this.snapGrid.length,
                b = this.snapGrid.length,
                w = e.spaceBetween,
                y = -v,
                x = 0,
                T = 0
              if (void 0 !== s) {
                var S, E
                'string' == typeof w &&
                  w.indexOf('%') >= 0 &&
                  (w = (parseFloat(w.replace('%', '')) / 100) * s),
                  (this.virtualSize = -w),
                  a
                    ? d.css({ marginLeft: '', marginTop: '' })
                    : d.css({ marginRight: '', marginBottom: '' }),
                  e.slidesPerColumn > 1 &&
                    ((S =
                      Math.floor(h / e.slidesPerColumn) ===
                      h / this.params.slidesPerColumn
                        ? h
                        : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn),
                    'auto' !== e.slidesPerView &&
                      'row' === e.slidesPerColumnFill &&
                      (S = Math.max(S, e.slidesPerView * e.slidesPerColumn)))
                for (
                  var C,
                    M = e.slidesPerColumn,
                    P = S / M,
                    z = Math.floor(h / e.slidesPerColumn),
                    k = 0;
                  k < h;
                  k += 1
                ) {
                  E = 0
                  var $ = d.eq(k)
                  if (e.slidesPerColumn > 1) {
                    var L = void 0,
                      I = void 0,
                      O = void 0
                    if (
                      'row' === e.slidesPerColumnFill &&
                      e.slidesPerGroup > 1
                    ) {
                      var D = Math.floor(
                          k / (e.slidesPerGroup * e.slidesPerColumn)
                        ),
                        A = k - e.slidesPerColumn * e.slidesPerGroup * D,
                        H =
                          0 === D
                            ? e.slidesPerGroup
                            : Math.min(
                                Math.ceil((h - D * M * e.slidesPerGroup) / M),
                                e.slidesPerGroup
                              )
                      ;(L =
                        (I =
                          A -
                          (O = Math.floor(A / H)) * H +
                          D * e.slidesPerGroup) +
                        (O * S) / M),
                        $.css({
                          '-webkit-box-ordinal-group': L,
                          '-moz-box-ordinal-group': L,
                          '-ms-flex-order': L,
                          '-webkit-order': L,
                          order: L
                        })
                    } else
                      'column' === e.slidesPerColumnFill
                        ? ((O = k - (I = Math.floor(k / M)) * M),
                          (I > z || (I === z && O === M - 1)) &&
                            (O += 1) >= M &&
                            ((O = 0), (I += 1)))
                        : (I = k - (O = Math.floor(k / P)) * P)
                    $.css(
                      'margin-' + (this.isHorizontal() ? 'top' : 'left'),
                      0 !== O && e.spaceBetween && e.spaceBetween + 'px'
                    )
                  }
                  if ('none' !== $.css('display')) {
                    if ('auto' === e.slidesPerView) {
                      var B = t.getComputedStyle($[0], null),
                        N = $[0].style.transform,
                        G = $[0].style.webkitTransform
                      if (
                        (N && ($[0].style.transform = 'none'),
                        G && ($[0].style.webkitTransform = 'none'),
                        e.roundLengths)
                      )
                        E = this.isHorizontal()
                          ? $.outerWidth(!0)
                          : $.outerHeight(!0)
                      else if (this.isHorizontal()) {
                        var X = parseFloat(B.getPropertyValue('width')),
                          V = parseFloat(B.getPropertyValue('padding-left')),
                          Y = parseFloat(B.getPropertyValue('padding-right')),
                          F = parseFloat(B.getPropertyValue('margin-left')),
                          W = parseFloat(B.getPropertyValue('margin-right')),
                          R = B.getPropertyValue('box-sizing')
                        E =
                          R && 'border-box' === R
                            ? X + F + W
                            : X + V + Y + F + W
                      } else {
                        var q = parseFloat(B.getPropertyValue('height')),
                          j = parseFloat(B.getPropertyValue('padding-top')),
                          _ = parseFloat(B.getPropertyValue('padding-bottom')),
                          U = parseFloat(B.getPropertyValue('margin-top')),
                          K = parseFloat(B.getPropertyValue('margin-bottom')),
                          J = B.getPropertyValue('box-sizing')
                        E =
                          J && 'border-box' === J
                            ? q + U + K
                            : q + j + _ + U + K
                      }
                      N && ($[0].style.transform = N),
                        G && ($[0].style.webkitTransform = G),
                        e.roundLengths && (E = Math.floor(E))
                    } else
                      (E = (s - (e.slidesPerView - 1) * w) / e.slidesPerView),
                        e.roundLengths && (E = Math.floor(E)),
                        d[k] &&
                          (this.isHorizontal()
                            ? (d[k].style.width = E + 'px')
                            : (d[k].style.height = E + 'px'))
                    d[k] && (d[k].swiperSlideSize = E),
                      u.push(E),
                      e.centeredSlides
                        ? ((y = y + E / 2 + x / 2 + w),
                          0 === x && 0 !== k && (y = y - s / 2 - w),
                          0 === k && (y = y - s / 2 - w),
                          Math.abs(y) < 0.001 && (y = 0),
                          e.roundLengths && (y = Math.floor(y)),
                          T % e.slidesPerGroup == 0 && p.push(y),
                          c.push(y))
                        : (e.roundLengths && (y = Math.floor(y)),
                          T % e.slidesPerGroup == 0 && p.push(y),
                          c.push(y),
                          (y = y + E + w)),
                      (this.virtualSize += E + w),
                      (x = E),
                      (T += 1)
                  }
                }
                if (
                  ((this.virtualSize = Math.max(this.virtualSize, s) + m),
                  a &&
                    n &&
                    ('slide' === e.effect || 'coverflow' === e.effect) &&
                    i.css({ width: this.virtualSize + e.spaceBetween + 'px' }),
                  e.setWrapperSize &&
                    (this.isHorizontal()
                      ? i.css({
                          width: this.virtualSize + e.spaceBetween + 'px'
                        })
                      : i.css({
                          height: this.virtualSize + e.spaceBetween + 'px'
                        })),
                  e.slidesPerColumn > 1 &&
                    ((this.virtualSize = (E + e.spaceBetween) * S),
                    (this.virtualSize =
                      Math.ceil(this.virtualSize / e.slidesPerColumn) -
                      e.spaceBetween),
                    this.isHorizontal()
                      ? i.css({
                          width: this.virtualSize + e.spaceBetween + 'px'
                        })
                      : i.css({
                          height: this.virtualSize + e.spaceBetween + 'px'
                        }),
                    e.centeredSlides))
                ) {
                  C = []
                  for (var Z = 0; Z < p.length; Z += 1) {
                    var Q = p[Z]
                    e.roundLengths && (Q = Math.floor(Q)),
                      p[Z] < this.virtualSize + p[0] && C.push(Q)
                  }
                  p = C
                }
                if (!e.centeredSlides) {
                  C = []
                  for (var ee = 0; ee < p.length; ee += 1) {
                    var te = p[ee]
                    e.roundLengths && (te = Math.floor(te)),
                      p[ee] <= this.virtualSize - s && C.push(te)
                  }
                  ;(p = C),
                    Math.floor(this.virtualSize - s) -
                      Math.floor(p[p.length - 1]) >
                      1 && p.push(this.virtualSize - s)
                }
                if (
                  (0 === p.length && (p = [0]),
                  0 !== e.spaceBetween &&
                    (this.isHorizontal()
                      ? a
                        ? d.filter(f).css({ marginLeft: w + 'px' })
                        : d.filter(f).css({ marginRight: w + 'px' })
                      : d.filter(f).css({ marginBottom: w + 'px' })),
                  e.centeredSlides && e.centeredSlidesBounds)
                ) {
                  var ie = 0
                  u.forEach(function(t) {
                    ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                  })
                  var se = (ie -= e.spaceBetween) - s
                  p = p.map(function(e) {
                    return e < 0 ? -v : e > se ? se + m : e
                  })
                }
                if (e.centerInsufficientSlides) {
                  var ae = 0
                  if (
                    (u.forEach(function(t) {
                      ae += t + (e.spaceBetween ? e.spaceBetween : 0)
                    }),
                    (ae -= e.spaceBetween) < s)
                  ) {
                    var ne = (s - ae) / 2
                    p.forEach(function(e, t) {
                      p[t] = e - ne
                    }),
                      c.forEach(function(e, t) {
                        c[t] = e + ne
                      })
                  }
                }
                r.extend(this, {
                  slides: d,
                  snapGrid: p,
                  slidesGrid: c,
                  slidesSizesGrid: u
                }),
                  h !== l && this.emit('slidesLengthChange'),
                  p.length !== g &&
                    (this.params.watchOverflow && this.checkOverflow(),
                    this.emit('snapGridLengthChange')),
                  c.length !== b && this.emit('slidesGridLengthChange'),
                  (e.watchSlidesProgress || e.watchSlidesVisibility) &&
                    this.updateSlidesOffset()
              }
            },
            updateAutoHeight: function(e) {
              var t,
                i = [],
                s = 0
              if (
                ('number' == typeof e
                  ? this.setTransition(e)
                  : !0 === e && this.setTransition(this.params.speed),
                'auto' !== this.params.slidesPerView &&
                  this.params.slidesPerView > 1)
              )
                for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                  var a = this.activeIndex + t
                  if (a > this.slides.length) break
                  i.push(this.slides.eq(a)[0])
                }
              else i.push(this.slides.eq(this.activeIndex)[0])
              for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                  var n = i[t].offsetHeight
                  s = n > s ? n : s
                }
              s && this.$wrapperEl.css('height', s + 'px')
            },
            updateSlidesOffset: function() {
              for (var e = this.slides, t = 0; t < e.length; t += 1)
                e[t].swiperSlideOffset = this.isHorizontal()
                  ? e[t].offsetLeft
                  : e[t].offsetTop
            },
            updateSlidesProgress: function(e) {
              void 0 === e && (e = (this && this.translate) || 0)
              var t = this.params,
                i = this.slides,
                a = this.rtlTranslate
              if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset()
                var n = -e
                a && (n = e),
                  i.removeClass(t.slideVisibleClass),
                  (this.visibleSlidesIndexes = []),
                  (this.visibleSlides = [])
                for (var r = 0; r < i.length; r += 1) {
                  var o = i[r],
                    l =
                      (n +
                        (t.centeredSlides ? this.minTranslate() : 0) -
                        o.swiperSlideOffset) /
                      (o.swiperSlideSize + t.spaceBetween)
                  if (t.watchSlidesVisibility) {
                    var d = -(n - o.swiperSlideOffset),
                      h = d + this.slidesSizesGrid[r]
                    ;((d >= 0 && d < this.size - 1) ||
                      (h > 1 && h <= this.size) ||
                      (d <= 0 && h >= this.size)) &&
                      (this.visibleSlides.push(o),
                      this.visibleSlidesIndexes.push(r),
                      i.eq(r).addClass(t.slideVisibleClass))
                  }
                  o.progress = a ? -l : l
                }
                this.visibleSlides = s(this.visibleSlides)
              }
            },
            updateProgress: function(e) {
              if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1
                e = (this && this.translate && this.translate * t) || 0
              }
              var i = this.params,
                s = this.maxTranslate() - this.minTranslate(),
                a = this.progress,
                n = this.isBeginning,
                o = this.isEnd,
                l = n,
                d = o
              0 === s
                ? ((a = 0), (n = !0), (o = !0))
                : ((n = (a = (e - this.minTranslate()) / s) <= 0),
                  (o = a >= 1)),
                r.extend(this, { progress: a, isBeginning: n, isEnd: o }),
                (i.watchSlidesProgress || i.watchSlidesVisibility) &&
                  this.updateSlidesProgress(e),
                n && !l && this.emit('reachBeginning toEdge'),
                o && !d && this.emit('reachEnd toEdge'),
                ((l && !n) || (d && !o)) && this.emit('fromEdge'),
                this.emit('progress', a)
            },
            updateSlidesClasses: function() {
              var e,
                t = this.slides,
                i = this.params,
                s = this.$wrapperEl,
                a = this.activeIndex,
                n = this.realIndex,
                r = this.virtual && i.virtual.enabled
              t.removeClass(
                i.slideActiveClass +
                  ' ' +
                  i.slideNextClass +
                  ' ' +
                  i.slidePrevClass +
                  ' ' +
                  i.slideDuplicateActiveClass +
                  ' ' +
                  i.slideDuplicateNextClass +
                  ' ' +
                  i.slideDuplicatePrevClass
              ),
                (e = r
                  ? this.$wrapperEl.find(
                      '.' +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        a +
                        '"]'
                    )
                  : t.eq(a)).addClass(i.slideActiveClass),
                i.loop &&
                  (e.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          '.' +
                            i.slideClass +
                            ':not(.' +
                            i.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            n +
                            '"]'
                        )
                        .addClass(i.slideDuplicateActiveClass)
                    : s
                        .children(
                          '.' +
                            i.slideClass +
                            '.' +
                            i.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            n +
                            '"]'
                        )
                        .addClass(i.slideDuplicateActiveClass))
              var o = e
                .nextAll('.' + i.slideClass)
                .eq(0)
                .addClass(i.slideNextClass)
              i.loop &&
                0 === o.length &&
                (o = t.eq(0)).addClass(i.slideNextClass)
              var l = e
                .prevAll('.' + i.slideClass)
                .eq(0)
                .addClass(i.slidePrevClass)
              i.loop &&
                0 === l.length &&
                (l = t.eq(-1)).addClass(i.slidePrevClass),
                i.loop &&
                  (o.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          '.' +
                            i.slideClass +
                            ':not(.' +
                            i.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            o.attr('data-swiper-slide-index') +
                            '"]'
                        )
                        .addClass(i.slideDuplicateNextClass)
                    : s
                        .children(
                          '.' +
                            i.slideClass +
                            '.' +
                            i.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            o.attr('data-swiper-slide-index') +
                            '"]'
                        )
                        .addClass(i.slideDuplicateNextClass),
                  l.hasClass(i.slideDuplicateClass)
                    ? s
                        .children(
                          '.' +
                            i.slideClass +
                            ':not(.' +
                            i.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            l.attr('data-swiper-slide-index') +
                            '"]'
                        )
                        .addClass(i.slideDuplicatePrevClass)
                    : s
                        .children(
                          '.' +
                            i.slideClass +
                            '.' +
                            i.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            l.attr('data-swiper-slide-index') +
                            '"]'
                        )
                        .addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
              var t,
                i = this.rtlTranslate ? this.translate : -this.translate,
                s = this.slidesGrid,
                a = this.snapGrid,
                n = this.params,
                o = this.activeIndex,
                l = this.realIndex,
                d = this.snapIndex,
                h = e
              if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1)
                  void 0 !== s[p + 1]
                    ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2
                      ? (h = p)
                      : i >= s[p] && i < s[p + 1] && (h = p + 1)
                    : i >= s[p] && (h = p)
                n.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
              }
              if (
                ((t =
                  a.indexOf(i) >= 0
                    ? a.indexOf(i)
                    : Math.floor(h / n.slidesPerGroup)) >= a.length &&
                  (t = a.length - 1),
                h !== o)
              ) {
                var c = parseInt(
                  this.slides.eq(h).attr('data-swiper-slide-index') || h,
                  10
                )
                r.extend(this, {
                  snapIndex: t,
                  realIndex: c,
                  previousIndex: o,
                  activeIndex: h
                }),
                  this.emit('activeIndexChange'),
                  this.emit('snapIndexChange'),
                  l !== c && this.emit('realIndexChange'),
                  (this.initialized || this.runCallbacksOnInit) &&
                    this.emit('slideChange')
              } else
                t !== d && ((this.snapIndex = t), this.emit('snapIndexChange'))
            },
            updateClickedSlide: function(e) {
              var t = this.params,
                i = s(e.target).closest('.' + t.slideClass)[0],
                a = !1
              if (i)
                for (var n = 0; n < this.slides.length; n += 1)
                  this.slides[n] === i && (a = !0)
              if (!i || !a)
                return (
                  (this.clickedSlide = void 0),
                  void (this.clickedIndex = void 0)
                )
              ;(this.clickedSlide = i),
                this.virtual && this.params.virtual.enabled
                  ? (this.clickedIndex = parseInt(
                      s(i).attr('data-swiper-slide-index'),
                      10
                    ))
                  : (this.clickedIndex = s(i).index()),
                t.slideToClickedSlide &&
                  void 0 !== this.clickedIndex &&
                  this.clickedIndex !== this.activeIndex &&
                  this.slideToClickedSlide()
            }
          },
          p = {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? 'x' : 'y')
              var t = this.params,
                i = this.rtlTranslate,
                s = this.translate,
                a = this.$wrapperEl
              if (t.virtualTranslate) return i ? -s : s
              if (t.cssMode) return s
              var n = r.getTranslate(a[0], e)
              return i && (n = -n), n || 0
            },
            setTranslate: function(e, t) {
              var i = this.rtlTranslate,
                s = this.params,
                a = this.$wrapperEl,
                n = this.wrapperEl,
                r = this.progress,
                o = 0,
                l = 0
              this.isHorizontal() ? (o = i ? -e : e) : (l = e),
                s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                s.cssMode
                  ? (n[
                      this.isHorizontal() ? 'scrollLeft' : 'scrollTop'
                    ] = this.isHorizontal() ? -o : -l)
                  : s.virtualTranslate ||
                    a.transform('translate3d(' + o + 'px, ' + l + 'px, 0px)'),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? o : l)
              var d = this.maxTranslate() - this.minTranslate()
              ;(0 === d ? 0 : (e - this.minTranslate()) / d) !== r &&
                this.updateProgress(e),
                this.emit('setTranslate', this.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, i, s, a) {
              var n
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0)
              var r = this,
                o = r.params,
                l = r.wrapperEl
              if (r.animating && o.preventInteractionOnTransition) return !1
              var d,
                h = r.minTranslate(),
                p = r.maxTranslate()
              if (
                ((d = s && e > h ? h : s && e < p ? p : e),
                r.updateProgress(d),
                o.cssMode)
              ) {
                var c = r.isHorizontal()
                return (
                  0 === t
                    ? (l[c ? 'scrollLeft' : 'scrollTop'] = -d)
                    : l.scrollTo
                    ? l.scrollTo(
                        (((n = {})[c ? 'left' : 'top'] = -d),
                        (n.behavior = 'smooth'),
                        n)
                      )
                    : (l[c ? 'scrollLeft' : 'scrollTop'] = -d),
                  !0
                )
              }
              return (
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(d),
                    i &&
                      (r.emit('beforeTransitionStart', t, a),
                      r.emit('transitionEnd')))
                  : (r.setTransition(t),
                    r.setTranslate(d),
                    i &&
                      (r.emit('beforeTransitionStart', t, a),
                      r.emit('transitionStart')),
                    r.animating ||
                      ((r.animating = !0),
                      r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function(e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                              'transitionend',
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              'webkitTransitionEnd',
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            i && r.emit('transitionEnd'))
                        }),
                      r.$wrapperEl[0].addEventListener(
                        'transitionend',
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].addEventListener(
                        'webkitTransitionEnd',
                        r.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              )
            }
          },
          u = {
            slideTo: function(e, t, i, s) {
              var a
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0)
              var n = this,
                r = e
              r < 0 && (r = 0)
              var o = n.params,
                l = n.snapGrid,
                d = n.slidesGrid,
                h = n.previousIndex,
                p = n.activeIndex,
                c = n.rtlTranslate,
                u = n.wrapperEl
              if (n.animating && o.preventInteractionOnTransition) return !1
              var f = Math.floor(r / o.slidesPerGroup)
              f >= l.length && (f = l.length - 1),
                (p || o.initialSlide || 0) === (h || 0) &&
                  i &&
                  n.emit('beforeSlideChangeStart')
              var v,
                m = -l[f]
              if ((n.updateProgress(m), o.normalizeSlideIndex))
                for (var g = 0; g < d.length; g += 1)
                  -Math.floor(100 * m) >= Math.floor(100 * d[g]) && (r = g)
              if (n.initialized && r !== p) {
                if (
                  !n.allowSlideNext &&
                  m < n.translate &&
                  m < n.minTranslate()
                )
                  return !1
                if (
                  !n.allowSlidePrev &&
                  m > n.translate &&
                  m > n.maxTranslate() &&
                  (p || 0) !== r
                )
                  return !1
              }
              if (
                ((v = r > p ? 'next' : r < p ? 'prev' : 'reset'),
                (c && -m === n.translate) || (!c && m === n.translate))
              )
                return (
                  n.updateActiveIndex(r),
                  o.autoHeight && n.updateAutoHeight(),
                  n.updateSlidesClasses(),
                  'slide' !== o.effect && n.setTranslate(m),
                  'reset' !== v &&
                    (n.transitionStart(i, v), n.transitionEnd(i, v)),
                  !1
                )
              if (o.cssMode) {
                var b = n.isHorizontal()
                return (
                  0 === t
                    ? (u[b ? 'scrollLeft' : 'scrollTop'] = -m)
                    : u.scrollTo
                    ? u.scrollTo(
                        (((a = {})[b ? 'left' : 'top'] = -m),
                        (a.behavior = 'smooth'),
                        a)
                      )
                    : (u[b ? 'scrollLeft' : 'scrollTop'] = -m),
                  !0
                )
              }
              return (
                0 === t
                  ? (n.setTransition(0),
                    n.setTranslate(m),
                    n.updateActiveIndex(r),
                    n.updateSlidesClasses(),
                    n.emit('beforeTransitionStart', t, s),
                    n.transitionStart(i, v),
                    n.transitionEnd(i, v))
                  : (n.setTransition(t),
                    n.setTranslate(m),
                    n.updateActiveIndex(r),
                    n.updateSlidesClasses(),
                    n.emit('beforeTransitionStart', t, s),
                    n.transitionStart(i, v),
                    n.animating ||
                      ((n.animating = !0),
                      n.onSlideToWrapperTransitionEnd ||
                        (n.onSlideToWrapperTransitionEnd = function(e) {
                          n &&
                            !n.destroyed &&
                            e.target === this &&
                            (n.$wrapperEl[0].removeEventListener(
                              'transitionend',
                              n.onSlideToWrapperTransitionEnd
                            ),
                            n.$wrapperEl[0].removeEventListener(
                              'webkitTransitionEnd',
                              n.onSlideToWrapperTransitionEnd
                            ),
                            (n.onSlideToWrapperTransitionEnd = null),
                            delete n.onSlideToWrapperTransitionEnd,
                            n.transitionEnd(i, v))
                        }),
                      n.$wrapperEl[0].addEventListener(
                        'transitionend',
                        n.onSlideToWrapperTransitionEnd
                      ),
                      n.$wrapperEl[0].addEventListener(
                        'webkitTransitionEnd',
                        n.onSlideToWrapperTransitionEnd
                      ))),
                !0
              )
            },
            slideToLoop: function(e, t, i, s) {
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0)
              var a = e
              return (
                this.params.loop && (a += this.loopedSlides),
                this.slideTo(a, t, i, s)
              )
            },
            slideNext: function(e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0)
              var s = this.params,
                a = this.animating
              return s.loop
                ? !a &&
                    (this.loopFix(),
                    (this._clientLeft = this.$wrapperEl[0].clientLeft),
                    this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i))
                : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
            },
            slidePrev: function(e, t, i) {
              void 0 === e && (e = this.params.speed), void 0 === t && (t = !0)
              var s = this.params,
                a = this.animating,
                n = this.snapGrid,
                r = this.slidesGrid,
                o = this.rtlTranslate
              if (s.loop) {
                if (a) return !1
                this.loopFix(),
                  (this._clientLeft = this.$wrapperEl[0].clientLeft)
              }
              function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
              }
              var d,
                h = l(o ? this.translate : -this.translate),
                p = n.map(function(e) {
                  return l(e)
                }),
                c =
                  (r.map(function(e) {
                    return l(e)
                  }),
                  n[p.indexOf(h)],
                  n[p.indexOf(h) - 1])
              return (
                void 0 === c &&
                  s.cssMode &&
                  n.forEach(function(e) {
                    !c && h >= e && (c = e)
                  }),
                void 0 !== c &&
                  (d = r.indexOf(c)) < 0 &&
                  (d = this.activeIndex - 1),
                this.slideTo(d, e, t, i)
              )
            },
            slideReset: function(e, t, i) {
              return (
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                this.slideTo(this.activeIndex, e, t, i)
              )
            },
            slideToClosest: function(e, t, i, s) {
              void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === s && (s = 0.5)
              var a = this.activeIndex,
                n = Math.floor(a / this.params.slidesPerGroup),
                r = this.rtlTranslate ? this.translate : -this.translate
              if (r >= this.snapGrid[n]) {
                var o = this.snapGrid[n]
                r - o > (this.snapGrid[n + 1] - o) * s &&
                  (a += this.params.slidesPerGroup)
              } else {
                var l = this.snapGrid[n - 1]
                r - l <= (this.snapGrid[n] - l) * s &&
                  (a -= this.params.slidesPerGroup)
              }
              return (
                (a = Math.max(a, 0)),
                (a = Math.min(a, this.snapGrid.length - 1)),
                this.slideTo(a, e, t, i)
              )
            },
            slideToClickedSlide: function() {
              var e,
                t = this,
                i = t.params,
                a = t.$wrapperEl,
                n =
                  'auto' === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                o = t.clickedIndex
              if (i.loop) {
                if (t.animating) return
                ;(e = parseInt(
                  s(t.clickedSlide).attr('data-swiper-slide-index'),
                  10
                )),
                  i.centeredSlides
                    ? o < t.loopedSlides - n / 2 ||
                      o > t.slides.length - t.loopedSlides + n / 2
                      ? (t.loopFix(),
                        (o = a
                          .children(
                            '.' +
                              i.slideClass +
                              '[data-swiper-slide-index="' +
                              e +
                              '"]:not(.' +
                              i.slideDuplicateClass +
                              ')'
                          )
                          .eq(0)
                          .index()),
                        r.nextTick(function() {
                          t.slideTo(o)
                        }))
                      : t.slideTo(o)
                    : o > t.slides.length - n
                    ? (t.loopFix(),
                      (o = a
                        .children(
                          '.' +
                            i.slideClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.slideDuplicateClass +
                            ')'
                        )
                        .eq(0)
                        .index()),
                      r.nextTick(function() {
                        t.slideTo(o)
                      }))
                    : t.slideTo(o)
              } else t.slideTo(o)
            }
          },
          z = {
            loopCreate: function() {
              var t = this,
                i = t.params,
                a = t.$wrapperEl
              a.children(
                '.' + i.slideClass + '.' + i.slideDuplicateClass
              ).remove()
              var n = a.children('.' + i.slideClass)
              if (i.loopFillGroupWithBlank) {
                var r = i.slidesPerGroup - (n.length % i.slidesPerGroup)
                if (r !== i.slidesPerGroup) {
                  for (var o = 0; o < r; o += 1) {
                    var l = s(e.createElement('div')).addClass(
                      i.slideClass + ' ' + i.slideBlankClass
                    )
                    a.append(l)
                  }
                  n = a.children('.' + i.slideClass)
                }
              }
              'auto' !== i.slidesPerView ||
                i.loopedSlides ||
                (i.loopedSlides = n.length),
                (t.loopedSlides = Math.ceil(
                  parseFloat(i.loopedSlides || i.slidesPerView, 10)
                )),
                (t.loopedSlides += i.loopAdditionalSlides),
                t.loopedSlides > n.length && (t.loopedSlides = n.length)
              var d = [],
                h = []
              n.each(function(e, i) {
                var a = s(i)
                e < t.loopedSlides && h.push(i),
                  e < n.length && e >= n.length - t.loopedSlides && d.push(i),
                  a.attr('data-swiper-slide-index', e)
              })
              for (var p = 0; p < h.length; p += 1)
                a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
              for (var c = d.length - 1; c >= 0; c -= 1)
                a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function() {
              var e,
                t = this.activeIndex,
                i = this.slides,
                s = this.loopedSlides,
                a = this.allowSlidePrev,
                n = this.allowSlideNext,
                r = this.snapGrid,
                o = this.rtlTranslate
              ;(this.allowSlidePrev = !0), (this.allowSlideNext = !0)
              var l = -r[t] - this.getTranslate()
              t < s
                ? ((e = i.length - 3 * s + t),
                  (e += s),
                  this.slideTo(e, 0, !1, !0) &&
                    0 !== l &&
                    this.setTranslate(
                      (o ? -this.translate : this.translate) - l
                    ))
                : t >= i.length - s &&
                  ((e = -i.length + t + s),
                  (e += s),
                  this.slideTo(e, 0, !1, !0) &&
                    0 !== l &&
                    this.setTranslate(
                      (o ? -this.translate : this.translate) - l
                    )),
                (this.allowSlidePrev = a),
                (this.allowSlideNext = n)
            },
            loopDestroy: function() {
              var e = this.$wrapperEl,
                t = this.params,
                i = this.slides
              e
                .children(
                  '.' +
                    t.slideClass +
                    '.' +
                    t.slideDuplicateClass +
                    ',.' +
                    t.slideClass +
                    '.' +
                    t.slideBlankClass
                )
                .remove(),
                i.removeAttr('data-swiper-slide-index')
            }
          },
          k = {
            setGrabCursor: function(e) {
              if (
                !(
                  o.touch ||
                  !this.params.simulateTouch ||
                  (this.params.watchOverflow && this.isLocked) ||
                  this.params.cssMode
                )
              ) {
                var t = this.el
                ;(t.style.cursor = 'move'),
                  (t.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
                  (t.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
                  (t.style.cursor = e ? 'grabbing' : 'grab')
              }
            },
            unsetGrabCursor: function() {
              o.touch ||
                (this.params.watchOverflow && this.isLocked) ||
                this.params.cssMode ||
                (this.el.style.cursor = '')
            }
          },
          $ = {
            appendSlide: function(e) {
              var t = this.$wrapperEl,
                i = this.params
              if (
                (i.loop && this.loopDestroy(),
                'object' == typeof e && 'length' in e)
              )
                for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s])
              else t.append(e)
              i.loop && this.loopCreate(),
                (i.observer && o.observer) || this.update()
            },
            prependSlide: function(e) {
              var t = this.params,
                i = this.$wrapperEl,
                s = this.activeIndex
              t.loop && this.loopDestroy()
              var a = s + 1
              if ('object' == typeof e && 'length' in e) {
                for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n])
                a = s + e.length
              } else i.prepend(e)
              t.loop && this.loopCreate(),
                (t.observer && o.observer) || this.update(),
                this.slideTo(a, 0, !1)
            },
            addSlide: function(e, t) {
              var i = this.$wrapperEl,
                s = this.params,
                a = this.activeIndex
              s.loop &&
                ((a -= this.loopedSlides),
                this.loopDestroy(),
                (this.slides = i.children('.' + s.slideClass)))
              var n = this.slides.length
              if (e <= 0) this.prependSlide(t)
              else if (e >= n) this.appendSlide(t)
              else {
                for (
                  var r = a > e ? a + 1 : a, l = [], d = n - 1;
                  d >= e;
                  d -= 1
                ) {
                  var h = this.slides.eq(d)
                  h.remove(), l.unshift(h)
                }
                if ('object' == typeof t && 'length' in t) {
                  for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p])
                  r = a > e ? a + t.length : a
                } else i.append(t)
                for (var c = 0; c < l.length; c += 1) i.append(l[c])
                s.loop && this.loopCreate(),
                  (s.observer && o.observer) || this.update(),
                  s.loop
                    ? this.slideTo(r + this.loopedSlides, 0, !1)
                    : this.slideTo(r, 0, !1)
              }
            },
            removeSlide: function(e) {
              var t = this.params,
                i = this.$wrapperEl,
                s = this.activeIndex
              t.loop &&
                ((s -= this.loopedSlides),
                this.loopDestroy(),
                (this.slides = i.children('.' + t.slideClass)))
              var a,
                n = s
              if ('object' == typeof e && 'length' in e) {
                for (var r = 0; r < e.length; r += 1)
                  (a = e[r]),
                    this.slides[a] && this.slides.eq(a).remove(),
                    a < n && (n -= 1)
                n = Math.max(n, 0)
              } else
                (a = e),
                  this.slides[a] && this.slides.eq(a).remove(),
                  a < n && (n -= 1),
                  (n = Math.max(n, 0))
              t.loop && this.loopCreate(),
                (t.observer && o.observer) || this.update(),
                t.loop
                  ? this.slideTo(n + this.loopedSlides, 0, !1)
                  : this.slideTo(n, 0, !1)
            },
            removeAllSlides: function() {
              for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t)
              this.removeSlide(e)
            }
          },
          L =
            ((h = t.navigator.platform),
            (g = t.navigator.userAgent),
            (b = {
              ios: !1,
              android: !1,
              androidChrome: !1,
              desktop: !1,
              iphone: !1,
              ipod: !1,
              ipad: !1,
              edge: !1,
              ie: !1,
              firefox: !1,
              macos: !1,
              windows: !1,
              cordova: !(!t.cordova && !t.phonegap),
              phonegap: !(!t.cordova && !t.phonegap),
              electron: !1
            }),
            (c = t.screen.width),
            (f = t.screen.height),
            (v = g.match(/(Android);?[\s\/]+([\d.]+)?/)),
            (m = g.match(/(iPad).*OS\s([\d_]+)/)),
            (w = g.match(/(iPod)(.*OS\s([\d_]+))?/)),
            (y = !m && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
            (x = g.indexOf('MSIE ') >= 0 || g.indexOf('Trident/') >= 0),
            (T = g.indexOf('Edge/') >= 0),
            (S = g.indexOf('Gecko/') >= 0 && g.indexOf('Firefox/') >= 0),
            (E = 'Win32' === h),
            (C = g.toLowerCase().indexOf('electron') >= 0),
            (M = 'MacIntel' === h),
            !m &&
              M &&
              o.touch &&
              ((1024 === c && 1366 === f) ||
                (834 === c && 1194 === f) ||
                (834 === c && 1112 === f) ||
                (768 === c && 1024 === f)) &&
              ((m = g.match(/(Version)\/([\d.]+)/)), (M = !1)),
            (b.ie = x),
            (b.edge = T),
            (b.firefox = S),
            v &&
              !E &&
              ((b.os = 'android'),
              (b.osVersion = v[2]),
              (b.android = !0),
              (b.androidChrome = g.toLowerCase().indexOf('chrome') >= 0)),
            (m || y || w) && ((b.os = 'ios'), (b.ios = !0)),
            y &&
              !w &&
              ((b.osVersion = y[2].replace(/_/g, '.')), (b.iphone = !0)),
            m && ((b.osVersion = m[2].replace(/_/g, '.')), (b.ipad = !0)),
            w &&
              ((b.osVersion = w[3] ? w[3].replace(/_/g, '.') : null),
              (b.ipod = !0)),
            b.ios &&
              b.osVersion &&
              g.indexOf('Version/') >= 0 &&
              '10' === b.osVersion.split('.')[0] &&
              (b.osVersion = g
                .toLowerCase()
                .split('version/')[1]
                .split(' ')[0]),
            (b.webView =
              !(
                !(y || m || w) ||
                (!g.match(/.*AppleWebKit(?!.*Safari)/i) &&
                  !t.navigator.standalone)
              ) ||
              (t.matchMedia &&
                t.matchMedia('(display-mode: standalone)').matches)),
            (b.webview = b.webView),
            (b.standalone = b.webView),
            (b.desktop = !(b.ios || b.android) || C),
            b.desktop &&
              ((b.electron = C),
              (b.macos = M),
              (b.windows = E),
              b.macos && (b.os = 'macos'),
              b.windows && (b.os = 'windows')),
            (b.pixelRatio = t.devicePixelRatio || 1),
            b)
        function I(i) {
          var a = this.touchEventsData,
            n = this.params,
            o = this.touches
          if (!this.animating || !n.preventInteractionOnTransition) {
            var l = i
            l.originalEvent && (l = l.originalEvent)
            var d = s(l.target)
            if (
              ('wrapper' !== n.touchEventsTarget ||
                d.closest(this.wrapperEl).length) &&
              ((a.isTouchEvent = 'touchstart' === l.type),
              (a.isTouchEvent || !('which' in l) || 3 !== l.which) &&
                !(
                  (!a.isTouchEvent && 'button' in l && l.button > 0) ||
                  (a.isTouched && a.isMoved)
                ))
            )
              if (
                n.noSwiping &&
                d.closest(
                  n.noSwipingSelector
                    ? n.noSwipingSelector
                    : '.' + n.noSwipingClass
                )[0]
              )
                this.allowClick = !0
              else if (!n.swipeHandler || d.closest(n.swipeHandler)[0]) {
                ;(o.currentX =
                  'touchstart' === l.type ? l.targetTouches[0].pageX : l.pageX),
                  (o.currentY =
                    'touchstart' === l.type
                      ? l.targetTouches[0].pageY
                      : l.pageY)
                var h = o.currentX,
                  p = o.currentY,
                  c = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                  u = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold
                if (!c || !(h <= u || h >= t.screen.width - u)) {
                  if (
                    (r.extend(a, {
                      isTouched: !0,
                      isMoved: !1,
                      allowTouchCallbacks: !0,
                      isScrolling: void 0,
                      startMoving: void 0
                    }),
                    (o.startX = h),
                    (o.startY = p),
                    (a.touchStartTime = r.now()),
                    (this.allowClick = !0),
                    this.updateSize(),
                    (this.swipeDirection = void 0),
                    n.threshold > 0 && (a.allowThresholdMove = !1),
                    'touchstart' !== l.type)
                  ) {
                    var f = !0
                    d.is(a.formElements) && (f = !1),
                      e.activeElement &&
                        s(e.activeElement).is(a.formElements) &&
                        e.activeElement !== d[0] &&
                        e.activeElement.blur()
                    var v =
                      f && this.allowTouchMove && n.touchStartPreventDefault
                    ;(n.touchStartForcePreventDefault || v) &&
                      l.preventDefault()
                  }
                  this.emit('touchStart', l)
                }
              }
          }
        }
        function O(t) {
          var i = this.touchEventsData,
            a = this.params,
            n = this.touches,
            o = this.rtlTranslate,
            l = t
          if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
            if (!i.isTouchEvent || 'mousemove' !== l.type) {
              var d =
                  'touchmove' === l.type &&
                  l.targetTouches &&
                  (l.targetTouches[0] || l.changedTouches[0]),
                h = 'touchmove' === l.type ? d.pageX : l.pageX,
                p = 'touchmove' === l.type ? d.pageY : l.pageY
              if (l.preventedByNestedSwiper)
                return (n.startX = h), void (n.startY = p)
              if (!this.allowTouchMove)
                return (
                  (this.allowClick = !1),
                  void (
                    i.isTouched &&
                    (r.extend(n, {
                      startX: h,
                      startY: p,
                      currentX: h,
                      currentY: p
                    }),
                    (i.touchStartTime = r.now()))
                  )
                )
              if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                if (this.isVertical()) {
                  if (
                    (p < n.startY && this.translate <= this.maxTranslate()) ||
                    (p > n.startY && this.translate >= this.minTranslate())
                  )
                    return (i.isTouched = !1), void (i.isMoved = !1)
                } else if (
                  (h < n.startX && this.translate <= this.maxTranslate()) ||
                  (h > n.startX && this.translate >= this.minTranslate())
                )
                  return
              if (
                i.isTouchEvent &&
                e.activeElement &&
                l.target === e.activeElement &&
                s(l.target).is(i.formElements)
              )
                return (i.isMoved = !0), void (this.allowClick = !1)
              if (
                (i.allowTouchCallbacks && this.emit('touchMove', l),
                !(l.targetTouches && l.targetTouches.length > 1))
              ) {
                ;(n.currentX = h), (n.currentY = p)
                var c,
                  f = n.currentX - n.startX,
                  u = n.currentY - n.startY
                if (
                  !(
                    this.params.threshold &&
                    Math.sqrt(Math.pow(f, 2) + Math.pow(u, 2)) <
                      this.params.threshold
                  )
                )
                  if (
                    (void 0 === i.isScrolling &&
                      ((this.isHorizontal() && n.currentY === n.startY) ||
                      (this.isVertical() && n.currentX === n.startX)
                        ? (i.isScrolling = !1)
                        : f * f + u * u >= 25 &&
                          ((c =
                            (180 * Math.atan2(Math.abs(u), Math.abs(f))) /
                            Math.PI),
                          (i.isScrolling = this.isHorizontal()
                            ? c > a.touchAngle
                            : 90 - c > a.touchAngle))),
                    i.isScrolling && this.emit('touchMoveOpposite', l),
                    void 0 === i.startMoving &&
                      ((n.currentX === n.startX && n.currentY === n.startY) ||
                        (i.startMoving = !0)),
                    i.isScrolling)
                  )
                    i.isTouched = !1
                  else if (i.startMoving) {
                    ;(this.allowClick = !1),
                      a.cssMode || l.preventDefault(),
                      a.touchMoveStopPropagation &&
                        !a.nested &&
                        l.stopPropagation(),
                      i.isMoved ||
                        (a.loop && this.loopFix(),
                        (i.startTranslate = this.getTranslate()),
                        this.setTransition(0),
                        this.animating &&
                          this.$wrapperEl.trigger(
                            'webkitTransitionEnd transitionend'
                          ),
                        (i.allowMomentumBounce = !1),
                        !a.grabCursor ||
                          (!0 !== this.allowSlideNext &&
                            !0 !== this.allowSlidePrev) ||
                          this.setGrabCursor(!0),
                        this.emit('sliderFirstMove', l)),
                      this.emit('sliderMove', l),
                      (i.isMoved = !0)
                    var v = this.isHorizontal() ? f : u
                    ;(n.diff = v),
                      (v *= a.touchRatio),
                      o && (v = -v),
                      (this.swipeDirection = v > 0 ? 'prev' : 'next'),
                      (i.currentTranslate = v + i.startTranslate)
                    var m = !0,
                      g = a.resistanceRatio
                    if (
                      (a.touchReleaseOnEdges && (g = 0),
                      v > 0 && i.currentTranslate > this.minTranslate()
                        ? ((m = !1),
                          a.resistance &&
                            (i.currentTranslate =
                              this.minTranslate() -
                              1 +
                              Math.pow(
                                -this.minTranslate() + i.startTranslate + v,
                                g
                              )))
                        : v < 0 &&
                          i.currentTranslate < this.maxTranslate() &&
                          ((m = !1),
                          a.resistance &&
                            (i.currentTranslate =
                              this.maxTranslate() +
                              1 -
                              Math.pow(
                                this.maxTranslate() - i.startTranslate - v,
                                g
                              ))),
                      m && (l.preventedByNestedSwiper = !0),
                      !this.allowSlideNext &&
                        'next' === this.swipeDirection &&
                        i.currentTranslate < i.startTranslate &&
                        (i.currentTranslate = i.startTranslate),
                      !this.allowSlidePrev &&
                        'prev' === this.swipeDirection &&
                        i.currentTranslate > i.startTranslate &&
                        (i.currentTranslate = i.startTranslate),
                      a.threshold > 0)
                    ) {
                      if (!(Math.abs(v) > a.threshold || i.allowThresholdMove))
                        return void (i.currentTranslate = i.startTranslate)
                      if (!i.allowThresholdMove)
                        return (
                          (i.allowThresholdMove = !0),
                          (n.startX = n.currentX),
                          (n.startY = n.currentY),
                          (i.currentTranslate = i.startTranslate),
                          void (n.diff = this.isHorizontal()
                            ? n.currentX - n.startX
                            : n.currentY - n.startY)
                        )
                    }
                    a.followFinger &&
                      !a.cssMode &&
                      ((a.freeMode ||
                        a.watchSlidesProgress ||
                        a.watchSlidesVisibility) &&
                        (this.updateActiveIndex(), this.updateSlidesClasses()),
                      a.freeMode &&
                        (0 === i.velocities.length &&
                          i.velocities.push({
                            position:
                              n[this.isHorizontal() ? 'startX' : 'startY'],
                            time: i.touchStartTime
                          }),
                        i.velocities.push({
                          position:
                            n[this.isHorizontal() ? 'currentX' : 'currentY'],
                          time: r.now()
                        })),
                      this.updateProgress(i.currentTranslate),
                      this.setTranslate(i.currentTranslate))
                  }
              }
            }
          } else
            i.startMoving && i.isScrolling && this.emit('touchMoveOpposite', l)
        }
        function D(e) {
          var t = this,
            i = t.touchEventsData,
            s = t.params,
            a = t.touches,
            n = t.rtlTranslate,
            o = t.$wrapperEl,
            l = t.slidesGrid,
            d = t.snapGrid,
            h = e
          if (
            (h.originalEvent && (h = h.originalEvent),
            i.allowTouchCallbacks && t.emit('touchEnd', h),
            (i.allowTouchCallbacks = !1),
            !i.isTouched)
          )
            return (
              i.isMoved && s.grabCursor && t.setGrabCursor(!1),
              (i.isMoved = !1),
              void (i.startMoving = !1)
            )
          s.grabCursor &&
            i.isMoved &&
            i.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1)
          var p,
            c = r.now(),
            u = c - i.touchStartTime
          if (
            (t.allowClick &&
              (t.updateClickedSlide(h),
              t.emit('tap click', h),
              u < 300 &&
                c - i.lastClickTime < 300 &&
                t.emit('doubleTap doubleClick', h)),
            (i.lastClickTime = r.now()),
            r.nextTick(function() {
              t.destroyed || (t.allowClick = !0)
            }),
            !i.isTouched ||
              !i.isMoved ||
              !t.swipeDirection ||
              0 === a.diff ||
              i.currentTranslate === i.startTranslate)
          )
            return (
              (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1)
            )
          if (
            ((i.isTouched = !1),
            (i.isMoved = !1),
            (i.startMoving = !1),
            (p = s.followFinger
              ? n
                ? t.translate
                : -t.translate
              : -i.currentTranslate),
            !s.cssMode)
          )
            if (s.freeMode) {
              if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex)
              if (p > -t.maxTranslate())
                return void (t.slides.length < d.length
                  ? t.slideTo(d.length - 1)
                  : t.slideTo(t.slides.length - 1))
              if (s.freeModeMomentum) {
                if (i.velocities.length > 1) {
                  var f = i.velocities.pop(),
                    v = i.velocities.pop(),
                    m = f.position - v.position,
                    g = f.time - v.time
                  ;(t.velocity = m / g),
                    (t.velocity /= 2),
                    Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                      (t.velocity = 0),
                    (g > 150 || r.now() - f.time > 300) && (t.velocity = 0)
                } else t.velocity = 0
                ;(t.velocity *= s.freeModeMomentumVelocityRatio),
                  (i.velocities.length = 0)
                var b = 1e3 * s.freeModeMomentumRatio,
                  w = t.velocity * b,
                  y = t.translate + w
                n && (y = -y)
                var x,
                  T,
                  S = !1,
                  E = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio
                if (y < t.maxTranslate())
                  s.freeModeMomentumBounce
                    ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E),
                      (x = t.maxTranslate()),
                      (S = !0),
                      (i.allowMomentumBounce = !0))
                    : (y = t.maxTranslate()),
                    s.loop && s.centeredSlides && (T = !0)
                else if (y > t.minTranslate())
                  s.freeModeMomentumBounce
                    ? (y - t.minTranslate() > E && (y = t.minTranslate() + E),
                      (x = t.minTranslate()),
                      (S = !0),
                      (i.allowMomentumBounce = !0))
                    : (y = t.minTranslate()),
                    s.loop && s.centeredSlides && (T = !0)
                else if (s.freeModeSticky) {
                  for (var C, M = 0; M < d.length; M += 1)
                    if (d[M] > -y) {
                      C = M
                      break
                    }
                  y = -(y =
                    Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) ||
                    'next' === t.swipeDirection
                      ? d[C]
                      : d[C - 1])
                }
                if (
                  (T &&
                    t.once('transitionEnd', function() {
                      t.loopFix()
                    }),
                  0 !== t.velocity)
                ) {
                  if (
                    ((b = n
                      ? Math.abs((-y - t.translate) / t.velocity)
                      : Math.abs((y - t.translate) / t.velocity)),
                    s.freeModeSticky)
                  ) {
                    var P = Math.abs((n ? -y : y) - t.translate),
                      z = t.slidesSizesGrid[t.activeIndex]
                    b =
                      P < z
                        ? s.speed
                        : P < 2 * z
                        ? 1.5 * s.speed
                        : 2.5 * s.speed
                  }
                } else if (s.freeModeSticky) return void t.slideToClosest()
                s.freeModeMomentumBounce && S
                  ? (t.updateProgress(x),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    (t.animating = !0),
                    o.transitionEnd(function() {
                      t &&
                        !t.destroyed &&
                        i.allowMomentumBounce &&
                        (t.emit('momentumBounce'),
                        t.setTransition(s.speed),
                        t.setTranslate(x),
                        o.transitionEnd(function() {
                          t && !t.destroyed && t.transitionEnd()
                        }))
                    }))
                  : t.velocity
                  ? (t.updateProgress(y),
                    t.setTransition(b),
                    t.setTranslate(y),
                    t.transitionStart(!0, t.swipeDirection),
                    t.animating ||
                      ((t.animating = !0),
                      o.transitionEnd(function() {
                        t && !t.destroyed && t.transitionEnd()
                      })))
                  : t.updateProgress(y),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses()
              } else if (s.freeModeSticky) return void t.slideToClosest()
              ;(!s.freeModeMomentum || u >= s.longSwipesMs) &&
                (t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses())
            } else {
              for (
                var k = 0, $ = t.slidesSizesGrid[0], L = 0;
                L < l.length;
                L += s.slidesPerGroup
              )
                void 0 !== l[L + s.slidesPerGroup]
                  ? p >= l[L] &&
                    p < l[L + s.slidesPerGroup] &&
                    ((k = L), ($ = l[L + s.slidesPerGroup] - l[L]))
                  : p >= l[L] &&
                    ((k = L), ($ = l[l.length - 1] - l[l.length - 2]))
              var I = (p - l[k]) / $
              if (u > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex)
                'next' === t.swipeDirection &&
                  (I >= s.longSwipesRatio
                    ? t.slideTo(k + s.slidesPerGroup)
                    : t.slideTo(k)),
                  'prev' === t.swipeDirection &&
                    (I > 1 - s.longSwipesRatio
                      ? t.slideTo(k + s.slidesPerGroup)
                      : t.slideTo(k))
              } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex)
                !t.navigation ||
                (h.target !== t.navigation.nextEl &&
                  h.target !== t.navigation.prevEl)
                  ? ('next' === t.swipeDirection &&
                      t.slideTo(k + s.slidesPerGroup),
                    'prev' === t.swipeDirection && t.slideTo(k))
                  : h.target === t.navigation.nextEl
                  ? t.slideTo(k + s.slidesPerGroup)
                  : t.slideTo(k)
              }
            }
        }
        function A() {
          var e = this.params,
            t = this.el
          if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint()
            var i = this.allowSlideNext,
              s = this.allowSlidePrev,
              a = this.snapGrid
            ;(this.allowSlideNext = !0),
              (this.allowSlidePrev = !0),
              this.updateSize(),
              this.updateSlides(),
              this.updateSlidesClasses(),
              ('auto' === e.slidesPerView || e.slidesPerView > 1) &&
              this.isEnd &&
              !this.params.centeredSlides
                ? this.slideTo(this.slides.length - 1, 0, !1, !0)
                : this.slideTo(this.activeIndex, 0, !1, !0),
              this.autoplay &&
                this.autoplay.running &&
                this.autoplay.paused &&
                this.autoplay.run(),
              (this.allowSlidePrev = s),
              (this.allowSlideNext = i),
              this.params.watchOverflow &&
                a !== this.snapGrid &&
                this.checkOverflow()
          }
        }
        function H(e) {
          this.allowClick ||
            (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation &&
              this.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation()))
        }
        function B() {
          var e = this.wrapperEl
          ;(this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal()
              ? -e.scrollLeft
              : -e.scrollTop),
            -0 === this.translate && (this.translate = 0),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
          var t = this.maxTranslate() - this.minTranslate()
          ;(0 === t ? 0 : (this.translate - this.minTranslate()) / t) !==
            this.progress && this.updateProgress(this.translate),
            this.emit('setTranslate', this.translate, !1)
        }
        var N = !1
        function G() {}
        var X = {
            init: !0,
            direction: 'horizontal',
            touchEventsTarget: 'container',
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: 'slide',
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: 'column',
            slidesPerGroup: 1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: 'swiper-no-swiping',
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: 'swiper-container-',
            slideClass: 'swiper-slide',
            slideBlankClass: 'swiper-slide-invisible-blank',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            runCallbacksOnInit: !0
          },
          V = {
            update: P,
            translate: p,
            transition: {
              setTransition: function(e, t) {
                this.params.cssMode || this.$wrapperEl.transition(e),
                  this.emit('setTransition', e, t)
              },
              transitionStart: function(e, t) {
                void 0 === e && (e = !0)
                var i = this.activeIndex,
                  s = this.params,
                  a = this.previousIndex
                if (!s.cssMode) {
                  s.autoHeight && this.updateAutoHeight()
                  var n = t
                  if (
                    (n || (n = i > a ? 'next' : i < a ? 'prev' : 'reset'),
                    this.emit('transitionStart'),
                    e && i !== a)
                  ) {
                    if ('reset' === n)
                      return void this.emit('slideResetTransitionStart')
                    this.emit('slideChangeTransitionStart'),
                      'next' === n
                        ? this.emit('slideNextTransitionStart')
                        : this.emit('slidePrevTransitionStart')
                  }
                }
              },
              transitionEnd: function(e, t) {
                void 0 === e && (e = !0)
                var i = this.activeIndex,
                  s = this.previousIndex,
                  a = this.params
                if (((this.animating = !1), !a.cssMode)) {
                  this.setTransition(0)
                  var n = t
                  if (
                    (n || (n = i > s ? 'next' : i < s ? 'prev' : 'reset'),
                    this.emit('transitionEnd'),
                    e && i !== s)
                  ) {
                    if ('reset' === n)
                      return void this.emit('slideResetTransitionEnd')
                    this.emit('slideChangeTransitionEnd'),
                      'next' === n
                        ? this.emit('slideNextTransitionEnd')
                        : this.emit('slidePrevTransitionEnd')
                  }
                }
              }
            },
            slide: u,
            loop: z,
            grabCursor: k,
            manipulation: $,
            events: {
              attachEvents: function() {
                var t = this.params,
                  i = this.touchEvents,
                  s = this.el,
                  a = this.wrapperEl
                ;(this.onTouchStart = I.bind(this)),
                  (this.onTouchMove = O.bind(this)),
                  (this.onTouchEnd = D.bind(this)),
                  t.cssMode && (this.onScroll = B.bind(this)),
                  (this.onClick = H.bind(this))
                var n = !!t.nested
                if (!o.touch && o.pointerEvents)
                  s.addEventListener(i.start, this.onTouchStart, !1),
                    e.addEventListener(i.move, this.onTouchMove, n),
                    e.addEventListener(i.end, this.onTouchEnd, !1)
                else {
                  if (o.touch) {
                    var r = !(
                      'touchstart' !== i.start ||
                      !o.passiveListener ||
                      !t.passiveListeners
                    ) && { passive: !0, capture: !1 }
                    s.addEventListener(i.start, this.onTouchStart, r),
                      s.addEventListener(
                        i.move,
                        this.onTouchMove,
                        o.passiveListener ? { passive: !1, capture: n } : n
                      ),
                      s.addEventListener(i.end, this.onTouchEnd, r),
                      i.cancel &&
                        s.addEventListener(i.cancel, this.onTouchEnd, r),
                      N || (e.addEventListener('touchstart', G), (N = !0))
                  }
                  ;((t.simulateTouch && !L.ios && !L.android) ||
                    (t.simulateTouch && !o.touch && L.ios)) &&
                    (s.addEventListener('mousedown', this.onTouchStart, !1),
                    e.addEventListener('mousemove', this.onTouchMove, n),
                    e.addEventListener('mouseup', this.onTouchEnd, !1))
                }
                ;(t.preventClicks || t.preventClicksPropagation) &&
                  s.addEventListener('click', this.onClick, !0),
                  t.cssMode && a.addEventListener('scroll', this.onScroll),
                  this.on(
                    L.ios || L.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate',
                    A,
                    !0
                  )
              },
              detachEvents: function() {
                var t = this.params,
                  i = this.touchEvents,
                  s = this.el,
                  a = this.wrapperEl,
                  n = !!t.nested
                if (!o.touch && o.pointerEvents)
                  s.removeEventListener(i.start, this.onTouchStart, !1),
                    e.removeEventListener(i.move, this.onTouchMove, n),
                    e.removeEventListener(i.end, this.onTouchEnd, !1)
                else {
                  if (o.touch) {
                    var r = !(
                      'onTouchStart' !== i.start ||
                      !o.passiveListener ||
                      !t.passiveListeners
                    ) && { passive: !0, capture: !1 }
                    s.removeEventListener(i.start, this.onTouchStart, r),
                      s.removeEventListener(i.move, this.onTouchMove, n),
                      s.removeEventListener(i.end, this.onTouchEnd, r),
                      i.cancel &&
                        s.removeEventListener(i.cancel, this.onTouchEnd, r)
                  }
                  ;((t.simulateTouch && !L.ios && !L.android) ||
                    (t.simulateTouch && !o.touch && L.ios)) &&
                    (s.removeEventListener('mousedown', this.onTouchStart, !1),
                    e.removeEventListener('mousemove', this.onTouchMove, n),
                    e.removeEventListener('mouseup', this.onTouchEnd, !1))
                }
                ;(t.preventClicks || t.preventClicksPropagation) &&
                  s.removeEventListener('click', this.onClick, !0),
                  t.cssMode && a.removeEventListener('scroll', this.onScroll),
                  this.off(
                    L.ios || L.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate',
                    A
                  )
              }
            },
            breakpoints: {
              setBreakpoint: function() {
                var e = this.activeIndex,
                  t = this.initialized,
                  i = this.loopedSlides
                void 0 === i && (i = 0)
                var s = this.params,
                  a = this.$el,
                  n = s.breakpoints
                if (n && (!n || 0 !== Object.keys(n).length)) {
                  var o = this.getBreakpoint(n)
                  if (o && this.currentBreakpoint !== o) {
                    var l = o in n ? n[o] : void 0
                    l &&
                      [
                        'slidesPerView',
                        'spaceBetween',
                        'slidesPerGroup',
                        'slidesPerColumn'
                      ].forEach(function(e) {
                        var t = l[e]
                        void 0 !== t &&
                          (l[e] =
                            'slidesPerView' !== e ||
                            ('AUTO' !== t && 'auto' !== t)
                              ? 'slidesPerView' === e
                                ? parseFloat(t)
                                : parseInt(t, 10)
                              : 'auto')
                      })
                    var d = l || this.originalParams,
                      h = s.slidesPerColumn > 1,
                      p = d.slidesPerColumn > 1
                    h && !p
                      ? a.removeClass(
                          s.containerModifierClass +
                            'multirow ' +
                            s.containerModifierClass +
                            'multirow-column'
                        )
                      : !h &&
                        p &&
                        (a.addClass(s.containerModifierClass + 'multirow'),
                        'column' === d.slidesPerColumnFill &&
                          a.addClass(
                            s.containerModifierClass + 'multirow-column'
                          ))
                    var c = d.direction && d.direction !== s.direction,
                      u = s.loop && (d.slidesPerView !== s.slidesPerView || c)
                    c && t && this.changeDirection(),
                      r.extend(this.params, d),
                      r.extend(this, {
                        allowTouchMove: this.params.allowTouchMove,
                        allowSlideNext: this.params.allowSlideNext,
                        allowSlidePrev: this.params.allowSlidePrev
                      }),
                      (this.currentBreakpoint = o),
                      u &&
                        t &&
                        (this.loopDestroy(),
                        this.loopCreate(),
                        this.updateSlides(),
                        this.slideTo(e - i + this.loopedSlides, 0, !1)),
                      this.emit('breakpoint', d)
                  }
                }
              },
              getBreakpoint: function(e) {
                if (e) {
                  var i = !1,
                    s = []
                  Object.keys(e).forEach(function(e) {
                    s.push(e)
                  }),
                    s.sort(function(e, t) {
                      return parseInt(e, 10) - parseInt(t, 10)
                    })
                  for (var a = 0; a < s.length; a += 1) {
                    var n = s[a]
                    n <= t.innerWidth && (i = n)
                  }
                  return i || 'max'
                }
              }
            },
            checkOverflow: {
              checkOverflow: function() {
                var e = this.params,
                  t = this.isLocked,
                  i =
                    this.slides.length > 0 &&
                    e.slidesOffsetBefore +
                      e.spaceBetween * (this.slides.length - 1) +
                      this.slides[0].offsetWidth * this.slides.length
                e.slidesOffsetBefore && e.slidesOffsetAfter && i
                  ? (this.isLocked = i <= this.size)
                  : (this.isLocked = 1 === this.snapGrid.length),
                  (this.allowSlideNext = !this.isLocked),
                  (this.allowSlidePrev = !this.isLocked),
                  t !== this.isLocked &&
                    this.emit(this.isLocked ? 'lock' : 'unlock'),
                  t &&
                    t !== this.isLocked &&
                    ((this.isEnd = !1), this.navigation.update())
              }
            },
            classes: {
              addClasses: function() {
                var e = this.classNames,
                  t = this.params,
                  i = this.rtl,
                  s = this.$el,
                  a = []
                a.push('initialized'),
                  a.push(t.direction),
                  t.freeMode && a.push('free-mode'),
                  t.autoHeight && a.push('autoheight'),
                  i && a.push('rtl'),
                  t.slidesPerColumn > 1 &&
                    (a.push('multirow'),
                    'column' === t.slidesPerColumnFill &&
                      a.push('multirow-column')),
                  L.android && a.push('android'),
                  L.ios && a.push('ios'),
                  t.cssMode && a.push('css-mode'),
                  a.forEach(function(i) {
                    e.push(t.containerModifierClass + i)
                  }),
                  s.addClass(e.join(' '))
              },
              removeClasses: function() {
                var e = this.$el,
                  t = this.classNames
                e.removeClass(t.join(' '))
              }
            },
            images: {
              loadImage: function(e, i, s, a, n, r) {
                var o
                function l() {
                  r && r()
                }
                e.complete && n
                  ? l()
                  : i
                  ? (((o = new t.Image()).onload = l),
                    (o.onerror = l),
                    a && (o.sizes = a),
                    s && (o.srcset = s),
                    i && (o.src = i))
                  : l()
              },
              preloadImages: function() {
                var e = this
                function t() {
                  null != e &&
                    e &&
                    !e.destroyed &&
                    (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length &&
                      (e.params.updateOnImagesReady && e.update(),
                      e.emit('imagesReady')))
                }
                e.imagesToLoad = e.$el.find('img')
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                  var s = e.imagesToLoad[i]
                  e.loadImage(
                    s,
                    s.currentSrc || s.getAttribute('src'),
                    s.srcset || s.getAttribute('srcset'),
                    s.sizes || s.getAttribute('sizes'),
                    !0,
                    t
                  )
                }
              }
            }
          },
          Y = {},
          F = (function(e) {
            function t() {
              for (var i, a, n, l = [], d = arguments.length; d--; )
                l[d] = arguments[d]
              1 === l.length && l[0].constructor && l[0].constructor === Object
                ? (n = l[0])
                : ((a = (i = l)[0]), (n = i[1])),
                n || (n = {}),
                (n = r.extend({}, n)),
                a && !n.el && (n.el = a),
                e.call(this, n),
                Object.keys(V).forEach(function(e) {
                  Object.keys(V[e]).forEach(function(i) {
                    t.prototype[i] || (t.prototype[i] = V[e][i])
                  })
                })
              var h = this
              void 0 === h.modules && (h.modules = {}),
                Object.keys(h.modules).forEach(function(e) {
                  var t = h.modules[e]
                  if (t.params) {
                    var i = Object.keys(t.params)[0],
                      s = t.params[i]
                    if ('object' != typeof s || null === s) return
                    if (!(i in n && 'enabled' in s)) return
                    !0 === n[i] && (n[i] = { enabled: !0 }),
                      'object' != typeof n[i] ||
                        'enabled' in n[i] ||
                        (n[i].enabled = !0),
                      n[i] || (n[i] = { enabled: !1 })
                  }
                })
              var p = r.extend({}, X)
              h.useModulesParams(p),
                (h.params = r.extend({}, p, Y, n)),
                (h.originalParams = r.extend({}, h.params)),
                (h.passedParams = r.extend({}, n)),
                (h.$ = s)
              var c = s(h.params.el)
              if ((a = c[0])) {
                if (c.length > 1) {
                  var u = []
                  return (
                    c.each(function(e, i) {
                      var s = r.extend({}, n, { el: i })
                      u.push(new t(s))
                    }),
                    u
                  )
                }
                var f, v, m
                return (
                  (a.swiper = h),
                  c.data('swiper', h),
                  a && a.shadowRoot && a.shadowRoot.querySelector
                    ? ((f = s(
                        a.shadowRoot.querySelector('.' + h.params.wrapperClass)
                      )).children = function(e) {
                        return c.children(e)
                      })
                    : (f = c.children('.' + h.params.wrapperClass)),
                  r.extend(h, {
                    $el: c,
                    el: a,
                    $wrapperEl: f,
                    wrapperEl: f[0],
                    classNames: [],
                    slides: s(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                      return 'horizontal' === h.params.direction
                    },
                    isVertical: function() {
                      return 'vertical' === h.params.direction
                    },
                    rtl:
                      'rtl' === a.dir.toLowerCase() ||
                      'rtl' === c.css('direction'),
                    rtlTranslate:
                      'horizontal' === h.params.direction &&
                      ('rtl' === a.dir.toLowerCase() ||
                        'rtl' === c.css('direction')),
                    wrongRTL: '-webkit-box' === f.css('display'),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: h.params.allowSlideNext,
                    allowSlidePrev: h.params.allowSlidePrev,
                    touchEvents:
                      ((v = [
                        'touchstart',
                        'touchmove',
                        'touchend',
                        'touchcancel'
                      ]),
                      (m = ['mousedown', 'mousemove', 'mouseup']),
                      o.pointerEvents &&
                        (m = ['pointerdown', 'pointermove', 'pointerup']),
                      (h.touchEventsTouch = {
                        start: v[0],
                        move: v[1],
                        end: v[2],
                        cancel: v[3]
                      }),
                      (h.touchEventsDesktop = {
                        start: m[0],
                        move: m[1],
                        end: m[2]
                      }),
                      o.touch || !h.params.simulateTouch
                        ? h.touchEventsTouch
                        : h.touchEventsDesktop),
                    touchEventsData: {
                      isTouched: void 0,
                      isMoved: void 0,
                      allowTouchCallbacks: void 0,
                      touchStartTime: void 0,
                      isScrolling: void 0,
                      currentTranslate: void 0,
                      startTranslate: void 0,
                      allowThresholdMove: void 0,
                      formElements:
                        'input, select, option, textarea, button, video',
                      lastClickTime: r.now(),
                      clickTimeout: void 0,
                      velocities: [],
                      allowMomentumBounce: void 0,
                      isTouchEvent: void 0,
                      startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: h.params.allowTouchMove,
                    touches: {
                      startX: 0,
                      startY: 0,
                      currentX: 0,
                      currentY: 0,
                      diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                  }),
                  h.useModules(),
                  h.params.init && h.init(),
                  h
                )
              }
            }
            e && (t.__proto__ = e),
              (t.prototype = Object.create(e && e.prototype)),
              (t.prototype.constructor = t)
            var i = {
              extendedDefaults: { configurable: !0 },
              defaults: { configurable: !0 },
              Class: { configurable: !0 },
              $: { configurable: !0 }
            }
            return (
              (t.prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                  t = this.slides,
                  i = this.slidesGrid,
                  s = this.size,
                  a = this.activeIndex,
                  n = 1
                if (e.centeredSlides) {
                  for (
                    var r, o = t[a].swiperSlideSize, l = a + 1;
                    l < t.length;
                    l += 1
                  )
                    t[l] &&
                      !r &&
                      ((n += 1), (o += t[l].swiperSlideSize) > s && (r = !0))
                  for (var d = a - 1; d >= 0; d -= 1)
                    t[d] &&
                      !r &&
                      ((n += 1), (o += t[d].swiperSlideSize) > s && (r = !0))
                } else
                  for (var h = a + 1; h < t.length; h += 1)
                    i[h] - i[a] < s && (n += 1)
                return n
              }),
              (t.prototype.update = function() {
                var e = this
                if (e && !e.destroyed) {
                  var t = e.snapGrid,
                    i = e.params
                  i.breakpoints && e.setBreakpoint(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateProgress(),
                    e.updateSlidesClasses(),
                    e.params.freeMode
                      ? (s(), e.params.autoHeight && e.updateAutoHeight())
                      : (('auto' === e.params.slidesPerView ||
                          e.params.slidesPerView > 1) &&
                        e.isEnd &&
                        !e.params.centeredSlides
                          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                          : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                    e.emit('update')
                }
                function s() {
                  var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    i = Math.min(
                      Math.max(t, e.maxTranslate()),
                      e.minTranslate()
                    )
                  e.setTranslate(i),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
              }),
              (t.prototype.changeDirection = function(e, t) {
                void 0 === t && (t = !0)
                var i = this.params.direction
                return (
                  e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
                  e === i || ('horizontal' !== e && 'vertical' !== e)
                    ? this
                    : (this.$el
                        .removeClass(
                          '' + this.params.containerModifierClass + i
                        )
                        .addClass('' + this.params.containerModifierClass + e),
                      (this.params.direction = e),
                      this.slides.each(function(t, i) {
                        'vertical' === e
                          ? (i.style.width = '')
                          : (i.style.height = '')
                      }),
                      this.emit('changeDirection'),
                      t && this.update(),
                      this)
                )
              }),
              (t.prototype.init = function() {
                this.initialized ||
                  (this.emit('beforeInit'),
                  this.params.breakpoints && this.setBreakpoint(),
                  this.addClasses(),
                  this.params.loop && this.loopCreate(),
                  this.updateSize(),
                  this.updateSlides(),
                  this.params.watchOverflow && this.checkOverflow(),
                  this.params.grabCursor && this.setGrabCursor(),
                  this.params.preloadImages && this.preloadImages(),
                  this.params.loop
                    ? this.slideTo(
                        this.params.initialSlide + this.loopedSlides,
                        0,
                        this.params.runCallbacksOnInit
                      )
                    : this.slideTo(
                        this.params.initialSlide,
                        0,
                        this.params.runCallbacksOnInit
                      ),
                  this.attachEvents(),
                  (this.initialized = !0),
                  this.emit('init'))
              }),
              (t.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0)
                var i = this,
                  s = i.params,
                  a = i.$el,
                  n = i.$wrapperEl,
                  o = i.slides
                return void 0 === i.params || i.destroyed
                  ? null
                  : (i.emit('beforeDestroy'),
                    (i.initialized = !1),
                    i.detachEvents(),
                    s.loop && i.loopDestroy(),
                    t &&
                      (i.removeClasses(),
                      a.removeAttr('style'),
                      n.removeAttr('style'),
                      o &&
                        o.length &&
                        o
                          .removeClass(
                            [
                              s.slideVisibleClass,
                              s.slideActiveClass,
                              s.slideNextClass,
                              s.slidePrevClass
                            ].join(' ')
                          )
                          .removeAttr('style')
                          .removeAttr('data-swiper-slide-index')),
                    i.emit('destroy'),
                    Object.keys(i.eventsListeners).forEach(function(e) {
                      i.off(e)
                    }),
                    !1 !== e &&
                      ((i.$el[0].swiper = null),
                      i.$el.data('swiper', null),
                      r.deleteProps(i)),
                    (i.destroyed = !0),
                    null)
              }),
              (t.extendDefaults = function(e) {
                r.extend(Y, e)
              }),
              (i.extendedDefaults.get = function() {
                return Y
              }),
              (i.defaults.get = function() {
                return X
              }),
              (i.Class.get = function() {
                return e
              }),
              (i.$.get = function() {
                return s
              }),
              Object.defineProperties(t, i),
              t
            )
          })(l),
          W = { name: 'device', proto: { device: L }, static: { device: L } },
          q = {
            name: 'support',
            proto: { support: o },
            static: { support: o }
          },
          R = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: (function() {
              var e = t.navigator.userAgent.toLowerCase()
              return (
                e.indexOf('safari') >= 0 &&
                e.indexOf('chrome') < 0 &&
                e.indexOf('android') < 0
              )
            })(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              t.navigator.userAgent
            )
          },
          j = {
            name: 'browser',
            proto: { browser: R },
            static: { browser: R }
          },
          _ = {
            name: 'resize',
            create: function() {
              var e = this
              r.extend(e, {
                resize: {
                  resizeHandler: function() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      (e.emit('beforeResize'), e.emit('resize'))
                  },
                  orientationChangeHandler: function() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      e.emit('orientationchange')
                  }
                }
              })
            },
            on: {
              init: function() {
                t.addEventListener('resize', this.resize.resizeHandler),
                  t.addEventListener(
                    'orientationchange',
                    this.resize.orientationChangeHandler
                  )
              },
              destroy: function() {
                t.removeEventListener('resize', this.resize.resizeHandler),
                  t.removeEventListener(
                    'orientationchange',
                    this.resize.orientationChangeHandler
                  )
              }
            }
          },
          U = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function(e, i) {
              void 0 === i && (i = {})
              var s = this,
                a = new (0, U.func)(function(e) {
                  if (1 !== e.length) {
                    var i = function() {
                      s.emit('observerUpdate', e[0])
                    }
                    t.requestAnimationFrame
                      ? t.requestAnimationFrame(i)
                      : t.setTimeout(i, 0)
                  } else s.emit('observerUpdate', e[0])
                })
              a.observe(e, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData
              }),
                s.observer.observers.push(a)
            },
            init: function() {
              if (o.observer && this.params.observer) {
                if (this.params.observeParents)
                  for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
                    this.observer.attach(e[t])
                this.observer.attach(this.$el[0], {
                  childList: this.params.observeSlideChildren
                }),
                  this.observer.attach(this.$wrapperEl[0], { attributes: !1 })
              }
            },
            destroy: function() {
              this.observer.observers.forEach(function(e) {
                e.disconnect()
              }),
                (this.observer.observers = [])
            }
          },
          K = {
            name: 'observer',
            params: {
              observer: !1,
              observeParents: !1,
              observeSlideChildren: !1
            },
            create: function() {
              r.extend(this, {
                observer: {
                  init: U.init.bind(this),
                  attach: U.attach.bind(this),
                  destroy: U.destroy.bind(this),
                  observers: []
                }
              })
            },
            on: {
              init: function() {
                this.observer.init()
              },
              destroy: function() {
                this.observer.destroy()
              }
            }
          },
          J = {
            update: function(e) {
              var t = this,
                i = t.params,
                s = i.slidesPerView,
                a = i.slidesPerGroup,
                n = i.centeredSlides,
                o = t.params.virtual,
                l = o.addSlidesBefore,
                d = o.addSlidesAfter,
                h = t.virtual,
                p = h.from,
                c = h.to,
                u = h.slides,
                f = h.slidesGrid,
                v = h.renderSlide,
                m = h.offset
              t.updateActiveIndex()
              var g,
                b,
                w,
                y = t.activeIndex || 0
              ;(g = t.rtlTranslate
                ? 'right'
                : t.isHorizontal()
                ? 'left'
                : 'top'),
                n
                  ? ((b = Math.floor(s / 2) + a + l),
                    (w = Math.floor(s / 2) + a + d))
                  : ((b = s + (a - 1) + l), (w = a + d))
              var x = Math.max((y || 0) - w, 0),
                T = Math.min((y || 0) + b, u.length - 1),
                S = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0)
              function E() {
                t.updateSlides(),
                  t.updateProgress(),
                  t.updateSlidesClasses(),
                  t.lazy && t.params.lazy.enabled && t.lazy.load()
              }
              if (
                (r.extend(t.virtual, {
                  from: x,
                  to: T,
                  offset: S,
                  slidesGrid: t.slidesGrid
                }),
                p === x && c === T && !e)
              )
                return (
                  t.slidesGrid !== f && S !== m && t.slides.css(g, S + 'px'),
                  void t.updateProgress()
                )
              if (t.params.virtual.renderExternal)
                return (
                  t.params.virtual.renderExternal.call(t, {
                    offset: S,
                    from: x,
                    to: T,
                    slides: (function() {
                      for (var e = [], t = x; t <= T; t += 1) e.push(u[t])
                      return e
                    })()
                  }),
                  void E()
                )
              var C = [],
                M = []
              if (e) t.$wrapperEl.find('.' + t.params.slideClass).remove()
              else
                for (var P = p; P <= c; P += 1)
                  (P < x || P > T) &&
                    t.$wrapperEl
                      .find(
                        '.' +
                          t.params.slideClass +
                          '[data-swiper-slide-index="' +
                          P +
                          '"]'
                      )
                      .remove()
              for (var z = 0; z < u.length; z += 1)
                z >= x &&
                  z <= T &&
                  (void 0 === c || e
                    ? M.push(z)
                    : (z > c && M.push(z), z < p && C.push(z)))
              M.forEach(function(e) {
                t.$wrapperEl.append(v(u[e], e))
              }),
                C.sort(function(e, t) {
                  return t - e
                }).forEach(function(e) {
                  t.$wrapperEl.prepend(v(u[e], e))
                }),
                t.$wrapperEl.children('.swiper-slide').css(g, S + 'px'),
                E()
            },
            renderSlide: function(e, t) {
              var i = this.params.virtual
              if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t]
              var a = i.renderSlide
                ? s(i.renderSlide.call(this, e, t))
                : s(
                    '<div class="' +
                      this.params.slideClass +
                      '" data-swiper-slide-index="' +
                      t +
                      '">' +
                      e +
                      '</div>'
                  )
              return (
                a.attr('data-swiper-slide-index') ||
                  a.attr('data-swiper-slide-index', t),
                i.cache && (this.virtual.cache[t] = a),
                a
              )
            },
            appendSlide: function(e) {
              if ('object' == typeof e && 'length' in e)
                for (var t = 0; t < e.length; t += 1)
                  e[t] && this.virtual.slides.push(e[t])
              else this.virtual.slides.push(e)
              this.virtual.update(!0)
            },
            prependSlide: function(e) {
              var t = this.activeIndex,
                i = t + 1,
                s = 1
              if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1)
                  e[a] && this.virtual.slides.unshift(e[a])
                ;(i = t + e.length), (s = e.length)
              } else this.virtual.slides.unshift(e)
              if (this.params.virtual.cache) {
                var n = this.virtual.cache,
                  r = {}
                Object.keys(n).forEach(function(e) {
                  var t = n[e],
                    i = t.attr('data-swiper-slide-index')
                  i && t.attr('data-swiper-slide-index', parseInt(i, 10) + 1),
                    (r[parseInt(e, 10) + s] = t)
                }),
                  (this.virtual.cache = r)
              }
              this.virtual.update(!0), this.slideTo(i, 0)
            },
            removeSlide: function(e) {
              if (null != e) {
                var t = this.activeIndex
                if (Array.isArray(e))
                  for (var i = e.length - 1; i >= 0; i -= 1)
                    this.virtual.slides.splice(e[i], 1),
                      this.params.virtual.cache &&
                        delete this.virtual.cache[e[i]],
                      e[i] < t && (t -= 1),
                      (t = Math.max(t, 0))
                else
                  this.virtual.slides.splice(e, 1),
                    this.params.virtual.cache && delete this.virtual.cache[e],
                    e < t && (t -= 1),
                    (t = Math.max(t, 0))
                this.virtual.update(!0), this.slideTo(t, 0)
              }
            },
            removeAllSlides: function() {
              ;(this.virtual.slides = []),
                this.params.virtual.cache && (this.virtual.cache = {}),
                this.virtual.update(!0),
                this.slideTo(0, 0)
            }
          },
          Z = {
            name: 'virtual',
            params: {
              virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
              }
            },
            create: function() {
              r.extend(this, {
                virtual: {
                  update: J.update.bind(this),
                  appendSlide: J.appendSlide.bind(this),
                  prependSlide: J.prependSlide.bind(this),
                  removeSlide: J.removeSlide.bind(this),
                  removeAllSlides: J.removeAllSlides.bind(this),
                  renderSlide: J.renderSlide.bind(this),
                  slides: this.params.virtual.slides,
                  cache: {}
                }
              })
            },
            on: {
              beforeInit: function() {
                if (this.params.virtual.enabled) {
                  this.classNames.push(
                    this.params.containerModifierClass + 'virtual'
                  )
                  var e = { watchSlidesProgress: !0 }
                  r.extend(this.params, e),
                    r.extend(this.originalParams, e),
                    this.params.initialSlide || this.virtual.update()
                }
              },
              setTranslate: function() {
                this.params.virtual.enabled && this.virtual.update()
              }
            }
          },
          Q = {
            handle: function(i) {
              var s = this.rtlTranslate,
                a = i
              a.originalEvent && (a = a.originalEvent)
              var n = a.keyCode || a.charCode
              if (
                !this.allowSlideNext &&
                ((this.isHorizontal() && 39 === n) ||
                  (this.isVertical() && 40 === n) ||
                  34 === n)
              )
                return !1
              if (
                !this.allowSlidePrev &&
                ((this.isHorizontal() && 37 === n) ||
                  (this.isVertical() && 38 === n) ||
                  33 === n)
              )
                return !1
              if (
                !(
                  a.shiftKey ||
                  a.altKey ||
                  a.ctrlKey ||
                  a.metaKey ||
                  (e.activeElement &&
                    e.activeElement.nodeName &&
                    ('input' === e.activeElement.nodeName.toLowerCase() ||
                      'textarea' === e.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (
                  this.params.keyboard.onlyInViewport &&
                  (33 === n ||
                    34 === n ||
                    37 === n ||
                    39 === n ||
                    38 === n ||
                    40 === n)
                ) {
                  var r = !1
                  if (
                    this.$el.parents('.' + this.params.slideClass).length > 0 &&
                    0 ===
                      this.$el.parents('.' + this.params.slideActiveClass)
                        .length
                  )
                    return
                  var o = t.innerWidth,
                    l = t.innerHeight,
                    d = this.$el.offset()
                  s && (d.left -= this.$el[0].scrollLeft)
                  for (
                    var h = [
                        [d.left, d.top],
                        [d.left + this.width, d.top],
                        [d.left, d.top + this.height],
                        [d.left + this.width, d.top + this.height]
                      ],
                      p = 0;
                    p < h.length;
                    p += 1
                  ) {
                    var c = h[p]
                    c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (r = !0)
                  }
                  if (!r) return
                }
                this.isHorizontal()
                  ? ((33 !== n && 34 !== n && 37 !== n && 39 !== n) ||
                      (a.preventDefault
                        ? a.preventDefault()
                        : (a.returnValue = !1)),
                    (((34 !== n && 39 !== n) || s) &&
                      ((33 !== n && 37 !== n) || !s)) ||
                      this.slideNext(),
                    (((33 !== n && 37 !== n) || s) &&
                      ((34 !== n && 39 !== n) || !s)) ||
                      this.slidePrev())
                  : ((33 !== n && 34 !== n && 38 !== n && 40 !== n) ||
                      (a.preventDefault
                        ? a.preventDefault()
                        : (a.returnValue = !1)),
                    (34 !== n && 40 !== n) || this.slideNext(),
                    (33 !== n && 38 !== n) || this.slidePrev()),
                  this.emit('keyPress', n)
              }
            },
            enable: function() {
              this.keyboard.enabled ||
                (s(e).on('keydown', this.keyboard.handle),
                (this.keyboard.enabled = !0))
            },
            disable: function() {
              this.keyboard.enabled &&
                (s(e).off('keydown', this.keyboard.handle),
                (this.keyboard.enabled = !1))
            }
          },
          ee = {
            name: 'keyboard',
            params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
            create: function() {
              r.extend(this, {
                keyboard: {
                  enabled: !1,
                  enable: Q.enable.bind(this),
                  disable: Q.disable.bind(this),
                  handle: Q.handle.bind(this)
                }
              })
            },
            on: {
              init: function() {
                this.params.keyboard.enabled && this.keyboard.enable()
              },
              destroy: function() {
                this.keyboard.enabled && this.keyboard.disable()
              }
            }
          },
          te = {
            lastScrollTime: r.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
              return t.navigator.userAgent.indexOf('firefox') > -1
                ? 'DOMMouseScroll'
                : (function() {
                    var t = 'onwheel' in e
                    if (!t) {
                      var i = e.createElement('div')
                      i.setAttribute('onwheel', 'return;'),
                        (t = 'function' == typeof i.onwheel)
                    }
                    return (
                      !t &&
                        e.implementation &&
                        e.implementation.hasFeature &&
                        !0 !== e.implementation.hasFeature('', '') &&
                        (t = e.implementation.hasFeature(
                          'Events.wheel',
                          '3.0'
                        )),
                      t
                    )
                  })()
                ? 'wheel'
                : 'mousewheel'
            },
            normalize: function(e) {
              var t = 0,
                i = 0,
                s = 0,
                a = 0
              return (
                'detail' in e && (i = e.detail),
                'wheelDelta' in e && (i = -e.wheelDelta / 120),
                'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120),
                'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
                'axis' in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = i), (i = 0)),
                (s = 10 * t),
                (a = 10 * i),
                'deltaY' in e && (a = e.deltaY),
                'deltaX' in e && (s = e.deltaX),
                e.shiftKey && !s && ((s = a), (a = 0)),
                (s || a) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((s *= 40), (a *= 40))
                    : ((s *= 800), (a *= 800))),
                s && !t && (t = s < 1 ? -1 : 1),
                a && !i && (i = a < 1 ? -1 : 1),
                { spinX: t, spinY: i, pixelX: s, pixelY: a }
              )
            },
            handleMouseEnter: function() {
              this.mouseEntered = !0
            },
            handleMouseLeave: function() {
              this.mouseEntered = !1
            },
            handle: function(e) {
              var i = e,
                s = this,
                a = s.params.mousewheel
              if (
                (s.params.cssMode && i.preventDefault(),
                !s.mouseEntered && !a.releaseOnEdges)
              )
                return !0
              i.originalEvent && (i = i.originalEvent)
              var n = 0,
                o = s.rtlTranslate ? -1 : 1,
                l = te.normalize(i)
              if (a.forceToAxis)
                if (s.isHorizontal()) {
                  if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0
                  n = l.pixelX * o
                } else {
                  if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0
                  n = l.pixelY
                }
              else
                n =
                  Math.abs(l.pixelX) > Math.abs(l.pixelY)
                    ? -l.pixelX * o
                    : -l.pixelY
              if (0 === n) return !0
              if ((a.invert && (n = -n), s.params.freeMode)) {
                var d = {
                    time: r.now(),
                    delta: Math.abs(n),
                    direction: Math.sign(n)
                  },
                  h = s.mousewheel.lastEventBeforeSnap,
                  p =
                    h &&
                    d.time < h.time + 500 &&
                    d.delta <= h.delta &&
                    d.direction === h.direction
                if (!p) {
                  ;(s.mousewheel.lastEventBeforeSnap = void 0),
                    s.params.loop && s.loopFix()
                  var c = s.getTranslate() + n * a.sensitivity,
                    u = s.isBeginning,
                    f = s.isEnd
                  if (
                    (c >= s.minTranslate() && (c = s.minTranslate()),
                    c <= s.maxTranslate() && (c = s.maxTranslate()),
                    s.setTransition(0),
                    s.setTranslate(c),
                    s.updateProgress(),
                    s.updateActiveIndex(),
                    s.updateSlidesClasses(),
                    ((!u && s.isBeginning) || (!f && s.isEnd)) &&
                      s.updateSlidesClasses(),
                    s.params.freeModeSticky)
                  ) {
                    clearTimeout(s.mousewheel.timeout),
                      (s.mousewheel.timeout = void 0)
                    var v = s.mousewheel.recentWheelEvents
                    v.length >= 15 && v.shift()
                    var m = v.length ? v[v.length - 1] : void 0,
                      g = v[0]
                    if (
                      (v.push(d),
                      m && (d.delta > m.delta || d.direction !== m.direction))
                    )
                      v.splice(0)
                    else if (
                      v.length >= 15 &&
                      d.time - g.time < 500 &&
                      g.delta - d.delta >= 1 &&
                      d.delta <= 6
                    ) {
                      var b = n > 0 ? 0.8 : 0.2
                      ;(s.mousewheel.lastEventBeforeSnap = d),
                        v.splice(0),
                        (s.mousewheel.timeout = r.nextTick(function() {
                          s.slideToClosest(s.params.speed, !0, void 0, b)
                        }, 0))
                    }
                    s.mousewheel.timeout ||
                      (s.mousewheel.timeout = r.nextTick(function() {
                        ;(s.mousewheel.lastEventBeforeSnap = d),
                          v.splice(0),
                          s.slideToClosest(s.params.speed, !0, void 0, 0.5)
                      }, 500))
                  }
                  if (
                    (p || s.emit('scroll', i),
                    s.params.autoplay &&
                      s.params.autoplayDisableOnInteraction &&
                      s.autoplay.stop(),
                    c === s.minTranslate() || c === s.maxTranslate())
                  )
                    return !0
                }
              } else {
                if (r.now() - s.mousewheel.lastScrollTime > 60)
                  if (n < 0)
                    if ((s.isEnd && !s.params.loop) || s.animating) {
                      if (a.releaseOnEdges) return !0
                    } else s.slideNext(), s.emit('scroll', i)
                  else if ((s.isBeginning && !s.params.loop) || s.animating) {
                    if (a.releaseOnEdges) return !0
                  } else s.slidePrev(), s.emit('scroll', i)
                s.mousewheel.lastScrollTime = new t.Date().getTime()
              }
              return (
                i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1
              )
            },
            enable: function() {
              var e = te.event()
              if (this.params.cssMode)
                return (
                  this.wrapperEl.removeEventListener(e, this.mousewheel.handle),
                  !0
                )
              if (!e) return !1
              if (this.mousewheel.enabled) return !1
              var t = this.$el
              return (
                'container' !== this.params.mousewheel.eventsTarged &&
                  (t = s(this.params.mousewheel.eventsTarged)),
                t.on('mouseenter', this.mousewheel.handleMouseEnter),
                t.on('mouseleave', this.mousewheel.handleMouseLeave),
                t.on(e, this.mousewheel.handle),
                (this.mousewheel.enabled = !0),
                !0
              )
            },
            disable: function() {
              var e = te.event()
              if (this.params.cssMode)
                return (
                  this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0
                )
              if (!e) return !1
              if (!this.mousewheel.enabled) return !1
              var t = this.$el
              return (
                'container' !== this.params.mousewheel.eventsTarged &&
                  (t = s(this.params.mousewheel.eventsTarged)),
                t.off(e, this.mousewheel.handle),
                (this.mousewheel.enabled = !1),
                !0
              )
            }
          },
          ie = {
            update: function() {
              var e = this.params.navigation
              if (!this.params.loop) {
                var t = this.navigation,
                  i = t.$nextEl,
                  s = t.$prevEl
                s &&
                  s.length > 0 &&
                  (this.isBeginning
                    ? s.addClass(e.disabledClass)
                    : s.removeClass(e.disabledClass),
                  s[
                    this.params.watchOverflow && this.isLocked
                      ? 'addClass'
                      : 'removeClass'
                  ](e.lockClass)),
                  i &&
                    i.length > 0 &&
                    (this.isEnd
                      ? i.addClass(e.disabledClass)
                      : i.removeClass(e.disabledClass),
                    i[
                      this.params.watchOverflow && this.isLocked
                        ? 'addClass'
                        : 'removeClass'
                    ](e.lockClass))
              }
            },
            onPrevClick: function(e) {
              e.preventDefault(),
                (this.isBeginning && !this.params.loop) || this.slidePrev()
            },
            onNextClick: function(e) {
              e.preventDefault(),
                (this.isEnd && !this.params.loop) || this.slideNext()
            },
            init: function() {
              var e,
                t,
                i = this.params.navigation
              ;(i.nextEl || i.prevEl) &&
                (i.nextEl &&
                  ((e = s(i.nextEl)),
                  this.params.uniqueNavElements &&
                    'string' == typeof i.nextEl &&
                    e.length > 1 &&
                    1 === this.$el.find(i.nextEl).length &&
                    (e = this.$el.find(i.nextEl))),
                i.prevEl &&
                  ((t = s(i.prevEl)),
                  this.params.uniqueNavElements &&
                    'string' == typeof i.prevEl &&
                    t.length > 1 &&
                    1 === this.$el.find(i.prevEl).length &&
                    (t = this.$el.find(i.prevEl))),
                e && e.length > 0 && e.on('click', this.navigation.onNextClick),
                t && t.length > 0 && t.on('click', this.navigation.onPrevClick),
                r.extend(this.navigation, {
                  $nextEl: e,
                  nextEl: e && e[0],
                  $prevEl: t,
                  prevEl: t && t[0]
                }))
            },
            destroy: function() {
              var e = this.navigation,
                t = e.$nextEl,
                i = e.$prevEl
              t &&
                t.length &&
                (t.off('click', this.navigation.onNextClick),
                t.removeClass(this.params.navigation.disabledClass)),
                i &&
                  i.length &&
                  (i.off('click', this.navigation.onPrevClick),
                  i.removeClass(this.params.navigation.disabledClass))
            }
          },
          se = {
            update: function() {
              var e = this.rtl,
                t = this.params.pagination
              if (
                t.el &&
                this.pagination.el &&
                this.pagination.$el &&
                0 !== this.pagination.$el.length
              ) {
                var i,
                  a =
                    this.virtual && this.params.virtual.enabled
                      ? this.virtual.slides.length
                      : this.slides.length,
                  n = this.pagination.$el,
                  r = this.params.loop
                    ? Math.ceil(
                        (a - 2 * this.loopedSlides) / this.params.slidesPerGroup
                      )
                    : this.snapGrid.length
                if (
                  (this.params.loop
                    ? ((i = Math.ceil(
                        (this.activeIndex - this.loopedSlides) /
                          this.params.slidesPerGroup
                      )) >
                        a - 1 - 2 * this.loopedSlides &&
                        (i -= a - 2 * this.loopedSlides),
                      i > r - 1 && (i -= r),
                      i < 0 &&
                        'bullets' !== this.params.paginationType &&
                        (i = r + i))
                    : (i =
                        void 0 !== this.snapIndex
                          ? this.snapIndex
                          : this.activeIndex || 0),
                  'bullets' === t.type &&
                    this.pagination.bullets &&
                    this.pagination.bullets.length > 0)
                ) {
                  var o,
                    l,
                    d,
                    h = this.pagination.bullets
                  if (
                    (t.dynamicBullets &&
                      ((this.pagination.bulletSize = h
                        .eq(0)
                        [this.isHorizontal() ? 'outerWidth' : 'outerHeight'](
                          !0
                        )),
                      n.css(
                        this.isHorizontal() ? 'width' : 'height',
                        this.pagination.bulletSize *
                          (t.dynamicMainBullets + 4) +
                          'px'
                      ),
                      t.dynamicMainBullets > 1 &&
                        void 0 !== this.previousIndex &&
                        ((this.pagination.dynamicBulletIndex +=
                          i - this.previousIndex),
                        this.pagination.dynamicBulletIndex >
                        t.dynamicMainBullets - 1
                          ? (this.pagination.dynamicBulletIndex =
                              t.dynamicMainBullets - 1)
                          : this.pagination.dynamicBulletIndex < 0 &&
                            (this.pagination.dynamicBulletIndex = 0)),
                      (o = i - this.pagination.dynamicBulletIndex),
                      (d =
                        ((l =
                          o + (Math.min(h.length, t.dynamicMainBullets) - 1)) +
                          o) /
                        2)),
                    h.removeClass(
                      t.bulletActiveClass +
                        ' ' +
                        t.bulletActiveClass +
                        '-next ' +
                        t.bulletActiveClass +
                        '-next-next ' +
                        t.bulletActiveClass +
                        '-prev ' +
                        t.bulletActiveClass +
                        '-prev-prev ' +
                        t.bulletActiveClass +
                        '-main'
                    ),
                    n.length > 1)
                  )
                    h.each(function(e, a) {
                      var n = s(a),
                        r = n.index()
                      r === i && n.addClass(t.bulletActiveClass),
                        t.dynamicBullets &&
                          (r >= o &&
                            r <= l &&
                            n.addClass(t.bulletActiveClass + '-main'),
                          r === o &&
                            n
                              .prev()
                              .addClass(t.bulletActiveClass + '-prev')
                              .prev()
                              .addClass(t.bulletActiveClass + '-prev-prev'),
                          r === l &&
                            n
                              .next()
                              .addClass(t.bulletActiveClass + '-next')
                              .next()
                              .addClass(t.bulletActiveClass + '-next-next'))
                    })
                  else {
                    var p = h.eq(i),
                      c = p.index()
                    if ((p.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                      for (var u = h.eq(o), f = h.eq(l), v = o; v <= l; v += 1)
                        h.eq(v).addClass(t.bulletActiveClass + '-main')
                      if (this.params.loop)
                        if (c >= h.length - t.dynamicMainBullets) {
                          for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                            h.eq(h.length - m).addClass(
                              t.bulletActiveClass + '-main'
                            )
                          h.eq(h.length - t.dynamicMainBullets - 1).addClass(
                            t.bulletActiveClass + '-prev'
                          )
                        } else
                          u
                            .prev()
                            .addClass(t.bulletActiveClass + '-prev')
                            .prev()
                            .addClass(t.bulletActiveClass + '-prev-prev'),
                            f
                              .next()
                              .addClass(t.bulletActiveClass + '-next')
                              .next()
                              .addClass(t.bulletActiveClass + '-next-next')
                      else
                        u
                          .prev()
                          .addClass(t.bulletActiveClass + '-prev')
                          .prev()
                          .addClass(t.bulletActiveClass + '-prev-prev'),
                          f
                            .next()
                            .addClass(t.bulletActiveClass + '-next')
                            .next()
                            .addClass(t.bulletActiveClass + '-next-next')
                    }
                  }
                  if (t.dynamicBullets) {
                    var g = Math.min(h.length, t.dynamicMainBullets + 4),
                      b =
                        (this.pagination.bulletSize * g -
                          this.pagination.bulletSize) /
                          2 -
                        d * this.pagination.bulletSize,
                      w = e ? 'right' : 'left'
                    h.css(this.isHorizontal() ? w : 'top', b + 'px')
                  }
                }
                if (
                  ('fraction' === t.type &&
                    (n
                      .find('.' + t.currentClass)
                      .text(t.formatFractionCurrent(i + 1)),
                    n.find('.' + t.totalClass).text(t.formatFractionTotal(r))),
                  'progressbar' === t.type)
                ) {
                  var y
                  y = t.progressbarOpposite
                    ? this.isHorizontal()
                      ? 'vertical'
                      : 'horizontal'
                    : this.isHorizontal()
                    ? 'horizontal'
                    : 'vertical'
                  var x = (i + 1) / r,
                    T = 1,
                    S = 1
                  'horizontal' === y ? (T = x) : (S = x),
                    n
                      .find('.' + t.progressbarFillClass)
                      .transform(
                        'translate3d(0,0,0) scaleX(' + T + ') scaleY(' + S + ')'
                      )
                      .transition(this.params.speed)
                }
                'custom' === t.type && t.renderCustom
                  ? (n.html(t.renderCustom(this, i + 1, r)),
                    this.emit('paginationRender', this, n[0]))
                  : this.emit('paginationUpdate', this, n[0]),
                  n[
                    this.params.watchOverflow && this.isLocked
                      ? 'addClass'
                      : 'removeClass'
                  ](t.lockClass)
              }
            },
            render: function() {
              var e = this.params.pagination
              if (
                e.el &&
                this.pagination.el &&
                this.pagination.$el &&
                0 !== this.pagination.$el.length
              ) {
                var t =
                    this.virtual && this.params.virtual.enabled
                      ? this.virtual.slides.length
                      : this.slides.length,
                  i = this.pagination.$el,
                  s = ''
                if ('bullets' === e.type) {
                  for (
                    var a = this.params.loop
                        ? Math.ceil(
                            (t - 2 * this.loopedSlides) /
                              this.params.slidesPerGroup
                          )
                        : this.snapGrid.length,
                      n = 0;
                    n < a;
                    n += 1
                  )
                    e.renderBullet
                      ? (s += e.renderBullet.call(this, n, e.bulletClass))
                      : (s +=
                          '<' +
                          e.bulletElement +
                          ' class="' +
                          e.bulletClass +
                          '"></' +
                          e.bulletElement +
                          '>')
                  i.html(s),
                    (this.pagination.bullets = i.find('.' + e.bulletClass))
                }
                'fraction' === e.type &&
                  ((s = e.renderFraction
                    ? e.renderFraction.call(this, e.currentClass, e.totalClass)
                    : '<span class="' +
                      e.currentClass +
                      '"></span> / <span class="' +
                      e.totalClass +
                      '"></span>'),
                  i.html(s)),
                  'progressbar' === e.type &&
                    ((s = e.renderProgressbar
                      ? e.renderProgressbar.call(this, e.progressbarFillClass)
                      : '<span class="' + e.progressbarFillClass + '"></span>'),
                    i.html(s)),
                  'custom' !== e.type &&
                    this.emit('paginationRender', this.pagination.$el[0])
              }
            },
            init: function() {
              var e = this,
                t = e.params.pagination
              if (t.el) {
                var i = s(t.el)
                0 !== i.length &&
                  (e.params.uniqueNavElements &&
                    'string' == typeof t.el &&
                    i.length > 1 &&
                    1 === e.$el.find(t.el).length &&
                    (i = e.$el.find(t.el)),
                  'bullets' === t.type &&
                    t.clickable &&
                    i.addClass(t.clickableClass),
                  i.addClass(t.modifierClass + t.type),
                  'bullets' === t.type &&
                    t.dynamicBullets &&
                    (i.addClass('' + t.modifierClass + t.type + '-dynamic'),
                    (e.pagination.dynamicBulletIndex = 0),
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                  'progressbar' === t.type &&
                    t.progressbarOpposite &&
                    i.addClass(t.progressbarOppositeClass),
                  t.clickable &&
                    i.on('click', '.' + t.bulletClass, function(t) {
                      t.preventDefault()
                      var i = s(this).index() * e.params.slidesPerGroup
                      e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    }),
                  r.extend(e.pagination, { $el: i, el: i[0] }))
              }
            },
            destroy: function() {
              var e = this.params.pagination
              if (
                e.el &&
                this.pagination.el &&
                this.pagination.$el &&
                0 !== this.pagination.$el.length
              ) {
                var t = this.pagination.$el
                t.removeClass(e.hiddenClass),
                  t.removeClass(e.modifierClass + e.type),
                  this.pagination.bullets &&
                    this.pagination.bullets.removeClass(e.bulletActiveClass),
                  e.clickable && t.off('click', '.' + e.bulletClass)
              }
            }
          },
          ae = {
            setTranslate: function() {
              if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar,
                  t = this.rtlTranslate,
                  i = this.progress,
                  s = e.dragSize,
                  a = e.trackSize,
                  n = e.$dragEl,
                  r = e.$el,
                  o = this.params.scrollbar,
                  l = s,
                  d = (a - s) * i
                t
                  ? (d = -d) > 0
                    ? ((l = s - d), (d = 0))
                    : -d + s > a && (l = a + d)
                  : d < 0
                  ? ((l = s + d), (d = 0))
                  : d + s > a && (l = a - d),
                  this.isHorizontal()
                    ? (n.transform('translate3d(' + d + 'px, 0, 0)'),
                      (n[0].style.width = l + 'px'))
                    : (n.transform('translate3d(0px, ' + d + 'px, 0)'),
                      (n[0].style.height = l + 'px')),
                  o.hide &&
                    (clearTimeout(this.scrollbar.timeout),
                    (r[0].style.opacity = 1),
                    (this.scrollbar.timeout = setTimeout(function() {
                      ;(r[0].style.opacity = 0), r.transition(400)
                    }, 1e3)))
              }
            },
            setTransition: function(e) {
              this.params.scrollbar.el &&
                this.scrollbar.el &&
                this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
              if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar,
                  t = e.$dragEl,
                  i = e.$el
                ;(t[0].style.width = ''), (t[0].style.height = '')
                var s,
                  a = this.isHorizontal()
                    ? i[0].offsetWidth
                    : i[0].offsetHeight,
                  n = this.size / this.virtualSize,
                  o = n * (a / this.size)
                ;(s =
                  'auto' === this.params.scrollbar.dragSize
                    ? a * n
                    : parseInt(this.params.scrollbar.dragSize, 10)),
                  this.isHorizontal()
                    ? (t[0].style.width = s + 'px')
                    : (t[0].style.height = s + 'px'),
                  (i[0].style.display = n >= 1 ? 'none' : ''),
                  this.params.scrollbar.hide && (i[0].style.opacity = 0),
                  r.extend(e, {
                    trackSize: a,
                    divider: n,
                    moveDivider: o,
                    dragSize: s
                  }),
                  e.$el[
                    this.params.watchOverflow && this.isLocked
                      ? 'addClass'
                      : 'removeClass'
                  ](this.params.scrollbar.lockClass)
              }
            },
            getPointerPosition: function(e) {
              return this.isHorizontal()
                ? 'touchstart' === e.type || 'touchmove' === e.type
                  ? e.targetTouches[0].clientX
                  : e.clientX
                : 'touchstart' === e.type || 'touchmove' === e.type
                ? e.targetTouches[0].clientY
                : e.clientY
            },
            setDragPosition: function(e) {
              var t,
                i = this.scrollbar,
                s = this.rtlTranslate,
                a = i.$el,
                n = i.dragSize,
                r = i.trackSize,
                o = i.dragStartPos
              ;(t =
                (i.getPointerPosition(e) -
                  a.offset()[this.isHorizontal() ? 'left' : 'top'] -
                  (null !== o ? o : n / 2)) /
                (r - n)),
                (t = Math.max(Math.min(t, 1), 0)),
                s && (t = 1 - t)
              var l =
                this.minTranslate() +
                (this.maxTranslate() - this.minTranslate()) * t
              this.updateProgress(l),
                this.setTranslate(l),
                this.updateActiveIndex(),
                this.updateSlidesClasses()
            },
            onDragStart: function(e) {
              var t = this.params.scrollbar,
                i = this.scrollbar,
                s = this.$wrapperEl,
                a = i.$el,
                n = i.$dragEl
              ;(this.scrollbar.isTouched = !0),
                (this.scrollbar.dragStartPos =
                  e.target === n[0] || e.target === n
                    ? i.getPointerPosition(e) -
                      e.target.getBoundingClientRect()[
                        this.isHorizontal() ? 'left' : 'top'
                      ]
                    : null),
                e.preventDefault(),
                e.stopPropagation(),
                s.transition(100),
                n.transition(100),
                i.setDragPosition(e),
                clearTimeout(this.scrollbar.dragTimeout),
                a.transition(0),
                t.hide && a.css('opacity', 1),
                this.params.cssMode &&
                  this.$wrapperEl.css('scroll-snap-type', 'none'),
                this.emit('scrollbarDragStart', e)
            },
            onDragMove: function(e) {
              var t = this.scrollbar,
                i = this.$wrapperEl,
                s = t.$el,
                a = t.$dragEl
              this.scrollbar.isTouched &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                t.setDragPosition(e),
                i.transition(0),
                s.transition(0),
                a.transition(0),
                this.emit('scrollbarDragMove', e))
            },
            onDragEnd: function(e) {
              var t = this.params.scrollbar,
                i = this.scrollbar,
                s = this.$wrapperEl,
                a = i.$el
              this.scrollbar.isTouched &&
                ((this.scrollbar.isTouched = !1),
                this.params.cssMode &&
                  (this.$wrapperEl.css('scroll-snap-type', ''),
                  s.transition('')),
                t.hide &&
                  (clearTimeout(this.scrollbar.dragTimeout),
                  (this.scrollbar.dragTimeout = r.nextTick(function() {
                    a.css('opacity', 0), a.transition(400)
                  }, 1e3))),
                this.emit('scrollbarDragEnd', e),
                t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
              if (this.params.scrollbar.el) {
                var t = this.scrollbar,
                  i = this.touchEventsTouch,
                  s = this.touchEventsDesktop,
                  a = this.params,
                  n = t.$el[0],
                  r = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                  },
                  l = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  }
                o.touch
                  ? (n.addEventListener(i.start, this.scrollbar.onDragStart, r),
                    n.addEventListener(i.move, this.scrollbar.onDragMove, r),
                    n.addEventListener(i.end, this.scrollbar.onDragEnd, l))
                  : (n.addEventListener(s.start, this.scrollbar.onDragStart, r),
                    e.addEventListener(s.move, this.scrollbar.onDragMove, r),
                    e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
              }
            },
            disableDraggable: function() {
              if (this.params.scrollbar.el) {
                var t = this.scrollbar,
                  i = this.touchEventsTouch,
                  s = this.touchEventsDesktop,
                  a = this.params,
                  n = t.$el[0],
                  r = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                  },
                  l = !(!o.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                  }
                o.touch
                  ? (n.removeEventListener(
                      i.start,
                      this.scrollbar.onDragStart,
                      r
                    ),
                    n.removeEventListener(i.move, this.scrollbar.onDragMove, r),
                    n.removeEventListener(i.end, this.scrollbar.onDragEnd, l))
                  : (n.removeEventListener(
                      s.start,
                      this.scrollbar.onDragStart,
                      r
                    ),
                    e.removeEventListener(s.move, this.scrollbar.onDragMove, r),
                    e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
              }
            },
            init: function() {
              if (this.params.scrollbar.el) {
                var e = this.scrollbar,
                  t = this.$el,
                  i = this.params.scrollbar,
                  a = s(i.el)
                this.params.uniqueNavElements &&
                  'string' == typeof i.el &&
                  a.length > 1 &&
                  1 === t.find(i.el).length &&
                  (a = t.find(i.el))
                var n = a.find('.' + this.params.scrollbar.dragClass)
                0 === n.length &&
                  ((n = s(
                    '<div class="' +
                      this.params.scrollbar.dragClass +
                      '"></div>'
                  )),
                  a.append(n)),
                  r.extend(e, { $el: a, el: a[0], $dragEl: n, dragEl: n[0] }),
                  i.draggable && e.enableDraggable()
              }
            },
            destroy: function() {
              this.scrollbar.disableDraggable()
            }
          },
          ne = {
            setTransform: function(e, t) {
              var i = this.rtl,
                a = s(e),
                n = i ? -1 : 1,
                r = a.attr('data-swiper-parallax') || '0',
                o = a.attr('data-swiper-parallax-x'),
                l = a.attr('data-swiper-parallax-y'),
                d = a.attr('data-swiper-parallax-scale'),
                h = a.attr('data-swiper-parallax-opacity')
              if (
                (o || l
                  ? ((o = o || '0'), (l = l || '0'))
                  : this.isHorizontal()
                  ? ((o = r), (l = '0'))
                  : ((l = r), (o = '0')),
                (o =
                  o.indexOf('%') >= 0
                    ? parseInt(o, 10) * t * n + '%'
                    : o * t * n + 'px'),
                (l =
                  l.indexOf('%') >= 0
                    ? parseInt(l, 10) * t + '%'
                    : l * t + 'px'),
                null != h)
              ) {
                var p = h - (h - 1) * (1 - Math.abs(t))
                a[0].style.opacity = p
              }
              if (null == d)
                a.transform('translate3d(' + o + ', ' + l + ', 0px)')
              else {
                var c = d - (d - 1) * (1 - Math.abs(t))
                a.transform(
                  'translate3d(' + o + ', ' + l + ', 0px) scale(' + c + ')'
                )
              }
            },
            setTranslate: function() {
              var e = this,
                t = e.$el,
                i = e.slides,
                a = e.progress,
                n = e.snapGrid
              t
                .children(
                  '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                )
                .each(function(t, i) {
                  e.parallax.setTransform(i, a)
                }),
                i.each(function(t, i) {
                  var r = i.progress
                  e.params.slidesPerGroup > 1 &&
                    'auto' !== e.params.slidesPerView &&
                    (r += Math.ceil(t / 2) - a * (n.length - 1)),
                    (r = Math.min(Math.max(r, -1), 1)),
                    s(i)
                      .find(
                        '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                      )
                      .each(function(t, i) {
                        e.parallax.setTransform(i, r)
                      })
                })
            },
            setTransition: function(e) {
              void 0 === e && (e = this.params.speed),
                this.$el
                  .find(
                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                  )
                  .each(function(t, i) {
                    var a = s(i),
                      n =
                        parseInt(a.attr('data-swiper-parallax-duration'), 10) ||
                        e
                    0 === e && (n = 0), a.transition(n)
                  })
            }
          },
          re = {
            getDistanceBetweenTouches: function(e) {
              if (e.targetTouches.length < 2) return 1
              var t = e.targetTouches[0].pageX,
                i = e.targetTouches[0].pageY,
                s = e.targetTouches[1].pageX,
                a = e.targetTouches[1].pageY
              return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function(e) {
              var t = this.params.zoom,
                i = this.zoom,
                a = i.gesture
              if (
                ((i.fakeGestureTouched = !1),
                (i.fakeGestureMoved = !1),
                !o.gestures)
              ) {
                if (
                  'touchstart' !== e.type ||
                  ('touchstart' === e.type && e.targetTouches.length < 2)
                )
                  return
                ;(i.fakeGestureTouched = !0),
                  (a.scaleStart = re.getDistanceBetweenTouches(e))
              }
              ;(a.$slideEl && a.$slideEl.length) ||
              ((a.$slideEl = s(e.target).closest('.swiper-slide')),
              0 === a.$slideEl.length &&
                (a.$slideEl = this.slides.eq(this.activeIndex)),
              (a.$imageEl = a.$slideEl.find('img, svg, canvas')),
              (a.$imageWrapEl = a.$imageEl.parent('.' + t.containerClass)),
              (a.maxRatio =
                a.$imageWrapEl.attr('data-swiper-zoom') || t.maxRatio),
              0 !== a.$imageWrapEl.length)
                ? (a.$imageEl.transition(0), (this.zoom.isScaling = !0))
                : (a.$imageEl = void 0)
            },
            onGestureChange: function(e) {
              var t = this.params.zoom,
                i = this.zoom,
                s = i.gesture
              if (!o.gestures) {
                if (
                  'touchmove' !== e.type ||
                  ('touchmove' === e.type && e.targetTouches.length < 2)
                )
                  return
                ;(i.fakeGestureMoved = !0),
                  (s.scaleMove = re.getDistanceBetweenTouches(e))
              }
              s.$imageEl &&
                0 !== s.$imageEl.length &&
                (o.gestures
                  ? (i.scale = e.scale * i.currentScale)
                  : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
                i.scale > s.maxRatio &&
                  (i.scale =
                    s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                i.scale < t.minRatio &&
                  (i.scale =
                    t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
                s.$imageEl.transform(
                  'translate3d(0,0,0) scale(' + i.scale + ')'
                ))
            },
            onGestureEnd: function(e) {
              var t = this.params.zoom,
                i = this.zoom,
                s = i.gesture
              if (!o.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return
                if (
                  'touchend' !== e.type ||
                  ('touchend' === e.type &&
                    e.changedTouches.length < 2 &&
                    !L.android)
                )
                  return
                ;(i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1)
              }
              s.$imageEl &&
                0 !== s.$imageEl.length &&
                ((i.scale = Math.max(
                  Math.min(i.scale, s.maxRatio),
                  t.minRatio
                )),
                s.$imageEl
                  .transition(this.params.speed)
                  .transform('translate3d(0,0,0) scale(' + i.scale + ')'),
                (i.currentScale = i.scale),
                (i.isScaling = !1),
                1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
              var t = this.zoom,
                i = t.gesture,
                s = t.image
              i.$imageEl &&
                0 !== i.$imageEl.length &&
                (s.isTouched ||
                  (L.android && e.preventDefault(),
                  (s.isTouched = !0),
                  (s.touchesStart.x =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (s.touchesStart.y =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY)))
            },
            onTouchMove: function(e) {
              var t = this.zoom,
                i = t.gesture,
                s = t.image,
                a = t.velocity
              if (
                i.$imageEl &&
                0 !== i.$imageEl.length &&
                ((this.allowClick = !1), s.isTouched && i.$slideEl)
              ) {
                s.isMoved ||
                  ((s.width = i.$imageEl[0].offsetWidth),
                  (s.height = i.$imageEl[0].offsetHeight),
                  (s.startX = r.getTranslate(i.$imageWrapEl[0], 'x') || 0),
                  (s.startY = r.getTranslate(i.$imageWrapEl[0], 'y') || 0),
                  (i.slideWidth = i.$slideEl[0].offsetWidth),
                  (i.slideHeight = i.$slideEl[0].offsetHeight),
                  i.$imageWrapEl.transition(0),
                  this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)))
                var n = s.width * t.scale,
                  o = s.height * t.scale
                if (!(n < i.slideWidth && o < i.slideHeight)) {
                  if (
                    ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                    (s.maxX = -s.minX),
                    (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                    (s.maxY = -s.minY),
                    (s.touchesCurrent.x =
                      'touchmove' === e.type
                        ? e.targetTouches[0].pageX
                        : e.pageX),
                    (s.touchesCurrent.y =
                      'touchmove' === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY),
                    !s.isMoved && !t.isScaling)
                  ) {
                    if (
                      this.isHorizontal() &&
                      ((Math.floor(s.minX) === Math.floor(s.startX) &&
                        s.touchesCurrent.x < s.touchesStart.x) ||
                        (Math.floor(s.maxX) === Math.floor(s.startX) &&
                          s.touchesCurrent.x > s.touchesStart.x))
                    )
                      return void (s.isTouched = !1)
                    if (
                      !this.isHorizontal() &&
                      ((Math.floor(s.minY) === Math.floor(s.startY) &&
                        s.touchesCurrent.y < s.touchesStart.y) ||
                        (Math.floor(s.maxY) === Math.floor(s.startY) &&
                          s.touchesCurrent.y > s.touchesStart.y))
                    )
                      return void (s.isTouched = !1)
                  }
                  e.preventDefault(),
                    e.stopPropagation(),
                    (s.isMoved = !0),
                    (s.currentX =
                      s.touchesCurrent.x - s.touchesStart.x + s.startX),
                    (s.currentY =
                      s.touchesCurrent.y - s.touchesStart.y + s.startY),
                    s.currentX < s.minX &&
                      (s.currentX =
                        s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                    s.currentX > s.maxX &&
                      (s.currentX =
                        s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                    s.currentY < s.minY &&
                      (s.currentY =
                        s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                    s.currentY > s.maxY &&
                      (s.currentY =
                        s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                    a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
                    a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
                    a.prevTime || (a.prevTime = Date.now()),
                    (a.x =
                      (s.touchesCurrent.x - a.prevPositionX) /
                      (Date.now() - a.prevTime) /
                      2),
                    (a.y =
                      (s.touchesCurrent.y - a.prevPositionY) /
                      (Date.now() - a.prevTime) /
                      2),
                    Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 &&
                      (a.x = 0),
                    Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 &&
                      (a.y = 0),
                    (a.prevPositionX = s.touchesCurrent.x),
                    (a.prevPositionY = s.touchesCurrent.y),
                    (a.prevTime = Date.now()),
                    i.$imageWrapEl.transform(
                      'translate3d(' +
                        s.currentX +
                        'px, ' +
                        s.currentY +
                        'px,0)'
                    )
                }
              }
            },
            onTouchEnd: function() {
              var e = this.zoom,
                t = e.gesture,
                i = e.image,
                s = e.velocity
              if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved)
                  return (i.isTouched = !1), void (i.isMoved = !1)
                ;(i.isTouched = !1), (i.isMoved = !1)
                var a = 300,
                  n = 300,
                  r = s.x * a,
                  o = i.currentX + r,
                  l = s.y * n,
                  d = i.currentY + l
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
                  0 !== s.y && (n = Math.abs((d - i.currentY) / s.y))
                var h = Math.max(a, n)
                ;(i.currentX = o), (i.currentY = d)
                var p = i.width * e.scale,
                  c = i.height * e.scale
                ;(i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
                  (i.maxX = -i.minX),
                  (i.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
                  (i.maxY = -i.minY),
                  (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                  (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                  t.$imageWrapEl
                    .transition(h)
                    .transform(
                      'translate3d(' +
                        i.currentX +
                        'px, ' +
                        i.currentY +
                        'px,0)'
                    )
              }
            },
            onTransitionEnd: function() {
              var e = this.zoom,
                t = e.gesture
              t.$slideEl &&
                this.previousIndex !== this.activeIndex &&
                (t.$imageEl.transform('translate3d(0,0,0) scale(1)'),
                t.$imageWrapEl.transform('translate3d(0,0,0)'),
                (e.scale = 1),
                (e.currentScale = 1),
                (t.$slideEl = void 0),
                (t.$imageEl = void 0),
                (t.$imageWrapEl = void 0))
            },
            toggle: function(e) {
              var t = this.zoom
              t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
              var t,
                i,
                a,
                n,
                r,
                o,
                l,
                d,
                h,
                p,
                c,
                u,
                f,
                v,
                m,
                g,
                b = this.zoom,
                w = this.params.zoom,
                y = b.gesture,
                x = b.image
              y.$slideEl ||
                ((y.$slideEl = this.clickedSlide
                  ? s(this.clickedSlide)
                  : this.slides.eq(this.activeIndex)),
                (y.$imageEl = y.$slideEl.find('img, svg, canvas')),
                (y.$imageWrapEl = y.$imageEl.parent('.' + w.containerClass))),
                y.$imageEl &&
                  0 !== y.$imageEl.length &&
                  (y.$slideEl.addClass('' + w.zoomedSlideClass),
                  void 0 === x.touchesStart.x && e
                    ? ((t =
                        'touchend' === e.type
                          ? e.changedTouches[0].pageX
                          : e.pageX),
                      (i =
                        'touchend' === e.type
                          ? e.changedTouches[0].pageY
                          : e.pageY))
                    : ((t = x.touchesStart.x), (i = x.touchesStart.y)),
                  (b.scale =
                    y.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
                  (b.currentScale =
                    y.$imageWrapEl.attr('data-swiper-zoom') || w.maxRatio),
                  e
                    ? ((m = y.$slideEl[0].offsetWidth),
                      (g = y.$slideEl[0].offsetHeight),
                      (a = y.$slideEl.offset().left + m / 2 - t),
                      (n = y.$slideEl.offset().top + g / 2 - i),
                      (l = y.$imageEl[0].offsetWidth),
                      (d = y.$imageEl[0].offsetHeight),
                      (h = l * b.scale),
                      (p = d * b.scale),
                      (f = -(c = Math.min(m / 2 - h / 2, 0))),
                      (v = -(u = Math.min(g / 2 - p / 2, 0))),
                      (r = a * b.scale) < c && (r = c),
                      r > f && (r = f),
                      (o = n * b.scale) < u && (o = u),
                      o > v && (o = v))
                    : ((r = 0), (o = 0)),
                  y.$imageWrapEl
                    .transition(300)
                    .transform('translate3d(' + r + 'px, ' + o + 'px,0)'),
                  y.$imageEl
                    .transition(300)
                    .transform('translate3d(0,0,0) scale(' + b.scale + ')'))
            },
            out: function() {
              var e = this.zoom,
                t = this.params.zoom,
                i = e.gesture
              i.$slideEl ||
                ((i.$slideEl = this.clickedSlide
                  ? s(this.clickedSlide)
                  : this.slides.eq(this.activeIndex)),
                (i.$imageEl = i.$slideEl.find('img, svg, canvas')),
                (i.$imageWrapEl = i.$imageEl.parent('.' + t.containerClass))),
                i.$imageEl &&
                  0 !== i.$imageEl.length &&
                  ((e.scale = 1),
                  (e.currentScale = 1),
                  i.$imageWrapEl
                    .transition(300)
                    .transform('translate3d(0,0,0)'),
                  i.$imageEl
                    .transition(300)
                    .transform('translate3d(0,0,0) scale(1)'),
                  i.$slideEl.removeClass('' + t.zoomedSlideClass),
                  (i.$slideEl = void 0))
            },
            enable: function() {
              var e = this.zoom
              if (!e.enabled) {
                e.enabled = !0
                var t = !(
                    'touchstart' !== this.touchEvents.start ||
                    !o.passiveListener ||
                    !this.params.passiveListeners
                  ) && { passive: !0, capture: !1 },
                  i = !o.passiveListener || { passive: !1, capture: !0 }
                o.gestures
                  ? (this.$wrapperEl.on(
                      'gesturestart',
                      '.swiper-slide',
                      e.onGestureStart,
                      t
                    ),
                    this.$wrapperEl.on(
                      'gesturechange',
                      '.swiper-slide',
                      e.onGestureChange,
                      t
                    ),
                    this.$wrapperEl.on(
                      'gestureend',
                      '.swiper-slide',
                      e.onGestureEnd,
                      t
                    ))
                  : 'touchstart' === this.touchEvents.start &&
                    (this.$wrapperEl.on(
                      this.touchEvents.start,
                      '.swiper-slide',
                      e.onGestureStart,
                      t
                    ),
                    this.$wrapperEl.on(
                      this.touchEvents.move,
                      '.swiper-slide',
                      e.onGestureChange,
                      i
                    ),
                    this.$wrapperEl.on(
                      this.touchEvents.end,
                      '.swiper-slide',
                      e.onGestureEnd,
                      t
                    ),
                    this.touchEvents.cancel &&
                      this.$wrapperEl.on(
                        this.touchEvents.cancel,
                        '.swiper-slide',
                        e.onGestureEnd,
                        t
                      )),
                  this.$wrapperEl.on(
                    this.touchEvents.move,
                    '.' + this.params.zoom.containerClass,
                    e.onTouchMove,
                    i
                  )
              }
            },
            disable: function() {
              var e = this.zoom
              if (e.enabled) {
                this.zoom.enabled = !1
                var t = !(
                    'touchstart' !== this.touchEvents.start ||
                    !o.passiveListener ||
                    !this.params.passiveListeners
                  ) && { passive: !0, capture: !1 },
                  i = !o.passiveListener || { passive: !1, capture: !0 }
                o.gestures
                  ? (this.$wrapperEl.off(
                      'gesturestart',
                      '.swiper-slide',
                      e.onGestureStart,
                      t
                    ),
                    this.$wrapperEl.off(
                      'gesturechange',
                      '.swiper-slide',
                      e.onGestureChange,
                      t
                    ),
                    this.$wrapperEl.off(
                      'gestureend',
                      '.swiper-slide',
                      e.onGestureEnd,
                      t
                    ))
                  : 'touchstart' === this.touchEvents.start &&
                    (this.$wrapperEl.off(
                      this.touchEvents.start,
                      '.swiper-slide',
                      e.onGestureStart,
                      t
                    ),
                    this.$wrapperEl.off(
                      this.touchEvents.move,
                      '.swiper-slide',
                      e.onGestureChange,
                      i
                    ),
                    this.$wrapperEl.off(
                      this.touchEvents.end,
                      '.swiper-slide',
                      e.onGestureEnd,
                      t
                    ),
                    this.touchEvents.cancel &&
                      this.$wrapperEl.off(
                        this.touchEvents.cancel,
                        '.swiper-slide',
                        e.onGestureEnd,
                        t
                      )),
                  this.$wrapperEl.off(
                    this.touchEvents.move,
                    '.' + this.params.zoom.containerClass,
                    e.onTouchMove,
                    i
                  )
              }
            }
          },
          oe = {
            loadInSlide: function(e, t) {
              void 0 === t && (t = !0)
              var i = this,
                a = i.params.lazy
              if (void 0 !== e && 0 !== i.slides.length) {
                var n =
                    i.virtual && i.params.virtual.enabled
                      ? i.$wrapperEl.children(
                          '.' +
                            i.params.slideClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        )
                      : i.slides.eq(e),
                  r = n.find(
                    '.' +
                      a.elementClass +
                      ':not(.' +
                      a.loadedClass +
                      '):not(.' +
                      a.loadingClass +
                      ')'
                  )
                !n.hasClass(a.elementClass) ||
                  n.hasClass(a.loadedClass) ||
                  n.hasClass(a.loadingClass) ||
                  (r = r.add(n[0])),
                  0 !== r.length &&
                    r.each(function(e, r) {
                      var o = s(r)
                      o.addClass(a.loadingClass)
                      var l = o.attr('data-background'),
                        d = o.attr('data-src'),
                        h = o.attr('data-srcset'),
                        p = o.attr('data-sizes')
                      i.loadImage(o[0], d || l, h, p, !1, function() {
                        if (
                          null != i &&
                          i &&
                          (!i || i.params) &&
                          !i.destroyed
                        ) {
                          if (
                            (l
                              ? (o.css('background-image', 'url("' + l + '")'),
                                o.removeAttr('data-background'))
                              : (h &&
                                  (o.attr('srcset', h),
                                  o.removeAttr('data-srcset')),
                                p &&
                                  (o.attr('sizes', p),
                                  o.removeAttr('data-sizes')),
                                d &&
                                  (o.attr('src', d), o.removeAttr('data-src'))),
                            o
                              .addClass(a.loadedClass)
                              .removeClass(a.loadingClass),
                            n.find('.' + a.preloaderClass).remove(),
                            i.params.loop && t)
                          ) {
                            var e = n.attr('data-swiper-slide-index')
                            if (n.hasClass(i.params.slideDuplicateClass)) {
                              var s = i.$wrapperEl.children(
                                '[data-swiper-slide-index="' +
                                  e +
                                  '"]:not(.' +
                                  i.params.slideDuplicateClass +
                                  ')'
                              )
                              i.lazy.loadInSlide(s.index(), !1)
                            } else {
                              var r = i.$wrapperEl.children(
                                '.' +
                                  i.params.slideDuplicateClass +
                                  '[data-swiper-slide-index="' +
                                  e +
                                  '"]'
                              )
                              i.lazy.loadInSlide(r.index(), !1)
                            }
                          }
                          i.emit('lazyImageReady', n[0], o[0])
                        }
                      }),
                        i.emit('lazyImageLoad', n[0], o[0])
                    })
              }
            },
            load: function() {
              var e = this,
                t = e.$wrapperEl,
                i = e.params,
                a = e.slides,
                n = e.activeIndex,
                r = e.virtual && i.virtual.enabled,
                o = i.lazy,
                l = i.slidesPerView
              function d(e) {
                if (r) {
                  if (
                    t.children(
                      '.' +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]'
                    ).length
                  )
                    return !0
                } else if (a[e]) return !0
                return !1
              }
              function h(e) {
                return r ? s(e).attr('data-swiper-slide-index') : s(e).index()
              }
              if (
                ('auto' === l && (l = 0),
                e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
                e.params.watchSlidesVisibility)
              )
                t.children('.' + i.slideVisibleClass).each(function(t, i) {
                  var a = r
                    ? s(i).attr('data-swiper-slide-index')
                    : s(i).index()
                  e.lazy.loadInSlide(a)
                })
              else if (l > 1)
                for (var p = n; p < n + l; p += 1) d(p) && e.lazy.loadInSlide(p)
              else e.lazy.loadInSlide(n)
              if (o.loadPrevNext)
                if (
                  l > 1 ||
                  (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)
                ) {
                  for (
                    var c = o.loadPrevNextAmount,
                      u = l,
                      f = Math.min(n + u + Math.max(c, u), a.length),
                      v = Math.max(n - Math.max(u, c), 0),
                      m = n + l;
                    m < f;
                    m += 1
                  )
                    d(m) && e.lazy.loadInSlide(m)
                  for (var g = v; g < n; g += 1) d(g) && e.lazy.loadInSlide(g)
                } else {
                  var b = t.children('.' + i.slideNextClass)
                  b.length > 0 && e.lazy.loadInSlide(h(b))
                  var w = t.children('.' + i.slidePrevClass)
                  w.length > 0 && e.lazy.loadInSlide(h(w))
                }
            }
          },
          le = {
            LinearSpline: function(e, t) {
              var i, s, a, n, r
              return (
                (this.x = e),
                (this.y = t),
                (this.lastIndex = e.length - 1),
                (this.interpolate = function(e) {
                  return e
                    ? ((r = (function(e, t) {
                        for (s = -1, i = e.length; i - s > 1; )
                          e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a)
                        return i
                      })(this.x, e)),
                      (n = r - 1),
                      ((e - this.x[n]) * (this.y[r] - this.y[n])) /
                        (this.x[r] - this.x[n]) +
                        this.y[n])
                    : 0
                }),
                this
              )
            },
            getInterpolateFunction: function(e) {
              this.controller.spline ||
                (this.controller.spline = this.params.loop
                  ? new le.LinearSpline(this.slidesGrid, e.slidesGrid)
                  : new le.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
              var i,
                s,
                a = this,
                n = a.controller.control
              function r(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate
                'slide' === a.params.controller.by &&
                  (a.controller.getInterpolateFunction(e),
                  (s = -a.controller.spline.interpolate(-t))),
                  (s && 'container' !== a.params.controller.by) ||
                    ((i =
                      (e.maxTranslate() - e.minTranslate()) /
                      (a.maxTranslate() - a.minTranslate())),
                    (s = (t - a.minTranslate()) * i + e.minTranslate())),
                  a.params.controller.inverse && (s = e.maxTranslate() - s),
                  e.updateProgress(s),
                  e.setTranslate(s, a),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses()
              }
              if (Array.isArray(n))
                for (var o = 0; o < n.length; o += 1)
                  n[o] !== t && n[o] instanceof F && r(n[o])
              else n instanceof F && t !== n && r(n)
            },
            setTransition: function(e, t) {
              var i,
                s = this,
                a = s.controller.control
              function n(t) {
                t.setTransition(e, s),
                  0 !== e &&
                    (t.transitionStart(),
                    t.params.autoHeight &&
                      r.nextTick(function() {
                        t.updateAutoHeight()
                      }),
                    t.$wrapperEl.transitionEnd(function() {
                      a &&
                        (t.params.loop &&
                          'slide' === s.params.controller.by &&
                          t.loopFix(),
                        t.transitionEnd())
                    }))
              }
              if (Array.isArray(a))
                for (i = 0; i < a.length; i += 1)
                  a[i] !== t && a[i] instanceof F && n(a[i])
              else a instanceof F && t !== a && n(a)
            }
          },
          de = {
            makeElFocusable: function(e) {
              return e.attr('tabIndex', '0'), e
            },
            addElRole: function(e, t) {
              return e.attr('role', t), e
            },
            addElLabel: function(e, t) {
              return e.attr('aria-label', t), e
            },
            disableEl: function(e) {
              return e.attr('aria-disabled', !0), e
            },
            enableEl: function(e) {
              return e.attr('aria-disabled', !1), e
            },
            onEnterKey: function(e) {
              var t = this.params.a11y
              if (13 === e.keyCode) {
                var i = s(e.target)
                this.navigation &&
                  this.navigation.$nextEl &&
                  i.is(this.navigation.$nextEl) &&
                  ((this.isEnd && !this.params.loop) || this.slideNext(),
                  this.isEnd
                    ? this.a11y.notify(t.lastSlideMessage)
                    : this.a11y.notify(t.nextSlideMessage)),
                  this.navigation &&
                    this.navigation.$prevEl &&
                    i.is(this.navigation.$prevEl) &&
                    ((this.isBeginning && !this.params.loop) ||
                      this.slidePrev(),
                    this.isBeginning
                      ? this.a11y.notify(t.firstSlideMessage)
                      : this.a11y.notify(t.prevSlideMessage)),
                  this.pagination &&
                    i.is('.' + this.params.pagination.bulletClass) &&
                    i[0].click()
              }
            },
            notify: function(e) {
              var t = this.a11y.liveRegion
              0 !== t.length && (t.html(''), t.html(e))
            },
            updateNavigation: function() {
              if (!this.params.loop) {
                var e = this.navigation,
                  t = e.$nextEl,
                  i = e.$prevEl
                i &&
                  i.length > 0 &&
                  (this.isBeginning
                    ? this.a11y.disableEl(i)
                    : this.a11y.enableEl(i)),
                  t &&
                    t.length > 0 &&
                    (this.isEnd
                      ? this.a11y.disableEl(t)
                      : this.a11y.enableEl(t))
              }
            },
            updatePagination: function() {
              var e = this,
                t = e.params.a11y
              e.pagination &&
                e.params.pagination.clickable &&
                e.pagination.bullets &&
                e.pagination.bullets.length &&
                e.pagination.bullets.each(function(i, a) {
                  var n = s(a)
                  e.a11y.makeElFocusable(n),
                    e.a11y.addElRole(n, 'button'),
                    e.a11y.addElLabel(
                      n,
                      t.paginationBulletMessage.replace(
                        /{{index}}/,
                        n.index() + 1
                      )
                    )
                })
            },
            init: function() {
              this.$el.append(this.a11y.liveRegion)
              var e,
                t,
                i = this.params.a11y
              this.navigation &&
                this.navigation.$nextEl &&
                (e = this.navigation.$nextEl),
                this.navigation &&
                  this.navigation.$prevEl &&
                  (t = this.navigation.$prevEl),
                e &&
                  (this.a11y.makeElFocusable(e),
                  this.a11y.addElRole(e, 'button'),
                  this.a11y.addElLabel(e, i.nextSlideMessage),
                  e.on('keydown', this.a11y.onEnterKey)),
                t &&
                  (this.a11y.makeElFocusable(t),
                  this.a11y.addElRole(t, 'button'),
                  this.a11y.addElLabel(t, i.prevSlideMessage),
                  t.on('keydown', this.a11y.onEnterKey)),
                this.pagination &&
                  this.params.pagination.clickable &&
                  this.pagination.bullets &&
                  this.pagination.bullets.length &&
                  this.pagination.$el.on(
                    'keydown',
                    '.' + this.params.pagination.bulletClass,
                    this.a11y.onEnterKey
                  )
            },
            destroy: function() {
              var e, t
              this.a11y.liveRegion &&
                this.a11y.liveRegion.length > 0 &&
                this.a11y.liveRegion.remove(),
                this.navigation &&
                  this.navigation.$nextEl &&
                  (e = this.navigation.$nextEl),
                this.navigation &&
                  this.navigation.$prevEl &&
                  (t = this.navigation.$prevEl),
                e && e.off('keydown', this.a11y.onEnterKey),
                t && t.off('keydown', this.a11y.onEnterKey),
                this.pagination &&
                  this.params.pagination.clickable &&
                  this.pagination.bullets &&
                  this.pagination.bullets.length &&
                  this.pagination.$el.off(
                    'keydown',
                    '.' + this.params.pagination.bulletClass,
                    this.a11y.onEnterKey
                  )
            }
          },
          he = {
            init: function() {
              if (this.params.history) {
                if (!t.history || !t.history.pushState)
                  return (
                    (this.params.history.enabled = !1),
                    void (this.params.hashNavigation.enabled = !0)
                  )
                var e = this.history
                ;(e.initialized = !0),
                  (e.paths = he.getPathValues()),
                  (e.paths.key || e.paths.value) &&
                    (e.scrollToSlide(
                      0,
                      e.paths.value,
                      this.params.runCallbacksOnInit
                    ),
                    this.params.history.replaceState ||
                      t.addEventListener(
                        'popstate',
                        this.history.setHistoryPopState
                      ))
              }
            },
            destroy: function() {
              this.params.history.replaceState ||
                t.removeEventListener(
                  'popstate',
                  this.history.setHistoryPopState
                )
            },
            setHistoryPopState: function() {
              ;(this.history.paths = he.getPathValues()),
                this.history.scrollToSlide(
                  this.params.speed,
                  this.history.paths.value,
                  !1
                )
            },
            getPathValues: function() {
              var e = t.location.pathname
                  .slice(1)
                  .split('/')
                  .filter(function(e) {
                    return '' !== e
                  }),
                i = e.length
              return { key: e[i - 2], value: e[i - 1] }
            },
            setHistory: function(e, i) {
              if (this.history.initialized && this.params.history.enabled) {
                var s = this.slides.eq(i),
                  a = he.slugify(s.attr('data-history'))
                t.location.pathname.includes(e) || (a = e + '/' + a)
                var n = t.history.state
                ;(n && n.value === a) ||
                  (this.params.history.replaceState
                    ? t.history.replaceState({ value: a }, null, a)
                    : t.history.pushState({ value: a }, null, a))
              }
            },
            slugify: function(e) {
              return e
                .toString()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
                .replace(/--+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, '')
            },
            scrollToSlide: function(e, t, i) {
              if (t)
                for (var s = 0, a = this.slides.length; s < a; s += 1) {
                  var n = this.slides.eq(s)
                  if (
                    he.slugify(n.attr('data-history')) === t &&
                    !n.hasClass(this.params.slideDuplicateClass)
                  ) {
                    var r = n.index()
                    this.slideTo(r, e, i)
                  }
                }
              else this.slideTo(0, e, i)
            }
          },
          ce = {
            onHashCange: function() {
              var t = e.location.hash.replace('#', '')
              if (t !== this.slides.eq(this.activeIndex).attr('data-hash')) {
                var i = this.$wrapperEl
                  .children(
                    '.' + this.params.slideClass + '[data-hash="' + t + '"]'
                  )
                  .index()
                if (void 0 === i) return
                this.slideTo(i)
              }
            },
            setHash: function() {
              if (
                this.hashNavigation.initialized &&
                this.params.hashNavigation.enabled
              )
                if (
                  this.params.hashNavigation.replaceState &&
                  t.history &&
                  t.history.replaceState
                )
                  t.history.replaceState(
                    null,
                    null,
                    '#' + this.slides.eq(this.activeIndex).attr('data-hash') ||
                      !1
                  )
                else {
                  var i = this.slides.eq(this.activeIndex),
                    s = i.attr('data-hash') || i.attr('data-history')
                  e.location.hash = s || ''
                }
            },
            init: function() {
              if (
                !(
                  !this.params.hashNavigation.enabled ||
                  (this.params.history && this.params.history.enabled)
                )
              ) {
                this.hashNavigation.initialized = !0
                var i = e.location.hash.replace('#', '')
                if (i)
                  for (var a = 0, n = this.slides.length; a < n; a += 1) {
                    var r = this.slides.eq(a)
                    if (
                      (r.attr('data-hash') || r.attr('data-history')) === i &&
                      !r.hasClass(this.params.slideDuplicateClass)
                    ) {
                      var o = r.index()
                      this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                    }
                  }
                this.params.hashNavigation.watchState &&
                  s(t).on('hashchange', this.hashNavigation.onHashCange)
              }
            },
            destroy: function() {
              this.params.hashNavigation.watchState &&
                s(t).off('hashchange', this.hashNavigation.onHashCange)
            }
          },
          pe = {
            run: function() {
              var e = this,
                t = e.slides.eq(e.activeIndex),
                i = e.params.autoplay.delay
              t.attr('data-swiper-autoplay') &&
                (i = t.attr('data-swiper-autoplay') || e.params.autoplay.delay),
                clearTimeout(e.autoplay.timeout),
                (e.autoplay.timeout = r.nextTick(function() {
                  e.params.autoplay.reverseDirection
                    ? e.params.loop
                      ? (e.loopFix(),
                        e.slidePrev(e.params.speed, !0, !0),
                        e.emit('autoplay'))
                      : e.isBeginning
                      ? e.params.autoplay.stopOnLastSlide
                        ? e.autoplay.stop()
                        : (e.slideTo(
                            e.slides.length - 1,
                            e.params.speed,
                            !0,
                            !0
                          ),
                          e.emit('autoplay'))
                      : (e.slidePrev(e.params.speed, !0, !0),
                        e.emit('autoplay'))
                    : e.params.loop
                    ? (e.loopFix(),
                      e.slideNext(e.params.speed, !0, !0),
                      e.emit('autoplay'))
                    : e.isEnd
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit('autoplay'))
                    : (e.slideNext(e.params.speed, !0, !0), e.emit('autoplay')),
                    e.params.cssMode && e.autoplay.running && e.autoplay.run()
                }, i))
            },
            start: function() {
              return (
                void 0 === this.autoplay.timeout &&
                !this.autoplay.running &&
                ((this.autoplay.running = !0),
                this.emit('autoplayStart'),
                this.autoplay.run(),
                !0)
              )
            },
            stop: function() {
              return (
                !!this.autoplay.running &&
                void 0 !== this.autoplay.timeout &&
                (this.autoplay.timeout &&
                  (clearTimeout(this.autoplay.timeout),
                  (this.autoplay.timeout = void 0)),
                (this.autoplay.running = !1),
                this.emit('autoplayStop'),
                !0)
              )
            },
            pause: function(e) {
              this.autoplay.running &&
                (this.autoplay.paused ||
                  (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                  (this.autoplay.paused = !0),
                  0 !== e && this.params.autoplay.waitForTransition
                    ? (this.$wrapperEl[0].addEventListener(
                        'transitionend',
                        this.autoplay.onTransitionEnd
                      ),
                      this.$wrapperEl[0].addEventListener(
                        'webkitTransitionEnd',
                        this.autoplay.onTransitionEnd
                      ))
                    : ((this.autoplay.paused = !1), this.autoplay.run())))
            }
          },
          ue = {
            setTranslate: function() {
              for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t),
                  s = -i[0].swiperSlideOffset
                this.params.virtualTranslate || (s -= this.translate)
                var a = 0
                this.isHorizontal() || ((a = s), (s = 0))
                var n = this.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(i[0].progress), 0)
                  : 1 + Math.min(Math.max(i[0].progress, -1), 0)
                i.css({ opacity: n }).transform(
                  'translate3d(' + s + 'px, ' + a + 'px, 0px)'
                )
              }
            },
            setTransition: function(e) {
              var t = this,
                i = t.slides,
                s = t.$wrapperEl
              if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
                var a = !1
                i.transitionEnd(function() {
                  if (!a && t && !t.destroyed) {
                    ;(a = !0), (t.animating = !1)
                    for (
                      var e = ['webkitTransitionEnd', 'transitionend'], i = 0;
                      i < e.length;
                      i += 1
                    )
                      s.trigger(e[i])
                  }
                })
              }
            }
          },
          fe = {
            setTranslate: function() {
              var e,
                t = this.$el,
                i = this.$wrapperEl,
                a = this.slides,
                n = this.width,
                r = this.height,
                o = this.rtlTranslate,
                l = this.size,
                d = this.params.cubeEffect,
                h = this.isHorizontal(),
                p = this.virtual && this.params.virtual.enabled,
                c = 0
              d.shadow &&
                (h
                  ? (0 === (e = i.find('.swiper-cube-shadow')).length &&
                      ((e = s('<div class="swiper-cube-shadow"></div>')),
                      i.append(e)),
                    e.css({ height: n + 'px' }))
                  : 0 === (e = t.find('.swiper-cube-shadow')).length &&
                    ((e = s('<div class="swiper-cube-shadow"></div>')),
                    t.append(e)))
              for (var u = 0; u < a.length; u += 1) {
                var f = a.eq(u),
                  v = u
                p && (v = parseInt(f.attr('data-swiper-slide-index'), 10))
                var m = 90 * v,
                  g = Math.floor(m / 360)
                o && ((m = -m), (g = Math.floor(-m / 360)))
                var b = Math.max(Math.min(f[0].progress, 1), -1),
                  w = 0,
                  y = 0,
                  x = 0
                v % 4 == 0
                  ? ((w = 4 * -g * l), (x = 0))
                  : (v - 1) % 4 == 0
                  ? ((w = 0), (x = 4 * -g * l))
                  : (v - 2) % 4 == 0
                  ? ((w = l + 4 * g * l), (x = l))
                  : (v - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
                  o && (w = -w),
                  h || ((y = w), (w = 0))
                var T =
                  'rotateX(' +
                  (h ? 0 : -m) +
                  'deg) rotateY(' +
                  (h ? m : 0) +
                  'deg) translate3d(' +
                  w +
                  'px, ' +
                  y +
                  'px, ' +
                  x +
                  'px)'
                if (
                  (b <= 1 &&
                    b > -1 &&
                    ((c = 90 * v + 90 * b), o && (c = 90 * -v - 90 * b)),
                  f.transform(T),
                  d.slideShadows)
                ) {
                  var S = h
                      ? f.find('.swiper-slide-shadow-left')
                      : f.find('.swiper-slide-shadow-top'),
                    E = h
                      ? f.find('.swiper-slide-shadow-right')
                      : f.find('.swiper-slide-shadow-bottom')
                  0 === S.length &&
                    ((S = s(
                      '<div class="swiper-slide-shadow-' +
                        (h ? 'left' : 'top') +
                        '"></div>'
                    )),
                    f.append(S)),
                    0 === E.length &&
                      ((E = s(
                        '<div class="swiper-slide-shadow-' +
                          (h ? 'right' : 'bottom') +
                          '"></div>'
                      )),
                      f.append(E)),
                    S.length && (S[0].style.opacity = Math.max(-b, 0)),
                    E.length && (E[0].style.opacity = Math.max(b, 0))
                }
              }
              if (
                (i.css({
                  '-webkit-transform-origin': '50% 50% -' + l / 2 + 'px',
                  '-moz-transform-origin': '50% 50% -' + l / 2 + 'px',
                  '-ms-transform-origin': '50% 50% -' + l / 2 + 'px',
                  'transform-origin': '50% 50% -' + l / 2 + 'px'
                }),
                d.shadow)
              )
                if (h)
                  e.transform(
                    'translate3d(0px, ' +
                      (n / 2 + d.shadowOffset) +
                      'px, ' +
                      -n / 2 +
                      'px) rotateX(90deg) rotateZ(0deg) scale(' +
                      d.shadowScale +
                      ')'
                  )
                else {
                  var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                    M =
                      1.5 -
                      (Math.sin((2 * C * Math.PI) / 360) / 2 +
                        Math.cos((2 * C * Math.PI) / 360) / 2),
                    P = d.shadowScale,
                    z = d.shadowScale / M,
                    k = d.shadowOffset
                  e.transform(
                    'scale3d(' +
                      P +
                      ', 1, ' +
                      z +
                      ') translate3d(0px, ' +
                      (r / 2 + k) +
                      'px, ' +
                      -r / 2 / z +
                      'px) rotateX(-90deg)'
                  )
                }
              var $ = R.isSafari || R.isUiWebView ? -l / 2 : 0
              i.transform(
                'translate3d(0px,0,' +
                  $ +
                  'px) rotateX(' +
                  (this.isHorizontal() ? 0 : c) +
                  'deg) rotateY(' +
                  (this.isHorizontal() ? -c : 0) +
                  'deg)'
              )
            },
            setTransition: function(e) {
              var t = this.$el
              this.slides
                .transition(e)
                .find(
                  '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                )
                .transition(e),
                this.params.cubeEffect.shadow &&
                  !this.isHorizontal() &&
                  t.find('.swiper-cube-shadow').transition(e)
            }
          },
          ve = {
            setTranslate: function() {
              for (
                var e = this.slides, t = this.rtlTranslate, i = 0;
                i < e.length;
                i += 1
              ) {
                var a = e.eq(i),
                  n = a[0].progress
                this.params.flipEffect.limitRotation &&
                  (n = Math.max(Math.min(a[0].progress, 1), -1))
                var r = -180 * n,
                  o = 0,
                  l = -a[0].swiperSlideOffset,
                  d = 0
                if (
                  (this.isHorizontal()
                    ? t && (r = -r)
                    : ((d = l), (l = 0), (o = -r), (r = 0)),
                  (a[0].style.zIndex = -Math.abs(Math.round(n)) + e.length),
                  this.params.flipEffect.slideShadows)
                ) {
                  var h = this.isHorizontal()
                      ? a.find('.swiper-slide-shadow-left')
                      : a.find('.swiper-slide-shadow-top'),
                    p = this.isHorizontal()
                      ? a.find('.swiper-slide-shadow-right')
                      : a.find('.swiper-slide-shadow-bottom')
                  0 === h.length &&
                    ((h = s(
                      '<div class="swiper-slide-shadow-' +
                        (this.isHorizontal() ? 'left' : 'top') +
                        '"></div>'
                    )),
                    a.append(h)),
                    0 === p.length &&
                      ((p = s(
                        '<div class="swiper-slide-shadow-' +
                          (this.isHorizontal() ? 'right' : 'bottom') +
                          '"></div>'
                      )),
                      a.append(p)),
                    h.length && (h[0].style.opacity = Math.max(-n, 0)),
                    p.length && (p[0].style.opacity = Math.max(n, 0))
                }
                a.transform(
                  'translate3d(' +
                    l +
                    'px, ' +
                    d +
                    'px, 0px) rotateX(' +
                    o +
                    'deg) rotateY(' +
                    r +
                    'deg)'
                )
              }
            },
            setTransition: function(e) {
              var t = this,
                i = t.slides,
                s = t.activeIndex,
                a = t.$wrapperEl
              if (
                (i
                  .transition(e)
                  .find(
                    '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                  )
                  .transition(e),
                t.params.virtualTranslate && 0 !== e)
              ) {
                var n = !1
                i.eq(s).transitionEnd(function() {
                  if (!n && t && !t.destroyed) {
                    ;(n = !0), (t.animating = !1)
                    for (
                      var e = ['webkitTransitionEnd', 'transitionend'], i = 0;
                      i < e.length;
                      i += 1
                    )
                      a.trigger(e[i])
                  }
                })
              }
            }
          },
          me = {
            setTranslate: function() {
              for (
                var e = this.width,
                  t = this.height,
                  i = this.slides,
                  a = this.$wrapperEl,
                  n = this.slidesSizesGrid,
                  r = this.params.coverflowEffect,
                  l = this.isHorizontal(),
                  d = this.translate,
                  h = l ? e / 2 - d : t / 2 - d,
                  p = l ? r.rotate : -r.rotate,
                  c = r.depth,
                  u = 0,
                  f = i.length;
                u < f;
                u += 1
              ) {
                var v = i.eq(u),
                  m = n[u],
                  g = ((h - v[0].swiperSlideOffset - m / 2) / m) * r.modifier,
                  b = l ? p * g : 0,
                  w = l ? 0 : p * g,
                  y = -c * Math.abs(g),
                  x = l ? 0 : r.stretch * g,
                  T = l ? r.stretch * g : 0
                Math.abs(T) < 0.001 && (T = 0),
                  Math.abs(x) < 0.001 && (x = 0),
                  Math.abs(y) < 0.001 && (y = 0),
                  Math.abs(b) < 0.001 && (b = 0),
                  Math.abs(w) < 0.001 && (w = 0)
                var S =
                  'translate3d(' +
                  T +
                  'px,' +
                  x +
                  'px,' +
                  y +
                  'px)  rotateX(' +
                  w +
                  'deg) rotateY(' +
                  b +
                  'deg)'
                if (
                  (v.transform(S),
                  (v[0].style.zIndex = 1 - Math.abs(Math.round(g))),
                  r.slideShadows)
                ) {
                  var E = l
                      ? v.find('.swiper-slide-shadow-left')
                      : v.find('.swiper-slide-shadow-top'),
                    C = l
                      ? v.find('.swiper-slide-shadow-right')
                      : v.find('.swiper-slide-shadow-bottom')
                  0 === E.length &&
                    ((E = s(
                      '<div class="swiper-slide-shadow-' +
                        (l ? 'left' : 'top') +
                        '"></div>'
                    )),
                    v.append(E)),
                    0 === C.length &&
                      ((C = s(
                        '<div class="swiper-slide-shadow-' +
                          (l ? 'right' : 'bottom') +
                          '"></div>'
                      )),
                      v.append(C)),
                    E.length && (E[0].style.opacity = g > 0 ? g : 0),
                    C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                }
              }
              ;(o.pointerEvents || o.prefixedPointerEvents) &&
                (a[0].style.perspectiveOrigin = h + 'px 50%')
            },
            setTransition: function(e) {
              this.slides
                .transition(e)
                .find(
                  '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
                )
                .transition(e)
            }
          },
          ge = {
            init: function() {
              var e = this.params.thumbs,
                t = this.constructor
              e.swiper instanceof t
                ? ((this.thumbs.swiper = e.swiper),
                  r.extend(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                  }),
                  r.extend(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                  }))
                : r.isObject(e.swiper) &&
                  ((this.thumbs.swiper = new t(
                    r.extend({}, e.swiper, {
                      watchSlidesVisibility: !0,
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1
                    })
                  )),
                  (this.thumbs.swiperCreated = !0)),
                this.thumbs.swiper.$el.addClass(
                  this.params.thumbs.thumbsContainerClass
                ),
                this.thumbs.swiper.on('tap', this.thumbs.onThumbClick)
            },
            onThumbClick: function() {
              var e = this.thumbs.swiper
              if (e) {
                var t = e.clickedIndex,
                  i = e.clickedSlide
                if (
                  !(
                    (i &&
                      s(i).hasClass(
                        this.params.thumbs.slideThumbActiveClass
                      )) ||
                    null == t
                  )
                ) {
                  var a
                  if (
                    ((a = e.params.loop
                      ? parseInt(
                          s(e.clickedSlide).attr('data-swiper-slide-index'),
                          10
                        )
                      : t),
                    this.params.loop)
                  ) {
                    var n = this.activeIndex
                    this.slides
                      .eq(n)
                      .hasClass(this.params.slideDuplicateClass) &&
                      (this.loopFix(),
                      (this._clientLeft = this.$wrapperEl[0].clientLeft),
                      (n = this.activeIndex))
                    var r = this.slides
                        .eq(n)
                        .prevAll('[data-swiper-slide-index="' + a + '"]')
                        .eq(0)
                        .index(),
                      o = this.slides
                        .eq(n)
                        .nextAll('[data-swiper-slide-index="' + a + '"]')
                        .eq(0)
                        .index()
                    a =
                      void 0 === r
                        ? o
                        : void 0 === o
                        ? r
                        : o - n < n - r
                        ? o
                        : r
                  }
                  this.slideTo(a)
                }
              }
            },
            update: function(e) {
              var t = this.thumbs.swiper
              if (t) {
                var i =
                  'auto' === t.params.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : t.params.slidesPerView
                if (this.realIndex !== t.realIndex) {
                  var s,
                    a = t.activeIndex
                  if (t.params.loop) {
                    t.slides.eq(a).hasClass(t.params.slideDuplicateClass) &&
                      (t.loopFix(),
                      (t._clientLeft = t.$wrapperEl[0].clientLeft),
                      (a = t.activeIndex))
                    var n = t.slides
                        .eq(a)
                        .prevAll(
                          '[data-swiper-slide-index="' + this.realIndex + '"]'
                        )
                        .eq(0)
                        .index(),
                      r = t.slides
                        .eq(a)
                        .nextAll(
                          '[data-swiper-slide-index="' + this.realIndex + '"]'
                        )
                        .eq(0)
                        .index()
                    s =
                      void 0 === n
                        ? r
                        : void 0 === r
                        ? n
                        : r - a == a - n
                        ? a
                        : r - a < a - n
                        ? r
                        : n
                  } else s = this.realIndex
                  t.visibleSlidesIndexes &&
                    t.visibleSlidesIndexes.indexOf(s) < 0 &&
                    (t.params.centeredSlides
                      ? (s =
                          s > a
                            ? s - Math.floor(i / 2) + 1
                            : s + Math.floor(i / 2) - 1)
                      : s > a && (s = s - i + 1),
                    t.slideTo(s, e ? 0 : void 0))
                }
                var o = 1,
                  l = this.params.thumbs.slideThumbActiveClass
                if (
                  (this.params.slidesPerView > 1 &&
                    !this.params.centeredSlides &&
                    (o = this.params.slidesPerView),
                  t.slides.removeClass(l),
                  t.params.loop ||
                    (t.params.virtual && t.params.virtual.enabled))
                )
                  for (var d = 0; d < o; d += 1)
                    t.$wrapperEl
                      .children(
                        '[data-swiper-slide-index="' +
                          (this.realIndex + d) +
                          '"]'
                      )
                      .addClass(l)
                else
                  for (var h = 0; h < o; h += 1)
                    t.slides.eq(this.realIndex + h).addClass(l)
              }
            }
          },
          we = [
            W,
            q,
            j,
            _,
            K,
            Z,
            ee,
            {
              name: 'mousewheel',
              params: {
                mousewheel: {
                  enabled: !1,
                  releaseOnEdges: !1,
                  invert: !1,
                  forceToAxis: !1,
                  sensitivity: 1,
                  eventsTarged: 'container'
                }
              },
              create: function() {
                r.extend(this, {
                  mousewheel: {
                    enabled: !1,
                    enable: te.enable.bind(this),
                    disable: te.disable.bind(this),
                    handle: te.handle.bind(this),
                    handleMouseEnter: te.handleMouseEnter.bind(this),
                    handleMouseLeave: te.handleMouseLeave.bind(this),
                    lastScrollTime: r.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                  }
                })
              },
              on: {
                init: function() {
                  !this.params.mousewheel.enabled &&
                    this.params.cssMode &&
                    this.mousewheel.disable(),
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                  this.params.cssMode && this.mousewheel.enable(),
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
              }
            },
            {
              name: 'navigation',
              params: {
                navigation: {
                  nextEl: null,
                  prevEl: null,
                  hideOnClick: !1,
                  disabledClass: 'swiper-button-disabled',
                  hiddenClass: 'swiper-button-hidden',
                  lockClass: 'swiper-button-lock'
                }
              },
              create: function() {
                r.extend(this, {
                  navigation: {
                    init: ie.init.bind(this),
                    update: ie.update.bind(this),
                    destroy: ie.destroy.bind(this),
                    onNextClick: ie.onNextClick.bind(this),
                    onPrevClick: ie.onPrevClick.bind(this)
                  }
                })
              },
              on: {
                init: function() {
                  this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                  this.navigation.update()
                },
                fromEdge: function() {
                  this.navigation.update()
                },
                destroy: function() {
                  this.navigation.destroy()
                },
                click: function(e) {
                  var t,
                    i = this.navigation,
                    a = i.$nextEl,
                    n = i.$prevEl
                  !this.params.navigation.hideOnClick ||
                    s(e.target).is(n) ||
                    s(e.target).is(a) ||
                    (a
                      ? (t = a.hasClass(this.params.navigation.hiddenClass))
                      : n &&
                        (t = n.hasClass(this.params.navigation.hiddenClass)),
                    !0 === t
                      ? this.emit('navigationShow', this)
                      : this.emit('navigationHide', this),
                    a && a.toggleClass(this.params.navigation.hiddenClass),
                    n && n.toggleClass(this.params.navigation.hiddenClass))
                }
              }
            },
            {
              name: 'pagination',
              params: {
                pagination: {
                  el: null,
                  bulletElement: 'span',
                  clickable: !1,
                  hideOnClick: !1,
                  renderBullet: null,
                  renderProgressbar: null,
                  renderFraction: null,
                  renderCustom: null,
                  progressbarOpposite: !1,
                  type: 'bullets',
                  dynamicBullets: !1,
                  dynamicMainBullets: 1,
                  formatFractionCurrent: function(e) {
                    return e
                  },
                  formatFractionTotal: function(e) {
                    return e
                  },
                  bulletClass: 'swiper-pagination-bullet',
                  bulletActiveClass: 'swiper-pagination-bullet-active',
                  modifierClass: 'swiper-pagination-',
                  currentClass: 'swiper-pagination-current',
                  totalClass: 'swiper-pagination-total',
                  hiddenClass: 'swiper-pagination-hidden',
                  progressbarFillClass: 'swiper-pagination-progressbar-fill',
                  progressbarOppositeClass:
                    'swiper-pagination-progressbar-opposite',
                  clickableClass: 'swiper-pagination-clickable',
                  lockClass: 'swiper-pagination-lock'
                }
              },
              create: function() {
                r.extend(this, {
                  pagination: {
                    init: se.init.bind(this),
                    render: se.render.bind(this),
                    update: se.update.bind(this),
                    destroy: se.destroy.bind(this),
                    dynamicBulletIndex: 0
                  }
                })
              },
              on: {
                init: function() {
                  this.pagination.init(),
                    this.pagination.render(),
                    this.pagination.update()
                },
                activeIndexChange: function() {
                  this.params.loop
                    ? this.pagination.update()
                    : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                  this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                  this.params.loop &&
                    (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                  this.params.loop ||
                    (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                  this.pagination.destroy()
                },
                click: function(e) {
                  this.params.pagination.el &&
                    this.params.pagination.hideOnClick &&
                    this.pagination.$el.length > 0 &&
                    !s(e.target).hasClass(this.params.pagination.bulletClass) &&
                    (!0 ===
                    this.pagination.$el.hasClass(
                      this.params.pagination.hiddenClass
                    )
                      ? this.emit('paginationShow', this)
                      : this.emit('paginationHide', this),
                    this.pagination.$el.toggleClass(
                      this.params.pagination.hiddenClass
                    ))
                }
              }
            },
            {
              name: 'scrollbar',
              params: {
                scrollbar: {
                  el: null,
                  dragSize: 'auto',
                  hide: !1,
                  draggable: !1,
                  snapOnRelease: !0,
                  lockClass: 'swiper-scrollbar-lock',
                  dragClass: 'swiper-scrollbar-drag'
                }
              },
              create: function() {
                r.extend(this, {
                  scrollbar: {
                    init: ae.init.bind(this),
                    destroy: ae.destroy.bind(this),
                    updateSize: ae.updateSize.bind(this),
                    setTranslate: ae.setTranslate.bind(this),
                    setTransition: ae.setTransition.bind(this),
                    enableDraggable: ae.enableDraggable.bind(this),
                    disableDraggable: ae.disableDraggable.bind(this),
                    setDragPosition: ae.setDragPosition.bind(this),
                    getPointerPosition: ae.getPointerPosition.bind(this),
                    onDragStart: ae.onDragStart.bind(this),
                    onDragMove: ae.onDragMove.bind(this),
                    onDragEnd: ae.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                  }
                })
              },
              on: {
                init: function() {
                  this.scrollbar.init(),
                    this.scrollbar.updateSize(),
                    this.scrollbar.setTranslate()
                },
                update: function() {
                  this.scrollbar.updateSize()
                },
                resize: function() {
                  this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                  this.scrollbar.updateSize()
                },
                setTranslate: function() {
                  this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                  this.scrollbar.setTransition(e)
                },
                destroy: function() {
                  this.scrollbar.destroy()
                }
              }
            },
            {
              name: 'parallax',
              params: { parallax: { enabled: !1 } },
              create: function() {
                r.extend(this, {
                  parallax: {
                    setTransform: ne.setTransform.bind(this),
                    setTranslate: ne.setTranslate.bind(this),
                    setTransition: ne.setTransition.bind(this)
                  }
                })
              },
              on: {
                beforeInit: function() {
                  this.params.parallax.enabled &&
                    ((this.params.watchSlidesProgress = !0),
                    (this.originalParams.watchSlidesProgress = !0))
                },
                init: function() {
                  this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function() {
                  this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                  this.params.parallax.enabled && this.parallax.setTransition(e)
                }
              }
            },
            {
              name: 'zoom',
              params: {
                zoom: {
                  enabled: !1,
                  maxRatio: 3,
                  minRatio: 1,
                  toggle: !0,
                  containerClass: 'swiper-zoom-container',
                  zoomedSlideClass: 'swiper-slide-zoomed'
                }
              },
              create: function() {
                var e = this,
                  t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                      $slideEl: void 0,
                      slideWidth: void 0,
                      slideHeight: void 0,
                      $imageEl: void 0,
                      $imageWrapEl: void 0,
                      maxRatio: 3
                    },
                    image: {
                      isTouched: void 0,
                      isMoved: void 0,
                      currentX: void 0,
                      currentY: void 0,
                      minX: void 0,
                      minY: void 0,
                      maxX: void 0,
                      maxY: void 0,
                      width: void 0,
                      height: void 0,
                      startX: void 0,
                      startY: void 0,
                      touchesStart: {},
                      touchesCurrent: {}
                    },
                    velocity: {
                      x: void 0,
                      y: void 0,
                      prevPositionX: void 0,
                      prevPositionY: void 0,
                      prevTime: void 0
                    }
                  }
                'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'
                  .split(' ')
                  .forEach(function(i) {
                    t[i] = re[i].bind(e)
                  }),
                  r.extend(e, { zoom: t })
                var i = 1
                Object.defineProperty(e.zoom, 'scale', {
                  get: function() {
                    return i
                  },
                  set: function(t) {
                    if (i !== t) {
                      var s = e.zoom.gesture.$imageEl
                          ? e.zoom.gesture.$imageEl[0]
                          : void 0,
                        a = e.zoom.gesture.$slideEl
                          ? e.zoom.gesture.$slideEl[0]
                          : void 0
                      e.emit('zoomChange', t, s, a)
                    }
                    i = t
                  }
                })
              },
              on: {
                init: function() {
                  this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                  this.zoom.disable()
                },
                touchStart: function(e) {
                  this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                  this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                  this.params.zoom.enabled &&
                    this.zoom.enabled &&
                    this.params.zoom.toggle &&
                    this.zoom.toggle(e)
                },
                transitionEnd: function() {
                  this.zoom.enabled &&
                    this.params.zoom.enabled &&
                    this.zoom.onTransitionEnd()
                },
                slideChange: function() {
                  this.zoom.enabled &&
                    this.params.zoom.enabled &&
                    this.params.cssMode &&
                    this.zoom.onTransitionEnd()
                }
              }
            },
            {
              name: 'lazy',
              params: {
                lazy: {
                  enabled: !1,
                  loadPrevNext: !1,
                  loadPrevNextAmount: 1,
                  loadOnTransitionStart: !1,
                  elementClass: 'swiper-lazy',
                  loadingClass: 'swiper-lazy-loading',
                  loadedClass: 'swiper-lazy-loaded',
                  preloaderClass: 'swiper-lazy-preloader'
                }
              },
              create: function() {
                r.extend(this, {
                  lazy: {
                    initialImageLoaded: !1,
                    load: oe.load.bind(this),
                    loadInSlide: oe.loadInSlide.bind(this)
                  }
                })
              },
              on: {
                beforeInit: function() {
                  this.params.lazy.enabled &&
                    this.params.preloadImages &&
                    (this.params.preloadImages = !1)
                },
                init: function() {
                  this.params.lazy.enabled &&
                    !this.params.loop &&
                    0 === this.params.initialSlide &&
                    this.lazy.load()
                },
                scroll: function() {
                  this.params.freeMode &&
                    !this.params.freeModeSticky &&
                    this.lazy.load()
                },
                resize: function() {
                  this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                  this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                  this.params.lazy.enabled &&
                    (this.params.lazy.loadOnTransitionStart ||
                      (!this.params.lazy.loadOnTransitionStart &&
                        !this.lazy.initialImageLoaded)) &&
                    this.lazy.load()
                },
                transitionEnd: function() {
                  this.params.lazy.enabled &&
                    !this.params.lazy.loadOnTransitionStart &&
                    this.lazy.load()
                },
                slideChange: function() {
                  this.params.lazy.enabled &&
                    this.params.cssMode &&
                    this.lazy.load()
                }
              }
            },
            {
              name: 'controller',
              params: {
                controller: { control: void 0, inverse: !1, by: 'slide' }
              },
              create: function() {
                r.extend(this, {
                  controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: le.getInterpolateFunction.bind(
                      this
                    ),
                    setTranslate: le.setTranslate.bind(this),
                    setTransition: le.setTransition.bind(this)
                  }
                })
              },
              on: {
                update: function() {
                  this.controller.control &&
                    this.controller.spline &&
                    ((this.controller.spline = void 0),
                    delete this.controller.spline)
                },
                resize: function() {
                  this.controller.control &&
                    this.controller.spline &&
                    ((this.controller.spline = void 0),
                    delete this.controller.spline)
                },
                observerUpdate: function() {
                  this.controller.control &&
                    this.controller.spline &&
                    ((this.controller.spline = void 0),
                    delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                  this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                  this.controller.control && this.controller.setTransition(e, t)
                }
              }
            },
            {
              name: 'a11y',
              params: {
                a11y: {
                  enabled: !0,
                  notificationClass: 'swiper-notification',
                  prevSlideMessage: 'Previous slide',
                  nextSlideMessage: 'Next slide',
                  firstSlideMessage: 'This is the first slide',
                  lastSlideMessage: 'This is the last slide',
                  paginationBulletMessage: 'Go to slide {{index}}'
                }
              },
              create: function() {
                var e = this
                r.extend(e, {
                  a11y: {
                    liveRegion: s(
                      '<span class="' +
                        e.params.a11y.notificationClass +
                        '" aria-live="assertive" aria-atomic="true"></span>'
                    )
                  }
                }),
                  Object.keys(de).forEach(function(t) {
                    e.a11y[t] = de[t].bind(e)
                  })
              },
              on: {
                init: function() {
                  this.params.a11y.enabled &&
                    (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                  this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                  this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                  this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                  this.params.a11y.enabled && this.a11y.destroy()
                }
              }
            },
            {
              name: 'history',
              params: {
                history: { enabled: !1, replaceState: !1, key: 'slides' }
              },
              create: function() {
                r.extend(this, {
                  history: {
                    init: he.init.bind(this),
                    setHistory: he.setHistory.bind(this),
                    setHistoryPopState: he.setHistoryPopState.bind(this),
                    scrollToSlide: he.scrollToSlide.bind(this),
                    destroy: he.destroy.bind(this)
                  }
                })
              },
              on: {
                init: function() {
                  this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                  this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                  this.history.initialized &&
                    this.history.setHistory(
                      this.params.history.key,
                      this.activeIndex
                    )
                },
                slideChange: function() {
                  this.history.initialized &&
                    this.params.cssMode &&
                    this.history.setHistory(
                      this.params.history.key,
                      this.activeIndex
                    )
                }
              }
            },
            {
              name: 'hash-navigation',
              params: {
                hashNavigation: {
                  enabled: !1,
                  replaceState: !1,
                  watchState: !1
                }
              },
              create: function() {
                r.extend(this, {
                  hashNavigation: {
                    initialized: !1,
                    init: ce.init.bind(this),
                    destroy: ce.destroy.bind(this),
                    setHash: ce.setHash.bind(this),
                    onHashCange: ce.onHashCange.bind(this)
                  }
                })
              },
              on: {
                init: function() {
                  this.params.hashNavigation.enabled &&
                    this.hashNavigation.init()
                },
                destroy: function() {
                  this.params.hashNavigation.enabled &&
                    this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                  this.hashNavigation.initialized &&
                    this.hashNavigation.setHash()
                },
                slideChange: function() {
                  this.hashNavigation.initialized &&
                    this.params.cssMode &&
                    this.hashNavigation.setHash()
                }
              }
            },
            {
              name: 'autoplay',
              params: {
                autoplay: {
                  enabled: !1,
                  delay: 3e3,
                  waitForTransition: !0,
                  disableOnInteraction: !0,
                  stopOnLastSlide: !1,
                  reverseDirection: !1
                }
              },
              create: function() {
                var e = this
                r.extend(e, {
                  autoplay: {
                    running: !1,
                    paused: !1,
                    run: pe.run.bind(e),
                    start: pe.start.bind(e),
                    stop: pe.stop.bind(e),
                    pause: pe.pause.bind(e),
                    onVisibilityChange: function() {
                      'hidden' === document.visibilityState &&
                        e.autoplay.running &&
                        e.autoplay.pause(),
                        'visible' === document.visibilityState &&
                          e.autoplay.paused &&
                          (e.autoplay.run(), (e.autoplay.paused = !1))
                    },
                    onTransitionEnd: function(t) {
                      e &&
                        !e.destroyed &&
                        e.$wrapperEl &&
                        t.target === this &&
                        (e.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          e.autoplay.onTransitionEnd
                        ),
                        e.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          e.autoplay.onTransitionEnd
                        ),
                        (e.autoplay.paused = !1),
                        e.autoplay.running
                          ? e.autoplay.run()
                          : e.autoplay.stop())
                    }
                  }
                })
              },
              on: {
                init: function() {
                  this.params.autoplay.enabled &&
                    (this.autoplay.start(),
                    document.addEventListener(
                      'visibilitychange',
                      this.autoplay.onVisibilityChange
                    ))
                },
                beforeTransitionStart: function(e, t) {
                  this.autoplay.running &&
                    (t || !this.params.autoplay.disableOnInteraction
                      ? this.autoplay.pause(e)
                      : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                  this.autoplay.running &&
                    (this.params.autoplay.disableOnInteraction
                      ? this.autoplay.stop()
                      : this.autoplay.pause())
                },
                touchEnd: function() {
                  this.params.cssMode &&
                    this.autoplay.paused &&
                    !this.params.autoplay.disableOnInteraction &&
                    this.autoplay.run()
                },
                destroy: function() {
                  this.autoplay.running && this.autoplay.stop(),
                    document.removeEventListener(
                      'visibilitychange',
                      this.autoplay.onVisibilityChange
                    )
                }
              }
            },
            {
              name: 'effect-fade',
              params: { fadeEffect: { crossFade: !1 } },
              create: function() {
                r.extend(this, {
                  fadeEffect: {
                    setTranslate: ue.setTranslate.bind(this),
                    setTransition: ue.setTransition.bind(this)
                  }
                })
              },
              on: {
                beforeInit: function() {
                  if ('fade' === this.params.effect) {
                    this.classNames.push(
                      this.params.containerModifierClass + 'fade'
                    )
                    var e = {
                      slidesPerView: 1,
                      slidesPerColumn: 1,
                      slidesPerGroup: 1,
                      watchSlidesProgress: !0,
                      spaceBetween: 0,
                      virtualTranslate: !0
                    }
                    r.extend(this.params, e), r.extend(this.originalParams, e)
                  }
                },
                setTranslate: function() {
                  'fade' === this.params.effect &&
                    this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                  'fade' === this.params.effect &&
                    this.fadeEffect.setTransition(e)
                }
              }
            },
            {
              name: 'effect-cube',
              params: {
                cubeEffect: {
                  slideShadows: !0,
                  shadow: !0,
                  shadowOffset: 20,
                  shadowScale: 0.94
                }
              },
              create: function() {
                r.extend(this, {
                  cubeEffect: {
                    setTranslate: fe.setTranslate.bind(this),
                    setTransition: fe.setTransition.bind(this)
                  }
                })
              },
              on: {
                beforeInit: function() {
                  if ('cube' === this.params.effect) {
                    this.classNames.push(
                      this.params.containerModifierClass + 'cube'
                    ),
                      this.classNames.push(
                        this.params.containerModifierClass + '3d'
                      )
                    var e = {
                      slidesPerView: 1,
                      slidesPerColumn: 1,
                      slidesPerGroup: 1,
                      watchSlidesProgress: !0,
                      resistanceRatio: 0,
                      spaceBetween: 0,
                      centeredSlides: !1,
                      virtualTranslate: !0
                    }
                    r.extend(this.params, e), r.extend(this.originalParams, e)
                  }
                },
                setTranslate: function() {
                  'cube' === this.params.effect &&
                    this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                  'cube' === this.params.effect &&
                    this.cubeEffect.setTransition(e)
                }
              }
            },
            {
              name: 'effect-flip',
              params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
              create: function() {
                r.extend(this, {
                  flipEffect: {
                    setTranslate: ve.setTranslate.bind(this),
                    setTransition: ve.setTransition.bind(this)
                  }
                })
              },
              on: {
                beforeInit: function() {
                  if ('flip' === this.params.effect) {
                    this.classNames.push(
                      this.params.containerModifierClass + 'flip'
                    ),
                      this.classNames.push(
                        this.params.containerModifierClass + '3d'
                      )
                    var e = {
                      slidesPerView: 1,
                      slidesPerColumn: 1,
                      slidesPerGroup: 1,
                      watchSlidesProgress: !0,
                      spaceBetween: 0,
                      virtualTranslate: !0
                    }
                    r.extend(this.params, e), r.extend(this.originalParams, e)
                  }
                },
                setTranslate: function() {
                  'flip' === this.params.effect &&
                    this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                  'flip' === this.params.effect &&
                    this.flipEffect.setTransition(e)
                }
              }
            },
            {
              name: 'effect-coverflow',
              params: {
                coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: !0
                }
              },
              create: function() {
                r.extend(this, {
                  coverflowEffect: {
                    setTranslate: me.setTranslate.bind(this),
                    setTransition: me.setTransition.bind(this)
                  }
                })
              },
              on: {
                beforeInit: function() {
                  'coverflow' === this.params.effect &&
                    (this.classNames.push(
                      this.params.containerModifierClass + 'coverflow'
                    ),
                    this.classNames.push(
                      this.params.containerModifierClass + '3d'
                    ),
                    (this.params.watchSlidesProgress = !0),
                    (this.originalParams.watchSlidesProgress = !0))
                },
                setTranslate: function() {
                  'coverflow' === this.params.effect &&
                    this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                  'coverflow' === this.params.effect &&
                    this.coverflowEffect.setTransition(e)
                }
              }
            },
            {
              name: 'thumbs',
              params: {
                thumbs: {
                  swiper: null,
                  slideThumbActiveClass: 'swiper-slide-thumb-active',
                  thumbsContainerClass: 'swiper-container-thumbs'
                }
              },
              create: function() {
                r.extend(this, {
                  thumbs: {
                    swiper: null,
                    init: ge.init.bind(this),
                    update: ge.update.bind(this),
                    onThumbClick: ge.onThumbClick.bind(this)
                  }
                })
              },
              on: {
                beforeInit: function() {
                  var e = this.params.thumbs
                  e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                  this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                  this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                  this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                  this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                  var t = this.thumbs.swiper
                  t && t.setTransition(e)
                },
                beforeDestroy: function() {
                  var e = this.thumbs.swiper
                  e && this.thumbs.swiperCreated && e && e.destroy()
                }
              }
            }
          ]
        return (
          void 0 === F.use &&
            ((F.use = F.Class.use), (F.installModule = F.Class.installModule)),
          F.use(we),
          F
        )
      })()
    },
    97: function(e, t, n) {
      'use strict'
      t.a = function(e, t) {
        return (
          (t = t || {}),
          new Promise(function(n, r) {
            var s = new XMLHttpRequest(),
              o = [],
              u = [],
              i = {},
              a = function() {
                return {
                  ok: 2 == ((s.status / 100) | 0),
                  statusText: s.statusText,
                  status: s.status,
                  url: s.responseURL,
                  text: function() {
                    return Promise.resolve(s.responseText)
                  },
                  json: function() {
                    return Promise.resolve(JSON.parse(s.responseText))
                  },
                  blob: function() {
                    return Promise.resolve(new Blob([s.response]))
                  },
                  clone: a,
                  headers: {
                    keys: function() {
                      return o
                    },
                    entries: function() {
                      return u
                    },
                    get: function(e) {
                      return i[e.toLowerCase()]
                    },
                    has: function(e) {
                      return e.toLowerCase() in i
                    }
                  }
                }
              }
            for (var l in (s.open(t.method || 'get', e, !0),
            (s.onload = function() {
              s
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, n) {
                  o.push((t = t.toLowerCase())),
                    u.push([t, n]),
                    (i[t] = i[t] ? i[t] + ',' + n : n)
                }),
                n(a())
            }),
            (s.onerror = r),
            (s.withCredentials = 'include' == t.credentials),
            t.headers))
              s.setRequestHeader(l, t.headers[l])
            s.send(t.body || null)
          })
        )
      }
    },
    99: function(e, t, n) {
      'use strict'
      var r = function(e) {
        return (
          (function(e) {
            return !!e && 'object' == typeof e
          })(e) &&
          !(function(e) {
            var t = Object.prototype.toString.call(e)
            return (
              '[object RegExp]' === t ||
              '[object Date]' === t ||
              (function(e) {
                return e.$$typeof === o
              })(e)
            )
          })(e)
        )
      }
      var o =
        'function' == typeof Symbol && Symbol.for
          ? Symbol.for('react.element')
          : 60103
      function l(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? v(((n = e), Array.isArray(n) ? [] : {}), e, t)
          : e
        var n
      }
      function d(e, source, t) {
        return e.concat(source).map(function(element) {
          return l(element, t)
        })
      }
      function h(e) {
        return Object.keys(e).concat(
          (function(e) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(e).filter(function(symbol) {
                  return e.propertyIsEnumerable(symbol)
                })
              : []
          })(e)
        )
      }
      function c(object, e) {
        try {
          return e in object
        } catch (e) {
          return !1
        }
      }
      function f(e, source, t) {
        var n = {}
        return (
          t.isMergeableObject(e) &&
            h(e).forEach(function(r) {
              n[r] = l(e[r], t)
            }),
          h(source).forEach(function(r) {
            ;(function(e, t) {
              return (
                c(e, t) &&
                !(
                  Object.hasOwnProperty.call(e, t) &&
                  Object.propertyIsEnumerable.call(e, t)
                )
              )
            })(e, r) ||
              (c(e, r) && t.isMergeableObject(source[r])
                ? (n[r] = (function(e, t) {
                    if (!t.customMerge) return v
                    var n = t.customMerge(e)
                    return 'function' == typeof n ? n : v
                  })(r, t)(e[r], source[r], t))
                : (n[r] = l(source[r], t)))
          }),
          n
        )
      }
      function v(e, source, t) {
        ;((t = t || {}).arrayMerge = t.arrayMerge || d),
          (t.isMergeableObject = t.isMergeableObject || r),
          (t.cloneUnlessOtherwiseSpecified = l)
        var n = Array.isArray(source)
        return n === Array.isArray(e)
          ? n
            ? t.arrayMerge(e, source, t)
            : f(e, source, t)
          : l(source, t)
      }
      v.all = function(e, t) {
        if (!Array.isArray(e))
          throw new Error('first argument should be an array')
        return e.reduce(function(e, n) {
          return v(e, n, t)
        }, {})
      }
      var m = v
      e.exports = m
    }
  }
])
