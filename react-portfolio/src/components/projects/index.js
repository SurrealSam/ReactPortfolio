import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import ProjectsColumn1 from "../ProjectsColumn1";
import ProjectsColumn2 from "../ProjectsColumn2";
import ProjectsColumn3 from "../ProjectsColumn3";

const Projects = () => (
  
    <Grid columns={3} relaxed='very'>
      <Grid.Column>
        <ProjectsColumn1/>
      </Grid.Column>
      <Grid.Column>
        <ProjectsColumn2/>
      </Grid.Column>
      <Grid.Column>
        <ProjectsColumn3/>
      </Grid.Column>
      
    </Grid>

    
  
)

export default Projects;