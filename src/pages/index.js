import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Observer from '@researchgate/react-intersection-observer'
import Link from 'gatsby-link'
import Slider from "react-slick"
import Slide from '../components/Slide/Slide'
import SideDots from '../components/SideDots/SideDots'
import config from "../../data/SiteConfig"
import Start from './Sekcje/start'
import Fun from './Sekcje/fun'
import '../layouts/fonts/LOUGRAMM.ttf'


export default class IndexPage extends PureComponent {
    state = {

        inView1: false,
        inView2: false,
        inView3: false,
        inView4: false
    };

    setStartVisible1 = ({ isIntersecting }) => {
        this.setState({inView1:  isIntersecting })
    }

    setStartVisible2 = ({ isIntersecting }) => {
      this.setState({inView2:  isIntersecting })
  }

  setStartVisible3 = ({ isIntersecting }) => {
    this.setState({inView3:  isIntersecting })
}
setStartVisible4 = ({ isIntersecting }) => {
  this.setState({inView4:  isIntersecting })
}


    render() {

        if (typeof window !== 'undefined') {
            // Make scroll behavior of internal links smooth eslint-disable-next-line
            // global-require
            require('smooth-scroll')('a[href*="#"]');
        }

       

        const {data} = this.props
        const {edges: posts} = data.allMarkdownRemark

           
      

    const settings = {
        infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      centerPadding: '0',
      speed: 500,
      dots: true,
      draggable: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }
      ]
    
    };
      
    
    const Slides = posts.filter(post => post.node.frontmatter.templateKey === 'projekt-post')
    .map(({node: post, i}) => (
        <div key={i+5}><Slide
            key={i+1}
            myKey={post.fields.slug}
            thumbnail={post.frontmatter.thumbnail}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            slug={post.fields.slug}
            description={post.frontmatter.description}/></div>
    ));

    const style2 = (
        this.state.inView3 ? 'section asfaltbackground m100vh visible' : 'section asfaltbackground m100vh notVisable'
   );

   const style3 = (
    this.state.inView4 ? 'section asfaltbackground m100vh visible' : 'section asfaltbackground m100vh notVisable'
);


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

                <SideDots
                    dot1={this.state.inView1}
                    dot2={this.state.inView2}
                    dot3={this.state.inView3}
                    dot4={this.state.inView4} />
                <Observer  onChange={this.setStartVisible1} >
                   <div>
                    <Start isVisible={this.state.inView1}/>
                   </div>
                </Observer>

                <div className="separtor asfaltbackground"></div>

                <Observer onChange={this.setStartVisible2}  >
                  <div>
                    <Fun isVisible={this.state.inView2}/>
                    </div>
                </Observer>

                <Observer onChange={this.setStartVisible3} >
                  
                     <section className={style2} id="imprezy">
                    <div className="container">

                        <div className="columns">
                            <div className="column">
                                <div className="fun content">
                                    <h2>Inicjatywy</h2>
                                </div>
                            </div>
                        </div>
                        <div className="separtor asfaltbackground"></div>
                        <div className="columns">
                                <div className="column">

                                    <div className="slider_wrapper">
                                
                            <Slider {...settings} >

                                {Slides}
                            </Slider>
                            </div>
                        </div></div>
                    </div>
                </section>
                   
                </Observer>

                <div className="separtor asfaltbackground"></div>

                <Observer onChange={this.setStartVisible4} >
                <section className={style3} id="kontakt">
                    <div className="container">
                        <div className="columns">
                            <div className="column">

                                <div className="cta_holder">
                                    <div className="fun cta_title">
                                        <h2>Twoja <span>Impreza</span></h2>
                                        <p><u>Napisz do nas</u>, a zamieścimy informacje o twoim wydarzeniu na naszej stronie.</p>

                                    </div>
                                </div>
                               

                            </div>

                            <div className="column">

                                

                            </div>
                        </div>
                        <div className="separtor asfaltbackground"></div>
                        <div className="columns">
                            <div className="column">
                                <div className="fun flex">
                                <h2><a href="mailto:kontakt@nocniepodleglosci.pl">kontakt@nocniepodleglosci.pl</a></h2> 


                            </div>
                            </div>
                            </div>
                            <div className="separtor asfaltbackground"></div>
                        <div className="columns">
                            <div className="column is-one-third is-offset-8">
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
                                                <Link className="button" to={post.fields.slug}>
                                                    Czytaj Więcej 
                                                </Link>
                                            </p>
                                        </div>
                                    ))}         
                            </div>
                        </div>
                    </div>
                </section>
                </Observer>
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