# AGENTS.md — Kontrak Kerja Agent

## Misi
Bangun prototipe UI Sistem Informasi PPDB RA. Fithrah Insani sesuai `PRD.md`, `UI-GUIDELINE.md`, dan `IMPLEMENTATION_PLAN.md`.

## Urutan sumber kebenaran
1. Dokumen SOT yang sudah disetujui pemilik proyek.
2. Instruksi terbaru yang secara eksplisit disetujui pemilik proyek.
3. Implementasi saat ini.

Jika ada konflik, hentikan bagian yang konflik dan minta klarifikasi. Jangan menebak detail resmi sekolah.

## Batasan scope
- Stack wajib: React + Vite.
- Fase awal hanya front-end dan data dummy.
- Tidak menambahkan backend, database, autentikasi, pembayaran, API, upload sungguhan, analytics, atau integrasi pihak ketiga.
- Jangan memasukkan data pribadi nyata. Gunakan data fiktif.
- Informasi sekolah yang belum diverifikasi harus diberi label placeholder/demo.
- Jangan menambah fitur di luar PRD tanpa persetujuan eksplisit.

## Aturan UI/UX
- Ikuti warna, tipografi, spacing, responsivitas, aksesibilitas, dan nada bahasa pada `UI-GUIDELINE.md`.
- Gunakan komponen reusable dan semantic HTML.
- Semua tombol harus memiliki aksi yang jelas; jangan tinggalkan CTA inert.
- Form memiliki label, validasi, pesan error yang mudah dimengerti, dan state yang sesuai.
- Status tidak boleh dibedakan berdasarkan warna saja.
- Jangan menyatakan file atau data benar-benar terkirim/tersimpan.

## Aturan implementasi
- Pisahkan komponen, halaman, data dummy, dan style.
- Hindari dependency baru jika tidak dibutuhkan; jelaskan alasannya bila diperlukan.
- Jangan mengganti stack atau menambahkan framework CSS tanpa persetujuan.
- Jangan menghapus dokumen SOT atau mengubah scope diam-diam.
- Jaga kode sederhana, terbaca, dan konsisten.

## Workflow wajib
1. Baca seluruh dokumen SOT sebelum mengubah kode.
2. Kerjakan hanya fase yang telah disetujui.
3. Setelah fase selesai, laporkan file/fitur yang berubah dan validasi yang dilakukan.
4. Tampilkan preview atau cara menjalankan hasil.
5. Berhenti dan minta persetujuan sebelum fase berikutnya.
6. Jika validasi gagal, jelaskan dengan jujur; jangan mengklaim tes berhasil jika tidak dijalankan.

## Perintah validasi
- `npm install`
- `npm run dev`
- `npm run build`

## Definition of done
- Implementasi sesuai SOT yang disetujui.
- UI responsif dan interaksi penting berfungsi.
- Data dummy diberi penanda yang jelas.
- Tidak ada integrasi backend yang tidak diminta.
- Petunjuk menjalankan aplikasi dan batasan demo terdokumentasi.
