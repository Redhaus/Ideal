import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SubHeader from '../../components/header/subheader';
import CourseOverviewPrimary from '../../components/overview/courseOverviewPrimary';
import CourseLexisReading from '../../components/lexis/courseLexisReading';
import CourseQuestionsAssignments from '../../components/questions/courseQuestionsAssignments';
import CourseBaseSegue from '../../components/goals/courseBaseSegue';
import CourseSummerPerformance from '../../components/performance/courseSummerPerformance';
import ExtensionsGoals from '../../components/extensions/extensionsGoals';
import { Image } from 'semantic-ui-react';
import imgHeader from '../../images/survey1header.png';
import Footer from '../../components/footer/footer';
import LexisResults from '../../components/results/lexisResults';
import { saveSelection } from '../../actions/action'

class Home extends Component {

  // state = { visible: false }
  // toggleVisibility = () => this.setState(() => ({
  //   visible: !this.state.visible
  // })
  // );

  render() {

    return (


      <div>


        <div className="full-body">

          <div className="ui nav">
            <div className="ui container">
              <SubHeader />
            </div>
          </div>

          <div className="ui container">
            <Image src={imgHeader} fluid />

            <div className="background">
              <CourseOverviewPrimary />
              <CourseLexisReading saveSelection={this.props.saveSelection} />
              <CourseQuestionsAssignments />
              <CourseBaseSegue />
              <CourseSummerPerformance />
              <ExtensionsGoals />


              <div>
                <h4>LEXIS RESULTS</h4>
                <LexisResults />
                {/* <PhotoGallery /> */}


              </div>

              <Footer />
            </div>

          </div>
        </div>



      </div>


    )

  }
}

const mapStateToProps = state => ({
  word: state.lexis.word,
  def: state.lexis.def,
  selected: state.lexis.selected
})


const mapDispatchToProps = (dispatch) => ({
  saveSelection: bindActionCreators(saveSelection, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)




