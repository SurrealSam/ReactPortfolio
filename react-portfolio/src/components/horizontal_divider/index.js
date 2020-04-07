import React from 'react'
import { Divider, Segment } from 'semantic-ui-react'
import Projects from "../projects";
import Contact from "../contact";

const HorizontalDivider = () => (
    <Segment basic textAlign='center'>
        
        <Projects/>

        <Divider horizontal>Contact</Divider>

        <Contact/>

    </Segment>
)

export default HorizontalDivider;