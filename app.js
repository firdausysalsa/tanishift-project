const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

const cropResidues = {
  padi: 'Defisit Nitrogen & Silika serta pemadatan lapisan tapak bajak akibat genangan air sawah berulang.',
  jagung: 'Kuras hara makro (Heavy Feeder) pada Nitrogen (N), Fosfor (P), dan Kalium (K) disertai penurunan bahan organik tanah.',
  cabai: 'Budidaya cabai berulang meningkatkan populasi bakteri layu tanah (Ralstonia solanacearum) dan nematoda akar di dalam tanah.',
  kentang: 'Risiko tinggi erosi topsoil akibat penggemburan guludan intensif serta akumulasi jamur busuk umbi (Phytophthora) dan nematoda.'
};

let climateChart = null;
let selectedMonthIndex = 4; // Default Mei

function selectMonth(idx) {
  selectedMonthIndex = idx;
  const regionKey = document.getElementById('regionSelect').value;
  const yearKey = document.getElementById('yearSelect').value;
  renderPlantingCalendar(window.nasaRegions[regionKey], yearKey);
}

function enterDashboard() {
  const intro = document.getElementById('introScreen');
  if (intro) {
    intro.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 700);
  }
}

function resetToIntro() {
  const intro = document.getElementById('introScreen');
  if (intro) {
    intro.style.display = 'flex';
    setTimeout(() => {
      intro.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
  }
}

function selectRegionFromMap(regionKey) {
  document.getElementById('regionSelect').value = regionKey;
  updateDashboard();
}

function updateMapPins(activeKey) {
  ['sumedang', 'tanjungsari', 'pangalengan'].forEach(key => {
    const ring = document.getElementById('ring-' + key);
    const dot = document.getElementById('dot-' + key);
    if (ring && dot) {
      if (key === activeKey) {
        ring.setAttribute('opacity', '0.35');
        dot.setAttribute('fill', '#047857');
        dot.setAttribute('r', '7.5');
      } else {
        ring.setAttribute('opacity', '0');
        dot.setAttribute('fill', '#64748B');
        dot.setAttribute('r', '5.5');
      }
    }
  });
}

function renderPlantingCalendar(region, yearKey) {
  const calGrid = document.getElementById('plantingCalendarGrid');
  if (!calGrid) return;

  const series = region.climateData[yearKey];

  calGrid.innerHTML = months.map((m, idx) => {
    const p = series.precip[idx];
    let bgClass = 'bg-sky-50 border-sky-200 text-sky-900';
    let dotClass = 'bg-sky-500';
    let label = 'Basah';

    if (p < 4.0) {
      bgClass = 'bg-amber-50 border-amber-200 text-amber-900';
      dotClass = 'bg-amber-500';
      label = 'Kering';
    } else if (p >= 4.0 && p <= 8.5) {
      bgClass = 'bg-emerald-50 border-emerald-300 text-emerald-900';
      dotClass = 'bg-emerald-600';
      label = 'Rotasi';
    }

    const isSelected = idx === selectedMonthIndex;
    const ringStyle = isSelected ? 'ring-2 ring-emerald-600 shadow-md scale-105 bg-emerald-100/90' : '';

    return `
      <div onclick="selectMonth(${idx})" class="rounded-2xl border ${bgClass} ${ringStyle} p-2 text-center transition hover:scale-105 cursor-pointer shadow-2xs">
        <span class="block text-[11px] font-bold">${m}</span>
        <span class="inline-block w-2 h-2 rounded-full ${dotClass} my-1"></span>
        <span class="block text-[9px] font-semibold opacity-90">${label}</span>
      </div>
    `;
  }).join('');

  const mName = months[selectedMonthIndex];
  const mPrecip = series.precip[selectedMonthIndex];
  const mGwet = series.gwetroot[selectedMonthIndex];
  const mTemp = series.temp[selectedMonthIndex];
  const periodLabel = yearKey === 'avg' ? 'Rerata 2023–2025' : `Tahun ${yearKey}`;

  let statusDesc = mPrecip < 4.0
    ? 'Musim Kering / Kemarau (Waktu pengeringan, panen palawija, atau mulsa intensif)'
    : (mPrecip <= 8.5
      ? 'Jendela Rotasi Ideal (Kelembapan zona akar & hujan moderat sangat aman untuk tanam)'
      : 'Musim Basah / Hujan Lebat (Waktu optimal padi atau wajib drainase guludan)');

  const adviceElem = document.getElementById('plantingWindowAdvice');
  if (adviceElem) {
    adviceElem.innerHTML = `
      <strong>${mName} (${periodLabel}):</strong> Curah Hujan <strong>${mPrecip.toFixed(2)} mm/hari</strong> | Kelembapan Akar (GWETROOT) <strong>${mGwet.toFixed(2)}</strong> | Suhu <strong>${mTemp.toFixed(2)}°C</strong>. <em>Status: ${statusDesc}</em>.
    `;
  }
}

function updateDashboard() {
  const regionKey = document.getElementById('regionSelect').value;
  const yearKey = document.getElementById('yearSelect').value;
  const cropKey = document.getElementById('cropSelect').value;
  const region = window.nasaRegions[regionKey];
  const series = region.climateData[yearKey];
  const periodLabel = yearKey === 'avg' ? 'Rerata 2023–2025' : `Tahun ${yearKey}`;

  updateMapPins(regionKey);

  document.getElementById('soilResidueText').textContent = cropResidues[cropKey];
  document.getElementById('metaCoords').textContent = region.coords;
  document.getElementById('metaElev').textContent = region.elevation;
  document.getElementById('bannerElevation').textContent = region.elevation;
  document.getElementById('metaZone').textContent = region.zone;
  document.getElementById('activeRegionBadge').textContent = `${region.name} • ${periodLabel}`;
  document.getElementById('telemetryTitle').textContent = `Indikator Agroklimatologi NASA POWER (${periodLabel})`;
  document.getElementById('chartTitle').textContent = `Tren Bulanan Kelembapan Tanah & Curah Hujan (${periodLabel})`;

  document.getElementById('soilTypeVal').textContent = region.soilProfile.type;
  document.getElementById('soilPhVal').textContent = region.soilProfile.ph;
  document.getElementById('soilTextureVal').textContent = region.soilProfile.texture;
  document.getElementById('soilOrganicVal').textContent = region.soilProfile.organic;
  document.getElementById('soilOriginDesc').textContent = region.soilProfile.origin;
  document.getElementById('soilManagementDesc').textContent = region.soilProfile.management;

  const annGwet = series.annGwetroot;
  const annPrecip = series.annPrecip;
  const annTemp = series.annTemp;

  document.getElementById('valGwetroot').textContent = annGwet.toFixed(2);
  document.getElementById('barGwetroot').style.width = Math.round(annGwet * 100) + '%';
  document.getElementById('badgeGwetroot').textContent = annGwet >= 0.80 ? 'Lembap Tinggi' : 'Optimal';

  document.getElementById('valPrecip').textContent = annPrecip.toFixed(2);
  document.getElementById('barPrecip').style.width = Math.min(100, Math.round((annPrecip / 15) * 100)) + '%';

  document.getElementById('valTemp').textContent = annTemp.toFixed(2) + '°C';
  document.getElementById('barTemp').style.width = Math.min(100, Math.round((annTemp / 32) * 100)) + '%';
  document.getElementById('badgeTemp').textContent = annTemp < 22.2 ? 'Sejuk Dataran Tinggi' : 'Sejuk–Sedang';

  renderPlantingCalendar(region, yearKey);

  const recs = window.rotationMatrix[regionKey][cropKey];
  const container = document.getElementById('recommendationsContainer');
  container.innerHTML = recs.map((item, idx) => `
    <article class="card-elevated rounded-3xl p-6 flex flex-col justify-between border-t-4 ${idx === 0 ? 'border-t-emerald-600' : 'border-t-teal-600'}">
      <div>
        <div class="flex items-start justify-between gap-3 mb-3">
          <div>
            <span class="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 mb-1.5 border border-slate-200">
              Opsi #${idx + 1} • Famili ${item.family}
            </span>
            <h4 class="font-display font-bold text-lg text-slate-900 leading-tight">
              ${item.name}
            </h4>
            <p class="text-xs italic text-slate-500 mt-0.5">${item.latin}</p>
          </div>
          <div class="text-right shrink-0 bg-emerald-50 border border-emerald-200 rounded-2xl px-3.5 py-2 shadow-2xs">
            <span class="block font-mono-tech font-black text-lg text-emerald-800">${item.score}%</span>
            <span class="block text-[10px] font-bold text-emerald-700">Kecocokan</span>
          </div>
        </div>

        <div class="space-y-3 mt-4">
          <div class="rounded-2xl bg-emerald-50/80 border border-emerald-200 p-3.5">
            <p class="text-[11px] font-bold text-emerald-900 uppercase tracking-wide mb-1">
              Pemulihan Unsur Hara Tanah
            </p>
            <p class="text-xs text-emerald-950 leading-relaxed">${item.soilRecovery}</p>
          </div>

          <div class="rounded-2xl bg-amber-50/80 border border-amber-200 p-3.5">
            <p class="text-[11px] font-bold text-amber-900 uppercase tracking-wide mb-1">
              Mitigasi Risiko Cuaca
            </p>
            <p class="text-xs text-amber-950 leading-relaxed">${item.weatherRisk}</p>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  renderChart(series);
}

function renderChart(series) {
  const ctx = document.getElementById('climateChart').getContext('2d');
  if (climateChart) {
    climateChart.destroy();
  }
  climateChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          type: 'line',
          label: 'GWETROOT (Kelembapan Akar 0–1)',
          data: series.gwetroot,
          borderColor: '#059669',
          backgroundColor: 'rgba(5, 150, 105, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: '#047857',
          pointRadius: 4,
          tension: 0,
          yAxisID: 'y1'
        },
        {
          type: 'bar',
          label: 'PRECTOTCORR (Curah Hujan mm/hari)',
          data: series.precip,
          backgroundColor: 'rgba(14, 165, 233, 0.8)',
          borderRadius: 8,
          yAxisID: 'y'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0F172A',
          titleFont: { family: 'Plus Jakarta Sans', size: 13, weight: 'bold' },
          bodyFont: { family: 'JetBrains Mono', size: 11 },
          padding: 12,
          cornerRadius: 12
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 11, weight: '500' }, color: '#475569' }
        },
        y: {
          type: 'linear',
          position: 'left',
          title: { display: true, text: 'Curah Hujan (mm/hari)', font: { size: 11, weight: 'bold' }, color: '#0284C7' },
          grid: { color: '#F1F5F9' },
          ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#475569' }
        },
        y1: {
          type: 'linear',
          position: 'right',
          min: 0,
          max: 1,
          title: { display: true, text: 'GWETROOT (0–1)', font: { size: 11, weight: 'bold' }, color: '#059669' },
          grid: { drawOnChartArea: false },
          ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#059669' }
        }
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', updateDashboard);