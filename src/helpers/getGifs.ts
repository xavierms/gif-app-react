import { ImageProps } from "../props/ImageProps";

export const getGifs = async(category: string) =>{

    const apiKey ='BQXzO7qSjJrS0eHhTSLv5t6ehHJ1nRNV';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10&offset=2&rating=g&lang=en`;
    const resp = await fetch( url );
    const { data } = await resp.json();

     const gifs = [...data]
    console.log(gifs);
    return gifs;
}
