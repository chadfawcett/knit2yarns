import React from 'react'

class HeroSlider extends React.Component {
  componentDidMount() {
    const $ = window.$

    //  Initialize hero slider
    $('.hero-slider').flexslider({})

    //  Add padding to container depending on nav class
    if (
      !$('nav').hasClass('overlay-bar') &&
      !$('nav').hasClass('contained-bar')
    ) {
      $('.main-container')
        .first()
        .css('margin-top', $('nav').outerHeight())
    }

    //  Append .background-image-holder <img>'s as CSS backgrounds
    $('.background-image-holder').each(function() {
      var imgSrc = $(this)
        .children('img')
        .attr('src')
      $(this).css('background', 'url("' + imgSrc + '")')
      $(this)
        .children('img')
        .hide()
      $(this).css('background-position', '50% 0%')
    })
  }

  render() {
    return (
      <section className="hero-slider">
        <ul className="slides">
          {/* <li className="overlay"> */}
          <li>
            <div className="background-image-holder">
              <img
                className="background-image"
                alt="Hero"
                src="img/banner1.jpg"
              />
            </div>
            <div
              className="container align-vertical"
              style={{ paddingTop: 200 }}
            >
              <div className="row">
                <div className="col-md-6 col-sm-9">
                  {/* <h1 className="text-white">Knox Mountain Knit Company</h1>
              <p className="text-white">Saturday October 14, Sasha and Willow of the
              Knox Mountain Knit Company will be sharing a trunk show at the
              shop. Come and be inspired by the beautiful samples they have made
              of their patterns!  1-4 p.m.  Bring your knitting and stay a
              while</p> */}
                </div>
              </div>
            </div>
          </li>

          <li className="">
            <div className="background-image-holder">
              <img
                className="background-image"
                alt="Hero"
                src="img/banner2.jpg"
              />
            </div>
            <div
              className="container align-vertical"
              style={{ paddingTop: 200 }}
            >
              <div className="row">
                <div className="col-md-6 col-sm-9" />
              </div>
            </div>
          </li>

          <li className="">
            <div className="background-image-holder">
              <img
                className="background-image"
                alt="Hero"
                src="img/banner3.jpg"
              />
            </div>
            <div
              className="container align-vertical"
              style={{ paddingTop: 200 }}
            >
              <div className="row">
                <div className="col-md-6 col-sm-9" />
              </div>
            </div>
          </li>

          <li className="">
            <div className="background-image-holder">
              <img
                className="background-image"
                alt="Hero"
                src="img/banner4.jpg"
              />
            </div>
            <div
              className="container align-vertical"
              style={{ paddingTop: 200 }}
            >
              <div className="row">
                <div className="col-md-6 col-sm-9" />
              </div>
            </div>
          </li>

          <li className="">
            <div className="background-image-holder">
              <img
                className="background-image"
                alt="Hero"
                src="img/banner5.jpg"
              />
            </div>
            <div
              className="container align-vertical"
              style={{ paddingTop: 200 }}
            >
              <div className="row">
                <div className="col-md-6 col-sm-9" />
              </div>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}

export default HeroSlider
