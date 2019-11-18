;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    162: function(t, e, r) {
      var content = r(173)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, r(20).default)('139e72c6', content, !0, { sourceMap: !1 })
    },
    172: function(t, e, r) {
      'use strict'
      var n = r(162)
      r.n(n).a
    },
    173: function(t, e, r) {
      ;(t.exports = r(19)(!1)).push([
        t.i,
        '.brand[data-v-210453ba]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:justify;justify-content:space-between;margin:20px 0 10px}.brand-item[data-v-210453ba]{overflow:hidden;cursor:pointer;margin-bottom:10px;flex-basis:49.6%}.brand-item .img[data-v-210453ba]{width:100%;height:100%;-webkit-transition:all .35s ease-in-out;transition:all .35s ease-in-out;-webkit-transform:scale(1);transform:scale(1)}.brand-item .img img[data-v-210453ba]{width:100%}.brand-item .img[data-v-210453ba]:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.story[data-v-210453ba]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:justify;justify-content:space-between;margin-bottom:10px}.story-item[data-v-210453ba]{overflow:hidden;cursor:pointer;margin-bottom:5px;flex-basis:16%}.story-item .img[data-v-210453ba]{width:100%;height:100%;-webkit-transition:all .35s ease-in-out;transition:all .35s ease-in-out;-webkit-transform:scale(1);transform:scale(1)}.story-item .img img[data-v-210453ba]{width:100%}.story-item .img[data-v-210453ba]:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}@media (max-width:779px){.story-item[data-v-210453ba]{flex-basis:24.5%}}',
        ''
      ])
    },
    178: function(t, e, r) {
      'use strict'
      r.r(e)
      var n = { name: 'Home', layout: 'layout' },
        d = (r(172), r(8)),
        component = Object(d.a)(
          n,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e('div', { staticClass: 'main' }, [
              e('div', { staticClass: 'container' }, [
                this._m(0),
                this._v(' '),
                e(
                  'div',
                  { staticClass: 'story' },
                  this._l(36, function(t) {
                    return e('div', { key: t, staticClass: 'story-item' }, [
                      e('div', { staticClass: 'img' }, [
                        e('div', { staticClass: 'img' }, [
                          e('img', {
                            attrs: { src: '/images/index/a' + t + '.png' }
                          })
                        ])
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          },
          [
            function() {
              var t = this.$createElement,
                e = this._self._c || t
              return e('div', { staticClass: 'brand' }, [
                e('div', { staticClass: 'brand-item' }, [
                  e('div', { staticClass: 'img' }, [
                    e('img', {
                      attrs: { src: '/images/index/brand1.png', alt: '' }
                    })
                  ])
                ]),
                this._v(' '),
                e('div', { staticClass: 'brand-item' }, [
                  e('div', { staticClass: 'img' }, [
                    e('img', {
                      attrs: { src: '/images/index/brand2.png', alt: '' }
                    })
                  ])
                ]),
                this._v(' '),
                e('div', { staticClass: 'brand-item' }, [
                  e('div', { staticClass: 'img' }, [
                    e('img', {
                      attrs: { src: '/images/index/brand3.png', alt: '' }
                    })
                  ])
                ]),
                this._v(' '),
                e('div', { staticClass: 'brand-item' }, [
                  e('div', { staticClass: 'img' }, [
                    e('img', {
                      attrs: { src: '/images/index/brand4.png', alt: '' }
                    })
                  ])
                ]),
                this._v(' '),
                e('div', { staticClass: 'brand-item' }, [
                  e('div', { staticClass: 'img' }, [
                    e('img', {
                      attrs: { src: '/images/index/brand5.png', alt: '' }
                    })
                  ])
                ]),
                this._v(' '),
                e('div', { staticClass: 'brand-item' }, [
                  e('div', { staticClass: 'img' }, [
                    e('img', {
                      attrs: { src: '/images/index/brand6.png', alt: '' }
                    })
                  ])
                ])
              ])
            }
          ],
          !1,
          null,
          '210453ba',
          null
        )
      e.default = component.exports
    }
  }
])
