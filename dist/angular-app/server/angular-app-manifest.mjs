
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: '11ccd6b5279c3d168d539f6772f152999fd30b0e553f52d91c50367c99727ad8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '4995dc9f963e0526acbbd9053e514831d6e11b2011aa8689c91769e910986eef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IUMMJFUG.css': {size: 8799, hash: 'f23+PG+IqiE', text: () => import('./assets-chunks/styles-IUMMJFUG_css.mjs').then(m => m.default)}
  },
};
