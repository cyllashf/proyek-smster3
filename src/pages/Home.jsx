import React from 'react';
import { Link } from 'react-router-dom';
import { HERO, INFO_CARDS, STEPS } from '../data/dummyData';

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="badge-demo">✨ Periode PPDB 2026/2027 (Simulasi)</span>
            <h1 className="hero-title">{HERO.title}</h1>
            <p className="hero-subtitle">{HERO.subtitle}</p>
            <p className="hero-desc">{HERO.description}</p>
            <div className="hero-actions">
              <Link to={HERO.ctaLink} className="btn btn-primary">
                {HERO.ctaText}
              </Link>
              <Link to="/status" className="btn btn-secondary">
                🔍 Cek Status Pendaftaran
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Informasi Utama PPDB</h2>
            <p className="text-muted">Ringkasan cepat proses penerimaan peserta didik baru</p>
          </div>
          <div className="grid grid-3">
            {INFO_CARDS.map((card, idx) => (
              <div key={idx} className="card info-card">
                <div className="info-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p className="text-muted">{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Flow Section */}
      <section className="section-padding section-light">
        <div className="container">
          <div className="section-header">
            <h2>Alur Pendaftaran Mudah & Ramah</h2>
            <p className="text-muted">4 tahapan sederhana untuk mendaftarkan ananda</p>
          </div>
          <div className="steps-container">
            {STEPS.map((s) => (
              <div key={s.step} className="step-item">
                <div className="step-number">{s.step}</div>
                <div className="step-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
