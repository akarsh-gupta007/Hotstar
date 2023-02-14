import React from 'react';
import Slideshow from './Slideshow';
import Moviecard from './Moviecard';


const Home = () =>{

    return(
        <>
            <div className="container-fluid">
                <div className="home-body">
                    <Slideshow />
                  
                    <Moviecard />
                </div>
            </div>
        </>
    )
}

export default Home;