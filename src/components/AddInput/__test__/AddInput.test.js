import { render, screen ,fireEvent} from '@testing-library/react';
import AddInput from '../AddInput';
const mockSetTodo = jest.fn()
describe('Testing the Header',()=>{
    test('should render Input Element', () => {
        render(   <AddInput 
            setTodos={mockSetTodo}
            todos={[]}
        />);
        const headerEleent = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(headerEleent).toBeInTheDocument();
      });

      test('should be able to type', () => {
        render(   <AddInput 
            setTodos={mockSetTodo}
            todos={[]}
        />);
        const INPUTELEMENT = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(INPUTELEMENT,{target:{value:"Go Grocery Shopping"}})
        expect(INPUTELEMENT.value).toBe("Go Grocery Shopping");
      });/Add a new task here.../i


      
      test('should have empty when add button is clicked', () => {
        render(   <AddInput 
            setTodos={mockSetTodo}
            todos={[]}
        />);
        const INPUTELEMENT = screen.getByPlaceholderText(/Add a new task here.../i);
        const addButton = screen.getByRole("button",{name:"Add"})
        fireEvent.change(INPUTELEMENT,{target:{value:"Go Grocery Shopping"}})
        fireEvent.click(addButton)
        expect(INPUTELEMENT.value).toBe("");
      });
      
   
        
})

  
  
  
