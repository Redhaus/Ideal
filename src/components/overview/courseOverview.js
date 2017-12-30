import React from 'react';
import { Divider, Popup } from 'semantic-ui-react';
import primarydata from '../../fixtures/primaryData';
import { style , popSize} from '../../utils/utils';


const CourseOverview = (props) => {

    return (
        <div>
           
            <Popup trigger={props.title} content={props.popup}  position='bottom center' size={popSize} style={style} inverted/>
            <Divider />
            <p>{primarydata.unitDescription}</p>

        </div>
    )
};

export default CourseOverview;
