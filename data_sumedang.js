window.nasaRegions = window.nasaRegions || {};
window.rotationMatrix = window.rotationMatrix || {};

window.nasaRegions.sumedang = {
  name: 'Sumedang Selatan',
  lat: -6.8586,
  lon: 107.9204,
  coords: 'Lat -6.8586°, Lon 107.9204°',
  elevation: '666,73 m dpl',
  zone: 'Dataran Menengah • Sawah Irigasi & Tadah Hujan',
  soilProfile: {
    type: 'Latosol & Inceptisol',
    ph: '5,5 – 6,2 (Agak Masam)',
    texture: 'Lempung Liat • Daya Ikat Tinggi',
    organic: 'Sedang (2,1% – 2,8% C-Org)',
    origin: 'Terbentuk dari pelapukan batuan vulkanik tua dengan solum tanah dalam. Mampu menahan air sawah dengan sangat baik, namun rawan membentuk lapisan tapak bajak (hardpan) apabila ditanami padi terus-menerus.',
    management: 'Lakukan pengolahan tanah sedang untuk memecah lapisan tapak bajak, kembalikan kompos jerami, dan taburkan kapur dolomit 0,5–1 ton/ha sebelum menanam kedelai atau kacang tanah.'
  },
  climateData: {
    avg: {
      gwetroot: [0.89, 0.92, 0.95, 0.94, 0.92, 0.87, 0.86, 0.78, 0.74, 0.73, 0.78, 0.84],
      precip:   [11.59, 11.06, 8.26, 8.39, 5.81, 5.78, 5.74, 3.39, 5.27, 5.87, 10.79, 7.42],
      temp:     [23.38, 23.28, 23.47, 23.69, 23.51, 22.96, 21.91, 21.92, 22.52, 23.67, 23.79, 23.68],
      annGwetroot: 0.85,
      annPrecip: 7.42,
      annTemp: 23.15
    },
    '2023': {
      gwetroot: [0.92, 0.92, 0.95, 0.96, 0.94, 0.85, 0.80, 0.70, 0.62, 0.56, 0.59, 0.68],
      precip:   [6.04, 10.25, 9.67, 9.38, 4.92, 3.62, 1.85, 0.38, 0.19, 1.24, 8.31, 7.66],
      temp:     [22.84, 22.34, 23.06, 23.55, 23.11, 22.81, 21.80, 21.50, 21.96, 24.01, 24.18, 24.16],
      annGwetroot: 0.79,
      annPrecip: 5.25,
      annTemp: 22.95
    },
    '2024': {
      gwetroot: [0.79, 0.88, 0.93, 0.93, 0.87, 0.80, 0.86, 0.76, 0.72, 0.70, 0.78, 0.90],
      precip:   [13.67, 12.66, 8.94, 9.07, 2.29, 3.86, 11.58, 1.74, 7.06, 3.18, 14.26, 8.13],
      temp:     [24.08, 24.32, 23.98, 24.23, 23.70, 23.27, 21.95, 21.88, 22.93, 23.86, 23.90, 23.57],
      annGwetroot: 0.83,
      annPrecip: 8.01,
      annTemp: 23.47
    },
    '2025': {
      gwetroot: [0.95, 0.96, 0.96, 0.92, 0.94, 0.97, 0.93, 0.87, 0.89, 0.94, 0.97, 0.94],
      precip:   [15.05, 10.26, 6.16, 6.72, 10.21, 9.86, 3.80, 8.05, 8.55, 13.19, 9.80, 6.48],
      temp:     [23.23, 23.19, 23.38, 23.28, 23.73, 22.79, 21.97, 22.39, 22.68, 23.13, 23.28, 23.31],
      annGwetroot: 0.94,
      annPrecip: 9.00,
      annTemp: 23.03
    }
  }
};

window.rotationMatrix.sumedang = {
  padi: [
    {
      name: 'Kedelai', latin: 'Glycine max', family: 'Leguminosae', score: 95,
      soilRecovery: 'Fiksasi Nitrogen alami (+45–60 kg N/ha) melalui bintil akar bakteri Rhizobium dan memecah lapisan tapak bajak sawah.',
      weatherRisk: 'Tanam pada peralihan kemarau (Mei–Juni saat PRECTOTCORR turun ke ~5,8 mm/hari) dengan saluran drainase keliling.'
    },
    {
      name: 'Kacang Tanah', latin: 'Arachis hypogaea', family: 'Leguminosae', score: 91,
      soilRecovery: 'Mengembalikan unsur Nitrogen tanah sekaligus meningkatkan aerasi dan kegemburan agregat tanah liat Latosol.',
      weatherRisk: 'Gunakan mulsa jerami sisa panen padi untuk menjaga kelembapan tanah saat curah hujan menyentuh titik terendah di bulan Agustus (3,39 mm/hari).'
    }
  ],
  jagung: [
    {
      name: 'Kacang Hijau', latin: 'Vigna radiata', family: 'Leguminosae', score: 94,
      soilRecovery: 'Siklus panen singkat (60 hari) yang efektif memulihkan cadangan Nitrogen pasca-tanaman jagung yang rakus hara.',
      weatherRisk: 'Sangat toleran terhadap penurunan curah hujan pada pertengahan musim kemarau (Juli–Agustus).'
    },
    {
      name: 'Ubi Jalar', latin: 'Ipomoea batatas', family: 'Convolvulaceae', score: 88,
      soilRecovery: 'Tajuk daun rapat menutup permukaan lahan sehingga menekan gulma dan memperkaya biomassa serasah organik.',
      weatherRisk: 'Bentuk guludan setinggi 30 cm untuk mengantisipasi kelembapan zona akar yang tinggi (GWETROOT rerata 0,85).'
    }
  ],
  cabai: [
    {
      name: 'Jagung Manis', latin: 'Zea mays saccharata', family: 'Poaceae', score: 93,
      soilRecovery: 'Bukan tanaman inang bagi bakteri layu Ralstonia solanacearum sehingga efektif memutus siklus patogen bekas cabai.',
      weatherRisk: 'Suhu rerata Sumedang Selatan (23,15°C) sangat mendukung pengisian tongkol manis yang seragam.'
    },
    {
      name: 'Bawang Daun', latin: 'Allium fistulosum', family: 'Amaryllidaceae', score: 89,
      soilRecovery: 'Eksudat akar mengandung senyawa antimikroba alami yang merangsang mikroorganisme antagonis penekan jamur tanah.',
      weatherRisk: 'Terapkan bedengan tinggi dan taburan kapur dolomit bila pH tanah di bawah 5,8 saat curah hujan tinggi (>10 mm/hari).'
    }
  ],
  kentang: [
    {
      name: 'Buncis Tegak', latin: 'Phaseolus vulgaris', family: 'Leguminosae', score: 90,
      soilRecovery: 'Menambat Nitrogen bebas dan mengikat partikel tanah permukaan guna mencegah erosi topsoil lanjutan.',
      weatherRisk: 'Gunakan mulsa organik untuk menjaga suhu zona akar tetap stabil di elevasi menengah 666,73 m dpl.'
    },
    {
      name: 'Sawi Hijau / Caisim', latin: 'Brassica rapa', family: 'Brassicaceae', score: 86,
      soilRecovery: 'Melepaskan senyawa biofumigan (glukosinolat) alami yang menekan populasi nematoda dan jamur tanah.',
      weatherRisk: 'Pastikan parit drainase lancar saat kelembapan tanah mencapai puncak di Maret–April (GWETROOT > 0,94).'
    }
  ]
};