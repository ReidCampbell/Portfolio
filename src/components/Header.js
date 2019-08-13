import React, { Component } from "react";
import Typist from "react-typist";
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a
                            className="mobile-btn"
                            href="#nav-wrap"
                            title="Show navigation"
                        >
                            Show navigation
                        </a>
                        <a
                            className="mobile-btn"
                            href="/#"
                            title="Hide navigation"
                        >
                            Hide navigation
                        </a>
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#resume">
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">
                                <Typist
                                    className="MyTypist"
                                    avgTypingDelay={55}
                                    startDelay={500}
                                    cursor={{
                                        hideWhenDone: true,
                                        hideWhenDoneDelay: 10
                                    }}
                                >
                                    {[`I am ${resumeData.name}.`]}
                                </Typist>
                            </h1>
                            <h3
                                style={{
                                    color: "#fff",
                                    fontFamily: "sans-serif "
                                }}
                            >
                                <Typist
                                    className="MyTypist"
                                    avgTypingDelay={25}
                                    startDelay={2000}
                                    cursor={{
                                        hideWhenDone: true,
                                        hideWhenDoneDelay: 0
                                    }}
                                >
                                    {[
                                        `I am a ${resumeData.role}.
                                    ${resumeData.roleDescription}`
                                    ]}
                                </Typist>
                            </h3>
                            <hr />
                            <ul className="social">
                                {resumeData.socialLinks &&
                                    resumeData.socialLinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i
                                                        className={
                                                            item.className
                                                        }
                                                    />
                                                </a>
                                            </li>
                                        );
                                    })}
                            </ul>

                            <a
                                href="https://github.com/ReidCampbell/Portfolio/raw/master/public/ReidScottCampbell%20Resume.pdf"
                                download
                            >
                                <button className="btn-download">
                                    Download Resume
                                </button>
                            </a>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#portfolio">
                            <i className="icon-down-circle" />
                        </a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}
