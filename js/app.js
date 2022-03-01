const menu = document.querySelector('.menu')
const sidebar = document.querySelector('.links-container')
const close = document.querySelector('.close-btn')
const banner = document.querySelector('.banner')
menu.addEventListener('click', () => {
sidebar.style.right = '0'
})
close.addEventListener('click', () => {
sidebar.style.right = '-100vw'
})
const scrollLink = document.querySelectorAll('.scroll-link')
window.addEventListener('load', () => {

scrollLink.forEach(link => {
if(link.href === path){
link.style.color = '#71deb5'
link.style.fontWeight = "bold"
}
})
})


const counterAnim = (qSelector, start = 0, end, duration=5000) => {
  const target = document.querySelector(qSelector);
  let startTimestamp = null;
  const step = (timestamp) => {
   if (!startTimestamp) startTimestamp = timestamp;
   const progress = Math.min((timestamp - startTimestamp) / duration, 1);
   target.innerText = Math.floor(progress * (end - start) + start);
   if (progress < 1) {
    window.requestAnimationFrame(step);
   }
  };
  window.requestAnimationFrame(step);
 };
 document.addEventListener("DOMContentLoaded", () => {
  counterAnim("#count1", 10000, 310, 10000);
  counterAnim("#count2", 40000, 22, 3000);
  counterAnim("#count3", 1000, 3200, 10000);
 });
 