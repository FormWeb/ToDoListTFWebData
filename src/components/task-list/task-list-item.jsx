import style from "./task-list.module.css"

const TaskListItem = (props) => {
    const { id, name, description, priority, isDone } = props
    const { onDelete, onFinish } = props

    return (
        <div className={style.itemContainer}>
            <div>
                <h3>{name} {priority === "urgente" && (<span>({priority})</span>)}</h3>
                <p>{description} </p>
            </div>
            <div>
                <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </div>
    )

}

export default TaskListItem