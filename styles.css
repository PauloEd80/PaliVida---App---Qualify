const dadosClinicos = [
  {
    id: "constipacao",
    titulo: "Constipação Intestinal",
    definicao: "Caracterizado por evacuações com baixa frequência, podendo ser também incompletas e difíceis.",
    sinaisSintomas: ["Dificuldade ou incapacidade de evacuar", "Menos de três evacuações por semana", "Eliminação de fezes endurecidas", "Sensação de esvaziamento incompleto do reto"],
    sinaisAlerta: ["Início rápido", "Náuseas ou vômito", "Dificuldade na eliminação de flatos", "Dor intensa", "Distensão abdominal", "Perda de peso sem explicação", "Sangramento retal", "Anemia ferropriva inexplicada"],
    referencias: ["OLIVEIRA, Adriana dos Santos et al. Sinais e sintomas na clínica médica. Unitins, 2024.", "TIMERMAN, Sergio. Emergências Médicas - Passo a Passo. Guanabara Koogan, 2019."]
  },
  {
    id: "depressao",
    titulo: "Tristeza (Depressão)",
    definicao: "Variação de humor, marcada por tristeza, falta de motivação, ansiedade, sensação de vazio e falta de esperança.",
    sinaisSintomas: ["Humor deprimido", "Perda do interesse em atividades diárias", "Alterações do sono e do apetite", "Lentificação ou agitação psicomotora", "Fadiga e perda de energia", "Falta de concentração e indecisão", "Pensamentos de culpa excessiva"],
    sinaisAlerta: ["Agitação severa", "Agressividade", "Alteração do nível de consciência", "Ideação ou tentativa suicida"],
    referencias: ["NUNES, Maria do Patrocínio T. D&T InforMed Clínica Médica. Manole, 2024.", "TIMERMAN, Sergio. Emergências Médicas - Passo a Passo. Guanabara Koogan, 2019."]
  },
  {
    id: "ansiedade",
    titulo: "Ansiedade",
    definicao: "Mecanismo do organismo para nos avisar quando algo está errado. Caracterizado por tensão, hipervigilância e apreensão.",
    sinaisSintomas: ["Preocupações excessivas", "Dificuldade em relaxar e tensão muscular", "Sudorese e taquicardia", "Sensação de falta de ar", "Aceleração da fala e pensamento"],
    sinaisAlerta: ["Associação ao uso abusivo de substâncias", "Ideação ou tentativa suicida"],
    referencias: ["NUNES, Maria do Patrocínio T. D&T InforMed Clínica Médica. Manole, 2024."]
  },
  {
    id: "dor",
    titulo: "Dor",
    definicao: "Reação do sistema nervoso de modo fisiológico a uma lesão tecidual decorrente de estímulos mecânicos, químicos ou térmicos.",
    sinaisSintomas: ["Náuseas e Vômitos", "Sudorese e Palidez", "Taquicardia e Hipertensão Arterial", "Alteração do tônus muscular", "Irritabilidade e alteração do sono"],
    sinaisAlerta: ["Dor de intensidade extrema sem alívio", "Associação com perda motora repentina"],
    referencias: ["OLIVEIRA, Adriana dos Santos et al. Sinais e sintomas na clínica médica. Unitins, 2024.", "CARVALHO, Ricardo T.; PARSONS, Henrique A. Manual de cuidados paliativos. ANCP, 2012."]
  },
  {
    id: "nausea-vomito",
    titulo: "Náusea e Vômitos",
    definicao: "Náusea é a sensação subjetiva de incômodo que antecipa o vômito. Vômito é a eliminação forçada do conteúdo gástrico.",
    sinaisSintomas: ["Anorexia", "Dor e distensão abdominal", "Refluxo gastroesofágico"],
    sinaisAlerta: ["Febre alta", "Cefaleia e alterações visuais/vertigens", "Desidratação e instabilidade hemodinâmica", "Alterações neurológicas agudas"],
    referencias: ["RIBEIRO, Sabrina Corrêa da C. Cuidados paliativos no paciente crítico. Manole, 2023."]
  },
  {
    id: "dispneia",
    titulo: "Dispneia (Falta de Ar)",
    definicao: "Sensação de desconforto respiratório, percebido como falta de ar ou aumento do esforço respiratório.",
    sinaisSintomas: ["Ansiedade", "Secreções respiratórias audíveis (sororoca)", "Dispneia ao falar", "Incursões respiratórias superficiais ou pausadas"],
    sinaisAlerta: ["Confusão mental aguda", "Esforço respiratório insuficiente ou exaustão"],
    referencias: ["BERLINER, D. et al. The Differential Diagnosis of Dyspnea. 2016."]
  },
  {
    id: "fadiga",
    titulo: "Fadiga / Cansaço",
    definicao: "Sensação desagradável e subjetiva, englobando do cansaço à exaustão, interferindo na capacidade funcional.",
    sinaisSintomas: ["Perda de massa muscular e fraqueza", "Falta de disposição diária", "Lentidão de raciocínio e memória"],
    sinaisAlerta: ["Piora rápida da intensidade da fadiga", "Inquietação ou letargia severa", "Sonolência na maioria do tempo", "Alteração marcante dos Sinais Vitais"],
    referencias: ["SOCIEDADE BRASILEIRA DE ONCOLOGIA CLÍNICA (SBOC). Manual de tratamento sintomático, 2025."]
  },
  {
    id: "xerostomia",
    titulo: "Xerostomia (Boca Seca)",
    definicao: "Sensação de boca seca devido à diminuição da produção salivar ou alteração da sua composição.",
    sinaisSintomas: ["Saliva espessa ou ausência de saliva", "Alteração do paladar e sensação de queimação", "Dificuldade para mastigar, engolir e falar"],
    sinaisAlerta: ["Incapacidade total de se alimentar", "Infeções orais disseminadas", "Ressecamento das vias respiratórias e garganta"],
    referencias: ["FEIO, Madalena; SAPETA, Paula. Xerostomia em cuidados paliativos. 2005."]
  }
];

