import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="page-container section-padding">
      <div className="container">
        <div className="card placeholder-page-card">
          <div className="badge-demo">Demo / Simulasi Tahap 1</div>
          <h1>Formulir Pendaftaran Online</h1>
          <p className="text-muted">
            Area formulir pendaftaran PPDB RA. Fithrah Insani.
          </p>
          <div className="placeholder-info-box">
            <h3>Rencana Komponen Formulir (Fase 3):</h3>
            <ul>
              <li><strong>Langkah 1:</strong> Data Calon Peserta Didik (Nama, NIK, TTL, dll)</li>
              <li><strong>Langkah 2:</strong> Data Orang Tua / Wali</li>
              <li><strong>Langkah 3:</strong> Upload Berkas Persyaratan (Simulasi Lokal)</li>
              <li><strong>Langkah 4:</strong> Tinjau & Konfirmasi Data</li>
            </ul>
            <p className="note-text">
              ⚠️ <em>Catatan: Formulir lengkap dan simulasi upload berkas akan diimplementasikan pada Fase 3 sesuai Implementation Plan.</em>
            </p>
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

export default Registration;
