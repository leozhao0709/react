const withSass = require('@zeit/next-sass');

module.exports = withSass({
  distDir: 'dist',
  cssModules: true
});
