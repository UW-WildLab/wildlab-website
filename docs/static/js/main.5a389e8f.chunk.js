(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    148: function(e, t, a) {
      e.exports = a(350);
    },
    269: function(e, t, a) {
      var n = {
        './big/1.jpg': 270,
        './big/2.jpg': 271,
        './big/3.jpg': 272,
        './big/4.jpg': 273,
        './big/5.jpg': 274,
        './big/6.jpg': 275,
        './mini/1.jpg': 276
      };
      function i(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return n[e];
      }
      (i.keys = function() {
        return Object.keys(n);
      }),
        (i.resolve = r),
        (e.exports = i),
        (i.id = 269);
    },
    270: function(e, t, a) {
      e.exports = a.p + 'static/media/1.6e55db2c.jpg';
    },
    271: function(e, t, a) {
      e.exports = a.p + 'static/media/2.77ac1794.jpg';
    },
    272: function(e, t, a) {
      e.exports = a.p + 'static/media/3.64fa9ddf.jpg';
    },
    273: function(e, t, a) {
      e.exports = a.p + 'static/media/4.9a969160.jpg';
    },
    274: function(e, t, a) {
      e.exports = a.p + 'static/media/5.ceada15c.jpg';
    },
    275: function(e, t, a) {
      e.exports = a.p + 'static/media/6.63693eea.jpg';
    },
    276: function(e, t, a) {
      e.exports = a.p + 'static/media/1.f48aeae4.jpg';
    },
    277: function(e, t, a) {},
    278: function(e, t, a) {},
    279: function(e, t, a) {},
    280: function(e, t, a) {},
    281: function(e, t, a) {},
    282: function(e, t, a) {},
    284: function(e, t, a) {},
    325: function(e, t, a) {},
    326: function(e, t, a) {},
    327: function(e, t, a) {},
    339: function(e, t, a) {},
    343: function(e, t, a) {},
    345: function(e, t, a) {},
    346: function(e, t, a) {},
    347: function(e, t, a) {},
    348: function(e, t, a) {},
    349: function(e, t, a) {},
    350: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        i = a.n(n),
        r = a(15),
        c = a(361),
        l = a(5),
        s = a.n(l),
        o = a(359),
        d = a(146),
        m = a(6),
        _ = a.n(m),
        u = a(22),
        p = a.n(u),
        g = a(62),
        b = a.n(g),
        h = a(66),
        f = a(134),
        E = a.n(f),
        v = a(358),
        N = function(e) {
          var t = e.to,
            a = void 0 === t ? '#' : t,
            n = e.children,
            r = Object(h.a)(e, ['to', 'children']);
          return (function(e) {
            return E()(e, 'http');
          })(a)
            ? i.a.createElement(
                'a',
                Object.assign(
                  { href: a, target: '_blank', rel: 'noopener noreferrer' },
                  r
                ),
                n
              )
            : i.a.createElement(v.a, Object.assign({ to: a }, r), n);
        },
        w = a(8),
        y = a(9),
        x = a(11),
        j = a(10),
        k = a(12),
        O = a(7),
        z = a.n(O),
        C = function(e) {
          return function(t) {
            var a, r;
            return (
              (r = a = (function(a) {
                function n() {
                  var e, a;
                  Object(w.a)(this, n);
                  for (
                    var r = arguments.length, c = new Array(r), l = 0;
                    l < r;
                    l++
                  )
                    c[l] = arguments[l];
                  return (
                    ((a = Object(x.a)(
                      this,
                      (e = Object(j.a)(n)).call.apply(e, [this].concat(c))
                    )).getComponent = function() {
                      return i.a.createElement(t, a.props);
                    }),
                    a
                  );
                }
                return (
                  Object(k.a)(n, a),
                  Object(y.a)(n, [
                    {
                      key: 'render',
                      value: function() {
                        var t = this.props,
                          a = t.noPadding,
                          n = t.fullWidth,
                          r = t.bg,
                          c = z()(a && 'no-padding', r && 'bg');
                        return i.a.createElement(
                          'section',
                          { id: e, className: c },
                          n
                            ? this.getComponent()
                            : i.a.createElement(
                                'div',
                                { className: 'grid grid_12' },
                                this.getComponent()
                              )
                        );
                      }
                    }
                  ]),
                  n
                );
              })(n.Component)),
              (a.displayName = 'WrappedComponent'),
              r
            );
          };
        },
        T = a(47),
        P = (a(91), a(30)),
        S = a.n(P),
        I = (a(135), a(38)),
        W = a.n(I),
        M = function(e, t) {
          return (
            (t = null == t || '' === t.trim() ? '[]' : t),
            JSON.parse(t)
              .map(function(t) {
                return e.find(function(e) {
                  return e.id === t.toString();
                });
              })
              .filter(function(e) {
                return e;
              })
          );
        },
        D = function(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            a =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          return M(e, t).map(function(e) {
            return a
              ? i.a.createElement(
                  N,
                  {
                    key: e.id,
                    to: '/people/'.concat(p()(e.name.trim()), '-').concat(e.id)
                  },
                  e.name.trim()
                )
              : e.name.trim();
          });
        },
        G = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          return M(e, t).map(function(e) {
            return e.title.trim();
          });
        },
        L = function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'date';
          return S()(
            e.map(function(e) {
              var a = W()(e[t], 'MM/DD/YYYY');
              return Object(
                T.a
              )({}, e, { date: a.format('Do MMMM YYYY'), timestamp: a.format('x') });
            }),
            ['timestamp'],
            ['desc']
          );
        },
        A = function(e) {
          return e
            ? 'http://drive.google.com/uc?export=view&id='.concat(
                e.split('id=')[1]
              )
            : null;
        },
        Y = function(e) {
          return a(269)
            .keys()
            .filter(function(t) {
              return t.includes(e);
            })
            .map(function(e) {
              return e.replace('./', '/banner/');
            });
        },
        F = (a(277), Y('big')),
        Q = F[b()(0, F.length - 1)],
        q = _()(
          Object(l.withGoogleSheets)('home'),
          Object(l.withGoogleSheets)('news'),
          C('home-banner')
        )(function(e) {
          var t = e.db,
            a = t.home,
            n = t.news;
          return i.a.createElement(
            'div',
            {
              className:
                'section background_size_cover background_position_center banner-container',
              style: { backgroundImage: "url('".concat(Q, "')") }
            },
            i.a.createElement(
              'div',
              { className: 'section bg_greydark_alpha_gradient_2' },
              i.a.createElement('div', { className: 'section height_570' }),
              i.a.createElement(
                'div',
                { className: 'container clearfix' },
                i.a.createElement(
                  'div',
                  { className: 'grid grid_12 custom-banner-title' },
                  i.a.createElement(
                    'strong',
                    { className: 'color_white font_size_60 first_font' },
                    a[0].banner_big_text
                  ),
                  i.a.createElement(
                    'div',
                    { className: 'section ' },
                    i.a.createElement(
                      'strong',
                      {
                        className:
                          'color_white font_size_30 first_font small-text'
                      },
                      a[0].banner_small_text
                    )
                  )
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_12 custom-news-section' },
                  L(n).map(function(e) {
                    return i.a.createElement(
                      'p',
                      { key: e.id },
                      i.a.createElement(
                        'span',
                        { className: 'news-title' },
                        e.date,
                        '. '
                      ),
                      i.a.createElement(
                        N,
                        { to: '/news/'.concat(p()(e.title), '-').concat(e.id) },
                        e.title
                      )
                    );
                  })
                )
              ),
              i.a.createElement('div', { className: 'section height_50' })
            )
          );
        }),
        R = (a(278), Y('mini')),
        B = R[b()(0, R.length - 1)],
        H = function(e) {
          var t = e.title;
          return i.a.createElement(
            'div',
            {
              className:
                'section background_size_cover background_position_center_bottom',
              style: { backgroundImage: "url('".concat(B, "')") }
            },
            i.a.createElement(
              'div',
              { className: 'section bg_greydark_alpha_gradient_2' },
              i.a.createElement(
                'div',
                { className: 'container clearfix' },
                i.a.createElement('div', { className: 'section height_200' }),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_12' },
                  i.a.createElement(
                    'strong',
                    { className: 'mini-banner-title' },
                    t
                  )
                )
              )
            )
          );
        };
      H.defaultProps = { title: '' };
      var K = C('page-banner')(H),
        U =
          (a(279),
          function(e) {
            var t = e.isFooter;
            return i.a.createElement(
              'ul',
              { className: 'nav-menu-items' },
              i.a.createElement(
                'li',
                null,
                i.a.createElement(N, { to: '/home' }, 'Home')
              ),
              i.a.createElement(
                'li',
                null,
                i.a.createElement(N, { to: '/people' }, 'People')
              ),
              i.a.createElement(
                'li',
                null,
                i.a.createElement(N, { to: '/projects' }, 'Projects')
              ),
              i.a.createElement(
                'li',
                null,
                i.a.createElement(N, { to: '/publications' }, 'Publications')
              ),
              i.a.createElement(
                'li',
                null,
                i.a.createElement(N, { to: '/news' }, 'News')
              ),
              i.a.createElement(
                'li',
                null,
                i.a.createElement(N, { to: '/about' }, 'About')
              ),
              i.a.createElement(
                'li',
                null,
                i.a.createElement(N, { to: '/faqs' }, 'FAQs')
              ),
              t &&
                i.a.createElement(
                  'li',
                  null,
                  i.a.createElement(N, { to: '/calendar' }, 'Calendar')
                )
            );
          });
      U.defaultProps = { isFooter: !1 };
      var J = U,
        V =
          (a(280),
          function() {
            return i.a.createElement(
              N,
              { to: '/home' },
              i.a.createElement(
                'span',
                { className: 'logo logo-font' },
                'WildLab'
              )
            );
          }),
        $ =
          (a(281),
          (function(e) {
            function t() {
              var e, a;
              Object(w.a)(this, t);
              for (
                var n = arguments.length, i = new Array(n), r = 0;
                r < n;
                r++
              )
                i[r] = arguments[r];
              return (
                ((a = Object(x.a)(
                  this,
                  (e = Object(j.a)(t)).call.apply(e, [this].concat(i))
                )).state = { showResponsiveMenu: !1 }),
                (a.toggleResponsiveMenu = function() {
                  a.setState({
                    showResponsiveMenu: !a.state.showResponsiveMenu
                  });
                }),
                a
              );
            }
            return (
              Object(k.a)(t, e),
              Object(y.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this.state.showResponsiveMenu;
                    return i.a.createElement(
                      'div',
                      null,
                      i.a.createElement(
                        'div',
                        {
                          className:
                            'navigation_2_sidebar_content padding_40 box_sizing_border_box overflow_hidden overflow_y_auto transition_all_08_ease bg_green height_100_percentage position_fixed width_300 right_300_negative z_index_9',
                          style: { display: e ? 'block' : 'none', right: 0 }
                        },
                        i.a.createElement('img', {
                          alt: '',
                          width: '25',
                          className:
                            'close_navigation_2_sidebar_content cursor_pointer right_20 top_20 position_absolute',
                          src: '/img/icons/icon-close-white.svg',
                          onClick: this.toggleResponsiveMenu
                        }),
                        i.a.createElement(
                          'div',
                          { className: 'navigation_2_sidebar' },
                          i.a.createElement(J, null)
                        )
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'section position_relative ' },
                        i.a.createElement(
                          'div',
                          { className: 'section position_absolute' },
                          i.a.createElement(
                            'div',
                            {
                              className: 'container clearfix position_relative'
                            },
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'grid grid_12 display_none_all_responsive'
                              },
                              i.a.createElement('div', {
                                className: 'section height_10'
                              }),
                              i.a.createElement(V, null),
                              i.a.createElement(
                                'div',
                                {
                                  className:
                                    'navigation_2 text_align_right float_right display_none_all_responsive'
                                },
                                i.a.createElement(J, null)
                              ),
                              i.a.createElement('div', {
                                className: 'section height_10'
                              })
                            ),
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'width_50_percentage text_align_center_all_iphone width_100_percentage_all_iphone float_left display_none display_block_responsive'
                              },
                              i.a.createElement('div', {
                                className: 'section height_20'
                              }),
                              i.a.createElement(V, null)
                            ),
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'width_50_percentage width_100_percentage_all_iphone float_left display_none display_block_responsive'
                              },
                              i.a.createElement('div', {
                                className: 'section height_20'
                              }),
                              i.a.createElement(
                                'div',
                                {
                                  className:
                                    'float_right width_100_percentage text_align_right text_align_center_all_iphone'
                                },
                                i.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'open_navigation_2_sidebar_content'
                                  },
                                  i.a.createElement('img', {
                                    alt: '',
                                    className: 'margin_right_20',
                                    width: '25',
                                    src: '/img/icons/icon-menu-white.svg',
                                    onClick: this.toggleResponsiveMenu
                                  })
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(n.Component)),
        X =
          (a(360),
          a(282),
          function() {
            return i.a.createElement(
              'footer',
              { className: 'footer' },
              i.a.createElement(
                'div',
                { className: 'section bg_greydark' },
                i.a.createElement('div', { className: 'section height_50' }),
                i.a.createElement(
                  'div',
                  { className: 'container clearfix' },
                  i.a.createElement(
                    'div',
                    { className: 'grid grid_12 text_align_center' },
                    i.a.createElement(
                      'div',
                      { className: 'section' },
                      i.a.createElement(V, null)
                    )
                  )
                ),
                i.a.createElement('div', { className: 'section height_30' })
              ),
              i.a.createElement(
                'div',
                { className: 'section bg_greydark' },
                i.a.createElement(
                  'div',
                  {
                    className: 'container clearfix border_top_1_solid_greydark'
                  },
                  i.a.createElement(
                    'div',
                    {
                      className:
                        'grid grid_12 text_align_center text_align_center_responsive border_top_1_solid_greydark_responsive display_none_all_iphone'
                    },
                    i.a.createElement(
                      'div',
                      { className: 'navigation_copyright' },
                      i.a.createElement(J, { isFooter: !0 })
                    )
                  ),
                  i.a.createElement(
                    'div',
                    {
                      className:
                        'grid grid_12 text_align_center text_align_center_responsive'
                    },
                    i.a.createElement(
                      'p',
                      { className: 'color_grey font_size_14' },
                      '\xa9 Copyright 2020 WildLab'
                    )
                  )
                )
              )
            );
          }),
        Z = (a(92), a(136), a(31)),
        ee = a.n(Z),
        te = (a(284), a(60)),
        ae = a.n(te),
        ne = a(137),
        ie = a.n(ne),
        re = function(e) {
          return function(t) {
            var a, r;
            return (
              (r = a = (function(a) {
                function n() {
                  return (
                    Object(w.a)(this, n),
                    Object(x.a)(this, Object(j.a)(n).apply(this, arguments))
                  );
                }
                return (
                  Object(k.a)(n, a),
                  Object(y.a)(n, [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        var t = ie()(e) ? ae()(this.props, e.path) : e;
                        document.title = 'WildLab - ' + t;
                      }
                    },
                    {
                      key: 'render',
                      value: function() {
                        return i.a.createElement(t, this.props);
                      }
                    }
                  ]),
                  n
                );
              })(n.Component)),
              (a.displayName = 'WrappedComponent'),
              r
            );
          };
        },
        ce = _()(Object(l.withGoogleSheets)('aboutus'), C('about-us'))(function(
          e
        ) {
          var t = e.db.aboutus;
          return i.a.createElement(
            'div',
            { className: 'section' },
            i.a.createElement(
              'div',
              { className: 'container clearfix' },
              i.a.createElement(
                'div',
                {
                  className:
                    'grid grid_6 text_align_right text_align_center_responsive'
                },
                i.a.createElement(
                  'h1',
                  { className: 'font_size_40 line_height_50 padding_10' },
                  i.a.createElement('strong', null, t[0].highlighted_text)
                )
              ),
              i.a.createElement(
                'div',
                { className: 'grid grid_6 ' },
                i.a.createElement(
                  'p',
                  { className: 'padding_top_10' },
                  t[0].main_text
                )
              )
            )
          );
        }),
        le = _()(C('about-us-logos'))(function() {
          return i.a.createElement(
            'div',
            { className: 'section' },
            i.a.createElement(
              'div',
              { className: 'section bg_grey border_top_1_solid_grey' },
              i.a.createElement(
                'div',
                { className: 'container clearfix' },
                i.a.createElement('div', { className: 'section height_30' }),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_2' },
                  i.a.createElement('img', {
                    alt: '',
                    className: 'width_100_percentage',
                    src: '/img/partner/logo1.png'
                  })
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_2' },
                  i.a.createElement('img', {
                    alt: '',
                    className: 'width_100_percentage',
                    src: '/img/partner/logo4.png'
                  })
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_2' },
                  i.a.createElement('img', {
                    alt: '',
                    className: 'width_100_percentage',
                    src: '/img/partner/logo3.png'
                  })
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_2' },
                  i.a.createElement('img', {
                    alt: '',
                    className: 'width_100_percentage',
                    src: '/img/partner/logo2.png'
                  })
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_2' },
                  i.a.createElement('img', {
                    alt: '',
                    className: 'width_100_percentage',
                    src: '/img/partner/logo5.png'
                  })
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_2' },
                  i.a.createElement('img', {
                    alt: '',
                    className: 'width_100_percentage',
                    src: '/img/partner/logo6.png'
                  })
                ),
                i.a.createElement('div', { className: 'section height_30' })
              )
            )
          );
        }),
        se = _()(Object(l.withGoogleSheets)('aboutus'), C('about-us-values'))(
          function(e) {
            var t = e.db.aboutus;
            return i.a.createElement(
              'div',
              { className: 'section' },
              i.a.createElement(
                'div',
                { className: 'container clearfix' },
                i.a.createElement(
                  'div',
                  { className: 'grid grid_1 ' },
                  i.a.createElement('div', { className: 'section height_1' })
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_5 ' },
                  i.a.createElement(
                    'div',
                    { className: 'padding_20' },
                    i.a.createElement(
                      'h1',
                      { className: 'font_size_40' },
                      i.a.createElement(
                        'strong',
                        null,
                        i.a.createElement(
                          'span',
                          { className: 'color_f1f1f1' },
                          '01.'
                        ),
                        ' ',
                        t[0].value_1
                      )
                    ),
                    i.a.createElement('div', {
                      className: 'section height_20'
                    }),
                    i.a.createElement('p', null, t[0].value_1_text)
                  )
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_5 ' },
                  i.a.createElement(
                    'div',
                    { className: 'padding_20' },
                    i.a.createElement(
                      'h1',
                      { className: 'font_size_40' },
                      i.a.createElement(
                        'strong',
                        null,
                        i.a.createElement(
                          'span',
                          { className: 'color_f1f1f1' },
                          '02.'
                        ),
                        ' ',
                        t[0].value_2
                      )
                    ),
                    i.a.createElement('div', {
                      className: 'section height_20'
                    }),
                    i.a.createElement('p', null, t[0].value_2_text)
                  )
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_1 ' },
                  i.a.createElement('div', { className: 'section height_1' })
                ),
                i.a.createElement('div', { className: 'section height_1' }),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_1 ' },
                  i.a.createElement('div', { className: 'section height_1' })
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_5 ' },
                  i.a.createElement(
                    'div',
                    { className: 'padding_20' },
                    i.a.createElement(
                      'h1',
                      { className: 'font_size_40' },
                      i.a.createElement(
                        'strong',
                        null,
                        i.a.createElement(
                          'span',
                          { className: 'color_f1f1f1' },
                          '03.'
                        ),
                        ' ',
                        t[0].value_3
                      )
                    ),
                    i.a.createElement('div', {
                      className: 'section height_20'
                    }),
                    i.a.createElement('p', null, t[0].value_3_text)
                  )
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_5 ' },
                  i.a.createElement(
                    'div',
                    { className: 'padding_20' },
                    i.a.createElement(
                      'h1',
                      { className: 'font_size_40' },
                      i.a.createElement(
                        'strong',
                        null,
                        i.a.createElement(
                          'span',
                          { className: 'color_f1f1f1' },
                          '04.'
                        ),
                        ' ',
                        t[0].value_4
                      )
                    ),
                    i.a.createElement('div', {
                      className: 'section height_20'
                    }),
                    i.a.createElement('p', null, t[0].value_4_text)
                  )
                ),
                i.a.createElement(
                  'div',
                  { className: 'grid grid_1 ' },
                  i.a.createElement('div', { className: 'section height_1' })
                )
              )
            );
          }
        ),
        oe = re('About the WildLab')(function() {
          return i.a.createElement(
            'div',
            null,
            i.a.createElement(K, {
              fullWidth: !0,
              noPadding: !0,
              title: 'About the WildLab'
            }),
            i.a.createElement(ce, null),
            i.a.createElement(se, null),
            i.a.createElement(le, { fullWidth: !0, noPadding: !0 })
          );
        }),
        de = a(97),
        me = a(144),
        _e = a.n(me);
      a(324), a(325);
      Object(de.b)(W.a);
      var ue = (function(e) {
          function t() {
            var e, a;
            Object(w.a)(this, t);
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
              i[r] = arguments[r];
            return (
              ((a = Object(x.a)(
                this,
                (e = Object(j.a)(t)).call.apply(e, [this].concat(i))
              )).state = { events: null }),
              (a.calendarId = 'email@gmail.com'),
              (a.apiKey = ''),
              (a.getUrl = function() {
                return 'https://www.googleapis.com/calendar/v3/calendars/'
                  .concat(
                    a.calendarId,
                    '/events?fields=items(description%2Cend%2ChtmlLink%2Cid%2Clocation%2Cstart%2Csummary)&key='
                  )
                  .concat(a.apiKey);
              }),
              a
            );
          }
          return (
            Object(k.a)(t, e),
            Object(y.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  fetch(this.getUrl())
                    .then(function(e) {
                      return e.json();
                    })
                    .then(function(t) {
                      e.setState({
                        events: t.items.map(function(e) {
                          return {
                            id: e.id,
                            title: e.summary,
                            allDay: !!e.start.date,
                            start: new Date(e.start.date || e.start.dateTime),
                            end: new Date(e.end.date || e.start.dateTime),
                            url: e.htmlLink
                          };
                        })
                      });
                    })
                    .catch(function(e) {
                      return console.log(e);
                    });
                }
              },
              {
                key: 'render',
                value: function() {
                  return this.state.events
                    ? i.a.createElement(de.a, {
                        selectable: !0,
                        onSelectEvent: function(e) {
                          return window.open(e.url);
                        },
                        className: 'calendar',
                        events: this.state.events,
                        defaultDate: new Date()
                      })
                    : i.a.createElement(_e.a, {
                        className: 'loading',
                        name: 'wave',
                        color: 'steelblue'
                      });
                }
              }
            ]),
            t
          );
        })(n.Component),
        pe = _()(re('Calendar'), C('calendar'))(ue),
        ge =
          (a(326),
          C('data-load-error')(function() {
            return i.a.createElement(
              'div',
              { className: 'error-section' },
              i.a.createElement('h1', null, 'Data Load Error'),
              i.a.createElement(
                'p',
                null,
                'An error has occurred. Please contact the site owners. Or Reload the page.'
              )
            );
          }),
          a(69)),
        be = a.n(ge),
        he = a(70),
        fe = a.n(he),
        Ee =
          (a(327),
          _()(Object(l.withGoogleSheets)('faqs'), C('faq-questions'))(function(
            e
          ) {
            var t = e.db.faqs;
            return i.a.createElement(
              be.a,
              { defaultActiveKey: 0 },
              t.map(function(e, t) {
                return i.a.createElement(
                  fe.a,
                  { key: t },
                  i.a.createElement(
                    be.a.Toggle,
                    { as: fe.a.Header, eventKey: t },
                    e.question
                  ),
                  i.a.createElement(
                    be.a.Collapse,
                    { eventKey: t },
                    i.a.createElement(
                      fe.a.Body,
                      null,
                      i.a.createElement('div', {
                        dangerouslySetInnerHTML: { __html: e.answer }
                      })
                    )
                  )
                );
              })
            );
          })),
        ve = re('Frequently Asked Questions')(function() {
          return i.a.createElement(
            'div',
            null,
            i.a.createElement(K, {
              fullWidth: !0,
              noPadding: !0,
              title: 'Frequently Asked Questions'
            }),
            i.a.createElement(Ee, null)
          );
        }),
        Ne = _()(Object(l.withGoogleSheets)('projects'), C('projects'))(
          function(e) {
            var t = e.db.projects,
              a =
                t.find(function(e) {
                  return 'Y' === e.highlighted;
                }) || t[0];
            return (
              (t = t
                .filter(function(e) {
                  return e.id !== a.id;
                })
                .slice(0, 4)),
              i.a.createElement(
                'div',
                { className: 'section' },
                i.a.createElement(
                  'div',
                  { className: 'container clearfix' },
                  i.a.createElement(
                    'div',
                    { className: 'grid grid_12' },
                    i.a.createElement(
                      'h1',
                      { className: 'font_size_50' },
                      i.a.createElement('strong', null, 'Our Projects')
                    )
                  ),
                  i.a.createElement(
                    'div',
                    {
                      className:
                        'width_50_percentage width_100_percentage_responsive float_left'
                    },
                    t.map(function(e, t) {
                      return i.a.createElement(
                        'div',
                        {
                          key: e.id,
                          style: { clear: t % 2 === 0 ? 'both' : 'none' },
                          className:
                            'width_50_percentage width_100_percentage_all_iphone float_left'
                        },
                        i.a.createElement(
                          'div',
                          {
                            className:
                              'section padding_15 box_sizing_border_box'
                          },
                          i.a.createElement(
                            'div',
                            { className: 'section border_1_solid_grey' },
                            i.a.createElement(
                              'div',
                              { className: 'section position_relative' },
                              i.a.createElement('img', {
                                alt: '',
                                className: 'section',
                                src: '/img/courses/img2.png'
                              })
                            ),
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'section padding_20 box_sizing_border_box text_align_center'
                              },
                              i.a.createElement(
                                'h3',
                                null,
                                i.a.createElement(
                                  N,
                                  {
                                    className: 'color_greydark first_font',
                                    to: '/projects/'
                                      .concat(p()(e.name), '-')
                                      .concat(e.id)
                                  },
                                  e.name
                                )
                              )
                            )
                          )
                        )
                      );
                    })
                  ),
                  i.a.createElement(
                    'div',
                    {
                      className:
                        'width_50_percentage width_100_percentage_responsive float_left'
                    },
                    i.a.createElement(
                      'div',
                      { className: 'section padding_15 box_sizing_border_box' },
                      i.a.createElement(
                        'div',
                        { className: 'section border_1_solid_grey' },
                        i.a.createElement(
                          'div',
                          { className: 'section position_relative' },
                          i.a.createElement('img', {
                            alt: '',
                            className: 'section',
                            src: '/img/courses/img20.png'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          {
                            className:
                              'section padding_20 box_sizing_border_box'
                          },
                          i.a.createElement(
                            'h3',
                            { style: { marginBottom: '14px' } },
                            i.a.createElement(
                              N,
                              {
                                className: 'color_greydark first_font',
                                to: '/projects/'
                                  .concat(p()(a.name), '-')
                                  .concat(a.id)
                              },
                              a.name
                            )
                          ),
                          i.a.createElement(
                            'p',
                            null,
                            a.description.substring(0, 175) + '...'
                          )
                        )
                      )
                    )
                  ),
                  i.a.createElement(
                    'div',
                    {
                      className:
                        'section text_align_center custom-full-width-element'
                    },
                    i.a.createElement(
                      'p',
                      null,
                      'The projects are made possible by the funding from the NSF, Microsoft, Adobe, Google, and Facebook.'
                    )
                  ),
                  i.a.createElement(
                    'div',
                    {
                      className:
                        'section text_align_center custom-full-width-element'
                    },
                    i.a.createElement(
                      N,
                      {
                        className:
                          'display_inline_block font_size_13 color_white bg_blue first_font padding_8 border_radius_3',
                        to: '/projects'
                      },
                      'View All Projects'
                    )
                  )
                )
              )
            );
          }
        ),
        we =
          (a(339),
          _()(Object(l.withGoogleSheets)('publications'), C('publications'))(
            function(e) {
              var t = e.db.publications;
              return (
                (t = S()(t, ['year', 'conference'], ['desc', 'asc']).slice(
                  0,
                  5
                )),
                i.a.createElement(
                  'div',
                  { className: 'section' },
                  i.a.createElement(
                    'div',
                    { className: 'container clearfix' },
                    i.a.createElement(
                      'div',
                      { className: 'grid grid_12' },
                      i.a.createElement(
                        'h1',
                        { className: 'font_size_50 padding_bottom_20' },
                        i.a.createElement('strong', null, 'Our Publications')
                      ),
                      i.a.createElement(
                        'div',
                        { className: 'home-publications' },
                        t.map(function(e) {
                          return i.a.createElement(
                            'div',
                            {
                              className: 'width_100_percentage_responsive',
                              key: e.id
                            },
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'section padding_15 box_sizing_border_box'
                              },
                              i.a.createElement(
                                'div',
                                { className: 'section' },
                                i.a.createElement(
                                  'div',
                                  {
                                    className: 'section box_sizing_border_box'
                                  },
                                  i.a.createElement(
                                    'h3',
                                    { style: { marginBottom: '10px' } },
                                    i.a.createElement(
                                      N,
                                      {
                                        className: 'color_greydark first_font',
                                        to: e.url
                                      },
                                      '('
                                        .concat(e.conference, ' ')
                                        .concat(e.year, ') ')
                                        .concat(e.title),
                                      e.award &&
                                        '' !== e.award.trim() &&
                                        i.a.createElement(
                                          'span',
                                          {
                                            className:
                                              'paper-award margin_left_10 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9'
                                          },
                                          e.award
                                        )
                                    )
                                  ),
                                  i.a.createElement(
                                    'div',
                                    { className: 'home-publication-authors' },
                                    e.authors
                                  )
                                )
                              )
                            )
                          );
                        })
                      )
                    ),
                    i.a.createElement(
                      'div',
                      {
                        className:
                          'section text_align_center custom-full-width-element'
                      },
                      i.a.createElement(
                        N,
                        {
                          className:
                            'display_inline_block font_size_13 color_white bg_blue first_font padding_8 border_radius_3',
                          to: '/publications'
                        },
                        'View All Publications'
                      )
                    )
                  )
                )
              );
            }
          )),
        ye = re('Home')(function() {
          return i.a.createElement(
            'div',
            null,
            i.a.createElement(q, { fullWidth: !0, noPadding: !0 }),
            i.a.createElement(Ne, { fullWidth: !0 }),
            i.a.createElement(we, { fullWidth: !0 })
          );
        }),
        xe = _()(Object(l.withGoogleSheets)('news'), C('news-table'))(function(
          e
        ) {
          var t = e.db.news;
          return i.a.createElement(
            'div',
            { className: 'section ' },
            L(t).map(function(e, t) {
              return i.a.createElement(
                'div',
                {
                  key: e.id,
                  style: { clear: t % 3 === 0 ? 'both' : 'none' },
                  className:
                    'width_33_percentage width_100_percentage_responsive float_left'
                },
                i.a.createElement(
                  'div',
                  { className: 'section padding_15 box_sizing_border_box' },
                  i.a.createElement(
                    'div',
                    { className: 'section border_1_solid_grey' },
                    i.a.createElement(
                      'div',
                      { className: 'section position_relative' },
                      i.a.createElement('img', {
                        alt: '',
                        className: 'section',
                        src: '/img/courses/img23.png'
                      }),
                      i.a.createElement('div', {
                        className:
                          'bg_greydark_alpha position_absolute left_0 height_100_percentage width_100_percentage padding_30 box_sizing_border_box'
                      }),
                      i.a.createElement(
                        N,
                        {
                          className:
                            'position_absolute right_20 top_20 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9'
                        },
                        'NEWS'
                      )
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'section padding_30 box_sizing_border_box' },
                      i.a.createElement(
                        'h5',
                        { className: 'second_font color_grey' },
                        e.date
                      ),
                      i.a.createElement('div', {
                        className: 'section height_10'
                      }),
                      i.a.createElement(
                        'h2',
                        null,
                        i.a.createElement(
                          N,
                          {
                            className: 'first_font color_greydark',
                            to: '/news/'.concat(p()(e.title), '-').concat(e.id)
                          },
                          e.title
                        )
                      ),
                      i.a.createElement('div', {
                        className: 'section height_20'
                      }),
                      i.a.createElement('p', null, e.short_description)
                    )
                  )
                )
              );
            })
          );
        }),
        je = (function(e) {
          function t() {
            return (
              Object(w.a)(this, t),
              Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(k.a)(t, e),
            Object(y.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(K, {
                      fullWidth: !0,
                      noPadding: !0,
                      title: 'News'
                    }),
                    i.a.createElement(xe, { fullWidth: !0 })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        ke = re('News')(je),
        Oe = a(362),
        ze = a(39),
        Ce = a.n(ze),
        Te = _()(re({ path: 'news.title' }), C('news-item-info'))(function(e) {
          var t = e.news;
          return i.a.createElement(
            'div',
            { className: 'section' },
            i.a.createElement(
              'div',
              { className: 'container clearfix' },
              i.a.createElement(
                'div',
                { className: 'section padding_15 box_sizing_border_box' },
                i.a.createElement(
                  'div',
                  { className: 'section' },
                  i.a.createElement('p', null, 'Published: ', t.date),
                  i.a.createElement('div', { className: 'section height_10' }),
                  i.a.createElement('div', {
                    dangerouslySetInnerHTML: {
                      __html: '<p>'.concat(t.details || 'No content', '</p>')
                    }
                  })
                )
              )
            )
          );
        }),
        Pe =
          (a(343),
          re('Page Not Found')(function() {
            return i.a.createElement(
              'div',
              { className: 'no-match' },
              i.a.createElement(K, { fullWidth: !0, noPadding: !0 }),
              i.a.createElement('h1', null, '404 Page Not Found')
            );
          })),
        Se = (function(e) {
          function t() {
            var e, a;
            Object(w.a)(this, t);
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
              i[r] = arguments[r];
            return (
              ((a = Object(x.a)(
                this,
                (e = Object(j.a)(t)).call.apply(e, [this].concat(i))
              )).getNewsItemInfo = function(e) {
                return Ce()(a.props.db.news, function(t) {
                  return t.id === e;
                });
              }),
              (a.getId = function(e) {
                var t = e.split('-');
                return t[t.length - 1];
              }),
              a
            );
          }
          return (
            Object(k.a)(t, e),
            Object(y.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.match.params.newsId,
                    t = this.getNewsItemInfo(this.getId(e));
                  return (
                    (t.date = W()(t.date, 'MM/DD/YYYY').format('Do MMMM YYYY')),
                    t
                      ? i.a.createElement(
                          'div',
                          null,
                          i.a.createElement(K, {
                            fullWidth: !0,
                            noPadding: !0,
                            title: t.title
                          }),
                          i.a.createElement(Te, { fullWidth: !0, news: t })
                        )
                      : i.a.createElement(Pe, null)
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        Ie = _()(Oe.a, Object(l.withGoogleSheets)('news'))(Se),
        We =
          (a(345),
          _()(Object(l.withGoogleSheets)('people'), C('people-table'))(function(
            e
          ) {
            var t = e.db.people;
            return i.a.createElement(
              'div',
              { className: 'section ' },
              i.a.createElement(
                'div',
                { className: 'container clearfix' },
                i.a.createElement(
                  'div',
                  { className: 'width_100_percentage' },
                  t.map(function(e, t) {
                    return i.a.createElement(
                      'div',
                      {
                        className: 'grid grid_3',
                        key: e.id,
                        style: { clear: t % 4 === 0 ? 'both' : 'none' }
                      },
                      i.a.createElement(
                        'div',
                        { className: 'section' },
                        i.a.createElement(
                          'div',
                          { className: 'section ' },
                          i.a.createElement(
                            'div',
                            { className: 'section position_relative' },
                            i.a.createElement('img', {
                              alt: e.name,
                              className: 'section',
                              src:
                                A(e.photo_url) ||
                                '/img/avatar/avatar-chef-5.png'
                            }),
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'img-div bg_greydark_alpha_gradient position_absolute left_0 height_100_percentage width_100_percentage padding_20 box_sizing_border_box'
                              },
                              i.a.createElement('div', {
                                className: 'position_absolute bottom_20'
                              })
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'section box_sizing_border_box' },
                            i.a.createElement(
                              'h2',
                              { className: 'people-name' },
                              i.a.createElement(
                                'strong',
                                null,
                                i.a.createElement(
                                  N,
                                  {
                                    to: '/people/'
                                      .concat(p()(e.name), '-')
                                      .concat(e.id)
                                  },
                                  e.name
                                )
                              )
                            ),
                            i.a.createElement('div', {
                              className: 'section height_10'
                            }),
                            i.a.createElement(
                              'h6',
                              {
                                className:
                                  'text_transform_uppercase color_grey designation'
                              },
                              e.designation
                            )
                          )
                        )
                      )
                    );
                  })
                )
              )
            );
          })),
        Me = (function(e) {
          function t() {
            return (
              Object(w.a)(this, t),
              Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(k.a)(t, e),
            Object(y.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(K, {
                      fullWidth: !0,
                      noPadding: !0,
                      title: 'People'
                    }),
                    i.a.createElement(We, { fullWidth: !0 })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        De = re('People')(Me),
        Ge =
          (a(346),
          (function(e) {
            function t() {
              var e, a;
              Object(w.a)(this, t);
              for (
                var n = arguments.length, i = new Array(n), r = 0;
                r < n;
                r++
              )
                i[r] = arguments[r];
              return (
                ((a = Object(x.a)(
                  this,
                  (e = Object(j.a)(t)).call.apply(e, [this].concat(i))
                )).state = { selectedTab: 'projects' }),
                (a.selectTab = function(e) {
                  a.state.selectedTab !== e && a.setState({ selectedTab: e });
                }),
                a
              );
            }
            return (
              Object(k.a)(t, e),
              Object(y.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e,
                      t,
                      a,
                      n = this,
                      r = this.props,
                      c = r.db,
                      l = c.projects,
                      s = c.publications,
                      o = r.person,
                      d = S()(
                        s.filter(function(e) {
                          return e.authors
                            .toLowerCase()
                            .includes(o.name.toLowerCase().trim());
                        }),
                        ['year', 'conference'],
                        ['desc', 'asc']
                      ),
                      m = ((e = l),
                      (t = 'members'),
                      (a = o.id),
                      e.filter(function(e) {
                        return JSON.parse(e[t] || '[]').includes(parseInt(a));
                      })).reverse();
                    return i.a.createElement(
                      'div',
                      { className: 'section' },
                      i.a.createElement(
                        'div',
                        { className: 'container clearfix' },
                        i.a.createElement(
                          'div',
                          {
                            className:
                              'width_66_percentage width_100_percentage_responsive float_left'
                          },
                          i.a.createElement(
                            'div',
                            {
                              className:
                                'section padding_15 box_sizing_border_box'
                            },
                            i.a.createElement('div', {
                              className: 'section height_20'
                            }),
                            o.about &&
                              i.a.createElement(
                                'div',
                                {
                                  className:
                                    'width_100_percentage width_100_percentage_all_iphone float_left '
                                },
                                i.a.createElement(
                                  'p',
                                  {
                                    className:
                                      'padding_10 padding_0_all_iphone padding_left_0'
                                  },
                                  o.about
                                )
                              ),
                            i.a.createElement('div', {
                              className: 'section height_40'
                            }),
                            i.a.createElement(
                              'div',
                              { className: 'section' },
                              i.a.createElement(
                                'div',
                                {
                                  className:
                                    'tabs ui-tabs ui-widget ui-widget-content ui-corner-all'
                                },
                                i.a.createElement(
                                  'ul',
                                  {
                                    className:
                                      'list_style_none margin_0 padding_0 section border_bottom_2_solid_grey ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all',
                                    role: 'tablist'
                                  },
                                  i.a.createElement(
                                    'li',
                                    {
                                      className: 'display_inline_block ui-state-default ui-corner-top '.concat(
                                        'projects' === this.state.selectedTab
                                          ? 'ui-tabs-active ui-state-active'
                                          : ''
                                      ),
                                      role: 'tab',
                                      tabIndex: '-1',
                                      'aria-controls': 'tabs-1',
                                      'aria-labelledby': 'ui-id-1',
                                      'aria-selected': 'false',
                                      'aria-expanded': 'false'
                                    },
                                    i.a.createElement(
                                      'h4',
                                      null,
                                      i.a.createElement(
                                        'span',
                                        {
                                          className:
                                            'outline_0 padding_20 padding_right_10 display_inline_block first_font color_greydark ui-tabs-anchor',
                                          onClick: function() {
                                            return n.selectTab('projects');
                                          },
                                          tabIndex: '-1',
                                          id: 'ui-id-1',
                                          role: 'presentation'
                                        },
                                        'Projects'
                                      ),
                                      i.a.createElement(
                                        'span',
                                        {
                                          className:
                                            'display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13',
                                          onClick: function() {
                                            return n.selectTab('projects');
                                          }
                                        },
                                        m.length
                                      )
                                    )
                                  ),
                                  i.a.createElement(
                                    'li',
                                    {
                                      className: 'display_inline_block ui-state-default ui-corner-top '.concat(
                                        'publications' ===
                                          this.state.selectedTab
                                          ? 'ui-tabs-active ui-state-active'
                                          : ''
                                      ),
                                      role: 'tab',
                                      tabIndex: '0',
                                      'aria-controls': 'tabs-2',
                                      'aria-labelledby': 'ui-id-2',
                                      'aria-selected': 'true',
                                      'aria-expanded': 'true'
                                    },
                                    i.a.createElement(
                                      'h4',
                                      null,
                                      i.a.createElement(
                                        'span',
                                        {
                                          className:
                                            'outline_0 padding_20 padding_right_10 display_inline_block first_font color_greydark ui-tabs-anchor',
                                          onClick: function() {
                                            return n.selectTab('publications');
                                          },
                                          tabIndex: '-1',
                                          id: 'ui-id-2',
                                          role: 'presentation'
                                        },
                                        'Publications'
                                      ),
                                      i.a.createElement(
                                        'span',
                                        {
                                          className:
                                            'display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13',
                                          onClick: function() {
                                            return n.selectTab('publications');
                                          }
                                        },
                                        d.length
                                      )
                                    )
                                  )
                                ),
                                i.a.createElement('div', {
                                  className: 'section height_20'
                                }),
                                i.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'section ui-tabs-panel ui-widget-content ui-corner-bottom',
                                    id: 'tabs-projects',
                                    'aria-labelledby': 'tabs-projects',
                                    role: 'tabpanel',
                                    'aria-hidden':
                                      'projects' === !this.state.selectedTab,
                                    style: {
                                      display:
                                        'projects' === this.state.selectedTab
                                          ? 'block'
                                          : 'none'
                                    }
                                  },
                                  i.a.createElement(
                                    'div',
                                    { className: 'section' },
                                    i.a.createElement(
                                      'div',
                                      { className: 'section' },
                                      m.map(function(e, t) {
                                        return i.a.createElement(
                                          'div',
                                          {
                                            key: t,
                                            style: {
                                              clear:
                                                t % 3 === 0 ? 'both' : 'none'
                                            },
                                            className:
                                              'width_33_percentage width_100_percentage_all_iphone padding_20 float_left box_sizing_border_box'
                                          },
                                          i.a.createElement(
                                            'div',
                                            {
                                              className:
                                                'section box_sizing_border_box'
                                            },
                                            i.a.createElement(
                                              'div',
                                              {
                                                className:
                                                  'section position_relative'
                                              },
                                              i.a.createElement('img', {
                                                alt: '',
                                                className: 'section',
                                                src:
                                                  '/img/avatar/avatar-chef-2.png'
                                              }),
                                              i.a.createElement(
                                                'div',
                                                {
                                                  className:
                                                    'bg_greydark_alpha_gradient_3 position_absolute left_0 height_100_percentage width_100_percentage box_sizing_border_box'
                                                },
                                                i.a.createElement(
                                                  'div',
                                                  {
                                                    className:
                                                      'position_absolute bottom_20 width_100_percentage padding_botttom_0 padding_20 box_sizing_border_box text_align_center'
                                                  },
                                                  i.a.createElement(
                                                    'h5',
                                                    {
                                                      className: 'color_white'
                                                    },
                                                    i.a.createElement(
                                                      N,
                                                      {
                                                        to: '/projects/'
                                                          .concat(
                                                            p()(e.name),
                                                            '-'
                                                          )
                                                          .concat(e.id)
                                                      },
                                                      i.a.createElement(
                                                        'strong',
                                                        {
                                                          style: {
                                                            color: 'white'
                                                          }
                                                        },
                                                        e.name
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        );
                                      })
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'section ui-tabs-panel ui-widget-content ui-corner-bottom',
                                    id: 'tabs-publications',
                                    'aria-labelledby': 'tabs-publications',
                                    role: 'tabpanel',
                                    'aria-hidden':
                                      'publications' ===
                                      !this.state.selectedTab,
                                    style: {
                                      display:
                                        'publications' ===
                                        this.state.selectedTab
                                          ? 'block'
                                          : 'none'
                                    }
                                  },
                                  i.a.createElement(
                                    'div',
                                    { className: 'section' },
                                    d.map(function(e) {
                                      return i.a.createElement(
                                        'div',
                                        {
                                          key: e.id,
                                          className: 'person-publications-table'
                                        },
                                        i.a.createElement(
                                          N,
                                          { to: e.url || '#' },
                                          i.a.createElement(
                                            'strong',
                                            null,
                                            e.title.trim()
                                          )
                                        ),
                                        i.a.createElement(
                                          'span',
                                          { className: 'conference-text' },
                                          ' ',
                                          '(',
                                          e.conference,
                                          "'",
                                          e.year,
                                          ')'
                                        )
                                      );
                                    })
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement('div', {
                            className: 'section height_50'
                          })
                        ),
                        i.a.createElement(
                          'div',
                          {
                            className:
                              'width_33_percentage width_100_percentage_responsive float_left'
                          },
                          i.a.createElement(
                            'div',
                            {
                              className:
                                'section padding_15 box_sizing_border_box'
                            },
                            i.a.createElement('img', {
                              alt: o.name,
                              className: 'section',
                              src:
                                A(o.photo_url) ||
                                '/img/avatar/avatar-chef-5.png'
                            }),
                            i.a.createElement(
                              'table',
                              { className: 'person-info-table section' },
                              i.a.createElement(
                                'tbody',
                                null,
                                o.email &&
                                  i.a.createElement(
                                    'tr',
                                    { className: 'border_bottom_2_solid_grey' },
                                    i.a.createElement(
                                      'td',
                                      { className: 'padding_20 ' },
                                      i.a.createElement(ee.a, {
                                        name: 'envelope',
                                        size: '2x'
                                      })
                                    ),
                                    i.a.createElement(
                                      'td',
                                      { className: 'padding_20 ' },
                                      i.a.createElement(
                                        'span',
                                        {
                                          className:
                                            'person-info-table-text text_align_right'
                                        },
                                        i.a.createElement(
                                          N,
                                          { to: 'mailto:'.concat(o.email) },
                                          o.email
                                        )
                                      )
                                    )
                                  ),
                                o.website &&
                                  i.a.createElement(
                                    'tr',
                                    { className: 'border_bottom_2_solid_grey' },
                                    i.a.createElement(
                                      'td',
                                      { className: 'padding_20 ' },
                                      i.a.createElement(ee.a, {
                                        name: 'globe',
                                        size: '2x'
                                      })
                                    ),
                                    i.a.createElement(
                                      'td',
                                      { className: 'padding_20 ' },
                                      i.a.createElement(
                                        'span',
                                        {
                                          className:
                                            'person-info-table-text text_align_right'
                                        },
                                        i.a.createElement(
                                          N,
                                          { to: o.website },
                                          o.website
                                        )
                                      )
                                    )
                                  ),
                                o.twitter &&
                                  i.a.createElement(
                                    'tr',
                                    { className: 'border_bottom_2_solid_grey' },
                                    i.a.createElement(
                                      'td',
                                      { className: 'padding_20' },
                                      i.a.createElement(ee.a, {
                                        name: 'twitter',
                                        size: '2x'
                                      })
                                    ),
                                    i.a.createElement(
                                      'td',
                                      { className: 'padding_20' },
                                      i.a.createElement(
                                        'span',
                                        {
                                          className:
                                            'person-info-table-text text_align_right'
                                        },
                                        i.a.createElement(
                                          N,
                                          {
                                            to: 'https://twitter.com/'.concat(
                                              o.twitter
                                            )
                                          },
                                          '@'.concat(o.twitter)
                                        )
                                      )
                                    )
                                  ),
                                o.linkedin &&
                                  i.a.createElement(
                                    'tr',
                                    { className: 'border_bottom_2_solid_grey' },
                                    i.a.createElement(
                                      'td',
                                      { className: 'padding_20 ' },
                                      i.a.createElement(ee.a, {
                                        name: 'linkedin',
                                        size: '2x'
                                      })
                                    ),
                                    i.a.createElement(
                                      'td',
                                      { className: 'padding_20 ' },
                                      i.a.createElement(
                                        'span',
                                        {
                                          className:
                                            'person-info-table-text text_align_right'
                                        },
                                        i.a.createElement(
                                          N,
                                          { to: o.linkedin },
                                          o.linkedin
                                        )
                                      )
                                    )
                                  )
                              )
                            )
                          ),
                          i.a.createElement('div', {
                            className: 'section height_50'
                          })
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(n.Component)),
        Le = _()(
          re({ path: 'person.name' }),
          C('person-info'),
          Object(l.withGoogleSheets)('projects'),
          Object(l.withGoogleSheets)('publications')
        )(Ge),
        Ae = (function(e) {
          function t() {
            var e, a;
            Object(w.a)(this, t);
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
              i[r] = arguments[r];
            return (
              ((a = Object(x.a)(
                this,
                (e = Object(j.a)(t)).call.apply(e, [this].concat(i))
              )).getPersonInfo = function(e) {
                return Ce()(a.props.db.people, function(t) {
                  return t.id === e;
                });
              }),
              (a.getId = function(e) {
                var t = e.split('-');
                return t[t.length - 1];
              }),
              a
            );
          }
          return (
            Object(k.a)(t, e),
            Object(y.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.match.params.personId,
                    t = this.getPersonInfo(this.getId(e));
                  return t
                    ? i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(K, {
                          fullWidth: !0,
                          noPadding: !0,
                          title: t.name
                        }),
                        i.a.createElement(Le, { fullWidth: !0, person: t })
                      )
                    : i.a.createElement(Pe, null);
                }
              }
            ]),
            t
          );
        })(n.Component),
        Ye = _()(Oe.a, Object(l.withGoogleSheets)('people'))(Ae),
        Fe =
          (a(347),
          (function(e) {
            function t() {
              var e, a;
              Object(w.a)(this, t);
              for (
                var n = arguments.length, i = new Array(n), r = 0;
                r < n;
                r++
              )
                i[r] = arguments[r];
              return (
                ((a = Object(x.a)(
                  this,
                  (e = Object(j.a)(t)).call.apply(e, [this].concat(i))
                )).state = { selectedTab: 'publications' }),
                (a.selectTab = function(e) {
                  a.state.selectedTab !== e && a.setState({ selectedTab: e });
                }),
                a
              );
            }
            return (
              Object(k.a)(t, e),
              Object(y.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props,
                      a = t.db,
                      n = a.people,
                      r = a.publications,
                      c = t.project,
                      l = r.filter(function(e) {
                        return e.project === c.name;
                      }),
                      s = D(n, c.members);
                    return i.a.createElement(
                      'div',
                      { className: 'section' },
                      i.a.createElement(
                        'div',
                        { className: 'container clearfix' },
                        i.a.createElement(
                          'div',
                          {
                            className:
                              'section padding_15 box_sizing_border_box'
                          },
                          i.a.createElement(
                            'div',
                            {
                              className:
                                'width_50_percentage width_100_percentage_responsive float_left padding_top_10'
                            },
                            i.a.createElement(
                              'div',
                              { className: 'section position_relative' },
                              i.a.createElement('img', {
                                alt: '',
                                className: 'section',
                                src: A(c.url) || '/img/courses/img2.png'
                              })
                            )
                          ),
                          i.a.createElement(
                            'div',
                            {
                              className:
                                'width_50_percentage width_100_percentage_responsive float_left padding_left_20'
                            },
                            i.a.createElement('p', null, c.description)
                          ),
                          i.a.createElement('div', {
                            className: 'section height_40'
                          }),
                          i.a.createElement(
                            'div',
                            { className: 'section' },
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'tabs ui-tabs ui-widget ui-widget-content ui-corner-all'
                              },
                              i.a.createElement(
                                'ul',
                                {
                                  className:
                                    'list_style_none margin_0 padding_0 section border_bottom_2_solid_grey ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all',
                                  role: 'tablist'
                                },
                                i.a.createElement(
                                  'li',
                                  {
                                    className: 'display_inline_block ui-state-default ui-corner-top '.concat(
                                      'publications' === this.state.selectedTab
                                        ? 'ui-tabs-active ui-state-active'
                                        : ''
                                    ),
                                    role: 'tab',
                                    tabIndex: '0',
                                    'aria-controls': 'tabs-2',
                                    'aria-labelledby': 'ui-id-2',
                                    'aria-selected': 'true',
                                    'aria-expanded': 'true'
                                  },
                                  i.a.createElement(
                                    'h4',
                                    null,
                                    i.a.createElement(
                                      'span',
                                      {
                                        className:
                                          'outline_0 padding_20 padding_right_10 display_inline_block first_font color_greydark ui-tabs-anchor',
                                        onClick: function() {
                                          return e.selectTab('publications');
                                        },
                                        tabIndex: '-1',
                                        id: 'ui-id-2',
                                        role: 'presentation'
                                      },
                                      'Publications'
                                    ),
                                    i.a.createElement(
                                      'span',
                                      {
                                        className:
                                          'display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13',
                                        onClick: function() {
                                          return e.selectTab('publications');
                                        }
                                      },
                                      l.length
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  'li',
                                  {
                                    className: 'display_inline_block ui-state-default ui-corner-top '.concat(
                                      'members' === this.state.selectedTab
                                        ? 'ui-tabs-active ui-state-active'
                                        : ''
                                    ),
                                    role: 'tab',
                                    tabIndex: '-1',
                                    'aria-controls': 'tabs-1',
                                    'aria-labelledby': 'ui-id-1',
                                    'aria-selected': 'false',
                                    'aria-expanded': 'false'
                                  },
                                  i.a.createElement(
                                    'h4',
                                    null,
                                    i.a.createElement(
                                      'span',
                                      {
                                        className:
                                          'outline_0 padding_20 padding_right_10 display_inline_block first_font color_greydark ui-tabs-anchor',
                                        onClick: function() {
                                          return e.selectTab('members');
                                        },
                                        tabIndex: '-1',
                                        id: 'ui-id-1',
                                        role: 'presentation'
                                      },
                                      'Members'
                                    ),
                                    i.a.createElement(
                                      'span',
                                      {
                                        className:
                                          'display_inline_block bg_grey margin_right_20 border_1_solid_grey first_font padding_8 border_radius_3 font_size_13',
                                        onClick: function() {
                                          return e.selectTab('members');
                                        }
                                      },
                                      s.length
                                    )
                                  )
                                )
                              ),
                              i.a.createElement('div', {
                                className: 'section height_20'
                              }),
                              i.a.createElement(
                                'div',
                                {
                                  className:
                                    'section ui-tabs-panel ui-widget-content ui-corner-bottom',
                                  id: 'tabs-members',
                                  'aria-labelledby': 'tabs-members',
                                  role: 'tabpanel',
                                  'aria-hidden':
                                    'members' === !this.state.selectedTab,
                                  style: {
                                    display:
                                      'members' === this.state.selectedTab
                                        ? 'block'
                                        : 'none'
                                  }
                                },
                                i.a.createElement(
                                  'div',
                                  { className: 'section' },
                                  i.a.createElement(
                                    'div',
                                    { className: 'section' },
                                    s.map(function(e, t) {
                                      return i.a.createElement(
                                        'div',
                                        {
                                          key: t,
                                          style: {
                                            clear: t % 4 === 0 ? 'both' : 'none'
                                          },
                                          className:
                                            'width_25_percentage width_50_percentage_all_iphone padding_20 float_left box_sizing_border_box'
                                        },
                                        i.a.createElement(
                                          'div',
                                          {
                                            className:
                                              'section box_sizing_border_box'
                                          },
                                          i.a.createElement(
                                            'div',
                                            {
                                              className:
                                                'section position_relative'
                                            },
                                            i.a.createElement('img', {
                                              alt: '',
                                              className: 'section',
                                              src:
                                                A(
                                                  (
                                                    n.find(function(t) {
                                                      return t.id === e.key;
                                                    }) || {}
                                                  ).photo_url
                                                ) ||
                                                '/img/avatar/avatar-chef-2.png'
                                            }),
                                            i.a.createElement(
                                              'div',
                                              {
                                                className:
                                                  'bg_greydark_alpha_gradient_3 position_absolute left_0 height_100_percentage width_100_percentage box_sizing_border_box'
                                              },
                                              i.a.createElement(
                                                'div',
                                                {
                                                  className:
                                                    'position_absolute bottom_20 width_100_percentage padding_botttom_0 padding_20 box_sizing_border_box text_align_center project-info-author'
                                                },
                                                e
                                              )
                                            )
                                          )
                                        )
                                      );
                                    })
                                  )
                                )
                              ),
                              i.a.createElement(
                                'div',
                                {
                                  className:
                                    'section ui-tabs-panel ui-widget-content ui-corner-bottom',
                                  id: 'tabs-publications',
                                  'aria-labelledby': 'tabs-publications',
                                  role: 'tabpanel',
                                  'aria-hidden':
                                    'publications' === !this.state.selectedTab,
                                  style: {
                                    display:
                                      'publications' === this.state.selectedTab
                                        ? 'block'
                                        : 'none'
                                  }
                                },
                                i.a.createElement(
                                  'div',
                                  { className: 'section' },
                                  l.map(function(e) {
                                    return i.a.createElement(
                                      'div',
                                      {
                                        key: e.id,
                                        className: 'person-publications-table'
                                      },
                                      i.a.createElement(
                                        N,
                                        { to: e.url || '#' },
                                        i.a.createElement(
                                          'strong',
                                          null,
                                          e.title.trim()
                                        )
                                      ),
                                      i.a.createElement(
                                        'span',
                                        { className: 'conference-text' },
                                        ' ',
                                        '(',
                                        e.conference,
                                        "'",
                                        e.year,
                                        ')'
                                      )
                                    );
                                  })
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(n.Component)),
        Qe = _()(
          Object(l.withGoogleSheets)('people'),
          Object(l.withGoogleSheets)('publications'),
          re({ path: 'project.name' }),
          C('project-info')
        )(Fe),
        qe = (function(e) {
          function t() {
            var e, a;
            Object(w.a)(this, t);
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
              i[r] = arguments[r];
            return (
              ((a = Object(x.a)(
                this,
                (e = Object(j.a)(t)).call.apply(e, [this].concat(i))
              )).getProjectInfo = function(e) {
                return Ce()(a.props.db.projects, function(t) {
                  return t.id === e;
                });
              }),
              (a.getId = function(e) {
                var t = e.split('-');
                return t[t.length - 1];
              }),
              a
            );
          }
          return (
            Object(k.a)(t, e),
            Object(y.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.match.params.projectId,
                    t = this.getProjectInfo(this.getId(e));
                  return t
                    ? i.a.createElement(
                        'div',
                        null,
                        i.a.createElement(K, {
                          fullWidth: !0,
                          noPadding: !0,
                          title: t.name
                        }),
                        i.a.createElement(Qe, { fullWidth: !0, project: t })
                      )
                    : i.a.createElement(Pe, null);
                }
              }
            ]),
            t
          );
        })(n.Component),
        Re = _()(Oe.a, Object(l.withGoogleSheets)('projects'))(qe),
        Be = (function(e) {
          function t(e) {
            var a;
            return (
              Object(w.a)(this, t),
              ((a = Object(x.a)(
                this,
                Object(j.a)(t).call(this, e)
              )).projects = a.props.db.projects
                .map(function(e) {
                  return Object(
                    T.a
                  )({}, e, { publications: G(a.props.db.publications, e.publications || '[]'), members: D(a.props.db.people, e.members || '[]', !1) });
                })
                .filter(function(e) {
                  return e.id && e.name;
                })),
              (a.searchFieldOnChange = function(e) {
                a.state.searchQuery !== e &&
                  a.setState({
                    projects: a.projects.filter(function(t) {
                      return (
                        t.name.toLowerCase().includes(e) ||
                        t.publications.some(function(t) {
                          return t.toLowerCase().includes(e);
                        }) ||
                        t.members.some(function(t) {
                          return t.toLowerCase().includes(e);
                        })
                      );
                    }),
                    searchQuery: e
                  });
              }),
              (a.state = { projects: a.projects, searchQuery: '' }),
              a
            );
          }
          return (
            Object(k.a)(t, e),
            Object(y.a)(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state.projects;
                  return i.a.createElement(
                    'div',
                    { className: 'section' },
                    i.a.createElement(
                      'div',
                      { className: 'container clearfix' },
                      i.a.createElement(
                        'div',
                        { className: 'width_100_percentage' },
                        i.a.createElement(
                          'div',
                          {
                            className:
                              'section padding_15 box_sizing_border_box'
                          },
                          i.a.createElement(
                            'div',
                            {
                              className:
                                'section box_sizing_border_box float_left position_relative padding_right_20'
                            },
                            i.a.createElement('img', {
                              alt: '',
                              className:
                                'position_absolute top_5 left_0 margin_top_5',
                              width: '15',
                              src: '/img/icons/icon-search-grey.svg'
                            }),
                            i.a.createElement('input', {
                              className:
                                'padding_left_25 border_width_2 background_none border_top_width_0 border_right_width_0 border_left_width_0',
                              type: 'text',
                              placeholder: 'Search',
                              onChange: function(t) {
                                return e.searchFieldOnChange(t.target.value);
                              }
                            })
                          )
                        ),
                        i.a.createElement(
                          'div',
                          { className: 'width_100_percentage' },
                          t.reverse().map(function(e, t) {
                            return i.a.createElement(
                              'div',
                              {
                                key: e.id,
                                style: { clear: t % 3 === 0 ? 'both' : 'none' },
                                className:
                                  'width_33_percentage width_100_percentage_responsive float_left'
                              },
                              i.a.createElement(
                                'div',
                                {
                                  className:
                                    'section padding_15 box_sizing_border_box'
                                },
                                i.a.createElement(
                                  'div',
                                  { className: 'section border_1_solid_grey' },
                                  i.a.createElement(
                                    'div',
                                    { className: 'section position_relative' },
                                    i.a.createElement('img', {
                                      alt: '',
                                      className: 'section',
                                      src: A(e.url) || '/img/courses/img2.png'
                                    })
                                  ),
                                  i.a.createElement(
                                    'div',
                                    {
                                      className:
                                        'section padding_20 box_sizing_border_box text_align_center'
                                    },
                                    i.a.createElement(
                                      'h3',
                                      null,
                                      i.a.createElement(
                                        N,
                                        {
                                          className:
                                            'color_greydark first_font',
                                          to: '/projects/'
                                            .concat(p()(e.name), '-')
                                            .concat(e.id)
                                        },
                                        e.name.trim()
                                      )
                                    )
                                  )
                                )
                              )
                            );
                          })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        He = _()(
          Object(l.withGoogleSheets)('projects'),
          Object(l.withGoogleSheets)('people'),
          Object(l.withGoogleSheets)('publications'),
          C('projects-table')
        )(Be),
        Ke = (function(e) {
          function t() {
            return (
              Object(w.a)(this, t),
              Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(k.a)(t, e),
            Object(y.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(K, {
                      fullWidth: !0,
                      noPadding: !0,
                      title: 'Projects'
                    }),
                    i.a.createElement(He, { fullWidth: !0 })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        Ue = re('Projects')(Ke),
        Je =
          (a(348),
          (function(e) {
            function t(e) {
              var a;
              return (
                Object(w.a)(this, t),
                ((a = Object(x.a)(
                  this,
                  Object(j.a)(t).call(this, e)
                )).publications = S()(
                  a.props.db.publications,
                  ['year', 'conference'],
                  ['desc', 'asc']
                )),
                (a.searchFieldOnChange = function(e) {
                  a.state.searchQuery !== e &&
                    a.setState({
                      publications: a.publications.filter(function(t) {
                        return (
                          t.title.toLowerCase().includes(e) ||
                          t.conference.toLowerCase().includes(e) ||
                          t.authors.toLowerCase().includes(e)
                        );
                      }),
                      searchQuery: e
                    });
                }),
                (a.state = { publications: a.publications, searchQuery: '' }),
                a
              );
            }
            return (
              Object(k.a)(t, e),
              Object(y.a)(t, [
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.state.publications;
                    return i.a.createElement(
                      'div',
                      { className: 'section' },
                      i.a.createElement(
                        'div',
                        { className: 'container clearfix' },
                        i.a.createElement(
                          'div',
                          { className: 'width_100_percentage' },
                          i.a.createElement(
                            'div',
                            {
                              className:
                                'section padding_15 box_sizing_border_box'
                            },
                            i.a.createElement(
                              'div',
                              {
                                className:
                                  'section box_sizing_border_box float_left position_relative padding_right_20'
                              },
                              i.a.createElement('img', {
                                alt: '',
                                className:
                                  'position_absolute top_5 left_0 margin_top_5',
                                width: '15',
                                src: '/img/icons/icon-search-grey.svg'
                              }),
                              i.a.createElement('input', {
                                className:
                                  'padding_left_25 border_width_2 background_none border_top_width_0 border_right_width_0 border_left_width_0',
                                type: 'text',
                                placeholder: 'Search',
                                onChange: function(t) {
                                  return e.searchFieldOnChange(t.target.value);
                                }
                              })
                            )
                          ),
                          i.a.createElement(
                            'div',
                            { className: 'width_100_percentage' },
                            t.map(function(e) {
                              return i.a.createElement(
                                'div',
                                {
                                  className: 'width_100_percentage_responsive',
                                  key: e.id
                                },
                                i.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'section padding_15 box_sizing_border_box'
                                  },
                                  i.a.createElement(
                                    'div',
                                    { className: 'section' },
                                    i.a.createElement(
                                      'div',
                                      {
                                        className:
                                          'section box_sizing_border_box'
                                      },
                                      i.a.createElement(
                                        'h3',
                                        { style: { marginBottom: '10px' } },
                                        i.a.createElement(
                                          N,
                                          {
                                            className:
                                              'color_greydark first_font',
                                            to: e.url || '#'
                                          },
                                          '('
                                            .concat(e.conference, ' ')
                                            .concat(e.year, ') ')
                                            .concat(e.title),
                                          e.award &&
                                            '' !== e.award.trim() &&
                                            i.a.createElement(
                                              'span',
                                              {
                                                className:
                                                  'paper-award margin_left_10 display_inline_block color_white bg_green first_font padding_8 border_radius_3 font_size_13 z_index_9'
                                              },
                                              e.award
                                            )
                                        )
                                      ),
                                      i.a.createElement(
                                        'div',
                                        { className: 'publication-authors' },
                                        e.authors
                                      )
                                    )
                                  )
                                )
                              );
                            })
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(n.Component)),
        Ve = _()(
          Object(l.withGoogleSheets)('publications'),
          C('publications-table')
        )(Je),
        $e = (function(e) {
          function t() {
            return (
              Object(w.a)(this, t),
              Object(x.a)(this, Object(j.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(k.a)(t, e),
            Object(y.a)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  window.scrollTo(0, 0);
                }
              },
              {
                key: 'render',
                value: function() {
                  return i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(K, {
                      fullWidth: !0,
                      noPadding: !0,
                      title: 'Publications'
                    }),
                    i.a.createElement(Ve, { fullWidth: !0 })
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        Xe = re('Publications')($e),
        Ze = function() {
          return i.a.createElement(
            o.a,
            null,
            i.a.createElement(d.a, { exact: !0, path: '/', component: ye }),
            i.a.createElement(d.a, {
              exact: !0,
              path: '/about',
              component: oe
            }),
            i.a.createElement(d.a, {
              exact: !0,
              path: '/calendar',
              component: pe
            }),
            i.a.createElement(d.a, { exact: !0, path: '/faqs', component: ve }),
            i.a.createElement(d.a, { exact: !0, path: '/home', component: ye }),
            i.a.createElement(d.a, { exact: !0, path: '/news', component: ke }),
            i.a.createElement(d.a, {
              exact: !0,
              path: '/news/:newsId',
              component: Ie
            }),
            i.a.createElement(d.a, {
              exact: !0,
              path: '/people',
              component: De
            }),
            i.a.createElement(d.a, {
              exact: !0,
              path: '/people/:personId',
              component: Ye
            }),
            i.a.createElement(d.a, {
              exact: !0,
              path: '/projects',
              component: Ue
            }),
            i.a.createElement(d.a, {
              exact: !0,
              path: '/projects/:projectId',
              component: Re
            }),
            i.a.createElement(d.a, {
              exact: !0,
              path: '/publications',
              component: Xe
            }),
            i.a.createElement(d.a, { component: Pe })
          );
        },
        et =
          (a(349),
          function() {
            return i.a.createElement(
              s.a,
              null,
              i.a.createElement(
                c.a,
                null,
                i.a.createElement(
                  'div',
                  { className: 'site' },
                  i.a.createElement(
                    'div',
                    {
                      className: 'site_fullwidth site_fullwidth_boxed clearfix'
                    },
                    i.a.createElement($, null),
                    i.a.createElement(Ze, null),
                    i.a.createElement(X, null)
                  )
                )
              )
            );
          }),
        tt = Boolean(
          'localhost' === window.location.hostname ||
            '[::1]' === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function at(e) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var t = e.installing;
              t.onstatechange = function() {
                'installed' === t.state &&
                  (navigator.serviceWorker.controller
                    ? console.log('New content is available; please refresh.')
                    : console.log('Content is cached for offline use.'));
              };
            };
          })
          .catch(function(e) {
            console.error('Error during service worker registration:', e);
          });
      }
      Object(r.render)(
        i.a.createElement(et, null),
        document.getElementById('root')
      ),
        (function() {
          if ('serviceWorker' in navigator) {
            if (
              new URL('/wildlab-website', window.location).origin !==
              window.location.origin
            )
              return;
            window.addEventListener('load', function() {
              var e = ''.concat('/wildlab-website', '/service-worker.js');
              tt
                ? ((function(e) {
                    fetch(e)
                      .then(function(t) {
                        404 === t.status ||
                        -1 ===
                          t.headers.get('content-type').indexOf('javascript')
                          ? navigator.serviceWorker.ready.then(function(e) {
                              e.unregister().then(function() {
                                window.location.reload();
                              });
                            })
                          : at(e);
                      })
                      .catch(function() {
                        console.log(
                          'No internet connection found. App is running in offline mode.'
                        );
                      });
                  })(e),
                  navigator.serviceWorker.ready.then(function() {
                    console.log(
                      'This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ'
                    );
                  }))
                : at(e);
            });
          }
        })();
    }
  },
  [[148, 1, 2]]
]);
//# sourceMappingURL=main.5a389e8f.chunk.js.map
