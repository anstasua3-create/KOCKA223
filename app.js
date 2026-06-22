const questionInput = document.getElementById("question");
const drawButton = document.getElementById("drawButton");
const shuffleButton = document.getElementById("shuffleButton");
const fortuneText = document.getElementById("fortuneText");
const readingTone = document.getElementById("readingTone");
const readingIllustration = document.getElementById("readingIllustration");
const cardsContainer = document.getElementById("cards");
const catStage = document.querySelector(".cat-stage");
const dealLayer = document.getElementById("dealLayer");

const cardDeck = [
  {
    name: "Звезда",
    symbol: "✦",
    meaning:
      "Надежда возвращается, а впереди появляется ясный путь. Сейчас важно не терять веру в свои планы.",
  },
  {
    name: "Луна",
    symbol: "☾",
    meaning:
      "Интуиция сильнее логики. Обрати внимание на тонкие знаки и не спеши делать резкие выводы.",
  },
  {
    name: "Солнце",
    symbol: "☀",
    meaning:
      "Тебя ждёт удачный период, где станет больше тепла, уверенности и хороших новостей.",
  },
  {
    name: "Императрица",
    symbol: "✿",
    meaning:
      "Твои идеи созревают и начинают приносить плоды. Бережно относись к тому, что уже растёт.",
  },
  {
    name: "Колесо Фортуны",
    symbol: "⟲",
    meaning:
      "События ускоряются, и поворот судьбы может открыть неожиданные возможности. Время действовать гибко.",
  },
  {
    name: "Влюблённые",
    symbol: "♥",
    meaning:
      "Важный выбор связан с чувствами, доверием и искренностью. Сердце подскажет верное направление.",
  },
  {
    name: "Мир",
    symbol: "◎",
    meaning:
      "Цикл подходит к завершению. Ты готов(а) перейти на новый уровень и получить заслуженный результат.",
  },
  {
    name: "Маг",
    symbol: "✧",
    meaning:
      "У тебя есть всё, чтобы превратить идею в реальность. Главное — начать и не сомневаться в себе.",
  },
  {
    name: "Отшельник",
    symbol: "☌",
    meaning:
      "Ответ приходит через паузу и размышление. Немного тишины сейчас даст больше ясности, чем суета.",
  },
  {
    name: "Сила",
    symbol: "❂",
    meaning:
      "Мягкость и терпение сработают лучше давления. Ты справишься, если будешь опираться на спокойствие.",
  },
  {
    name: "Колесница",
    symbol: "➤",
    meaning:
      "Появится энергия для рывка вперёд. Держи курс и не распыляй внимание на лишнее.",
  },
  {
    name: "Башня",
    symbol: "⚡",
    meaning:
      "Что-то неожиданное может разрушить старую конструкцию, но это освободит место для более честного пути.",
  },
];

const openingLines = [
  "Кошка Луна мягко касается карт лапкой и шепчет: ",
  "Луна прищурилась, разложила карты и мурчит: ",
  "Пушистая провидица смотрит в твой вопрос и отвечает: ",
  "Кошка аккуратно переворачивает карты и говорит: ",
];

const closings = [
  "Не спорь с интуицией: она сегодня видит дальше глаз.",
  "Кошачий хвост одобрительно качнулся — знак хороший.",
  "Судьба любит тех, кто делает маленький шаг первым.",
  "Луна советует довериться моменту и не торопить развязку.",
];

const toneByCard = {
  "Звезда": "Надежда и ясность",
  "Луна": "Тонкие знаки",
  "Солнце": "Светлый прогноз",
  "Императрица": "Рост и забота",
  "Колесо Фортуны": "Поворот событий",
  "Влюблённые": "Сердечный выбор",
  "Мир": "Завершение цикла",
  "Маг": "Сильный старт",
  "Отшельник": "Тихий ответ",
  "Сила": "Спокойная мощь",
  "Колесница": "Движение вперёд",
  "Башня": "Неожиданный поворот",
};

