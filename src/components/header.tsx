import Link from 'next/link';
import Logo from './logo';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'All Events', path: '/events/all' },
];

export default function Header() {
  return (
    <header className='flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9'>
      <Logo />

      <nav>
        <ul className='flex gap-x-6 text-sm'>
          {routes.map((route) => (
            <li
              key={route.path}
              className='text-white/50 hover:text-white transition cursor-pointer'
            >
              <Link href={route.path} />
              {route.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
