const core=window.PROJECT_D_CORE;
const dragons=core?core.all():(window.PROJECT_D_DRAGONS||[]);
const roleNames={physical:'物理',magic:'魔法',defense:'防御',support:'支援',unknown:'未確認'};
const list=document.getElementById('dragonList');
const search=document.getElementById('searchInput');
const rarity=document.getElementById('rarityFilter');
const role=document.getElementById('roleFilter');
const attribute=document.getElementById('attributeFilter');
const sort=document.getElementById('sortFilter');
const pageSize=document.getElementById('pageSize');
const reset=document.getElementById('resetFilters');
const noResults=document.getElementById('noResults');
const pagination=document.getElementById('pagination');
let page=1;
const fmt=n=>Number(n||0).toLocaleString('ja-JP');
function escapeHTML(value){return String(value??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function localUrl(url){if(!url)return '';try{return new URL(url,location.href).pathname.split('/').pop()||url;}catch{return url;}}
function filteredDragons(){
 const q=search.value.trim().toLocaleLowerCase('ja');
 let rows=dragons.filter(d=>(rarity.value==='all'||d.rarity===rarity.value)&&(role.value==='all'||d.role===role.value)&&(attribute.value==='all'||String(d.attribute||'未確認').split('・').includes(attribute.value))&&(!q||[d.name,d.attribute,d.ability,d.effect,roleNames[d.role],d.rarity].join(' ').toLocaleLowerCase('ja').includes(q)));
 const key=sort.value;
 if(key==='name')rows.sort((a,b)=>a.name.localeCompare(b.name,'ja'));
 else if(key==='registered')rows.sort((a,b)=>a._registeredIndex-b._registeredIndex);
 else rows.sort((a,b)=>(b[key]||0)-(a[key]||0)||a.totalRank-b.totalRank);
 return rows;
}
function card(d){
 const href=localUrl(d.url)||'#';
 const thumb=d.thumb||'thumb-placeholder.png';
 const rarityClass=`rarity-${String(d.rarity||'').toLowerCase()}`;
 return `<a class="v5-card" href="${escapeHTML(href)}" ${href==='#'?'aria-disabled="true"':''}>
 <div class="v5-thumb${thumb.includes('placeholder')?' is-placeholder':''}"><img src="./${escapeHTML(thumb)}" alt="${escapeHTML(d.name)}" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('is-error')"></div>
 <div class="v5-card-main"><div class="v5-card-head"><h2>${escapeHTML(d.name)}</h2><span class="v5-badge rarity ${rarityClass}">${escapeHTML(d.rarity)}</span>${d.grade==='confirmed'?'<span class="v5-badge measured">実測</span>':''}</div>
 <p class="v5-ability">${escapeHTML(d.attribute)}属性 ｜ ${escapeHTML(roleNames[d.role]||d.role)} ｜ <strong>${escapeHTML(d.ability)}</strong></p><p class="v5-effect">${escapeHTML(d.effect)}</p>
 <div class="v5-score-line"><span><small>総合値</small><strong>${fmt(d.total)}</strong></span><span><small>総合順位</small><strong>${d.totalRank}位</strong></span></div>
 <div class="v5-stats"><div class="v5-stat"><span>HP</span><b>${fmt(d.hp)}</b></div><div class="v5-stat"><span>攻撃</span><b>${fmt(d.atk)}</b></div><div class="v5-stat"><span>防御</span><b>${fmt(d.def)}</b></div><div class="v5-stat"><span>魔法</span><b>${fmt(d.mag)}</b></div><div class="v5-stat"><span>抵抗</span><b>${fmt(d.res)}</b></div><div class="v5-stat"><span>速度</span><b>${fmt(d.spd)}</b></div></div><div class="v5-star">${escapeHTML(d.star)}</div></div><span class="v5-chevron" aria-hidden="true">›</span></a>`;
}
function button(text,target,disabled,label,current=false){return `<button class="v5-page-btn" data-page="${target}" ${disabled?'disabled':''} ${current?'aria-current="page"':''} aria-label="${label}">${text}</button>`;}
function render(){
 const rows=filteredDragons();const size=Number(pageSize.value);const pages=Math.max(1,Math.ceil(rows.length/size));page=Math.min(page,pages);const shown=rows.slice((page-1)*size,page*size);
 list.innerHTML=shown.map(card).join('');noResults.hidden=rows.length!==0;
 document.getElementById('registeredCount').innerHTML=`${dragons.length}<small>体</small>`;
 document.getElementById('measuredCount').innerHTML=`${dragons.filter(d=>d.grade==='confirmed').length}<small>体</small>`;
 document.getElementById('resultSummary').textContent=rows.length?`${rows.length}体中 ${(page-1)*size+1}〜${Math.min(page*size,rows.length)}体を表示`:'0体';
 pagination.innerHTML=pages<=1?'':`${button('‹',page-1,page===1,'前へ')}${Array.from({length:pages},(_,i)=>button(i+1,i+1,false,`${i+1}ページ`,page===i+1)).join('')}${button('›',page+1,page===pages,'次へ')}`;
 pagination.querySelectorAll('button[data-page]').forEach(b=>b.addEventListener('click',()=>{page=Number(b.dataset.page);render();window.scrollTo({top:document.querySelector('.v5-result-line').offsetTop-90,behavior:'smooth'});}));
}
[search,rarity,role,attribute,sort,pageSize].forEach(el=>el.addEventListener(el===search?'input':'change',()=>{page=1;render();}));
reset.addEventListener('click',()=>{search.value='';rarity.value='all';role.value='all';attribute.value='all';sort.value='registered';pageSize.value='20';page=1;render();});
const attributeOrder=['炎','水','風','地','雷','光','闇','鋼','夢','自然','メタル','夜明け','未確認'];
const attributeValues=new Set();dragons.forEach(d=>String(d.attribute||'未確認').split('・').map(v=>v.trim()).filter(Boolean).forEach(v=>attributeValues.add(v)));
attributeOrder.filter(v=>attributeValues.has(v)).concat([...attributeValues].filter(v=>!attributeOrder.includes(v)).sort((a,b)=>a.localeCompare(b,'ja'))).forEach(v=>{const option=document.createElement('option');option.value=v;option.textContent=v==='未確認'?'未確認':`${v}属性`;attribute.appendChild(option);});
const menuButton=document.getElementById('menuButton'),mainNav=document.getElementById('mainNav');if(menuButton&&mainNav){menuButton.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}
render();
