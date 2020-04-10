import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import Picture from "../images/profile.jpg";

class BioCard extends Component {
  componentDidMount() {
    document.title = "S Jones Bio";
  }
  render() {
    return (
      <Card>
        <Image src={Picture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Sammye Jones</Card.Header>
          <Card.Meta>
            <span className='date'></span>
          </Card.Meta>
          <Card.Description>
            At heart, I am a linguist. I having studied various human languages (Spanish, American Sign Language, Japanese, German, French, and Mandarin), and I love learning new languages. This passion has led me to learning programming languages as well. I enjoy rockclimbing and board gaming in my free time!
      </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default BioCard