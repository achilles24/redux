import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store";

const Login = () => {
  const dispatch = useDispatch();
  const disable = useSelector((state) => state.auth.disable);
  console.log(disable);
  const setLogin = () => {
    dispatch(authActions.login());
  };

  const setLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <button disabled={disable} onClick={setLogin}>
        Login
      </button>
      <button disabled={!disable} onClick={setLogout}>
        Logout
      </button>
    </>
  );
};

export default Login;
