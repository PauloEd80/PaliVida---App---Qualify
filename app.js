// Adição de sinônimos para melhorar a busca de pacientes com diferentes níveis de letramento.
const dadosClinicos = [
  {
    id: "constipacao",
    titulo: "Constipação Intestinal",
    definicao: "Caracterizado por evacuações com baixa frequência, podendo ser também incompletas e difíceis.",
    sinaisSintomas: ["Dificuldade ou incapacidade de evacuar", "Menos de três evacuações por semana", "Eliminação de fezes endurecidas", "Sensação de esvaziamento incompleto do reto"],
    sinaisAlerta: ["Início rápido", "Náuseas ou vômito", "Dificuldade na eliminação de flatos", "Dor intensa", "Distensão abdominal", "Perda de peso sem explicação", "Sangramento retal", "Anemia ferropriva inexplicada"],
    sinonimos: ["prisão de ventre", "ressecado", "intestino preso", "dificuldade de ir ao banheiro", "fezes"],
    referencias: ["OLIVEIRA, Adriana dos Santos et al. Sinais e sintomas na clínica médica. Unitins, 2024.", "TIMERMAN, Sergio. Emergências Médicas - Passo a Passo. Guanabara Koogan, 2019."]
  },
  {
    id: "depressao",
    titulo: "Tristeza (Depressão)",
    definicao: "Variação de humor, marcada por tristeza, falta de motivação, ansiedade, sensação de vazio e falta de esperança.",
    sinaisSintomas: ["Humor deprimido", "Perda do interesse em atividades diárias", "Alterações do sono e do apetite", "Lentificação ou agitação psicomotora", "Fadiga e perda de energia", "Falta de concentração e indecisão", "Pensamentos de culpa excessiva"],
    sinaisAlerta: ["Agitação severa", "Agressividade", "Alteração do nível de consciência", "Ideação ou tentativa suicida"],
    sinonimos: ["triste", "choro", "desânimo", "angústia", "vazio", "sem esperança"],
    referencias: ["NUNES, Maria do Patrocínio T. D&T InforMed Clínica Médica. Manole, 2024.", "TIMERMAN, Sergio. Emergências Médicas - Passo a Passo. Guanabara Koogan, 2019."]
  },
  {
    id: "ansiedade",
    titulo: "Ansiedade",
    definicao: "Mecanismo do organismo para nos avisar quando algo está errado. Caracterizado por tensão, hipervigilância e apreensão.",
    sinaisSintomas: ["Preocupações excessivas", "Dificuldade em relaxar e tensão muscular", "Sudorese e taquicardia", "Sensação de falta de ar", "Aceleração da fala e pensamento"],
    sinaisAlerta: ["Associação ao uso abusivo de substâncias", "Ideação ou tentativa suicida"],
    sinonimos: ["nervoso", "nervosismo", "pânico", "apreensão", "medo", "suor", "coração acelerado"],
    referencias: ["NUNES, Maria do Patrocínio T. D&T InforMed Clínica Médica. Manole, 2024."]
  },
  {
    id: "dor",
    titulo: "Dor",
    definicao: "Reação do sistema nervoso de modo fisiológico a uma lesão tecidual decorrente de estímulos mecânicos, químicos ou térmicos.",
    sinaisSintomas: ["Náuseas e Vômitos", "Sudorese e Palidez", "Taquicardia e Hipertensão Arterial", "Alteração do tônus muscular", "Irritabilidade e alteração do sono"],
    sinaisAlerta: ["Dor de intensidade extrema sem alívio", "Associação com perda motora repentina"],
    sinonimos: ["machucado", "pontada", "ardência", "incômodo", "sofrimento físico"],
    referencias: ["OLIVEIRA, Adriana dos Santos et al. Sinais e sintomas na clínica médica. Unitins, 2024.", "CARVALHO, Ricardo T.; PARSONS, Henrique A. Manual de cuidados paliativos. ANCP, 2012."]
  },
  {
    id: "nausea-vomito",
    titulo: "Náusea e Vômitos",
    definicao: "Náusea é a sensação subjetiva de incômodo que antecipa o vômito. Vômito é a eliminação forçada do conteúdo gástrico.",
    sinaisSintomas: ["Anorexia", "Dor e distensão abdominal", "Refluxo gastroesofágico"],
    sinaisAlerta: ["Febre alta", "Cefaleia e alterações visuais/vertigens", "Desidratação e instabilidade hemodinâmica", "Alterações neurológicas agudas"],
    sinonimos: ["enjoo", "ânsia", "vomitar", "revirando o estômago", "embrulho"],
    referencias: ["RIBEIRO, Sabrina Corrêa da C. Cuidados paliativos no paciente crítico. Manole, 2023."]
  },
  {
    id: "dispneia",
    titulo: "Dispneia (Falta de Ar)",
    definicao: "Sensação de desconforto respiratório, percebido como falta de ar ou aumento do esforço respiratório.",
    sinaisSintomas: ["Ansiedade", "Secreções respiratórias audíveis (sororoca)", "Dispneia ao falar", "Incursões respiratórias superficiais ou pausadas"],
    sinaisAlerta: ["Confusão mental aguda", "Esforço respiratório insuficiente ou exaustão"],
    sinonimos: ["falta de ar", "sufoco", "respiração ofegante", "cansaço para respirar", "asma"],
    referencias: ["BERLINER, D. et al. The Differential Diagnosis of Dyspnea. 2016."]
  },
  {
    id: "fadiga",
    titulo: "Fadiga / Cansaço",
    definicao: "Sensação desagradável e subjetiva, englobando do cansaço à exaustão, interferindo na capacidade funcional.",
    sinaisSintomas: ["Perda de massa muscular e fraqueza", "Falta de disposição diária", "Lentidão de raciocínio e memória"],
    sinaisAlerta: ["Piora rápida da intensidade da fadiga", "Inquietação ou letargia severa", "Sonolência na maioria do tempo", "Alteração marcante dos Sinais Vitais"],
    sinonimos: ["cansaço", "exaustão", "fraqueza", "sem força", "moleza", "sono excessivo"],
    referencias: ["SOCIEDADE BRASILEIRA DE ONCOLOGIA CLÍNICA (SBOC). Manual de tratamento sintomático, 2025."]
  },
  {
    id: "xerostomia",
    titulo: "Xerostomia (Boca Seca)",
    definicao: "Sensação de boca seca devido à diminuição da produção salivar ou alteração da sua composição.",
    sinaisSintomas: ["Saliva espessa ou ausência de saliva", "Alteração do paladar e sensação de queimação", "Dificuldade para mastigar, engolir e falar"],
    sinaisAlerta: ["Incapacidade total de se alimentar", "Infeções orais disseminadas", "Ressecamento das vias respiratórias e garganta"],
    sinonimos: ["boca seca", "falta de saliva", "sede constante", "boca amarga"],
    referencias: ["FEIO, Madalena; SAPETA, Paula. Xerostomia em cuidados paliativos. 2005."]
  }
];

