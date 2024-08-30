'use client';

import { useEffect } from 'react';
import { paths } from 'src/routes/paths';

export default function Home() {
  useEffect(() => {
    window.location.replace(paths.auth.login);
  }, []);

  return <div></div>;
}