const illustrationByCard = {
  "Звезда": {
    title: "Иллюстрация надежды",
    subtitle: "Звёзды обещают мягкий и ясный путь.",
    backgroundStart: "#fff7fb",
    backgroundEnd: "#ffdce8",
    accent: "#ff6b9a",
    symbol: "✦",
  },
  "Луна": {
    title: "Иллюстрация интуиции",
    subtitle: "Тонкие знаки ведут тебя вперёд.",
    backgroundStart: "#f9f4ff",
    backgroundEnd: "#eadcff",
    accent: "#8a6cff",
    symbol: "☾",
  },
  "Солнце": {
    title: "Иллюстрация света",
    subtitle: "Тёплый период уже рядом.",
    backgroundStart: "#fff8e8",
    backgroundEnd: "#ffe3a8",
    accent: "#ffb400",
    symbol: "☀",
  },
  "Императрица": {
    title: "Иллюстрация роста",
    subtitle: "То, что ты бережёшь, расцветает.",
    backgroundStart: "#fff7fb",
    backgroundEnd: "#ffd5e8",
    accent: "#ff7aa7",
    symbol: "✿",
  },
  "Колесо Фортуны": {
    title: "Иллюстрация поворота",
    subtitle: "Судьба делает красивый круг.",
    backgroundStart: "#fff7fb",
    backgroundEnd: "#ffe0f0",
    accent: "#ff6b9a",
    symbol: "⟲",
  },
  "Влюблённые": {
    title: "Иллюстрация выбора",
    subtitle: "Сердце знает верное направление.",
    backgroundStart: "#fff7f9",
    backgroundEnd: "#ffd6de",
    accent: "#ff5b7f",
    symbol: "♥",
  },
  "Мир": {
    title: "Иллюстрация завершения",
    subtitle: "Цикл закрывается мягко и красиво.",
    backgroundStart: "#f7fbff",
    backgroundEnd: "#d7f0ff",
    accent: "#5aa7ff",
    symbol: "◎",
  },
  "Маг": {
    title: "Иллюстрация силы",
    subtitle: "У тебя есть всё для старта.",
    backgroundStart: "#fff8ef",
    backgroundEnd: "#ffe0c0",
    accent: "#ff9955",
    symbol: "✧",
  },
  "Отшельник": {
    title: "Иллюстрация тишины",
    subtitle: "Ответ приходит в спокойствии.",
    backgroundStart: "#f7f4f1",
    backgroundEnd: "#e9e0da",
    accent: "#8a6e5d",
    symbol: "☌",
  },
  "Сила": {
    title: "Иллюстрация мягкой мощи",
    subtitle: "Спокойствие сильнее давления.",
    backgroundStart: "#fff6f7",
    backgroundEnd: "#ffd7df",
    accent: "#ff698c",
    symbol: "❂",
  },
  "Колесница": {
    title: "Иллюстрация движения",
    subtitle: "Время уверенно идти вперёд.",
    backgroundStart: "#f5fbff",
    backgroundEnd: "#dbeeff",
    accent: "#4f9fff",
    symbol: "➤",
  },
  "Башня": {
    title: "Иллюстрация перемен",
    subtitle: "Старое уходит, чтобы освободить новое.",
    backgroundStart: "#fff7f7",
    backgroundEnd: "#ffd9d9",
    accent: "#ff6b6b",
    symbol: "⚡",
  },
};

let currentCards = [];
let drawAnimationTimer = null;

