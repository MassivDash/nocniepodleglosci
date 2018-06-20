import React, {PureComponent}  from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import TrackVisibility from 'react-visibility-sensor';
import Link from 'gatsby-link'
import Slider from "react-alice-carousel"
import SideDots from '../components/SideDots/SideDots'
import config from "../../data/SiteConfig"
import Slide from '../components/Slide/Slide'
import Start from './Sekcje/start';
import Fun from './Sekcje/fun'



export default class IndexPage extends PureComponent {
    state = {
        
        inView1: false,
        inView2: false,
        inView3: false,
        inView4: false
    };

    setStartVisible1 = () => {
      this.setState(( prevState ) => {
        return { inView1: !prevState.inView1};
    } );
  }

  setStartVisible2 = () => {
    this.setState(( prevState ) => {
      return { inView2: !prevState.inView2};
  } );
}

setStartVisible3 = () => {
  this.setState(( prevState ) => {
    return { inView3: !prevState.inView3};
} );
}

setStartVisible4 = () => {
  this.setState(( prevState ) => {
    return { inView4: !prevState.inView4};
} );
}
    
  

    shouldComponentUpdate(nextState) {
      return nextState.inView1 !== this.state.inView1;
  };

  

    render() {

        if (typeof window !== 'undefined') {
            // Make scroll behavior of internal links smooth eslint-disable-next-line
            // global-require
            require('smooth-scroll')('a[href*="#"]');
        }

        
        console.log(this.state);
      

        

        const {data} = this.props
        const {edges: posts} = data.allMarkdownRemark
        
        const responsive = {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            }
        };

        console.log(this.state);
        const Slides = posts
            .filter(post => post.node.frontmatter.templateKey === 'projekt-post')
            .map(({node: post, i}) => (
                <div key={i + 1}><Slide
                    key={i}
                    myKey={post.fields.slug}
                    thumbnail={post.frontmatter.thumbnail}
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    excerpt={post.excerpt}
                    slug={post.fields.slug}
                    description={post.frontmatter.description}/></div>
            ))

        return (

            <div>
                <Helmet>
                    <title>
                        Noc Niepodległości | 10/11
                    </title>
                    <meta property="og:url" content="Noc Niepodległości | 10/11"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="Noc Niepodległości | 10/11"/>
                    <meta property="og:description" content="Noc Niepodległości | 10/11"/>
                    <meta property="og:image" content={config.siteLogo}/>

                    <meta name="twitter:title" content="Noc Niepodległości | 10/11"/>
                    <meta name="twitter:description" content="Noc Niepodległości | 10/11"/>
                    <meta property="og:description" content="Noc Niepodległości | 10/11"/>
                    <meta name="twitter:image" content={config.siteUrl}/>
                    <meta name="twitter:card" content="summary_large_image"/>

                </Helmet>

                <SideDots dot1={this.state.inView1} dot2={this.state.inView2}/>
                <TrackVisibility onChange={this.setStartVisible1}>
                <Start isVisible={this.state.inView1} />
                </TrackVisibility>

                <div className="separtor asfaltbackground"></div>

                <TrackVisibility onChange={this.setStartVisible2} >
                <Fun isVisible={this.state.inView2} />
                </TrackVisibility>

                

                <section className="section asfaltbackground" id="imprezy">
                    <div className="container">

                        <div className="columns">
                            <div className="column">
                                <div className="content">
                                    <h1 className="has-text-weight-bold is-size-2">Nasze Projekty</h1>
                                </div>
                            </div>
                        </div>

                        <div className="columns">

                            <Slider
                                fadeOutAnimation={true}
                                mouseDragEnabled={true}
                                playButtonEnabled={false}
                                responsive={responsive}
                                dotsDisabled={true}
                                infinite={true}
                                onSlideChange={this.onSlideChange}>

                                {Slides}
                            </Slider>
                        </div>
                    </div>
                </section>

                <section className="section asfaltbackground" id="kontakt">
                    <div className="container">
                        <div className="columns">
                            <div className="column">

                                {posts
                                    .filter(post => post.node.frontmatter.templateKey === 'cele-page')
                                    .map(({node: post}) => (
                                        <div className="content mycontent" key={post.id}>
                                            <p>
                                                <Link className="has-text-primary" to={post.fields.slug}>
                                                    {post.frontmatter.title}
                                                </Link>

                                            </p>
                                            <p>
                                                {post.excerpt}
                                                <br/>
                                                <br/>
                                                <Link className="button is-small" to={post.fields.slug}>
                                                    Czytaj Więcej →
                                                </Link>
                                            </p>
                                        </div>
                                    ))}

                            </div>

                            <div className="column">

                                {posts
                                    .filter(post => post.node.frontmatter.templateKey === 'ofundacji-page')
                                    .map(({node: post}) => (
                                        <div className="content mycontent" key={post.id}>
                                            <p>
                                                <Link className="has-text-primary" to={post.fields.slug}>
                                                    {post.frontmatter.title}
                                                </Link>

                                            </p>
                                            <p>
                                                {post.excerpt}
                                                <br/>
                                                <br/>
                                                <Link className="button is-small" to={post.fields.slug}>
                                                    Czytaj Więcej →
                                                </Link>
                                            </p>
                                        </div>
                                    ))}

                            </div>
                        </div>

                        <div className="columns">
                            <div className="column"></div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({edges: PropTypes.array})
    })
}

export const pageQuery = graphql `
query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
      
        
        node {
          
          excerpt(pruneLength: 400)
          id
          children {
            id
            parent {
              id
            }
            
            
          }
          fields {
            slug
          }
          frontmatter {
            
            title
            thumbnail
            description
            templateKey
            date(formatString: "MMMM DD, YYYY", locale: "pl")
            
          }
        }
      }
    }
   
  
    imageSharp (id: {regex: "/background.jpg/"}) {
    id
    children {
      id
    }
    sizes(maxWidth: 1920, quality: 90, traceSVG: { color: "#3ba3d4" })  {
    	...GatsbyImageSharpSizes_tracedSVG
    }
    
          
          
        
  }
}
`
