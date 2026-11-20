// ===== 1. Angka statistik yang naik saat halaman dibuka =====
function animasiAngka(idElemen, target, durasi) {
  var elemen = document.getElementById(idElemen);
  var mulai = 0;
  var langkah = target / (durasi / 30); // update tiap 30 milidetik

  var timer = setInterval(function () {
    mulai = mulai + langkah;
    if (mulai >= target) {
      mulai = target;
      clearInterval(timer);
    }
    elemen.textContent = Math.round(mulai).toLocaleString("id-ID");
  }, 30);
}

animasiAngka("angka-nasabah", 128, 1500);
animasiAngka("angka-kg", 2450, 1500);
animasiAngka("angka-rupiah", 6800000, 1500);

// ===== 2. Kalkulator tabungan =====
var tombolHitung = document.getElementById("tombol-hitung");

tombolHitung.addEventListener("click", function () {
  var harga = Number(document.getElementById("jenis").value);
  var berat = Number(document.getElementById("berat").value);
  var hasil = document.getElementById("hasil");

  if (berat <= 0 || isNaN(berat)) {
    hasil.textContent = "Isi berat sampah dengan angka lebih dari 0.";
    hasil.className = "hasil galat";
    return;
  }

  var total = harga * berat;
  hasil.textContent = "Perkiraan saldo: Rp " + total.toLocaleString("id-ID");
  hasil.className = "hasil sukses";
});

// ===== 3. Validasi form pendaftaran =====
var form = document.getElementById("form-daftar");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // cegah halaman reload

  var nama = document.getElementById("nama").value.trim();
  var hp = document.getElementById("hp").value.trim();
  var alamat = document.getElementById("alamat").value.trim();
  var pesan = document.getElementById("pesan-form");

  if (nama === "" || hp === "" || alamat === "") {
    pesan.textContent = "Semua kolom wajib diisi.";
    pesan.className = "hasil galat";
    return;
  }

  // Nomor HP harus angka, panjang 10 sampai 13 digit
  var hanyaAngka = /^[0-9]{10,13}$/;
  if (!hanyaAngka.test(hp)) {
    pesan.textContent = "Nomor HP harus 10 sampai 13 angka, tanpa spasi atau tanda lain.";
    pesan.className = "hasil galat";
    return;
  }

  pesan.textContent = "Terima kasih, " + nama + ". Pendaftaran Anda sudah kami terima.";
  pesan.className = "hasil sukses";
  form.reset();
});
