import { ReactElement } from "react";

type NavDropDownItemProps = {
  children: ReactElement;
  title: string;
  onClick: () => void;
};

export default function NavDropDownItem({ children, title, onClick }: NavDropDownItemProps) {
  return (
    <>
      <a
        href="#"
        className="m-3 p-2 flex items-start rounded-lg hover:bg-gray-50"
        onClick={onClick}
      >
        {children}
        <div className="text-left ml-4">
          <p className="text-base   text-gray-900">{title}</p>
        </div>
      </a>
    </>
  );
}

