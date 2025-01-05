
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: 'f2d9a38e9af05806ec3f68eadf0177c3fe61d316f3c1fd6819ead0d71c8756ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '84d5e0f42d38de1b5c248f1ce7e2365fd067154cda2e4ddcea1e4ecb5124a92b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3RNXJRVR.css': {size: 10735, hash: 'PcQfrS5NufE', text: () => import('./assets-chunks/styles-3RNXJRVR_css.mjs').then(m => m.default)}
  },
};
