import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_favtoyi',
      'template_6zw8j49',
      formRef.current,
      { publicKey: 'rQ043VhTbJcNjFzik' }
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      alert('Failed to send message.');
    })
    .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 py-20 px-4 md:px-8"
    >
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 flex items-center gap-4">
          <span className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></span>
          Get In Touch
        </h2>

        <p className="text-slate-400 text-lg mb-16 max-w-2xl">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
         

          {/* Right Side - Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
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
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
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
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
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
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
