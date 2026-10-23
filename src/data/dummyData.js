// src/data/dummyData.js
// All dummy data for the prototype – clearly marked as demo.

export const HERO = {
  title: "Penerimaan Peserta Didik Baru",
  subtitle: "PPDB RA Fithrah Insani – Tahun 2026",
  description: "Daftarkan anak Anda ke taman kanak-kanak terbaik dengan proses cepat, mudah, dan aman.",
  // Placeholder image (public domain)
  imageUrl: "https://picsum.photos/seed/hero/1200/600",
  ctaText: "Daftar Sekarang",
  ctaLink: "/registration",
};

export const INFO_CARDS = [
  {
    icon: "📅",
    title: "Jadwal PPDB",
    content: "Pendaftaran dibuka 1 Juni – 30 Juni 2026",
  },
  {
    icon: "📄",
    title: "Persyaratan",
    content: "Akta kelahiran, KTP orang tua, foto 3x4",
  },
  {
    icon: "🏫",
    title: "Profil RA",
    content: "Fasilitas lengkap, guru bersertifikat, lingkungan asri",
  },
];

export const STEPS = [
  { step: 1, label: "Baca Informasi" },
  { step: 2, label: "Isi Formulir" },
  { step: 3, label: "Upload Berkas" },
  { step: 4, label: "Tinjau & Kirim" },
];

export const ANNOUNCEMENTS = [
  {
    id: 1,
    date: "2026-05-20",
    category: "Jadwal",
    title: "Pengumuman Jadwal Seleksi",
    summary: "Seleksi tahap pertama akan dilaksanakan pada 5 Juli 2026.",
  },
  {
    id: 2,
    date: "2026-05-25",
    category: "Info",
    title: "Hari Buka Informasi",
    summary: "Kunjungi sekolah pada 10 Juni 2026 untuk sesi tanya jawab.",
  },
];
