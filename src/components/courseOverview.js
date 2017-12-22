import React from 'react';
import { Divider, Popup } from 'semantic-ui-react';

const CourseOverview = () => {

    const title = (
        <h2>Myth and Classical Archetypes</h2>
    )

    const titlePopup = (
        <div>
        <h4>Add users to your feed</h4>
        <p>The Unit Title and Unit Descriptor sets the required focus and must be followed to maintain uniformity and a scope and sequence across the guides.</p>
        <p>Examine the Unit Title and Descriptor for keywords that suggest the core of the unit. These keywords function like a thesis statement for the unit and should be returned to throughout the lessons.</p>
        </div>
    )

    const style = {
        // borderRadius: 0,
        // opacity: 0.7,
        // padding: '2em',
        width: '40em' 
      }
    
    return(
    <div>
        <h4>Survey In Western Lit I</h4>
        <Popup trigger={title} content={titlePopup} size='tiny' position='center bottom' style={style} />
        <Divider />
        <p>We begin with the essential tools for a critical study of literature: classical archetypes, myth—
not mythology—and dialectics.</p>
        
    </div>
    )
};

export default CourseOverview;
