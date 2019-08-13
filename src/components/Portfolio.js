import React, { Component } from "react";
export default class Porfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Work.</h1>
                        {/* <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        > */}
                        {resumeData.portfolio &&
                            resumeData.portfolio.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="columns portfolio-item"
                                    >
                                        <div className="item-wrap">
                                            <img
                                                src={`${item.imgurl}`}
                                                className="item-img"
                                                alt={`${item.name}`}
                                            />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>{item.name}</h5>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-links">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <button className="link-btn">
                                                    <h2>Demo</h2>
                                                </button>
                                            </a>

                                            <a
                                                href={item.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <button className="link-btn">
                                                    <h2>Github</h2>
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        {/* </div> */}
                    </div>
                </div>
            </section>
        );
    }
}
