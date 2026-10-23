# PRD — Sistem Informasi PPDB RA. Fithrah Insani

**Status:** Draft untuk persetujuan  
**Versi:** 0.1  
**Fokus:** UI/front-end prototype dengan data dummy  
**Stack:** React + Vite

## 1. Ringkasan Produk
Website PPDB RA. Fithrah Insani membantu orang tua/wali memahami informasi penerimaan peserta didik baru, mengisi formulir, mengunggah berkas secara simulasi, memperoleh bukti pendaftaran, mengecek status, dan membaca pengumuman. Versi awal berfokus pada pengalaman antarmuka; belum memakai backend, database, autentikasi nyata, atau penyimpanan berkas sungguhan.

## 2. Tujuan
- Menyajikan informasi PPDB secara jelas dan mudah dipahami.
- Membuat alur pendaftaran terasa ringkas, ramah, dan terpercaya.
- Memperlihatkan status dan bukti pendaftaran menggunakan data dummy.
- Menyediakan UI responsif untuk desktop, tablet, dan ponsel.
- Menyiapkan fondasi front-end yang mudah dikembangkan setelah persetujuan.

## 3. Pengguna Utama
- Orang tua/wali calon peserta didik RA.
- Admin sekolah sebagai konteks informasi, bukan panel admin pada fase awal.

## 4. Ruang Lingkup Fase UI
### Termasuk
1. **Beranda** — profil singkat RA, hero PPDB, persyaratan, jadwal, langkah pendaftaran, CTA daftar.
2. **Formulir pendaftaran online** — identitas calon peserta didik, alamat, data orang tua/wali, validasi sisi klien.
3. **Upload berkas persyaratan** — komponen pilih berkas, daftar berkas, status simulasi; tanpa unggahan ke server.
4. **Bukti pendaftaran** — nomor pendaftaran dummy, ringkasan data, tombol cetak/simpan sebagai simulasi UI.
5. **Cek status pendaftaran** — input nomor pendaftaran dan tampilan status dummy: Diproses, Perlu Perbaikan, Diterima, atau Tidak Diterima.
6. **Informasi & pengumuman** — jadwal PPDB, hasil seleksi dummy, daftar ulang, dan informasi penting.

### Tidak termasuk
- Backend/API, database, autentikasi, pembayaran, notifikasi email/WhatsApp.
- Upload berkas nyata atau penyimpanan data pribadi.
- Panel admin dan proses seleksi operasional.
- Deploy/hosting atau integrasi layanan pihak ketiga.

## 5. Navigasi dan Alur
Navigasi utama: Beranda, Alur Pendaftaran, Cek Status, Pengumuman. CTA utama: **Daftar Sekarang**.

Alur calon pendaftar:
1. Membaca informasi dan persyaratan di Beranda.
2. Membuka formulir dan mengisi data.
3. Menambahkan berkas contoh melalui kontrol upload simulasi.
4. Meninjau ringkasan dan mengirim formulir.
5. Melihat bukti dengan nomor pendaftaran dummy.
6. Menggunakan nomor tersebut untuk melihat status dummy.
7. Membaca pengumuman dan petunjuk daftar ulang.

## 6. Persyaratan Fungsional UI
- Semua navigasi dan CTA utama harus dapat digunakan.
- Formulir memiliki label, placeholder, validasi wajib, dan pesan kesalahan yang jelas.
- Data hasil pengisian disimpan sementara di state aplikasi selama sesi demo.
- Upload menampilkan nama file dan status lokal; beri label bahwa berkas tidak dikirim ke server.
- Status pendaftaran dicari dari dataset dummy yang terdokumentasi.
- Halaman pengumuman menampilkan tanggal, kategori, judul, dan ringkasan.
- Sediakan state kosong, sukses, dan error yang masuk akal.

## 7. Data Dummy
Gunakan data fiktif. Contoh nomor pendaftaran: `RAFI-2026-00124`. Status dan jadwal adalah konten demo, bukan informasi resmi. Tampilkan catatan bahwa data harus dikonfirmasi sekolah sebelum produksi.

## 8. Kriteria Penerimaan
- Enam fitur ruang lingkup tersedia dan dapat didemokan.
- Tampilan konsisten dengan UI Guideline.
- Layout responsif dan tidak memiliki overflow horizontal pada viewport ponsel umum.
- Formulir memiliki validasi sisi klien dan ringkasan data.
- Tidak ada klaim bahwa data/berkas benar-benar tersimpan atau terkirim.
- Proyek dapat dijalankan melalui `npm install` dan `npm run dev`.
- Tidak mengimplementasikan fitur di luar ruang lingkup tanpa persetujuan.

## 9. Asumsi dan Pertanyaan Terbuka
- Logo resmi, alamat, kontak, periode PPDB, biaya (jika ada), dan persyaratan final belum diberikan.
- Semua informasi tersebut menggunakan placeholder/dummy sampai pemilik proyek menyetujuinya.
- Fase ini menghasilkan prototipe UI, bukan sistem PPDB siap produksi.
