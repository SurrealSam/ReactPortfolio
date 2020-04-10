import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


class MenuHeader extends Component {

    render() {
        return (
            <Menu size='massive' pointing secondary>
                <Menu.Item
                    name='Bio'
                    link
                    href="/Bio"
                />
                <Menu.Item
                    name='Projects'
                    link
                    href="/Projects"
                    
                />
                <Menu.Item
                    name='Contact'
                    link
                    href="/Contact"
                />

            </Menu>
        )
    }



}

export default MenuHeader;