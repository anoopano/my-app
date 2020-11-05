import React from 'react';
import './TodoCard.css';
import { RiMore2Fill } from 'react-icons/ri';

function TodoCard({ name, time, warmUpDuration, exercise, background, shadow }) {
    return (
        <div className="todoCard" style={{ backgroundColor: background ,boxShadow: shadow}}>
            <div className="todoCard__name">
                <h4>{name}</h4>
                <div>Sport Club</div>
                <h5>{time}</h5>
            </div>
            <div className="todoCard__warmUp">
                <h4>{warmUpDuration}</h4>
                <h6>min</h6>
                <h5>Warm-up</h5>
            </div>
            <div className="todoCard__exercise">
                <h4>20</h4>
                <h6>min</h6>
                <h5>{exercise}</h5>
            </div>
            <div>
                <RiMore2Fill />
            </div>
        </div>
    )
}

export default TodoCard
