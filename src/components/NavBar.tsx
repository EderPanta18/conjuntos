import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="flex justify-center gap-14 my-3 mx-10 text-greenCustom font-mono">
        <NavLinkWithBorder exact to="/">
          Inicio
        </NavLinkWithBorder>
        <NavLinkWithBorder to="/actions">Acciones</NavLinkWithBorder>
        <NavLinkWithBorder to="/operations">Operaciones</NavLinkWithBorder>
        <NavLinkWithBorder to="/propertys">Proppiedades</NavLinkWithBorder>
      </nav>
      <Outlet />
    </>
  );
};

interface NavLinkProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}

const NavLinkWithBorder: React.FC<NavLinkProps> = ({ to, exact, children }) => {
  const { pathname } = useLocation();
  const isActive = exact ? pathname === to : pathname.startsWith(to);

  return (
    <NavLink
      to={to}
      className={`relative pb-1 ${
        isActive ? "border-b-2 border-greenCustom hover:border-aquamarine" : ""
      }`}
    >
      <h2 className="font-bold hover:scale-105 hover:text-aquamarine duration-300">
        {children}
      </h2>
    </NavLink>
  );
};

export default NavBar;
