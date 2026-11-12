// SSC CHSL Tier 1 - 28-Day Preparation Hub & Todo Tracker
// Data and Logic

const SCHEDULE_SLOTS = [
  { id: 's1', start: '09:00', end: '10:00', label: '9:00–10:00 AM', subject: 'maths', title: 'Maths – Learn concepts and formulas', type: 'study' },
  { id: 's2', start: '10:00', end: '10:45', label: '10:00–10:45 AM', subject: 'maths', title: 'Maths – Practice questions', type: 'practice' },
  { id: 's3', start: '10:45', end: '11:00', label: '10:45–11:00 AM', subject: 'break', title: 'Hydration & Stretch Break', type: 'break' },
  { id: 's4', start: '11:00', end: '12:00', label: '11:00 AM–12:00 PM', subject: 'reasoning', title: 'Reasoning – Learn concepts', type: 'study' },
  { id: 's5', start: '12:00', end: '13:00', label: '12:00–1:00 PM', subject: 'reasoning', title: 'Reasoning – Practice questions', type: 'practice' },
  { id: 's6', start: '13:00', end: '14:00', label: '1:00–2:00 PM', subject: 'break', title: 'Lunch Break & Relaxation', type: 'break' },
  { id: 's7', start: '14:00', end: '15:00', label: '2:00–3:00 PM', subject: 'english', title: 'English – Grammar and vocabulary', type: 'study' },
  { id: 's8', start: '15:00', end: '15:45', label: '3:00–3:45 PM', subject: 'english', title: 'English – Practice questions', type: 'practice' },
  { id: 's9', start: '15:45', end: '16:00', label: '3:45–4:00 PM', subject: 'break', title: 'Short Refreshment Break', type: 'break' },
  { id: 's10', start: '16:00', end: '17:00', label: '4:00–5:00 PM', subject: 'gk', title: 'GK – Static GK and general studies', type: 'study' },
  { id: 's11', start: '17:00', end: '17:45', label: '5:00–5:45 PM', subject: 'gk', title: 'Current Affairs & General Science', type: 'study' },
  { id: 's12', start: '17:45', end: '18:15', label: '5:45–6:15 PM', subject: 'break', title: 'Evening Walk / Break', type: 'break' },
  { id: 's13', start: '18:15', end: '19:00', label: '6:15–7:00 PM', subject: 'maths', title: 'Maths and Reasoning PYQs', type: 'practice' },
  { id: 's14', start: '19:00', end: '20:00', label: '7:00–8:00 PM', subject: 'english', title: 'English and GK practice', type: 'practice' },
  { id: 's15', start: '20:00', end: '20:15', label: '8:00–8:15 PM', subject: 'break', title: 'Dinner / Rest Break', type: 'break' },
  { id: 's16', start: '20:15', end: '21:00', label: '8:15–9:00 PM', subject: 'test', title: 'Revision and Daily Mock Test', type: 'test' }
];

