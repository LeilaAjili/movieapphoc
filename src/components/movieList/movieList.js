import React, { Component } from 'react';
import MovieCard from './movieCard';
import Loading from './loadingSpinner/loading'



import './movieList.scss';
 

class MovieList extends Component {

   
        
            
        
    render(){

    
        return (
            
            this.props.movies.map((elm, i) => (
                
                  <MovieCard
                    elm={elm}
                    label={i+1} />
                
                  
                   
                  
                )
            )


                   
            
                
        )

   
    
}}


export default Loading(MovieList)