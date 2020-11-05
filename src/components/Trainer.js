import React from 'react';
import './Trainer.css';
import { AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';

function Trainer({ name, section }) {
    return (
        <div className="trainer">
            <div className="trainer__details">
                <div className="trainer__details-logo">
                    <AiOutlineUser className="trainer__details-icon"/>
                </div>
                <div className="">
                    <p>{name}</p>
                    <h6>{section}</h6>
                </div>
            </div>
            <div className="trainer__message">
                <AiOutlineMessage />
            </div>
        </div>
    )
}

export default Trainer
