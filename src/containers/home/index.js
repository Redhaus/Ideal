import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Button } from 'semantic-ui-react';
import SubHeader from '../../components/header/subheader';
import CourseOverviewPrimary from '../../components/overview/courseOverviewPrimary';
import CourseLexisReading from '../../components/lexis/courseLexisReading';
import CourseQuestionsAssignments from '../../components/questions/courseQuestionsAssignments';
import CourseBaseSegue from '../../components/goals/courseBaseSegue';
import CourseSummerPerformance from '../../components/performance/courseSummerPerformance';
import ExtensionsGoals from '../../components/extensions/extensionsGoals';
import {Image} from 'semantic-ui-react';
import imgHeader from '../../images/survey1header.png';
import Footer from '../../components/footer/footer';

// import '../../playground/firebaseTest';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
 
  <div >


  <div className="ui nav">
  <div className="ui container">
  <SubHeader/>
  </div>
  </div>

 
  

  <div className="ui container">
  <Image src={imgHeader} fluid />
  
  <div className="background">
  <CourseOverviewPrimary/>
  <CourseLexisReading/>
  <CourseQuestionsAssignments/>
  <CourseBaseSegue/>
  <CourseSummerPerformance />
  <ExtensionsGoals />
  </div>

  <Footer />

  </div>
  



  
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
