import React from 'react'
import Slider from "react-alice-carousel"
import Slide from '../../components/Slide/Slide'

const Imprezy = ( props ) => {

    const style = (
        props.isVisible ? 'section asfaltbackground m100vh visible' : 'section asfaltbackground m100vh notVisable'
   );

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


const Slides = props.posts
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
    <section className={style} id="imprezy">
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
                                >

                                {Slides}
                            </Slider>
                        </div>
                    </div>
                </section>
   )}

export default Imprezy