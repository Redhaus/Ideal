import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import logo from '../../images/Artboard 1.png';


const Footer = () => (
    <div className="ui footer">
    <Grid>
    <Grid.Row>
    
    <Grid.Column width={11}>
    <p>Copyright 2018 | Ideal Education | All Rights Reserved </p>
  </Grid.Column>

  <Grid.Column width={5}>
  <Image  floated='right' src={logo} size='tiny' />
</Grid.Column>
</Grid.Row>

</Grid>


 
    
  
    </div>
);

export default Footer;
