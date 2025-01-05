
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: 'a0521c25902762f747e1350acec1df010f46ec2d279e7e596748d3dbf365aff2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '9dbbd5cea7a7254d55d40407cd5a59d65e02141bc1c9931ea8d5d9869f44f87b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AEROQCFJ.css': {size: 10763, hash: '1IAftGy37Mk', text: () => import('./assets-chunks/styles-AEROQCFJ_css.mjs').then(m => m.default)}
  },
};
