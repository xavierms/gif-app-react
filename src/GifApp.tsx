import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const obj = ['BDZ', 'DBZ', 'GT'];
  const [ categories, setCategories ] = useState(obj);

  const onAddCategory = (newCategory: string) => {
    setCategories([newCategory,...categories])
  }
  return (
    <>
      <h1>GifApp</h1>

      <AddCategory 
          onNewCategory={ onAddCategory }
        // setCategories={setCategories} 
        />
      <button type="button" >Agregar</button>
      <ol>
        {
          categories.map(category => {
            return <li key={ category }>{ category }</li>
          })
        }
      </ol>
    </>
  )
}
