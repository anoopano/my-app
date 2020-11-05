import React from 'react';
import { RiTimerFlashLine, RiHeartAddLine, RiAppleLine, RiMoreFill } from 'react-icons/ri';
import Progressbar from './Progressbar';
import Card from './Card';
import TodoCard from './TodoCard';
import Trainer from './Trainer';
import './Body.css';

function Body() {
    const testData = [
        { bgcolor: "rgb(17, 131, 177)", completed: 60 },
        { bgcolor: "rgb(238, 151, 151)", completed: 83 },
        { bgcolor: "rgb(119, 206, 102)", completed: 40 },
    ];
    const color = ["rgb(86, 168, 219)", "rgb(245, 105, 83)"];
    const shadow = ["0px 10px 2px -2px #cae8fa", "0px 10px 2px -2px #facdc5"]
    return (
        <div className="body">
            <p>Health</p>
            <div className="body__health">
                <div className="body__health-item">
                    <p>6.25</p>
                    <div className="body__icon">
                        <div className="icons" style={{ backgroundColor: "rgb(17, 131, 177)" }}>
                            <RiTimerFlashLine className="icon" />
                        </div>
                        <div className="text">Hours</div>
                    </div>
                    <Progressbar bgcolor={testData[0].bgcolor} completed={testData[0].completed} />
                </div>
                <div className="body__health-item">
                    <p>120</p>
                    <div className="body__icon">
                        <div className="icons" style={{ backgroundColor: "rgb(238, 151, 151)" }}>
                            <RiHeartAddLine className="icon" />
                        </div>
                        <div className="text">Bpm</div>
                    </div>
                    <Progressbar bgcolor={testData[1].bgcolor} completed={testData[1].completed} />
                </div>
                <div className="body__health-item">
                    <p>1.84</p>
                    <div className="body__icon">
                        <div className="icons" style={{ backgroundColor: "rgb(119, 206, 102)" }}>
                            <RiAppleLine className="icon" />
                        </div>
                        <div className="text">Kcal</div>
                    </div>
                    <Progressbar bgcolor={testData[2].bgcolor} completed={testData[2].completed} />
                </div>
            </div>
            <Card />
            <p>Today trainings</p>
            <TodoCard name="Box" time="10.00" warmUpDuration="40" exercise="Stretch" background={color[0]} shadow={shadow[0]} />
            <TodoCard name="Crossfit" time="12.00" warmUpDuration="20" exercise="Pull ups" background={color[1]} shadow={shadow[1]} />
            <div className="moreIcon"><RiMoreFill /></div>
            <p>Your trainers</p>
            <div className="trainers">
                <Trainer name="John Karanagh" section="MMA coach"/>
                <Trainer name="Jacob Jones" section="Boxing coach"/>
            </div>
        </div>
    )
}

export default Body
