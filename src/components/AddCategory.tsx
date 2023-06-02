import { ChangeEvent, FormEvent, useState } from "react";
import { AddCategoryProps } from "../interfaces/AddCategoryProps";

  
export const AddCategory = ({ onNewCategory }:AddCategoryProps) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const category = inputValue.trim();
        if ( !category.length ) return;

        // setCategories((categories: string[]) => [ inputValue, ...categories ])
        onNewCategory( category );
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="Search gif"
                value={inputValue}
                onChange={ onInputChange } />
        </form>
    )
}