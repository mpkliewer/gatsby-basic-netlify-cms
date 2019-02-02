// import React from "react"
// import { graphql } from "gatsby"

// export default function Template({
//   data, // this prop will be injected by the GraphQL query below.
// }) {
//   const { blogsJson } = data // data.blogsJson holds our post data
//   const { frontmatter, html } = blogsJson
//   return (
//     <div className="blog-post-container">
//       <div className="blog-post">
//         <h1>{frontmatter.title}</h1>
//         <h2>{frontmatter.date}</h2>
//         <div
//           className="blog-post-content"
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//       </div>
//     </div>
//   )
// }

// export const pageQuery = graphql`
//   query($path: String!) {
//     blogsJson(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `



// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"

// export default ({ data }) => {
// 	console.log('data:', data);
//   const post = data.markdownRemark
//   return (
//     <Layout>
//       <div>
//         <h1>{post.frontmatter.title}</h1>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `