// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN

import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import ElectricBorder from "./ElectricBorder"

const ContactSection = () => {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm(
        "service_favtoyi",      // Replace
        "template_6zw8j49",     // Replace
        formRef.current,
        "rQ043VhTbJcNjFzik"       // Replace
      )
      .then(
        () => {
          setSending(false)
          setSuccess(true)
          formRef.current.reset()
          setTimeout(() => setSuccess(false), 3000)
        },
        () => {
          setSending(false)
          alert("Something went wrong. Try again.")
        }
      )
  }

  return (
    <div className="hero bg-gradiant-600 min-h-screen px-4 py-14">
      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.4}
        thickness={2}
        style={{ borderRadius: 20 }}
      >
        <div id="contact" className="hero-content flex-col lg:flex-row gap-16 p-6">
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Get In Touch
            </h1>
            <p className="py-4 text-base opacity-80">
              I help creators, brands, and businesses tell better stories with
              professional <span className="font-semibold">video editing</span>,
              <span className="font-semibold"> motion graphics</span>, and
              <span className="font-semibold"> color grading</span>.
              <br />
              <br />
              Tell me about your project and I’ll reply within 24 hours.
            </p>
          </div>

          {/* Right - Form */}
          <div className="card bg-blur text-white w-full max-w-md shadow-2xl">
            <div className="card-body">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

                <div>
                  <label className="label">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="example@email.com"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">Project Type</label>
                  <select
                    name="project_type"
                    className="select select-bordered w-full"
                    required
                  >
                    <option disabled selected>Select project type</option>
                    <option>Video Editing</option>
                    <option>Motion Graphics</option>
                    <option>Color Grading</option>
                    <option>Reels / Shorts Editing</option>
                    <option>VFX & Cleanup</option>
                  </select>
                </div>

                <div>
                  <label className="label">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="textarea textarea-bordered w-full h-32"
                  ></textarea>
                </div>

                {success && (
                  <p className="text-green-500 text-sm">
                    Message sent successfully!
                  </p>
                )}

                <button
                  className="btn btn-neutral w-full mt-2"
                  disabled={sending}
                  type="submit"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </ElectricBorder>
    </div>
  )
}

export default ContactSection
