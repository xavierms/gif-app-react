import { useState } from "react"

import { SearchGif, GifGrid } from "./components";
import Footer from "./shared/components/layout/footer/footer";

export const GifApp = () => {
  const [gifs, setGif] = useState(['']);

  const onSearchGif = (newGif: string) => {

    const sameGif = gifs.some(
      gifs => gifs.toLowerCase() === newGif.toLowerCase()
    );
    if (!sameGif)
    setGif([newGif, ...gifs]);
  }
  return (
    <>
    
      <div className="App">
        <div className="content-app">
        <h1>Gif App</h1>

        <SearchGif
          onNewGif={(value) => onSearchGif(value)}
        />
        {
          gifs.map((gif) => (
            <GifGrid
              key={gif}
              gif={gif} />

          ))
        }
        </div>
      </div>
      <Footer />
    </>
  )
}
