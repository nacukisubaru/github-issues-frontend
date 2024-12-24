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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <button
        className={styles.menu__toggle}
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
        type="button"
      >
        ☰
      </button>

      <nav
        className={`${styles.menu} ${isMobileMenuOpen ? styles.menu_open : ''}`}
      >
        <ul className={styles.menu__list}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.menu__item}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.menu__link} ${isActive ? styles.menu__link_active : ''}`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isMobileMenuOpen && (
        <div
          className={styles.menu__overlay}
          onClick={toggleMobileMenu}
          onKeyDown={(e) => e.key === 'Escape' && toggleMobileMenu()}
          role="button"
          aria-label="Close menu"
          tabIndex={0}
        />
      )}
    </>
  );
};