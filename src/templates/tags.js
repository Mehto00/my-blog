import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import { rhythm } from "../utils/typography";

class Tags extends Component {
  render() {
    const { tag } = this.props.pageContext;
    const { totalCount } = this.props.data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteSubTitle = this.props.data.site.siteMetadata.subtitle;
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Layout location={this.props.location} title={siteTitle} subtitle={siteSubTitle}>
          <p style={{fontWeight:"bold", margin:"0"}}><em>{tagHeader}</em></p>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4)
                    }}
                  >
                    <Link
                      style={{ boxShadow: `none`, color: `black` }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <ul style={{listStyle: "none", marginBottom:"1rem"}}>tags:&nbsp; 
                    {node.frontmatter.tags.map((item, index) => {
                      return <li key={index} style={{ display: "inline" }}>{item} / </li>
                    })}
                  </ul>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt
                    }}
                  />
                </section>
              </article>
            );
          })}
        </Layout>
      </div>
    );
  }
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
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
`;
