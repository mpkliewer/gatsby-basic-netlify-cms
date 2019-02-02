module.exports = {
	plugins: [
		// This plugin adds Netlify CMS
		`gatsby-plugin-netlify-cms`,
		// This plugin transforms JSON file nodes.
		`gatsby-transformer-json`,
		/*
		* A site can have as many instances of
		* gatsby-source-filesystem as you need.  Each plugin
		* instance is configured with a root path where it then
		* recursively reads in files and adds them to the data
		* tree.
		*/
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `./src/data/`,
			},
		},
	],

}