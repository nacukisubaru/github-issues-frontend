import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './menu.module.scss';

interface MenuItem {
  id: number;
  label: string;
  path: string;
}

interface MenuProps {
  menuItems: MenuItem[];
}

export const Menu: FC<MenuProps> = function Menu({ menuItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav
        className={`${styles.menu} ${isMenuOpen ? styles.menu_open : ''}`}
      >
        <div className={styles.menu__close}>
          <button onClick={closeMenu}>✖</button>
        </div>
        <ul className={styles.menu__list}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.menu__item}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.menu__link} ${isActive ? styles.menu__link_active : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <div
          className={styles.menu__overlay}
          onClick={toggleMenu}
          onKeyDown={(e) => e.key === 'Escape' && toggleMenu()}
          role="button"
          aria-label="Close menu"
          tabIndex={0}
        />
      )}

      {!isMenuOpen && (
        <button
          className={styles.menu__toggle}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          type="button"
        >
          ☰
        </button>
      )}
    </>
  );
};
