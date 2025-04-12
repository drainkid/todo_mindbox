import { render, screen, fireEvent } from '@testing-library/react'
import {TodoItem} from "../src/shared/ui";
import '@testing-library/jest-dom'

describe('TodoItem', () => {
    const mockOnToggle = jest.fn()
    const defaultProps = {
        taskName: 'Test task',
        completed: false,
        onToggle: mockOnToggle
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('renders task name correctly', () => {
        render(<TodoItem {...defaultProps} />)

        expect(screen.getByText('Test task')).toBeInTheDocument()
    })

    test('checkbox reflects completed status when false', () => {
        render(<TodoItem {...defaultProps} />)

        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).not.toBeChecked()
    })

    test('checkbox reflects completed status when true', () => {
        render(<TodoItem {...defaultProps} completed={true} />)

        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeChecked()
    })


    test('calls onToggle when checkbox is clicked', () => {
        render(<TodoItem {...defaultProps} />)

        const checkbox = screen.getByRole('checkbox')
        fireEvent.click(checkbox)

        expect(mockOnToggle).toHaveBeenCalledTimes(1)
    })



    test('renders a divider after the list item', () => {
        const { container } = render(<TodoItem {...defaultProps} />)

        const divider = container.querySelector('li.MuiDivider-root')
        expect(divider).toBeInTheDocument()
    })
})