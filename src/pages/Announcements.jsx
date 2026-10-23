import React from 'react';
import { Link } from 'react-router-dom';
import { ANNOUNCEMENTS } from '../data/dummyData';

const Announcements = () => {
  return (
    <div className="page-container section-padding">
      <div className="container">
        <div className="section-header">
          <div className="badge-demo">Demo / Informasi Simulasi</div>
          <h1>Informasi & Pengumuman</h1>
          <p className="text-muted">
            Update berkala terkait seleksi, jadwal, dan daftar ulang calon peserta didik baru.
          </p>
        </div>

        <div className="grid grid-2" style={{ marginTop: 'var(--space-24)' }}>
          {ANNOUNCEMENTS.map((item) => (
            <div key={item.id} className="card announcement-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-12)' }}>
                <span className="badge-category">{item.category}</span>
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>{item.date}</span>
              </div>
              <h3 style={{ marginBottom: 'var(--space-8)' }}>{item.title}</h3>
              <p className="text-muted" style={{ lineHeight: 1.6 }}>{item.summary}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-32)' }}>
          <Link to="/" className="btn btn-secondary">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
