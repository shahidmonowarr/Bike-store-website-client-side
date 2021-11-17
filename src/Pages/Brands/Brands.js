import React from 'react';

import image1 from '../../images/tvs.jpg'
import image2 from '../../images/suzuki.jpg'
import image3 from '../../images/bajaj.jpg'
import image4 from '../../images/yamaha.jpg'

const Brands = () => {
    return (
        <div className="container my-5">
            <h2 className="title">Our Brands</h2>
            <div className="row text-center mt-4">
                <div className="col-md-3 col-sm-4">
                    <div>
                        <img className="img-fluid w-75" src={image4} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-4">
                    <div>
                        <img className="img-fluid w-75" src={image3} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-4">
                    <div>
                        <img className="img-fluid w-75" src={image2} alt="" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-4">
                    <div>
                        <img className="img-fluid w-75" src={image1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;