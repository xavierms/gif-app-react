import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { ImageProps } from "../props/ImageProps";

  
  const useFetchGifs = (gif: string) => {
        const [images, setImages] = useState<ImageProps[]>([]);
        const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(gif);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
    return {
        images,
        isLoading
    }
  }

  export default useFetchGifs;