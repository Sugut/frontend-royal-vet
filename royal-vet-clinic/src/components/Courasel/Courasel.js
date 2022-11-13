import React from 'react'
import Slider, { SliderItem } from '../Slider'
import img1 from "./Images/img1"
import img2 from "./Images/img2"
import img3 from "./Images/img3"
import img4 from "./Images/img4"
import img5 from "./Images/img5"
import img6 from "./Images/img6"



const Courasel = () => {
  return (
    <Slider>
        <SliderItem>
            <img src={img1} alt="" />
        </SliderItem>
        <SliderItem>
            <img src={img2} alt="" />
        </SliderItem>
        <SliderItem>
            <img src={img3} alt="" />
        </SliderItem>
        <SliderItem>
            <img src={img4} alt="" />
        </SliderItem>
        <SliderItem>
            <img src={img5} alt="" />
        </SliderItem>
        <SliderItem>
            <img src={img6} alt="" />
        </SliderItem>
    </Slider>
  )
}

export default Courasel