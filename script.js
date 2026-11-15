/* ============================================
   EDIT DI SINI SAJA
   ============================================ */
const PROFIL = {
  nama: "Martha Aisyah Putri",
  bio: "Siswi SMKN 1 Bangkinang.",
  kelas: "",   // contoh: "Kelas X PPLG"
  sekolah: "SMKN 1 Bangkinang",
  fotoUtama: "foto/foto-1.jpg",   // ganti foto: timpa file ini atau ubah namanya di sini
  footer: "Martha Aisyah Putri",
  tentang: "Aku Martha Aisyah Putri, siswi SMKN 1 Bangkinang. Perjalanan sekolahku dimulai dari SD 007 Kompleks, lalu SMPN 2 Bangkinang Kota.",
  // Kolom yang dikosongkan ("") tidak akan ditampilkan.
  detail: [
    { label: "Nama lengkap", isi: "Martha Aisyah Putri" },
    { label: "Sekolah", isi: "SMKN 1 Bangkinang" },
    { label: "Kelas", isi: "" },
    { label: "Jurusan", isi: "" },
    { label: "Tempat, tanggal lahir", isi: "" },
    { label: "Hobi", isi: "Edit video velocity" },
    { label: "Cita-cita", isi: "" },
    { label: "Instagram", isi: "" }
  ]
};

// Riwayat sekolah. ikon = emoji penanda. tahun dan ket boleh dikosongkan.
const SEKOLAH = [
  { jenjang: "SD",  ikon: "🌱", nama: "SD 007 Kompleks",        tempat: "", tahun: "" },
  { jenjang: "SMP", ikon: "🎒", nama: "SMPN 2 Bangkinang Kota", tempat: "", tahun: "" },
  { jenjang: "SMK", ikon: "🎓", nama: "SMKN 1 Bangkinang",      tempat: "", tahun: "", sekarang: true }
];
/* ============================================ */

const $ = (id) => document.getElementById(id);

document.title = `Fotofolio ${PROFIL.nama}`;
$("nama").textContent = PROFIL.nama;
$("bio").textContent = PROFIL.bio;
if (PROFIL.kelas) $("chipKelas").textContent = PROFIL.kelas;
else $("chipKelas").remove();
$("chipSekolah").textContent = PROFIL.sekolah;
$("heroFoto").alt = `Foto ${PROFIL.nama}`;

// Foto utama: kalau file tidak ketemu, coba nama lain. Kalau tetap gagal, tampil inisial.
const FOTO_CADANGAN = ["foto/foto-1.jpeg", "foto/foto-1.png", "foto/foto-1.JPG", "foto/foto-1.JPEG", "foto-1.jpg"];
const antrean = [PROFIL.fotoUtama, ...FOTO_CADANGAN];
function pasangFoto() {
  const src = antrean.shift();
  if (src) { $("heroFoto").src = src; return; }
  $("heroFoto").remove();
  const c = $("circle");
  c.classList.add("kosong");
  c.dataset.inisial = PROFIL.nama.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}
$("heroFoto").onerror = pasangFoto;
pasangFoto();
$("footerText").textContent = PROFIL.footer;

// Tentang
$("tentangText").textContent = PROFIL.tentang;
$("detail").innerHTML = PROFIL.detail
  .filter((d) => d.isi)
  .map((d) => `<div class="field"><p class="field__l">${d.label}</p><p class="field__v">${d.isi}</p></div>`)
  .join("");

// Sekolah
$("timeline").innerHTML = SEKOLAH.map((s) => {
  const info = [s.tempat, s.tahun].filter(Boolean).join(" • ");
  return `
    <li class="step ${s.sekarang ? "step--now" : ""}">
      <span class="step__icon" aria-hidden="true">${s.ikon || "🎓"}</span>
      <div class="step__card">
        <span class="step__tag">${s.jenjang}</span>
        <h3>${s.nama}</h3>
        ${info ? `<p class="step__place">${info}</p>` : ""}
        ${s.ket ? `<p class="step__ket">${s.ket}</p>` : ""}
      </div>
    </li>`;
}).join("");
