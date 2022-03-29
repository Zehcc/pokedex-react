import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {FcSearch as Searchbtn} from "react-icons/fc";
import Pokemon from '../Pokemon/Pokemon';


const Form = () => {

    const [inputValue, setInputValue] = useState('');
    const [pokemon, setPokemon] = useState("");
    const [url,setUrl] = useState(null);

    useEffect(() => {
        if(url) {
        axios
            .get(url)
            .then((resultjs)=>{
                setPokemon(resultjs.data)
                setInputValue('')
            }, (error) => {
                alert(inputValue + ' no está en la lista')
                setInputValue('')
            })
        }
    }, [url]);

    const searchPokemon = (e,pokemon) => {
        e.preventDefault()
        setUrl(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    }

    const handleInputChange = (e) => {
    setInputValue(e.target.value)
    }

  return (
    <div>
        <form onSubmit={(e)=>searchPokemon(e,inputValue.toLocaleLowerCase())}>
            <input onChange={handleInputChange} value = {inputValue} type="text" />
            <Searchbtn/>
        </form>
        <div> 
        {pokemon &&  <Pokemon pokemon= {pokemon}/>}
        </div>
    </div>
  )
}

export default Form