import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <div className="text-neutral-300 antialiased selection:bg-blue-600 selection:text-white scroll-smooth">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      {/* content */}
      <div className="scroll-smooth">
        <div className="group/spotlight relative">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
