module.exports = function (eleventyconfig) {
  eleventyconfig.addpassthroughcopy("src/style");
  eleventyconfig.addpassthroughcopy("src/md");
  eleventyconfig.addpassthroughcopy("src/style");
  return {
    dist: {
      input: "src",
      output: "dist",
    },
  };
};
