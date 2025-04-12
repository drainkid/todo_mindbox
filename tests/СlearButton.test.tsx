import { render, screen, fireEvent } from '@testing-library/react'
import {ClearButton} from "../src/shared/ui";
import '@testing-library/jest-dom'

describe('ClearButton', () => {
    const mockOnClear = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('renders button with children', () => {
        render(<ClearButton onClear={mockOnClear}>Clear All</ClearButton>)

        expect(screen.getByRole('button', { name: 'Clear All' })).toBeInTheDocument()
    })

    test('calls onClear when clicked', () => {
        render(<ClearButton onClear={mockOnClear}>Clear All</ClearButton>)

        const button = screen.getByRole('button', { name: 'Clear All' })
        fireEvent.click(button)

        expect(mockOnClear).toHaveBeenCalledTimes(1)
    })

})