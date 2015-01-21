var dest = "./app/build";
var src = './app/src';

module.exports = {
  sass: {
    src: src + "/sass/*.{sass,scss}",
    dest: dest,
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/images' // Used by the image-url helper
    }
  }
}
