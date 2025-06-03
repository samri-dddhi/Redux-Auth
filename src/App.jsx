import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import { Fragment } from 'react';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';



function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;
 