import React from "react";

export default function TimelineItem({duration, role, company, para}){
    return (
        <div class="timeline-item">
            <div class="tl-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <p class="tl-duration">{duration}</p>
            <h5>{role}<span> - {company}</span></h5>
            <p>
                {para}
            </p>
        </div>
    )
}