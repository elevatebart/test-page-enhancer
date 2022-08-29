const { defineConfig } = require('vue-styleguidist')

module.exports = defineConfig({
	title: 'Default Style Guide',
	components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	// webpackConfig: {
	//   // custom config goes here
	// },
	exampleMode: 'expand',
  enhancePreviewApp: 'styleguide/enhancePreviewApp.js',
})
