import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render () {
    console.log(this.props);
    const { project } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
          <ProjectList projects={project}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);