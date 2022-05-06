import { useEffect, useState } from "react"
import { getSearchGif } from "../helpers/getSearchGif";

/**
 * 
 * @param {string} category recibe una categoria de gif de tipo string 
 * @returns { state } retorna un objeto con la data y el loading 
 */

export const useFetch = (category) => {
    

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
            
          
        setTimeout(() => {
            
            getSearchGif(category).then( gif => {
                setState({ 
                    data: gif,
                    loading: false
                })
            })
            
        }, 1000);
                    
                    
           
              
    }, [category]);
    

    return state;
}
