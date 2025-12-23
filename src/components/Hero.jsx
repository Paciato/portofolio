import image from "/public/profil.jpg"
import { motion } from "framer-motion"

const hero = () => {
  return (
    <div id="home" className="flex min-h-screen w-full items-center justify-center px-16 py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <img src={image} alt="Foto profil Rizky Kurniawan" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-400 md:w-[350px]" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-4xl font-light text-transparent md:text-7xl">
            Rizky Kurniawan
          </h1>

          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-2xl text-transparent md:text-3xl">
            Web Developer
          </h3>

          <p className="text-pretty text-sm text-gray-400 md:text-base">
            I'm a backend-focused web developer with hands-on experience in PHP and Laravel. I build REST APIs, handle database design and migrations, and create admin dashboards and reports to support data-driven applications. My work emphasizes clarity, scalability, and practical backend solutions.
          </p>
        </motion.div>
      </div>
    </div>

  )
}

export default hero