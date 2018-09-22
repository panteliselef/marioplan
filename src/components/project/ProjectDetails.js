import React from 'react'

const ProjectDetails = (props) => {
  
  const id = props.match.params.id ;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">        
          <span className="card-title">Project Title - {id}</span>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iure a natus at nam cum, rerum sequi quod et ipsum laudantium quasi nihil. Ex iusto libero tempore impedit nemo id.</p>
        </div>
      <div className="card-action gret lighten-4 grey-text">
        <div>Posted by elefcodes</div>
        <div>2nd Sep ,2am</div>
      </div>
      </div>
    </div>
  )
}

export default ProjectDetails
