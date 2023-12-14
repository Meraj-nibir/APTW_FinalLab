// pages/index.tsx
"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const salesChannel = () => {
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
      <h1>Welcome to Exsiting product</h1>
    </div>
  );
};

export default salesChannel;
