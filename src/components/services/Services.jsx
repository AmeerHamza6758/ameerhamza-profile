import React from 'react';
import './Services.css';
import web1 from '../../images/web1.png';
import web2 from '../../images/web2.png';
import web3 from '../../images/web3.png';
import web4 from '../../images/web4.png';
const Services = () => {
    return (
        <section id="services">
            <div className="services container">
                <div className="service-top">
                    <h1 className="section-title">
                        Ser<span>v</span>ices
                    </h1>
                    <p>
                        🚀 Welcome to Ameer Hamza Web Development! I'm Ameer Hamza, leading a
                        passionate team in crafting cutting-edge web applications. 💻
                        Specializing in both frontend and backend technologies, we ensure your
                        digital presence is not only functional but visually captivating. Our
                        client-centric approach prioritizes clear communication and transparency
                        throughout the development process. 🌐 At Ameer Hamza Web Development,
                        we stay at the forefront of web development trends, utilizing a
                        comprehensive technology stack including React and Node.js. Join us in
                        transforming your ideas into extraordinary digital experiences. 🤝 Let's build a future of digital excellence together! 🌈
                    </p>
                </div>
                <div className="service-bottom">
                    <div className="service-item">
                        <div className="icon">
                            <img src={web1} />
                        </div>
                        <h2>Responsive UI/UX Design</h2>
                        <p>
                            As a React Frontend Developer, I specialize in crafting visually
                            stunning, responsive interfaces for seamless user experiences.
                            Leveraging React's dynamic capabilities, I create engaging designs
                            that captivate users across devices. My focus is on harmonizing
                            aesthetics and functionality for an exceptional, user-centric
                            experience.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="icon">
                            <img src={web2} />
                        </div>
                        <h2>Component-Based Development</h2>
                        <p>
                            I excel in component-based development, leveraging React's modular
                            structure to build scalable and maintainable frontends. Each component
                            is meticulously designed and implemented, contributing to a cohesive
                            and efficient overall user interface.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="icon">
                            <img src={web3} />
                        </div>
                        <h2>Performance Optimization</h2>
                        <p>
                            With a focus on performance, I employ React's virtual DOM to optimize
                            rendering speed, resulting in snappy and efficient web applications. I
                            meticulously fine-tune code to guarantee a smooth and responsive user
                            experience, enhancing overall satisfaction.
                        </p>
                    </div>
                    <div className="service-item">
                        <div className="icon">
                            <img src={web4} />
                        </div>
                        <h2>Collaborative Problem Solving</h2>
                        <p>
                            Beyond code, I excel in collaborative problem-solving. Engaging with
                            cross-functional teams, I grasp project requirements to seamlessly
                            integrate frontend and backend components. Committed to effective
                            communication and teamwork, I contribute significantly to project
                            success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
