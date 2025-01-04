
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: '3daa3fd4d0d213e46211b7fa7a7ab31f940dbe3e8d4033de5a086bf964514763', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: 'b33935801299182f5d7b61897bfefc53861da9cafd88e46db154bf15b67b3420', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3RNXJRVR.css': {size: 10735, hash: 'PcQfrS5NufE', text: () => import('./assets-chunks/styles-3RNXJRVR_css.mjs').then(m => m.default)}
  },
};
