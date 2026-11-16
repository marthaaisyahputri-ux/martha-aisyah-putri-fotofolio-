/* ============================================
   EDIT DI SINI SAJA
   ============================================ */
const PROFIL = {
  nama: "Fitri Ayu Sabrina",
  bio: "Siswi kelas X PPLG di SMKN 1 Bangkinang.",
  kelas: "Kelas X PPLG",
  sekolah: "SMKN 1 Bangkinang",
  fotoUtama: "foto/foto-1.jpg",   // ganti foto: timpa file ini atau ubah namanya di sini
  footer: "Fitri Ayu Sabrina",
  peran: ["Siswi kelas X", "Jurusan PPLG", "SMKN 1 Bangkinang"],   // teks yang mengetik otomatis di Home
  tentang: "Aku Fitri Ayu Sabrina, siswi kelas X jurusan PPLG di SMKN 1 Bangkinang. Perjalanan sekolahku dimulai dari SD 011 Langgini, lalu SMPN 2 Bangkinang Kota.",
  // Kolom yang dikosongkan ("") tidak akan ditampilkan.
  detail: [
    { label: "Nama lengkap", isi: "Fitri Ayu Sabrina" },
    { label: "Sekolah", isi: "SMKN 1 Bangkinang" },
    { label: "Kelas", isi: "X (sepuluh)" },
    { label: "Jurusan", isi: "PPLG (Pengembangan Perangkat Lunak dan Gim)" },
    { label: "Tempat, tanggal lahir", isi: "" },
    { label: "Hobi", isi: "" },
    { label: "Cita-cita", isi: "" }
  ]
};

// Riwayat sekolah. ikon = emoji penanda. tahun, tempat, ket boleh dikosongkan.
const SEKOLAH = [
  { jenjang: "SD",  ikon: "🌱", nama: "SD 011 Langgini",        tempat: "", tahun: "" },
  { jenjang: "SMP", ikon: "🎒", nama: "SMPN 2 Bangkinang Kota", tempat: "", tahun: "" },
  { jenjang: "SMK", ikon: "💻", nama: "SMKN 1 Bangkinang",      tempat: "Kelas X PPLG", tahun: "", sekarang: true, ket: "Belajar membuat aplikasi, website, dan gim." }
];

// Bagian "Yang lagi kupelajari"
const FOKUS = [
  { ikon: "📱", judul: "Aplikasi", isi: "Belajar membuat aplikasi dari nol." },
  { ikon: "🌐", judul: "Website",  isi: "Belajar membuat tampilan dan halaman web." },
  { ikon: "🎮", judul: "Gim",      isi: "Belajar membuat gim sederhana." }
];

// Galeri: tambahkan file foto ke folder foto/ lalu daftarkan di sini.
// Bagian Galeri baru muncul kalau isinya lebih dari 1 foto.
const GALERI = [
  "foto/foto-1.jpg"
];

// Kontak: kolom kosong ("") tidak ditampilkan. Bagian Kontak muncul kalau ada yang diisi.
const KONTAK = [
  { label: "Instagram", isi: "", link: "" },   // contoh: isi "@namaig", link "https://instagram.com/namaig"
  { label: "WhatsApp",  isi: "", link: "" },
  { label: "Email",     isi: "", link: "" }
];
/* ============================================ */

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
document.documentElement.classList.add("js");

/* ---------- Isi konten ---------- */
document.title = `Fotofolio ${PROFIL.nama}`;
$("nama").textContent = PROFIL.nama;
$("bio").textContent = PROFIL.bio;
$("tagKelas").textContent = PROFIL.kelas;
$("tagSekolah").textContent = PROFIL.sekolah;
$("heroFoto").src = PROFIL.fotoUtama;
$("heroFoto").alt = `Foto ${PROFIL.nama}`;
$("footerText").textContent = PROFIL.footer;
$("logo").innerHTML = `${esc(PROFIL.nama.trim().charAt(0).toUpperCase())}<span>.</span>`;

// Statistik
const jmlDetail = PROFIL.detail.filter((d) => d.isi).length;
$("stats").innerHTML = [
  [SEKOLAH.length, "Jenjang sekolah"],
  [FOKUS.length, "Bidang dipelajari"],
  [jmlDetail, "Data diri"]
].map(([n, t]) => `<div class="stat"><b class="grad">${n}</b><span>${t}</span></div>`).join("");

