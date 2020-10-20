import React from 'react'
import './JobCard.css'
function JobCard({title,location,company,time, position,image,link}) {
    return (
        
        <div className="jobCard">
            <a href={link}>
                <img id="image"src={image}  alt=""/>
            </a>
            <div className="jobCard__info">
                <div className="jobCard__infoTime">
                    <p>{time}</p>
                    <span>&#8226;</span>
                    <p>{position}</p>
                </div>
                <h4 id="jobTitle">{title}</h4>
                <p id="companyName">{company}</p>
            </div>
            <div className="jobCard__infoLocation">
                <p><strong>{location}</strong></p>
            </div>
        </div>
        
    )
}

export default JobCard