const CURRICULUM_DAYS = [
  // Week 1: Build your basics (Days 1–7)
  {
    day: 1,
    week: 1,
    weekTitle: 'Week 1 – Build Your Basics',
    weekGoal: 'Understand the fundamentals of all four subjects',
    maths: 'Number System – whole numbers, decimals, fractions',
    reasoning: 'Semantic Analogy',
    english: 'Parts of Speech',
    gk: 'Ancient Indian History'
  },
  {
    day: 2,
    week: 1,
    weekTitle: 'Week 1 – Build Your Basics',
    weekGoal: 'Understand the fundamentals of all four subjects',
    maths: 'Number System – relationship between numbers',
    reasoning: 'Figural Analogy',
    english: 'Nouns and Pronouns',
    gk: 'Indus Valley Civilization'
  },
  {
    day: 3,
    week: 1,
    weekTitle: 'Week 1 – Build Your Basics',
    weekGoal: 'Understand the fundamentals of all four subjects',
    maths: 'Percentage – basics and formulas',
    reasoning: 'Semantic Classification',
    english: 'Verbs',
    gk: 'Vedic Period'
  },
  {
    day: 4,
    week: 1,
    weekTitle: 'Week 1 – Build Your Basics',
    weekGoal: 'Understand the fundamentals of all four subjects',
    maths: 'Percentage – increase and decrease',
    reasoning: 'Number Series',
    english: 'Tenses',
    gk: 'Buddhism and Jainism'
  },
  {
    day: 5,
    week: 1,
    weekTitle: 'Week 1 – Build Your Basics',
    weekGoal: 'Understand the fundamentals of all four subjects',
    maths: 'Ratio and Proportion',
    reasoning: 'Alphabet and Semantic Series',
    english: 'Articles',
    gk: 'Medieval Indian History'
  },
  {
    day: 6,
    week: 1,
    weekTitle: 'Week 1 – Build Your Basics',
    weekGoal: 'Understand the fundamentals of all four subjects',
    maths: 'Average and Square Roots',
    reasoning: 'Figural Series',
    english: 'Prepositions',
    gk: 'Mughal Empire'
  },
  {
    day: 7,
    week: 1,
    weekTitle: 'Week 1 – Build Your Basics (Revision Day)',
    weekGoal: 'Revise all Week 1 concepts and assess understanding',
    maths: 'Revise Number System, Percentage, Ratio and Average',
    reasoning: 'Revise Analogy, Classification and Series',
    english: 'Grammar revision and test',
    gk: 'History revision and test'
  },

  // Week 2 – Arithmetic and important topics (Days 8–14)
  {
    day: 8,
    week: 2,
    weekTitle: 'Week 2 – Arithmetic & High-Weightage Topics',
    weekGoal: 'Complete major arithmetic topics and strengthen grammar & reasoning',
    maths: 'Profit and Loss',
    reasoning: 'Coding and Decoding',
    english: 'Spot the Error',
    gk: 'Modern Indian History'
  },
  {
    day: 9,
    week: 2,
    weekTitle: 'Week 2 – Arithmetic & High-Weightage Topics',
    weekGoal: 'Complete major arithmetic topics and strengthen grammar & reasoning',
    maths: 'Discount',
    reasoning: 'Venn Diagrams',
    english: 'Fill in the Blanks',
    gk: 'Indian National Movement'
  },
  {
    day: 10,
    week: 2,
    weekTitle: 'Week 2 – Arithmetic & High-Weightage Topics',
    weekGoal: 'Complete major arithmetic topics and strengthen grammar & reasoning',
    maths: 'Simple Interest',
    reasoning: 'Symbolic Operations',
    english: 'Synonyms and Homonyms',
    gk: 'Indian Constitution'
  },
  {
    day: 11,
    week: 2,
    weekTitle: 'Week 2 – Arithmetic & High-Weightage Topics',
    weekGoal: 'Complete major arithmetic topics and strengthen grammar & reasoning',
    maths: 'Compound Interest',
    reasoning: 'Numerical Operations',
    english: 'Antonyms',
    gk: 'Fundamental Rights and Duties'
  },
  {
    day: 12,
    week: 2,
    weekTitle: 'Week 2 – Arithmetic & High-Weightage Topics',
    weekGoal: 'Complete major arithmetic topics and strengthen grammar & reasoning',
    maths: 'Partnership',
    reasoning: 'Word Building',
    english: 'Spellings and Misspelt Words',
    gk: 'Indian Geography'
  },
  {
    day: 13,
    week: 2,
    weekTitle: 'Week 2 – Arithmetic & High-Weightage Topics',
    weekGoal: 'Complete major arithmetic topics and strengthen grammar & reasoning',
    maths: 'Mixture and Alligation',
    reasoning: 'Trends and Drawing Inferences',
    english: 'Idioms and Phrases',
    gk: 'Indian Rivers, Mountains and Climate'
  },
  {
    day: 14,
    week: 2,
    weekTitle: 'Week 2 – Arithmetic (Revision & Test Day)',
    weekGoal: 'Consolidate arithmetic formulas, vocabulary, and polity',
    maths: 'Arithmetic revision and test',
    reasoning: 'Reasoning revision and test',
    english: 'Vocabulary test',
    gk: 'History, Polity and Geography revision'
  },

  // Week 3 – Complete the remaining syllabus (Days 15–21)
  {
    day: 15,
    week: 3,
    weekTitle: 'Week 3 – Advanced Topics & Comprehensive Syllabus',
    weekGoal: 'Cover algebra, geometry, mensuration, trigonometry and core science',
    maths: 'Time and Work',
    reasoning: 'Space Orientation',
    english: 'One Word Substitution',
    gk: 'Indian Economy'
  },
  {
    day: 16,
    week: 3,
    weekTitle: 'Week 3 – Advanced Topics & Comprehensive Syllabus',
    weekGoal: 'Cover algebra, geometry, mensuration, trigonometry and core science',
    maths: 'Time and Distance',
    reasoning: 'Embedded Figures',
    english: 'Sentence Improvement',
    gk: 'Economic Terms and Budget Basics'
  },
  {
    day: 17,
    week: 3,
    weekTitle: 'Week 3 – Advanced Topics & Comprehensive Syllabus',
    weekGoal: 'Cover algebra, geometry, mensuration, trigonometry and core science',
    maths: 'Algebra and Identities',
    reasoning: 'Punched Hole / Pattern Folding',
    english: 'Active and Passive Voice',
    gk: 'Physics – Basic Concepts'
  },
  {
    day: 18,
    week: 3,
    weekTitle: 'Week 3 – Advanced Topics & Comprehensive Syllabus',
    weekGoal: 'Cover algebra, geometry, mensuration, trigonometry and core science',
    maths: 'Graphs of Linear Equations',
    reasoning: 'Figural Pattern Completion',
    english: 'Direct and Indirect Speech',
    gk: 'Chemistry – Basic Concepts'
  },
  {
    day: 19,
    week: 3,
    weekTitle: 'Week 3 – Advanced Topics & Comprehensive Syllabus',
    weekGoal: 'Cover algebra, geometry, mensuration, trigonometry and core science',
    maths: 'Geometry – Triangles and Centres',
    reasoning: 'Figural Classification',
    english: 'Shuffling of Sentence Parts',
    gk: 'Biology – Human Body'
  },
  {
    day: 20,
    week: 3,
    weekTitle: 'Week 3 – Advanced Topics & Comprehensive Syllabus',
    weekGoal: 'Cover algebra, geometry, mensuration, trigonometry and core science',
    maths: 'Geometry – Circles, Chords and Tangents',
    reasoning: 'Critical Thinking and Problem Solving',
    english: 'Shuffling of Sentences in a Passage',
    gk: 'Biology – Plants and Animals'
  },
  {
    day: 21,
    week: 3,
    weekTitle: 'Week 3 – Advanced Topics (Revision Day)',
    weekGoal: 'Master 2D mensuration, social intelligence and review General Science',
    maths: 'Mensuration – 2D Figures',
    reasoning: 'Emotional and Social Intelligence',
    english: 'Cloze Passage',
    gk: 'General Science revision'
  },

  // Week 4 – Finish syllabus and mock tests (Days 22–28)
  {
    day: 22,
    week: 4,
    weekTitle: 'Week 4 – Full-Length Mocks & Revision Sprint',
    weekGoal: 'Improve speed & accuracy, solve PYQs, and take full Tier 1 mock tests',
    maths: 'Mensuration – 3D Figures',
    reasoning: 'Mixed Reasoning Practice',
    english: 'Reading Comprehension',
    gk: 'Indian Culture and Neighbouring Countries'
  },
  {
    day: 23,
    week: 4,
    weekTitle: 'Week 4 – Full-Length Mocks & Revision Sprint',
    weekGoal: 'Improve speed & accuracy, solve PYQs, and take full Tier 1 mock tests',
    maths: 'Trigonometry and Ratios',
    reasoning: 'Coding, Series and Venn Diagrams revision',
    english: 'Error Detection and Sentence Improvement',
    gk: 'General Policy and Government Schemes'
  },
  {
    day: 24,
    week: 4,
    weekTitle: 'Week 4 – Full-Length Mocks & Revision Sprint',
    weekGoal: 'Improve speed & accuracy, solve PYQs, and take full Tier 1 mock tests',
    maths: 'Heights and Distances, Standard Identities',
    reasoning: 'Figural and Symbolic Reasoning revision',
    english: 'Voice and Narration revision',
    gk: 'Scientific Research and Everyday Science'
  },
  {
    day: 25,
    week: 4,
    weekTitle: 'Week 4 – Full-Length Mocks & Revision Sprint',
    weekGoal: 'Improve speed & accuracy, solve PYQs, and take full Tier 1 mock tests',
    maths: 'Tables, Bar Graphs, Pie Charts, Histograms & Polygons',
    reasoning: 'Critical Thinking, Inference & Problem Solving',
    english: 'Cloze Test and Comprehension',
    gk: 'Current Affairs revision'
  },
  {
    day: 26,
    week: 4,
    weekTitle: 'Week 4 – Full-Length Mocks & Revision Sprint',
    weekGoal: 'Solve all Previous Year Questions (PYQs) across subjects',
    maths: 'Complete Maths PYQs',
    reasoning: 'Complete Reasoning PYQs',
    english: 'Complete English PYQs',
    gk: 'Static GK and Current Affairs revision'
  },
  {
    day: 27,
    week: 4,
    weekTitle: 'Week 4 – Sectional Mock Marathon',
    weekGoal: 'Sectional tests under strict exam conditions',
    maths: 'Maths sectional mock',
    reasoning: 'Reasoning sectional mock',
    english: 'English sectional mock',
    gk: 'GK sectional mock'
  },
  {
    day: 28,
    week: 4,
    weekTitle: 'Week 4 – Final Exam Simulation',
    weekGoal: 'Full 100-Question Mock Test with thorough error analysis',
    maths: 'Full Tier 1 mock test and analysis',
    reasoning: 'Weak-topic revision',
    english: 'English revision',
    gk: 'GK revision'
  }
];

