// Project D Ver.6.0
// growth.js

const growthFiles = [
  "data/growth/level.json",
  "data/growth/evolution.json",
  "data/growth/star.json",
  "data/growth/gem.json",
  "data/growth/orb.json"
];

async function loadGrowthData() {
  const result = {};
  for (const file of growthFiles) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(file);
      const json = await res.json();
      result[file] = json;
    } catch (e) {
      console.warn("Load failed:", file, e);
    }
  }
  return result;
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await loadGrowthData();
  console.log("PROJECT D Growth Data", data);

  const status = document.getElementById("growth-status");
  if (status) {
    status.textContent =
      `研究データ ${Object.keys(data).length}/${growthFiles.length} 読み込み完了`;
  }
});
