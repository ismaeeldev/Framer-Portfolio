import React, { useState, useMemo } from "react";
import { projects } from "../data/siteData";
import ProjectDetail from "./ProjectDetail";

const filters = ["All", "Framer", "Wix", "Web development"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showProjectDetail, setShowProjectDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowProjectDetail(true);
  };

  const handleClose = () => {
    setShowProjectDetail(false);
    setSelectedProject(null);
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    const key = activeFilter.toLowerCase().trim();

    return projects.filter(
      (p) => (p.filter || "").toLowerCase().trim() === key
    );
  }, [activeFilter]);

  return (
    <>
      <article className="portfolio" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            {filters.map((filter) => (
              <li className="filter-item" key={filter}>
                <button
                  className={filter === activeFilter ? "active" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>

          <ul className="project-list">
            {filteredProjects.map((project) => (
              <li
                className="project-item active"
                data-category={project.filter}
                key={project.id}
              >
                <a style={{ cursor: 'pointer' }} onClick={() => handleProjectClick(project)}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img src={project.image} alt={project.name} loading="lazy" />
                  </figure>

                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <ProjectDetail
        project={selectedProject}
        isOpen={showProjectDetail}
        onClose={handleClose}
      />
    </>
  );
};

export default Portfolio;
