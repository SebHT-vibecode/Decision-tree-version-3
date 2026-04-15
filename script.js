const app = document.getElementById('app');

const TA_OPTIONS = [
  { value: 'Obesity', label: 'Obesity', description: 'Weight-management therapies and metabolic support.' },
  { value: 'Diabetes', label: 'Diabetes', description: 'Glycemic and metabolic control solutions.' },
  { value: 'Cardiometabolic', label: 'Cardiometabolic', description: 'Heart and metabolic risk management.' },
  { value: 'Rare Diseases', label: 'Rare Diseases', description: 'Specialized disorders with limited evidence options.' }
];

const EVIDENCE_OPTIONS = {
  Obesity: [
    'Amount & Quality of Weight loss',
    'Energy Expenditure',
    'Sleep Quality',
    'Mental Health'
  ],
  Diabetes: [
    'Glycemic control',
    'Mental Health',
    'Cardiac health',
    'Autonomic neuropathy'
  ],
  Cardiometabolic: [
    'Cardiac health',
    'Mental Health'
  ],
  'Rare Diseases': []
};

const ALL_EVIDENCE_TYPES = [
  'Amount & Quality of Weight loss',
  'Energy Expenditure',
  'Sleep Quality',
  'Mental Health',
  'Glycemic control',
  'Cardiac health',
  'Autonomic neuropathy'
];

const USE_CASES = [
  'Label enabling / Regulatory',
  'Scientific Communication',
  'Marketing & on-market claims',
  'Exploratory (e.g. MoA understanding)'
];

const BENEFIT_OPTIONS = [
  'Speed: Shorter CTs',
  'Evidence: Richer data collection',
  'Cost savings: Cheaper CT operations',
  'Recruitment: Smaller sample size'
];

