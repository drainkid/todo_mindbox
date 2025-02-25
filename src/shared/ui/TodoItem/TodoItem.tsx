import { Checkbox, Divider, ListItem, ListItemText } from "@mui/material";

interface TodoListProps {
    taskName: string
    completed: boolean
    onToggle: () => void
}

export const TodoItem = ({ taskName, completed, onToggle }: TodoListProps) => {
    return (
        <>
            <ListItem
                onClick={onToggle}
                sx={{ cursor: "pointer" }}
            >
                <Checkbox
                    color="success"
                    checked={completed}
                    onChange={onToggle}
                    onClick={(e) => e.stopPropagation()}
                />
                <ListItemText
                    primary={taskName}
                    sx={completed
                        ? { textDecoration: 'line-through', color: 'rgba(0, 0, 0, 0.5)' }
                        : { textDecoration: 'none' }
                    }
                />
            </ListItem>
            <Divider component="li" />
        </>
    );
};