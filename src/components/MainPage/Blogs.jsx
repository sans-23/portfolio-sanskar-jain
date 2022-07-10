import React from "react";

export default function Blogs({isActive}){
    const style1 = {animation: "appear 1s ease-in-out", display: "block", ttransform: "translateY(0) scaleY(1)"}
    const style2 = {display:"none"}
    return(
        <section style={isActive===1 ? style1: style2} className="section sec4 blogs">
            <div class="blogs-content">
                <div class="main-title">
                    <h2>My <span>Blogs</span><span class="bg-text">My Blogs</span></h2>
                </div>
                <div class="blogs">
                    <div class="blog">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Fh8JCeH4VMUotEO-VWV1rwAAAA%26pid%3DApi&f=1" alt=""/>
                        <div class="blog-text">
                            <h4>
                                Coming Soon
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p>
                        </div>
                    </div>
                    <div class="blog">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Fh8JCeH4VMUotEO-VWV1rwAAAA%26pid%3DApi&f=1" alt=""/>
                        <div class="blog-text">
                            <h4>
                                Coming Soon
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p>
                        </div>
                    </div>
                    <div class="blog">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Fh8JCeH4VMUotEO-VWV1rwAAAA%26pid%3DApi&f=1" alt=""/>
                        <div class="blog-text">
                            <h4>
                                Coming Soon
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Doloribus natus voluptas, eos obcaecati recusandae amet?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}