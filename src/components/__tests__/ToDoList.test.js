import {render, screen, cleanup} from '@testing-library/react'
import { ToDoList } from '../ToDoList'

afterEach(() => {
    cleanup()
})

test("should have title To Do List", () => {
    render(<ToDoList/>)
    const todoListTitle = screen.getByTestId('bigTitle-test-1')
    expect(todoListTitle).toBeInTheDocument()
    expect(todoListTitle).toHaveTextContent('To Do List')
})