import React from 'react'
import Slider from 'react-slick';

import { Image } from 'semantic-ui-react'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";


// @import "~slick-carousel/slick/slick.css";
// @import "~slick-carousel/slick/slick-theme.css";



class UnitImage extends React.Component {
    render() {

      const settings = {
        // dots: true,
        arrow: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };


      return (
        <Slider {...settings}>
            <div>
                <Image src={this.props.img1} fluid rounded />
                <div  className="top-padding">
                    <p>"{this.props.quote}"</p>
                    <p className="hard-right">– {this.props.author}</p>
                </div>
            </div>

            <div>
                <Image src={this.props.img2} fluid rounded />
                <div  className="top-padding">
                    <p>"{this.props.quote}"</p>
                    <p className="hard-right">– {this.props.author}</p>
                </div>
            </div>

            <div>
                <Image src={this.props.img3} fluid rounded />
                <div  className="top-padding">
                    <p>"{this.props.quote}"</p>
                    <p className="hard-right">– {this.props.author}</p>
                </div>
            </div>
         
        </Slider>

      );
    }
  }

// const UnitImage = (props) => (
//     <div>

//     <Image src={props.img} fluid rounded />
    
//        <div  className="top-padding">
//        <p>"{props.quote}"</p>
//        <p>– {props.author}</p>
//        </div>
//     </div>
// )




export default UnitImage
