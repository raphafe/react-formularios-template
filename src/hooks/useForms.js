import { useState } from "react"

const useForms = (initialState) => {

    const [formulario, setFormulario] = useState(initialState)

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setFormulario({...formulario, [name]: value})
        
    }

    const limpaCampo = () => {
        setFormulario(initialState)
    }
    return [formulario, onChangeInput, limpaCampo]
}

export default useForms;