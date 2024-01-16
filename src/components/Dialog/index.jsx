import React from "react";

const Overlay = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-black opacity-50 fixed -z-50 inset-0"></div>
      <div className="max-w-480 p-8 flex flex-col items-center gap-12 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

const Card = ({ children, onClose }) => {
  return (
    <div className="relative w-[480px] z-50 flex flex-col items-center gap-12">
      <CloseButton onClick={onClose} />
      {children}
    </div>
  );
};
const Header = ({ children }) => {
  return <div className="text-xl text-primary font-bold z-50 ">{children}</div>;
};

const Content = ({ children }) => {
  return <div className="z-50 w-full">{children}</div>;
};

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white py-2 px-4  w-full rounded-md"
    >
      {children}
    </button>
  );
};
const CloseButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-0 right-0 p-2 rounded-full bg-white hover:bg-gray-200 focus:outline-none z-50"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          fill="#E51C23"
        />
      </svg>
    </button>
  );
};

Overlay.CloseButton = CloseButton;
Overlay.Card = Card;
Overlay.Header = Header;
Overlay.Content = Content;
Overlay.Button = Button;

export default Overlay;
