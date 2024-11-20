import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // Dropdown state
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <button
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        ref={btnDropdownRef}
        onClick={() =>
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
        }
      >
        Demo Pages
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
          Admin Layout
        </span>
        <Link href="/admin/dashboard" className="dropdown-link">
          Dashboard
        </Link>
        <Link href="/admin/settings" className="dropdown-link">
          Settings
        </Link>
        <Link href="/admin/tables" className="dropdown-link">
          Tables
        </Link>
        <Link href="/admin/maps" className="dropdown-link">
          Maps
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
          Auth Layout
        </span>
        <Link href="/auth/login" className="dropdown-link">
          Login
        </Link>
        <Link href="/auth/register" className="dropdown-link">
          Register
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span className="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400">
          No Layout
        </span>
        <Link href="/landing" className="dropdown-link">
          Landing
        </Link>
        <Link href="/profile" className="dropdown-link">
          Profile
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
