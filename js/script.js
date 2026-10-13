(function (){ // this fuction is called IIFE ( immed invokedd function expression)
const track = document.querySelector('.slideContent');
const prev  = document.getElementById('arrowL');
const next  = document.getElementById('arrowR');
const card  = track.querySelector('.proSli'); //element b class prosli == .getElementByclassName
const gap  = parseFloat(getComputedStyle(track).columnGap) || 0;
const step = () => (card.offsetWidth + gap) * 2;
next.addEventListener('click', () => track.scrollBy({ left:  step(), behavior: 'smooth' }));
prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
track.addEventListener('scroll', update);
window.addEventListener('resize', update);
update();
})();