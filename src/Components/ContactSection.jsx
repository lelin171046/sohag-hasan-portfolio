import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import emailjs from "@emailjs/browser";

  
function ContactSection() {
   const formRef = useRef();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_jjx4f0g",
        "template_wvw2j3u",
        formRef.current,
        {
          publicKey: "mLv6pCC_gZaVdJ9Yv5SyJ",
        }
      )
      .then(() => {
        alert("Message Sent Successfully!");
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></span>
          Get In Touch
        </h2>

        <p className="text-slate-400 text-lg mb-16 max-w-2xl">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div className="space-y-8">

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="mt-1 p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                <a
                  href="mailto:hello@example.com"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  hello@example.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="mt-1 p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg">
                <Phone className="text-cyan-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-white">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  <Github size={24} />
                </a>

                <a
                  href="#"
                  className="p-3 bg-slate-800/50 border border-slate-700 text-slate-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={loading || submitted}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg flex justify-center gap-2"
            >
              {submitted ? "Message Sent!" : loading ? "Sending..." : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
