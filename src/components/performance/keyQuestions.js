import React from 'react';
import { Grid,  Checkbox } from 'semantic-ui-react';
import { handleOnClick } from '../../utils/utils';


const KeyQuestions = (props) => {


    const renderQuestions = (questions) => {

        return questions.map( (item, key) => {

            const title = (
                <Grid.Column key={key}>
                    <div className="key-questions">
                    <Checkbox label={item} desc={item} onClick={handleOnClick} /> 
                    </div>
                </Grid.Column>   
            )
                
            return title;

        })

    }
    

    

        return(
            <div className="top-padding">
                <Grid>
                <Grid.Row columns={1}>
                {renderQuestions(props.questions)}
                </Grid.Row>
                </Grid>

            </div>
        )

};

export default KeyQuestions;
