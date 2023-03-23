import { FC } from "react";
import { getApp } from "firebase/app";
import { useAppContext } from "../middleware/context-provider";

export const LoginForm: FC = () => {
  const [state, dispatch] = useAppContext();

const onLogin = () =>{
    console.log("Logging in! ");
    dispatch({type: "LOGIN"});
}

  return (
    <h1>
      {state.user ? <p>{state.user.displayName}</p> : <button onClick={onLogin}>Login</button>}
    </h1>
  );
};
