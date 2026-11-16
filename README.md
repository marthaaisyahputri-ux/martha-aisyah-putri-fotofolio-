# Fotofolio Fitri Ayu Sabrina

Website fotofolio dan riwayat sekolah (HTML, CSS, JavaScript) dengan tampilan baru: tema ungu, foto bulat, latar aurora, kartu kaca, menu melayang, tema terang dan gelap.

## Struktur

```
fotofolio-fitri/
├── index.html
├── style.css
├── script.js
├── README.md
└── foto/
    └── foto-1.jpg
```

## Ganti isi

Buka `script.js`, edit bagian paling atas:

- `PROFIL`: nama, bio, teks mengetik di Home (`peran`), foto utama, dan data diri (kolom kosong tidak ditampilkan)
- `SEKOLAH`: nama sekolah, ikon, tahun, dan keterangan
- `FOKUS`: kartu "Yang lagi kupelajari"
- `GALERI`: daftar foto. Bagian Galeri muncul otomatis kalau ada lebih dari 1 foto
- `KONTAK`: Instagram, WhatsApp, Email. Bagian Kontak muncul otomatis kalau ada yang diisi

## Ganti warna

Buka `style.css`, ubah `--c1`, `--c2`, `--c3` di bagian `TOKEN` paling atas.

## Ganti foto

Upload foto baru ke folder `foto/` dengan nama `foto-1.jpg` (menimpa yang lama). Kalau memakai nama lain, ubah `fotoUtama` di `script.js`. Foto portrait atau persegi paling pas di bingkai lengkung.

## Deploy dengan GitHub Pages

1. Buat repo baru di github.com (Public), upload semua isi folder ini.
2. Buka **Settings** lalu **Pages**.
3. Source: **Deploy from a branch**, Branch: `main`, folder `/ (root)`, klik **Save**.
4. Tunggu 1 sampai 2 menit. Link: `https://USERNAME.github.io/NAMA-REPO/`
