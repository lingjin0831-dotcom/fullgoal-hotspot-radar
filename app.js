const explodedTopics = [
  {
    id: "cpo-ai-compute",
    category: "exploded",
    name: "AI 算力与 CPO 光模块主线升温",
    description: "云厂商资本开支预期、算力租赁价格和高速光模块订单讨论集中，成为科技成长最活跃选题。",
    link: "https://gubatopic.eastmoney.com/index.html#/search?keyword=AI%E7%AE%97%E5%8A%9B%20CPO",
    source: "东财股吧话题",
    sourceKey: "eastmoney_topic",
    stage: "爆发高点",
    heat: 94,
    growth: 42,
    fit: 94,
    tags: ["AI", "CPO", "算力"],
    products: ["富国中证芯片产业ETF", "富国创新科技混合", "富国全球科技互联网股票(QDII)"],
  },
  {
    id: "innovative-drug-bd",
    category: "exploded",
    name: "创新药出海与 BD 交易再受关注",
    description: "市场围绕海外授权、临床读出和估值修复展开讨论，医药主题从事件刺激转向业绩验证。",
    link: "https://www.cls.cn/searchPage?keyword=%E5%88%9B%E6%96%B0%E8%8D%AF%20BD%20%E5%87%BA%E6%B5%B7",
    source: "财联社",
    sourceKey: "newsflash",
    stage: "高位持续",
    heat: 88,
    growth: 26,
    fit: 90,
    tags: ["创新药", "BD", "医药"],
    products: ["富国精准医疗混合", "富国医药成长30股票", "富国中证医药主题指数增强"],
  },
  {
    id: "gold-rate-cut",
    category: "exploded",
    name: "黄金与降息交易反复活跃",
    description: "海外利率预期、美元波动和避险情绪共同推动黄金资产保持高讨论度。",
    link: "https://rili.jin10.com/?keyword=%E9%BB%84%E9%87%91%20%E9%99%8D%E6%81%AF",
    source: "金十数据",
    sourceKey: "jin10",
    stage: "高位持续",
    heat: 84,
    growth: 21,
    fit: 87,
    tags: ["黄金", "降息", "避险"],
    products: ["富国上海金ETF", "富国全球债券(QDII)", "富国稳健增强债券"],
  },
  {
    id: "dividend-high-yield",
    category: "exploded",
    name: "高股息红利资产延续讨论",
    description: "低利率与防御配置需求推动银行、电力、运营商等红利方向维持资金关注。",
    link: "https://so.eastmoney.com/news/s?keyword=%E9%AB%98%E8%82%A1%E6%81%AF%20%E7%BA%A2%E5%88%A9%20%E9%93%B6%E8%A1%8C",
    source: "东方财富快讯",
    sourceKey: "newsflash",
    stage: "热度回落",
    heat: 74,
    growth: -8,
    fit: 82,
    tags: ["高股息", "红利", "防御"],
    products: ["富国中证红利指数增强", "富国价值优势混合", "富国稳健策略混合"],
  },
  {
    id: "new-energy-export",
    category: "exploded",
    name: "新能源车出口与电池链反弹",
    description: "销量、海外贸易政策和电池材料价格边际变化带动新能源车链出现阶段性回暖讨论。",
    link: "https://www.nbd.com.cn/search/article_search?search_key=%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%20%E5%87%BA%E5%8F%A3%20%E7%94%B5%E6%B1%A0",
    source: "每日经济新闻",
    sourceKey: "newsflash",
    stage: "爆发初期",
    heat: 69,
    growth: 31,
    fit: 84,
    tags: ["新能源车", "电池", "出口"],
    products: ["富国中证新能源汽车指数", "富国清洁能源产业混合", "富国低碳环保混合"],
  },
  {
    id: "brokerage-reform",
    category: "exploded",
    name: "券商与资本市场改革预期升温",
    description: "活跃资本市场、并购重组和风险偏好修复预期推动券商板块短线讨论增加。",
    link: "https://www.cls.cn/searchPage?keyword=%E5%88%B8%E5%95%86%20%E8%B5%84%E6%9C%AC%E5%B8%82%E5%9C%BA%E6%94%B9%E9%9D%A9",
    source: "财联社",
    sourceKey: "newsflash",
    stage: "爆发初期",
    heat: 67,
    growth: 28,
    fit: 79,
    tags: ["券商", "资本市场", "beta"],
    products: ["富国证券龙头ETF", "富国沪深300增强", "富国天惠成长混合"],
  },
];

