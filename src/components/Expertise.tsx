import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlutter, faOpenai } from '@fortawesome/free-brands-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Flutter", "Firebase", "Dart", "Google Cloud Functions", "Firebase Auth"
];

const labelsSecond = [
    "OpenAI API",
    "Node.js", 
    "Prompt Engineering",
    "Make.com"
];

const labelsThird = [
    "Photoshop",
    "Illustrator", 
    "DaVinci Resolve", 
    "OBS Studio",
    "Photography"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faFlutter as IconProp} size="3x"/>
                    <h3>Mobile & Cross-Platform</h3>
                    <p>I build and maintain scalable Flutter & Firebase applications for hundreds of active users. I specialize in architecting complex multi-user systems and ensuring long-term reliability through seamless updates and proactive bug fixes for a flawless user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faOpenai as IconProp} size="3x"/>
                    <h3>GenAI & LLM Integration</h3>
                    <p>I integrate LLMs into functional software to bridge the gap between AI and real-world utility. From winning 2nd place in a major hackathon to building engines that translate natural language into structured automation logic, I build practical, AI-driven solutions that simplify complex workflows.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPhotoFilm as IconProp} size="3x"/>
                    <h3>Creative Media & Production</h3>
                    <p>Beyond programming, I enjoy working on digital content and media projects. I handle tasks like designing social media posts and print materials, as well as managing the technical side of filming and live-streaming events. I also have experience with photography and video editing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;