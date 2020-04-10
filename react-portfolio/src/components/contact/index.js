import React, { Component } from 'react'
import { Container, Divider, Grid, Segment, Icon } from 'semantic-ui-react'



class Contact extends Component {

    componentDidMount()  {
        document.title = "S Jones Contact"
    }

    render() {
        return (
            <Grid centered>
                <Grid.Column width={4}>
                    <br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br />
                    <Segment>

                        <Divider hidden />
                        <Container textAlign='justified'> <span> LinkedIn Profile: <a href="https://www.linkedin.com/in/sammyejones1993/">
                            <Icon inverted color='blue' size="big" bordered name="linkedin" />
                        </a></span></Container>
                        <br />
                        <Divider hidden />

                        <Container textAlign='justified'> <span> Github Profile: <a href="https://github.com/SurrealSam">
                            <Icon inverted color='black' size="big" bordered name="github square" />
                        </a></span></Container>
                        <br />
                        <Divider hidden />

                        <Container textAlign='justified'>
                            Send Email: <a href="mailto:sajones@ucdavis.edu">

                                <Icon right inverted color='teal' size="big" bordered name="mail" />

                            </a>

                        </Container>


                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Contact;