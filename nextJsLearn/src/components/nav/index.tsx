import React, { FormEvent, useState } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {}

const countries = [
  { name: 'United States', route: 'us' },
  { name: 'Brazil', route: 'br' }
];

const Nav: React.FC<NavProps> = (props: NavProps) => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(router.query.country);

  const selectCountry = (e: FormEvent<HTMLSelectElement>) => {
    const countryValue = e.currentTarget.value;
    setSelectedCountry(countryValue);
    router.push('/[country]', `/${countryValue}`);
  };

  return (
    <nav className={styles.nav}>
      <select onChange={selectCountry} value={selectedCountry}>
        {countries.map(country => (
          <option key={country.route} value={country.route}>
            {country.name}
          </option>
        ))}
      </select>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  );
};

Nav.defaultProps = {};

export default Nav;
