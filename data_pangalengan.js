window.nasaRegions = window.nasaRegions || {};
window.nasaRegions.pangalengan = {
  name: 'Pangalengan, Kab. Bandung',
  lat: -7.1764,
  lon: 107.5681,
  coords: 'Lat -7.1764°, Lon 107.5681°',
  zone: 'Dataran Tinggi • Hortikultura Pegunungan',
  soilProfile: {
    type: 'Andosol Vulkanik',
    ph: '5,0 – 5,8 (Masam)',
    texture: 'Debu Lempungan Sangat Gembur',
    organic: 'Tinggi (4,2% – 5,5% C-Org)',
    origin: 'Berasal dari pelapukan abu vulkanik pegunungan yang sangat gembur dan kaya bahan organik, namun memiliki tingkat kemasaman tinggi (pH rendah) serta agregat yang mudah tererosi pada lahan miring.',
    management: 'Wajib membuat guludan searah kontur lereng untuk menahan erosi topsoil dan menaburkan kapur dolomit 1–1,5 ton/ha untuk menekan risiko penyakit akar gada pada tanaman sayuran.'
  },
  plantingAdvice: 'Kelembapan zona akar tetap terjaga sepanjang tahun (GWETROOT ≥ 0,49); jendela Juni–September merupakan waktu terbaik untuk rotasi sayuran akar dan kacang kapri dengan risiko busuk daun paling rendah.',
  gwetroot: [0.86, 0.88, 0.85, 0.82, 0.74, 0.64, 0.55, 0.49, 0.52, 0.65, 0.79, 0.85],
  precip:   [12.6, 13.2, 11.9, 9.6, 6.1, 3.8, 2.4, 1.9, 2.8, 6.8, 11.1, 12.4],
  temp:     [18.6, 18.7, 18.9, 19.1, 19.0, 18.5, 18.0, 18.2, 18.8, 19.2, 18.9, 18.7]
};

window.rotationMatrix = window.rotationMatrix || {};
window.rotationMatrix.pangalengan = {
  padi: [
    {
      name: 'Kacang Kapri', latin: 'Pisum sativum', family: 'Leguminosae', score: 94,
      soilRecovery: 'Adaptif di suhu sejuk dataran tinggi (~18,7°C) sambil memfiksasi Nitrogen alami melalui bakteri Rhizobium.',
      weatherRisk: 'Pasang ajir bambu dan buat bedengan tinggi untuk menghadapi curah hujan tinggi Pangalengan (>11 mm/hari di musim hujan).'
    },
    {
      name: 'Brokoli', latin: 'Brassica oleracea var. italica', family: 'Brassicaceae', score: 90,
      soilRecovery: 'Menambah residu biomassa organik tinggi dan menekan patogen tanah melalui efek biofumigasi alami.',
      weatherRisk: 'Pastikan drainase guludan lancar agar kelembapan tanah tinggi (GWETROOT > 0,80) tidak memicu busuk batang.'
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
      weatherRisk: 'Sangat sesuai dengan suhu sejuk Pangalengan (18–19°C) dan tahan terhadap kelembapan tanah zona akar tinggi.'
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
      weatherRisk: 'Gunakan ajir bambu dan jarak tanam lega agar sirkulasi udara kanopi mengurangi risiko jamur saat GWETROOT > 0,80.'
    }
  ]
};