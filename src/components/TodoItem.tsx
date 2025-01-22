import { ListItem, ListItemText, Divider, Checkbox } from "@mui/material"
import { TodoProps, TodoStatus} from "../types.tsx"

interface TodoItemProps {
    value: TodoProps[],
    onToggle: (id:string) => void,
    status: TodoStatus
}

const TodoItem = ({ value, onToggle, status }: TodoItemProps) => {


    const filteredTodos = value.filter((item) => {
        switch (status) {
            case 'active': return !item.completed
            case 'completed': return item.completed
            default: return true
        }
    })


    return (
        <>
            {
                filteredTodos.map((item) => (

                <div key={item.id}>
                    <ListItem
                        onClick={() => onToggle(item.id)}
                        sx={{ cursor: "pointer" }}
                    >
                        <Checkbox
                            id={'task_checkbox'}
                            color="success"
                            checked={item.completed} 
                            onChange={() => onToggle(item.id)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <ListItemText primary={item.taskName} />
                    </ListItem>
                    <Divider component="li" />
                </div>

            ))}
        </>

    );
};

export default TodoItem;
