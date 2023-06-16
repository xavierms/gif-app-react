import useFetchGifs from '../hooks/useFetchGifs';
import Loanding from '../shared/components/loading/loading';
import { GifItem } from './GifItem';


export const GifGrid: React.FC<GifGridProps> = ({ gif }) => {

    const { images, isLoading } = useFetchGifs( gif );

    // const [images, setImages] = useState<ImageProps[]>([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(gif);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])

    return (
        <>
        {/* <SplashScreen /> */}
            <h3> { gif }</h3>

            {   (isLoading &&  <Loanding /> ) }

            <div className='card-grid'>
                {
                    images.map( ( image ) => (
                
                        <GifItem 
                            key={image.id}
                           { ...image }
                        />
                    ))
                }
            </div>
        </>
    )

}