import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Experience.css'

function Experience() {
    
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#023047'>
                {/* Stage Keyveo */}
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2018 - 2019'
                    iconStyle={{ background: "#ffb703", color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Stage d'un mois chez Keyveo
                    </h3>
                    <p>
                        Stage de 3e non rémunéré en entreprise, focus sur le game design et la modélisation 3D
                    </p>
                </VerticalTimelineElement>

                {/* 1ère Année CPGE */}
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2018 - 2019'
                    iconStyle={{ background: "#023047", color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        ESIGELEC, Rouen
                    </h3>
                    <p>
                        CPGEi Mathématiques, Physique, Informatique
                    </p>
                </VerticalTimelineElement>

                {/* Licence INFO */}
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2019 - 2022"
                    iconStyle={{ background: "#023047", color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        UFR Sciences et Techniques de Rouen, Saint-Etienne du Rouvray
                    </h3>
                    <p>
                        Licence Informatique équivalent BAC+3 (2ème année)
                    </p>
                </VerticalTimelineElement>

                {/* Formation O'Clock */}
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="Septembre 2022 - Aujourd'hui"
                    iconStyle={{ background: "#023047", color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Formation O'Clock en télépresentiel
                    </h3>
                    <p>
                        Titre Professionnel de Développeur Web et Web Mobile, niveau 5 (bac+2)
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience