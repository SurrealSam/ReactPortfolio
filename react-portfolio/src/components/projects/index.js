import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import ProjectsColumn1 from "../ProjectsColumn1";
import ProjectsColumn2 from "../ProjectsColumn2";
import ProjectsColumn3 from "../ProjectsColumn3";

class Projects extends Component {
  componentDidMount() {
    document.title = "S Jones Projects";
  }
  render() {
    return (
      <div>
        <br /><br /><br /><br /><br /><br /><br />

        <Grid columns={5} relaxed='very'>
          <Grid.Column className="two wide column">

          </Grid.Column>
          <Grid.Column className="four wide column">
            <ProjectsColumn1 />
          </Grid.Column>
          <Grid.Column className="four wide column">
            <ProjectsColumn2 />
          </Grid.Column>
          <Grid.Column className="four wide column">
            <ProjectsColumn3 />
          </Grid.Column>
          <Grid.Column className="two wide column">

          </Grid.Column>
        </Grid>
      </div>
    )
  }

}

export default Projects;