const selectedSymptoms = new Set();
const selectedAlerts = new Set();

const navSymptomsBtn = document.getElementById('nav-symptoms-btn');
const navNovoCadastroBtn = document.getElementById('nav-novo-cadastro-btn');
const navLaudoBtn = document.getElementById('nav-laudo-btn');

const symptomsView = document.getElementById('symptoms-view');
const novoCadastroView = document.getElementById('novo-cadastro-view');
const laudoView = document.getElementById('laudo-digital-view');
const brandLogo = document.getElementById('brand-logo');

const cardsContainer = document.getElementById('cards-container');
const symptomNav = document.getElementById('symptom-nav');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const suggestionsList = document.getElementById('search-suggestions');

const triagePanel = document.getElementById('triage-panel');
const gradientIndicator = document.getElementById('gradient-indicator');
const triageBanner = document.getElementById('triage-result-banner');
const triageStatusText = document.getElementById('triage-status-text');
const resetBtn = document.getElementById('reset-selection-btn');

const carteirinhaForm = document.getElementById('carteirinha-form');
const previewArea = document.getElementById('carteirinha-preview-area');
const btnPrint = document.getElementById('btn-print-carteirinha');
const btnEdit = document.getElementById('btn-edit-carteirinha');

const pdfFileInput = document.getElementById('pdf-file-input');
const pdfViewerSection = document.getElementById('pdf-viewer-section');
const pdfFrame = document.getElementById('pdf-frame');
const btnClosePdf = document.getElementById('btn-close-pdf');
const btnFullscreenPdf = document.getElementById('btn-fullscreen-pdf');
let currentPdfBlobUrl = null;

function switchView(view) {
  symptomsView.classList.add('hidden');
  novoCadastroView.classList.add('hidden');
  laudoView.classList.add('hidden');
  
  navSymptomsBtn.classList.remove('active', 'nav-highlight');
  navNovoCadastroBtn.classList.remove('active', 'nav-highlight');
  navLaudoBtn.classList.remove('active', 'nav-highlight');

  if (view === 'symptoms') {
    symptomsView.classList.remove('hidden');
    navSymptomsBtn.classList.add('active');
  } else if (view === 'novo-cadastro') {
    novoCadastroView.classList.remove('hidden');
    navNovoCadastroBtn.classList.add('active', 'nav-highlight');
  } else if (view === 'laudo') {
    laudoView.classList.remove('hidden');
    navLaudoBtn.classList.add('active', 'nav-highlight');
  }
}

navSymptomsBtn.addEventListener('click', () => switchView('symptoms'));
navNovoCadastroBtn.addEventListener('click', () => switchView('novo-cadastro'));
navLaudoBtn.addEventListener('click', () => switchView('laudo'));
brandLogo.addEventListener('click', () => switchView('symptoms'));

function renderSidebar() {
  symptomNav.innerHTML = '';
  dadosClinicos.forEach(item => {
    const link = document.createElement('a');
    link.className = 'nav-item';
    link.textContent = item.titulo;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openAndScrollToCard(item.id);
    });
    symptomNav.appendChild(link);
  });
}

