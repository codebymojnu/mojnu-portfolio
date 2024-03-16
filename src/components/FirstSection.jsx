import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

function FirstSection() {
  return (
    <section className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <img
            className="w-48 h-48 rounded-full mt-4 mb-4"
            src="mojnu.jpg"
            alt="Mojnu"
          />
          <h1 className="text-3xl font-bold mb-2">Md. Mojnu Miah</h1>
          <p className="text-lg mb-4">
            <Typewriter
              options={{
                strings: [
                  "React Developer",
                  "Node.js Developer",
                  "Frontend Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <div className="flex gap-8">
            <a
              href="https://www.facebook.com/mehgabin.rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="tel:+1234567890"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="mailto:135833mithila@gmail.com"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a
              href="tel:+8801719791921"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaPhone className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
