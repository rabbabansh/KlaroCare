'use client';

import { useEffect } from 'react';

const BootstrapProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const loadBootstrap = async () => {
      await import('bootstrap' /* webpackChunkName: "bootstrap" */);
    };
    loadBootstrap();
  }, []);
  
  return <>{children}</>;
};

export default BootstrapProvider; 