const dragons = [{"name":"エイリアンドラゴン","rarity":"Epic","role":"physical","ability":"空中浮揚","effect":"設置スキルを受けず、地属性攻撃を1回無効化","star":"★5 Lv.50","hp":881,"atk":1399,"def":854,"mag":854,"res":1312,"spd":990,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/alien.html","image":"alien_lv50.jpg","thumb":"dragon-thumbs/alien.jpg"},{"name":"ルネラ","rarity":"Epic","role":"defense","ability":"無関心","effect":"圧倒状態にならない","star":"★5 Lv.50","hp":895,"atk":1440,"def":1217,"mag":852,"res":944,"spd":944,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/lunera.html","image":"lunera_lv50.jpg","thumb":"dragon-thumbs/lunera.jpg"},{"name":"シャムドラゴン","rarity":"Epic","role":"support","ability":"忍耐","effect":"状態異常中、自身の防御能力値×1.5","star":"★5 Lv.50","hp":1141,"atk":1168,"def":824,"mag":961,"res":824,"spd":824,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/sham.html","image":"sham_lv50.jpg","thumb":"dragon-thumbs/sham.jpg"},{"name":"トドルトムトム","rarity":"Epic","role":"support","ability":"浄化","effect":"交代時に状態異常を解除","star":"★5 Lv.50","hp":1210,"atk":1254,"def":927,"mag":1254,"res":954,"spd":965,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/todorutomutomu.html","image":"todorutomutomu_lv50.jpg","thumb":"dragon-thumbs/todorutomutomu.jpg"},{"name":"リーフドラゴン","rarity":"Epic","role":"magic","ability":"余裕","effect":"暗闇状態にならない","star":"★5 Lv.50","hp":761,"atk":805,"def":761,"mag":1399,"res":805,"spd":1214,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/leaf.html","image":"leaf_lv50.jpg","thumb":"dragon-thumbs/leaf.jpg"},{"name":"スワンプドラゴン","rarity":"Epic","role":"defense","ability":"束縛","effect":"敵のドラゴン交代行動を封じる","star":"★5 Lv.50","hp":1249,"atk":791,"def":1063,"mag":791,"res":1063,"spd":791,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/swamp.html","image":"swamp_lv50.jpg","thumb":"dragon-thumbs/swamp.jpg"},{"name":"ゼフィロス","rarity":"Epic","role":"physical","ability":"名射手","effect":"スキル命中率×1.3","star":"★5","hp":1094,"atk":1186,"def":821,"mag":1094,"res":821,"spd":1001,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/zephyros.html","image":"zephyros_lv50.jpg","thumb":"dragon-thumbs/zephyros.jpg"},{"name":"ファイアーテイル","rarity":"Epic","role":"physical","ability":"火炎闘魂","effect":"HP1/3以下で炎属性スキル威力×1.5","star":"★5","hp":1202,"atk":1322,"def":793,"mag":793,"res":1114,"spd":793,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/firetail.html","image":"firetail_lv50.jpg","thumb":"dragon-thumbs/firetail.jpg"},{"name":"ダークニクス","rarity":"Legendary","role":"magic","ability":"無欠","effect":"被ダメージ後、状態異常・状態変化・能力値変化を受けない","star":"★5","hp":1168,"atk":1358,"def":1168,"mag":1646,"res":1358,"spd":1071,"grade":"confirmed"},{"name":"氷河古龍","rarity":"Legendary","role":"magic","ability":"深海の力","effect":"HPが3分の1以下のとき水属性スキル威力×1.5","star":"★1 Lv.35","hp":939,"atk":926,"def":939,"mag":998,"res":960,"spd":849,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/hyogakoryu.html","image":"hyogakoryu_lv35.jpg","thumb":"dragon-thumbs/hyogakoryu_lv35.jpg"},{"name":"ピエロドラゴン","rarity":"Epic","role":"physical","ability":"忍耐","effect":"状態異常中、自身の防御能力値×1.5","star":"★5 Lv.50","hp":2071,"atk":644,"def":872,"mag":644,"res":872,"spd":644,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/pierrot.html","image":"pierrot_lv50.jpg","thumb":"dragon-thumbs/pierrot.jpg"},{"name":"玄武","rarity":"Epic","role":"physical","ability":"にわか雨","effect":"登場時、天気を5ターン雨状態に変更","star":"★5 Lv.50","hp":940,"atk":1213,"def":1033,"mag":853,"res":853,"spd":1125,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/genbu.html","image":"genbu_lv50.jpg","thumb":"dragon-thumbs/genbu.jpg"},{"name":"タイフーンドラゴン","rarity":"Epic","role":"defense","ability":"絶対気流","effect":"戦闘中、天気の効果を受けない","star":"★5 Lv.50","hp":1026,"atk":1151,"def":1119,"mag":846,"res":933,"spd":672,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/typhoon.html","image":"typhoon_lv50.jpg","thumb":"dragon-thumbs/typhoon.jpg"},{"name":"ラキオン","rarity":"Epic","role":"physical","ability":"同化","effect":"被撃時、主属性が被撃したスキルの属性に変更される。","star":"★5 Lv.50","hp":996,"atk":1039,"def":952,"mag":903,"res":996,"spd":1132,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/lakion.html","image":"lakion-status.jpg","thumb":"dragon-thumbs/lakion.jpg"},{"name":"シャープテイル","rarity":"Epic","role":"defense","ability":"鋭い鱗","effect":"被撃時、50%の確率で相手の最大体力の1/8分のダメージを与える。","star":"★5 Lv.50","hp":839,"atk":1198,"def":1836,"mag":746,"res":746,"spd":653,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/sharptail.html","image":"sharptail-status.jpg","thumb":"dragon-thumbs/sharptail.jpg"},{"name":"アップルチーク","rarity":"Epic","role":"magic","ability":"森の怒り","effect":"体力が1/3以下の時、風属性スキルのダメージが1.5倍で適用される。","star":"★5 Lv.50","hp":978,"atk":1000,"def":1005,"mag":1163,"res":1163,"spd":978,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/applecheek.html","image":"applecheek-status.jpg","thumb":"dragon-thumbs/applecheek.jpg"},{"name":"シャーゴン","rarity":"Epic","role":"physical","ability":"台風","effect":"雨が降る天気で自身の速度能力値が2倍増加する。","star":"★5 Lv.50","hp":1291,"atk":1220,"def":790,"mag":926,"res":882,"spd":910,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/shargon.html","image":"shargon-status.jpg","thumb":"dragon-thumbs/shargon.jpg"},{"name":"フェニックスドラゴン","rarity":"Epic","role":"magic","ability":"炎増幅","effect":"炎属性スキルで被弾時、1回スキルを無効にし、自身が使用する炎属性スキルのダメージが1.5倍で適用される。この効果は登場するたびに初期化される。","star":"★5 Lv.50","hp":874,"atk":928,"def":874,"mag":1070,"res":933,"spd":1070,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/phoenix-dragon.html","image":"phoenix-dragon-status.jpg","thumb":"dragon-thumbs/phoenix-dragon.jpg"},{"name":"イグニス","rarity":"Epic","role":"physical","ability":"炎増幅","effect":"炎属性スキルで被弾時、1回スキルを無効にし、自身が使用する炎属性スキルのダメージが1.5倍で適用される。この効果は登場するたびに初期化される。","star":"★5 Lv.50","hp":1222,"atk":1538,"def":770,"mag":595,"res":770,"spd":1130,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/ignis.html","image":"ignis-status.jpg","thumb":"dragon-thumbs/ignis.jpg"},{"name":"ラヴァドラゴン","rarity":"Epic","role":"physical","ability":"狂乱","effect":"自身に状態異常が適用された状態で攻撃する時、ダメージが1.5倍で適用される。","star":"★5 Lv.50","hp":814,"atk":1086,"def":743,"mag":1042,"res":906,"spd":1157,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/lava-dragon.html","image":"lava-dragon-status.jpg","thumb":"dragon-thumbs/lava-dragon.jpg"},{"name":"タロス","rarity":"Epic","role":"magic","ability":"耐性","effect":"侵食状態にならない。","star":"★5 Lv.50","hp":1044,"atk":1153,"def":869,"mag":1223,"res":869,"spd":858,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/talos.html","image":"talos-status.jpg","thumb":"dragon-thumbs/talos.jpg"},{"name":"ラムゴン","rarity":"Rare","role":"physical","ability":"再生","effect":"毎ターン終了時、状態異常を1/3の確率で回復する。","star":"★5 Lv.50","hp":720,"atk":1153,"def":808,"mag":720,"res":720,"spd":1065,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/ramgon.html","image":"ramgon-status.jpg","thumb":"dragon-thumbs/ramgon.jpg"},{"name":"ノウス","rarity":"Rare","role":"physical","ability":"柔軟な体","effect":"麻痺状態にならない。","star":"★5 Lv.50","hp":838,"atk":952,"def":823,"mag":777,"res":823,"spd":720,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/nous.html","image":"nous-status.jpg","thumb":"dragon-thumbs/nous.jpg"},{"name":"イリオス","rarity":"Rare","role":"physical","ability":"火種","effect":"被撃時、25%の確率で相手を火傷状態にする。炎属性ドラゴンは火傷状態が適用されない。","star":"★5 Lv.50","hp":1157,"atk":987,"def":852,"mag":565,"res":852,"spd":565,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/ilios.html","image":"ilios-status.jpg","thumb":"dragon-thumbs/ilios.jpg"},{"name":"ブルーサンダー","rarity":"Rare","role":"physical","ability":"絶対気流","effect":"戦闘中、天気の効果が適用されない。","star":"★5 Lv.50","hp":726,"atk":901,"def":773,"mag":814,"res":773,"spd":943,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/blue-thunder.html","image":"blue-thunder-status.jpg","thumb":"dragon-thumbs/blue-thunder.jpg"},{"name":"ロックドラゴン","rarity":"Rare","role":"physical","ability":"耐熱性外皮","effect":"火傷状態にならない。","star":"★5 Lv.50","hp":764,"atk":1238,"def":764,"mag":764,"res":764,"spd":636,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/rock-dragon.html","image":"rock-dragon-status.jpg","thumb":"dragon-thumbs/rock-dragon.jpg"},{"name":"アイアンドラゴン","rarity":"Rare","role":"physical","ability":"余裕","effect":"暗闇状態にならない。","star":"★5 Lv.50","hp":737,"atk":865,"def":994,"mag":778,"res":906,"spd":650,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/iron-dragon.html","image":"iron-dragon-status.jpg","thumb":"dragon-thumbs/iron-dragon.jpg"},{"name":"ウィンドドラゴン","rarity":"Rare","role":"physical","ability":"柔軟な体","effect":"麻痺状態にならない。","star":"★5 Lv.50","hp":797,"atk":823,"def":782,"mag":823,"res":782,"spd":921,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/wind-dragon.html","image":"wind-dragon-status.jpg","thumb":"dragon-thumbs/wind-dragon.jpg"},{"name":"アクアドラゴン","rarity":"Rare","role":"physical","ability":"台風","effect":"雨が降る天気で自身の速度能力値が2倍増加する。","star":"★5 Lv.50","hp":828,"atk":828,"def":746,"mag":828,"res":746,"spd":952,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/aqua-dragon.html","image":"aqua-dragon-status.jpg","thumb":"dragon-thumbs/aqua-dragon.jpg"},{"name":"ファイヤードラゴン","rarity":"Rare","role":"physical","ability":"冷気抵抗","effect":"クリスタル状態にならない。","star":"★5 Lv.50","hp":820,"atk":1036,"def":691,"mag":995,"res":650,"spd":738,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/fire-dragon.html","image":"fire-dragon-status.jpg","thumb":"dragon-thumbs/fire-dragon.jpg"}];


const roleLabels = {physical:"物理",magic:"魔法",defense:"防御",support:"支援"};
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => mainNav.classList.toggle("open"));
  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));
}

