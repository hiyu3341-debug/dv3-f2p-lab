const dragons = [{"name":"エイリアンドラゴン","rarity":"Epic","role":"physical","ability":"空中浮揚","effect":"設置スキルを受けず、地属性攻撃を1回無効化","star":"★5 Lv.50","hp":881,"atk":1399,"def":854,"mag":854,"res":1312,"spd":990,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/alien.html","image":"alien_lv50.jpg"},{"name":"ルネラ","rarity":"Epic","role":"defense","ability":"無関心","effect":"圧倒状態にならない","star":"★5 Lv.50","hp":895,"atk":1440,"def":1217,"mag":852,"res":944,"spd":944,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/lunera.html","image":"lunera_lv50.jpg"},{"name":"シャムドラゴン","rarity":"Epic","role":"support","ability":"忍耐","effect":"状態異常中、自身の防御能力値×1.5","star":"★5 Lv.50","hp":1141,"atk":1168,"def":824,"mag":961,"res":824,"spd":824,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/sham.html","image":"sham_lv50.jpg"},{"name":"トドルトムトム","rarity":"Epic","role":"support","ability":"浄化","effect":"交代時に状態異常を解除","star":"★5 Lv.50","hp":1210,"atk":1254,"def":927,"mag":1254,"res":954,"spd":965,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/todorutomutomu.html","image":"todorutomutomu_lv50.jpg"},{"name":"リーフドラゴン","rarity":"Epic","role":"magic","ability":"余裕","effect":"暗闇状態にならない","star":"★5 Lv.50","hp":761,"atk":805,"def":761,"mag":1399,"res":805,"spd":1214,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/leaf.html","image":"leaf_lv50.jpg"},{"name":"スワンプドラゴン","rarity":"Epic","role":"defense","ability":"束縛","effect":"敵のドラゴン交代行動を封じる","star":"★5 Lv.50","hp":1249,"atk":791,"def":1063,"mag":791,"res":1063,"spd":791,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/swamp.html","image":"swamp_lv50.jpg"},{"name":"ゼフィロス","rarity":"Epic","role":"physical","ability":"名射手","effect":"スキル命中率×1.3","star":"★5","hp":1094,"atk":1186,"def":821,"mag":1094,"res":821,"spd":1001,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/zephyros.html","image":"zephyros_lv50.jpg"},{"name":"ファイアーテイル","rarity":"Epic","role":"physical","ability":"火炎闘魂","effect":"HP1/3以下で炎属性スキル威力×1.5","star":"★5","hp":1202,"atk":1322,"def":793,"mag":793,"res":1114,"spd":793,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/firetail.html","image":"firetail_lv50.jpg"},{"name":"ダークニクス","rarity":"Legendary","role":"magic","ability":"無欠","effect":"被ダメージ後、状態異常・状態変化・能力値変化を受けない","star":"★5","hp":1168,"atk":1358,"def":1168,"mag":1646,"res":1358,"spd":1071,"grade":"confirmed"},{"name":"氷河古龍","rarity":"Legendary","role":"magic","ability":"深海の力","effect":"HPが3分の1以下のとき水属性スキル威力×1.5","star":"★1 Lv.35","hp":939,"atk":926,"def":939,"mag":998,"res":960,"spd":849,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/hyogakoryu.html","image":"hyogakoryu_lv35.jpg"},{"name":"ピエロドラゴン","rarity":"Epic","role":"physical","ability":"忍耐","effect":"状態異常中、自身の防御能力値×1.5","star":"★5 Lv.50","hp":2071,"atk":644,"def":872,"mag":644,"res":872,"spd":644,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/pierrot.html","image":"pierrot_lv50.jpg"},{"name":"玄武","rarity":"Epic","role":"physical","ability":"にわか雨","effect":"登場時、天気を5ターン雨状態に変更","star":"★5 Lv.50","hp":940,"atk":1213,"def":1033,"mag":853,"res":853,"spd":1125,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/genbu.html","image":"genbu_lv50.jpg"},{"name":"タイフーンドラゴン","rarity":"Epic","role":"defense","ability":"絶対気流","effect":"戦闘中、天気の効果を受けない","star":"★5 Lv.50","hp":1026,"atk":1151,"def":1119,"mag":846,"res":933,"spd":672,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/typhoon.html","image":"typhoon_lv50.jpg"},{"name":"ラキオン","rarity":"Epic","role":"physical","ability":"同化","effect":"被撃時、主属性が被撃したスキルの属性に変更される。","star":"★5 Lv.50","hp":996,"atk":1039,"def":952,"mag":903,"res":996,"spd":1132,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/lakion.html","image":"lakion-status.jpg"},{"name":"シャープテイル","rarity":"Epic","role":"defense","ability":"鋭い鱗","effect":"被撃時、50%の確率で相手の最大体力の1/8分のダメージを与える。","star":"★5 Lv.50","hp":839,"atk":1198,"def":1836,"mag":746,"res":746,"spd":653,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/sharptail.html","image":"sharptail-status.jpg"},{"name":"アップルチーク","rarity":"Epic","role":"magic","ability":"森の怒り","effect":"体力が1/3以下の時、風属性スキルのダメージが1.5倍で適用される。","star":"★5 Lv.50","hp":978,"atk":1000,"def":1005,"mag":1163,"res":1163,"spd":978,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/applecheek.html","image":"applecheek-status.jpg"},{"name":"シャーゴン","rarity":"Epic","role":"physical","ability":"台風","effect":"雨が降る天気で自身の速度能力値が2倍増加する。","star":"★5 Lv.50","hp":1291,"atk":1220,"def":790,"mag":926,"res":882,"spd":910,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/shargon.html","image":"shargon-status.jpg"},{"name":"フェニックスドラゴン","rarity":"Epic","role":"magic","ability":"炎増幅","effect":"炎属性スキルで被弾時、1回スキルを無効にし、自身が使用する炎属性スキルのダメージが1.5倍で適用される。この効果は登場するたびに初期化される。","star":"★5 Lv.50","hp":874,"atk":928,"def":874,"mag":1070,"res":933,"spd":1070,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/phoenix-dragon.html","image":"phoenix-dragon-status.jpg"},{"name":"イグニス","rarity":"Epic","role":"physical","ability":"炎増幅","effect":"炎属性スキルで被弾時、1回スキルを無効にし、自身が使用する炎属性スキルのダメージが1.5倍で適用される。この効果は登場するたびに初期化される。","star":"★5 Lv.50","hp":1222,"atk":1538,"def":770,"mag":595,"res":770,"spd":1130,"grade":"confirmed","url":"https://hiyu3341-debug.github.io/dv3-f2p-lab/ignis.html","image":"ignis-status.jpg"}];

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
  function renderDragons() {
    const q = searchInput.value.trim().toLowerCase();
    const rarity = rarityFilter.value;
    const role = roleFilter.value;
    const filtered = dragons.filter(d =>
      (rarity === "all" || d.rarity === rarity) &&
      (role === "all" || d.role === role) &&
      (`${d.name} ${d.ability} ${d.effect}`.toLowerCase().includes(q))
    );
    grid.innerHTML = filtered.map(d => `
      <a class="dragon-card dragon-card-link" href="${d.url || '#'}">
        ${d.image ? `<img src="${d.image}" alt="${d.name}" style="width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:10px;margin-bottom:12px;background:#f8f0df">` : ""}
        <div class="title-row"><h3>${d.name}</h3><span class="pill ${d.rarity.toLowerCase()}">${d.rarity}</span><span class="status ${d.grade === "confirmed" ? "confirmed-label" : "pending-label"}">${d.grade === "confirmed" ? "実測" : "検証中"}</span></div>
        <p><strong>${d.ability}</strong>｜${d.effect}</p>
        <div class="stats">
          <span>${d.star}<b>育成段階</b></span><span>HP<b>${d.hp}</b></span><span>攻撃<b>${d.atk}</b></span><span>防御<b>${d.def}</b></span><span>魔法<b>${d.mag}</b></span><span>抵抗<b>${d.res}</b></span><span>速度<b>${d.spd}</b></span>
        </div>
        ${d.url ? `<span class="dragon-detail-cta">個別ページを見る →</span>` : `<span class="dragon-detail-cta disabled">個別ページ準備中</span>`}
      </a>`).join("");
    noResults.hidden = filtered.length > 0;
  }
  [searchInput, rarityFilter, roleFilter].forEach(el => el.addEventListener("input", renderDragons));
  renderDragons();
}

const calcPity = document.getElementById("calcPity");
if (calcPity) {
  calcPity.addEventListener("click", () => {
    const p = Math.min(200, Math.max(0, Number(document.getElementById("pityInput").value) || 0));
    const pulls = 200 - p;
    document.getElementById("pityResult").textContent = `200ポイントまで残り${pulls}連・${(pulls*300).toLocaleString()}ダイヤ`;
  });
}
const calcGrowth = document.getElementById("calcGrowth");
if (calcGrowth) {
  calcGrowth.addEventListener("click", () => {
    const stat = Math.max(1, Number(document.getElementById("statInput").value) || 1);
    const rate = Number(document.getElementById("growthType").value);
    document.getElementById("growthResult").textContent = `参考値：${Math.round(stat*rate).toLocaleString()}`;
  });
}
