/* ========== AUDIO (compartido) ========== */
var cid=null;var pint=null;
function speak(t,id){
cancelSpeech();if(!window.speechSynthesis){document.getElementById("status-"+id).textContent="No disponible";return}
cid=id;var u=new SpeechSynthesisUtterance(t);u.lang="es-ES";u.rate=0.9;
var s=document.getElementById("status-"+id);var p=document.getElementById("progress-"+id);
u.onstart=function(){s.textContent="Reproduciendo...";p.style.width="0%"};
u.onend=function(){s.textContent="Completado";p.style.width="100%";if(pint)clearInterval(pint);cid=null};
window.speechSynthesis.speak(u);if(pint)clearInterval(pint);var pc=0;
pint=setInterval(function(){if(window.speechSynthesis.speaking){pc=Math.min(pc+2,95);p.style.width=pc+"%"}},300)}
function stopSpeech(){if(window.speechSynthesis.speaking&&!window.speechSynthesis.paused){window.speechSynthesis.pause();if(cid)document.getElementById("status-"+cid).textContent="Pausado"}else if(window.speechSynthesis.paused){window.speechSynthesis.resume();if(cid)document.getElementById("status-"+cid).textContent="Reanudado"}}
function cancelSpeech(){if(window.speechSynthesis)window.speechSynthesis.cancel();if(pint)clearInterval(pint);if(cid){document.getElementById("status-"+cid).textContent="Detenido";document.getElementById("progress-"+cid).style.width="0%"}cid=null}
