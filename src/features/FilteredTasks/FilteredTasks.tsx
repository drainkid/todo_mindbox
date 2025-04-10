import { TodoProps, TodoStatus } from "../../shared/types.tsx";
import {TodoItem} from '../../shared/ui';

interface TodoItemProps {
    value: TodoProps[];
    status: TodoStatus;
    setTodos: (value: (prev: TodoProps[]) => TodoProps[]) => void;
}

export const FilteredTasks = ({ value, status, setTodos }: TodoItemProps) => {

    const filteredTodos = value.filter((item) => {
        switch (status) {
            case 'active':
                return !item.completed;
            case 'completed':
                return item.completed;
            default:
                return true;
        }
    })

    const handleToggle = (id: string) => {
        setTodos((prev) =>
            prev.map((item) =>
                item.id === id ? {...item, completed: !item.completed} : item
            )
        )
    }

    return (
        <>
            {filteredTodos.map((item) => (
                <TodoItem
                    key={item.id}
                    taskName={item.taskName}
                    completed={item.completed}
                    onToggle={() => handleToggle(item.id)}
                />
            ))}
        </>
    );
};

export default FilteredTasks;