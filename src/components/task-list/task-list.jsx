import TaskListItem from "./task-list-item"

const TaskList = (props) => {

    const { tasks } = props
    const { onDeleteItem, onFinishItem } = props

    const tasksJSX = tasks.map(
        t => <TaskListItem key={t.id} {...t}
                onDelete={(id) => onDeleteItem(id)}
                onFinish={(id) => onFinishItem(id)}></TaskListItem>
    )

    return (
        <>
            {tasksJSX}
        </>
    )
}

export default TaskList