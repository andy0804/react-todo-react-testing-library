import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';
const MockToDo = () =>{
    return <BrowserRouter><Todo /></BrowserRouter>
}
describe('Testing the Todp',()=>{
    test('should render ToDo', () => {
        render(<MockToDo/>);
        const inputElement = screen.getByPlaceholderText("Add a new task here...")
        const buttonElement = screen.getByRole("button",{name:"Add"});
        fireEvent.change(inputElement,{target:{value:"Get eggs"}})
        fireEvent.click(buttonElement);
        const divElement = screen.getByText("Get eggs");
        expect(divElement).toBeTruthy();

      });
      test('can Add Multiple items', () => {
        render(<MockToDo/>);
        const inputElement = screen.getByPlaceholderText("Add a new task here...")
        const buttonElement = screen.getByRole("button",{name:"Add"});
        fireEvent.change(inputElement,{target:{value:"Get eggs"}})
        fireEvent.click(buttonElement);
        fireEvent.change(inputElement,{target:{value:"Get Books"}})
        fireEvent.click(buttonElement);
        const divElement = screen.getAllByTestId("tasks-container");
        expect(divElement.length).toEqual(2);
  
      });
      test('Items do not have active class after adding', () => {
        render(<MockToDo/>);
        const inputElement = screen.getByPlaceholderText("Add a new task here...")
        const buttonElement = screen.getByRole("button",{name:"Add"});
        fireEvent.change(inputElement,{target:{value:"Get eggs"}})
        fireEvent.click(buttonElement);
        const divElement = screen.getByText("Get eggs");
        expect(divElement).not.toHaveClass('todo-item-active');
  
      });
      test('Items to  have active class after clicking', () => {
        render(<MockToDo/>);
        const inputElement = screen.getByPlaceholderText("Add a new task here...")
        const buttonElement = screen.getByRole("button",{name:"Add"});
        fireEvent.change(inputElement,{target:{value:"Get eggs"}})
        fireEvent.click(buttonElement);
        const divElement = screen.getByText("Get eggs");
        fireEvent.click(divElement);
        expect(divElement).toHaveClass('todo-item-active');
  
      });
   
   
        
})

  
  
  
