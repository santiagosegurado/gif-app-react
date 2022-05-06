


export const getTrendyGif = async() => {
    
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=d3rXxEfhUIjnoVfGQ2JIxUboqcWp67T6&limit=10`
    
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        imgUrl: gif.images.downsized_medium.url
    }))

    return gifs;

}
