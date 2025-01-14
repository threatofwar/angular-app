
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: '54fc1c5e26e40d46b854d4349f0bec9ec5bb2d1f61c9089ae7cabdc2854102e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '12a0671ccb8388d2e1f7f693a6a2336cd5e2c18693f5a1738dd4709b6f33887d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WHILHALI.css': {size: 22589, hash: 'RMBgoLdeeH0', text: () => import('./assets-chunks/styles-WHILHALI_css.mjs').then(m => m.default)}
  },
};
