;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    159: function(t, n, e) {
      var content = e(166)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, e(20).default)('676bafb0', content, !0, { sourceMap: !1 })
    },
    165: function(t, n, e) {
      'use strict'
      var o = e(159)
      e.n(o).a
    },
    166: function(t, n, e) {
      ;(t.exports = e(19)(!1)).push([
        t.i,
        '.contact[data-v-7027d476]{margin-bottom:50px}.contact .text[data-v-7027d476]{text-align:center;color:#000;font-size:20px;margin:50px}.contact .text p[data-v-7027d476]{padding-bottom:10px}.contact .map[data-v-7027d476]{height:400px}@media (max-width:780px){.contact .map[data-v-7027d476]{height:250px}}',
        ''
      ])
    },
    175: function(t, n, e) {
      'use strict'
      e.r(n)
      var o = {
          layout: 'layout',
          data: function() {
            return { mapUrl: '' }
          },
          mounted: function() {
            this.mapUrl = ''.concat(window.location.origin, '/html/maps.html')
          }
        },
        r = (e(165), e(8)),
        component = Object(r.a)(
          o,
          function() {
            var t = this.$createElement,
              n = this._self._c || t
            return n('div', { staticClass: 'contact' }, [
              n('div', { staticClass: 'container' }, [
                this._m(0),
                this._v(' '),
                n('div', { staticClass: 'map' }, [
                  n('iframe', {
                    attrs: {
                      width: '100%',
                      height: '100%',
                      frameborder: '0',
                      scrolling: 'no',
                      marginheight: '0',
                      marginwidth: '0',
                      src: this.mapUrl
                    }
                  })
                ])
              ])
            ])
          },
          [
            function() {
              var t = this,
                n = t.$createElement,
                e = t._self._c || n
              return e('div', { staticClass: 'text' }, [
                e('p', [
                  t._v('电话：'),
                  e('a', { attrs: { href: 'tel:021-65152596' } }, [
                    t._v('021-65152596')
                  ])
                ]),
                t._v(' '),
                e('p', [
                  t._v('手机：'),
                  e('a', { attrs: { href: 'tel:18516102232' } }, [
                    t._v('18516102232')
                  ])
                ]),
                t._v(' '),
                e('p', [
                  t._v('\n        邮箱：'),
                  e(
                    'a',
                    { attrs: { href: 'mailto:giulia.qin@dkingbrand.com' } },
                    [t._v('giulia.qin@dkingbrand.com')]
                  )
                ]),
                t._v(' '),
                e('p', [t._v('地址：上海市杨浦区大连路990号海上海10号楼')])
              ])
            }
          ],
          !1,
          null,
          '7027d476',
          null
        )
      n.default = component.exports
    }
  }
])
