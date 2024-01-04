 /**
  * Tarea 1:
  * Crear un componente llamado CouterApp
  * El contenido debe tener:
  * <h1>CounterApp</h1>
    <h2>{value}</h2>
  * value es una propiedad enviada desde el padre hacia el componente CounterApp y usando protoTypes, obligado que sea númerico

  */
 
 
 import ProtoTypes from 'prop-types'

 export const CounterApp = (props)=>{

    const {value}=props;

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
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