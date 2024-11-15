export const Header = () => {
  const headerOptions = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-16 ">
      <header className="bg-[#DFF2EB] ">
        <nav>
          <ul className="flex items-end justify-end space-x-5 p-4">
            {headerOptions.map((option, index) => (
              <li key={index}>
                <a href={option.path}>{option.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="fixed z-0 bottom-0 left-0 w-full ">
      <footer className="bg-[#DFF2EB]">
        <ul className="flex items-end justify-end space-x-5 p-4">
          <li>
            <a href="/terms">Terms</a>
          </li>
          <li>
            <a href="/privacy">Privacy</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
