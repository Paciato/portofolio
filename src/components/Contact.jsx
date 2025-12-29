import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rkykrnwan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_a3gkett",
        "template_0fe4bij",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "VodYdSqUuE_MLdsd6"
      )
      .then(
        () => {
          alert("Message sent successfully");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Let's work together.
            </h2>

            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new projects, creative ideas or opportunities to be
              part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-[#111827]  border border-indigo-500/40">

                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email Me</h4>
                  <p onClick={handleCopyEmail} className="text-indigo-300 cursor-pointer select-none transition hover:text-indigo-400">
                    {copied ? "Email copied ✔" : "rkykrnwan@gmail.com"}
                  </p>


                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM (STATIC) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-black/60 backdrop-blur-xl border border-indigo-500/50 ring-1 ring-white/10 shadow-2xl shadow-black/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-base font-medium text-white mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="w-full h-12 rounded-lg bg-white/5 border border-white/10 px-4 outline-none text-gray-300 focus:border-indigo-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-base font-medium text-white mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="w-full h-12 rounded-lg bg-white/5 border border-white/10 px-4 outline-none text-gray-300 focus:border-indigo-500"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-base font-medium text-white mb-2">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="subject"
                  className="w-full h-12 rounded-lg bg-white/5 border border-white/10 px-4 outline-none text-gray-300 focus:border-indigo-500"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-base font-medium text-white mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  className="w-full min-h-[150px] resize-none rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none text-gray-300 focus:border-indigo-500"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-indigo-600 text-white text-lg font-semibold transition hover:bg-indigo-500"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
