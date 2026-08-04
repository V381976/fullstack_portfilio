"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaEnvelopeOpenText, FaReply } from "react-icons/fa";
import { submitInquiry } from "@/lib/api";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sender, setSender] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await submitInquiry({
        ...formData,
        type: "GENERAL",
      });

      setSender({ name: formData.name.trim(), email: formData.email.trim() });
      setSubmitted(true);
      setStatus({
        type: "success",
        message:
          res.message ||
          "Thank you! Your message was sent successfully. I will reply soon.",
      });
      setFormData(initialForm);
    } catch (error) {
      setSubmitted(false);
      setStatus({
        type: "error",
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-10 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="mt-2 text-base sm:text-lg">
            Feel free to reach out for collaborations or queries
          </p>
        </div>

        {submitted && status.type === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-teal-200/70 bg-gradient-to-br from-white/90 via-sky-50 to-teal-50 p-8 sm:p-12 text-center shadow-xl"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-teal-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-purple-300/25 blur-3xl" />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
              className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-sky-500 text-white shadow-lg"
            >
              <FaCheckCircle className="text-4xl" />
            </motion.div>

            <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Inquiry received
            </p>

            <h3 className="relative mt-3 text-3xl sm:text-4xl font-bold text-slate-800">
              Thank you{sender.name ? `, ${sender.name}` : ""}!
            </h3>

            <p className="relative mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Your message was sent <span className="font-semibold text-teal-700">successfully</span>.
              I&apos;ve received your inquiry and will get back to you soon.
            </p>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto text-left">
              <div className="rounded-2xl bg-white/80 border border-sky-100 p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <FaEnvelopeOpenText className="mt-1 text-sky-600 text-xl shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">Confirmation sent</p>
                    <p className="mt-1 text-sm text-slate-600">
                      A thank-you email was sent to{" "}
                      <span className="font-medium text-slate-800 break-all">
                        {sender.email || "your inbox"}
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/80 border border-teal-100 p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <FaReply className="mt-1 text-teal-600 text-xl shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800">What&apos;s next?</p>
                    <p className="mt-1 text-sm text-slate-600">
                      I usually reply within 24 hours. Keep an eye on your email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStatus({ type: "", message: "" });
                  setSender({ name: "", email: "" });
                }}
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-teal-500 to-sky-500 text-white shadow-md hover:opacity-90 transition"
              >
                Send another message
              </button>
              <a
                href="#home"
                className="px-6 py-3 rounded-xl font-semibold bg-white/90 text-slate-700 border border-slate-200 hover:bg-white transition"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-blue/70 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl shadow-md space-y-6"
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-3 rounded-lg border outline-none bg-blue-200"
                required
                minLength={2}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full p-3 rounded-lg border outline-none bg-blue-200"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg border outline-none resize-none bg-blue-200"
                required
                minLength={10}
              />
            </div>

            {status.type === "error" && status.message && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold bg-blue-300 text-white hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
