import React from 'react'
import { Link } from "react-router-dom";

export default function NavItems({ titleItem, linkItem }) {
  return (
    <li className="bg-bluegeneraleinformation text-white hover:bg-violetnav px-8 py-3">
      <Link
        to={linkItem}
        className="block py-2 pr-4 pl-3  bg-blue-700 rounded md:bg-transparent md:p-0 "
      >
        {titleItem}
      </Link>
    </li>
  );
}
