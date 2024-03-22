import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

function FirstSection() {
  return (
    <section className="py-4 mb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img
              src="mojnu.jpg"
              alt="mojnu"
              className="w-full h-full object-cover"
            />
          </div>
          <img src="/name.png" alt="mojnu" />

          <p className="text-2xl mb-4">
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
              href="https://www.facebook.com/mojnu0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mojnu0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="mailto:thisismojnu@gmail.com"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaEnvelope className="text-3xl" />
            </a>
            <a
              href="tel:+8801788262433"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaPhone className="text-3xl" />
            </a>
            <a
              href="https://github.com/codebymojnu"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
