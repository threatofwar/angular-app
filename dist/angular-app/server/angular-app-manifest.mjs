
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: 'e6578ee57eea92c4163199423524d0d86d6929a28339bd7e3a29a639bebc04c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '363445834f07ddfa22e049d1df44363c945adbd91686bf1d4d0e459bca8a31ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3RNXJRVR.css': {size: 10735, hash: 'PcQfrS5NufE', text: () => import('./assets-chunks/styles-3RNXJRVR_css.mjs').then(m => m.default)}
  },
};