const risingTopics = [
  {
    id: "satellite-internet",
    category: "rising",
    name: "卫星互联网招标与商业航天催化",
    description: "发射窗口、低轨星座招标和地方产业政策逐步累积，热度不高但讨论增速明显。",
    link: "https://www.cls.cn/searchPage?keyword=%E5%8D%AB%E6%98%9F%E4%BA%92%E8%81%94%E7%BD%91%20%E5%95%86%E4%B8%9A%E8%88%AA%E5%A4%A9",
    source: "财联社",
    sourceKey: "newsflash",
    stage: "升温",
    heat: 43,
    growth: 64,
    fit: 88,
    tags: ["卫星互联网", "商业航天", "军工"],
    products: ["富国中证军工龙头ETF", "富国高端制造行业股票", "富国新兴产业股票"],
  },
  {
    id: "solid-state-pilot",
    category: "rising",
    name: "固态电池中试线进展发酵",
    description: "车企验证、材料体系迭代和量产节点预期增加，可能从细分材料扩散到新能源车主线。",
    link: "https://www.yicai.com/search?keys=%E5%9B%BA%E6%80%81%E7%94%B5%E6%B1%A0%20%E4%B8%AD%E8%AF%95%E7%BA%BF",
    source: "第一财经",
    sourceKey: "newsflash",
    stage: "扩散",
    heat: 48,
    growth: 57,
    fit: 86,
    tags: ["固态电池", "新能源", "材料"],
    products: ["富国中证新能源汽车指数", "富国清洁能源产业混合", "富国中证稀土产业ETF"],
  },
  {
    id: "low-altitude-orders",
    category: "rising",
    name: "低空经济从政策走向订单验证",
    description: "地方试点、空域管理和场景运营持续落地，话题正在从概念热转向产业订单验证。",
    link: "https://gubatopic.eastmoney.com/index.html#/search?keyword=%E4%BD%8E%E7%A9%BA%E7%BB%8F%E6%B5%8E%20%E8%AE%A2%E5%8D%95",
    source: "东财股吧话题",
    sourceKey: "eastmoney_topic",
    stage: "即将爆发",
    heat: 52,
    growth: 72,
    fit: 91,
    tags: ["低空经济", "无人机", "交通"],
    products: ["富国中证军工龙头ETF", "富国高端制造行业股票", "富国新材料新能源混合"],
  },
  {
    id: "humanoid-robot",
    category: "rising",
    name: "人形机器人零部件验证升温",
    description: "海外新品周期、国产执行器和传感器验证消息增多，尚未完全进入大众高热阶段。",
    link: "https://www.jiemian.com/search?keyword=%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%20%E9%9B%B6%E9%83%A8%E4%BB%B6",
    source: "界面新闻",
    sourceKey: "newsflash",
    stage: "升温",
    heat: 46,
    growth: 53,
    fit: 83,
    tags: ["机器人", "高端制造", "自动化"],
    products: ["富国中证智能汽车主题ETF", "富国高端制造行业股票", "富国创新科技混合"],
  },
  {
    id: "computing-power-grid",
    category: "rising",
    name: "算电协同与数据中心能耗约束",
    description: "AI 数据中心扩张带来电力、液冷和能耗指标讨论，正在从算力主线向能源配套扩散。",
    link: "https://www.nbd.com.cn/search/article_search?search_key=AI%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%20%E6%B6%B2%E5%86%B7%20%E7%94%B5%E5%8A%9B",
    source: "每日经济新闻",
    sourceKey: "newsflash",
    stage: "升温",
    heat: 39,
    growth: 55,
    fit: 80,
    tags: ["数据中心", "电力", "液冷"],
    products: ["富国创新科技混合", "富国清洁能源产业混合", "富国中证芯片产业ETF"],
  },
];

