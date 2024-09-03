import brainwave from "../images/projects/brainwave.jpg";
const projectData = [
  {
    id: 1,
    category: "Web Apps",
    title: "Trackify",
    description:
      "Trackify is a web application designed to streamline task management and enhance productivity.",
    technologies: [
      "Docker",
      "AWS",
      "DynamoDB",
      "Firebase",
      "Ruby",
      "Node.js",
      "MongoDB",
    ],
    image: brainwave,
  },
  {
    id: 2,
    category: "Web Apps",
    title: "Podstream",
    description:
      "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts.",
    technologies: ["React.js", "MongoDB", "Node.js"],

    image: brainwave,
  },
  {
    id: 3,
    category: "Android Apps",
    title: "Vexa",
    description:
      "Designed and developed the Vexa project, a project management app that helps users and teams stay organized.",
    technologies: ["React.js", "Node.js", "MongoDB"],

    image: brainwave,
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