const MEASUREMENT_DATA = {
  'Mental Health': [
    {
      name: 'Patient Reported Outcome surveys',
      description: 'Validated survey instruments for mood, stress, sleep, and wellbeing. Often deployed electronically alongside wearable data.',
      cost: 'Moderate',
      rct: 'Yes • PROMIS / PHQ-9 in diabetes and obesity trials',
      data: 'Patient reported mood, stress, sleep quality, symptom burden',
      difficulty: 'Low',
      managed: 'Novo managed / CRO managed',
      experience: 'High (widely used in NN trials)'
    }
  ],
  'Glycemic control': [
    {
      name: 'Continuous Glucose Monitor (CGM)',
      description: 'Real-time glucose tracking used in diabetes trials to demonstrate glycemic improvements and variability reduction.',
      cost: 'High per unit',
      rct: 'Yes • Numerous diabetes RCTs',
      data: 'Glucose, time-in-range, hyper/hypoglycemia events',
      difficulty: 'Medium',
      managed: 'CRO managed / Site managed',
      experience: 'High (strong RCT experience)'
    }
  ],
  'Autonomic neuropathy': [
    {
      name: 'HRV wearable assessment',
      description: 'Heart rate variability analysis to capture autonomic function and early neuropathic changes in diabetes studies.',
      cost: 'Moderate',
      rct: 'Yes • Heart rate variability research studies',
      data: 'HRV, sympathetic/parasympathetic balance, stress metrics',
      difficulty: 'Medium',
      managed: 'Novo managed / CRO managed',
      experience: 'Medium (data experience present)'
    }
  ],
  'Sleep Quality': [
    {
      name: 'Oura Ring',
      description: 'A ring-based wearable capturing sleep staging, readiness, and recovery metrics.',
      cost: 'Moderate',
      rct: 'Yes • Sleep and weight management studies',
      data: 'Sleep duration, sleep stages, latency, efficiency',
      difficulty: 'Low',
      managed: 'CRO managed',
      experience: 'Medium'
    },
    {
      name: 'ScanWatch (Withings)',
      description: 'A hybrid smartwatch that tracks sleep along with heart-rate and activity data for cardiometabolic research.',
      cost: 'Moderate',
      rct: 'Yes • Consumer wearable studies',
      data: 'Sleep score, restlessness, heart rate, activity',
      difficulty: 'Low',
      managed: 'Novo managed / CRO managed',
      experience: 'Medium'
    },
    {
      name: 'EmbracePLUS (Empatica)',
      description: 'A medical-grade band with continuous physiological monitoring for sleep and seizure-related applications.',
      cost: 'High',
      rct: 'Yes • Sleep and neurological research',
      data: 'Sleep, HRV, movement, electrodermal activity',
      difficulty: 'Medium',
      managed: 'CRO managed',
      experience: 'Low'
    },
    {
      name: 'CenterPoint Insight Watch (CPIW)',
      description: 'ActiGraph-based wearable designed for objective sleep-wake analytics in clinical trials.',
      cost: 'Medium',
      rct: 'Yes • Actigraphy and sleep research',
      data: 'Sleep/wake cycles, motion, activity intensity',
      difficulty: 'Medium',
      managed: 'Site managed / CRO managed',
      experience: 'Medium'
    },
    {
      name: 'GT9X Link (ActiGraph)',
      description: 'A research-grade accelerometer that supports detailed sleep and activity measurement in clinical settings.',
      cost: 'Medium',
      rct: 'Yes • Actigraphy in sleep and activity trials',
      data: 'Sleep patterns, step counts, movement intensity',
      difficulty: 'Medium',
      managed: 'Site managed',
      experience: 'High'
    },
    {
      name: 'WatchPat 300 (Itamar Medical)',
      description: 'A wrist-worn sleep monitor commonly used for at-home sleep quality and respiratory disturbance analysis.',
      cost: 'High',
      rct: 'Yes • Sleep-disordered breathing trials',
      data: 'Sleep stages, apnea events, oximetry',
      difficulty: 'Medium',
      managed: 'CRO managed',
      experience: 'Medium'
    }
  ],
  'Cardiac health': [
    {
      name: 'Vagus (Medicus Engineering)',
      description: 'A wearable device focused on cardiovascular signals to assess heart health, HR, and autonomic balance.',
      cost: 'High',
      rct: 'Yes • Cardiac monitoring studies',
      data: 'HR, HRV, rhythm metrics, stress response',
      difficulty: 'Medium',
      managed: 'Novo managed / CRO managed',
      experience: 'Medium'
    },
    {
      name: 'StrivePD Platform (Rune Labs)',
      description: 'A digital health platform that combines sensor data with analytics to monitor cardiovascular performance and clinical outcomes.',
      cost: 'High',
      rct: 'Yes • Real-world cardiac research',
      data: 'HR, activity, symptom burden, trend analytics',
      difficulty: 'Medium',
      managed: 'Novo managed / CRO managed',
      experience: 'Medium'
    }
  ],
  'Energy Expenditure': [
    {
      name: 'Doubly labelled water',
      description: 'The gold standard for measuring total energy expenditure in free-living conditions.',
      cost: 'Very high',
      rct: 'Yes • Gold standard metabolic trials',
      data: 'Total energy expenditure, substrate oxidation estimates',
      difficulty: 'High',
      managed: 'CRO managed',
      experience: 'High'
    },
    {
      name: 'Indirect calorimetry (Chamber)',
      description: 'A controlled chamber measurement with highly accurate energy expenditure and metabolic rate data.',
      cost: 'Very high',
      rct: 'Yes • Metabolic research studies',
      data: 'Resting and activity energy expenditure, VO2, VCO2',
      difficulty: 'High',
      managed: 'Site managed',
      experience: 'High'
    },
    {
      name: 'Indirect calorimetry (Mask)',
      description: 'A portable mask system for measuring energy expenditure during activity and resting conditions.',
      cost: 'High',
      rct: 'Yes • Exercise physiology and metabolic trials',
      data: 'VO2, VCO2, energy expenditure, respiratory exchange ratio',
      difficulty: 'High',
      managed: 'Site managed',
      experience: 'Medium'
    }
  ]
};