const eventTopics = [
  {
    id: "eastmoney-cjrl-meeting",
    date: "2026-07-15",
    weekday: "周三",
    type: "国内政策会议",
    name: "东方财富财经日历：财经会议窗口",
    description: "以东财会议数据页为未来一周会议入口，跟踪政策会议、行业会议和可影响市场风格的议程。",
    source: "东财财经日历 · 会议数据",
    sourceKey: "eastmoney_calendar",
    link: "https://data.eastmoney.com/cjrl/cjhy.html",
    fit: 86,
    products: ["富国沪深300增强", "富国消费主题混合", "富国信用债债券"],
  },
  {
    id: "jin10-important-calendar",
    date: "2026-07-15",
    weekday: "周三",
    type: "国际财经事件",
    name: "金十财经日历：海外重要数据观察",
    description: "金十日历支持按日期、国家和重要程度筛选，重点观察海外通胀、就业和央行口径对资产定价的影响。",
    source: "金十数据 · 财经日历",
    sourceKey: "jin10",
    link: "https://rili.jin10.com/",
    fit: 84,
    products: ["富国全球科技互联网股票(QDII)", "富国上海金ETF", "富国全球债券(QDII)"],
  },
  {
    id: "eastmoney-us-data",
    date: "2026-07-16",
    weekday: "周四",
    type: "宏观经济数据",
    name: "东方财富：美国经济数据更新窗口",
    description: "用东财美国经济数据页跟踪通胀、就业、PMI 等指标，服务黄金、QDII 和港股科技选题。",
    source: "东方财富 · 美国经济数据",
    sourceKey: "eastmoney_calendar",
    link: "https://data.eastmoney.com/cjsj/foreign_0_0.html",
    fit: 79,
    products: ["富国全球债券(QDII)", "富国上海金ETF", "富国港股通互联网ETF"],
  },
  {
    id: "ifind-ai-event-watch",
    date: "2026-07-17",
    weekday: "周五",
    type: "行业大会",
    name: "IFIND 待接入：AI 与智能制造会议跟踪",
    description: "预留给 IFIND 新闻/日程检索：接入后按会议名称、主办方、行业关键词拉取事件级新闻链接。",
    source: "IFIND MCP · 待连接",
    sourceKey: "ifind",
    link: "./IFIND_MCP_SETUP.md",
    fit: 92,
    products: ["富国创新科技混合", "富国高端制造行业股票", "富国中证芯片产业ETF"],
  },
  {
    id: "eastmoney-oil-data",
    date: "2026-07-18",
    weekday: "周六",
    type: "大宗商品数据",
    name: "东方财富：油价与大宗商品数据观察",
    description: "跟踪油价、库存和美元波动对资源品、黄金及周期资产的传导。",
    source: "东方财富 · 油价数据",
    sourceKey: "eastmoney_calendar",
    link: "https://data.eastmoney.com/cjsj/oil_default.html",
    fit: 77,
    products: ["富国资源精选混合", "富国上海金ETF", "富国周期优势混合"],
  },
  {
    id: "eastmoney-earnings-preview",
    date: "2026-07-20",
    weekday: "周一",
    type: "上市公司财报",
    name: "东方财富：中报业绩预告披露窗口",
    description: "用东财业绩预告页跟踪中报预告，验证 AI、医药、新能源和消费链条景气度。",
    source: "东方财富 · 业绩预告",
    sourceKey: "eastmoney_calendar",
    link: "https://data.eastmoney.com/bbsj/202506/yjyg.html",
    fit: 88,
    products: ["富国天惠成长混合", "富国价值优势混合", "富国新兴产业股票"],
  },
  {
    id: "eastmoney-lpr",
    date: "2026-07-20",
    weekday: "周一",
    type: "宏观经济数据",
    name: "东方财富：LPR 报价观察窗口",
    description: "LPR 数据影响债券、银行、地产链和红利资产的配置叙事，适合做利率敏感板块选题。",
    source: "东方财富 · LPR 数据",
    sourceKey: "eastmoney_calendar",
    link: "https://data.eastmoney.com/cjsj/globalRateLPR.html",
    fit: 81,
    products: ["富国沪深300增强", "富国中证红利指数增强", "富国创业板ETF"],
  },
];

