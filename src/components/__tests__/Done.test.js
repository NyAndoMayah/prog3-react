import {Done} from '../Done'
import {render, screen, cleanup} from '@testing-library/react'

afterEach(() => {
    cleanup()
})

const doneList = ["task1", "task2", "task3"]
test("should have title Done", () => {
    render(<Done doneList={doneList}/>)
    const doneTitle = screen.getByTestId('title-test-2')
    expect(doneTitle).toBeInTheDocument()
    expect(doneTitle).toHaveTextContent('Done')
})
test('should contains completed tasks', () => {
    render(<Done doneList={doneList}/>)
    const elementOne = screen.getByTestId('task1')
    expect(elementOne).toBeInTheDocument()
    expect(elementOne).toHaveTextContent('task2')
    const elementTwo = screen.getByTestId('task2')
    expect(elementTwo).toBeInTheDocument()
    expect(elementTwo).toHaveTextContent('task3')
    const elementThree = screen.getByTestId('task3')
    expect(elementThree).toBeInTheDocument()
    expect(elementThree).toHaveTextContent('task3')
})