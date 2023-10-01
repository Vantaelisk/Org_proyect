import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
//Estado - hooks 
//useState --> formato: const [nombreVariable, funcionActualiza] = useState(valorInicial)
console.log(props);

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg

/*const [mostrar, actualizarMostrar] = useState(true)

const manejarClick = () => {
    console.log("coÑAZOOOOOOOOOO", !mostrar);
    actualizarMostrar(!mostrar);
}*/