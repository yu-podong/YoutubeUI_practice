const title = document.querySelector('.info .titleAndButton .video_title');
const moreBtn = document.querySelector('.info .titleAndButton .moreBtn');

moreBtn.addEventListener('click', ()=>{
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
})