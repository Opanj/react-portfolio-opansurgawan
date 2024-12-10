const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Built with{" "}
        <a
          href="https://react.dev"
          target="_blank"
          className="text-purple-400 hover:text-slate-200"
        >
          React.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          className="text-purple-400 hover:text-slate-200"
        >
          Tailwind CSS
        </a>{" "}
        , deployed with{" "}
        <a
          href="https://firebase.google.com"
          target="_blank"
          className="text-purple-400 hover:text-slate-200"
        >
          Firebase
        </a>
        . All text is set in the {""}
        <a
          href="https://fonts.google.com/specimen/Inter"
          target="_blank"
          className="text-purple-400 hover:text-slate-200"
        >
          Inter
        </a>{" "}
        google fonts.
      </p>

      {/* <p className="pt-10 flex flex-wrap gap-4">
        <a href="https://wa.me/6281937008791">
          <span className="text-purple-400 hover:text-slate-200 mr-4">
            6281937008791
          </span>
        </a>
        <a href="mailto:m.taopansurgawan@gmail.com">
          <span className="text-purple-400 hover:text-slate-200 mr-4">
            m.taopansurgawan@gmail.com
          </span>
        </a>
      </p> */}
    </footer>
  );
};

export default Footer;
