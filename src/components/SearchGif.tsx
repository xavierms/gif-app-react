import { ChangeEvent, FormEvent, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { SearchGifProps } from "../props/SearchGifProps";
  
export const SearchGif = ({ onNewGif } : SearchGifProps) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const gif = inputValue.trim();
        if ( !gif.length ) return;

        // setCategories((categories: string[]) => [ inputValue, ...categories ])
        onNewGif( gif );
        setInputValue('');
    }
    const onSearchClick = (event: any) => {
        event.preventDefault();
        onSubmit(event);
      };
      
    return (
        <form onSubmit={ onSubmit }>

            <input
                type="text"
                placeholder="Search gif"
                value={ inputValue }
                onChange={ onInputChange }
                className="search-input" />
                <FontAwesomeIcon 
                    icon={ faSearch } 
                    className="search-icon" 
                    onClick={ onSearchClick }/>
        </form>
    )
}