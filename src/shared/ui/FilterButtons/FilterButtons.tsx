import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import {TodoStatus} from "../../types.tsx";

interface FilterButtonsProps {
    selectedStatus: TodoStatus
    onStatusChange: (status: TodoStatus) => void;
}

export const FilterButtons = ({ selectedStatus, onStatusChange }: FilterButtonsProps) => {

    const isSelected = (status: TodoStatus) => {
        return selectedStatus === status ? 'contained' : 'text';
    };

    const handleStatusButton = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement
        const button = target.closest('button')
        if (button) {
            const status = button.id as TodoStatus
            onStatusChange(status);
        }
    };

    return (
        <div>
            <ButtonGroup
                variant="text"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexGrow: 1,
                }}
                id={'button_group'}
                onClick={handleStatusButton}
            >
                <Button
                    variant={isSelected('all')}
                    id={'all'}
                >
                    All
                </Button>

                <Button
                    variant={isSelected('active')}
                    id={'active'}
                >
                    Active
                </Button>

                <Button
                    variant={isSelected('completed')}
                    id={'completed'}
                >
                    Completed
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default FilterButtons;