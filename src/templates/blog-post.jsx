import React from 'react'
import {Link, graphql} from 'gatsby'

import Bio from '../components/bio'
import BioFi from '../components/bioFi'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {rhythm, scale} from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteSubTitle = this.props.data.site.siteMetadata.subtitle
    const tags = post.frontmatter.tags
    const {previous, next} = this.props.pageContext
    let lang
    // check from tags in which language the article is written and create a variable that ends up being passed into the article tag
    if (post.frontmatter.tags.includes('fi')) {
      lang = 'fi'
    } else {
      lang = 'en'
    }
    return (
      <Layout location={this.props.location} title={siteTitle} subtitle={siteSubTitle}>
        <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
        <article lang={lang}>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                margin: '1rem 0 0.5rem',
              }}
            >
              {post.frontmatter.date}
            </p>
            <ul style={{...scale(-1 / 5), listStyle: 'none', marginBottom: '1rem'}}>
              tags:&nbsp;
              {post.frontmatter.tags.map((item, index) => {
                return (
                  <li key={index} style={{display: 'inline'}}>
                    {item} /{' '}
                  </li>
                )
              })}
            </ul>
          </header>
          <section dangerouslySetInnerHTML={{__html: post.html}} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>{tags.indexOf('fi') ? <Bio /> : <BioFi />}</footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel='prev'>
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel='next'>
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        published
        tags
      }
    }
  }
`
