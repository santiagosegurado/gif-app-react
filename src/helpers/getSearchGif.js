




export const getSearchGif = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vOaFT1kaVDsR469vjHgbaOj8jwHz8I95&q=${ encodeURI( category ) }&limit=10`
    
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        imgUrl: gif.images.downsized_medium.url
    }))

    return gifs;
}