import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {TodoAlert} from "../src/shared/ui";
import '@testing-library/jest-dom'

describe('TodoAlert', () => {
    const mockSetOpenAlert = jest.fn()
    const defaultProps = {
        openAlert: true,
        setOpenAlert: mockSetOpenAlert,
        message: 'Test alert message',
        severity: 'success' as const
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('renders alert when openAlert is true', () => {
        render(<TodoAlert {...defaultProps} />)

        expect(screen.getByText('Test alert message')).toBeInTheDocument()
    })

    test('does not render alert content when openAlert is false', () => {
        render(<TodoAlert {...defaultProps} openAlert={false} />)

        const alertElement = screen.queryByText('Test alert message')
        expect(alertElement).not.toBeVisible()
    })

    test('displays the correct message', () => {
        render(<TodoAlert {...defaultProps} message="Такая задача уже есть" />)

        expect(screen.getByText('Такая задача уже есть')).toBeInTheDocument()
    })

    test('has the correct severity', () => {
        render(<TodoAlert {...defaultProps} />)

        const alertElement = screen.getByRole('alert')
        expect(alertElement).toHaveClass('MuiAlert-standardSuccess')
    })

    test('calls setOpenAlert when close button is clicked', async () => {
        render(<TodoAlert {...defaultProps} />)

        const closeButton = screen.getByLabelText('Close')
        await userEvent.click(closeButton)

        expect(mockSetOpenAlert).toHaveBeenCalledWith(false)
    })

    test('alert has correct positioning styles', () => {
        const { container } = render(<TodoAlert {...defaultProps} />)

        const boxElement = container.querySelector('div.MuiBox-root')
        expect(boxElement).toHaveStyle({
            position: 'fixed',
            top: '20px',
            right: '5px',
            zIndex: '1000',
            width: '200px'
        })
    })

})