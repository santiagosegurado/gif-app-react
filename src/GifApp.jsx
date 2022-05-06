import React, { useState } from 'react';
import { GifGrid } from './components/GifGrid';
import { Header } from './components/Header';


export const GifApp = () => {

    const [categories, setCategories] = useState([]);
    

    return (
        <>
            <Header 
                setCategories={ setCategories }
            />
            
            {/* <div className="btn-container">
                <button >Trendy</button>
                <button >Random</button>
            </div>   */}

            <hr />

            <div className="gif-container">
                {
                    categories.map(( category ) => (
                        
                        <GifGrid 
                            category={category} 
                            key={ category }
                        />
                    ))
                }
            </div>
            
        </>
    )
}
