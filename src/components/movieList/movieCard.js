import React, { Component } from 'react'
import './movieCard.scss'





const MovieCard = ({elm,label} )=> {


    let starArray = [];
    let z=elm.rate
    for (let i = 1; i <= z; i++) {
      
        starArray.push(
            <span>★</span>
          
        );
        }
    
  
        return (
            
        
            <div className="wrapper">
            <div className="card">
                <input type="checkbox" id={'card'+label}  className="more" aria-hidden="true" />
                <div className="content">
                    <div className="front" style={{backgroundImage:elm.img }}>
                        <div className="inner">
                            <h2>{elm.title}</h2>

                            <div className="rating1">
                            
                              
                              {starArray}
                             

                             </div>

                            <label for={'card'+label} className="button" aria-hidden="true">
                                Details
                            </label>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <div className="info">
                                 
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                     
                                </div>
                            </div>
                            <div className="info">
                                 
                                <div className="icon">
                                    <i className="fas fa-door-open"></i>
                                    
                                </div>
                            </div>
                  
                            <div className="description">
                                 
                                <p>{elm.desc}</p>
                            </div>
                            <div className="location">{elm.release}</div>
                             
                            <label for={'card'+label}  className="button return" aria-hidden="true">
                                <i className="fas fa-arrow-left"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
                         
        </div>

            
        );
     
    
        }

        export default MovieCard