module.exports = function (eleventyconfig) {
  eleventyconfig.addpassthroughcopy("src/style");
  eleventyconfig.addpassthroughcopy("src/md");
  eleventyconfig.addpassthroughcopy("src/media");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
