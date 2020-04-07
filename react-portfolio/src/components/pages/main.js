import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import ProjectsPage from "./projects";
import ContactPage from "../contact";
import BioPage from "../pages/bio"


class MainPage extends Component {
    state = { activeItem: 'Bio' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        if (this.state.activeItem === 'Projects') {
            return (
                <div>
                    <Menu pointing secondary>
                        <Menu.Item
                            name='Bio'
                            active={activeItem === 'Bio'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Projects'
                            active={activeItem === 'Projects'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Contact'
                            active={activeItem === 'Contact'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu>
    
                    <ProjectsPage/>
                </div>
            )
        }
        if (this.state.activeItem === 'Contact') {
            return (
                <div>
                    <Menu pointing secondary>
                        <Menu.Item
                            name='Bio'
                            active={activeItem === 'Bio'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Projects'
                            active={activeItem === 'Projects'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Contact'
                            active={activeItem === 'Contact'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu>
    
                    <ContactPage/>
                </div>
            )
        }
        if (this.state.activeItem === 'Bio') {
            return (
                <div>
                    <Menu pointing secondary>
                        <Menu.Item
                            name='Bio'
                            active={activeItem === 'Bio'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Projects'
                            active={activeItem === 'Projects'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Contact'
                            active={activeItem === 'Contact'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Menu>
    
                    <BioPage/>
                </div>
            )
        }

    }
}

export default MainPage;