import React from 'react'
import ProjectContainer from "../project_container";
import covid from "../images/covid.PNG"



const ProjectsColumn2 = () => (
    <div>
        <ProjectContainer
        imgsrc= {covid}
        appsrc = "http://blooming-tor-47379.herokuapp.com/"
        codesrc = "https://github.com/alpinelife37/Covid-Daily"
        title = "Covid Daily"
         />
        
    </div>
)

export default ProjectsColumn2;