import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time data visualization platform with machine learning predictions and interactive 3D charts.",
    tags: ["React", "Three.js", "Python", "PostgreSQL"],
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    demo: "#",
    github: "#",
  },
  {
    title: "E-Commerce 3D Store",
    description:
      "Immersive shopping experience with 3D product previews and WebGL-powered interactive elements.",
    tags: ["Next.js", "Three.js", "Stripe", "Supabase"],
    image:
      "https://images.pexels.com/photos/2693857/pexels-photo-2693857.jpeg?auto=compress&cs=tinysrgb&w=600",
    demo: "#",
    github: "#",
  },
  {
    title: "Collaborative Design Platform",
    description:
      "Real-time multiplayer design tool with WebSocket synchronization and version control.",
    tags: ["Vue.js", "Canvas API", "Node.js", "Redis"],
    image:
      "https://images.pexels.com/photos/3759285/pexels-photo-3759285.jpeg?auto=compress&cs=tinysrgb&w=600",
    demo: "#",
    github: "#",
  },
  {
    title: "Performance Monitoring Suite",
    description:
      "Comprehensive monitoring system with real-time alerts, custom dashboards, and detailed analytics.",
    tags: ["TypeScript", "GraphQL", "React", "Grafana"],
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
    demo: "#",
    github: "#",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></span>
          Featured ProjectsSection
        </h2>

        <p className="text-slate-400 text-lg mb-16 max-w-2xl">
          Showcase of recent work spanning web, mobile, and full-stack
          development with focus on user experience and technical excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="relative overflow-hidden h-64 md:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium bg-slate-700/50 text-cyan-300 rounded-full border border-slate-600 hover:border-cyan-500/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 flex-1 justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    Live Demo
                    <ExternalLink size={18} />
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 flex-1 justify-center px-4 py-2 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
                  >
                    Code
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProjectsSection;