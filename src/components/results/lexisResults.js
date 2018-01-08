import React from 'react'
import { Divider } from 'semantic-ui-react'
import { connect } from 'react-redux';


class LexisResults extends React.Component {


    applicationList = (app) => {

        return app.map((item, key) => {
            const list = (
                <p key={key}>{item}</p>
            )
            return list;
        })

    }



    renderList = (lexis) => {

        return lexis.map((item, key) => {

            const wordGuide = (
                <div key={key} className="top-padding">
                    <h3>{item.word} {item.pos}</h3>
                    <p><strong>variations</strong></p>
                    {this.applicationList(item.variation)}
                    <p><strong>etymology</strong></p>
                    <p>{item.application}</p>

                    <p><strong>quote</strong></p>
                    <p>{item.quote}</p>

                    <p>{item.author} | {item.book}</p>

                    <p><strong>application</strong></p>
                    {this.applicationList(item.application)}

                    <p><strong>key questions</strong></p>
                    {this.applicationList(item.questions)}
                    <Divider />


                </div>
            )

            return wordGuide;

        });  // close your map
    };  // close renderList

    render() {
        return (
            <div>{this.renderList(this.props.lexisSelect)}</div>
        );
    }
}


const mapStateToProps = state => ({
    lexisSelect: state.lexisSelect
})

export default connect(mapStateToProps)(LexisResults)


