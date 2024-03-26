import { FaDownload } from "react-icons/fa";

export default function DownloadCV() {
  const downloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1czbcleU6Sfd9LcTC-hDVobm4xtWeEo4O/view",
      "_blank"
    );
  };

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 text-white px-8 py-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300"
            onClick={downloadCV}
          >
            <FaDownload className="mr-2" />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
