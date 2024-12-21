import './Layout.module.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">MyApp</div>
      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default Header;
