window.nasaRegions = window.nasaRegions || {};
window.rotationMatrix = window.rotationMatrix || {};

window.nasaRegions.pangalengan = {
  name: 'Pangalengan, Kab. Bandung',
  lat: -7.1764,
  lon: 107.5681,
  coords: 'Lat -7.1764°, Lon 107.5681°',
  elevation: '921,68 m dpl',
  zone: 'Dataran Tinggi • Hortikultura Pegunungan',
  soilProfile: {
    type: 'Andosol Vulkanik',
    ph: '5,0 – 5,8 (Masam)',
    texture: 'Debu Lempungan Sangat Gembur',
    organic: 'Tinggi (4,2% – 5,5% C-Org)',
    origin: 'Berasal dari pelapukan abu vulkanik pegunungan yang sangat gembur dan kaya bahan organik, namun memiliki tingkat kemasaman tinggi (pH rendah) serta agregat yang mudah tererosi pada lahan miring.',
    management: 'Wajib membuat guludan searah kontur lereng untuk menahan erosi topsoil dan menaburkan kapur dolomit 1–1,5 ton/ha untuk menekan risiko penyakit akar gada pada tanaman sayuran.'
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

window.rotationMatrix.pangalengan = {
  padi: [
    {
      name: 'Kacang Kapri', latin: 'Pisum sativum', family: 'Leguminosae', score: 94,
      soilRecovery: 'Adaptif di suhu sejuk dataran tinggi (~21,9°C) sambil memfiksasi Nitrogen alami melalui bakteri Rhizobium.',
      weatherRisk: 'Pasang ajir bambu dan buat bedengan tinggi untuk menghadapi curah hujan tinggi Pangalengan (>12 mm/hari di Jan–Feb & Nov).'
    },
    {
      name: 'Brokoli', latin: 'Brassica oleracea var. italica', family: 'Brassicaceae', score: 90,
      soilRecovery: 'Menambah residu biomassa organik tinggi dan menekan patogen tanah melalui efek biofumigasi alami.',
      weatherRisk: 'Pastikan drainase guludan lancar agar kelembapan tanah tinggi (GWETROOT rerata 0,88) tidak memicu busuk batang.'
    }
  ],
  jagung: [
    {
      name: 'Buncis Kenya / Tegak', latin: 'Phaseolus vulgaris', family: 'Leguminosae', score: 95,
      soilRecovery: 'Mengembalikan ketersediaan Nitrogen pada tanah Andosol vulkanik setelah serapan hara tinggi oleh jagung.',
      weatherRisk: 'Gunakan mulsa organik untuk mencegah percikan spora jamur tanah saat curah hujan tinggi.'
    },
    {
      name: 'Wortel Dataran Tinggi', latin: 'Daucus carota', family: 'Apiaceae', score: 91,
      soilRecovery: 'Memanfaatkan struktur tanah Andosol yang gembur tanpa menguras hara Nitrogen berlebih.',
      weatherRisk: 'Buat guludan searah kontur lereng untuk mencegah erosi permukaan saat hujan lebat November–Februari.'
    }
  ],
  cabai: [
    {
      name: 'Bawang Prei / Daun', latin: 'Allium porrum', family: 'Amaryllidaceae', score: 95,
      soilRecovery: 'Eksudat akar menstimulasi mikroorganisme antagonis yang menekan bakteri Ralstonia dan jamur Fusarium.',
      weatherRisk: 'Sangat sesuai dengan iklim sejuk Pangalengan (21,05–22,51°C) dan tahan terhadap kelembapan zona akar tinggi.'
    },
    {
      name: 'Kubis / Kol', latin: 'Brassica oleracea', family: 'Brassicaceae', score: 90,
      soilRecovery: 'Memutus siklus inang penyakit Solanaceae serta memberikan efek biofumigan alami pada zona perakaran.',
      weatherRisk: 'Tambahkan kapur dolomit sebelum tanam guna menetralkan pH tanah vulkanik (5,0–5,8) dari risiko akar gada.'
    }
  ],
  kentang: [
    {
      name: 'Wortel', latin: 'Daucus carota', family: 'Apiaceae', score: 96,
      soilRecovery: 'Rotasi utama petani Pangalengan untuk memutus siklus nematoda sista kentang dan jamur Phytophthora.',
      weatherRisk: 'Terapkan guludan kontur dan mulsa jerami untuk menahan erosi topsoil pada lahan miring saat hujan lebat.'
    },
    {
      name: 'Kacang Kapri / Buncis', latin: 'Pisum sativum', family: 'Leguminosae', score: 93,
      soilRecovery: 'Memulihkan cadangan Nitrogen alami dan mengikat agregat tanah vulkanik yang gembur pasca-panen kentang.',
      weatherRisk: 'Gunakan ajir bambu dan jarak tanam lega agar sirkulasi udara kanopi mengurangi risiko jamur saat GWETROOT > 0,90.'
    }
  ]
};