const productLibrary = (window.FULLGOAL_PRODUCTS || []).map((product) => ({
  ...product,
  searchText: [product.code, product.name, product.type, product.risk, ...(product.tags || [])].join(" ").toLowerCase(),
}));
const ifindSnapshot = window.IFIND_SNAPSHOT || { trending: [] };
const allTopicTags = [
  "AI",
  "人工智能",
  "算力",
  "CPO",
  "芯片",
  "半导体",
  "科技",
  "互联网",
  "机器人",
  "军工",
  "智能制造",
  "新能源",
  "电池",
  "低碳",
  "医药",
  "医疗",
  "黄金",
  "红利",
  "证券",
  "券商",
  "港股",
  "QDII",
  "消费",
  "资源",
  "债",
  "信用债",
  "银行",
  "量化",
];

function inferTopicKeywords(topic) {
  const text = [topic.name, topic.description, ...(topic.tags || [])].join(" ").toLowerCase();
  return allTopicTags.filter((tag) => text.includes(tag.toLowerCase()));
}

function scoreProduct(product, keywords) {
  return keywords.reduce((score, keyword) => {
    const normalized = keyword.toLowerCase();
    const tagHit = (product.tags || []).some((tag) => tag.toLowerCase().includes(normalized) || normalized.includes(tag.toLowerCase()));
    const nameHit = product.name.toLowerCase().includes(normalized);
    return score + (nameHit ? 3 : 0) + (tagHit ? 2 : 0);
  }, 0);
}

function attachProductMatches(topic) {
  if (!productLibrary.length) return topic;

  const keywords = inferTopicKeywords(topic);
  const scored = productLibrary
    .map((product) => ({ product, score: scoreProduct(product, keywords) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name, "zh-CN"));
  const matchedProducts = scored.slice(0, 4).map((item) => item.product.name);
  const products = [...(topic.products || []), ...matchedProducts].filter((name, index, array) => array.indexOf(name) === index);
  const productTypes = scored.map((item) => item.product.type).filter((type, index, array) => type && array.indexOf(type) === index);

  return {
    ...topic,
    products: products.slice(0, 5),
    productTypes,
    fit: Math.min(99, Math.max(topic.fit || 70, 74 + Math.min(scored.length, 10) * 2 + keywords.length)),
  };
}

ifindSnapshot.trending.forEach((topic) => {
  const prepared = attachProductMatches({
    fit: 82,
    products: [],
    ...topic,
  });
  if (prepared.category === "exploded") explodedTopics.unshift(prepared);
  else risingTopics.unshift(prepared);
});

for (let index = 0; index < explodedTopics.length; index += 1) explodedTopics[index] = attachProductMatches(explodedTopics[index]);
for (let index = 0; index < risingTopics.length; index += 1) risingTopics[index] = attachProductMatches(risingTopics[index]);
for (let index = 0; index < eventTopics.length; index += 1) eventTopics[index] = attachProductMatches(eventTopics[index]);

let activeTab = "overview";
let eventMode = "timeline";
let savedTopics = new Set();
let windows = [
  { id: "past-week", name: "过去一周", start: "2026-07-07", end: "2026-07-13" },
  { id: "next-week", name: "未来一周", start: "2026-07-14", end: "2026-07-20" },
];

const els = {
  search: document.querySelector("#searchInput"),
  stage: document.querySelector("#stageFilter"),
  type: document.querySelector("#typeFilter"),
  productType: document.querySelector("#productTypeFilter"),
  highFit: document.querySelector("#highFitOnly"),
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".content-view"),
  sourceChecks: document.querySelectorAll(".source-panel input[type='checkbox']"),
  windowChips: document.querySelector("#windowChips"),
  windowSummary: document.querySelector("#windowSummary"),
  dialog: document.querySelector("#windowDialog"),
  openWindowBtn: document.querySelector("#openWindowBtn"),
  addWindowConfirm: document.querySelector("#addWindowConfirm"),
  windowName: document.querySelector("#windowName"),
  windowStart: document.querySelector("#windowStart"),
  windowEnd: document.querySelector("#windowEnd"),
  productFile: document.querySelector("#productFile"),
  productStatus: document.querySelector("#productStatus"),
  dataFreshness: document.querySelector("#dataFreshness"),
  toast: document.querySelector("#toast"),
};

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function setupProductFilters() {
  const types = productLibrary.map((product) => product.type).filter((type, index, array) => type && array.indexOf(type) === index);
  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    els.productType.appendChild(option);
  });

  els.productStatus.textContent = productLibrary.length ? `${productLibrary.length} 只产品` : "未加载产品库";
  document.querySelector("#productMetricNote").textContent = productLibrary.length ? "来自 fullgoal_products" : "产品库未加载";
  if (ifindSnapshot.generatedAt) {
    const generated = new Date(ifindSnapshot.generatedAt);
    els.dataFreshness.textContent = `公开静态版 · iFinD MCP 快照 ${generated.getMonth() + 1}月${generated.getDate()}日 ${String(generated.getHours()).padStart(2, "0")}:${String(generated.getMinutes()).padStart(2, "0")}`;
  }
}

