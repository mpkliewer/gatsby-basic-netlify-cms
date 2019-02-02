// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
// 	const { createPage } = actions
// 	return new Promise((resolve, reject) => {
// 		graphql(`
//       {
//         allBlogsJson {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
// 			console.log('result:', result);
// 			if (result.errors) {
// 				reject(result.errors)
// 			}

// 			result.data.allBlogsJson.edges.forEach(({ node }) => {
// 				createPage({
// 					path: node.fields.slug,
// 					component: path.resolve(`./src/templates/blog-post.js`),
// 					context: {
// 						slug: node.fields.slug,
// 					},
// 				})
// 			})
// 			resolve()
// 		})
// 	})
// }

// // allMarkdownRemark