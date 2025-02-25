import {Divider, ListItem, TextField} from "@mui/material";
import React, {FC} from "react";

interface TodosFieldProps {
    task: string
    setTask: (value: string) => void
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export const TodosField:FC<TodosFieldProps> = ({task, setTask, handleKeyDown}) => {
    return (
        <>
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
            <Divider component="li" />
        </>

    );
};

export default TodosField;