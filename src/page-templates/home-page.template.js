import React from "react"

import { SEO } from "../components"
import {
  safelyGetFrontMatter,
} from "../cms"
import { Slider, SliderContent } from "../components"
//import { Link } from "gatsby"
import { Row, Container, Col } from "reactstrap"
import { Fade } from "react-reveal"

export const HomePageTemplate = props => {
  function renderContentPanel() {
    return props.panel_content.map(panel => <p>{panel.panel_content_link}</p>)
  }

  function renderSlides() {
    return props.header_slide.map(hslide => hslide.header_image)
  }

  function renderSliderMenu() {
    return props.header_slide.map(hslide => {
      return {
        header_link: hslide.header_link,
        header_link_key: hslide.header_link_key,
      }
    })
  }

  function footerContent() {
    const { footer_slide } = props
    return footer_slide.map(fslide => fslide)
  }

  /**
   * Animate text one at a time
   * @param {string} text
   * @return {JSX} 
   */
  const animateText = text => (text.split(' ').map(word => (
    <Fade><span style={{ display: 'inline' }}>{word} </span></Fade>
  )))

  return (
    <article style={{ width: "100%" }}>
      <SEO title="Home Page" />
      <Container fluid className="padding-none margin-none">
          <div className="blackout-overlay" style={{opacity: 0.425091}}></div>
          <div className="blackout-section">
          <Slider
            subMenu={renderSliderMenu()}
            fullScreen={true}
            images={renderSlides()}
          />
          </div>
          <div className="blackout-section-neighbor" style={{ height: '100vh', background: 'black' }}>
          <div className="valign--center">
              <div className="container container--md in-view-tracker is-in-view">
                  <div className="line">&nbsp;</div>
                      <h2 className="color--light">
                          <span className="split-text-animate">
                              {animateText(props.content_section_one)}
                          </span>
                      </h2>
                </div>
          </div>
          </div>
          <div className="text-center" style={{ padding: "10% 0", height: '25vh', background: 'white' }}>
            {renderContentPanel()}
          </div>
        <SliderContent
          content={footerContent()}
          parallax={false}
          hasArrows={true}
        />
      </Container>
    </article>
  )
}

const HomePage = props => {
  return (
    <HomePageTemplate
      {...safelyGetFrontMatter(props.pageContext)}
      isPreview={false}
    />
  )
}

export default HomePage
/***/

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * <section class="section section--hero blackout-section" data-nav-color="light-no-bg">
<div class="blackout-overlay" style="opacity: 0.425091;"></div>
<div class="hero valign--center">
<div class="container container--md">
<div class="hero-we" style="transform: translateY(138px);"><h5>We</h5></div>
<div class="step-animate__container">
<h1 class="color--light step-animate" style="transition-delay: 0s; opacity: 0.274625;">invest early.</h1>
<h1 class="color--light step-animate" style="transition-delay: 0s; opacity: 0.4225;">commit personally.</h1>
<h1 class="color--light step-animate" style="transition-delay: 0s; opacity: 0.65;">support with experience.</h1>
<h1 class="color--light step-animate active" style="transition-delay: 0s; opacity: 1;">amplify intrinsic talent.</h1>
</div>
</div>
<div class="escalator-container">
<div class="escalator__indices-container">
<div class="escalator__indices" style="transform: translateY(-99px);">
<div class="escalator__index">
<p class="caption hero__caption">Eddy and Daishin<span class="text-divider">//</span>Goat</p>
</div>
<div class="escalator__index">
<p class="caption hero__caption">Eddy and Daishin<span class="text-divider">//</span>Goat</p>
</div>
<div class="escalator__index">
<p class="caption hero__caption">Sarah, Nate and Randal<span class="text-divider">//</span>Lever</p>
</div>
<div class="escalator__index escalator__index--active">
<p class="caption hero__caption">Sacha<span class="text-divider">//</span>CloudBees</p>
</div>
</div>
</div>
</div>
<div class="overlay-container">
<div class="overlay--transition"></div>
<div class="overlay--transition"></div>
<div class="overlay--transition"></div>
<div class="overlay--transition transition-next"></div>
</div>
<div id="hero-mobile"></div>
<div class="cover-image cover-image--hero cover-image--color-blue" mobile-url="goat" style="background-image: url(&quot;/wp-content/themes/matrix-prpl/assets/img/goat-mobile@2x.jpg&quot;);"></div>
<div class="cover-image cover-image--hero cover-image--color-blue" mobile-url="goat" style="background-image: url(&quot;/wp-content/themes/matrix-prpl/assets/img/goat-mobile@2x.jpg&quot;);"></div>
<div class="cover-image cover-image--hero cover-image--color-blue" mobile-url="lever" style="background-image: url(&quot;/wp-content/themes/matrix-prpl/assets/img/lever-mobile@2x.jpg&quot;);"></div>
<div class="cover-image cover-image--hero cover-image--color-blue active" mobile-url="cloudbees" style="background-image: url(&quot;/wp-content/themes/matrix-prpl/assets/img/cloudbees-mobile@2x.jpg&quot;);"></div>
</div>

<div class="scroll--indicator">
<div class="scroll">
<i class="fa fa-angle-double-down moveArrow" aria-hidden="true"></i>
</div>

</div>
</section>
 */
