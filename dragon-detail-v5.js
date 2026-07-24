(()=>{
  const dragons=window.PROJECT_D_DRAGONS||[];
  const page=(location.pathname.split('/').pop()||'').toLowerCase();
  const local=u=>{if(!u)return '';try{return new URL(u,location.href).pathname.split('/').pop().toLowerCase();}catch{return u.toLowerCase();}};
  const d=dragons.find(x=>local(x.url)===page); if(!d)return;
  const hero=document.querySelector('.page-hero');
  if(hero&&!hero.querySelector('.dragon-portrait')&&d.thumb&&d.thumb!=='thumb-placeholder.png'){
    const img=document.createElement('img');img.className='dragon-portrait dragon-portrait--thumb detail-shared-thumb';img.src=d.thumb;img.alt=d.name;hero.prepend(img);
  }
  if(d.dataStatus==='partial'){
    const main=document.querySelector('main');if(main&&!main.querySelector('.data-audit-note')){const note=document.createElement('div');note.className='notice hypothesis-box data-audit-note';note.innerHTML='<span>データ確認中</span>画像またはアビリティ効果の一部が未確認です。確認できた情報のみ掲載しています。';main.append(note);}
  }
})();
