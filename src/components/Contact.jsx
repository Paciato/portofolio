import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

/* =====================
   EMAILJS CONFIG
   ===================== */
const SERVICE_ID = "service_a3gkett";
const TEMPLATE_ID = "template_0fe4bij";
const PUBLIC_KEY = "VodYdSqUuE_MLdsd6";

/* =====================
   INITIAL STATE
   ===================== */
const initialState = {
  name: "",
  email: "",
  title: "",
  message: "",
};

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rkykrnwan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDASI KETAT
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Name, email, and message are required");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          title: formData.title.trim() || "(No Subject)",
          message: formData.message.trim(),
          reply_to: formData.email.trim(),
        },
        PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀");
      setFormData(initialState);
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
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
              discussing new projects or opportunities.
            </p>

            <div className="flex items-center space-x-4 p-4 rounded-xl bg-[#111827] border border-indigo-500/40">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email Me</h4>
                <p
                  onClick={handleCopyEmail}
                  className="text-indigo-300 cursor-pointer select-none hover:text-indigo-400"
                >
                  {copied ? "Email copied ✔" : "rkykrnwan@gmail.com"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-black/60 backdrop-blur-xl border border-indigo-500/50 ring-1 ring-white/10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                label="Subject"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />

              <div>
                <label className="block text-base font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full min-h-[150px] resize-none rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-gray-300 outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl bg-indigo-600 text-white text-lg font-semibold transition hover:bg-indigo-500 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* =====================
   REUSABLE INPUT
   ===================== */
const Input = ({ label, name, type = "text", value, onChange }) => (
  <div>
    <label className="block text-base font-medium text-white mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-12 rounded-lg bg-white/5 border border-white/10 px-4 text-gray-300 outline-none focus:border-indigo-500"
    />
  </div>
);

export default Contact;
