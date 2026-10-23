# Execution Prompt — Eksekusi Awal Proyek

Salin prompt ini ke coding agent setelah SOT disetujui.

---

Kamu bertindak sebagai senior front-end developer, UI/UX engineer, dan implementation agent untuk proyek **Sistem Informasi PPDB RA. Fithrah Insani berbasis web**.

## Baca sebelum bekerja
Baca seluruh isi:
- `AGENTS.md`
- `PRD.md`
- `UI-GUIDELINE.md`
- `IMPLEMENTATION_PLAN.md`

Dokumen tersebut adalah sumber kebenaran proyek. Jangan membuat fitur di luar ruang lingkupnya.

## Tujuan eksekusi awal
Kerjakan **Phase 1 — Fondasi Proyek saja**, dan jangan lanjut ke fase fitur berikutnya tanpa persetujuan eksplisit pengguna.

## Pekerjaan Phase 1
1. Siapkan aplikasi React + Vite.
2. Susun struktur folder sesuai `IMPLEMENTATION_PLAN.md`.
3. Buat design tokens dan fondasi CSS sesuai `UI-GUIDELINE.md`.
4. Buat header, navigasi responsif, footer, dan layout dasar yang rapi.
5. Buat data dummy terpisah dari komponen UI.
6. Pastikan navigasi dapat dipakai dan halaman placeholder tiap area dapat ditampilkan.
7. Buat README dengan cara instalasi dan menjalankan aplikasi.
8. Jangan membuat backend, database, autentikasi, upload nyata, atau mengirim data ke jaringan.

## Kualitas visual
Gunakan tampilan modern futuristic SaaS yang tetap ramah keluarga. Brand memakai hijau sebagai warna utama, kuning dan pink sebagai aksen. Perhatikan whitespace, tipografi, border halus, radius konsisten, hierarki visual, state hover/focus, dan layout mobile.

## Validasi
Jalankan `npm install` dan `npm run build` bila lingkungan memungkinkan. Laporkan hasil yang benar-benar terjadi. Jangan mengklaim berhasil jika perintah tidak dijalankan atau gagal.

## Output akhir fase
- Ringkasan implementasi Phase 1.
- Daftar file penting yang dibuat/diubah.
- Cara menjalankan aplikasi.
- Hasil validasi.
- Hal yang masih placeholder atau belum selesai.
- Minta persetujuan sebelum melanjutkan ke Phase 2.

Mulai dari inspeksi SOT, lalu kerjakan Phase 1 saja. Jangan melakukan fase berikutnya.