const WEIGHT_LOSS_ENDPOINTS = [
  {
    value: 'Weight (at home)',
    label: 'Weight (at home)',
    cards: [
      {
        name: 'Body Smart (Withings)',
        description: 'A connected scale that captures weight, BMI and body composition metrics from home settings.',
        cost: 'Moderate',
        rct: 'Yes • Weight management RCTs',
        data: 'Body weight, BMI, body composition',
        difficulty: 'Low',
        managed: 'Site managed / CRO managed',
        experience: 'High'
      },
      {
        name: 'Connected scales',
        description: 'General connected scale solutions for frequent weight tracking and telemetric data capture.',
        cost: 'Moderate',
        rct: 'Yes • Many obesity and cardiometabolic studies',
        data: 'Weight, trends, home monitoring adherence',
        difficulty: 'Low',
        managed: 'Site managed / CRO managed',
        experience: 'High'
      }
    ]
  },
  {
    value: 'Body Composition',
    label: 'Body Composition',
    cards: [
      {
        name: 'BodyPro 2 (Withings)',
        description: 'A body composition scale that measures fat mass, muscle mass, and hydration metrics.',
        cost: 'Moderate',
        rct: 'Yes • Body composition trials',
        data: 'Fat mass, fat-free mass, hydration',
        difficulty: 'Low',
        managed: 'Site managed / CRO managed',
        experience: 'Medium'
      },
      {
        name: 'Body Smart (Withings)',
        description: 'A home scale with advanced composition measurements and telemetric upload.',
        cost: 'Moderate',
        rct: 'Yes • Weight and composition studies',
        data: 'Weight, body composition, BMI',
        difficulty: 'Low',
        managed: 'Site managed / CRO managed',
        experience: 'High'
      }
    ]
  },
  {
    value: 'Waist circumference',
    label: 'Waist circumference',
    cards: [
      {
        name: 'StrivePD Platform (Rune Labs)',
        description: 'Digital platform optimized for anthropometric and patient-reported measures in metabolic research.',
        cost: 'High',
        rct: 'Yes • Digital outcome collection studies',
        data: 'Waist circumference, symptom reporting, trend analytics',
        difficulty: 'Medium',
        managed: 'Novo managed / CRO managed',
        experience: 'Medium'
      }
    ]
  }
];

const HELP_CONTENT = {
  header: 'Not sure? Let us help you choose.',
  message: 'If you need support selecting the right evidence type, consider the main clinical objective and how it will be used. Below are helpful options to start from your Therapeutic Area.',
  suggestions: [
    'Obesity: Weight loss endpoints, energy, sleep and wellbeing',
    'Diabetes: Glycemic control, mental health, cardiac outcomes and autonomic function',
    'Cardiometabolic: Cardiac health and mental wellbeing',
    'All: exploratory insights can use wearable and survey-based measures'
  ]
};

let state = {
  step: 'ta',
  ta: null,
  evidence: null,
  useCase: null,
  endpoint: null,
  benefit: null,
  currentTab: 0
};

function render() {
  app.innerHTML = '';
  switch (state.step) {
    case 'ta':
      renderTASelection();
      break;
    case 'evidence':
      renderEvidenceSelection();
      break;
    case 'useCase':
      renderUseCaseSelection();
      break;
    case 'weightEndpoint':
      renderWeightEndpointSelection();
      break;
    case 'benefit':
      renderBenefitSelection();
      break;
    case 'summary':
      renderSummary();
      break;
    case 'help':
      renderHelp();
      break;
    case 'rareEnd':
      renderRareDiseaseEnd();
      break;
    default:
      renderTASelection();
  }
}

function createOptionButton(text, hint) {
  const button = document.createElement('button');
  button.className = 'option-button';
  button.innerHTML = `<strong>${text}</strong>${hint ? `<span>${hint}</span>` : ''}`;
  return button;
}

function renderCard({ title, content }) {
  const card = document.createElement('section');
  card.className = 'card';
  card.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
  return card;
}

function renderTASelection() {
  app.appendChild(renderCard({ title: 'What is your core Therapeutic Area?', content: 'Choose the area that best fits your study objective.' }));
  const card = document.createElement('section');
  card.className = 'card';
  const options = document.createElement('div');
  options.className = 'options-grid';

  TA_OPTIONS.forEach(option => {
    const button = createOptionButton(option.label, option.description);
    button.addEventListener('click', () => {
      state.ta = option.value;
      state.step = option.value === 'Rare Diseases' ? 'rareEnd' : 'evidence';
      render();
    });
    options.appendChild(button);
  });

  card.appendChild(options);
  app.appendChild(card);
}

