//import { Fragment } from "react"
//en lugar de importar Fragment usar <> </> que es lo mismo

//Usar tipos en los componentes con proptypes
import PropTypes from 'prop-types'
const suma =(a,b)=> a+b;

export function FirstApp(props){

    const {title, subtitle}= props;
    
    return (
        <>
        <h1>Primera aplicación</h1>
        <p>Estudiante de Ingeniería</p>
        <p>{suma(2,5)}</p>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        </>
        
        )

    
}

 //Creando los tipos para cada propiedad

 FirstApp.propTypes={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
 }