import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  console.log(projects);
  return  (
    <div className="project-list section">
      {projects && projects.map((project,i) => {
        return (
          <ProjectSummary project={project} key={i}/>

        )
      })}
    </div>
  )
}

export default ProjectList;