import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Status = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="page-container section-padding">
      <div className="container">
        <div className="card placeholder-page-card">
          <div className="badge-demo">Demo / Simulasi Tahap 1</div>
          <h1>Cek Status Pendaftaran</h1>
          <p className="text-muted">
            Lacak kemajuan berkas dan hasil seleksi pendaftaran peserta didik baru.
          </p>
          
          <div className="status-search-preview" style={{ margin: 'var(--space-24) 0' }}>
            <div style={{ display: 'flex', gap: 'var(--space-8)', maxWidth: '500px' }}>
              <input
                type="text"
                placeholder="Contoh: RAFI-2026-00124"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="input-field"
                style={{ flex: 1 }}
              />
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => alert('Fitur pencarian status aktif penuh akan diimplementasikan pada Fase 4 dengan dataset demo.')}
              >
                Cek Status
              </button>
            </div>
            <p className="note-text" style={{ marginTop: 'var(--space-8)' }}>
              💡 Gunakan nomor dummy contoh: <code>RAFI-2026-00124</code> (Fitur aktif pada Fase 4).
            </p>
          </div>

          <div className="placeholder-info-box">
            <h3>Status yang Akan Tersedia:</h3>
            <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
              <span className="status-badge badge-process">🟡 Diproses</span>
              <span className="status-badge badge-repair">🌸 Perlu Perbaikan</span>
              <span className="status-badge badge-accepted">🟢 Diterima</span>
              <span className="status-badge badge-rejected">⚪ Tidak Diterima</span>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-24)' }}>
            <Link to="/" className="btn btn-secondary">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
