import { NavLink } from 'react-router-dom';
import './Layout.module.scss';

interface SidebarLink {
  path: string;
  label: string;
}

interface SidebarProps {
  links: SidebarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <aside className="sidebar">
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className={({ isActive }) => (isActive ? 'active' : '')}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
