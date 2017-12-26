import React from 'react';
import { Divider, Popup } from 'semantic-ui-react';
// import { primaryData } from '../fixtures/primaryData';


const CourseOverview = (props) => {

    return(
    <div>
        <h4>Survey In Western Lit I</h4>
        <Popup trigger={props.title} content={props.popup} size='tiny' position='bottom center'  />
        <Divider />
        <p>We begin with the essential tools for a critical study of literature: classical archetypes, myth—
not mythology—and dialectics.</p>
        
    </div>
    )
};

export default CourseOverview;
