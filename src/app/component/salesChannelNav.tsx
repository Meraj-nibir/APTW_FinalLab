// components/Navbar.tsx
"use client"
import Link from 'next/link';

const NavbarSales = () => {
  return (
    <nav>
        <table>
            <tr>
                <td>
                <Link href="/">
                    Home
                </Link>
                </td>

                <td>
                <Link href="salesChannel/">
                    Exsisting product
                </Link>
                </td>

                <td>
                <Link href="auth/registration">
                    Upcomming Product
                </Link>
                </td>

                <td>
                <Link href="/logout">
                    Logout
                </Link>
                </td>
            </tr>
        </table>
    </nav>
  );
};

export default NavbarSales;
