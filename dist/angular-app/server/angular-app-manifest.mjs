
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: '922b978f5c7df3f6603b22e7f1c90426733d77201f22724aee238da684118960', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '8ee3a146288a74cab24f0fc6ee27f8da36fc39d2b1b55698dac22cc506297e64', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YSXWXM24.css': {size: 19323, hash: 'fkwr1O+ni9s', text: () => import('./assets-chunks/styles-YSXWXM24_css.mjs').then(m => m.default)}
  },
};
