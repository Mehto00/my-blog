import React from 'react'
import {Link, graphql} from 'gatsby'

import Layout from '../components/layout'
import {rhythm} from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteSubTitle = data.site.siteMetadata.subtitle
    const posts = data.allMarkdownRemark.edges


    return (
      <Layout location={this.props.location} title={siteTitle} subtitle={siteSubTitle}>
        {posts.map(({node}, index) => {
          const title = node.frontmatter.title || node.fields.slug
          let lang
          // check from tags in which language the article is written and create a variable that ends up being passed into the article tag
          if (node.frontmatter.tags.includes('fi')) {
            lang = 'fi'
          } else {
            lang = 'en'
          }
          return (
            <section key={node.fields.slug} lang={lang} aria-labelledby={`title${index}`} aria-describedby={`description${index}`}>
              <header lang={lang}>
                <h3
                  id={`title${index}`}
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{boxShadow: `none`, color: `black`}} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <time pubdate="pubdate" dateTime={node.frontmatter.date}><small>{node.frontmatter.date}</small></time>
              </header>
              <div role="none" id={`description${index}`} lang={lang}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            </section>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            published
            tags
          }
        }
      }
    }
  }
`
