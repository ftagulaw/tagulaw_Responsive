const btn = document.getElementById('menu_btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => { 
    btn.classList.toggle('open')
    btn.classList.toggle('flex')
    btn.classList.toggle('hidden')
});