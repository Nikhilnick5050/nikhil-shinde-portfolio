const roles=["Full-Stack Developer","Creator of Classgrid","AI Enthusiast","Open-Source Contributor"];
let r=0,c=0,del=false;const el=document.getElementById('typed');
function type(){const w=roles[r];el.textContent=w.slice(0,c);
if(!del&&c<w.length)c++;else if(del&&c>0)c--;else if(!del){del=true;return setTimeout(type,1400)}else{del=false;r=(r+1)%roles.length}
setTimeout(type,del?40:80)}type();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(s=>io.observe(s));
const t=document.getElementById('theme');t.onclick=()=>{document.body.classList.toggle('light');t.textContent=document.body.classList.contains('light')?'☀️':'🌙'};
document.getElementById('year').textContent=new Date().getFullYear();
