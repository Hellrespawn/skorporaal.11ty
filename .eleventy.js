module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/static');
  eleventyConfig.setUseGitIgnore(true);

  eleventyConfig.setEjsOptions({ context: eleventyConfig.javascriptFunctions });

  return {
    dir: {
      input: './src',
      output: './_site',
      includes: '_includes',
      layouts: '_layouts',
    },
    templateFormats: ['html', 'md', 'ejs'],
    passthroughFileCopy: true,
    markdownTemplateEngine: 'ejs',
  };
};
