// Import React and Next.js modules
import React from 'react';
import { usePage } from 'next/navigation';

const Layout = () => {
  return (
    <div style={{
      backgroundColor: "black"
    }}>
      <>{usePage().head}</>
      <>{usePage().header}</>
      <>Your content here</>
    </div>
  );
};

export default Layout;