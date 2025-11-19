import React, { useState } from "react";
import { personalInfo, contacts, socialLinks } from "../data/siteData";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
    const [showMore, setShowMore] = useState(true);

    const toggleContacts = () => setShowMore(prev => !prev);

    return (
        <aside className={`sidebar ${showMore ? "active" : ""}`} data-sidebar>
            <div className="sidebar-info">

                <figure className="avatar-box">
                    <img src={personalInfo.avatar} alt={personalInfo.name} width="80" />
                </figure>

                <div className="info-content">
                    <h1 className="name" title={personalInfo.name}>
                        {personalInfo.name}
                    </h1>
                    <p className="title">{personalInfo.role}</p>
                </div>

                <button className="info_more-btn" onClick={toggleContacts}>
                    <span>{showMore ? "Hide Contacts" : "Show Contacts"}</span>
                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <AnimatePresence initial={false}>
                {showMore && (
                    <motion.div
                        className="sidebar-info_more"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="separator"></div>

                        <ul className="contacts-list">
                            {contacts.map((item) => (
                                <li className="contact-item" key={item.type}>
                                    <div className="icon-box">
                                        <ion-icon name={item.icon}></ion-icon>
                                    </div>

                                    <div className="contact-info">
                                        <p className="contact-title">{item.label}</p>

                                        {item.type === "email" && (
                                            <a style={{fontSize:'12px'}} href={`mailto:${item.value}`} className="contact-link">
                                                {item.value}
                                            </a>
                                        )}

                                        {item.type === "phone" && (
                                            <a href={`tel:${item.value}`} className="contact-link">
                                                {item.displayValue || item.value}
                                            </a>
                                        )}

                                        {item.type === "location" && (
                                            <address>{item.value}</address>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="separator"></div>

                        <ul className="social-list">
                            {socialLinks.map((social) => (
                                <li className="social-item" key={social.name}>
                                    <a
                                        href={social.url}
                                        className="social-link"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <ion-icon name={social.icon}></ion-icon>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </aside>
    );
};

export default Sidebar;
