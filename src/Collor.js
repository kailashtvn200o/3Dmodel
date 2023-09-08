import React from 'react'
import './Collor.css'
import image1 from './img/Group 8.jpg'
import image2 from './img/Group 5 (1).jpg'
import image3 from './img/Group 8 (1).jpg'
import image4 from './img/Group 9 (1).jpg'
import image5 from './img/Group 5.jpg'
import image6 from './img/Group 9.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Collor() {

    return (
        <>
            <div className='rectangle1'>
                <div className='collor'>COLLOR</div>
                <div className='back'>BACKS</div>
                <div className='plackets'>PLACKETS</div>
                <div className='sleeves'>SLEEVES</div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <img className='img1' src={image1} />
                    </div>
                    <div class="col-2">
                        <img className='img2' src={image2} />
                    </div>
                    <div class="col-2">
                    <img className='img3' src={image3} />
                    </div>
                    <div class="col-2">
                    <img className='img4' src={image4} />
                    </div>
                    <div class="col-2">
                    <img className='img5' src={image5} />
                    </div>
                    <div class="col-2">
                    <img className='img6' src={image6} />
                    </div>

                </div>
            </div>
            


        </>
    )
}
