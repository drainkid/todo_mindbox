import { render, screen, fireEvent } from '@testing-library/react'
import {TodosField} from "../src/shared/ui"
import '@testing-library/jest-dom'

describe('TodosField', () => {
    const mockSetTask = jest.fn()
    const mockHandleKeyDown = jest.fn()
    const defaultProps = {
        task: '',
        setTask: mockSetTask,
        handleKeyDown: mockHandleKeyDown
    };

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('renders with correct label', () => {
        render(<TodosField {...defaultProps} />)

        expect(screen.getByLabelText('What needs to be done?')).toBeInTheDocument()
    });

    test('displays the current task value', () => {
        render(<TodosField {...defaultProps} task="Buy groceries" />)

        const inputElement = screen.getByLabelText('What needs to be done?');
        expect(inputElement).toHaveValue('Buy groceries')
    });

    test('calls setTask when input value changes', () => {
        render(<TodosField {...defaultProps} />)

        const inputElement = screen.getByLabelText('What needs to be done?');
        fireEvent.change(inputElement, { target: { value: 'New task' } });

        expect(mockSetTask).toHaveBeenCalledWith('New task');
    });

    test('calls handleKeyDown when a key is pressed', () => {
        render(<TodosField {...defaultProps} />)

        const inputElement = screen.getByLabelText('What needs to be done?')
        fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })

        expect(mockHandleKeyDown).toHaveBeenCalledTimes(1)
    });

    test('renders with standard variant', () => {
        render(<TodosField {...defaultProps} />)

        const inputElement = screen.getByLabelText('What needs to be done?')
        const textField = inputElement.closest('.MuiTextField-root')

        expect(textField).toHaveClass('MuiTextField-root')
        // Check for standard variant (no outlined class)
        expect(textField).not.toHaveClass('MuiOutlinedInput-root')
    });

    test('renders divider after input', () => {
        const { container } = render(<TodosField {...defaultProps} />)

        // Find divider component
        const divider = container.querySelector('li.MuiDivider-root')
        expect(divider).toBeInTheDocument()
    })
})