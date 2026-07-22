
const dragons = [{"name": "ゼフィロス", "rarity": "Epic", "role": "physical", "ability": "名射手", "effect": "スキル命中率×1.3", "star": "★5", "hp": 1094, "atk": 1186, "def": 821, "mag": 1094, "res": 821, "spd": 1001, "grade": "confirmed"}, {"name": "ダークニクス", "rarity": "Legendary", "role": "magic", "ability": "無欠", "effect": "被ダメージ後、状態異常・状態変化・能力値変化を受けない", "star": "★5", "hp": 1168, "atk": 1358, "def": 1168, "mag": 1646, "res": 1358, "spd": 1071, "grade": "confirmed"}, {"name": "トドルムトム", "rarity": "Epic", "role": "support", "ability": "浄化", "effect": "交代時に状態異常を解除", "star": "★5", "hp": 1210, "atk": 1254, "def": 927, "mag": 1254, "res": 954, "spd": 965, "grade": "confirmed"}, {"name": "タイフーンドラゴン", "rarity": "Epic", "role": "defense", "ability": "絶対気流", "effect": "戦闘中に天候効果を受けない", "star": "★5", "hp": 1026, "atk": 1151, "def": 1119, "mag": 846, "res": 933, "spd": 672, "grade": "confirmed"}, {"name": "リーフドラゴン", "rarity": "Epic", "role": "magic", "ability": "余裕", "effect": "暗闇の影響を受けない", "star": "★5", "hp": 761, "atk": 805, "def": 761, "mag": 1399, "res": 805, "spd": 1214, "grade": "confirmed"}, {"name": "氷河古龍", "rarity": "Legendary", "role": "magic", "ability": "深海の力", "effect": "HPが3分の1以下のとき水属性スキル威力×1.5", "star": "★1相当", "hp": 1096, "atk": 1081, "def": 1096, "mag": 1166, "res": 1121, "spd": 991, "grade": "pending"}];

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
      <article class="dragon-card">
        <div class="title-row"><h3>${d.name}</h3><span class="pill ${d.rarity.toLowerCase()}">${d.rarity}</span><span class="status ${d.grade === "confirmed" ? "confirmed-label" : "pending-label"}">${d.grade === "confirmed" ? "実測" : "検証中"}</span></div>
        <p><strong>${d.ability}</strong>｜${d.effect}</p>
        <div class="stats">
          <span>${d.star}<b>育成段階</b></span><span>HP<b>${d.hp}</b></span><span>攻撃<b>${d.atk}</b></span><span>防御<b>${d.def}</b></span><span>魔法<b>${d.mag}</b></span><span>抵抗<b>${d.res}</b></span><span>速度<b>${d.spd}</b></span>
        </div>
      </article>`).join("");
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
