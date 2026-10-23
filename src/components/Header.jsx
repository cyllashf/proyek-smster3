import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="app-header">
      <div className="container header-container">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="brand-icon">🌱</div>
          <div className="brand-text">
            <span className="brand-title">RA. Fithrah Insani</span>
            <span className="brand-badge">PPDB Online</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Navigasi Utama">
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to="/registration" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Alur Pendaftaran
              </NavLink>
            </li>
            <li>
              <NavLink to="/status" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Cek Status
              </NavLink>
            </li>
            <li>
              <NavLink to="/announcements" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Pengumuman
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* CTA and Hamburger */}
        <div className="header-actions">
          <Link to="/registration" className="btn btn-cta" onClick={closeMenu}>
            Daftar Sekarang
          </Link>
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Buka menu navigasi"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-drawer">
          <nav aria-label="Navigasi Mobile">
            <ul className="mobile-nav-list">
              <li>
                <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}>
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink to="/registration" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}>
                  Alur Pendaftaran
                </NavLink>
              </li>
              <li>
                <NavLink to="/status" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}>
                  Cek Status
                </NavLink>
              </li>
              <li>
                <NavLink to="/announcements" onClick={closeMenu} className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}>
                  Pengumuman
                </NavLink>
              </li>
              <li className="mobile-cta-item">
                <Link to="/registration" onClick={closeMenu} className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                  Daftar Sekarang
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
