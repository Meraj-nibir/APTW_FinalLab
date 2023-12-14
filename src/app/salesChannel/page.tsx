// pages/index.tsx
"use client"
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavbarSales from '../component/salesChannelNav';

const salesChannel = () => {
  const router = useRouter();

  return (
    <div>
      <NavbarSales />
      <h1>Welcome to Sales Channel</h1>
    </div>
  );
};

export default salesChannel;
