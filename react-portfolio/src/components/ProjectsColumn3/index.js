import React from 'react'
import ProjectContainer from "../project_container";
import burger from "../images/burger.PNG"



const ProjectsColumn3 = () => (
    <div>
        <ProjectContainer
        imgsrc= {burger}
        appsrc = "https://calm-chamber-95593.herokuapp.com/"
        codesrc = "https://github.com/SurrealSam/week13homework"
        title = "Burger App"
         />
    </div>
)

export default ProjectsColumn3;