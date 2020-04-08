import React, { Component } from 'react'
import { Button, Dimmer, Header, Divider, Image } from 'semantic-ui-react'



class ProjectContainer extends Component {
    state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    render() {
        const { active } = this.state
        const content = (
            <div>
                <Header as='h2' inverted>
                    {this.props.title}
          </Header>

                <a href={this.props.appsrc}><Button  circular inverted color='teal'>View App</Button></a>
                <a href={this.props.codesrc}><Button circular inverted color='grey'>View Github</Button></a>

            </div>
        )

        return (
            <div>
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{ active, content }}
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                    size="medium"
                    src={this.props.imgsrc}
                    circular
                />
                <Divider hidden />
                <Divider hidden />
            </div>
        )
    }
}

export default ProjectContainer;

