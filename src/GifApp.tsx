import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const obj = ['DBZ'];
  const [ categories, setCategories ] = useState(obj);

  const onAddCategory = (newCategory: string) => {

    const sameCategory = categories.some( 
        category => category.toLowerCase() === newCategory.toLowerCase()
         );
    if(!sameCategory)
    setCategories([ newCategory, ...categories ]);
  }
  return (
    <>
      <h1>GifApp</h1>

      <AddCategory 
          onNewCategory={ (value) => onAddCategory(value) }
          // onNewCategory={ onAddCategory }
        // setCategories={setCategories} 
        />
      {/* <button type="button" >Agregar</button> */}
      {
          categories.map( ( category )=> (
            <GifGrid  
                key={ category }
                category={ category } />

          ))
      }
    </>
  )
}