const MOTIVATIONAL_QUOTES = [
  "Consistency is what transforms average into excellence. 28 days of focus can change your life.",
  "Every PYQ solved today brings you one step closer to your desired government post.",
  "Accuracy first, speed will naturally follow. Analyze every mistake carefully.",
  "Small daily disciplines repeated with consistency lead to monumental exam results.",
  "Trust the 9 AM to 9 PM routine. The syllabus is completely achievable step by step!",
  "A wrong answer analyzed is worth 10 easy questions answered correctly."
];

// App State Management
const STORAGE_KEY = 'ssc_chsl_tier1_prep_v1';

function getDefaultState() {
  const daysData = {};
  CURRICULUM_DAYS.forEach(d => {
    daysData[d.day] = {
      completed: false,
      slots: {},
      subjects: {
        maths: false,
        reasoning: false,
        english: false,
        gk: false
      },
      evening: {
        pyq: false,
        practice: false,
        test: false,
        testScore: ''
      },
      questions: {
        maths: 0,
        reasoning: 0,
        english: 0,
        gk: 0
      },
      notes: ''
    };
  });

  return {
    currentDay: 1,
    theme: 'dark',
    activeTab: 'today',
    weekFilter: 'all',
    days: daysData,
    mistakes: [],
    customNotes: ''
  };
}

let appState = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    const def = getDefaultState();
    // Merge defensively
    return {
      ...def,
      ...parsed,
      days: { ...def.days, ...(parsed.days || {}) },
      mistakes: parsed.mistakes || []
    };
  } catch (e) {
    console.error('Failed to load state from localStorage', e);
    return getDefaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    updateGlobalStats();
  } catch (e) {
    console.error('Failed to save state to localStorage', e);
  }
}

// Sound synthesized using Web Audio API for timer
let audioCtx = null;
function playBeep(freq = 600, duration = 0.25, type = 'sine') {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn('Audio play error', e);
  }
}

function playCompletionChime() {
  playBeep(523.25, 0.2); // C5
  setTimeout(() => playBeep(659.25, 0.2), 150); // E5
  setTimeout(() => playBeep(783.99, 0.4), 300); // G5
}

