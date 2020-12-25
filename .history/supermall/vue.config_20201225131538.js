// const path = require("path");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

// module.exports = {
//   lintOnSave: true,
//   chainWebpack: config => {
//     config.resolve.alias
//       .set("@", resolve("src"))
//       // 修改路径的别名
//       .set("assets", resolve("@/assets"))
//       // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
//       .set("common", resolve("@/common"))
//       .set("components", resolve("@/components"))
//       .set("network", resolve("@/network"))
//       .set("views", resolve("@/views"));
//   }
// };

// B站上的方式，有问题
// module.export = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         assets: "@/assets",
//         common: "@/common",
//         components: "@/components",
//         network: "@/network",
//         views: "@/views"
//       }
//     }
//   }
// };
