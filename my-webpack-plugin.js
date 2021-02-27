class MyWebpackPlugin {
  apply(compiler) {
    // compiler.hooks.done.tap("Hello World Plugin", (
    //   stats /* stats is passed as an argument when done hook is tapped.  */
    // ) => {
    //   console.log("Hello World!");
    // });

    compiler.hooks.emit.tapAsync(
      "Hello World Plugin",
      (compilation, callback) => {
        const source = compilation.assets["main.js"].source();
        compilation.assets["main.js"].source = () => {
          const banner = [
            "/*",
            " * 이것은 BannerPlugin이 처리한 결과입니다.",
            " * Build Date: 2019-10-10",
            " */",
            "",
          ].join("\n");
          return banner + "\n" + source;
        };
        callback();
      }
    );
  }
}
module.exports = MyWebpackPlugin;