function getFilters() {
  const selectedSources = [...els.sourceChecks]
    .filter((item) => item.checked)
    .map((item) => item.value);

  return {
    search: els.search.value.trim().toLowerCase(),
    stage: els.stage.value,
    type: els.type.value,
    productType: els.productType.value,
    highFit: els.highFit.checked,
    selectedSources,
  };
}

function formatDate(dateText) {
  const date = new Date(`${dateText}T00:00:00`);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function isInSelectedWindows(item) {
  if (!item.date) return true;
  return windows.some((windowItem) => item.date >= windowItem.start && item.date <= windowItem.end);
}

function filterItems(items) {
  const filters = getFilters();
  return items.filter((item) => {
    const haystack = [
      item.name,
      item.description,
      item.source,
      item.stage,
      item.type,
      ...(item.tags || []),
      ...(item.products || []),
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = !filters.search || haystack.includes(filters.search);
    const matchesStage = filters.stage === "all" || item.stage === filters.stage;
    const matchesType = filters.type === "all" || item.type === filters.type;
    const matchesFit = !filters.highFit || item.fit >= 85;
    const matchesProductType = filters.productType === "all" || (item.productTypes || []).includes(filters.productType);
    const matchesSource = filters.selectedSources.includes(item.sourceKey);
    const matchesWindow = isInSelectedWindows(item);

    return matchesSearch && matchesStage && matchesType && matchesFit && matchesProductType && matchesSource && matchesWindow;
  });
}

function stageClass(stage) {
  if (["爆发高点", "高位持续", "即将爆发"].includes(stage)) return "stage-hot";
  if (["爆发初期", "升温", "扩散"].includes(stage)) return "stage-rise";
  return "stage-cool";
}

function makeTopicCard(topic) {
  const card = document.createElement("article");
  card.className = "topic-card";
  card.innerHTML = `
    <div class="topic-top">
      <div>
        <span class="topic-source">${topic.source} · 热度 ${topic.heat} · 增速 ${topic.growth > 0 ? "+" : ""}${topic.growth}%</span>
        <h3>${topic.name}</h3>
      </div>
      <button class="bookmark ${savedTopics.has(topic.id) ? "saved" : ""}" data-save="${topic.id}" title="加入选题池">★</button>
    </div>
    <p class="topic-desc">${topic.description}</p>
    <div class="tag-row">
      <span class="tag ${stageClass(topic.stage)}">${topic.stage}</span>
      ${(topic.tags || []).map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
    </div>
    <div class="product-row">
      ${(topic.products || []).map((product) => `<span class="product">${escapeHTML(product)}</span>`).join("")}
    </div>
    <div class="topic-footer">
      <a href="${topic.link}" target="_blank" rel="noreferrer">查看来源链接 ↗</a>
      <div class="fit-meter">
        <span>产品相关度 ${topic.fit}</span>
        <div class="fit-bar"><i style="width:${topic.fit}%"></i></div>
      </div>
    </div>
  `;
  return card;
}

function makeEventItem(event) {
  const item = document.createElement("article");
  item.className = "event-item";
  item.innerHTML = `
    <div class="event-date">
      <span>${event.weekday}</span>
      <strong>${formatDate(event.date)}</strong>
      <span class="event-type">${event.type}</span>
    </div>
    <div class="event-body">
      <span class="topic-source">${event.source}</span>
      <h3>${event.name}</h3>
      <p>${event.description}</p>
      <a href="${event.link}" target="_blank" rel="noreferrer">查看事件来源 ↗</a>
    </div>
    <div class="event-products">
      ${event.products.map((product) => `<span class="product">${product}</span>`).join("")}
    </div>
  `;
  return item;
}

function renderList(containerId, items, builder, emptyText = "暂无匹配结果") {
  const container = document.querySelector(containerId);
  container.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "topic-card";
    empty.innerHTML = `<p class="topic-desc">${emptyText}</p>`;
    container.appendChild(empty);
    return;
  }

  items.forEach((item) => container.appendChild(builder(item)));
}

function renderCalendar(events) {
  const container = document.querySelector("#eventCalendar");
  const days = windows
    .flatMap((windowItem) => dateRange(windowItem.start, windowItem.end))
    .filter((date, index, array) => array.indexOf(date) === index)
    .slice(0, 7);

  container.innerHTML = days
    .map((date) => {
      const dayEvents = events.filter((event) => event.date === date);
      return `
        <div class="day-column">
          <h3>${formatDate(date)}</h3>
          ${
            dayEvents.length
              ? dayEvents.map((event) => `<div class="mini-event"><strong>${event.type}</strong><br />${event.name}</div>`).join("")
              : `<div class="mini-event">暂无确定事件</div>`
          }
        </div>
      `;
    })
    .join("");
}

function dateRange(start, end) {
  const output = [];
  const cursor = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  while (cursor <= last) {
    output.push(cursor.toISOString().slice(0, 10));
    cursor.setDate(cursor.getDate() + 1);
  }
  return output;
}

function renderWindows() {
  els.windowChips.innerHTML = "";
  windows.forEach((windowItem) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.innerHTML = `${windowItem.name} · ${formatDate(windowItem.start)}-${formatDate(windowItem.end)} <button title="移除此窗口" data-remove-window="${windowItem.id}">×</button>`;
    els.windowChips.appendChild(chip);
  });
  els.windowSummary.textContent = windows.map((windowItem) => windowItem.name).join(" + ");
}

