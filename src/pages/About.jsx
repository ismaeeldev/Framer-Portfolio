import React, { useState } from "react";
import { services, testimonials, clients } from "../data/siteData";
import { motion } from "framer-motion";

const About = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(null);

    const handleOpenModal = (testimonial) => setActiveTestimonial(testimonial);
    const handleCloseModal = () => setActiveTestimonial(null);

    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    I am a Web Developer and Web Designer with over 2 years of professional
                    experience in building modern, responsive, and high-quality digital
                    experiences. I specialize in platforms like Framer, Webflow, Wix and
                    WordPress, along with custom development for enterprise-level applications.
                </p>

                <p>
                    My passion is transforming ideas into clean, functional and visually
                    stunning designs. I focus on creating user-friendly interfaces, structured
                    layouts, smooth interactions and fully responsive websites that deliver
                    real business value.
                </p>

                <p>
                    Whether it's a complete website, a brand identity, or a complex custom
                    solution, I bring creativity, precision and modern development standards
                    to every project. My goal is to help businesses grow with design and
                    technology that truly stands out.
                </p>
            </section>


            {/* Services */}
            <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>

                <ul className="service-list">
                    {services.map((service) => (
                        <motion.li
                            className="service-item"
                            key={service.title}
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="service-icon-box">
                                <img src={service.icon} alt={service.title} width="40" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">{service.title}</h4>
                                <p className="service-item-text">{service.text}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar">
                    {testimonials.map((item) => (
                        <li className="testimonials-item" key={item.id}>
                            <button
                                className="content-card"
                                data-testimonials-item
                                onClick={() => handleOpenModal(item)}
                            >
                                <figure className="testimonials-avatar-box">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        width="60"
                                        data-testimonials-avatar
                                    />
                                </figure>

                                <h4 className="h4 testimonials-item-title" data-testimonials-title>
                                    {item.name}
                                </h4>

                                <div className="testimonials-text" data-testimonials-text>
                                    <p>{item.text}</p>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Modal */}
            {activeTestimonial && (
                <div className="modal-container" data-modal-container>
                    <div className="overlay" data-overlay onClick={handleCloseModal}></div>

                    <section className="testimonials-modal">
                        <button className="modal-close-btn" onClick={handleCloseModal}>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>

                        <div className="modal-img-wrapper">
                            <figure className="modal-avatar-box">
                                <img
                                    src={activeTestimonial.avatar}
                                    alt={activeTestimonial.name}
                                    width="80"
                                    data-modal-img
                                />
                            </figure>

                            <img src="/src/assets/images/icon-quote.svg" alt="quote icon" />
                        </div>

                        <div className="modal-content">
                            <h4 className="h3 modal-title" data-modal-title>
                                {activeTestimonial.name}
                            </h4>

                            {activeTestimonial.displayDate && (
                                <time dateTime={activeTestimonial.date}>
                                    {activeTestimonial.displayDate}
                                </time>
                            )}

                            <div data-modal-text>
                                <p>{activeTestimonial.text}</p>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Clients */}
            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>

                <ul className="clients-list has-scrollbar">
                    {clients.map((logo, index) => (
                        <li className="clients-item" key={index}>
                            <a href="#">
                                <img src={logo} alt="client logo" />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default About;
