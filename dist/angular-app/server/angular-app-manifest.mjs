
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: 'bdbf2348f25c5236edb0a4aedae963f10f62ec61beef1bc644ac6efc62447b5e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '3badccbc3624f6510e76cd1bfdc7dcaf6f76378fd45b614ff8642c3c3c2be428', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-TPYXIICD.css': {size: 19154, hash: 'VmXnBphatCE', text: () => import('./assets-chunks/styles-TPYXIICD_css.mjs').then(m => m.default)}
  },
};
