# PPDB RA. Fithrah Insani — Web UI Prototype

Prototipe antarmuka (front-end) Sistem Informasi Penerimaan Peserta Didik Baru (PPDB) RA. Fithrah Insani berbasis React + Vite.

> **Catatan Penting:** Proyek ini adalah prototipe front-end murni untuk demonstrasi antarmuka dan pengalaman pengguna (UI/UX). Tidak terdapat backend, database, autentikasi riil, penyimpanan data pribadi, atau upload berkas ke server. Seluruh data dan status yang ditampilkan bersifat dummy / simulasi.

---

## 🚀 Fitur & Status Implementasi (Phase 1 — Fondasi Proyek)

- [x] **Setup React + Vite**: Menggunakan struktur komponen modular.
- [x] **Design Tokens & CSS**: Palet warna brand RA (Hijau primer `#16845B`, aksen kuning `#F5C84C`, aksen pink `#F2A6C7`), tipografi Inter, spacing, dan radius kartu/field.
- [x] **Navigasi Responsif**: Header dengan logo, menu navigasi desktop, menu hamburger drawer mobile, dan CTA *Daftar Sekarang*.
- [x] **Layout Terstruktur**: Kontainer responsif, grid fleksibel, dan footer dengan identitas sekolah dummy.
- [x] **Halaman Placeholder Terhubung**:
  - Beranda (`/`)
  - Alur Pendaftaran (`/registration`)
  - Cek Status (`/status`)
  - Pengumuman (`/announcements`)
- [x] **Data Dummy Terpisah**: Terisolasi di `src/data/dummyData.js`.

---

## 🛠️ Prasyarat

- Node.js (v18.x atau lebih baru)
- npm (v9.x atau lebih baru)

---

## 💻 Cara Menjalankan Aplikasi

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Development
```bash
npm run dev
```
Setelah dijalankan, buka peramban (browser) di alamat yang muncul di terminal (biasanya `http://localhost:5173/`).

### 3. Membangun Proyek untuk Produksi (Build)
```bash
npm run build
```
Hasil build yang teroptimasi akan berada pada direktori `dist/`.

---

## 📁 Struktur Direktori
```text
ra-fithrah-insani-ppdb/
├── docs/                     # Dokumen SOT (PRD, UI-Guideline, Implementation Plan, Execution Prompt)
├── public/
├── src/
│   ├── components/           # Header, Footer, Nav
│   ├── data/                 # Dummy data simulasi (dummyData.js)
│   ├── pages/                # Home, Registration, Status, Announcements
│   ├── styles/               # tokens.css, layout.css, global.css
│   ├── App.jsx               # Router & Layout
│   └── main.jsx              # Entry point React
├── AGENTS.md                 # Kontrak kerja agent
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚠️ Batasan Demo
- Tidak mengirim data ke jaringan (no network calls).
- Berkas yang diunggah pada fase berikutnya hanya simulasi lokal di browser.
- Nomor pendaftaran dan status seleksi merupakan data demo fiktif.
