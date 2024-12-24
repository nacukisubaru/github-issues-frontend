import { FC, useState } from 'react';
import styles from './menu.module.scss';
import { NavLink } from 'react-router-dom';

interface MenuItem {
  id: number;
  label: string;
  path: string;
}

interface MenuProps {
  menuItems: MenuItem[];
}

export const Menu: FC<MenuProps> = function Menu({
  menuItems
}) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Кнопка для открытия мобильного меню */}
      <button
        className={styles.menu__toggle}
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Меню */}
      <nav
        className={`${styles.menu} ${isMobileMenuOpen ? styles.menu_open : ''
          }`}
      >
        <ul className={styles.menu__list}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.menu__item}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.menu__link} ${isActive ? styles.menu__link_active : ''
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)} // Закрытие меню после клика
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Затенение фона при открытом меню на мобильных */}
      {isMobileMenuOpen && <div className={styles.menu__overlay} onClick={toggleMobileMenu}></div>}
    </>
  );
};

export default Menu;
