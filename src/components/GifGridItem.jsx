import React from 'react';
import '../styles/gif-grid-item.css';

export const GifGridItem = ( { imgUrl, title } ) => {
    
    return (
    <div className='gif-img-container' >
        <img 
            src={ imgUrl } 
            alt={ title }
            className='img-gif'
        />
    </div>
    )
}