function renderEvidenceSelection() {
  const evidenceList = EVIDENCE_OPTIONS[state.ta] || [];
  app.appendChild(renderCard({ title: `Therapeutic Area: ${state.ta}`, content: `Select the evidence type you want to show improvements in.` }));

  const card = document.createElement('section');
  card.className = 'card';
  card.innerHTML = `<h2>What type of evidence do you want to show improvements in?</h2>`;
  const options = document.createElement('div');
  options.className = 'options-grid';

  evidenceList.forEach(value => {
    const button = createOptionButton(value, 'Tap to continue');
    button.addEventListener('click', () => {
      state.evidence = value;
      if (value === 'Amount & Quality of Weight loss') {
        state.step = 'weightEndpoint';
      } else {
        state.step = 'useCase';
      }
      render();
    });
    options.appendChild(button);
  });

  const unsureButton = createOptionButton('I am not sure, help me choose', 'Receive guidance on evidence selection.');
  unsureButton.addEventListener('click', () => {
    state.step = 'help';
    render();
  });
  options.appendChild(unsureButton);

  card.appendChild(options);
  card.appendChild(renderSeeOtherEvidence());
  app.appendChild(card);
  app.appendChild(renderActionRow());
}

function renderSeeOtherEvidence() {
  const panel = document.createElement('div');
  panel.className = 'panel-note';
  const button = document.createElement('button');
  button.className = 'show-more';
  button.textContent = 'See other evidence types';
  const list = document.createElement('div');
  list.className = 'additional-list';
  list.style.display = 'none';

  button.addEventListener('click', () => {
    list.style.display = list.style.display === 'none' ? 'grid' : 'none';
    button.textContent = list.style.display === 'none' ? 'See other evidence types' : 'Hide other evidence types';
  });

  panel.innerHTML = `<strong>Other evidence types</strong><p>Explore evidence types relevant across therapeutic areas.</p>`;
  panel.appendChild(button);

  ALL_EVIDENCE_TYPES.filter(type => !(EVIDENCE_OPTIONS[state.ta] || []).includes(type)).forEach(type => {
    const card = document.createElement('div');
    card.className = 'additional-card';
    card.innerHTML = `<h4>${type}</h4><p class="small-meta">Common evidence type from other areas.</p>`;
    list.appendChild(card);
  });

  panel.appendChild(list);
  return panel;
}

function renderUseCaseSelection() {
  app.appendChild(renderCard({ title: `Evidence: ${state.evidence}`, content: 'Choose how you want to use the evidence in your program.' }));

  const card = document.createElement('section');
  card.className = 'card';
  const options = document.createElement('div');
  options.className = 'options-grid';

  USE_CASES.forEach(value => {
    const button = createOptionButton(value, 'Tap to continue');
    button.addEventListener('click', () => {
      state.useCase = value;
      state.step = 'benefit';
      state.currentTab = 0;
      render();
    });
    options.appendChild(button);
  });

  const unsureButton = createOptionButton('I am not sure, help me choose', 'Get support selecting the right use case.');
  unsureButton.addEventListener('click', () => {
    state.step = 'help';
    render();
  });
  options.appendChild(unsureButton);

  card.appendChild(options);
  app.appendChild(card);
  app.appendChild(renderActionRow());
}

function renderBenefitSelection() {
  app.appendChild(renderCard({ title: `Use Case: ${state.useCase}`, content: 'What benefit are you most interested in achieveing with a Digital Health Technology?' }));

  const card = document.createElement('section');
  card.className = 'card';
  const options = document.createElement('div');
  options.className = 'options-grid';

  BENEFIT_OPTIONS.forEach(value => {
    const button = createOptionButton(value, 'Tap to see device recommendations');
    button.addEventListener('click', () => {
      state.benefit = value;
      state.step = 'summary';
      state.currentTab = 0;
      render();
    });
    options.appendChild(button);
  });

  card.appendChild(options);
  app.appendChild(card);
  app.appendChild(renderActionRow());
}

function renderWeightEndpointSelection() {
  app.appendChild(renderCard({ title: 'Weight loss endpoint', content: 'Choose the primary endpoint you want to measure.' }));
  const card = document.createElement('section');
  card.className = 'card';
  const options = document.createElement('div');
  options.className = 'options-grid';

  WEIGHT_LOSS_ENDPOINTS.forEach(endpoint => {
    const button = createOptionButton(endpoint.label, 'Tap to see device recommendations');
    button.addEventListener('click', () => {
      state.endpoint = endpoint.value;
      state.step = 'useCase';
      state.currentTab = 0;
      render();
    });
    options.appendChild(button);
  });

  const unsureButton = createOptionButton('I am not sure, help me choose', 'Support for endpoint selection.');
  unsureButton.addEventListener('click', () => {
    state.step = 'help';
    render();
  });
  options.appendChild(unsureButton);

  card.appendChild(options);
  app.appendChild(card);
  app.appendChild(renderActionRow());
}

