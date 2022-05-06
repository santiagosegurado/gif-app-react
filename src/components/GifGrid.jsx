import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetch } from '../hooks/useFetch';
import '../styles/gif-grid.css';

export const GifGrid = ({ category }) => {

    
    const { loading, data:gifs } = useFetch(category);


    if (loading) {
        
        return(

            <span className="spinner spinner-large"></span>

        )
    
    }else {

        return (
            
            <article className="animate__animated animate__fadeIn">
                
                
                <h3>{ category }</h3>
                
                {
                    gifs.map(gif => (
                        <GifGridItem 
                            key={gif.id} 
                            {...gif}
                        />
                    ))
                }
            </article>
        )
    }
    
}
