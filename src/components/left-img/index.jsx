import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import './style.css'
export const LeftImg = (props) => {


    return (
        <div className='left-img-section'>
            <div className='left-img__container'>
                <img src="https://itechstore.tn/img/cms/MBPM3.jpg" alt="" />
            </div>
            <div className='left-img__container'>
                <img src="https://itechstore.tn/img/cms/MA15.jpg" alt="" />
            </div>
        </div>
    )
}
export const LeftImg2 = (props) => {


    return (
        <div className='left-img-section'>
            <div className='left-img__container2'>
                <img src="https://itechstore.tn/img/cms/IPH16_Plan de travail 1 copie 2.png" alt="" />
            </div>
            <div className='left-img__container2'>
                <img src="https://itechstore.tn/img/cms/AIRPODS_Plan de travail 1 copie 3.png" alt="" />
            </div>
        </div>
    )
}



