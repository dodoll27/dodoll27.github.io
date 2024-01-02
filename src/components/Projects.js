import project_photo from "../images/project-photo.png";
import api_photo from "../images/api-photo.png";

export function Projects() {
  return (
    <div className="projets">
      <div className="desktop">
        <h5>Projects</h5>
      </div>
      <div className="desktop2">
        <div className="section-title" id="projects">
          <h5>Projects</h5>
        </div>
        <div className="project1">
          <img
            src={project_photo}
            className="project-photo"
            width="100%"
            height="auto"
          />
          <div className="details">
            <p>
              Frontend development in React of a social media platform like
              website allowing users to find, post and share recipes.
            </p>
          </div>
        </div>
        <div className="project2">
          <img
            src={api_photo}
            className="project-photo"
            width="100%"
            height="auto"
          />
          <div className="details">
            <p>
              Backend development of a JobBoard type website. Data base creation
              and management. API development in PHP.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
