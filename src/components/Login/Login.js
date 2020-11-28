import React, { useState } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEmail, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const email = <FontAwesomeIcon icon={faEnvelope} />;

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="login mb-3">
            <h3 style={{color: 'black'}} className="text-left">Login</h3>
            <div className="pass-wrapper mt-3">
                <input
                className="py-4 form-control"
                name="email"
                type="email"
                placeholder="Email"
                ref={register({ required: "This is required." })}
                />
                <i>{email}</i>
            </div>
            <div className="pass-wrapper my-3">
                <input
                className="py-4 form-control"
                placeholder="Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                ref={register({ required: "This is required." })}
                />
                <i onClick={togglePasswordVisiblity}>{eye}</i>
            </div>
            <button type="submit" className="btn-main" onClick={handleSubmit(onSubmit)}>
                Submit
            </button>
        </div>
    );
};

export default Login;