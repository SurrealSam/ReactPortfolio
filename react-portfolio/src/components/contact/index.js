import React from 'react'
import { Button, Divider, Grid, Segment } from 'semantic-ui-react'



const Contact = () => (
    <Grid centered>
        <Grid.Column width={4}>
            <Segment>
                <Button
                    color='teal'
                    content='Create New Order'
                    icon='add'
                    labelPosition='left'
                />
                <Divider hidden />
                <Button
                    color='teal'
                    content='Create New Order'
                    icon='add'
                    labelPosition='left'
                />
            </Segment>
        </Grid.Column>
    </Grid>
)

export default Contact;