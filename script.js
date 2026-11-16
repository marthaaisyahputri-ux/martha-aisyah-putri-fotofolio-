/* ===== EDIT DI SINI SAJA ===== */
const PROFIL={
  nama:"Martha Aisyah Putri",
  bio:"Siswi SMKN 1 Bangkinang.",
  kelas:"", sekolah:"SMKN 1 Bangkinang",
  fotoUtama:"foto/foto-2.jpg",
  tentang:"Aku Martha Aisyah Putri, siswi SMKN 1 Bangkinang. Perjalanan sekolahku dimulai dari SD 007 Kompleks, lalu SMPN 2 Bangkinang Kota.",
  detail:[ // kolom kosong tidak ditampilkan
    {label:"Nama lengkap",isi:"Martha Aisyah Putri"},{label:"Sekolah",isi:"SMKN 1 Bangkinang"},
    {label:"Kelas",isi:""},{label:"Jurusan",isi:""},{label:"Tempat, tanggal lahir",isi:""},
    {label:"Hobi",isi:"Edit video velocity"},{label:"Cita-cita",isi:""}]
};
const SEKOLAH=[
  {jenjang:"SD",nama:"SD 007 Kompleks",tempat:"",tahun:""},
  {jenjang:"SMP",nama:"SMPN 2 Bangkinang Kota",tempat:"",tahun:""},
  {jenjang:"SMK",nama:"SMKN 1 Bangkinang",tempat:"",tahun:"",sekarang:true}];
// Tambah foto: taruh file di folder foto/ lalu tambah baris di sini.
const GALERI=[{src:"foto/foto-2.jpg",judul:"Potret"},{src:"foto/foto-1.jpg",judul:"Potret 2"}];
/* ============================== */
const $=s=>document.querySelector(s),P=PROFIL;
const HAL=[["index.html","Beranda"],["tentang.html","Tentang"],["sekolah.html","Sekolah"],["galeri.html","Galeri"]];
const cur=(location.pathname.split("/").pop()||"index.html");
document.title=`${document.body.dataset.t?document.body.dataset.t+" · ":""}${P.nama}`;
document.body.insertAdjacentHTML("afterbegin",`<nav class="nav"><div class="wrap"><a class="logo" href="index.html">${P.nama}</a><ul class="menu">${HAL.map(([h,n])=>`<li><a href="${h}" ${h===cur?'aria-current="page"':""}>${n}</a></li>`).join("")}</ul></div></nav>`);
document.body.insertAdjacentHTML("beforeend",`<footer class="foot"><b>${P.nama}</b>Fotofolio · ${P.sekolah}</footer>`);
const detail=P.detail.filter(d=>d.isi).map(d=>`<div><dt>${d.label}</dt><dd>${d.isi}</dd></div>`).join("");
const R={
 hero:()=>`<div class="wrap hero"><div><p class="eyebrow">Fotofolio</p><h1>Halo, aku ${P.nama.split(" ")[0]}.</h1><p class="lead">${P.bio}</p><div class="btns"><a class="btn" href="tentang.html">Kenalan</a><a class="btn ghost" href="galeri.html">Lihat galeri</a></div></div><div class="pf"><img class="avatar" src="${P.fotoUtama}" alt="Foto ${P.nama}"><span class="em e1" aria-hidden="true">🎀</span><span class="em e2" aria-hidden="true">✨</span><span class="em e3" aria-hidden="true">🌷</span><span class="em e4" aria-hidden="true">🧸</span></div></div>`,
 cards:()=>`<div class="wrap sec"><div class="cards">${HAL.slice(1).map(([h,n],i)=>`<a class="card" href="${h}"><small>0${i+1}</small><h3>${n}</h3><p>${["Siapa aku dan hal yang kusuka","Perjalanan dari SD sampai SMK","Kumpulan fotoku"][i]}</p></a>`).join("")}</div></div>`,
 about:()=>`<div class="wrap sec"><div class="about"><div class="pf"><img class="avatar" src="${P.fotoUtama}" alt="Foto ${P.nama}"><span class="em e1" aria-hidden="true">🎀</span><span class="em e2" aria-hidden="true">✨</span><span class="em e3" aria-hidden="true">🌷</span><span class="em e4" aria-hidden="true">🧸</span></div><div><p class="big">${P.tentang}</p><dl class="dl">${detail}</dl></div></div></div>`,
 sekolah:()=>`<div class="wrap sec"><ol class="tl">${SEKOLAH.map(s=>`<li class="rv ${s.sekarang?"now":""}"><div class="card"><span class="tag">${s.jenjang}</span>${s.sekarang?'<span class="now-badge">sekarang</span>':""}<h3>${s.nama}</h3>${[s.tempat,s.tahun].filter(Boolean).length?`<p>${[s.tempat,s.tahun].filter(Boolean).join(" · ")}</p>`:""}</div></li>`).join("")}</ol></div>`,
 galeri:()=>`<div class="wrap sec"><div class="grid">${GALERI.map((g,i)=>`<button data-i="${i}" aria-label="Perbesar ${g.judul}"><img src="${g.src}" alt="${g.judul}" loading="lazy"></button>`).join("")}</div></div><div class="lb" id="lb"><div><img alt=""><p></p></div></div>`
};
document.querySelectorAll("[data-r]").forEach(e=>e.outerHTML=R[e.dataset.r]());
const lb=$("#lb");
if(lb){document.querySelectorAll(".grid button").forEach(b=>b.onclick=()=>{const g=GALERI[b.dataset.i];lb.querySelector("img").src=g.src;lb.querySelector("p").textContent=g.judul;lb.classList.add("on")});lb.onclick=()=>lb.classList.remove("on");addEventListener("keydown",e=>e.key==="Escape"&&lb.classList.remove("on"))}
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
