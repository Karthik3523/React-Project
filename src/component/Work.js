import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import Testimonials from './Testimonials';

export default function Work() {
    const workInfo = [
        {
            Image : PickMeals,
            title : 'Pick Meals',
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero hic eveniet. Quidem, maxime consectetur."
        },
        {
            Image : ChooseMeals,
            title : 'Choose How Often',
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero hic eveniet. Quidem, maxime consectetur."
        },
        {
            Image : DeliveryMeals,
            title : 'Fast Deliveries',
            text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero hic eveniet. Quidem, maxime consectetur."
        },
    ]
  return (
    <>
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quibusdam ab totam officiis ut necessitatibus eaque, voluptate minus. Nihil, consequuntur?
            </p>
        </div>
        <div className="work-section-bottom">
            {
                workInfo.map((data)=>(
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.Image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
    <Testimonials />
    </>
  )
}
