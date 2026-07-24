(()=>{
  const core=window.PROJECT_D_CORE; const dragons=core?core.all():(window.PROJECT_D_DRAGONS||[]);
  const fmt=n=>Number(n||0).toLocaleString('ja-JP');
  const localUrl=url=>{if(!url)return '#';try{return new URL(url,location.href).pathname.split('/').pop()||'#';}catch{return url;}};
  const esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));
  const count=document.getElementById('rankingDragonCount'); if(count)count.textContent=dragons.length;
  const table=document.getElementById('overallRankingTable');
  if(table){
    const body=table.tBodies[0]||table.createTBody();
    const sorted=[...dragons].sort((a,b)=>(b.total||0)-(a.total||0)||b.hp-a.hp||a.name.localeCompare(b.name,'ja'));
    body.innerHTML=sorted.map((d,i)=>`<tr><td>${i+1}</td><td><a href="${esc(localUrl(d.url))}">${esc(d.name)}</a></td><td>${esc(d.rarity)}</td><td>${fmt(d.total)}</td><td>${fmt(d.hp)}</td><td>${fmt(d.atk)}</td><td>${fmt(d.def)}</td><td>${fmt(d.mag)}</td><td>${fmt(d.res)}</td><td>${fmt(d.spd)}</td></tr>`).join('');
  }
  const grid=document.getElementById('abilityTop5Grid');
  if(grid){
    const metrics=[['HP','hp'],['攻撃','atk'],['防御','def'],['魔力','mag'],['抵抗','res'],['速度','spd']];
    grid.innerHTML=metrics.map(([label,key])=>{const top=[...dragons].sort((a,b)=>b[key]-a[key]||a.name.localeCompare(b.name,'ja')).slice(0,5);return `<article class="detail-card"><h3>${label} TOP5</h3><ol class="ranking-mini">${top.map(d=>`<li><span><a href="${esc(localUrl(d.url))}">${esc(d.name)}</a></span><strong>${fmt(d[key])}</strong></li>`).join('')}</ol></article>`;}).join('');
  }
  const b=document.getElementById('menuButton'),n=document.getElementById('mainNav');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));
})();
