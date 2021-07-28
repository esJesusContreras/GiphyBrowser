
import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['one punch man']);

    return (
        <>
            <h2>GifExpertApp</h2>            
            <AddCategory elSetCategorias = { setCategorias } />

            <ol>
            {
                categorias.map( categoria => 
                    <GifGrid 
                        key = { categoria }
                        categoria = { categoria } 
                    /> ) 
            }
            </ol>

        </>

    )
}

export default GifExpertApp