function resetDealLayer() {
  dealLayer.innerHTML = "";
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function drawUniqueCards(count) {
  const pool = [...cardDeck];
  const selected = [];

  while (selected.length < count && pool.length > 0) {
    const index = Math.floor(Math.random() * pool.length);
    selected.push(pool.splice(index, 1)[0]);
  }

  return selected;
}

function renderEmptyState() {
  cardsContainer.innerHTML = `
    <div class="empty-state">
      Карты ждут вопроса. Луна уже устроилась на розовом столе и готова говорить о будущем.
    </div>
  `;
}

function renderReadingIllustration(card) {
  const theme = illustrationByCard[card?.name] ?? illustrationByCard["Звезда"];

  readingIllustration.innerHTML = `
    <svg viewBox="0 0 560 220" role="img" aria-label="${theme.title}">
      <defs>
        <linearGradient id="bgGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${theme.backgroundStart}" />
          <stop offset="100%" stop-color="${theme.backgroundEnd}" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="560" height="220" rx="22" fill="url(#bgGradient)" />
      <circle cx="445" cy="60" r="34" fill="rgba(255,255,255,0.72)" />
      <circle cx="462" cy="60" r="30" fill="${theme.backgroundEnd}" />
      <ellipse cx="130" cy="150" rx="84" ry="30" fill="rgba(122,49,72,0.08)" />
      <ellipse cx="340" cy="155" rx="126" ry="26" fill="rgba(122,49,72,0.07)" />
      <path d="M 165 150 C 155 125, 168 98, 206 94 C 235 92, 257 108, 261 132 C 264 157, 242 177, 214 179 C 186 181, 171 169, 165 150 Z" fill="#fff" />
      <path d="M 182 106 L 165 79 L 194 89 Z" fill="#fff" />
      <path d="M 240 106 L 261 78 L 229 88 Z" fill="#fff" />
      <circle cx="193" cy="129" r="10" fill="#7a3148" />
      <circle cx="233" cy="129" r="10" fill="#7a3148" />
      <path d="M 204 147 C 214 155, 221 155, 228 147" stroke="#ff7ea8" stroke-width="5" stroke-linecap="round" fill="none" />
      <path d="M 281 88 C 303 80, 329 79, 353 89 C 376 98, 388 117, 393 138 C 399 161, 390 178, 374 185 C 357 192, 337 192, 318 186 C 299 180, 285 169, 279 152 C 273 135, 271 98, 281 88 Z" fill="#fff" />
      <circle cx="321" cy="133" r="11" fill="#7a3148" />
      <circle cx="360" cy="133" r="11" fill="#7a3148" />
      <path d="M 333 151 C 340 157, 346 157, 353 151" stroke="#ff7ea8" stroke-width="5" stroke-linecap="round" fill="none" />
      <rect x="286" y="167" width="110" height="22" rx="11" fill="${theme.accent}" opacity="0.85" />
      <circle cx="444" cy="106" r="7" fill="${theme.accent}" />
      <circle cx="470" cy="88" r="5" fill="${theme.accent}" opacity="0.8" />
      <circle cx="492" cy="117" r="4" fill="${theme.accent}" opacity="0.7" />
      <text x="40" y="52" class="illustration-title">${theme.title}</text>
      <text x="40" y="82" class="illustration-subtitle">${theme.subtitle}</text>
      <text x="474" y="173" font-size="66" text-anchor="middle" fill="${theme.accent}" opacity="0.92">${theme.symbol}</text>
    </svg>
  `;
}

function animateCardDeal(cards) {
  if (!catStage || !dealLayer) {
    return;
  }

  clearTimeout(drawAnimationTimer);
  resetDealLayer();
  catStage.classList.remove("is-dealing");
  void catStage.offsetWidth;
  catStage.classList.add("is-dealing");

  const cardTargets = [
    { x: 172, y: 18, rot: -12 },
    { x: 282, y: -6, rot: 3 },
    { x: 392, y: 18, rot: 11 },
  ];

  cards.forEach((card, index) => {
    const target = cardTargets[index] ?? cardTargets[cardTargets.length - 1];
    const cardElement = document.createElement("div");

    cardElement.className = "deal-card is-moving";
    cardElement.style.setProperty("--from-x", "28px");
    cardElement.style.setProperty("--from-y", `${136 + index * 4}px`);
    cardElement.style.setProperty("--from-rot", `${-12 + index * 2}deg`);
    cardElement.style.setProperty("--mid-x", `${80 + index * 70}px`);
    cardElement.style.setProperty("--mid-y", `${72 - index * 4}px`);
    cardElement.style.setProperty("--mid-rot", `${-4 + index * 4}deg`);
    cardElement.style.setProperty("--to-x", `${target.x}px`);
    cardElement.style.setProperty("--to-y", `${target.y}px`);
    cardElement.style.setProperty("--to-rot", `${target.rot}deg`);
    cardElement.style.left = "0";
    cardElement.style.top = "0";
    cardElement.style.animationDelay = `${index * 0.18}s`;
    cardElement.dataset.cardName = card.name;
    dealLayer.appendChild(cardElement);
  });

  drawAnimationTimer = setTimeout(() => {
    catStage.classList.remove("is-dealing");
    resetDealLayer();
    renderCards(cards);
    renderReadingIllustration(cards[2] ?? cards[0]);
    fortuneText.textContent = buildReading(questionInput.value, cards);
    updateReadingTone(cards);
  }, 1450);
}

function renderCards(cards) {
  cardsContainer.innerHTML = cards
    .map((card, index) => {
      const positions = ["Прошлое", "Настоящее", "Будущее"];
      const position = positions[index] ?? `Карта ${index + 1}`;
      return `
        <article class="tarot-card">
          <div>
            <div class="card-position">${position}</div>
            <h3 class="card-title">${card.name}</h3>
            <p class="card-meaning">${card.meaning}</p>
          </div>
          <div class="card-symbol" aria-hidden="true">${card.symbol}</div>
        </article>
      `;
    })
    .join("");
}

function buildReading(question, cards) {
  const cardNames = cards.map((card) => card.name);
  const sharedTone = cardNames
    .map((name) => toneByCard[name])
    .filter(Boolean)
    .slice(0, 2)
    .join(" и ");

  const questionText = question.trim();
  const opening = pickRandom(openingLines);
  const closing = pickRandom(closings);
  const futureCard = cards[2] ?? cards[cards.length - 1];

  if (questionText) {
    return `${opening}на твой вопрос «${questionText}» выпали ${cardNames.join(", ")}. ${futureCard.meaning} ${closing}`;
  }

  return `${opening}тебя ждёт ${sharedTone || "интересный поворот"}. ${cards[0]?.meaning ?? ""} ${futureCard.meaning} ${closing}`;
}

function updateReadingTone(cards) {
  const futureCard = cards[2] ?? cards[cards.length - 1];
  readingTone.textContent = futureCard ? toneByCard[futureCard.name] ?? "Кошка слушает карты" : "Кошка слушает карты";
}

function createReading() {
  currentCards = drawUniqueCards(3);
  cardsContainer.innerHTML = `
    <div class="empty-state">
      Луна достаёт карты из колоды и раскладывает их на стол...
    </div>
  `;
  fortuneText.textContent = "Кошка вытаскивает карты из колоды и аккуратно раскладывает их на стол.";
  readingTone.textContent = "Карты в движении";
  animateCardDeal(currentCards);
}

shuffleButton.addEventListener("click", () => {
  currentCards = drawUniqueCards(3);
  cardsContainer.innerHTML = `
    <div class="empty-state">
      Луна перетасовывает карты и готовит новый расклад...
    </div>
  `;
  readingTone.textContent = "Карты перетасованы";
  fortuneText.textContent = "Луна перемешала колоду мягкими лапками. Теперь задай вопрос и попроси расклад снова.";
  animateCardDeal(currentCards);
});

drawButton.addEventListener("click", createReading);
questionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
    createReading();
  }
});

renderEmptyState();
renderReadingIllustration(cardDeck[0]);
