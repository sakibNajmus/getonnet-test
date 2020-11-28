import React from 'react';
import './Mail.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const email = <FontAwesomeIcon icon={faEnvelope} />;

const Mail = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <section className="mailing-list mt-5 mb-3">
            <h4>Join our mailing list.</h4>
            <p>Recieve 15% off your order at checkout and save today!</p>

            <div className="mail-form d-flex  align-items-center justify-content-center">
                <div className="pass-wrapper mt-3 ">
                    <input
                    className="py-4 form-control"
                    name="email"
                    type="email"
                    placeholder="Email"
                    ref={register({ required: "This is required." })}
                    />
                    <i>{email}</i>
                </div>
                <div className="mail-btn">
                    <button type="submit" className="btn-main ml-3 mt-3" onClick={handleSubmit(onSubmit)}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </section>
    );
};

export default Mail;