
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: 'cee784a50ed2c621c48fbcba747e10b4d4ced67f8bdc886c1c28646f6abb191a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '0b98dd42efb15cd8f267c97e4fe4e590211544b3eafbd29829a334f7812df6f8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YSXWXM24.css': {size: 19323, hash: 'fkwr1O+ni9s', text: () => import('./assets-chunks/styles-YSXWXM24_css.mjs').then(m => m.default)}
  },
};