// Timer Variables
let timerInterval = null;
let timerSecondsLeft = 45 * 60;
let timerRunning = false;
let timerTotalSeconds = 45 * 60;

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  renderQuote();
  renderCurrentLiveSlot();
  renderDayView(appState.currentDay);
  renderAllDaysGrid();
  renderMistakesList();
  updateGlobalStats();

  // Interval for live clock & active slot highlight
  setInterval(renderCurrentLiveSlot, 30000);
});

// Setup Themes
function initTheme() {
  if (appState.theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    const toggle = document.getElementById('theme-toggle-btn');
    if (toggle) toggle.textContent = '🌙 Dark Mode';
  } else {
    document.documentElement.removeAttribute('data-theme');
    const toggle = document.getElementById('theme-toggle-btn');
    if (toggle) toggle.textContent = '☀️ Light Mode';
  }
}

function toggleTheme() {
  if (appState.theme === 'dark') {
    appState.theme = 'light';
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('theme-toggle-btn').textContent = '🌙 Dark Mode';
  } else {
    appState.theme = 'dark';
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('theme-toggle-btn').textContent = '☀️ Light Mode';
  }
  saveState();
}

// Event Listeners
function setupEventListeners() {
  // Navigation tabs
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.target.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // Theme toggle
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

  // Day Selector dropdown and arrows
  const daySelect = document.getElementById('day-select');
  if (daySelect) {
    daySelect.innerHTML = CURRICULUM_DAYS.map(d => `<option value="${d.day}">Day ${d.day}: ${d.maths.slice(0, 30)}...</option>`).join('');
    daySelect.value = appState.currentDay;
    daySelect.addEventListener('change', (e) => {
      setDay(parseInt(e.target.value, 10));
    });
  }

  document.getElementById('prev-day-btn').addEventListener('click', () => {
    if (appState.currentDay > 1) setDay(appState.currentDay - 1);
  });
  document.getElementById('next-day-btn').addEventListener('click', () => {
    if (appState.currentDay < 28) setDay(appState.currentDay + 1);
  });

  // Week filter buttons for 28-day view
  document.querySelectorAll('.week-filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.week-filter-pill').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const week = e.target.getAttribute('data-week');
      appState.weekFilter = week;
      renderAllDaysGrid();
    });
  });

  // Timer controls
  document.getElementById('timer-start-btn').addEventListener('click', toggleTimer);
  document.getElementById('timer-reset-btn').addEventListener('click', resetTimer);
  document.querySelectorAll('.timer-preset-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const mins = parseInt(e.target.getAttribute('data-mins'), 10);
      setTimerDuration(mins);
    });
  });

  // Mistake Log Form
  const mistakeForm = document.getElementById('add-mistake-form');
  if (mistakeForm) {
    mistakeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addMistakeEntry();
    });
  }

  // Mistake Filter
  document.getElementById('mistake-subject-filter').addEventListener('change', renderMistakesList);
  document.getElementById('mistake-reason-filter').addEventListener('change', renderMistakesList);

  // Backup & Restore
  document.getElementById('export-data-btn').addEventListener('click', exportData);
  document.getElementById('import-file-input').addEventListener('change', importData);
  document.getElementById('reset-all-btn').addEventListener('click', confirmResetAll);

  // Print checklist
  document.getElementById('print-plan-btn').addEventListener('click', () => {
    window.print();
  });
}

function switchTab(tabId) {
  appState.activeTab = tabId;
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === tabId));
  document.querySelectorAll('.tab-view').forEach(v => v.classList.toggle('active', v.id === `tab-${tabId}`));
}

function setDay(dayNum) {
  appState.currentDay = Math.max(1, Math.min(28, dayNum));
  const daySelect = document.getElementById('day-select');
  if (daySelect) daySelect.value = appState.currentDay;
  saveState();
  renderDayView(appState.currentDay);
  renderAllDaysGrid();
}

// Render Random Motivational Quote
function renderQuote() {
  const quoteEl = document.getElementById('daily-quote');
  if (quoteEl) {
    const q = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
    quoteEl.innerHTML = `💡 <em>"${q}"</em>`;
  }
}

// Live Current Time & Highlight Schedule Slot
function renderCurrentLiveSlot() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const clockEl = document.getElementById('live-clock-badge');
  if (clockEl) {
    clockEl.textContent = `🕒 Current Time: ${timeStr}`;
  }

  const currentMins = hours * 60 + minutes;
  let activeSlot = null;

  SCHEDULE_SLOTS.forEach(slot => {
    const [sH, sM] = slot.start.split(':').map(Number);
    const [eH, eM] = slot.end.split(':').map(Number);
    const startMins = sH * 60 + sM;
    const endMins = eH * 60 + eM;

    if (currentMins >= startMins && currentMins < endMins) {
      activeSlot = slot;
    }
  });

  const liveSlotEl = document.getElementById('current-live-slot-indicator');
  if (liveSlotEl) {
    if (activeSlot) {
      liveSlotEl.innerHTML = `
        <span class="pulse-dot"></span>
        <strong>Right Now (${activeSlot.label}):</strong> ${activeSlot.title}
        <button class="btn btn-sm btn-primary inline-timer-btn" onclick="startTimerForSlot('${activeSlot.label}')">⏱️ Focus</button>
      `;
      liveSlotEl.className = 'live-slot-banner active-session';
    } else if (currentMins < 9 * 60) {
      liveSlotEl.innerHTML = `☀️ Early morning prep window! Daily study kicks off promptly at 9:00 AM.`;
      liveSlotEl.className = 'live-slot-banner off-hours';
    } else {
      liveSlotEl.innerHTML = `🌙 Great work today! Day wrap-up completed. Review your error log and get 7–8 hours of solid sleep.`;
      liveSlotEl.className = 'live-slot-banner off-hours';
    }
  }

  // Highlight slot in slot list if on today view
  document.querySelectorAll('.slot-row').forEach(row => {
    const slotId = row.getAttribute('data-slot-id');
    if (activeSlot && activeSlot.id === slotId) {
      row.classList.add('is-current-slot');
    } else {
      row.classList.remove('is-current-slot');
    }
  });
}

