import { useState } from "react";

function Contact() {
  const [formData, setformdata] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });
  const handleChange = (e) => {
    setformdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("message are submited");
  };

  return (
      <section
      id="contact"
      className="w-full py-10 sm:py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-5  bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
           Let's Connect 
          </h2>
          <p className="mt-2 text-base sm:text-lg">
            Feel free to reach out for collaborations or queries
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-blue/70 backdrop-blur-lg
                     p-6 sm:p-8 md:p-10
                     rounded-2xl
                     shadow-md
                     space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 rounded-lg border outline-none bg-blue-200"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-3 rounded-lg border outline-none  bg-blue-200"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg border outline-none resize-none  bg-blue-200 "
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold
                       bg-blue-300 text-white
                       hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    

    </section>
  );
}

export default Contact;