const grid = document.getElementById("dragonGrid");
if (grid) {
  const noResults = document.getElementById("noResults");
  const searchInput = document.getElementById("searchInput");
  const rarityFilter = document.getElementById("rarityFilter");
  const roleFilter = document.getElementById("roleFilter");
  const sortFilter = document.getElementById("sortFilter");
  const resetButton = document.getElementById("resetFilters");
  const resultCount = document.getElementById("resultCount");
  const prevPage = document.getElementById("prevPage");
  const nextPage = document.getElementById("nextPage");
  const pageNumbers = document.getElementById("pageNumbers");
  const pageSizeSelect = document.getElementById("pageSize");
  let currentPage = 1;

  const getFiltered = () => {
    const q = searchInput.value.trim().toLowerCase();
    const rarity = rarityFilter.value;
    const role = roleFilter.value;
    const items = dragons.filter(d =>
      (rarity === "all" || d.rarity === rarity) &&
      (role === "all" || d.role === role) &&
      (`${d.name} ${d.ability} ${d.effect}`.toLowerCase().includes(q))
    );
    const sort = sortFilter.value;
    if (sort === "name") items.sort((a,b) => a.name.localeCompare(b.name,"ja"));
    else if (sort !== "default") items.sort((a,b) => (b[sort] || 0) - (a[sort] || 0));
    return items;
  };

  const cardTemplate = d => `
    <a class="dragon-list-card" href="${d.url || '#'}" aria-label="${d.name}の個別ページを見る">
      <div class="dragon-list-image-wrap">
        ${d.thumb ? `<img class="dragon-list-image" src="${d.thumb}" alt="${d.name}" loading="lazy">` : `<span class="dragon-image-placeholder">NO IMAGE</span>`}
        <span class="dragon-stage">${d.star}</span>
      </div>
      <div class="dragon-list-info">
        <div class="dragon-list-title">
          <h3>${d.name}</h3>
          <span class="pill ${d.rarity.toLowerCase()}">${d.rarity}</span>
          <span class="status ${d.grade === "confirmed" ? "confirmed-label" : "pending-label"}">${d.grade === "confirmed" ? "実測" : "検証中"}</span>
        </div>
        <p class="dragon-ability"><span>${roleLabels[d.role] || d.role}</span><strong>${d.ability}</strong></p>
        <p class="dragon-effect">${d.effect}</p>
        <dl class="dragon-inline-stats">
          <div><dt>HP</dt><dd>${d.hp}</dd></div><div><dt>攻撃</dt><dd>${d.atk}</dd></div><div><dt>防御</dt><dd>${d.def}</dd></div>
          <div><dt>魔法</dt><dd>${d.mag}</dd></div><div><dt>抵抗</dt><dd>${d.res}</dd></div><div><dt>速度</dt><dd>${d.spd}</dd></div>
        </dl>
      </div>
      <span class="dragon-list-arrow" aria-hidden="true">›</span>
    </a>`;

  function renderDragons() {
    const filtered = getFiltered();
    const pageSize = Number(pageSizeSelect.value);
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);
    const start = (currentPage - 1) * pageSize;
    const pageItems = filtered.slice(start, start + pageSize);
    grid.innerHTML = pageItems.map(cardTemplate).join("");
    noResults.hidden = filtered.length > 0;
    resultCount.textContent = filtered.length ? `${filtered.length}体中 ${start + 1}〜${Math.min(start + pageSize, filtered.length)}体を表示` : "0体";
    prevPage.disabled = currentPage <= 1;
    nextPage.disabled = currentPage >= totalPages;
    pageNumbers.innerHTML = Array.from({length: totalPages}, (_,i) => i + 1).map(n => `<button class="page-number${n===currentPage?' active':''}" data-page="${n}" aria-label="${n}ページ目">${n}</button>`).join("");
  }
  [searchInput, rarityFilter, roleFilter, sortFilter, pageSizeSelect].forEach(el => el.addEventListener("input", () => { currentPage = 1; renderDragons(); }));
  resetButton.addEventListener("click", () => { searchInput.value=""; rarityFilter.value="all"; roleFilter.value="all"; sortFilter.value="default"; currentPage=1; renderDragons(); });
  prevPage.addEventListener("click", () => { if(currentPage>1){currentPage--;renderDragons();window.scrollTo({top:grid.offsetTop-90,behavior:"smooth"});} });
  nextPage.addEventListener("click", () => { currentPage++;renderDragons();window.scrollTo({top:grid.offsetTop-90,behavior:"smooth"}); });
  pageNumbers.addEventListener("click", e => { const b=e.target.closest('[data-page]'); if(!b)return; currentPage=Number(b.dataset.page);renderDragons();window.scrollTo({top:grid.offsetTop-90,behavior:"smooth"}); });
  renderDragons();
}

const calcPity = document.getElementById("calcPity");
if (calcPity) calcPity.addEventListener("click", () => { const p=Math.min(200,Math.max(0,Number(document.getElementById("pityInput").value)||0)); const pulls=200-p; document.getElementById("pityResult").textContent=`200ポイントまで残り${pulls}連・${(pulls*300).toLocaleString()}ダイヤ`; });
const calcGrowth = document.getElementById("calcGrowth");
if (calcGrowth) calcGrowth.addEventListener("click", () => { const stat=Math.max(1,Number(document.getElementById("statInput").value)||1); const rate=Number(document.getElementById("growthType").value); document.getElementById("growthResult").textContent=`参考値：${Math.round(stat*rate).toLocaleString()}`; });
