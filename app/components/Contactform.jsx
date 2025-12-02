import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();

    // Basisvalidatie
    if (!naam || !email || !bericht) {
      alert("Vul alstublieft alle velden in.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_u1vno1x",      // jouw Service ID
        "template_nxnypsa",     // jouw Template ID
        {
          user_name: naam,
          user_email: email,
          message: bericht,
        },
        "ofMOlvelPfitQeNPc"    // jouw Public Key
      )
      .then(() => {
        alert("Bericht verstuurd!");
        setNaam("");
        setEmail("");
        setBericht("");
        setLoading(false);
      })
      .catch((err) => {
        console.error("EmailJS error:", err.text || err);
        alert("Er is iets misgegaan bij het versturen van je bericht.");
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSend} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="NAAM"
        value={naam}
        onChange={(e) => setNaam(e.target.value)}
        className="font-coolvetica w-full bg-gray-900 border-2 border-gray-700 p-3 font-bold text-white focus:border-yellow-400 focus:outline-none transition rounded"
        required
      />

      <input
        type="email"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="font-coolvetica w-full bg-gray-900 border-2 border-gray-700 p-3 font-bold text-white focus:border-yellow-400 focus:outline-none transition rounded"
        required
      />

      <textarea
        placeholder="BERICHT"
        rows={5}
        value={bericht}
        onChange={(e) => setBericht(e.target.value)}
        className="font-coolvetica w-full bg-gray-900 border-2 border-gray-700 p-3 font-bold text-white focus:border-yellow-400 focus:outline-none transition resize-none rounded"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 font-black text-lg tracking-wider transition rounded ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-yellow-400 text-black hover:bg-white"
        }`}
      >
        {loading ? "Versturen..." : "STUUR"}
      </button>
    </form>
  );
}
