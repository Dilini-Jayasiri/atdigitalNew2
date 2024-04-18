import React from "react";
import './body.css';
import mainimg from "../assets/mainimg.jpg";
import description from "../assets/description.png";
import search from "../assets/search.png";

const Body = () => {
    return (
        <>
            <div className="body">
                <div className="body-title">
                    <div className="body-image">
                            <img src={mainimg} alt="mainimg" />
                        <div className="overlay">
                            <div className="gradient-div">
                                <div className="caption">
                                    <h2>We Crush Your <br className="lg" /> <br className="sm" />Competitors,<br className="md" /><br className="sm" /> Goals, And <br className="lg"/>Sales<br className="sm" /> Records - <br className="md" /> Without<br className="sm" /> <br className="lg"/>The B.S.</h2>
                                </div>
                                <button className="btn">GET FREE CONSULTATION</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="content-container-description">
                    <div className="content">
                        <img src={description} alt="description" />
                        <div className="content-text">
                            <h4>Web & Mobile App Development</h4>
                            <p>Your web and mobile apps are pieces of the puzzle to grow your business. We use frameworks that tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                        </div>
                    </div>
                </div>

                <div className="content-container-search">
                    <div className="content">
                        
                        <div className="content-text">
                            <h4>Digital Strategy Consulting</h4>
                            <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                        </div>
                        <img src={search} alt="search" />
                    </div>
                </div>

                <div className="content-container-qna">
    <div className="content-bar">
        <h4>Frequently Asked Questions</h4>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                    >
                        Lorem ipsum dolor sit amet consectetur. Leo at sit eu
                        libero?
                        
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                        suscipit id ipsum. Elementum ultrices nulla faucibus odio
                        est sed aliquam. Sapien massa morbi risus sagittis tortor
                        integer.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                        
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                        suscipit id ipsum. Elementum ultrices nulla faucibus odio
                        est sed aliquam. Sapien massa morbi risus sagittis tortor
                        integer.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                        className="accordion-button collapsed custom-accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
                        
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                        suscipit id ipsum. Elementum ultrices nulla faucibus odio
                        est sed aliquam. Sapien massa morbi risus sagittis tortor
                        integer.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
        </>
    )
}

export default Body;