function renderSummary() {
  const cards = getSummaryCards();
  if (!cards.length) {
    app.appendChild(renderCard({ title: 'No measurement options found', content: 'We could not locate a matching device set for this pathway. Please try another choice.' }));
    app.appendChild(renderActionRow());
    return;
  }

  app.appendChild(renderCard({ title: 'Measurement recommendations', content: `Based on your pathway, these options are the best fit for ${state.evidence || state.endpoint}.` }));

  const card = document.createElement('section');
  card.className = 'card summary-panel';
  const tabList = document.createElement('div');
  tabList.className = 'tab-list';

  cards.forEach((item, index) => {
    const tab = document.createElement('button');
    tab.className = `tab-button ${index === state.currentTab ? 'active' : ''}`;
    tab.textContent = item.name;
    tab.addEventListener('click', () => {
      state.currentTab = index;
      render();
    });
    tabList.appendChild(tab);
  });

  const panel = document.createElement('div');
  panel.className = 'tab-panel';
  const active = cards[state.currentTab];
  panel.innerHTML = `
    <h3>${active.name}</h3>
    <p>${active.description}</p>
  `;

  const details = document.createElement('div');
  details.className = 'detail-list';
  details.innerHTML = `
    <div class="detail-item"><strong>Typical cost per unit</strong><span>${active.cost}</span></div>
    <div class="detail-item"><strong>Used in RCTs before</strong><span>${active.rct}</span></div>
    <div class="detail-item"><strong>Data that can be measured</strong><span>${active.data}</span></div>
    <div class="detail-item"><strong>Difficulty to implement</strong><span>${active.difficulty}</span></div>
    <div class="detail-item"><strong>In / Outsourced</strong><span>${active.managed}</span></div>
    <div class="detail-item"><strong>Novo experience</strong><span>${active.experience}</span></div>
  `;

  panel.appendChild(details);
  card.appendChild(tabList);
  card.appendChild(panel);
  app.appendChild(card);
  app.appendChild(renderActionRow());
}

function getSummaryCards() {
  if (state.evidence === 'Amount & Quality of Weight loss' && state.endpoint) {
    const endpoint = WEIGHT_LOSS_ENDPOINTS.find(item => item.value === state.endpoint);
    return endpoint ? endpoint.cards : [];
  }
  return MEASUREMENT_DATA[state.evidence] || [];
}

function renderHelp() {
  const card = document.createElement('section');
  card.className = 'card';
  card.innerHTML = `
    <h2>${HELP_CONTENT.header}</h2>
    <p>${HELP_CONTENT.message}</p>
    <div class="detail-list">
      ${HELP_CONTENT.suggestions.map(item => `<div class="detail-item"><span>• ${item}</span></div>`).join('')}
    </div>
  `;
  app.appendChild(card);
  app.appendChild(renderActionRow('Back to start', () => {
    resetState();
    render();
  }));
}

function renderRareDiseaseEnd() {
  app.appendChild(renderCard({ title: 'Rare Disease', content: 'This pathway finishes here for Rare Diseases. Evidence options are not available yet, but your area is noted for future expansion.' }));
  app.appendChild(renderCard({ title: 'Next step', content: 'Please contact your evidence team for a tailored plan or return to choose a different Therapeutic Area.' }));
  app.appendChild(renderActionRow());
}

function renderActionRow(primaryLabel = 'Start over', primaryAction) {
  const controls = document.createElement('div');
  controls.className = 'actions';
  const startOver = document.createElement('button');
  startOver.className = 'action-pill';
  startOver.textContent = 'Start over';
  startOver.addEventListener('click', () => {
    resetState();
    render();
  });

  controls.appendChild(startOver);

  if (primaryAction) {
    const primary = document.createElement('button');
    primary.className = 'action-pill';
    primary.textContent = primaryLabel;
    primary.addEventListener('click', primaryAction);
    controls.appendChild(primary);
  }

  return controls;
}

function resetState() {
  state = { step: 'ta', ta: null, evidence: null, useCase: null, endpoint: null, benefit: null, currentTab: 0 };
}

render();
