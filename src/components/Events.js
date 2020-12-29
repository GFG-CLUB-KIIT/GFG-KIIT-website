import React, { Component } from 'react';
import '../css/events.css';

import img from '../img/img-3.jpg';

class Events extends Component {
    render() {
       return (
        <div class="gfg-event-page">
            <div class="gfg-event-page-content">
                <div class="gfg-event-page-container">
                    <div class="gfg-event-page-header">
                        <h2>Featured <span>projects</span></h2>
                    </div>
                    <div class="gfg-event-page-items">
                        <div class="gfg-event-page-item">
                            <div class="gfg-event-page-item-grid">
                                <div class="gfg-event-page-item-grid-col -right">
                                    <a class="gfg-event-page-item-img" href="#">
                                        <picture class="pic">
                                            <img src={img} loading="lazy" alt/>
                                        </picture>
                                    </a>
                                </div>
                                <div class="gfg-event-page-item-grid-col -left">
                                    <div class="gfg-event-page-item-header">
                                        <h3>uLesson</h3>
                                    </div>
                                    <div class="gfg-event-page-item-text">
                                        <p>Online platform</p>
                                        <p>for distance learning.</p>
                                    </div>
                                    <div class="gfg-event-page-item-tags">
                                        <p>web, mobile, product</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gfg-event-page-item">
                            <div class="gfg-event-page-item-grid">
                                <div class="gfg-event-page-item-grid-col -right"><a class="gfg-event-page-item-img"
                                        href="#">
                                        <picture class="pic">
                                            <img src={img} loading="lazy" alt/>
                                        </picture>
                                    </a></div>
                                <div class="gfg-event-page-item-grid-col -left">
                                    <div class="gfg-event-page-item-header">
                                        <h3>Riyadh</h3>
                                    </div>
                                    <div class="gfg-event-page-item-text">
                                        <p>Official website of Riyadh,</p>
                                        <p>Saudi Arabia's capital.</p>
                                    </div>
                                    <div class="gfg-event-page-item-tags">
                                        <p>design, development, product</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gfg-event-page-item">
                            <div class="gfg-event-page-item-grid">
                                <div class="gfg-event-page-item-grid-col -right"><a class="gfg-event-page-item-img"
                                        href="#">
                                        <picture class="pic">
                                            <img src={img} loading="lazy" alt/>
                                        </picture>
                                    </a></div>
                                <div class="gfg-event-page-item-grid-col -left">
                                    <div class="gfg-event-page-item-header">
                                        <h3>ATOL Sigma</h3>
                                    </div>
                                    <div class="gfg-event-page-item-text">
                                        <p>Affordable, market-leading</p>
                                        <p>online cashier.</p>
                                    </div>
                                    <div class="gfg-event-page-item-tags">
                                        <p>web, development, product</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gfg-event-page-item">
                            <div class="gfg-event-page-item-grid">
                                <div class="gfg-event-page-item-grid-col -right"><a class="gfg-event-page-item-img"
                                        href="#">
                                        <picture class="pic">
                                            <img src={img} loading="lazy" alt/>
                                        </picture>
                                    </a></div>
                                <div class="gfg-event-page-item-grid-col -left">
                                    <div class="gfg-event-page-item-header">
                                        <h3>Sleepiest</h3>
                                    </div>
                                    <div class="gfg-event-page-item-text">
                                        <p>Sleep app helps millions</p>
                                        <p>fall asleep every night.</p>
                                    </div>
                                    <div class="gfg-event-page-item-tags">
                                        <p>branding, design, mobile, product</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gfg-event-page-item">
                            <div class="gfg-event-page-item-grid">
                                <div class="gfg-event-page-item-grid-col -right"><a class="gfg-event-page-item-img"
                                        href="#">
                                        <picture class="pic">
                                            <img src={img} loading="lazy" alt/>
                                        </picture>
                                    </a></div>
                                <div class="gfg-event-page-item-grid-col -left">
                                    <div class="gfg-event-page-item-header">
                                        <h3>Genesis Vision</h3>
                                    </div>
                                    <div class="gfg-event-page-item-text">
                                        <p>Private trust management</p>
                                        <p>and trading platform.</p>
                                    </div>
                                    <div class="gfg-event-page-item-tags">
                                        <p>branding, design, experience, product</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="gfg-event-page-item">
                            <div class="gfg-event-page-item-grid">
                                <div class="gfg-event-page-item-grid-col -right"><a class="gfg-event-page-item-img"
                                        href="#">
                                        <picture class="pic">
                                            <img src={img} loading="lazy" alt/>
                                        </picture>
                                    </a></div>
                                <div class="gfg-event-page-item-grid-col -left">
                                    <div class="gfg-event-page-item-header">
                                        <h3>Nana Asia</h3>
                                    </div>
                                    <div class="gfg-event-page-item-text">
                                        <p>Asia’s digital magazine,</p>
                                        <p>powered by women.</p>
                                    </div>
                                    <div class="gfg-event-page-item-tags">
                                        <p>web, design, development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       );
    }
}

export default Events;