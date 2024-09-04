import brainwave from "../images/projects/brainwave.jpg";
import netflixGpt from "../images/projects/netflix-gpt.png";
import swiggy from "../images/projects/swiggy.png";
const projectData = [
  {
    id: 1,
    category: "Web Apps",
    title: "Mordern UI",
    description:
      "Tansformed a beautiful UI/UX design into Modern Website, focusing on stylish UI design, mobile-first principles, along with sleek parallax effects, ",
    technologies: ["React", "Javascript", "Tailwind"],
    image: brainwave,
  },
  {
    id: 2,
    category: "Web Apps",
    title: "Swiggy Clone",
    description:
      "Developed a responsive Swiggy Clone using ReactJS, integrating Swiggy's API to fetch real-time data. The app features advanced search functionality, filters, detailed menus, ratings, and personalized restaurant recommendations based on location.",
    technologies: ["React.js", "Redux", "Rest API", "Tailwind"],

    image: swiggy,
  },
  {
    id: 3,
    category: "Web Apps",
    title: "Netflix GPT",
    description:
      "Developed the Netflix clone with movie suggestion app, app offers seamless movie browsing and recommendations. Key features include user authentication, profile updates, and a sleek UI. Integrated with The Movie Database (TMDB) API for real-time movie data and Gemini for advanced GPT-powered search.",
    technologies: [
      "React.js",
      "Redux",
      "Firebase",
      "Authentication",
      "Gemini GPT",
      "Tailwind",
    ],

    image: netflixGpt,
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" text-white py-16 px-4">
      <div className="text-center mb-8">
        <p className="text-accent text-lg tracking-widest mb-4">My Works</p>
        <h2 className="text-4xl font-bold mb-2">Projects</h2>
        <p className="text-gray-400">
          I have worked on a wide range of projects,here are some of my
          projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projectData.map((project) => (
          <div
            key={project.id}
            className=" border-accent-dark border-4  p-6 rounded-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover rounded-md mb-4"
            />

            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-accent-dark px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-white my-4">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
