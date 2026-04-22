(function(){
  const splash = document.getElementById('splash-screen');
  window.addEventListener('load', function() {
    setTimeout(() => { splash.style.opacity = '0'; }, 100);
    setTimeout(() => { splash.style.display = 'none'; }, 2600);
  });

  const i18nData = {
    'zh-Hans': {
      music: '森脇正敏 - 甘いひととき',
      company_name: '夏苏城轨道交通',
      nav_about: '<i class="fas fa-building"></i> 公司介绍', nav_history: '<i class="fas fa-timeline"></i> 发展沿革',
      nav_plan: '<i class="fas fa-draw-polygon"></i> 建设规划', nav_culture: '<i class="fas fa-landmark"></i> 风物志',
      nav_lines: '<i class="fas fa-subway"></i> 运营线路', nav_network: '<i class="fas fa-network-wired"></i> 运营线网', nav_news: '<i class="fas fa-hard-hat"></i> 建设消息',
      about_title: '公司介绍',
      about_text: `<p>夏苏城轨道交通（Natsu Stellar Railwork）成立于2022年，是Minecraft中的单人虚拟城市地铁线网，遵循原版原创、追求创新、生态友好等理念。截至2026年4月，已有11条主线、2条支线，共417站投入运营，总里程超300kblocks。</p><p style="margin-top:16px;">公司愿景：打造世界一流、超大规模、精致耐玩的单人原版地铁城市线网。 </p><p style="margin-top:16px;"><strong>logo设计理念：</strong>以日文"夏（なつ）"为原型，融入地铁线条、标识色、换乘标识元素，色彩鲜明，清新而富有特色。"ナツ・ステラ・レイルワーク"文字中融入点元素，从左到右的颜色代表前9条对应线路的开通顺序。</p>`,
      line_title: '运营线路 · 城市动脉', line_click: '点击卡片查看线路详情',
      netmap_title: '运营线网 · 标识图', news_title: '建设消息',
      news1_title: '14号线三期开通试运营', news1_desc: '连接异界关隘与崇明岛，途径T2、T3航站楼。',
      news2_title: '仙人掌塔完工', news2_desc: '位于14号线仙人掌种植园站',
      news3_title: '14号线二期开通试运营', news3_desc: '西起全线网第二个林地府邸，东接一期工程五汇路站',
      news4_title: '10号线开通试运营', news4_desc: '位于线网东部，设11个换乘站（含1个规划中）',
      plan_title: '建设规划', plan12: '12号线 · 高架线', plan13: '13号线 · 远郊线', plan11: '11号线 · 西线',
      history_title: '发展沿革', show_more: '查看更多', show_less: '收起',
      culture_title: '沿线风物志 · 一站一景', more_culture: '更多风物', not_open: '暂未开通，敬请期待',
      notice1: '注意：1）本网页展示的轨道交通线网基于Minecraft游戏进行虚拟构建，与现实中的任何城市、线路或规划均无实际关联；',
      notice2: '2）换乘站在统计站点数量时按照所属线路重复计数，特此说明；',
      notice3: '3）因美术需要，本线网以x轴正方向为北方向；',
      notice4: '4）未经授权，禁止任何形式的搬运、转载或二次发布。'
    },
    'zh-Hant': {
      music: '森脇正敏 - 甘いひととき', company_name: '夏蘇城軌道交通',
      nav_about: '<i class="fas fa-building"></i> 公司介紹', nav_history: '<i class="fas fa-timeline"></i> 發展沿革',
      nav_plan: '<i class="fas fa-draw-polygon"></i> 建設規劃', nav_culture: '<i class="fas fa-landmark"></i> 風物誌',
      nav_lines: '<i class="fas fa-subway"></i> 運營線路', nav_network: '<i class="fas fa-network-wired"></i> 運營線網', nav_news: '<i class="fas fa-hard-hat"></i> 建設消息',
      about_title: '公司介紹',
      about_text: `<p>夏蘇城軌道交通（Natsu Stellar Railwork）成立於2022年，是Minecraft中的單人虛擬城市地鐵線網，遵循原版原創、追求創新、生態友好等理念。截至2026年4月，已有11條主線、2條支線，共417站投入運營，總里程超300kblocks。</p><p style="margin-top:16px;">公司願景：打造世界一流、超大規模、精緻耐玩的單人原版地鐵城市線網。</p><p style="margin-top:16px;"><strong>logo設計理念：</strong>以日文「夏（なつ）」為原型，融入地鐵線條、標識色、換乘標識元素，色彩鮮明，清新而富有特色。「ナツ・ステラ・レイルワーク」文字中融入點元素，從左到右的顏色代表前9條對應線路的開通順序。</p>`,
      line_title: '運營線路 · 城市動脈', line_click: '點擊卡片查看線路詳情',
      netmap_title: '運營線網 · 標識圖', news_title: '建設消息',
      news1_title: '14號線三期開通試運營', news1_desc: '連接異界關隘與崇明島，途徑T2、T3航站樓。',
      news2_title: '仙人掌塔完工', news2_desc: '位於14號線仙人掌種植園站',
      news3_title: '14號線二期開通試運營', news3_desc: '西起全線網第二個林地府邸，東接一期工程五匯路站',
      news4_title: '10號線開通試運營', news4_desc: '位於線網東部，設11個換乘站（含1個規劃中）',
      plan_title: '建設規劃', plan12: '12號線 · 高架線', plan13: '13號線 · 遠郊線', plan11: '11號線 · 西線',
      history_title: '發展沿革', show_more: '查看更多', show_less: '收起',
      culture_title: '沿線風物誌 · 一站一景', more_culture: '更多風物', not_open: '暫未開通，敬請期待',
      notice1: '注意：1）本網頁展示的軌道交通線網基於Minecraft遊戲進行虛擬構建，與現實中的任何城市、線路或規劃均無實際關聯；',
      notice2: '2）換乘站在統計站點數量時按照所屬線路重複計數，特此說明；',
      notice3: '3）因美術需要，本線網以x軸正方向為北方向；',
      notice4: '4）未經授權，禁止任何形式的搬運、轉載或二次發布。'
    },
    'en': {
      music: 'Moriwaki Masatoshi - Sweet Moment', company_name: 'Natsu Stellar Railwork',
      nav_about: '<i class="fas fa-building"></i> About', nav_history: '<i class="fas fa-timeline"></i> History',
      nav_plan: '<i class="fas fa-draw-polygon"></i> Planning', nav_culture: '<i class="fas fa-landmark"></i> Culture',
      nav_lines: '<i class="fas fa-subway"></i> Lines', nav_network: '<i class="fas fa-network-wired"></i> Network', nav_news: '<i class="fas fa-hard-hat"></i> News',
      about_title: 'About Us',
      about_text: `<p>Natsu Stellar Railwork, founded in 2022, is a solo virtual metro network in Minecraft. As of April 2026, 11 main lines and 2 branches with 417 stations are in operation, total mileage exceeds 300k blocks.</p><p style="margin-top:16px;">Vision: a world-class, large-scale solo vanilla metro city network.</p><p style="margin-top:16px;"><strong>Logo concept:</strong> Based on Japanese "夏 (natsu)", incorporating metro lines, line colors, and transfer symbols. The "ナツ・ステラ・レイルワーク" text uses dot elements, colors from left to right represent the opening order of the first 9 lines.</p>`,
      line_title: 'Operating Lines', line_click: 'Click for details',
      netmap_title: 'Network Map', news_title: 'Construction News',
      news1_title: 'Line 14 Phase 3 trial operation', news1_desc: 'Connects Otherworld Gate & Chongming Island, via T2/T3.',
      news2_title: 'Cactus Tower completed', news2_desc: 'At Line 14 Cactus Plantation Station',
      news3_title: 'Line 14 Phase 2 trial operation', news3_desc: 'From 2nd woodland mansion to Wuhui Road.',
      news4_title: 'Line 10 trial operation', news4_desc: 'Eastern network, 11 interchange stations (1 planned).',
      plan_title: 'Planning', plan12: 'Line 12 · Elevated', plan13: 'Line 13 · Suburb', plan11: 'Line 11 · West',
      history_title: 'History', show_more: 'Show more', show_less: 'Show less',
      culture_title: 'Culture · Station Views', more_culture: 'More', not_open: 'Coming soon',
      notice1: 'Note: 1) The rail transit network displayed on this website is virtually constructed based on Minecraft and has no actual connection with any real city, line, or plan;',
      notice2: '2) Transfer stations are counted repeatedly according to the lines they belong to;',
      notice3: '3) For artistic purposes, the positive x-axis direction is designated as north;',
      notice4: '4) Unauthorized reproduction, reposting, or redistribution of any form is prohibited.'
    },
    'ja': {
      music: '森脇正敏 - 甘いひととき', company_name: '夏蘇軌道交通',
      nav_about: '<i class="fas fa-building"></i> 会社概要', nav_history: '<i class="fas fa-timeline"></i> 沿革',
      nav_plan: '<i class="fas fa-draw-polygon"></i> 計画', nav_culture: '<i class="fas fa-landmark"></i> 風物詩',
      nav_lines: '<i class="fas fa-subway"></i> 路線', nav_network: '<i class="fas fa-network-wired"></i> ネットワーク', nav_news: '<i class="fas fa-hard-hat"></i> 建設情報',
      about_title: '会社概要',
      about_text: `<p>夏蘇軌道交通は2022年設立、Minecraft内のソロ地下鉄網。2026年4月現在11本線・2支線、417駅が営業中、総延長300kブロック超。</p><p style="margin-top:16px;">世界一流の大規模ソロバニラ地下鉄都市を目指します。</p><p style="margin-top:16px;"><strong>ロゴコンセプト：</strong>日本語「夏（なつ）」を原型に、地下鉄のラインやラインカラー、乗換標識を融合。「ナツ・ステラ・レイルワーク」の文字にドット要素を組み込み、左から右への色は最初の9路線の開業順を表します。</p>`,
      line_title: '運行路線', line_click: '詳細はカードをクリック',
      netmap_title: '路線図', news_title: '建設情報',
      news1_title: '14号線三期試運転', news1_desc: '異界関門～崇明島、T2/T3経由。',
      news2_title: '仙人掌塔完成', news2_desc: '14号線仙人掌農園駅',
      news3_title: '14号線二期試運転', news3_desc: '第二林地邸宅～五汇路。',
      news4_title: '10号線試運転', news4_desc: '東部ネットワーク、11乗換駅（1計画中）。',
      plan_title: '建設計画', plan12: '12号線 · 高架', plan13: '13号線 · 郊外', plan11: '11号線 · 西',
      history_title: '沿革', show_more: 'もっと見る', show_less: '閉じる',
      culture_title: '風物詩 · 駅景色', more_culture: 'もっと', not_open: 'まもなく開通',
      notice1: '注意：1）当ウェブサイトに表示される鉄道網はMinecraft上で仮想的に構築されたものであり、実際の都市・路線・計画とは一切関係ありません；',
      notice2: '2）乗換駅は所属路線ごとに重複してカウントされています；',
      notice3: '3）美術上の都合により、本線網ではx軸正方向を北としています；',
      notice4: '4）無断転載・複製・二次配布を禁止します。'
    }
  };

  let currentLang = 'zh-Hans';
  function applyLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-switch span').forEach(el => el.classList.remove('active-lang'));
    document.querySelector(`.lang-switch span[data-lang="${lang}"]`).classList.add('active-lang');
    const data = i18nData[lang] || i18nData['zh-Hans'];
    document.querySelectorAll('.i18n').forEach(el => {
      const key = el.dataset.key;
      if (data[key]) {
        if (key.includes('nav_') || key.includes('about_text')) el.innerHTML = data[key];
        else el.textContent = data[key];
      }
    });
    document.querySelector('.company-intro h2').innerHTML = data.about_title;
    document.querySelector('.section-title h2').innerHTML = data.line_title;
    document.querySelector('.culture-title').innerHTML = data.culture_title;
    const btnSpan = document.querySelector('#toggleHistoryBtn span');
    const hiddenRows = document.querySelectorAll('#historyBody .hidden-row');
    btnSpan.textContent = hiddenRows.length > 0 ? data.show_more : data.show_less;
    document.querySelector('.plan-section h2').innerHTML = data.plan_title;
    document.querySelector('.music-control span').innerHTML = `<i class="fas fa-headphones"></i> ${data.music}`;
  }

  document.querySelectorAll('.lang-switch span').forEach(span => {
    span.addEventListener('click', () => applyLanguage(span.dataset.lang));
  });

  const lineNames = ['1号线·小环线','2号线·海线','3号线·换乘线','4号线·北线','5号线·山线','6号线·中线','7号线·快线','8号线·西南线','9号线·大环线','10号线·东线','11号线·西线','12号线·高架线','13号线·远郊线','14号线·南线'];
  const grid = document.getElementById('lineGrid');
  for (let i=1; i<=14; i++) {
    const card = document.createElement('a'); card.className = 'line-card';
    const isNotOpen = (i === 11 || i === 12 || i === 13);
    if (!isNotOpen) { card.href = `line_detail.html?line=${i}`; card.target = '_blank'; }
    else { card.href = 'javascript:void(0)'; card.addEventListener('click', (e) => { e.preventDefault(); alert(i18nData[currentLang]?.not_open); }); }
    const badge = document.createElement('div'); badge.className = 'line-badge';
    badge.style.backgroundImage = `url('./pictures/lines/line ${i}.png')`;
    card.appendChild(badge);
    const nameP = document.createElement('div'); nameP.className = 'line-name'; 
    nameP.textContent = `${i}号线` + (isNotOpen ? '（暂未开通）' : '');
    const descP = document.createElement('div'); descP.className = 'line-desc'; descP.textContent = lineNames[i-1].split('·')[1] || '动脉';
    card.appendChild(nameP); card.appendChild(descP);
    grid.appendChild(card);
  }

  const historyEvents = [
    ['2022.4-6','1号线一期','科技城→望天阁'],['2022.6-7','1号线二期（蘑孤支线）','蘑孤→科技城'],['2022.7-9','5号线一期','科技城→太和町'],['2022.9-10','2号线一期','科技城→尽道'],['2022.9','2号线支线','涤尘湾→业水'],['2022.10-12','7号线一期','尽道→明王府'],
    ['2023.1-2','1号线三期','蘑孤→望天阁'],['2023.1-4','4号线','伟饯→叶卡加尔'],['2023.4-6','7号线二期','蘑孤→尽道'],['2023.6-9','5号线二期','科技城→千锥城'],['2023.9-11','7号线三期','蘑孤→汨罗镇'],['2023.11','2号线支线','"业水"站改名"邺水"'],
    ['2023.11-2024.4','6号线一期','勇者地牢→夏苏村'],['2024.4-6','6号线二期','夏苏村→垂星野'],['2024.6-9','8号线一期','撷菌→海神宫'],['2024.9-10','8号线二期','撷菌→灰河'],['2024.10','8号线支线','灰河→清明宫'],['2024.10-12','8号线三期','灰河→阳关'],
    ['2024.12','8号线','"海神宫"站改名"跃鱼庭"'],['2024.12','14号线一期','五汇路→异界关隘'],['2025.1-2','9号线南段','南洋大道西→南洋大道东'],['2025.2-3','9号线东段','南洋大道东→鲤池'],['2025.3-4','9号线西段','南阳大道西→半亩麦田'],['2025.4-6','9号线北段','半亩麦田→拂晓'],
    ['2025.6-7','3号线一期','极界→风白花园'],['2025.7-8','3号线二期','无度湾→极界'],['2025.8','5号线改线','新增站点"蘑孤"'],['2025.8','9号线','"朱家榜"更名"世纪仓储"，"梁家贩"更名"朱家榜"'],
    ['2025.9','4号线北延线','叶卡加尔→如初'],['2025.9-2026.1','10号线','T2航站楼→灵兮宗'],['2026.1-3','14号线二期','万枢邸→五汇路'],['2026.3-4','14号线三期','异界关隘→崇明岛']
  ];
  const tbody = document.getElementById('historyBody');
  let isExpanded = false;
  function renderHistory(showAll = false) {
    tbody.innerHTML = '';
    historyEvents.forEach((row, idx) => {
      const tr = document.createElement('tr');
      if (!showAll && idx >= 6) tr.classList.add('hidden-row');
      row.forEach(cell => { const td = document.createElement('td'); td.textContent = cell; tr.appendChild(td); });
      tbody.appendChild(tr);
    });
    isExpanded = showAll;
    updateToggleButton();
  }
  function updateToggleButton() {
    const btn = document.getElementById('toggleHistoryBtn');
    const span = btn.querySelector('span');
    const icon = btn.querySelector('i');
    const data = i18nData[currentLang] || i18nData['zh-Hans'];
    const hiddenRows = document.querySelectorAll('#historyBody .hidden-row');
    span.textContent = hiddenRows.length > 0 ? data.show_more : data.show_less;
    icon.className = hiddenRows.length > 0 ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
  }
  renderHistory(false);
  document.getElementById('toggleHistoryBtn').addEventListener('click', function() {
    const hidden = document.querySelectorAll('#historyBody .hidden-row');
    if (hidden.length > 0) {
      hidden.forEach(r => r.classList.remove('hidden-row'));
      isExpanded = true;
    } else {
      renderHistory(false);
    }
    updateToggleButton();
  });

  const cultureAll = [
   { img: './pictures/sceneries/ATRI学校.png', lineColor: '#a43034', lineText: '1号线', station: '涓生站', spot: 'ATRI学校' },
      { img: './pictures/sceneries/苏州园林.png', lineColor: '#a43034', lineText: '1号线', station: '芜芷站', spot: '苏州园林' },
      { img: './pictures/sceneries/夏莱.png', lineColor: '#a43034', lineText: '1号线/8号线支线', station: '地铁公司站', spot: '夏莱' },
      { img: './pictures/sceneries/埃菲尔铁塔.png', lineColor: '#ec9cbb', lineText: '2号线/2号线支线/4号线', station: '涤尘湾站', spot: '埃菲尔铁塔' },
      { img: './pictures/sceneries/罗比火山.png', lineColor: '#a6d30b', lineText: '4号线', station: '罗比火山东麓站', spot: '罗比火山' },
      { img: './pictures/sceneries/滕王阁.png', lineColor: '#a6d30b', lineText: '4号线', station: '稀竹原站', spot: '滕王阁' },
      { img: './pictures/sceneries/灯塔.png', lineColor: '#a6d30b', lineText: '4号线', station: '文德斯灯塔站', spot: '灯塔' },
      { img: './pictures/sceneries/城市公园.png', lineColor: '#f6d300', lineText: '5号线', station: '天池瀑站', spot: '城市公园' },
      { img: './pictures/sceneries/问天坛.png', lineColor: '#f6d300', lineText: '5号线', station: '问天坛站', spot: '问天坛' },
      { img: './pictures/sceneries/稻花海.png', lineColor: '#007128', lineText: '6号线', station: '稻花海站', spot: '稻花海' },
      { img: './pictures/sceneries/群玉阁.png', lineColor: '#007128', lineText: '6号线', station: '白汀洲站', spot: '群玉阁' },
      { img: './pictures/sceneries/樱花庄园.png', lineColor: '#007128', lineText: '6号线', station: '樱花村站', spot: '樱花庄园' },
      { img: './pictures/sceneries/海上别墅.png', lineColor: '#00a3e9', lineText: '7号线/9号线', station: '琼索斯海原站', spot: '海上别墅' },
      { img: './pictures/sceneries/飞船.png', lineColor: '#eb7c16', lineText: '8号线', station: '広肃站', spot: '飞船' },
      { img: './pictures/sceneries/世纪仓储.png', lineColor: '#469c7f', lineText: '9号线', station: '世纪仓储站', spot: '世纪仓储' },
      { img: './pictures/sceneries/樱羽艾玛fumo.png', lineColor: '#9dabaa', lineText: '3号线/10号线', station: '长泉镇站', spot: '樱羽艾玛fumo' },
      { img: './pictures/sceneries/仙人掌塔.png', lineColor: '#c24c6d', lineText: '14号线', station: '仙人掌种植园站', spot: '仙人掌塔' },
  ];
  function shufflePick(arr, n) { const a = [...arr]; for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a.slice(0,n); }
  const picked = shufflePick(cultureAll, 6);
  const cultureGrid = document.getElementById('cultureGrid');
  picked.forEach(item => {
    const card = document.createElement('div'); card.className = 'culture-card';
    const imgDiv = document.createElement('div'); imgDiv.className = 'culture-img'; 
    imgDiv.style.backgroundImage = `url('${item.img}')`;
    const badge = document.createElement('span'); badge.className = 'culture-line-badge';
    badge.style.borderLeftColor = item.lineColor;
    badge.innerHTML = `<i class="fas fa-subway"></i> ${item.lineText}`;
    imgDiv.appendChild(badge);
    const info = document.createElement('div'); info.className = 'culture-info';
    info.innerHTML = `<h4>${item.spot}</h4><div class="culture-meta"><span><i class="fas fa-map-pin"></i> ${item.station}</span><span>${item.lineText}</span></div>`;
    card.appendChild(imgDiv); card.appendChild(info);
    cultureGrid.appendChild(card);
  });

  const mapDiv = document.getElementById('mapImage');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  let currentScale = 1;
  let isDragging = false;
  let startX, startY, scrollLeft, scrollTop;
  
  mapDiv.addEventListener('click', () => {
    lightbox.style.display = 'flex'; 
    lightboxImg.src = './pictures/map/map.png';
    currentScale = 1; 
    lightboxImg.style.transform = `scale(${currentScale})`; 
    document.getElementById('zoomLevel').textContent = '100%';
    lightbox.scrollLeft = (lightbox.scrollWidth - lightbox.clientWidth) / 2;
    lightbox.scrollTop = (lightbox.scrollHeight - lightbox.clientHeight) / 2;
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      return;
    }
    if (e.target.closest('.lightbox-controls')) return;
    if (currentScale < 5) {
      currentScale = Math.min(5, currentScale + 0.5);
      lightboxImg.style.transform = `scale(${currentScale})`;
      document.getElementById('zoomLevel').textContent = Math.round(currentScale * 100) + '%';
    }
  });
  
  lightbox.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    lightbox.style.display = 'none';
  });
  
  lightbox.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (e.target === lightboxImg || e.target.closest('.lightbox-controls')) return;
    isDragging = true;
    lightbox.classList.add('dragging');
    startX = e.pageX - lightbox.offsetLeft;
    startY = e.pageY - lightbox.offsetTop;
    scrollLeft = lightbox.scrollLeft;
    scrollTop = lightbox.scrollTop;
    e.preventDefault();
  });
  
  lightbox.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - lightbox.offsetLeft;
    const y = e.pageY - lightbox.offsetTop;
    lightbox.scrollLeft = scrollLeft - (x - startX);
    lightbox.scrollTop = scrollTop - (y - startY);
  });
  
  lightbox.addEventListener('mouseup', () => { isDragging = false; lightbox.classList.remove('dragging'); });
  lightbox.addEventListener('mouseleave', () => { isDragging = false; lightbox.classList.remove('dragging'); });
  
  document.getElementById('zoomIn').addEventListener('click', (e) => { 
    e.stopPropagation(); 
    if(currentScale < 5) { 
      currentScale = Math.min(5, currentScale + 0.5); 
      lightboxImg.style.transform = `scale(${currentScale})`; 
      document.getElementById('zoomLevel').textContent = Math.round(currentScale*100) + '%'; 
    } 
  });
  
  document.getElementById('zoomOut').addEventListener('click', (e) => { 
    e.stopPropagation(); 
    if(currentScale > 1) { 
      currentScale = Math.max(1, currentScale - 0.5); 
      lightboxImg.style.transform = `scale(${currentScale})`; 
      document.getElementById('zoomLevel').textContent = Math.round(currentScale*100) + '%'; 
    } 
  });

  const bgMusic = document.getElementById('bgMusic'); 
  bgMusic.volume = 0.3;
  bgMusic.play().catch(e => console.log('自动播放被浏览器限制，需用户交互'));
  
  const btn = document.getElementById('musicToggle');
  btn.addEventListener('click', ()=>{
    if(bgMusic.paused){ 
      bgMusic.play().catch(e=>console.log); 
      btn.innerHTML='<i class="fas fa-pause"></i>'; 
    } else { 
      bgMusic.pause(); 
      btn.innerHTML='<i class="fas fa-play"></i>'; 
    }
  });

  applyLanguage('zh-Hans');
})();