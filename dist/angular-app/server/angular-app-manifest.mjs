
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: 'b6ffc73aa88855b89e2dfb4b822f76f270d0b699ba9824be1b2d1419da21843e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: 'e9a38eae7b057559d02a7ce52630935f91ca827f3b287d6f29097358472f7d98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WHILHALI.css': {size: 22589, hash: 'RMBgoLdeeH0', text: () => import('./assets-chunks/styles-WHILHALI_css.mjs').then(m => m.default)}
  },
};
