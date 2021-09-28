import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

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
    <nav styles={nav}>
      <p>
        Avatar
      </p>
      <h1>German Bobadilla</h1>
      <p>eLearning | UI Experience Developer</p>
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
      <hr />
      <h2>Social icons</h2>
    </nav>
  )
}

export default Navbar