function renderCards() {
  cardsContainer.innerHTML = '';

  dadosClinicos.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    card.id = item.id;

    const sintomasItems = item.sinaisSintomas.map(s => {
      const isChecked = selectedSymptoms.has(s) ? 'checked' : '';
      const selectedClass = selectedSymptoms.has(s) ? 'selected' : '';
      return `<label class="symptom-checkbox-label ${selectedClass}"><input type="checkbox" data-type="symptom" value="${s}" ${isChecked}><span>${s}</span></label>`;
    }).join('');

    let alertasSection = '';
    if (item.sinaisAlerta && item.sinaisAlerta.length > 0) {
      const alertasItems = item.sinaisAlerta.map(a => {
        const isChecked = selectedAlerts.has(a) ? 'checked' : '';
        const selectedClass = selectedAlerts.has(a) ? 'selected alert-item' : '';
        return `<label class="symptom-checkbox-label ${selectedClass}"><input type="checkbox" data-type="alert" value="${a}" ${isChecked}><span>⚠️ ${a}</span></label>`;
      }).join('');
      alertasSection = `<div style="margin-top: 1rem;"><div class="section-label" style="color: #991b1b;">Sinais de Alerta</div><div class="symptoms-checkbox-grid">${alertasItems}</div></div>`;
    }

    const refsHTML = item.referencias.map(r => `<li>${r}</li>`).join('');

    card.innerHTML = `
      <div class="card-header" onclick="toggleCard('${item.id}')">
        <h3 class="card-title">${item.titulo}</h3>
        <span class="accordion-icon">▼</span>
      </div>
      <div class="card-body">
        <p class="card-definition">${item.definicao}</p>
        <div class="section-label">Marque os sintomas observados:</div>
        <div class="symptoms-checkbox-grid">${sintomasItems}</div>
        ${alertasSection}
        <details class="references-details">
          <summary>Referências Bibliográficas</summary>
          <ul>${refsHTML}</ul>
        </details>
      </div>
    `;
    cardsContainer.appendChild(card);
  });

  attachCheckboxListeners();
}

function toggleCard(cardId, forceOpen = false) {
  const card = document.getElementById(cardId);
  if (!card) return;
  if (forceOpen) card.classList.add('open');
  else card.classList.toggle('open');
}

function openAndScrollToCard(cardId) {
  switchView('symptoms');
  toggleCard(cardId, true);
  const card = document.getElementById(cardId);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('highlight-card');
    setTimeout(() => card.classList.remove('highlight-card'), 2000);
  }
  suggestionsList.classList.add('hidden');
}

searchInput.addEventListener('input', (e) => {
  const termo = e.target.value.toLowerCase().trim();
  suggestionsList.innerHTML = '';
  if (termo.length === 0) {
    suggestionsList.classList.add('hidden');
    return;
  }
  const resultados = [];
  dadosClinicos.forEach(item => {
    if (item.titulo.toLowerCase().includes(termo)) {
      resultados.push({ titulo: item.titulo, cardId: item.id, tipo: 'Condição' });
    }
    item.sinaisSintomas.forEach(s => {
      if (s.toLowerCase().includes(termo) && !resultados.some(r => r.titulo === item.titulo)) {
        resultados.push({ titulo: `${s} (${item.titulo})`, cardId: item.id, tipo: 'Sintoma' });
      }
    });
  });

  if (resultados.length > 0) {
    resultados.forEach(res => {
      const li = document.createElement('li');
      li.className = 'suggestion-item';
      li.innerHTML = `<span>${res.titulo}</span><span class="suggestion-tag">${res.tipo}</span>`;
      li.addEventListener('click', () => {
        searchInput.value = '';
        openAndScrollToCard(res.cardId);
      });
      suggestionsList.appendChild(li);
    });
    suggestionsList.classList.remove('hidden');
  } else {
    suggestionsList.classList.add('hidden');
  }
});

searchBtn.addEventListener('click', () => {
  const termo = searchInput.value.toLowerCase().trim();
  if (!termo) return;
  const itemEncontrado = dadosClinicos.find(item => 
    item.titulo.toLowerCase().includes(termo) ||
    item.sinaisSintomas.some(s => s.toLowerCase().includes(termo))
  );
  if (itemEncontrado) {
    openAndScrollToCard(itemEncontrado.id);
    searchInput.value = '';
  } else {
    alert('Nenhum sintoma ou condição foi localizado.');
  }
});

function attachCheckboxListeners() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(chk => {
    chk.addEventListener('change', (e) => {
      const value = e.target.value;
      const type = e.target.dataset.type;
      if (e.target.checked) {
        if (type === 'symptom') selectedSymptoms.add(value);
        if (type === 'alert') selectedAlerts.add(value);
      } else {
        if (type === 'symptom') selectedSymptoms.delete(value);
        if (type === 'alert') selectedAlerts.delete(value);
      }
      updateTriageEvaluator();
      const parentLabel = e.target.closest('.symptom-checkbox-label');
      if (e.target.checked) {
        parentLabel.classList.add('selected');
        if (type === 'alert') parentLabel.classList.add('alert-item');
      } else {
        parentLabel.classList.remove('selected', 'alert-item');
      }
    });
  });
}

