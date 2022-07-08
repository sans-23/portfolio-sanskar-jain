import React from "react";

export default function PortfolioItem({img, link}){
    return (
        <div class="portfolio-item">
            <div class="image">
                <a href={link} target="_blank"><img src={img} alt=""/></a>
            </div>
        </div>
    )
}