function uniqueProductCount(items) {
  return new Set(items.flatMap((item) => item.products || [])).size;
}

function renderMetrics(exploded, rising, events) {
  document.querySelector("#metricExploded").textContent = exploded.length;
  document.querySelector("#metricRising").textContent = rising.length;
  document.querySelector("#metricEvents").textContent = events.length;
  document.querySelector("#metricProducts").textContent = uniqueProductCount([...exploded, ...rising, ...events]);
}

function makeInsightCard(item) {
  const status = item.stage || item.type || "事件";
  const dateText = item.date ? `${formatDate(item.date)} · ${item.weekday}` : "";
  const card = document.createElement("article");
  card.className = "insight-card";
  card.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <div class="insight-card-meta">
      <span class="tag ${stageClass(status)}">${dateText ? `${dateText} · ${status}` : status}</span>
      <a href="${item.link}" target="_blank" rel="noreferrer">${item.source} ↗</a>
    </div>
    <div class="insight-products">
      ${item.products.slice(0, 2).map((product) => `<span class="product">${product}</span>`).join("")}
    </div>
  `;
  return card;
}

function renderInsightCards(containerId, items, emptyText) {
  const container = document.querySelector(containerId);
  container.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("article");
    empty.className = "insight-card";
    empty.innerHTML = `<p>${emptyText}</p>`;
    container.appendChild(empty);
    return;
  }

  items.slice(0, 3).forEach((item) => container.appendChild(makeInsightCard(item)));
}

function renderMarketMap(exploded, rising) {
  const container = document.querySelector("#marketMap");
  const items = [...exploded, ...rising].sort((a, b) => b.fit + b.growth - (a.fit + a.growth));
  container.innerHTML = "";

  items.slice(0, 12).forEach((item) => {
    const tile = document.createElement("div");
    const hotColor = item.heat >= 75 ? "#d94841" : item.growth >= 50 ? "#087f8c" : "#b7791f";
    tile.className = "heat-tile";
    tile.style.gridColumn = `span ${item.heat >= 80 ? 3 : item.heat >= 60 ? 2 : 1}`;
    tile.style.background = hotColor;
    tile.title = `${item.name} · 热度 ${item.heat} · 增速 ${item.growth}%`;
    tile.innerHTML = `<strong>${item.name}</strong><span>热度 ${item.heat} / 增速 ${item.growth > 0 ? "+" : ""}${item.growth}%</span>`;
    container.appendChild(tile);
  });
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key] || "未分类";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function filteredProducts() {
  const filters = getFilters();
  return productLibrary.filter((product) => {
    const matchesSearch = !filters.search || product.searchText.includes(filters.search);
    const matchesType = filters.productType === "all" || product.type === filters.productType;
    return matchesSearch && matchesType;
  });
}

function renderProducts() {
  const products = filteredProducts();
  const typeCounts = countBy(productLibrary, "type");
  const tags = new Set(productLibrary.flatMap((product) => product.tags || []));

  document.querySelector("#productTotal").textContent = productLibrary.length;
  document.querySelector("#productTypeCount").textContent = Object.keys(typeCounts).length;
  document.querySelector("#productTagCount").textContent = tags.size;

  const maxTypeCount = Math.max(...Object.values(typeCounts), 1);
  document.querySelector("#productTypeBars").innerHTML = Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .map(
      ([type, count]) => `
        <div class="type-bar">
          <div><strong>${escapeHTML(type)}</strong><span>${count} 只</span></div>
          <i style="width:${Math.max(8, (count / maxTypeCount) * 100)}%"></i>
        </div>
      `,
    )
    .join("");

  document.querySelector("#productTable").innerHTML = products
    .slice(0, 80)
    .map(
      (product) => `
        <tr>
          <td>${escapeHTML(product.code)}</td>
          <td>${escapeHTML(product.name)}</td>
          <td>${escapeHTML(product.type)}</td>
          <td>${escapeHTML(product.risk)}</td>
          <td>${(product.tags || []).slice(0, 5).map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</td>
        </tr>
      `,
    )
    .join("");
}

function downloadCSV(rows) {
  const header = ["名称", "阶段/类型", "来源", "热度", "增速", "产品匹配"];
  const body = rows.map((item) => [
    item.name,
    item.stage || item.type || "",
    item.source,
    item.heat || "",
    item.growth || "",
    (item.products || []).join("、"),
  ]);
  const csv = [header, ...body]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `fullgoal-topic-radar-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function render() {
  const filteredExploded = filterItems(explodedTopics);
  const filteredRising = filterItems(risingTopics);
  const filteredEvents = filterItems(eventTopics);

  renderMetrics(filteredExploded, filteredRising, filteredEvents);
  renderWindows();
  renderMarketMap(filteredExploded, filteredRising);
  renderInsightCards("#pastDiscussionCards", filteredExploded, "当前筛选下暂无过去一周讨论热点");
  renderInsightCards("#nextEventCards", filteredEvents, "当前筛选下暂无下周确定事件");
  renderInsightCards("#risingSignalCards", filteredRising, "当前筛选下暂无正在升温话题");

  renderList("#overviewExploded", filteredExploded.slice(0, 3), makeTopicCard);
  renderList("#overviewRising", filteredRising.slice(0, 3), makeTopicCard);
  renderList("#overviewEvents", filteredEvents.slice(0, 4), makeEventItem);
  renderList("#explodedCards", filteredExploded, makeTopicCard);
  renderList("#risingCards", filteredRising, makeTopicCard);
  renderList("#eventTimeline", filteredEvents, makeEventItem, "当前窗口内暂无确定事件");
  renderCalendar(filteredEvents);
  renderProducts();
}

function switchTab(tab, shouldScroll = false) {
  activeTab = tab;
  els.navItems.forEach((item) => item.classList.toggle("active", item.dataset.tab === tab));
  els.views.forEach((view) => view.classList.toggle("active", view.dataset.view === tab));
  if (shouldScroll && tab !== "overview") {
    document.querySelector(`[data-view="${tab}"]`)?.scrollIntoView({ block: "start" });
  }
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.setTimeout(() => els.toast.classList.remove("show"), 2600);
}

function setupEvents() {
  els.navItems.forEach((item) => item.addEventListener("click", () => switchTab(item.dataset.tab, true)));
  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.jump, true));
  });

  [els.search, els.stage, els.type, els.productType, els.highFit, ...els.sourceChecks].forEach((input) => {
    input.addEventListener("input", render);
    input.addEventListener("change", render);
  });

  document.body.addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save]");
    if (saveButton) {
      const id = saveButton.dataset.save;
      if (savedTopics.has(id)) savedTopics.delete(id);
      else savedTopics.add(id);
      render();
      showToast(savedTopics.has(id) ? "已加入选题池" : "已移出选题池");
    }

    const removeButton = event.target.closest("[data-remove-window]");
    if (removeButton) {
      if (windows.length === 1) {
        showToast("至少保留一个时间窗口");
        return;
      }
      windows = windows.filter((windowItem) => windowItem.id !== removeButton.dataset.removeWindow);
      render();
    }
  });

  els.openWindowBtn.addEventListener("click", () => {
    els.windowStart.value = "2026-07-14";
    els.windowEnd.value = "2026-07-20";
    els.dialog.showModal();
  });

  els.addWindowConfirm.addEventListener("click", (event) => {
    event.preventDefault();
    const name = els.windowName.value.trim() || "自定义窗口";
    const start = els.windowStart.value;
    const end = els.windowEnd.value;
    if (!start || !end || start > end) {
      showToast("请填写有效的开始和结束日期");
      return;
    }
    windows.push({ id: `${Date.now()}`, name, start, end });
    els.windowName.value = "";
    els.dialog.close();
    render();
  });

  document.querySelector("#refreshBtn").addEventListener("click", () => {
    showToast("已基于完整产品库重新计算当前筛选匹配。");
    render();
  });

  document.querySelector("#exportBtn").addEventListener("click", () => {
    const rows = [...filterItems(explodedTopics), ...filterItems(risingTopics), ...filterItems(eventTopics)];
    downloadCSV(rows);
    showToast(`已导出当前筛选结果 ${rows.length} 条。`);
  });

  els.productFile.addEventListener("change", () => {
    const file = els.productFile.files[0];
    if (!file) return;
    els.productStatus.textContent = file.name;
    showToast("已识别产品文件，下一步可接入真实产品匹配规则。");
  });

  document.querySelectorAll(".segmented button").forEach((button) => {
    button.addEventListener("click", () => {
      eventMode = button.dataset.mode;
      document.querySelectorAll(".segmented button").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelector("#eventTimeline").classList.toggle("hidden", eventMode !== "timeline");
      document.querySelector("#eventCalendar").classList.toggle("hidden", eventMode !== "calendar");
    });
  });
}

setupProductFilters();
setupEvents();
render();
