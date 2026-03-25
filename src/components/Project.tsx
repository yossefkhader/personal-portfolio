import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/dev-DarAlarkam/DarAlArkam-MainApp" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/dev-DarAlarkam/DarAlArkam-MainApp" target="_blank" rel="noreferrer"><h2>Dar AlArkam - Main App</h2></a>
                <p>Built a large-scale cross-platform mobile app managing 500+ students across classrooms, architected a system with 4 user hierarchies, and 50+ unique screens, implemented secure Firebase authentication and dynamic role-based access control & designed classroom management tools, attendance tracking, and real-time updates for admins and teachers based on client’s needs.</p>
            </div>
            <div className="project">
                <a href="https://github.com/dev-DarAlarkam/fajr-attendance-tracker" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/dev-DarAlarkam/fajr-attendance-tracker" target="_blank" rel="noreferrer"><h2>Fajr Tracker Website</h2></a>
                <p>Created a responsive web platform helping users track spiritual habits, architected a system of groups to help the the users maintain their streaks, along with implementing leaderboards to gamify the platform. It reached 220+ daily active users at peak usage.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yossefkhader/Email-filteration" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yossefkhader/Email-filteration" target="_blank" rel="noreferrer"><h2>Email filteration</h2></a>
                <p>Built a backend interface to bridge natural language inputs with structured automation workflows in Make.com. Implemented a translation layer using OpenAI’s API to convert user requests into specific rule sets, enabling complex automation logic. Developed API integration to push these dynamically generated configurations directly into third-party automation scenarios.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yossefkhader/VibrationSpectrum" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yossefkhader/VibrationSpectrum" target="_blank" rel="noreferrer"><h2>Vibration Spectrum Data Visualizer</h2></a>
                <p>Developed a Python-based data processing tool to ingest and parse large-scale CSV datasets (23M+ points) for infrastructure monitoring. Automated the transformation of raw sensor data into visual spectrum graphs, providing the client with actionable insights for a major light rail  infrastructure project.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yossefkhader/finance-app" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yossefkhader/finance-app" target="_blank" rel="noreferrer"><h2>Mizan: Hackanomy 2025</h2></a>
                <p>Developed a Proof of Concept (POC) for a smart finance application during a 48-hour hackathon. Leading a team of four, I managed the development process and integrated the OpenAI API with Flutter to create an intelligent financial assistant.</p>
            </div>
            <div className="project">
                <a href="https://github.com/dev-DarAlarkam/queue-management" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/dev-DarAlarkam/queue-management" target="_blank" rel="noreferrer"><h2>Queue Manager</h2></a>
                <p>Designed and implemented a live queue tracking system for an Annual Competition. The platform managed participant flow across multiple testing stations simultaneously, providing synchronized real-time updates for both staff and attendees. Built with Flutter and Firebase, it effectively handled the logistical needs of over 350 participants, replacing manual tracking with a seamless digital solution.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;