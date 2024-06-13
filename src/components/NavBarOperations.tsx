import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const NavBarOperation: React.FC = () => {
  return (
    <>
      <nav className="h-[90%] my-auto pr-2 w-32 flex flex-col items-center border-r-2 border-greenCustom justify-center gap-14 ml-6 text-greenCustom font-mono">
        <NavLinkWithBorder to="join">Unión</NavLinkWithBorder>
        <NavLinkWithBorder to="intersection">Intersección</NavLinkWithBorder>
        <NavLinkWithBorder to="difference">Diferencia</NavLinkWithBorder>
        <NavLinkWithBorder to="dsymmetrical">
          Diferencia simétrica
        </NavLinkWithBorder>
      </nav>
      <Outlet />
    </>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLinkWithBorder: React.FC<NavLinkProps> = ({ to, children }) => {
  const { pathname } = useLocation();
  const isActive = pathname === "/operations/" + to;

  return (
    <NavLink to={to}>
      <h2
        className={`inline-block font-bold hover:scale-105 hover:text-aquamarine duration-300 text-center ${
          isActive ? "border-b-2 border-greenCustom" : "border-blackCustom-600"
        }`}
      >
        {children}
      </h2>
    </NavLink>
  );
};

export default NavBarOperation;
