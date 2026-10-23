// src/components/Nav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <ul className="nav-list" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: 'var(--space-16)' }}>
    <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>Beranda</NavLink></li>
    <li><NavLink to="/registration" className={({ isActive }) => isActive ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>Alur Pendaftaran</NavLink></li>
    <li><NavLink to="/status" className={({ isActive }) => isActive ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>Cek Status</NavLink></li>
    <li><NavLink to="/announcements" className={({ isActive }) => isActive ? 'active' : ''} style={{ color: '#fff', textDecoration: 'none' }}>Pengumuman</NavLink></li>
  </ul>
);

export default Nav;
