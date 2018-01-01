import React from 'react';
import { Grid, Checkbox, Popup } from 'semantic-ui-react';
import { handleOnClick, popSize, style } from '../../utils/utils';

const Skills = (props) => {

    const handleSkills = (skills) => {

        return skills.map((skill, key) => {

            const skillTitle = (
                <Grid.Column>
                    <div className="skill-goals">
                        <Checkbox label={skill} onClick={handleOnClick} />
                    </div>
                </Grid.Column>
            )

            const skillPopup = (
                <div>
                    <h4>{skill}</h4>
                    <p>Common Core Standards tbd</p>
                </div>
            )

            const skillTemplate = (
                <Popup key={key} trigger={skillTitle} content={skillPopup} size={popSize} style={style} inverted />
            )

            return skillTemplate;

        })

    }

    return (
        <Grid.Column >
            {handleSkills(props.skills)}
        </Grid.Column>
    )
};

export default Skills;

