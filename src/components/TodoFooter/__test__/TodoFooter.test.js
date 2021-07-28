import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom"
import TodoFooter from '../TodoFooter';

const MockToDoFooter = (incompleteTasks) => {
    return <BrowserRouter>
             <TodoFooter numberOfIncompleteTasks= {incompleteTasks}></TodoFooter>
        </BrowserRouter>
}

describe('Testing the footer',()=>{
    test('should render ToDoFooter when tasks is greater than 1 ', () => {
        render(MockToDoFooter(5));
        const toDoFooterElement = screen.getByText(/5 tasks/i);
        expect(toDoFooterElement).toBeInTheDocument();
      });
      test('should render ToDoFooter when tasks is equal to  1 ', () => {
          render(MockToDoFooter(1));
          const toDoFooterElement = screen.getByText(/1 task/i);
          expect(toDoFooterElement).toBeInTheDocument();
        });
      test('should render ToDoFooter when tasks is equal to  1 [using getTestById] ', () => {
          render(MockToDoFooter(1));
          const toDoFooterElement = screen.getByTestId("para");
          expect(toDoFooterElement.textContent).toBe("1 task left");
        });
})
