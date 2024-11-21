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
    <section className="mb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h1 className="text-9xl sm:text-2xl font-bold">Md. Mojnu Miah</h1>
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

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/mojnu0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/mojnu0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="mailto:thisismojnu@gmail.com"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaEnvelope className="text-lg" />
            </a>
            <a
              href="tel:+8801788262433"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaPhone className="text-lg" />
            </a>
            <a
              href="https://github.com/codebymojnu"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <FaGithub className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
