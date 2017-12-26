import React from 'react';
import { Divider, Popup } from 'semantic-ui-react';
import primarydata from '../fixtures/primaryData';


const CourseOverview = (props) => {

    return (
        <div>
           
            <Popup trigger={props.title} content={props.popup} size='tiny' position='bottom center' />
            <Divider />
            <p>{primarydata.unitDescription}</p>

        </div>
    )
};

export default CourseOverview;
