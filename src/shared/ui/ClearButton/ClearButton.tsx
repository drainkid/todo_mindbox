import {Button} from "@mui/material";
import {TodoProps} from "../../types.tsx";
import {FC} from "react";



interface ClearButtonProps {
    value: string;
    onClear: (todos:TodoProps) => void
}

export const ClearButton:FC<ClearButtonProps> = ({value, onClear}) => {

    return (
        <div>
            <Button onClick={() => onClear}>
                {value}
            </Button>
        </div>
    );
};

export default ClearButton;