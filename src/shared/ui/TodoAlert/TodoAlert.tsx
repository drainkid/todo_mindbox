import React from 'react'
import { Alert, Box, Grow, AlertColor } from '@mui/material'

interface TodoAlertProps {
    openAlert: boolean
    setOpenAlert: (value: boolean) => void
    message: string
    severity: AlertColor
}

export const TodoAlert: React.FC<TodoAlertProps> = ({openAlert, setOpenAlert, message, severity}) => {

    return (
        <div>
            <Grow in={openAlert} timeout="auto">
                <Box
                    component="div"
                    sx={{ position: 'fixed', top: 20, right: 5, zIndex: 1000, width: 200 }}
                >
                    <Alert severity={severity} onClose={() => setOpenAlert(false)}>
                        {message}
                    </Alert>
                </Box>
            </Grow>
        </div>
    );
};

export default TodoAlert;