import { useContext } from 'react';
import { AppState } from '../App';

function Home() {
  const { user } = useContext(AppState);

  return (
    <div>
      <h1>Home Page</h1>
      {/* <br />
      <br />
      {user ? (
        <h1>Welcome: {user.username}</h1>
      ) : (
        <h1>Loading user data...</h1>
      )} */}
    </div>
  );
}

export default Home;
