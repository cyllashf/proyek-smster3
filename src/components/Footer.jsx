import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="container footer-container">
        <div className="footer-info">
          <div className="footer-brand">
            <span className="footer-logo">🌱 RA. Fithrah Insani</span>
            <span className="badge-demo">Simulasi UI / Demo Prototype</span>
          </div>
          <p className="footer-desc">
            Sistem Informasi Penerimaan Peserta Didik Baru (PPDB) berbasis web untuk kemudahan pendaftaran putra-putri tercinta.
          </p>
        </div>
        <div className="footer-contact">
          <h4>Kontak Sekolah (Demo)</h4>
          <p>📍 Jl. Melati Indah No. 12, Bandung (Alamat Demo)</p>
          <p>📞 Telp / WhatsApp: 0812-3456-7890 (Placeholder)</p>
          <p>✉️ Email: info@rafithrahinsani.sch.id (Simulasi)</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 RA. Fithrah Insani PPDB Prototype. Seluruh data yang ditampilkan adalah data fiktif untuk keperluan demonstrasi UI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
