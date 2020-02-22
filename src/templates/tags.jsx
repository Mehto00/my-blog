import React, {Component} from 'react'
import PropTypes from 'prop-types'

// Components
import {Link, graphql} from 'gatsby'

import Layout from '../components/layout'
import {rhythm} from '../utils/typography'

class Tags extends Component {
  render() {
    const {tag} = this.props.pageContext
    const {totalCount} = this.props.data.allMarkdownRemark
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteSubTitle = this.props.data.site.siteMetadata.subtitle
    const posts = this.props.data.allMarkdownRemark.edges
    return (
      <div>
        <Layout location={this.props.location} title={siteTitle} subtitle={siteSubTitle}>
          <p style={{fontWeight: 'bold', margin: '0'}}>
            <em>{tagHeader}</em>
          </p>
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
                <time pubdate="pubdate" datetime={node.frontmatter.date}><small>{node.frontmatter.date}</small></time>
                  <ul style={{listStyle: 'none', marginBottom: '1rem'}}>
                    tags:&nbsp;
                    {node.frontmatter.tags.map((item, index) => {
                      return (
                        <li key={index} style={{display: 'inline'}}>
                          {item} <span role="none" aria-hidden="true">/</span>{' '}
                        </li>
                      )
                    })}
                  </ul>
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
      </div>
    )
  }
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tags: {in: [$tag]}, published: {eq: true}}}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
