import {
    Box,
    Container,
    Divider,
    List,
    Typography
} from "@mui/material"
import {useEffect, useState} from "react"
import FilteredTasks from "./FilteredTasks.tsx"
import {TodoProps, TodoStatus} from "../shared/types.tsx"
import {TodoAlert, FilterButtons, ClearButton, TodosField} from "../shared/ui"
import {getUniqueId} from "../shared/lib/utils.ts"


const TodoWrapper = () => {

    const [task, setTask] = useState('')
    const [todos, setTodos] = useState<TodoProps[]>([])
    const [selectedStatusButton, setSelectedStatusButton] = useState<TodoStatus>('all')
    const [openAlert, setOpenAlert] = useState<boolean>(false)

    useEffect(() => {
        if (openAlert) {
            const timer = setTimeout(() => setOpenAlert(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [openAlert])

    const handleKeyDown = (e: { key: string }) => {
        if (e.key === 'Enter' && task.trim() !== '') {
            const isDuplicate = todos.some((todo) => todo.taskName === task.trim())
            if (isDuplicate) {
                setTask('')
                setOpenAlert(true)
            } else {
                setTodos((prev) => [
                    ...prev,
                    { id: getUniqueId(), completed: false, taskName: task.trim() },
                ]);
                setTask('')
            }
        }
    }


    const handleToggle = (id: string) => {
        setTodos((prev) =>
            prev.map((item) =>
                item.id === id ? {...item, completed: !item.completed} : item
            )
        )
    }

    const todosLeft = todos.filter((item) => !item.completed)

    const clearCompletedTasks = () => {

        setTodos(prev => prev.filter((item) => !item.completed))

    }

    return (
        <div>
            <Container>
                <Typography variant="h1" sx={{textAlign:'center'}}>
                    todos
                </Typography>

                <TodoAlert
                    openAlert={openAlert}
                    setOpenAlert={setOpenAlert}
                    severity={'warning'}
                    message = {'Такая задача уже существует'}
                />

                <List
                    sx={
                    {
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.paper'
                    }
                }
                      id={'todo_list'}
                >
                    <TodosField task={task} setTask={setTask} handleKeyDown={handleKeyDown} />
                    <Divider component={'li'}/>
                    <FilteredTasks value={todos} onToggle={handleToggle} status={selectedStatusButton}/>
                    <Box
                        component="li"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '5px',
                            m: 2
                        }}
                    >
                        <Typography component={'h6'}>
                            {todosLeft.length} items left
                        </Typography>
                        <FilterButtons selectedStatus={selectedStatusButton} onStatusChange={setSelectedStatusButton}/>
                        <ClearButton onClear={clearCompletedTasks} value={'clear completed'}/>
                    </Box>
                </List>
            </Container>
        </div>
    )
};

export default TodoWrapper;