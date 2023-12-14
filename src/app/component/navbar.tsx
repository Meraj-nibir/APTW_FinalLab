// components/Navbar.tsx
"use client"
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="">
            Login
          </Link>
        </li>
        <li>
          <Link href="/registration">
            Registration
          </Link>
        </li>
        <li>
          <Link href="/logout">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
