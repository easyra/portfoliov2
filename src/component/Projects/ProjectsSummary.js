import React from 'react';

const ProjectsSummary = ({ src, github, deployed, projectTitle, summary }) => {
  return (
    <div className='projects-summary'>
      <div className='projects-card'>
        <img src={src} />
        <div className='projects-links'>
          <a target='_blank' href={github}>
            <i class='fab fa-github fa-8x' />
          </a>
          <a target='_blank' href={deployed}>
            <i class='fas fa-window-maximize fa-8x' />
          </a>
        </div>
      </div>
      <h2>{projectTitle}</h2>
      <p>{summary}</p>
    </div>
  );
};

export default ProjectsSummary;
