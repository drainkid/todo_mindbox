import {Button} from "@mui/material";
import {FC, ReactNode} from "react";



interface ClearButtonProps {
    onClear: () => void
    children?: ReactNode;

}

export const ClearButton:FC<ClearButtonProps> = ({children, onClear}) => {

    const handleClick = () => {
        onClear(); // Вызываем переданный обработчик
    }
    
    return (
            <Button
                onClick={handleClick}
            >
                {children}
            </Button>
    );
};

export default ClearButton;