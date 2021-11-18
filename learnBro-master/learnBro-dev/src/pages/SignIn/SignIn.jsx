import React from "react";
import "./SignIn.css";
import Form from '../../components/Form/Form';
import {config} from "./SignInConfig"

export default function SignIn() {
  return (
    <div className="Log">
      <h1>Log in</h1>
      <Form
        config={config}
        to="/reg"
        titleLink="Sign Up"
        title="Sign In"/>
    </div>
  );
}