// Tentang
$("tentangText").textContent = PROFIL.tentang;
$("detail").innerHTML = PROFIL.detail
  .filter((d) => d.isi)
  .map((d) => `<div class="field reveal"><p class="field__l">${esc(d.label)}</p><p class="field__v">${esc(d.isi)}</p></div>`)
  .join("");

// Sekolah
$("timeline").innerHTML = SEKOLAH.map((s) => {
  const info = [s.tempat, s.tahun].filter(Boolean).join(" • ");
  return `
    <li class="tl ${s.sekarang ? "tl--now" : ""} reveal">
      <span class="tl__dot" aria-hidden="true">${s.ikon || "🎓"}</span>
      <div class="card tl__card">
        <div class="tl__top">
          <span class="pill">${esc(s.jenjang)}</span>
          ${s.sekarang ? '<span class="pill pill--now">Sekarang</span>' : ""}
        </div>
        <h3>${esc(s.nama)}</h3>
        ${info ? `<p class="tl__info">${esc(info)}</p>` : ""}
        ${s.ket ? `<p class="tl__ket">${esc(s.ket)}</p>` : ""}
      </div>
    </li>`;
}).join("");

// Fokus
$("fokusList").innerHTML = FOKUS.map((f) => `
  <article class="card fx reveal">
    <div class="fx__ic" aria-hidden="true">${f.ikon}</div>
    <h3>${esc(f.judul)}</h3>
    <p>${esc(f.isi)}</p>
  </article>`).join("");

// Galeri
if (GALERI.length > 1) {
  $("galeri").hidden = false; $("navGaleri").hidden = false;
  $("galeriList").innerHTML = GALERI.map((src, i) =>
    `<button type="button" class="reveal" data-src="${esc(src)}" aria-label="Buka foto ${i + 1}"><img src="${esc(src)}" alt="Foto ${i + 1}" loading="lazy"></button>`).join("");
  const lb = $("lightbox");
  const tutup = () => { lb.hidden = true; };
  $("galeriList").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-src]");
    if (!b) return;
    $("lightboxImg").src = b.dataset.src; lb.hidden = false;
  });
  lb.addEventListener("click", (e) => { if (e.target !== $("lightboxImg")) tutup(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") tutup(); });
}

// Kontak
const kontak = KONTAK.filter((k) => k.isi);
if (kontak.length) {
  $("kontak").hidden = false; $("navKontak").hidden = false;
  $("kontakList").innerHTML = kontak.map((k) => {
    const isi = `<small>${esc(k.label)}</small><b>${esc(k.isi)}</b>`;
    return k.link ? `<a class="reveal" href="${esc(k.link)}" target="_blank" rel="noopener">${isi}</a>` : `<a class="reveal">${isi}</a>`;
  }).join("");
}

/* ---------- Tema terang / gelap ---------- */
const root = document.documentElement;
try {
  const saved = localStorage.getItem("tema");
  if (saved) root.dataset.theme = saved;
} catch (e) {}
$("themeBtn").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("tema", next); } catch (e) {}
  document.querySelector('meta[name="theme-color"]').content = next === "dark" ? "#120b24" : "#f5f0ff";
});

/* ---------- Teks mengetik ---------- */
(() => {
  const el = $("peran"), kata = PROFIL.peran;
  if (!kata || !kata.length) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = kata[0]; return; }
  let i = 0, j = 0, hapus = false;
  const tick = () => {
    const w = kata[i];
    el.textContent = w.slice(0, j);
    if (!hapus && j === w.length) { hapus = true; return setTimeout(tick, 1600); }
    if (hapus && j === 0) { hapus = false; i = (i + 1) % kata.length; }
    j += hapus ? -1 : 1;
    setTimeout(tick, hapus ? 40 : 85);
  };
  tick();
})();

/* ---------- Muncul saat scroll ---------- */
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- Progress, tombol atas, menu aktif ---------- */
const bar = $("progress"), topBtn = $("top");
const links = [...document.querySelectorAll(".nav__links a")];
const targets = links.map((a) => document.querySelector(a.getAttribute("href")));
const onScroll = () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  topBtn.classList.toggle("show", h.scrollTop > 500);
  let aktif = 0;
  targets.forEach((t, i) => { if (t && !t.hidden && t.getBoundingClientRect().top < innerHeight * .4) aktif = i; });
  links.forEach((a, i) => a.classList.toggle("is-active", i === aktif));
  const act = links[aktif];
  if (act && act.scrollIntoView) act.parentElement.scrollTo({ left: act.offsetLeft - 40, behavior: "smooth" });
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();
