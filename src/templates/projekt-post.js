import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import config from "../../data/SiteConfig";
import SEO from '../components/SEO/seo';

export const ProjektPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  thumbnail,
  slug,
  date,
  postNode,
  postPath
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
    {helmet}
    <SEO postPath={slug} postNode={postNode} postSEO />
    <section 
  className="hero is-info is-medium " style={{
    background: "url(" + thumbnail + ")",
    backgroundSize: "cover",
    backgroundPosition: "bottom"
      }}>
  <div className="hero-body">
    <div className="container">
      <div className="columns">
           <div className="column"> 
            <div className="mytitle">
              {title}
              
              </div>
              <p>{description}</p>
          </div>
  </div>
  </div>
  </div>
</section>
    <section className="section">
      
    
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          
            
            <PostContent content={content} />
           
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

ProjektPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const ProjektPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ProjektPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`}/>}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      slug={post.fields.slug}
      thumbnail={post.frontmatter.thumbnail}
      date={post.frontmatter.date}
      postNode={post}
      postPath={post.fields.slug}
    />
  )
}

ProjektPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjektPost

export const pageQuery = graphql`
  query ProjektPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY", locale: "pl")
        title
        thumbnail
        description
        tags
      }
    }
  }
`
