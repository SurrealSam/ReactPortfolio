import React from 'react'
import ProjectContainer from "../project_container";
import dayplanner from "../images/dayplanner.PNG"
import weather from "../images/weather.PNG"



const ProjectsColumn1 = () => (
    <div>
        <ProjectContainer
        imgsrc= {dayplanner}
        appsrc = "https://surrealsam.github.io/week5homework/"
        codesrc = "https://github.com/SurrealSam/week5homework"
        title = "Day Planner"
         />
        <ProjectContainer
        imgsrc= {weather}
        appsrc = "https://surrealsam.github.io/week6homework/"
        codesrc = "https://github.com/SurrealSam/week6homework"
        title = "Weather App"
         />
    </div>
)

export default ProjectsColumn1;