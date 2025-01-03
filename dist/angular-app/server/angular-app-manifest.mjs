
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: '160c7f833e8f0c78fc664ba356877a288df05919cbdc82d8727f681dd0bbd6ee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: 'eeeb193dff24e52d66f36d563d13be18d93252330416b08181fb13c07a1e080b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IUMMJFUG.css': {size: 8799, hash: 'f23+PG+IqiE', text: () => import('./assets-chunks/styles-IUMMJFUG_css.mjs').then(m => m.default)}
  },
};
