// Reconfigure MathJax to use SVG output before first render
window.MathJax = {
  ...window.MathJax,
  loader: { load: ['output/svg'] },
  startup: {
    output: 'svg',
    ready() {
      MathJax.startup.defaultReady();
    }
  },
  svg: {
    fontCache: 'global',
    displayAlign: 'center'
  }
};