//import { Fragment } from "react"
//en lugar de importar Fragment usar <> </> que es lo mismo

const suma =(a,b)=> a+b;
export function FirstApp(){

    
    return (
        <>
        <h1>Primera aplicación</h1>
        <p>Estudiante de Ingeniería</p>
        <p>{suma(2,5)}</p>
        </>
        
        )
    
}