import React from "react";
import { educationTimeline, experienceTimeline, skills } from "../data/siteData";

const TimelineSection = ({ title, items }) => (
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <ion-icon name="book-outline"></ion-icon>
      </div>

      <h3 className="h3">{title}</h3>
    </div>

    <ol className="timeline-list">
      {items.map((item, idx) => (
        <li className="timeline-item" key={idx}>
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          <span>{item.period}</span>
          <p className="timeline-text">{item.text}</p>
        </li>
      ))}
    </ol>
  </section>
);

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <TimelineSection title="Education" items={educationTimeline} />

      <TimelineSection title="Experience" items={experienceTimeline} />

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="skills-list content-card">
          {skills.map((skill) => (
            <li className="skills-item" key={skill.name}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