// Render Single Day View
function renderDayView(dayNum) {
  const dayInfo = CURRICULUM_DAYS.find(d => d.day === dayNum);
  if (!dayInfo) return;

  const dayData = appState.days[dayNum] || getDefaultState().days[dayNum];

  // Header badges
  document.getElementById('current-day-heading').textContent = `Day ${dayNum} of 28`;
  document.getElementById('current-week-tag').textContent = `Week ${dayInfo.week}`;
  document.getElementById('current-week-title').textContent = dayInfo.weekTitle;
  document.getElementById('current-week-goal').textContent = `🎯 Goal: ${dayInfo.weekGoal}`;

  // Mark Whole Day Completed Checkbox
  const dayCompleteCheckbox = document.getElementById('mark-day-complete-checkbox');
  dayCompleteCheckbox.checked = dayData.completed;
  dayCompleteCheckbox.onchange = (e) => {
    dayData.completed = e.target.checked;
    if (e.target.checked) playCompletionChime();
    saveState();
    renderDayView(dayNum);
    renderAllDaysGrid();
  };

  // 4 Subjects Checklist & Topic display
  const subjectsContainer = document.getElementById('day-subjects-list');
  const subjectsMeta = [
    { key: 'maths', name: 'Quantitative Aptitude (Maths)', icon: '📐', topic: dayInfo.maths, time: '9:00–10:45 AM & 6:15 PM PYQs' },
    { key: 'reasoning', name: 'General Intelligence & Reasoning', icon: '🧠', topic: dayInfo.reasoning, time: '11:00 AM–1:00 PM' },
    { key: 'english', name: 'English Language', icon: '📖', topic: dayInfo.english, time: '2:00–3:45 PM & 7:00 PM' },
    { key: 'gk', name: 'General Awareness (GK & Science)', icon: '🌍', topic: dayInfo.gk, time: '4:00–5:45 PM' }
  ];

  subjectsContainer.innerHTML = subjectsMeta.map(sub => {
    const isChecked = dayData.subjects[sub.key] || false;
    return `
      <div class="subject-card ${isChecked ? 'completed' : ''}">
        <div class="subject-card-header">
          <div class="subject-title">
            <span class="subject-icon">${sub.icon}</span>
            <div>
              <h4>${sub.name}</h4>
              <span class="subject-time">${sub.time}</span>
            </div>
          </div>
          <label class="custom-checkbox">
            <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleSubjectCheck(${dayNum}, '${sub.key}', this.checked)">
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="subject-topic-box">
          <span class="topic-label">Today's Topic:</span>
          <p class="topic-text">${escapeHtml(sub.topic)}</p>
        </div>
        <div class="subject-card-footer">
          <button class="btn btn-outline btn-xs" onclick="quickStartTimer('${sub.name.split(' ')[0]}', 45)">⏱️ 45m Practice</button>
          <button class="btn btn-outline btn-xs" onclick="quickStartTimer('${sub.name.split(' ')[0]}', 60)">📚 60m Concepts</button>
        </div>
      </div>
    `;
  }).join('');

  // Daily Schedule Slots Checklist (9:00 AM to 9:00 PM)
  const slotsContainer = document.getElementById('daily-slots-checklist');
  slotsContainer.innerHTML = SCHEDULE_SLOTS.map(slot => {
    const isChecked = !!dayData.slots[slot.id];
    const isBreak = slot.type === 'break';
    return `
      <div class="slot-row ${isChecked ? 'checked' : ''} ${isBreak ? 'is-break' : ''}" data-slot-id="${slot.id}">
        <label class="custom-checkbox">
          <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleSlotCheck(${dayNum}, '${slot.id}', this.checked)">
          <span class="checkmark"></span>
        </label>
        <div class="slot-time-badge">${slot.label}</div>
        <div class="slot-details">
          <span class="slot-title">${escapeHtml(slot.title)}</span>
          <span class="slot-type-badge ${slot.subject}">${slot.subject.toUpperCase()}</span>
        </div>
        ${!isBreak ? `
          <button class="btn btn-ghost btn-xs" title="Start timer for this block" onclick="startTimerForSlot('${escapeHtml(slot.title)}')">⏱️ Focus</button>
        ` : '<span class="break-icon">☕ Relax</span>'}
      </div>
    `;
  }).join('');

  // Evening Practice & Daily Test
  const pyqBox = document.getElementById('check-pyq');
  pyqBox.checked = !!dayData.evening.pyq;
  pyqBox.onchange = (e) => { dayData.evening.pyq = e.target.checked; saveState(); };

  const practiceBox = document.getElementById('check-practice');
  practiceBox.checked = !!dayData.evening.practice;
  practiceBox.onchange = (e) => { dayData.evening.practice = e.target.checked; saveState(); };

  const testBox = document.getElementById('check-test');
  testBox.checked = !!dayData.evening.test;
  testBox.onchange = (e) => {
    dayData.evening.test = e.target.checked;
    if (e.target.checked) playCompletionChime();
    saveState();
  };

  const testScoreInput = document.getElementById('test-score-input');
  testScoreInput.value = dayData.evening.testScore || '';
  testScoreInput.onchange = (e) => {
    dayData.evening.testScore = e.target.value;
    saveState();
  };

  // Daily Question Targets
  renderQuestionCounters(dayNum, dayData);

  // Daily Notes
  const dayNotesInput = document.getElementById('day-quick-notes');
  dayNotesInput.value = dayData.notes || '';
  dayNotesInput.oninput = (e) => {
    dayData.notes = e.target.value;
    saveState();
  };

  // Pre-fill mistake log day
  const mistakeDayInput = document.getElementById('mistake-day');
  if (mistakeDayInput) mistakeDayInput.value = dayNum;

  renderCurrentLiveSlot();
}

