import React from 'react';
import '../styles/loader.css'

const Loader = (props) => {
    return (
        <React.Fragment>
            <div className="container-loader" style={{height:props.height}}>
                <div className="d-flex flex-column justify-content-center align-items-center" 
                style={{transform:'scale('+props.scale+')'}}>
                    <div class="loader">
                        <div class="loader-inner"></div>
                        <div class="loader-inner"></div>
                        <div class="loader-inner"></div>
                    </div>
                    <p style={{visibility:props.loading}}>Loading...</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Loader;