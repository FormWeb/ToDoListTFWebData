import { useState } from "react"

const Formulaire = (props) => {

    const { onSubmit } = props

    const [name, setName] = useState("") // "Faire les courses"
    const [description, setDescription] = useState("") // ""
    const [priority, setPriority] = useState("moyenne") // "urgente"

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(name, description, priority) // onSubmit("Faire les courses", "", "urgente")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Ajouter une nouvelle tâche</h1>
            <div>
                <label>Nom</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label>Priorité</label>
                <select value={priority} onChange={e => setPriority(e.target.value)}>
                    <option value="faible">Faible</option>
                    <option value="moyenne">Moyenne</option>
                    <option value="urgente">Urgente</option>
                </select>
            </div>
            <input type="submit" value="Ajouter"/>
        </form>
    )
}

export default Formulaire