const iconesPorId = {
  "constipacao": "🚽", "depressao": "😔", "ansiedade": "😰", "dor": "🤕",
  "nausea-vomito": "🤢", "dispneia": "🫁", "fadiga": "🔋", "xerostomia": "💧"
};

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

const wizardSteps = Array.from(document.querySelectorAll('.wizard-step'));
const wizardBackBtn = document.getElementById('wizard-back-btn');
const wizardNextBtn = document.getElementById('wizard-next-btn');
const wizardSubmitBtn = document.getElementById('wizard-submit-btn');
const wizardProgressFill = document.getElementById('wizard-progress-fill');
const wizardStepLabel = document.getElementById('wizard-step-label');
const wizardErrorMsg = document.getElementById('wizard-error-msg');
const totalWizardSteps = wizardSteps.length;
let currentWizardStep = 1;

const stepTitles = {
  1: 'Dados do Paciente',
  2: 'Cuidador e Contato',
  3: 'Diagnóstico e Condições',
  4: 'Equipe de Saúde'
};

const pdfFileInput = document.getElementById('pdf-file-input');
const pdfViewerSection = document.getElementById('pdf-viewer-section');
const pdfFrame = document.getElementById('pdf-frame');
const btnClosePdf = document.getElementById('btn-close-pdf');
const btnFullscreenPdf = document.getElementById('btn-fullscreen-pdf');
let currentPdfBlobUrl = null;
let currentPdfFile = null;

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
    link.innerHTML = `<span aria-hidden="true">${iconesPorId[item.id] || '🔹'}</span><span>${item.titulo}</span>`;
    link.addEventListener('click', (e) => { e.preventDefault(); openAndScrollToCard(item.id); });
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
      alertasSection = `<div class="alert-section"><div class="section-label alert-section-label">⚠️ Sinais de Alerta — Observou algum destes?</div><div class="symptoms-checkbox-grid">${alertasItems}</div></div>`;
    }

    const refsHTML = item.referencias.map(r => `<li>${r}</li>`).join('');
    const icone = iconesPorId[item.id] || '🔹';

    card.innerHTML = `
      <div class="card-header" onclick="toggleCard('${item.id}')">
        <div class="card-title-group">
          <span class="card-icon" aria-hidden="true">${icone}</span>
          <h3 class="card-title">${item.titulo}</h3>
        </div>
        <span class="accordion-icon" aria-hidden="true">▼</span>
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
  if (termo.length === 0) { suggestionsList.classList.add('hidden'); return; }
  
  const resultados = [];
  dadosClinicos.forEach(item => {
    // Busca pelo título ou sinônimos
    if (item.titulo.toLowerCase().includes(termo) || (item.sinonimos && item.sinonimos.some(sin => sin.toLowerCase().includes(termo)))) {
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
      li.addEventListener('click', () => { searchInput.value = ''; openAndScrollToCard(res.cardId); });
      suggestionsList.appendChild(li);
    });
    suggestionsList.classList.remove('hidden');
  } else {
    suggestionsList.classList.add('hidden');
  }
});

function attachCheckboxListeners() {
  document.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const value = e.target.value;
      const type = e.target.dataset.type;
      if (e.target.checked) {
        if (type === 'symptom') selectedSymptoms.add(value);
        if (type === 'alert') selectedAlerts.add(value);
        e.target.closest('.symptom-checkbox-label').classList.add('selected', type === 'alert' ? 'alert-item' : '');
      } else {
        if (type === 'symptom') selectedSymptoms.delete(value);
        if (type === 'alert') selectedAlerts.delete(value);
        e.target.closest('.symptom-checkbox-label').classList.remove('selected', 'alert-item');
      }
      updateTriageEvaluator();
    });
  });
}

function updateTriageEvaluator() {
  const totalSymptoms = selectedSymptoms.size;
  const totalAlerts = selectedAlerts.size;
  
  if (totalSymptoms + totalAlerts === 0) {
    triagePanel.classList.add('hidden');
    return;
  }
  
  triagePanel.classList.remove('hidden');
  let pos = 0;

  // Lógica adaptada com linguagem focada no conforto do paciente (Paliativos)
  if (totalAlerts > 0 || totalSymptoms >= 6) {
    pos = Math.min(75 + (totalAlerts * 8), 98);
    triageBanner.className = 'triage-banner level-red';
    triageStatusText.innerHTML = `🚨 <strong>ATENÇÃO NECESSÁRIA:</strong> Sinal de alerta detectado. Recomendamos contatar sua equipe de saúde ou médico assistente.`;
  } else if (totalSymptoms >= 3) {
    pos = 35 + (totalSymptoms * 8);
    triageBanner.className = 'triage-banner level-yellow';
    triageStatusText.innerHTML = `⚠️ <strong>OBSERVAÇÃO:</strong> Múltiplos sintomas informados. Mantenha acompanhamento e relate na próxima consulta.`;
  } else {
    pos = Math.max(10, totalSymptoms * 12);
    triageBanner.className = 'triage-banner level-green';
    triageStatusText.innerHTML = `🟢 <strong>CONTROLE ADEQUADO:</strong> Sintomas isolados. Continue com a rotina de cuidados e siga prescrições médicas.`;
  }
  gradientIndicator.style.left = `${pos}%`;
}

resetBtn.addEventListener('click', () => {
  selectedSymptoms.clear(); selectedAlerts.clear();
  updateTriageEvaluator(); renderCards();
});

function getStepFields(stepNum) {
  const step = wizardSteps.find(s => parseInt(s.dataset.step, 10) === stepNum);
  return step ? Array.from(step.querySelectorAll('[required]')) : [];
}

function validateFields(fields) {
  for (const field of fields) {
    if (!field.value || !field.value.trim()) { field.classList.add('field-error'); field.focus(); return field; }
    field.classList.remove('field-error');
  }
  return null;
}

function showWizardError(msg) { wizardErrorMsg.textContent = msg; wizardErrorMsg.classList.remove('hidden'); }
function hideWizardError() { wizardErrorMsg.classList.add('hidden'); wizardErrorMsg.textContent = ''; }

function renderWizardStep() {
  wizardSteps.forEach(step => {
    step.classList.toggle('hidden', parseInt(step.dataset.step, 10) !== currentWizardStep);
  });
  if (wizardBackBtn) wizardBackBtn.classList.toggle('hidden', currentWizardStep === 1);
  if (wizardNextBtn) wizardNextBtn.classList.toggle('hidden', currentWizardStep === totalWizardSteps);
  if (wizardSubmitBtn) wizardSubmitBtn.classList.toggle('hidden', currentWizardStep !== totalWizardSteps);
  if (wizardProgressFill) wizardProgressFill.style.width = `${(currentWizardStep / totalWizardSteps) * 100}%`;
  if (wizardStepLabel) wizardStepLabel.textContent = `Passo ${currentWizardStep} de ${totalWizardSteps} — ${stepTitles[currentWizardStep]}`;
}

function goToStepContaining(field) {
  const step = field.closest('.wizard-step');
  if (step) { currentWizardStep = parseInt(step.dataset.step, 10); renderWizardStep(); field.focus(); }
}

if (wizardNextBtn) wizardNextBtn.addEventListener('click', () => {
  if (validateFields(getStepFields(currentWizardStep))) return showWizardError('Preencha os campos obrigatórios (*).');
  hideWizardError(); currentWizardStep++; renderWizardStep();
});

if (wizardBackBtn) wizardBackBtn.addEventListener('click', () => {
  hideWizardError(); currentWizardStep--; renderWizardStep();
});

function setPhoneField(el, value) {
  el.innerHTML = '';
  if (!value) { el.textContent = '—'; return; }
  const link = document.createElement('a');
  link.href = `tel:${value.replace(/[^0-9+]/g, '')}`;
  link.textContent = value;
  el.appendChild(link);
}

carteirinhaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const campoInvalido = validateFields(Array.from(carteirinhaForm.querySelectorAll('[required]')));
  if (campoInvalido) { goToStepContaining(campoInvalido); return showWizardError('Preencha todos os campos obrigatórios (*).'); }
  hideWizardError();

  document.getElementById('card-val-nome').textContent = document.getElementById('paciente-nome').value;
  document.getElementById('card-val-nasc').textContent = document.getElementById('paciente-nascimento').value.split('-').reverse().join('/');
  document.getElementById('card-val-doc').textContent = document.getElementById('paciente-documento').value;
  document.getElementById('card-val-endereco').textContent = document.getElementById('paciente-endereco').value || 'Não informado';
  document.getElementById('card-val-diag').textContent = document.getElementById('diagnostico-principal').value;
  document.getElementById('card-val-cid').textContent = document.getElementById('codigo-cid').value || 'Não informado';
  document.getElementById('card-val-sintomas').textContent = document.getElementById('sintomas-predominantes').value;
  document.getElementById('card-val-alergias').textContent = document.getElementById('alergias-restricoes').value || 'Nenhuma declarada';
  document.getElementById('card-val-meds').textContent = document.getElementById('medicamentos-continuos').value || 'Nenhum declarado';
  
  const cuidador = document.getElementById('cuidador-nome').value;
  const parentesco = document.getElementById('cuidador-parentesco').value;
  document.getElementById('card-val-cuidador').textContent = parentesco ? `${cuidador} (${parentesco})` : cuidador;
  
  setPhoneField(document.getElementById('card-val-fone'), document.getElementById('telefone-emergencia-1').value);
  setPhoneField(document.getElementById('card-val-fone2'), document.getElementById('telefone-emergencia-2').value);
  
  const medico = document.getElementById('medico-assistente').value || 'Não informado';
  const crm = document.getElementById('medico-crm').value;
  document.getElementById('card-val-medico').textContent = crm ? `${medico} — CRM ${crm}` : medico;
  document.getElementById('card-val-unidade').textContent = document.getElementById('unidade-saude').value || 'Não informada';

  previewArea.classList.remove('hidden');
  previewArea.scrollIntoView({ behavior: 'smooth' });
});

btnEdit.addEventListener('click', () => carteirinhaForm.scrollIntoView({ behavior: 'smooth' }));
btnPrint.addEventListener('click', () => window.print());

// =====================================================================
// CORREÇÃO: SOLUÇÃO ROBUSTA PARA PDF NO CELULAR (SEM DEPENDÊNCIAS EXT.)
// =====================================================================
if (pdfFileInput) {
  pdfFileInput.addEventListener('change', (event) => {
    currentPdfFile = event.target.files[0];
    if (!currentPdfFile) return;
    
    if (currentPdfFile.type !== 'application/pdf') {
      alert('Por favor, selecione um arquivo válido no formato PDF.');
      pdfFileInput.value = '';
      return;
    }
    
    if (currentPdfBlobUrl) URL.revokeObjectURL(currentPdfBlobUrl);
    
    currentPdfBlobUrl = URL.createObjectURL(currentPdfFile);
    
    // Tenta renderizar no iframe (funciona no PC, ocultado via CSS no celular)
    pdfFrame.src = currentPdfBlobUrl;
    pdfViewerSection.classList.remove('hidden');
    pdfViewerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Botão que faz o download ou abre nativamente no celular
if (btnFullscreenPdf) {
  btnFullscreenPdf.addEventListener('click', (e) => {
    e.preventDefault();
    if (!currentPdfBlobUrl) return;

    // Cria um link temporário para forçar o download/abertura nativa
    const a = document.createElement('a');
    a.href = currentPdfBlobUrl;
    a.download = currentPdfFile ? currentPdfFile.name : 'meu-laudo.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}

if (btnClosePdf) {
  btnClosePdf.addEventListener('click', () => {
    pdfFrame.src = '';
    if (currentPdfBlobUrl) {
      URL.revokeObjectURL(currentPdfBlobUrl);
      currentPdfBlobUrl = null;
      currentPdfFile = null;
    }
    pdfViewerSection.classList.add('hidden');
    pdfFileInput.value = '';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderCards();
  renderWizardStep();
});
