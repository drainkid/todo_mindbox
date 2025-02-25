import {ListItem, TextField} from "@mui/material";
import React, {FC} from "react";

interface TodosFieldProps {
    task: string; // Текущее значение текстового поля
    setTask: (value: string) => void; // Функция для обновления значения
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void; // Обработчик нажатия клавиши
}

export const TodosField:FC<TodosFieldProps> = ({task, setTask, handleKeyDown}) => {
    return (
        <ListItem>
            <TextField
                id='task_input'
                fullWidth
                label='What needs to be done?'
                value={task}
                onChange={e => setTask(e.target.value)}
                onKeyDown={handleKeyDown}
                sx={{border: 'white'}}
                variant='standard'
            />
        </ListItem>
    );
};

export default TodosField;