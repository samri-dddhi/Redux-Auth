import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index'; // Assuming you have authActions defined in your store

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    // Add your login logic here, e.g., dispatching an action to authenticate the user
    dispatch(authActions.login());
  };
  
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main> 
  );
};

export default Auth;
