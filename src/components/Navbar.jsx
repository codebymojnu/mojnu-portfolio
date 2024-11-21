import { Link } from "react-router-dom";
function Navbar() {
  const downloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1PO5ePARXWN3BAYU0BwARBKnwwKecMYn7/view",
      "_blank"
    );
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#3f3f3f] bg-[#1E1F24] py-4">
      <div
        style={{
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/">
            <img
              className="max-w-[32px] lg:max-w-[44px] rounded-full"
              src="./mojnu.jpg"
              alt="logo"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="btn-primary">
              <img src="./home.svg" alt="Home" />
              Home
            </Link>
            <Link to="/projects" className="btn-primary">
              <img src="./projects.svg" alt="Projects" />
              Projects
            </Link>
            <Link to="/videos" className="btn-primary">
              <img src="./videos.svg" alt="videos" />
              Videos
            </Link>
            <Link to="/blog" className="btn-primary">
              <img src="./blog.svg" alt="blog" />
              Posts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
