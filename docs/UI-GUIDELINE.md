# UI Guideline — RA. Fithrah Insani PPDB

**Arah visual:** modern, futuristik ringan, SaaS yang ramah keluarga; bersih, optimistis, mudah digunakan.  
**Status:** Draft untuk persetujuan.

## 1. Prinsip Desain
- **Jelas dulu:** hierarki informasi dan CTA mudah dikenali.
- **Ramah orang tua:** bahasa sederhana, tidak terlalu teknis.
- **Modern tanpa berlebihan:** gunakan gradient dan aksen futuristik secara terbatas.
- **Konsisten:** spacing, radius, tombol, field, dan status memakai pola yang sama.
- **Aksesibel:** kontras teks memadai, label selalu terlihat, fokus keyboard jelas.

## 2. Palet Warna
| Token | Nilai | Pemakaian |
|---|---|---|
| Green / Primary | `#16845B` | CTA utama, link aktif, indikator progres |
| Green / Deep | `#0B4F3A` | Heading aksen, footer, teks di area hijau |
| Yellow / Accent | `#F5C84C` | Sorotan, ikon, badge penting |
| Pink / Accent | `#F2A6C7` | Ornamen, ilustrasi, highlight sekunder |
| Background | `#F7FAF8` | Latar utama |
| Surface | `#FFFFFF` | Kartu dan formulir |
| Text | `#17231D` | Teks utama |
| Muted | `#64736A` | Teks sekunder |
| Border | `#DDE7E0` | Garis field dan pemisah |
| Error | `#B42318` | Pesan kesalahan |

Warna pink dan kuning digunakan sebagai aksen, bukan latar teks panjang. Pastikan kontras teks tetap terbaca.

## 3. Tipografi
- Font utama: `Inter`, fallback `system-ui, sans-serif`.
- Heading: tegas, pendek, line-height sekitar 1.1–1.25.
- Body: 14–16 px, line-height 1.5–1.7.
- Label/form helper: minimal 13–14 px.
- Hindari paragraf panjang di hero; gunakan ringkasan dan bullet.

## 4. Layout dan Spacing
- Kontainer desktop: maksimum sekitar 1200 px, margin otomatis.
- Grid desktop: 12 kolom; gunakan 2 kolom untuk hero dan formulir bila sesuai.
- Spacing berbasis kelipatan 4/8 px.
- Radius kartu: 16–24 px; field: 10–12 px; tombol: 12 px.
- Shadow halus, border tipis, ruang kosong cukup.
- Breakpoint acuan: mobile <640 px, tablet 640–1023 px, desktop ≥1024 px.

## 5. Komponen
- **Header:** logo/wordmark, navigasi, CTA “Daftar Sekarang”; menu ringkas di mobile.
- **Hero:** label periode PPDB, heading, deskripsi singkat, CTA primer dan link sekunder.
- **Info card:** ikon sederhana, judul, isi singkat.
- **Form field:** label permanen, helper text bila dibutuhkan, error dekat field.
- **Upload tile:** nama dokumen, format/ukuran demo, tombol pilih, status file.
- **Status badge:** Diproses = kuning; Perlu Perbaikan = pink; Diterima = hijau; Tidak Diterima = netral/merah dengan teks yang jelas.
- **Announcement card:** kategori, tanggal, judul, ringkasan.
- **Footer:** identitas sekolah dan kontak placeholder yang diberi label demo.

## 6. Halaman dan Konten
### Beranda
Hero dengan CTA, ringkasan profil, persyaratan, jadwal PPDB dummy, langkah pendaftaran, pengumuman terbaru, footer.

### Formulir
Indikator langkah: Data Anak → Orang Tua/Wali → Berkas → Tinjau. Kelompokkan field dan tampilkan progres. Pada layar kecil, satu kolom.

### Upload Berkas
Daftar dokumen dengan status “Belum dipilih” atau “Siap (demo)”. Jelaskan bahwa file hanya ditampilkan secara lokal dan tidak diunggah.

### Bukti Pendaftaran
Kartu bukti dengan nomor, tanggal demo, status awal, dan ringkasan data. Tombol cetak dapat memanggil dialog cetak browser jika disetujui saat implementasi.

### Cek Status
Input nomor pendaftaran, tombol cari, hasil status, catatan dan langkah selanjutnya. Sertakan contoh nomor untuk demo.

### Informasi & Pengumuman
Daftar pengumuman dengan tanggal, kategori, ringkasan dan label “Informasi simulasi”.

## 7. Interaksi dan State
- Hover/focus/active/disabled untuk tombol dan field.
- Validasi langsung setelah field disentuh atau saat submit.
- Konfirmasi sebelum mengosongkan formulir.
- Feedback sukses yang spesifik; hindari toast yang menghilang terlalu cepat.
- Status tidak hanya dibedakan dengan warna; selalu sertakan teks/ikon.

## 8. Responsivitas dan Aksesibilitas
- Navigasi keyboard, outline fokus yang terlihat, label terhubung ke field.
- Tombol sentuh cukup besar (target sekitar 44×44 px).
- Jangan mengandalkan warna saja untuk makna.
- Gunakan semantic HTML, heading berurutan, alt text untuk gambar bermakna.
- Kurangi ornamen/animasi pada layar kecil dan hormati preferensi reduced motion.

## 9. Nada Bahasa
Gunakan Bahasa Indonesia yang hangat, singkat, dan informatif. Contoh: “Yuk, mulai pendaftaran” dan “Periksa kembali data sebelum mengirim.” Hindari klaim status atau jadwal sebagai resmi selama masih dummy.
