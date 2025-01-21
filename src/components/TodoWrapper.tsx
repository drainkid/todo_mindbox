import {Box, Button, ButtonGroup, Container, Divider, List, ListItem, TextField, Typography} from "@mui/material";
import {useState} from "react";
import TodoItem from "./TodoItem.tsx";
import {TodoProps} from "../types.tsx";
import {TodoStatus} from "../types.tsx";
import { v4 as uuidv4 } from "uuid";




const TodoWrapper = () => {

    const [task, setTask] = useState('')
    const [todo, setTodo] = useState<TodoProps[]>([])
    const [selectedButton, setSelectedButton] = useState<TodoStatus>('all');


    const ListStyle = {
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
    };

    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === 'Enter' && task.trim() !== '') {
            setTodo(prev =>[
                ...prev,
                {id: uuidv4(), completed: false, taskName: task,}
            ])
            setTask('')
        }
    }

    const handleToggle = (id: string) => {
        setTodo((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, completed: !item.completed,} : item
            )
        )
    }

    const isSelected = (status: TodoStatus) => selectedButton === status ? 'contained' : 'text';


    return (
        <div>
            <Container>

                <Typography variant="h1" sx={{textAlign:'center'}}>
                    todos
                </Typography>

                <List sx={ListStyle} id = {'todo_list'}>
                    <ListItem >
                        <TextField
                            id= 'task_input'
                            fullWidth
                            label= 'What needs to be done?'
                            value={task}
                            onChange={e => setTask(e.target.value)}
                            onKeyDown={handleKeyDown}
                            sx={{border:'white'}}
                            variant='standard'
                        />

                    </ListItem>

                    <Divider component={'li'} />
                    <TodoItem val={todo} onToggle={handleToggle} status = {selectedButton}/>

                    <Box component="li" sx={{textAlign: "center"}}>

                        <ButtonGroup variant="text" sx = {{m:2}} id={'button_group'}>
                            <Button
                                onClick={() => setSelectedButton('all')}
                                variant={isSelected('all')}
                                id = {'all_button'}
                            >
                                All
                            </Button>

                            <Button
                                onClick={() => setSelectedButton('active')}
                                variant={isSelected('active')}
                                id = {'active_button'}
                            >
                                Active
                            </Button>

                            <Button
                                onClick={() => setSelectedButton('completed')}
                                variant={isSelected('completed')}
                                id = {'completed_button'}
                            >
                                Completed
                            </Button>

                        </ButtonGroup>

                    </Box>

                </List>
            </Container>
        </div>
    );
};

export default TodoWrapper;