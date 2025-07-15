import React, { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [cooldown, setCooldown] = useState(30);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_20prince",
        "template_20prince",
        form.current,
        "K8lZMtfk_jQIi20Ak"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setStatus("success");

          setTimeout(() => {
            setStatus("cooldown");
            setCooldown(30);
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
          setStatus("idle");
        }
      );
  };

  useEffect(() => {
    let timer;
    if (status === "cooldown" && cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    if (cooldown === 0 && status === "cooldown") {
      setStatus("idle");
    }
    return () => clearInterval(timer);
  }, [status, cooldown]);

  return (
    <div
      className="p-10 flex flex-col items-center justify-center bg-white/5 z-10" id="contactus">
      <div className="py-6 px-2 bg-white/10 text-white rounded-xl border border-gray-700 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-white/10 border border-gray-500 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-white/10 border border-gray-500 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full bg-white/10 border border-gray-500 rounded-lg px-4 py-2 text-sm text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <div className="text-center">
              {status === "success" && (
                <div className="flex items-center justify-center text-green-400 gap-2 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
              {status === "cooldown" && (
                <p className="text-yellow-400 mb-2 text-sm">
                  Please wait <b>{cooldown}s</b> before sending another message
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "cooldown"}
                className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-sm transition w-full ${
                  status === "loading" || status === "cooldown"
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                } text-white`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>

          {/* Contact Info Section */}
          <div className="space-y-6 grid place-content-center mb-10">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-500" />
              <p className="text-sm text-gray-300">princetiwari.profes@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-green-500" />
              <p className="text-sm text-gray-300">+91 7891922459</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-red-500" />
              <p className="text-sm text-gray-300">Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;