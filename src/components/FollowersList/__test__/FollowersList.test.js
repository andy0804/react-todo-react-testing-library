import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';
const MockFollowersList = () => {
  return <BrowserRouter><FollowersList/></BrowserRouter>
}
describe('Testing the Followerd List ',()=>{
    test('should render the FollowerList ', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId('follower-item-0'); 
        expect(followerDivElement).toBeInTheDocument();
      });
      test('should render all 5 items ', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findAllByTestId(/follower-item/i);
        expect(followerDivElement.length).toEqual(5);
      });
   
        
})

  
  
  
