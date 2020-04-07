import React from 'react'
import ProjectContainer from "../project_container";
import dayplanner from "../images/dayplanner.PNG"
import square from "../images/square.png"



const ProjectsColumn1 = () => (
    <div>
        <ProjectContainer
        imgsrc= {dayplanner}
        link = "https://www.youtube.com/"
        title = "Youtube"
         />
        <ProjectContainer
        imgsrc= {square}
        link = "https://www.youtube.com/"
        title = "Youtube"
         /><ProjectContainer
         imgsrc= 'https://thehappypuppysite.com/wp-content/uploads/2018/04/when-can-puppies-go-outside-header.jpg'
         link = "https://www.youtube.com/"
         title = "Youtube"
          />
    </div>
)

export default ProjectsColumn1;