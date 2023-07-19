import { UserProvider } from './contexts/User';
import Nav from './navigators/Nav';

export default function App() {
  
  return (
    <UserProvider>
      <Nav/>
    </UserProvider>
  );
}
