import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Picture from "../images/profile.jpg";

const BioCard = () => (
  <Card>
    <Image src={Picture} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Sammye Jones</Card.Header>
      <Card.Meta>
        <span className='date'></span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default BioCard