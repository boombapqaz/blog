import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/js");

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "blog", // iterate over `collections.posts`
      // limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "t-amadan industries",
      subtitle:
        "a twenty something from aus. i made this website to have *something* remotely representative of me on the internet. i make music, write pretentiously and generally struggle to have a cohesive sense of self while being crippled with nostalgia (often for things i never even experienced). i'm also into fighting games, rpgs, anime, photography, audio technology, fashion and sociology, especially in the digital form. ",
      base: "https://tamadanick.neocities.org/",
      author: {
        name: "nick",
        // email: "", // Optional
      },
    },
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
}
