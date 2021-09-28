import Link from 'next/link';

function Navbar() {
  const routes = [
    {
      name: 'Projects',
      path: '/',
      description: 'Hello'
    },
    {
      name: 'Education',
      path: '/education',
      description: 'Hello'
    },
    {
      name: 'Experience',
      path: '/experience',
      description: 'Hello'
    },
    {
      name: 'Skills',
      path: '/skills',
      description: 'Hello'
    },
    {
      name: 'Contact',
      path: '/contact',
      description: 'Hello'
    }
  ];
  return (
    <nav>
      <div className="logo">
        <p>Avatar</p>
        <h1>German Bobadilla</h1>        
      </div>
      <ul>
        {routes.map(({ name, path }) => {
          return (
            <li key={name}>
              <Link href={path}>
                <a>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <section>Social icons</section>
    </nav>
  );
}

export default Navbar;
