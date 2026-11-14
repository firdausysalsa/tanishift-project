window.nasaRegions = window.nasaRegions || {};
window.nasaRegions.sumedang = {
  name: 'Sumedang Selatan',
  lat: -6.8586,
  lon: 107.9204,
  coords: 'Lat -6.8586°, Lon 107.9204°',
  zone: 'Dataran Menengah • Sawah Irigasi & Tadah Hujan',
  soilProfile: {
    type: 'Latosol & Inceptisol',
    ph: '5,5 – 6,2 (Agak Masam)',
    texture: 'Lempung Liat • Daya Ikat Tinggi',
    organic: 'Sedang (2,1% – 2,8% C-Org)',
    origin: 'Terbentuk dari pelapukan batuan vulkanik tua dengan solum tanah dalam. Mampu menahan air sawah dengan sangat baik, namun rawan membentuk lapisan tapak bajak (hardpan) apabila ditanami padi terus-menerus.',
    management: 'Lakukan pengolahan tanah sedang untuk memecah lapisan tapak bajak, kembalikan kompos jerami, dan taburkan kapur dolomit 0,5–1 ton/ha sebelum menanam kedelai atau kacang tanah.'
  },
  plantingAdvice: 'Jendela tanam rotasi paling aman dimulai pada awal peralihan kemarau (Mei–Juni saat GWETROOT turun ke 0,56–0,68) untuk palawija/kacang-kacangan, atau Oktober saat awal hujan kembali membasahi zona akar.',
  gwetroot: [0.82, 0.84, 0.81, 0.78, 0.68, 0.56, 0.45, 0.39, 0.41, 0.54, 0.72, 0.80],
  precip:   [11.4, 12.1, 10.8, 8.9, 5.2, 3.1, 1.8, 1.4, 2.1, 5.6, 9.8, 11.2],
  temp:     [23.8, 23.9, 24.2, 24.5, 24.4, 24.0, 23.6, 23.8, 24.4, 24.8, 24.3, 23.9]
};

window.rotationMatrix = window.rotationMatrix || {};
window.rotationMatrix.sumedang = {
  padi: [
    {
      name: 'Kedelai', latin: 'Glycine max', family: 'Leguminosae', score: 95,
      soilRecovery: 'Fiksasi Nitrogen alami (+45–60 kg N/ha) melalui bintil akar bakteri Rhizobium dan memecah lapisan tapak bajak sawah.',
      weatherRisk: 'Tanam pada awal peralihan kemarau (Mei–Juni) dengan saluran drainase keliling agar akar tidak tergenang hujan sisa.'
    },
    {
      name: 'Kacang Tanah', latin: 'Arachis hypogaea', family: 'Leguminosae', score: 91,
      soilRecovery: 'Mengembalikan unsur Nitrogen tanah sekaligus meningkatkan aerasi dan kegemburan agregat tanah liat Latosol.',
      weatherRisk: 'Gunakan mulsa jerami sisa panen padi untuk menjaga kelembapan tanah saat GWETROOT turun di bulan Juli–Agustus.'
    }
  ],
  jagung: [
    {
      name: 'Kacang Hijau', latin: 'Vigna radiata', family: 'Leguminosae', score: 94,
      soilRecovery: 'Siklus panen singkat (60 hari) yang efektif memulihkan cadangan Nitrogen pasca-tanaman jagung yang rakus hara.',
      weatherRisk: 'Sangat toleran terhadap penurunan curah hujan (PRECTOTCORR < 3 mm/hari) pada pertengahan musim kemarau.'
    },
    {
      name: 'Ubi Jalar', latin: 'Ipomoea batatas', family: 'Convolvulaceae', score: 88,
      soilRecovery: 'Tajuk daun rapat menutup permukaan lahan sehingga menekan gulma dan memperkaya biomassa serasah organik.',
      weatherRisk: 'Bentuk guludan setinggi 30 cm untuk mengantisipasi hujan lokal mendadak di bulan peralihan.'
    }
  ],
  cabai: [
    {
      name: 'Jagung Manis', latin: 'Zea mays saccharata', family: 'Poaceae', score: 93,
      soilRecovery: 'Bukan tanaman inang bagi bakteri layu Ralstonia solanacearum sehingga efektif memutus siklus patogen bekas cabai.',
      weatherRisk: 'Pastikan pasokan air mencukupi saat fase pembungaan jika ditanam memasuki bulan kering (Juli–September).'
    },
    {
      name: 'Bawang Daun', latin: 'Allium fistulosum', family: 'Amaryllidaceae', score: 89,
      soilRecovery: 'Eksudat akar mengandung senyawa antimikroba alami yang merangsang mikroorganisme antagonis penekan jamur tanah.',
      weatherRisk: 'Terapkan bedengan tinggi dan taburan kapur dolomit bila pH tanah di bawah 5,8 saat curah hujan tinggi.'
    }
  ],
  kentang: [
    {
      name: 'Buncis Tegak', latin: 'Phaseolus vulgaris', family: 'Leguminosae', score: 90,
      soilRecovery: 'Menambat Nitrogen bebas dan mengikat partikel tanah permukaan guna mencegah erosi topsoil lanjutan.',
      weatherRisk: 'Gunakan mulsa organik untuk menjaga suhu zona akar tetap stabil di ketinggian menengah Sumedang.'
    },
    {
      name: 'Sawi Hijau / Caisim', latin: 'Brassica rapa', family: 'Brassicaceae', score: 86,
      soilRecovery: 'Melepaskan senyawa biofumigan (glukosinolat) alami yang menekan populasi nematoda dan jamur tanah.',
      weatherRisk: 'Perlu naungan atau penyiraman rutin bila suhu T2M siang hari menyentuh puncak > 24,5°C.'
    }
  ]
};