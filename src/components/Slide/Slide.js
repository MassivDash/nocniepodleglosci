import React from 'react';
import Link from 'gatsby-link'
import './Slide.sass'

const Slide = (props) => (
<div key={props.myKey}
className="myslide"



>
  <figure className="image is-256x256">
    <img src={props.thumbnail} alt={props.excerpt} />
  </figure>

  
  

<p className="slider_description">

  <Link className="slider_title" to={props.slug}>
      {props.title}
  </Link>
  <p>
  {props.excerpt}
  </p>
  <br />
  <br />
  <Link className="button is-big" to={props.slug}>
    Czytaj Więcej ...
  </Link>
</p>

</div>)

export default Slide 