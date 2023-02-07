import { render, screen, cleanup } from '@testing-library/react'
import { ToDo } from '../ToDo'

afterEach(() => {
    cleanup()
})

const getDoneList = (doneList) => {
    console.log(doneList)
}
test('should have an input', () => {
    render(<ToDo getDoneList={getDoneList} />)
    const toDoInput = screen.getByTestId('input-test-1');
    expect(toDoInput).toBeInTheDocument()
})
test("should have title To Do", () => {
    render(<ToDo getDoneList={getDoneList} />)
    const todoTitle = screen.getByTestId('title-test-1')
    expect(todoTitle).toBeInTheDocument()
    expect(todoTitle).toHaveTextContent('To do')
})