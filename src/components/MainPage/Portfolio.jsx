import React from "react";
import PortfolioItem from "./PortfolioItem";
import {
    Link
} from 'react-router-dom';

export default function Portfolio({isActive}){
    const style1 = {animation: "appear 1s ease-in-out", display: "block", ttransform: "translateY(0) scaleY(1)"}
    const style2 = {display:"none"}
    return(
        <section style={isActive===1 ? style1: style2} className="section sec3 portfolio">
            <div class="main-title">
                <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
            </div>
            <p class="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div class="portfolios">
                <PortfolioItem link="https://sans1812.pythonanywhere.com/quiz/" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ea99aIBs_QQSITPRoMWZvwHaD4%26pid%3DApi&f=1"/>
                {/* <PortfolioItem link="https://sans1812.pythonanywhere.com/explo/sans/" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XYbEaZF3-qRmSY8PpPqbhAHaE8%26pid%3DApi&f=1"/> */}
                <Link to="/explo">
                    <div class="portfolio-item">
                        <div class="image">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XYbEaZF3-qRmSY8PpPqbhAHaE8%26pid%3DApi&f=1" alt=""/>
                        </div>
                    </div>
                </Link>
                <PortfolioItem link="https://sans1812.pythonanywhere.com/problemset/" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.jMLSvZ0rhLV7YuZRBrruyQHaD4%26pid%3DApi&f=1"/>
                <Link to="/sudoku">
                    <div class="portfolio-item">
                        <div class="image">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdarksudoku.com%2Fassets%2Fimages%2Fgame-board.png&f=1&nofb=1" alt=""/>
                        </div>
                    </div>
                </Link>
                <Link to="/memory-game">
                    <div class="portfolio-item">
                        <div class="image">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.biUEsX4dB7ObfFTxvdprMwHaE7%26pid%3DApi&f=1" alt=""/>
                        </div>
                    </div>
                </Link>
                <PortfolioItem img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Fh8JCeH4VMUotEO-VWV1rwAAAA%26pid%3DApi&f=1"/>    
            </div>
        </section>
    )
}