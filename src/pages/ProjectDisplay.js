import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import { useParams } from 'react-router-dom';
import BttButton from '../components/BttButton';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id]
    return (
        <div className='project'>
            <BttButton />
            <h1>
                {project.name}
            </h1>
            <img
                src={project.image}
                alt="current project"
            />
            <p>
                <b>Skills :</b> {project.skills}
            </p>

            <GitHubIcon />
        </div>
    )
}

export default ProjectDisplay