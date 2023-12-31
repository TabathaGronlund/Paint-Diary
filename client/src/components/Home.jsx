//This is where the buttons and other components will have their links and pull from the API

import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (


    <div className='home-container heavy-font'>
      <div id="search">
        <h1 className='foreground-1'> <strong>Start your journey of color. Lay your path to an artistic future!</strong></h1>
        <h2 className='foreground'>Look for art you'd like to recreate:</h2>
        
        <label for="searchInput">Search<i className="art-search"></i></label>
        <input className='search-bar' id="searchInput" type="text" placeholder="EX: Van Gogh" />
      </div>
      {/* API art institute SIM */}
      <div className='contained-media '>
        <div className='info-box'>
          <h1><img className='color-wheel' src="art-img/color-wheel.png" alt=""/>Mediums  <img className='color-wheel' src="art-img/color-wheel.png" alt=""/>
</h1>
          <h3 className='home-para'>Paint, graphite, and pastels: Colors, lines, and whispers.
            Each medium a world of its own. Paint breathes life with
            vibrant strokes. Graphite unveils precision in black and white.
            Pastels enchant with velvety hues. Together, they form a symphony
            of artistic expression.
          </h3>
        </div>
        <button onClick={() => navigate(`/media`)}>More About Mediums</button>
        <div className='info-box flex-paint length-down-2' >
          <div className='info-paint'>
            <h2>Oil Paint</h2>
            <p className='home-para'>Oil paints are the sorcerers of the artistic realm,
              enchanting both canvas and creator with their alchemical
              essence. These masterful concoctions, composed of vibrant
              pigments suspended in a harmonious blend of oils, unlock
              a world of boundless creativity. With a touch of the
              brush, they metamorphose into an unrivaled medium,
              capable of capturing life's essence in a tapestry of
              colors and textures. Their slow-drying nature grants
              the artist a symphony of time, allowing ideas to evolve and
              visions to unfold like the petals of a blooming flower.
              As the artist's hands dance upon the canvas, the oils
              coalesce and mingle, revealing their true transformative
              power. Each brushstroke, a whisper of emotion; each layer,
              a story unfolding. Oil paints, the magicians of the palette,
              bring dreams to life, breathing soul and passion into the
              realm of art, forever capturing the essence of the human spirit.</p>
              <img src="/art-img/oil-img.png" alt=""/>
          </div>
          <div className='info-paint'>
            <h2>Watercolor Paint</h2>
            <p className='home-para'>Watercolors are the ethereal dreamweavers of the artistic realm,
              unveiling a world of translucent enchantment with each delicate stroke.
              Born from the harmonious marriage of pigments and water, they possess
              an exquisite fluidity that dances upon the surface of paper, evoking
              a sense of weightlessness and serenity. Like whispers of color, they
              dissolve effortlessly, creating gentle gradients and ephemeral washes
              that evoke the ebb and flow of emotions. With a touch of the brush,
              watercolors unveil their lyrical nature, where transparency and luminosity
              converge in a symphony of hues. They invite the artist to surrender control,
              embracing the unpredictable nature of water's gentle guidance.
              Each brushstroke carries a story, as colors bleed and blend, capturing
              the essence of fleeting moments and delicate impressions. Watercolors,
              the painters of emotions, weave a tapestry of gentle beauty, leaving
              behind a trail of translucent memories that enchant the observer's heart.</p>
              <img className='size-img-down' src="art-img/water-img.png" alt=""/>
          </div>
          <div className='info-paint'>
            <h2>Acrylic Paint</h2>
            <p className='home-para'>Acrylic paints are the spirited chameleons of the artistic universe,
              embodying versatility and vivacity in every vibrant hue.
              Like liquid poetry, they flow effortlessly from the artist's
              brush, igniting the canvas with a burst of energy and expression.
              Formed by a symphony of pigments suspended in a water-based embrace,
              acrylic paints possess an innate ability to metamorphose, adapting to
              any creative vision that dares to unfold. With their quick-drying nature,
              they beckon the artist to seize the moment, inviting experimentation and
              spontaneity. These dynamic paints fuse effortlessly, layer upon layer,
              weaving a tapestry of boldness and brilliance. From delicate washes to bold
              impastos, they accommodate every stroke, capturing the artist's vision with
              resolute intensity. Acrylic paints, the kaleidoscopic maestros,
              transcend boundaries and ignite the imagination, forever embracing the
              ever-evolving spirit of artistic expression.</p>
              <img className='size-img-down' src="art-img/acrylic-img.png" alt=""/>

          </div>
        </div>
        <button onClick={() => navigate(`/learnoilpaint`)}>Get Started-Oil</button>
        {/* <br></br> */}
        <button onClick={() => navigate(`/learnwaterpaint`)}>Get Started-Watcerclor</button>
        <button onClick={() => navigate(`/learnacrylicpaint`)}>Get Started-Acrylic</button>
        <div className='info-box'>
          <h2>Pastel</h2>
          <p className='home-para'>Pastels are the enchanting whispers of the artistic world, harnessing
            the essence of pure pigments in a delicate and powdery embrace. With their
            soft and velvety texture, they glide effortlessly across the surface, revealing
            a symphony of colors that radiate warmth and depth. These magical sticks of
            creativity hold within them the ability to transform the mundane into the
            extraordinary, unveiling a realm of sublime beauty. With a gentle touch,
            pastels dance upon the paper, leaving traces of vivid dreams and subtle
            nuances in their wake. Their blendability is akin to a whispered secret,
            as hues merge and mingle, creating an ethereal harmony. Each stroke carries
            an intimate expression, as the artist's fingertips navigate a world of endless
            possibilities. From vibrant landscapes to delicate portraits, pastels breathe
            life into the art, capturing fleeting moments in a soft and evocative embrace.
            They invite the observer to immerse themselves in a realm of sublime color and
            gentle elegance, where imagination flourishes and emotions find solace. Pastels,
            the dreamweavers of the artist's touch, enchant the senses and invite us
            to explore a world where beauty and creativity coalesce in harmonious serenity.</p>
            <img className= 'size-img-down' src="art-img/pastel-img.png" alt=""/>

        </div>

        <button onClick={() => navigate(`/learnpastel`)}>Get Started-Pastel</button>
        <div className='info-box'>
          <h2>Graphite</h2>
          <p className='home-para'>Graphite, the silent conductor of artistic expression, wields the power of monochrome magic.
            In the artist's hand, it dances across the page, leaving trails of subtle shades and
            intricate lines. With its versatile nature, graphite transforms thoughts into tangible
            form, capturing light and shadow with delicate precision. From the softest whispers to
            bold strokes, it conveys depth and texture, breathing life into sketches and drawings.
            Like a symphony of grayscale, graphite unveils the beauty found in simplicity, inviting
            the observer to explore the intricate details of the artist's vision. With each stroke,
            it unravels stories and unveils emotions, effortlessly bridging the gap between imagination
            and reality. Graphite, the conductor of subtlety, invites us to appreciate the elegance
            found in black and white, where lines converge and creativity takes flight.</p>
            <img className='size-img-down' src="art-img/graphite-img.png" alt=""/>

        </div>
        <button onClick={() => navigate(`/learngraphite`)}>Get Started-Graphite</button>

      </div>
  
      <button className='comment-button' onClick={() => navigate(`/commentform`)}>Comments & Questions</button>
      <button onClick={() => navigate(`/`)}>Home</button>

    </div>
  )
}

export default Home
