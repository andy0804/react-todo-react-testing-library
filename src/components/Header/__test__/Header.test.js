import { render, screen } from '@testing-library/react';
import Header from '../Header';
describe('Testing the Header',()=>{
    test('should render the tile based on text passed [using getByText] ', () => {
        render(<Header title="My Header" />);
        const headerEleent = screen.getByText(/My Header/i);
        expect(headerEleent).toBeInTheDocument();
      });
      test('should render the title based on text passed [using getByRole]', () => {
          render(<Header title="My Header" />);
          const headerEleent = screen.getByRole("heading",{name:'My Header'});
          expect(headerEleent).toBeInTheDocument();
        });
      test('should render the title based on text passed [using getByTitle]', () => {
          render(<Header title="My Header" />); 
          const headerEleent = screen.getByTitle("headerTitle");
          expect(headerEleent).toBeInTheDocument();
        });
      test('should render the title based on text passed [using getByTestId]', () => {
          render(<Header title="My Header" />); 
          const headerEleent = screen.getByTestId("header-2");
          expect(headerEleent).toBeInTheDocument();
        });
      
      test('should render the title based on text passed [using findByTestId]',  async () => {
          render(<Header title="My Header" />); 
          const headerEleent = await screen.findByTestId("header-2");
          expect(headerEleent).toBeInTheDocument();
        });
      
        test('ensure that text Dog does not exist',  async () => {
          render(<Header title="My Header" />); 
          const headerEleent = await screen.queryByText(/Dig/i);
          expect(headerEleent).not.toBeInTheDocument();
        });
      
        test('get all by role [Heading]',  async () => {
          render(<Header title="My Header" />); 
          const headerElements = await screen.getAllByRole('heading');
          expect(headerElements.length).toEqual(3);
        });
        
})

  
  
  
