window.nasaRegions = window.nasaRegions || {};
window.rotationMatrix = window.rotationMatrix || {};

window.nasaRegions.tanjungsari = {
  name: 'Tanjungsari, Sumedang',
  lat: -6.9061,
  lon: 107.7942,
  coords: 'Lat -6.9061°, Lon 107.7942°',
  elevation: '921,68 m dpl',
  zone: 'Sentra Palawija • Tegalan & Sawah Tadah Hujan',
  soilProfile: {
    type: 'Andosol & Latosol',
    ph: '5,6 – 6,3 (Agak Masam – Netral)',
    texture: 'Lempung Remah • Drainase Baik',
    organic: 'Sedang–Tinggi (2,8% – 3,6% C-Org)',
    origin: 'Zona peralihan endapan abu vulkanik dan pelapukan batuan bertekstur remah serta porous. Sirkulasi udara (aerasi) di zona perakaran sangat baik sehingga mendukung pembentukan bintil akar Rhizobium pada palawija.',
    management: 'Gunakan mulsa jerami untuk menahan laju penguapan air pada bulan Agustus karena tekstur tanah remah lebih cepat meloloskan air ketika curah hujan turun ke titik minimum.'
  },
  climateData: {
    avg: {
      gwetroot: [0.93, 0.95, 0.97, 0.95, 0.93, 0.91, 0.90, 0.81, 0.78, 0.77, 0.82, 0.87],
      precip:   [13.15, 12.96, 10.79, 8.96, 6.91, 7.31, 5.89, 3.98, 6.55, 5.14, 12.32, 8.88],
      temp:     [21.70, 21.61, 21.98, 22.43, 22.47, 21.90, 21.05, 21.05, 21.58, 22.49, 22.51, 22.15],
      annGwetroot: 0.88,
      annPrecip: 8.54,
      annTemp: 21.91
    },
    '2023': {
      gwetroot: [0.93, 0.94, 0.97, 0.96, 0.95, 0.89, 0.85, 0.74, 0.66, 0.59, 0.65, 0.73],
      precip:   [5.44, 12.82, 10.71, 8.96, 7.21, 4.95, 2.48, 0.61, 0.23, 1.69, 11.91, 8.23],
      temp:     [21.18, 20.58, 21.69, 22.05, 22.18, 21.82, 21.00, 20.75, 21.14, 22.81, 23.13, 22.87],
      annGwetroot: 0.82,
      annPrecip: 6.21,
      annTemp: 21.77
    },
    '2024': {
      gwetroot: [0.90, 0.95, 0.97, 0.97, 0.92, 0.89, 0.92, 0.81, 0.77, 0.78, 0.87, 0.96],
      precip:   [19.24, 15.69, 13.36, 10.62, 4.14, 7.35, 9.89, 2.57, 10.96, 2.70, 17.73, 10.66],
      temp:     [22.44, 22.72, 22.41, 23.16, 22.81, 22.17, 21.03, 21.08, 21.89, 22.63, 22.60, 21.77],
      annGwetroot: 0.89,
      annPrecip: 10.37,
      annTemp: 22.22
    },
    '2025': {
      gwetroot: [0.96, 0.96, 0.97, 0.93, 0.93, 0.96, 0.94, 0.88, 0.91, 0.93, 0.95, 0.93],
      precip:   [14.76, 10.36, 8.29, 7.29, 9.37, 9.63, 5.31, 8.77, 8.47, 11.03, 7.31, 7.74],
      temp:     [21.49, 21.53, 21.83, 22.09, 22.42, 21.72, 21.12, 21.32, 21.72, 22.02, 21.81, 21.82],
      annGwetroot: 0.94,
      annPrecip: 9.03,
      annTemp: 21.74
    }
  }
};

window.rotationMatrix.tanjungsari = {
  padi: [
    {
      name: 'Kedelai Edamame', latin: 'Glycine max', family: 'Leguminosae', score: 96,
      soilRecovery: 'Sangat cocok pada tanah Andosol-Latosol Tanjungsari untuk menambat Nitrogen via Rhizobium setelah panen padi.',
      weatherRisk: 'Manfaatkan jendela Mei–Juli (PRECTOTCORR 5,89–7,31 mm/hari) agar perkecambahan seragam tanpa kelebihan genangan.'
    },
    {
      name: 'Jagung Hibrida', latin: 'Zea mays', family: 'Poaceae', score: 90,
      soilRecovery: 'Perakaran serabut dalam memperbaiki struktur pori tanah tegalan dan menghasilkan biomassa kompos melimpah.',
      weatherRisk: 'Perhatikan pemupukan berimbang dan mulsa jerami untuk menahan penguapan saat kemarau Agustus (3,98 mm/hari).'
    }
  ],
  jagung: [
    {
      name: 'Kacang Tanah', latin: 'Arachis hypogaea', family: 'Leguminosae', score: 95,
      soilRecovery: 'Kombinasi rotasi klasik sentra palawija Tanjungsari untuk mengganti kehilangan Nitrogen dan memperbaiki rasio C/N.',
      weatherRisk: 'Tekstur tanah remah Tanjungsari mendukung pembentukan polong maksimal pada curah hujan sedang (5–7 mm/hari).'
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
      weatherRisk: 'Suhu mikroklimat Tanjungsari (rerata 21,91°C pada elevasi 921,68 m) sangat ideal untuk pengisian tongkol manis.'
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
      weatherRisk: 'Kelembapan zona akar Tanjungsari terjaga tinggi (GWETROOT ≥ 0,77 sepanjang tahun) sehingga mendukung pertumbuhan umbi mulus.'
    }
  ]
};