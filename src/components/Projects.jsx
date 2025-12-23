import image1 from "/public/gudang.png";
import image2 from "/public/chatbot.png";
import image3 from "/public/jagung.jpg";
import image4 from "/public/pln.jpg";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Warehouse Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit suscipit beatae saepe ut necessitatibus provident doloribus atque est molestias iusto doloremque deserunt odit ratione aut, ducimus nam, officia eaque quaerat!",
    technologies: ["Laravel", "PHP", "MySQL"],
  },

  {
    image: image2,
    title: "Website HPZ Crew Chatbot",
    description:
      "Proyek pengembangan website komunitas HPZ Crew dengan integrasi chatbot berbasis API yang dirancang untuk menjawab pertanyaan pengguna secara otomatis dan membantu pengelolaan informasi di dalam komunitas.",
    technologies: ["PHP", "Supabase", "Postman"],
  },

  {
    image: image3,
    title: "Website Klasifikasi Penyakit Tanaman Jagung",
    description:
      "Proyek pengembangan aplikasi web berbasis machine learning yang memanfaatkan model Convolutional Neural Network (CNN) untuk mengklasifikasikan empat jenis penyakit pada daun jagung. Sistem ini mampu mendeteksi kondisi daun berdasarkan citra yang diunggah pengguna, membantu petani dalam mengidentifikasi penyakit secara cepat dan akurat.",
    technologies: ["Python", "Google Colab", "Streamlit"],
  },

  {
    image: image4,
    title: "Website Dashboard PLN UIP Sumbagsel",
    description:
      "Proyek pengembangan website internal untuk PT PLN UIP Sumbagsel yang menampilkan dashboard agenda kegiatan dan informasi penting perusahaan. Sistem ini dirancang untuk mempermudah monitoring, visualisasi data, dan koordinasi antar divisi secara efisien menggunakan pendekatan berbasis web interaktif.",
    technologies: ["Laravel", "PHP", "MySQL"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">
              {project.title}
            </div>
            <p className="text-gray-400">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal >

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
