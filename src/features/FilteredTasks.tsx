import { TodoProps, TodoStatus } from "../shared/types.tsx";
import {TodoList} from '../shared/ui';

interface TodoItemProps {
    value: TodoProps[];
    onToggle: (id: string) => void;
    status: TodoStatus;
}

const FilteredTasks = ({ value, onToggle, status }: TodoItemProps) => {

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

    return (
        <>
            {filteredTodos.map((item) => (
                <TodoList
                    key={item.id}
                    taskName={item.taskName}
                    completed={item.completed}
                    onToggle={() => onToggle(item.id)}
                />
            ))}
        </>
    );
};

export default FilteredTasks;