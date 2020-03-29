import React from 'react';
import Link from 'next/link';

interface NacProps extends React.HTMLAttributes<HTMLDivElement> {}

const Nac: React.FC<NacProps> = (props: NacProps) => {
  return (
    <nav>
      <Link href={'/'}>
        <button>Home</button>
      </Link>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
    </nav>
  );
};

Nac.defaultProps = {};

export default Nac;
