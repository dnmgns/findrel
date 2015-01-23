var dest = "./app/build";
var src = './app/src';

module.exports = {
  sass: {
    src: src + "/sass/*.{sass,scss}",
    dest: dest + "/css",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/images' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/site.js',
      dest: dest,
      outputName: 'site.js'
    }]
  }
}
