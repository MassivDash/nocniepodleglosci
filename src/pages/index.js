import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Slider from "react-alice-carousel"
import config from "../../data/SiteConfig"
import Slide from '../components/Slide/Slide'
import Noc from '../img/Noc.svg'
import Numbers from '../img/numbers.svg'

export default class IndexPage extends React.Component {
  state = {
    currentIndex:0,
    items: [1,2,3,4,5]
  };

  slideTo = (i) => this.setState({ currentIndex: i });
  
      onSlideChanged = (e) => this.setState({ currentIndex: e.item });
  
      slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
  
      slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });
  
  render() {


    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { currentIndex } = this.state;
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };    
    const Slides = posts.filter(post => post.node.frontmatter.templateKey === 'projekt-post')
    .map(({ node: post, i }) => (
      <div key={i + 1} ><Slide
        key={i}
        myKey={post.fields.slug}
        thumbnail={post.frontmatter.thumbnail}
        title={post.frontmatter.title} 
        date={post.frontmatter.date}
        excerpt= {post.excerpt}
        slug={post.fields.slug}
        description={post.frontmatter.description}   
      /></div>
      )  
      )

    return (
      

      <div>
      <Helmet>
      <title> Noc Niepodległości | 10/11 </title>
      <meta property="og:url"                content="Noc Niepodległości | 10/11" />
      <meta property="og:type"               content="website" />
      <meta property="og:title"              content="Noc Niepodległości | 10/11" />
      <meta property="og:description"        content="Noc Niepodległości | 10/11" />
      <meta property="og:image"              content={config.siteLogo} />

      <meta name="twitter:title" content="Noc Niepodległości | 10/11" />
      <meta name="twitter:description" content="Noc Niepodległości | 10/11" />
      <meta property="og:description"  content="Noc Niepodległości | 10/11" />
      <meta name="twitter:image" content={config.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />

</Helmet>
      

      <section className="hero is-fullheight asfaltbackground">
      <div className="hero-body">
    <div className="container has-text-centered intro">
    
    <div className="Noc">
      <img className="Noclogo" src={Noc} alt="Noc Niepodległsości" /><img className="NocNum" src={Numbers} alt="Noc Niepodległości" />
      <div className="NocTitle"> Noc Niepodległości</div>
    </div>
            </div>
            
    </div>
   
           
    <div className="startfun"><button>Zacznij Zabawę</button></div>
      </section>
      <section className="section asfaltbackground">
        <div className="container">

                 

        <div className="columns">
           <div className="column">
          <div className="content">
            <p>
             Pragniemy, aby w tę noc, podobnie jak w Sylwestra, gdy zaczynamy świętować Nowy Rok, rozpocząć obchodzenie Święta Niepodległości. Chcemy skorzystać z tego, że możemy trochę mocniej zaimprezować, gdyż 11 listopada jest dniem ustawowo wolnym od pracy.
            Nasze święto jest totalnie wyluzowane i dalekie od oficjalnej spiny. Chcemy odwoływać się do zupełnie naturalnego poczucia dumy i chęci okazania swojego przywiązania do naszego kraju. Przy czym warto podkreślać, iż można to czynić w sposób radosny, otwarty, wolny od agresji, bazujący na naszych wspaniałych cechach - poczuciu humoru i słowiańskiej skłonności do uciech i zabaw.
            </p>
Nasza akcja nastawiona jest na wciągnięcie do wspólnej zabawy możliwie jak największej liczby Polaków i wszystkich, którzy wspólnie z nami chcieliby obchodzić Nasze Święto.
          <p>
Noc Niepodległości z 10 na 11 listopada ma być ogólnopolską, powszechną imprezą z okazji Święta Niepodległości.
        </p>
Chcemy pokazać, że ludzie pogodni, wyluzowani mogą być najzwyczajniej w świecie dumni z tego, że pochodzą z Kraju nad Wisłą, a imprezowanie może być jedną z narodowych cnót sprzyjających integracji i budowaniu wspólnoty.
<p>
Pragniemy aby Święto Niepodległości kojarzyło się z dumą, aby patriotyzm nabrał nowego znaczenia, a młodzi Polacy chcieli świętować to, że żyją w wolnej, nowoczesnej Ojczyźnie.
</p>
Skłonność do zabaw jest jedną z naszych najfajniejszych cech narodowych, którą warto celebrować, pielęgnować i szukać sposobności dla jej utrwalenia.
<p>
Inicjatywy
</p>
Jednym z najpopularniejszych i najbardziej naturalnych sposobów świętowania jest zabawa, a jak się bawić to nie indywidualnie tylko, parafrazując słowa piosenki Jeremiego Przybory, wespół w zespół! Dlatego zachęcamy polskie zespoły i wykonawców, żeby w tę noc rozkręcali ogólnopolską imprezę.
W klubach, restauracjach, mieszkaniach zorganizujmy imprezy, spotkania, domówki z okazji Nocy Niepodległości.
Do akcji wciągamy kina, opery, filharmonie (polski repertuar) muzea i inne ośrodki kulturalne.
Wspólnym elementem ubioru uczestników niech będzie biało-czerwony detal; wstążka, kotylion, itp.
W trakcie imprez podstawę diety stanowi patriotka – biało-czerwone ciastko (konkurs na patriotkę trwa!) i pijemy biało-czerwone napoje.
<p>
Jesteśmy głęboko przekonani, że Noc Niepodległości stanie się jednym z najważniejszych imprezowych świąt w kalendarzu, dorównującym popularnością Andrzejkom czy Nocy Świętojańskiej. Sylwestra na razie chyba nie przebijemy, ale mamy podobnie jak i on jeden mega atut: następny dzień jest ustawowo wolny od pracy!
       </p></div></div></div></div>
        </section>

      <section className="section asfaltbackground">
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
        onSlideChange={this.onSlideChange} >

          {Slides}
            </Slider>
       </div></div>
        </section>

      
      <section className="section asfaltbackground">
      <div className="container">
      <div className="columns">
           <div className="column">

             {posts
            .filter(post => post.node.frontmatter.templateKey === 'cele-page')
            .map(({ node: post}) => (
              <div
                className="content mycontent"
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
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
.map(({ node: post }) => (
 <div
   className="content mycontent"
   key={post.id}
 >
   <p>
     <Link className="has-text-primary" to={post.fields.slug}>
       {post.frontmatter.title}
     </Link>
     
   </p>
   <p>
     {post.excerpt}
     <br />
     <br />
     <Link className="button is-small" to={post.fields.slug}>
       Czytaj Więcej →
     </Link>
   </p>
 </div>
))}

</div>
            </div>


      <div className="columns">
           <div className="column">

             </div></div>
             </div>
      </section>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
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
