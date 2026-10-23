# Implementation Plan — UI Prototype PPDB RA. Fithrah Insani

**Status:** Draft untuk persetujuan  
**Teknologi:** React + Vite  
**Batasan:** Front-end saja, data dummy, tanpa backend.

## Prinsip Eksekusi
- Jangan mulai fase implementasi sebelum PRD, UI Guideline, dan rencana ini disetujui.
- Selesaikan satu fase, tampilkan hasil/preview, lalu minta persetujuan eksplisit sebelum lanjut.
- Jangan menambah fitur atau mengubah ruang lingkup tanpa persetujuan.
- Hindari dependensi berlebihan; utamakan komponen reusable dan CSS yang terstruktur.

## Fase 0 — Persetujuan SOT
**Output:** PRD.md, UI-GUIDELINE.md, IMPLEMENTATION_PLAN.md.  
**Selesai jika:** pengguna menyetujui ketiga dokumen atau memberikan revisi.

## Fase 1 — Fondasi Proyek
**Output:** proyek React + Vite, struktur folder, routing sederhana, design tokens, header/footer, layout responsif, data dummy terpisah.  
**Validasi:** aplikasi berjalan dengan `npm run dev`; navigasi utama bekerja.  
**Gate:** minta persetujuan sebelum fase berikutnya.

## Fase 2 — Beranda
**Output:** hero, profil RA, persyaratan, jadwal, alur, pengumuman terbaru, CTA.  
**Validasi:** CTA menuju formulir/status yang tepat; tampilan mobile diperiksa.  
**Gate:** minta persetujuan.

## Fase 3 — Formulir dan Upload Simulasi
**Output:** data calon peserta didik, data orang tua/wali, validasi, komponen upload lokal, tinjau data.  
**Validasi:** validasi wajib dan pesan kesalahan; file hanya tampil sebagai simulasi lokal.  
**Gate:** minta persetujuan.

## Fase 4 — Bukti Pendaftaran dan Cek Status
**Output:** nomor pendaftaran dummy, ringkasan, pencarian status dari dataset demo.  
**Validasi:** hasil ditemukan/tidak ditemukan; status memiliki teks yang jelas.  
**Gate:** minta persetujuan.

## Fase 5 — Informasi dan Pengumuman
**Output:** daftar pengumuman, kategori, tanggal, informasi daftar ulang dummy.  
**Validasi:** konten konsisten dan jelas ditandai sebagai simulasi.  
**Gate:** minta persetujuan.

## Fase 6 — Quality Pass dan Paket
**Output:** perbaikan responsivitas, aksesibilitas dasar, pemeriksaan console, README, dan ZIP proyek.  
**Validasi:** langkah instalasi teruji; tidak ada fitur backend tersirat.  
**Gate:** minta persetujuan final.

## Struktur Folder Target
```text
ra-fithrah-insani-ppdb/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── PRD.md
├── UI-GUIDELINE.md
├── IMPLEMENTATION_PLAN.md
├── AGENTS.md
├── EXECUTION_PROMPT.md
├── index.html
├── package.json
└── README.md
```

## Aturan Data dan Privasi
- Data demo harus fiktif.
- Jangan meminta atau memasukkan data pribadi nyata ke dataset.
- Jangan mengirim data ke jaringan atau menyimpan berkas pada server.
- Beri penanda “Demo / data simulasi” pada informasi yang belum diverifikasi.

## Definition of Done
- Fitur yang disetujui selesai dan dapat digunakan dalam demo.
- Konsisten dengan SOT yang telah disetujui.
- Responsif, dengan state loading/empty/error/success yang relevan.
- Tidak ada klaim penyimpanan/pengiriman nyata.
- Dokumentasi menjalankan proyek tersedia.
- ZIP hanya berisi file proyek yang diperlukan, tanpa `node_modules`.
