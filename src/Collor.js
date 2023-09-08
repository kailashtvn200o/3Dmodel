import React, { useState } from 'react';
import './Collor.css'
import image1 from './img/Group 8.jpg'
import image2 from './img/Group 5 (1).jpg'
import image3 from './img/Group 8 (1).jpg'
import image4 from './img/Group 9 (1).jpg'
import image5 from './img/Group 5.jpg'
import image6 from './img/Group 9.jpg'
import img1 from './img/Darts.jpg'
import img2 from './img/Deep Darts.jpg'
import img3 from './img/Side Pleats.jpg'
import img4 from './img/No Pleats.jpg'
import img5 from './img/Box Pleats.jpg'
import imge1 from './img/Concealed Placket.jpg'
import imge2 from './img/French Placket.jpg'
import imge3 from './img/Regular Placket.jpg'
import ime1 from './img/Short Sleeves.jpg'
import ime2 from './img/Long Sleeves.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Collor() {
    const [showimgone, setshowimageone] = useState(true)
    const [showimgtwo, setshowimagetwo] = useState(false)
    const [showimgthree, setshowimagethree] = useState(false)
    const [showimgfour, setshowimagefour] = useState(false)
    const onclickone = () => {
        setshowimagetwo(false)
        setshowimageone(true)
        setshowimagethree(false)
        setshowimagefour(false)

    }
    const onclicktwo = () => {
        setshowimagetwo(true)
        setshowimageone(false)
        setshowimagethree(false)
        setshowimagefour(false)
    }
    const onclickthree = () => {
        setshowimagetwo(false)
        setshowimageone(false)
        setshowimagethree(true)
        setshowimagefour(false)
    }
    const onclickfour = () => {
        setshowimagetwo(false)
        setshowimageone(false)
        setshowimagethree(false)
        setshowimagefour(true)
    }
    return (
        <>
            <div className='rectangle1'>
                <div className='collor' onClick={onclickone}>COLLOR</div>
                <div className='back' onClick={onclicktwo}>BACKS</div>
                <div className='plackets' onClick={onclickthree}>PLACKETS</div>
                <div className='sleeves' onClick={onclickfour}>SLEEVES</div>
            </div>
            <div class="container">
                <div class="row">
                    {showimgone ?
                        <>
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
                        </> : null}
                    <div class="container">
                        <div class="row">
                            {showimgtwo ?
                                <>
                                    <div class="col-2">
                                        <img className='image1' src={img1} />
                                    </div>
                                    <div class="col-2">
                                        <img className='image2' src={img2} />
                                    </div>
                                    <div class="col-2">
                                        <img className='image3' src={img3} />
                                    </div>
                                    <div class="col-2">
                                        <img className='image4' src={img4} />
                                    </div>
                                    <div class="col-2">
                                        <img className='image5' src={img5} />
                                    </div>

                                </> : null}
                            <div class="container">
                                <div class="row">
                                    {showimgthree ?
                                        <>
                                            <div class="col-2">
                                                <img className='imc1' src={imge1} />
                                            </div>
                                            <div class="col-2">
                                                <img className='imc2' src={imge2} />
                                            </div>
                                            <div class="col-2">
                                                <img className='imc3' src={imge3} />
                                            </div>
                                        </> : null}
                                </div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    {showimgfour ?
                                        <>
                                            <div class="col-2">
                                                <img className='ime1' src={ime1} />
                                            </div>
                                            <div class="col-2">
                                                <img className='ime2' src={ime2} />
                                            </div>
                                        </> : null}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