function toggleSubjectCheck(dayNum, subjectKey, checked) {
  const dayData = appState.days[dayNum];
  if (!dayData) return;
  dayData.subjects[subjectKey] = checked;

  // If all 4 subjects and test checked, suggest completing day
  const allSubDone = Object.values(dayData.subjects).every(Boolean);
  if (allSubDone && !dayData.completed) {
    dayData.completed = true;
    playCompletionChime();
  }
  saveState();
  renderDayView(dayNum);
  renderAllDaysGrid();
}

function toggleSlotCheck(dayNum, slotId, checked) {
  const dayData = appState.days[dayNum];
  if (!dayData) return;
  dayData.slots[slotId] = checked;
  saveState();
  renderDayView(dayNum);
}

// Question Target Trackers
function renderQuestionCounters(dayNum, dayData) {
  const container = document.getElementById('question-targets-grid');
  const targetConfigs = [
    { key: 'maths', name: 'Maths Questions', target: 30, min: 25, icon: '📐' },
    { key: 'reasoning', name: 'Reasoning Questions', target: 30, min: 25, icon: '🧠' },
    { key: 'english', name: 'English Questions', target: 30, min: 25, icon: '📖' },
    { key: 'gk', name: 'GK Questions', target: 25, min: 20, icon: '🌍' }
  ];

  container.innerHTML = targetConfigs.map(cfg => {
    const val = dayData.questions[cfg.key] || 0;
    const pct = Math.min(100, Math.round((val / cfg.target) * 100));
    const isTargetMet = val >= cfg.min;

    return `
      <div class="target-card ${isTargetMet ? 'target-met' : ''}">
        <div class="target-card-top">
          <span class="target-icon">${cfg.icon}</span>
          <span class="target-name">${cfg.name}</span>
          <span class="target-badge">${cfg.min}–${cfg.target} Target</span>
        </div>
        <div class="target-counter-controls">
          <button class="btn btn-circle btn-sm" onclick="adjustQuestionCount(${dayNum}, '${cfg.key}', -5)">-5</button>
          <button class="btn btn-circle btn-sm" onclick="adjustQuestionCount(${dayNum}, '${cfg.key}', -1)">-1</button>
          <input type="number" class="question-number-input" value="${val}" min="0" max="200" onchange="setQuestionCountDirect(${dayNum}, '${cfg.key}', this.value)">
          <button class="btn btn-circle btn-sm" onclick="adjustQuestionCount(${dayNum}, '${cfg.key}', 1)">+1</button>
          <button class="btn btn-circle btn-sm" onclick="adjustQuestionCount(${dayNum}, '${cfg.key}', 5)">+5</button>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill ${isTargetMet ? 'complete' : ''}" style="width: ${pct}%"></div>
        </div>
        <div class="target-meta">
          <span>${val} of ${cfg.target} solved</span>
          <span>${isTargetMet ? '✅ Target Met!' : `${Math.max(0, cfg.min - val)} more to minimum`}</span>
        </div>
      </div>
    `;
  }).join('');
}

function adjustQuestionCount(dayNum, subjectKey, delta) {
  const dayData = appState.days[dayNum];
  if (!dayData) return;
  const current = dayData.questions[subjectKey] || 0;
  dayData.questions[subjectKey] = Math.max(0, current + delta);
  saveState();
  renderQuestionCounters(dayNum, dayData);
}

function setQuestionCountDirect(dayNum, subjectKey, val) {
  const dayData = appState.days[dayNum];
  if (!dayData) return;
  dayData.questions[subjectKey] = Math.max(0, parseInt(val, 10) || 0);
  saveState();
  renderQuestionCounters(dayNum, dayData);
}

