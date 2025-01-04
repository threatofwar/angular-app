
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: '5d31bdc8f4eda9ca8e965185ed63e0d61b39c79d37413b079f1f14ee3cfe0f9f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '292d3c799166c98ba46acdfe317391365fcef253dcd2b357fd9021fc49a1f6ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3RNXJRVR.css': {size: 10735, hash: 'PcQfrS5NufE', text: () => import('./assets-chunks/styles-3RNXJRVR_css.mjs').then(m => m.default)}
  },
};