function updateTriageEvaluator() {
  const totalSymptoms = selectedSymptoms.size;
  const totalAlerts = selectedAlerts.size;
  const totalSelected = totalSymptoms + totalAlerts;

  if (totalSelected === 0) {
    triagePanel.classList.add('hidden');
    return;
  }
  triagePanel.classList.remove('hidden');
  let positionPercentage = 0;

  if (totalAlerts > 0 || totalSymptoms >= 6) {
    positionPercentage = Math.min(75 + (totalAlerts * 8), 98);
    gradientIndicator.style.left = `${positionPercentage}%`;
    triageBanner.className = 'triage-banner level-red';
    triageStatusText.innerHTML = `🚨 <strong>MUITO PREOCUPANTE:</strong> Sinal de alerta detectado. Procure atendimento médico especialista URGENTE.`;
  } else if (totalSymptoms >= 3) {
    positionPercentage = 35 + (totalSymptoms * 8);
    gradientIndicator.style.left = `${positionPercentage}%`;
    triageBanner.className = 'triage-banner level-yellow';
    triageStatusText.innerHTML = `⚠️ <strong>PREOCUPANTE:</strong> Múltiplos sintomas informados. Recomendado agendamento de consulta.`;
  } else {
    positionPercentage = Math.max(10, totalSymptoms * 12);
    gradientIndicator.style.left = `${positionPercentage}%`;
    triageBanner.className = 'triage-banner level-green';
    triageStatusText.innerHTML = `🟢 <strong>POUCO PREOCUPANTE:</strong> Sintomas isolados. Mantenha acompanhamento de rotina.`;
  }
}

resetBtn.addEventListener('click', () => {
  selectedSymptoms.clear();
  selectedAlerts.clear();
  updateTriageEvaluator();
  renderCards();
});

carteirinhaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('paciente-nome').value;
  const nasc = document.getElementById('paciente-nascimento').value;
  const doc = document.getElementById('paciente-documento').value;
  const diag = document.getElementById('diagnostico-principal').value;
  const cid = document.getElementById('codigo-cid').value || 'Não informado';
  const sintomas = document.getElementById('sintomas-predominantes').value;
  const alergias = document.getElementById('alergias-restricoes').value || 'Nenhuma declarada';
  const meds = document.getElementById('medicamentos-continuos').value || 'Nenhum declarado';
  const cuidador = document.getElementById('cuidador-nome').value;
  const fone = document.getElementById('telefone-emergencia-1').value;
  const medico = document.getElementById('medico-assistente').value || 'Não informado';
  const unidade = document.getElementById('unidade-saude').value || 'Não informada';

  const dataFormatada = nasc.split('-').reverse().join('/');

  document.getElementById('card-val-nome').textContent = nome;
  document.getElementById('card-val-nasc').textContent = dataFormatada;
  document.getElementById('card-val-doc').textContent = doc;
  document.getElementById('card-val-diag').textContent = diag;
  document.getElementById('card-val-cid').textContent = cid;
  document.getElementById('card-val-sintomas').textContent = sintomas;
  document.getElementById('card-val-alergias').textContent = alergias;
  document.getElementById('card-val-meds').textContent = meds;
  document.getElementById('card-val-cuidador').textContent = cuidador;
  document.getElementById('card-val-fone').textContent = fone;
  document.getElementById('card-val-medico').textContent = medico;
  document.getElementById('card-val-unidade').textContent = unidade;

  previewArea.classList.remove('hidden');
  previewArea.scrollIntoView({ behavior: 'smooth' });
});

btnEdit.addEventListener('click', () => {
  carteirinhaForm.scrollIntoView({ behavior: 'smooth' });
});
btnPrint.addEventListener('click', () => {
  window.print();
});

if (pdfFileInput) {
  pdfFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (file.type !== 'application/pdf') {
      alert('Por favor, selecione um arquivo válido no formato PDF.');
      pdfFileInput.value = '';
      return;
    }
    if (currentPdfBlobUrl) {
      URL.revokeObjectURL(currentPdfBlobUrl);
    }
    currentPdfBlobUrl = URL.createObjectURL(file);
    pdfFrame.src = currentPdfBlobUrl;
    
    // Atualiza o link fallback para garantir visualização no celular (iOS/Android limitam iframes para PDF)
    if (btnFullscreenPdf) {
      btnFullscreenPdf.href = currentPdfBlobUrl;
    }

    pdfViewerSection.classList.remove('hidden');
    pdfViewerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (btnClosePdf) {
  btnClosePdf.addEventListener('click', () => {
    pdfFrame.src = '';
    if (currentPdfBlobUrl) {
      URL.revokeObjectURL(currentPdfBlobUrl);
      currentPdfBlobUrl = null;
    }
    if (btnFullscreenPdf) {
      btnFullscreenPdf.href = '#';
    }
    pdfViewerSection.classList.add('hidden');
    pdfFileInput.value = '';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderCards();
});