// Render All 28 Days Master Grid View
function renderAllDaysGrid() {
  const gridContainer = document.getElementById('all-days-roadmap');
  if (!gridContainer) return;

  const filter = appState.weekFilter;
  let filteredDays = CURRICULUM_DAYS;
  if (filter !== 'all') {
    const weekNum = parseInt(filter, 10);
    filteredDays = CURRICULUM_DAYS.filter(d => d.week === weekNum);
  }

  gridContainer.innerHTML = filteredDays.map(dayInfo => {
    const dayData = appState.days[dayInfo.day] || getDefaultState().days[dayInfo.day];
    const isCompleted = dayData.completed;

    // Calculate completed subjects count
    const subjectsDone = Object.values(dayData.subjects).filter(Boolean).length;
    const totalQuestions = Object.values(dayData.questions).reduce((a, b) => a + b, 0);

    return `
      <div class="day-card-compact ${isCompleted ? 'is-completed' : ''} ${appState.currentDay === dayInfo.day ? 'is-active-day' : ''}">
        <div class="day-card-header">
          <div class="day-badge-wrap">
            <span class="day-number">Day ${dayInfo.day}</span>
            <span class="week-pill">Week ${dayInfo.week}</span>
          </div>
          <button class="btn btn-xs ${isCompleted ? 'btn-success' : 'btn-outline'}" onclick="quickToggleDay(${dayInfo.day})">
            ${isCompleted ? '✓ Completed' : 'Mark Done'}
          </button>
        </div>

        <div class="day-card-topics">
          <div class="topic-row"><span class="sub-tag maths">Maths</span> ${escapeHtml(dayInfo.maths)}</div>
          <div class="topic-row"><span class="sub-tag reasoning">Reasoning</span> ${escapeHtml(dayInfo.reasoning)}</div>
          <div class="topic-row"><span class="sub-tag english">English</span> ${escapeHtml(dayInfo.english)}</div>
          <div class="topic-row"><span class="sub-tag gk">GK</span> ${escapeHtml(dayInfo.gk)}</div>
        </div>

        <div class="day-card-footer">
          <div class="status-indicators">
            <span title="Subjects completed: ${subjectsDone}/4">📚 ${subjectsDone}/4</span>
            <span title="Questions solved: ${totalQuestions}">🎯 ${totalQuestions} Qs</span>
            ${dayData.evening.test ? '<span title="Daily Test Attempted">📝 Test ✓</span>' : ''}
          </div>
          <button class="btn btn-sm btn-primary" onclick="openDayDirect(${dayInfo.day})">Open Day →</button>
        </div>
      </div>
    `;
  }).join('');
}

function quickToggleDay(dayNum) {
  const dayData = appState.days[dayNum];
  if (!dayData) return;
  dayData.completed = !dayData.completed;
  if (dayData.completed) {
    // Also check all 4 subjects
    dayData.subjects.maths = true;
    dayData.subjects.reasoning = true;
    dayData.subjects.english = true;
    dayData.subjects.gk = true;
    dayData.evening.test = true;
    playCompletionChime();
  }
  saveState();
  renderAllDaysGrid();
  if (appState.currentDay === dayNum) renderDayView(dayNum);
}

