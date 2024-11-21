import { FaDownload } from "react-icons/fa";

export default function DownloadCV() {
  return (
    <section className="mb-8 lg:mb-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <button
            className="px-8 py-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300"
            onClick={downloadCV}
          >
            <FaDownload className="mr-2" />
            CV
          </button>
        </div>
      </div>
    </section>
  );
}
