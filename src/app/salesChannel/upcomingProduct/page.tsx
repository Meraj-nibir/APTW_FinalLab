// pages/index.tsx
"use client"
import { useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const upcomingProduct = () => {
  const router = useRouter();

  return (
    <div>
      <nav>
        <table>
          <tr>
            <td><Link href='/'>Home</Link></td>
          </tr>
        </table>
      </nav>
      <h1>Welcome to Upcoming product</h1>
    </div>
  );
};

export default upcomingProduct;