function openDayDirect(dayNum) {
  setDay(dayNum);
  switchTab('today');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Global Stats & Progress Bar
function updateGlobalStats() {
  let completedDaysCount = 0;
  let totalQuestionsSolved = 0;
  let totalSubjectsDone = 0;

  CURRICULUM_DAYS.forEach(d => {
    const dayData = appState.days[d.day];
    if (dayData) {
      if (dayData.completed) completedDaysCount++;
      totalQuestionsSolved += Object.values(dayData.questions || {}).reduce((a, b) => a + b, 0);
      totalSubjectsDone += Object.values(dayData.subjects || {}).filter(Boolean).length;
    }
  });

  const percentComplete = Math.round((completedDaysCount / 28) * 100);

  // Update DOM badges
  const progressBadge = document.getElementById('overall-progress-pct');
  if (progressBadge) progressBadge.textContent = `${percentComplete}%`;

  const daysBadge = document.getElementById('days-completed-count');
  if (daysBadge) daysBadge.textContent = `${completedDaysCount}/28 Days`;

  const questionsBadge = document.getElementById('total-questions-count');
  if (questionsBadge) questionsBadge.textContent = `${totalQuestionsSolved} Qs Solved`;

  const topProgressBar = document.getElementById('global-progress-bar-fill');
  if (topProgressBar) topProgressBar.style.width = `${percentComplete}%`;
}

// Mistake Notebook / Error Analysis
function addMistakeEntry() {
  const day = parseInt(document.getElementById('mistake-day').value, 10) || appState.currentDay;
  const subject = document.getElementById('mistake-subject').value;
  const reason = document.getElementById('mistake-reason').value;
  const question = document.getElementById('mistake-question-text').value.trim();
  const correction = document.getElementById('mistake-correction-text').value.trim();

  if (!question) {
    alert('Please enter question details or error note.');
    return;
  }

  const newEntry = {
    id: 'm_' + Date.now(),
    day,
    subject,
    reason,
    question,
    correction,
    date: new Date().toLocaleDateString(),
    revised: false
  };

  appState.mistakes.unshift(newEntry);
  saveState();

  document.getElementById('mistake-question-text').value = '';
  document.getElementById('mistake-correction-text').value = '';

  renderMistakesList();
}

function renderMistakesList() {
  const container = document.getElementById('mistakes-entries-list');
  if (!container) return;

  const subjectFilter = document.getElementById('mistake-subject-filter').value;
  const reasonFilter = document.getElementById('mistake-reason-filter').value;

  let filtered = appState.mistakes;
  if (subjectFilter !== 'all') {
    filtered = filtered.filter(m => m.subject === subjectFilter);
  }
  if (reasonFilter !== 'all') {
    filtered = filtered.filter(m => m.reason === reasonFilter);
  }

  // Reason counter breakdown
  const stats = {
    concept: 0,
    calculation: 0,
    confusion: 0,
    guessing: 0
  };
  appState.mistakes.forEach(m => {
    if (stats[m.reason] !== undefined) stats[m.reason]++;
  });

  const reasonStatsEl = document.getElementById('mistake-reason-breakdown');
  if (reasonStatsEl) {
    reasonStatsEl.innerHTML = `
      <div class="reason-pill concept">Concept Gaps: ${stats.concept}</div>
      <div class="reason-pill calculation">Calculation Slips: ${stats.calculation}</div>
      <div class="reason-pill confusion">Confusion/Options: ${stats.confusion}</div>
      <div class="reason-pill guessing">Blind Guessing: ${stats.guessing}</div>
    `;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <p>🎯 No mistakes logged matching the filter. Keep practicing and log any question you get wrong for next-day revision!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="mistake-entry-card ${item.revised ? 'is-revised' : ''}">
      <div class="mistake-entry-header">
        <div class="mistake-tags">
          <span class="sub-tag ${item.subject}">${item.subject.toUpperCase()}</span>
          <span class="reason-badge ${item.reason}">${formatReason(item.reason)}</span>
          <span class="date-badge">Day ${item.day} • ${item.date}</span>
        </div>
        <div class="mistake-actions">
          <label class="custom-checkbox inline">
            <input type="checkbox" ${item.revised ? 'checked' : ''} onchange="toggleMistakeRevised('${item.id}', this.checked)">
            <span class="checkmark"></span>
            <span class="label-text">Revised</span>
          </label>
          <button class="btn btn-ghost btn-xs text-danger" onclick="deleteMistake('${item.id}')">✕ Delete</button>
        </div>
      </div>
      <div class="mistake-body">
        <div class="mistake-q"><strong>Question/Topic:</strong> ${escapeHtml(item.question)}</div>
        ${item.correction ? `<div class="mistake-correction"><strong>Key Learning / Formula:</strong> ${escapeHtml(item.correction)}</div>` : ''}
      </div>
    </div>
  `).join('');
}

function formatReason(r) {
  switch (r) {
    case 'concept': return 'Concept Not Understood';
    case 'calculation': return 'Calculation Mistake';
    case 'confusion': return 'Option Confusion';
    case 'guessing': return 'Guessing / Silly Error';
    default: return r;
  }
}

function toggleMistakeRevised(id, revised) {
  const item = appState.mistakes.find(m => m.id === id);
  if (item) {
    item.revised = revised;
    saveState();
    renderMistakesList();
  }
}

function deleteMistake(id) {
  appState.mistakes = appState.mistakes.filter(m => m.id !== id);
  saveState();
  renderMistakesList();
}

// Timer Functions
function formatTime(totalSecs) {
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  const display = document.getElementById('timer-time-display');
  if (display) display.textContent = formatTime(timerSecondsLeft);
}

function toggleTimer() {
  const btn = document.getElementById('timer-start-btn');
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    btn.textContent = '▶ Start Focus';
    btn.classList.remove('btn-warning');
    btn.classList.add('btn-primary');
  } else {
    timerRunning = true;
    btn.textContent = '⏸ Pause';
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-warning');
    playBeep(440, 0.15); // gentle start chirp

    timerInterval = setInterval(() => {
      if (timerSecondsLeft > 0) {
        timerSecondsLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerRunning = false;
        btn.textContent = '▶ Start Focus';
        btn.classList.remove('btn-warning');
        btn.classList.add('btn-primary');
        playCompletionChime();
        alert('🎉 Focus Session Completed! Time for your scheduled break or next slot.');
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSecondsLeft = timerTotalSeconds;
  const btn = document.getElementById('timer-start-btn');
  btn.textContent = '▶ Start Focus';
  btn.classList.remove('btn-warning');
  btn.classList.add('btn-primary');
  updateTimerDisplay();
}

function setTimerDuration(mins) {
  clearInterval(timerInterval);
  timerRunning = false;
  timerTotalSeconds = mins * 60;
  timerSecondsLeft = timerTotalSeconds;
  const btn = document.getElementById('timer-start-btn');
  btn.textContent = '▶ Start Focus';
  btn.classList.remove('btn-warning');
  btn.classList.add('btn-primary');
  updateTimerDisplay();
}

function quickStartTimer(subject, mins) {
  setTimerDuration(mins);
  document.getElementById('timer-task-name').textContent = `Focused on: ${subject}`;
  // Smooth scroll to timer if needed
  document.getElementById('pomodoro-card').scrollIntoView({ behavior: 'smooth' });
  toggleTimer();
}

function startTimerForSlot(slotName) {
  setTimerDuration(45);
  document.getElementById('timer-task-name').textContent = `Focused on: ${slotName}`;
  document.getElementById('pomodoro-card').scrollIntoView({ behavior: 'smooth' });
  toggleTimer();
}

// Backup & Export / Import
function exportData() {
  const jsonStr = JSON.stringify(appState, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SSC_CHSL_28Day_Prep_Backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data && data.days) {
        appState = data;
        saveState();
        initTheme();
        renderDayView(appState.currentDay || 1);
        renderAllDaysGrid();
        renderMistakesList();
        updateGlobalStats();
        alert('✅ Progress successfully restored!');
      } else {
        alert('Invalid file format. Please upload a valid JSON backup.');
      }
    } catch (err) {
      alert('Error parsing JSON backup file.');
    }
  };
  reader.readAsText(file);
}

function confirmResetAll() {
  const confirmed = confirm('Are you sure you want to reset all progress? This will reset all checkmarks and question counts.');
  if (confirmed) {
    const doubleCheck = prompt('Type "RESET" to confirm:');
    if (doubleCheck === 'RESET') {
      localStorage.removeItem(STORAGE_KEY);
      appState = getDefaultState();
      saveState();
      renderDayView(1);
      renderAllDaysGrid();
      renderMistakesList();
      updateGlobalStats();
      alert('All progress has been reset.');
    }
  }
}

// Helper utility
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
