import { render, screen, fireEvent } from '@testing-library/react'
import {FilterButtons} from "../src/shared/ui";
import '@testing-library/jest-dom'

describe('FilterButtons', () => {
    const mockOnStatusChange = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('renders all three filter buttons', () => {
        render(<FilterButtons selectedStatus="all" onStatusChange={mockOnStatusChange} />)

        expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Active' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Completed' })).toBeInTheDocument()
    })

    test('calls onStatusChange with correct status when a button is clicked', () => {
        render(<FilterButtons selectedStatus="all" onStatusChange={mockOnStatusChange} />)

        const completedButton = screen.getByRole('button', { name: 'Completed' })
        fireEvent.click(completedButton)

        expect(mockOnStatusChange).toHaveBeenCalledWith('completed')
    })

    test('buttons have correct IDs', () => {
        render(<FilterButtons selectedStatus="all" onStatusChange={mockOnStatusChange} />)

        expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('id', 'all')
        expect(screen.getByRole('button', { name: 'Active' })).toHaveAttribute('id', 'active')
        expect(screen.getByRole('button', { name: 'Completed' })).toHaveAttribute('id', 'completed')
    })

})