 /**
  * Tarea 1:
  * Crear un componente llamado CouterApp
  * El contenido debe tener:
  * <h1>CounterApp</h1>
    <h2>{value}</h2>
  * value es una propiedad enviada desde el padre hacia el componente CounterApp y usando protoTypes, obligado que sea númerico

  */
 
 
import ProtoTypes from 'prop-types'
import { useState } from 'react';

 export const CounterApp = (props)=>{

    const {value}=props; //uso de las propiedades de los componentes
    const[counter, setCounter] = useState(value); // uso de hooks

//funcion que ira al hacer click en mas 1
    function aumentarCounter(e){
        
        setCounter(counter+1)
    }
//Funcion para reducir contador
    const reducirCounter = (e) =>{

        setCounter(counter-1)
    }

//Funcion para reiniciar contador

const reiniciarCounter = (e)=>{
    setCounter(value)
}

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            
            <button onClick={aumentarCounter}>
                +1
            </button>

            <button onClick={reducirCounter}>
                -1
            </button>

            <button onClick={reiniciarCounter}>
                Reset
            </button>
        </>

    )

 }

//Defino del tipo de value que debe ser númerico

CounterApp.protoTypes = {
    value: ProtoTypes.number.isRequired,
}

//Hago el tipo por default

CounterApp.defaultProps = {
    value: 123,
}