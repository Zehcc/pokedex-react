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
        if(!pokemon){
            alert('Escribe algo!')
        } else {
            setUrl(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        }  
    }

    const handleInputChange = (e) => {
    setInputValue(e.target.value)
    }

  return (
    <div className='pokedex'>
        <div className='seekerImg'>
            <img src="https://reliccastle.com/attachments/8304/" alt="seekerIMG"/>
        </div>
        <form className='form'  onSubmit={(e)=>searchPokemon(e,inputValue.toLocaleLowerCase())}>
            <input onChange={handleInputChange} placeholder="Escribe el nombre de un pokemon" value = {inputValue} type="text" />
            <Searchbtn/>
        </form>
        {pokemon && <Pokemon pokemon= {pokemon}/>}
    </div>
  )
}

export default Form