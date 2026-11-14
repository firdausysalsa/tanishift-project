window.nasaRegions = window.nasaRegions || {};
window.nasaRegions.tanjungsari = {
  name: 'Tanjungsari, Sumedang',
  lat: -6.9061,
  lon: 107.7942,
  coords: 'Lat -6.9061°, Lon 107.7942°',
  zone: 'Sentra Palawija • Tegalan & Sawah Tadah Hujan',
  soilProfile: {
    type: 'Andosol & Latosol',
    ph: '5,6 – 6,3 (Agak Masam – Netral)',
    texture: 'Lempung Remah • Drainase Baik',
    organic: 'Sedang–Tinggi (2,8% – 3,6% C-Org)',
    origin: 'Zona peralihan endapan abu vulkanik dan pelapukan batuan bertekstur remah serta porous. Sirkulasi udara (aerasi) di zona perakaran sangat baik sehingga mendukung pembentukan bintil akar Rhizobium pada palawija.',
    management: 'Gunakan mulsa jerami untuk menahan laju penguapan air pada bulan Juli–September karena tekstur tanah remah lebih cepat meloloskan air ketika curah hujan turun di bawah 2 mm/hari.'
  },
  plantingAdvice: 'Manfaatkan sisa kelembapan tanah bulan Mei (GWETROOT 0,63) untuk mengejar perkecambahan seragam komoditas palawija tanpa perlu penyiraman intensif di awal tanam.',
  gwetroot: [0.79, 0.81, 0.78, 0.74, 0.63, 0.51, 0.41, 0.36, 0.38, 0.50, 0.69, 0.77],
  precip:   [10.8, 11.5, 10.2, 8.2, 4.8, 2.7, 1.5, 1.2, 1.9, 5.1, 9.2, 10.5],
  temp:     [22.4, 22.5, 22.8, 23.0, 22.9, 22.5, 22.1, 22.3, 22.9, 23.3, 22.8, 22.5]
};

window.rotationMatrix = window.rotationMatrix || {};
window.rotationMatrix.tanjungsari = {
  padi: [
    {
      name: 'Kedelai Edamame', latin: 'Glycine max', family: 'Leguminosae', score: 96,
      soilRecovery: 'Sangat cocok pada tanah Andosol-Latosol Tanjungsari untuk menambat Nitrogen via Rhizobium setelah panen padi.',
      weatherRisk: 'Manfaatkan sisa kelembapan tanah bulan Mei (GWETROOT ~0,63) agar perkecambahan seragam tanpa irigasi berlebih.'
    },
    {
      name: 'Jagung Hibrida', latin: 'Zea mays', family: 'Poaceae', score: 90,
      soilRecovery: 'Perakaran serabut dalam memperbaiki struktur pori tanah tegalan dan menghasilkan biomassa kompos melimpah.',
      weatherRisk: 'Perhatikan pemupukan berimbang dan mulsa jerami untuk menahan penguapan saat kemarau puncak.'
    }
  ],
  jagung: [
    {
      name: 'Kacang Tanah', latin: 'Arachis hypogaea', family: 'Leguminosae', score: 95,
      soilRecovery: 'Kombinasi rotasi klasik sentra palawija Tanjungsari untuk mengganti kehilangan Nitrogen dan memperbaiki rasio C/N.',
      weatherRisk: 'Tekstur tanah remah Tanjungsari mendukung pembentukan polong maksimal pada curah hujan sedang (3–6 mm/hari).'
    },
    {
      name: 'Kacang Panjang', latin: 'Vigna unguiculata', family: 'Leguminosae', score: 91,
      soilRecovery: 'Menyumbang pupuk hijau dan bintil akar aktif yang menyuburkan lapisan olah tanah secara alami.',
      weatherRisk: 'Siapkan ajir bambu yang kokoh untuk menahan hembusan angin dan hujan sore hari di peralihan musim.'
    }
  ],
  cabai: [
    {
      name: 'Jagung Pulut / Manis', latin: 'Zea mays', family: 'Poaceae', score: 94,
      soilRecovery: 'Memutus rantai penyakit layu bakteri (Ralstonia) dan virus kuning yang umum menyerang lahan cabai monokultur.',
      weatherRisk: 'Suhu mikroklimat Tanjungsari (22,1–23,3°C) sangat ideal untuk pengisian tongkol manis berkualitas tinggi.'
    },
    {
      name: 'Buncis Rambat', latin: 'Phaseolus vulgaris', family: 'Leguminosae', score: 89,
      soilRecovery: 'Memulihkan kesuburan hara Nitrogen yang terkuras selama masa panen cabai jangka panjang.',
      weatherRisk: 'Gunakan ajir bambu dan buat parit drainase antar-bedengan pada bulan basah (November–Maret).'
    }
  ],
  kentang: [
    {
      name: 'Kubis / Kol', latin: 'Brassica oleracea', family: 'Brassicaceae', score: 92,
      soilRecovery: 'Akar melepaskan senyawa glukosinolat sebagai biofumigan alami pembasmi patogen tular tanah bekas Solanaceae.',
      weatherRisk: 'Aplikasi kapur dolomit sangat disarankan untuk mencegah penyakit akar gada pada tanah agak masam.'
    },
    {
      name: 'Wortel', latin: 'Daucus carota', family: 'Apiaceae', score: 88,
      soilRecovery: 'Beda famili botani sehingga aman dari hama kentang sekaligus memanfaatkan sisa kegemburan tanah.',
      weatherRisk: 'Jaga konsistensi kelembapan tanah (GWETROOT > 0,50) agar umbi tidak pecah akibat fluktuasi air.'
    }
  ]
};