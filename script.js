var L={
pt:{n1:"Serviços",n2:"Preços",n3:"Agendar",n4:"Unidades",n5:"Contato",tag:"Barbearia tradicional · Estilo atual",h1:"A arte do corte, com precisão e elegância.",hp:"Três unidades, profissionais experientes e um ambiente pensado para você relaxar enquanto cuidamos do seu visual.",cta1:"Agendar horário",cta2:"Ver serviços",t1:"Nossos Serviços",s1:"Do corte clássico ao cuidado completo para barba e mãos.",t2:"Tabela de Preços",s2:"Valores iguais em todas as unidades.",c1:"Serviço",c2:"Duração",c3:"Preço",t3:"Agende seu Horário",s3:"Escolha unidade, serviço e horário. Confirmamos por WhatsApp.",l1:"Unidade",l2:"Serviço",l3:"Data",l4:"Nome",l5:"Horário",l6:"Telefone / WhatsApp",bt:"Confirmar agendamento",pu:"Selecione a unidade",ps:"Selecione o serviço",pt_:"Escolha uma data para ver os horários.",closed:"Fechado aos domingos. Escolha outra data.",t4:"Nossas Unidades",hrs:"Seg–Sáb · 9h às 20h",ab:"A Navalha & Co. nasceu da paixão pela barbearia tradicional aliada a técnicas modernas. Nosso time cuida de cada detalhe, do corte ao acabamento, em um ambiente acolhedor.",t5:"Contato",k1:"Telefone",ft:"Empresa fictícia para fins de demonstração.",err:"Preencha todos os campos e escolha um horário.",ok:"Agendamento recebido! ",at:" às ",min:" min",
sv:["Corte Clássico","Degradê","Barba Completa","Corte + Barba","Manicure Masculina","Sobrancelha"],
sd:["Tesoura e máquina, finalizado com pomada e acabamento na navalha.","Transições suaves e limpas, do baixo ao alto.","Toalha quente, óleo e navalha para um barbear impecável.","O combo completo para sair renovado.","Cutículas, lixa e hidratação das mãos.","Alinhamento discreto e natural com navalha."]},
es:{n1:"Servicios",n2:"Precios",n3:"Reservar",n4:"Sucursales",n5:"Contacto",tag:"Barbería tradicional · Estilo actual",h1:"El arte del corte, con precisión y elegancia.",hp:"Tres sucursales, profesionales con experiencia y un ambiente pensado para que te relajes mientras cuidamos tu imagen.",cta1:"Reservar cita",cta2:"Ver servicios",t1:"Nuestros Servicios",s1:"Del corte clásico al cuidado completo de barba y manos.",t2:"Lista de Precios",s2:"Mismos valores en todas las sucursales.",c1:"Servicio",c2:"Duración",c3:"Precio",t3:"Reserva tu Cita",s3:"Elige sucursal, servicio y horario. Confirmamos por WhatsApp.",l1:"Sucursal",l2:"Servicio",l3:"Fecha",l4:"Nombre",l5:"Horario",l6:"Teléfono / WhatsApp",bt:"Confirmar reserva",pu:"Selecciona la sucursal",ps:"Selecciona el servicio",pt_:"Elige una fecha para ver los horarios.",closed:"Cerrado los domingos. Elige otra fecha.",t4:"Nuestras Sucursales",hrs:"Lun–Sáb · 9 a 20 h",ab:"Navalha & Co. nació de la pasión por la barbería tradicional unida a técnicas modernas. Nuestro equipo cuida cada detalle, del corte al acabado, en un ambiente acogedor.",t5:"Contacto",k1:"Teléfono",ft:"Empresa ficticia con fines de demostración.",err:"Completa todos los campos y elige un horario.",ok:"¡Reserva recibida! ",at:" a las ",min:" min",
sv:["Corte Clásico","Degradado","Barba Completa","Corte + Barba","Manicura Masculina","Cejas"],
sd:["Tijera y máquina, con acabado de pomada y navaja.","Transiciones suaves y limpias, de bajo a alto.","Toalla caliente, aceite y navaja para un afeitado impecable.","El combo completo para salir renovado.","Cutículas, lima e hidratación de manos.","Alineado discreto y natural con navaja."]},
en:{n1:"Services",n2:"Prices",n3:"Book",n4:"Locations",n5:"Contact",tag:"Traditional barbershop · Modern style",h1:"The art of the cut, with precision and elegance.",hp:"Three locations, experienced barbers and a space designed to let you relax while we take care of your look.",cta1:"Book now",cta2:"View services",t1:"Our Services",s1:"From the classic cut to complete beard and hand care.",t2:"Price List",s2:"Same prices at every location.",c1:"Service",c2:"Duration",c3:"Price",t3:"Book your Appointment",s3:"Choose a location, service and time. We confirm via WhatsApp.",l1:"Location",l2:"Service",l3:"Date",l4:"Name",l5:"Time",l6:"Phone / WhatsApp",bt:"Confirm booking",pu:"Select a location",ps:"Select a service",pt_:"Pick a date to see available times.",closed:"Closed on Sundays. Please pick another date.",t4:"Our Locations",hrs:"Mon–Sat · 9am–8pm",ab:"Navalha & Co. was born from a passion for traditional barbering combined with modern techniques. Our team cares for every detail, from the cut to the finish, in a welcoming space.",t5:"Contact",k1:"Phone",ft:"Fictional company for demonstration purposes.",err:"Please fill in all fields and choose a time.",ok:"Booking received! ",at:" at ",min:" min",
sv:["Classic Cut","Fade","Full Beard","Cut + Beard","Men's Manicure","Eyebrows"],
sd:["Scissors and clippers, finished with pomade and a razor edge-up.","Smooth, clean transitions from low to high.","Hot towel, oil and razor for an impeccable shave.","The complete combo to walk out renewed.","Cuticles, filing and hand moisturizing.","Subtle, natural shaping with a razor."]}};
var S=[[45,70],[50,80],[30,55],[75,115],[40,50],[15,25]];
var U=[["Jardins","São Paulo, SP","Al. Lorena, 1200"],["Savassi","Belo Horizonte, MG","Rua Pernambuco, 800"],["Copacabana","Rio de Janeiro, RJ","Av. N. S. de Copacabana, 650"]];
var lang="pt",slot="",$=function(i){return document.getElementById(i)};
try{lang=localStorage.getItem("nc-lang")||""}catch(e){}
if(!L[lang]){lang=(navigator.language||"pt").slice(0,2);if(!L[lang])lang="pt"}
function t(k){return L[lang][k]}
function brl(v){return "R$ "+v.toFixed(2).replace(".",",")}
function sel(id,first,items){var s=$(id),v=s.value;s.innerHTML="<option value=''>"+first+"</option>"+items.map(function(x,i){return "<option value='"+i+"'>"+x+"</option>"}).join("");s.value=v}
function apply(){
document.documentElement.lang={pt:"pt-BR",es:"es",en:"en"}[lang];
document.querySelectorAll("[data-i]").forEach(function(e){e.textContent=t(e.dataset.i)});
$("lang").value=lang;
$("svc").innerHTML=S.map(function(s,i){return "<div class='card sv'><div class='n'>0"+(i+1)+"</div><h3>"+t("sv")[i]+"</h3><p>"+t("sd")[i]+"</p><b>"+s[0]+t("min")+" · "+brl(s[1])+"</b></div>"}).join("");
$("pr").innerHTML=S.map(function(s,i){return "<tr><td>"+t("sv")[i]+"</td><td>"+s[0]+t("min")+"</td><td>"+brl(s[1])+"</td></tr>"}).join("");
sel("un",t("pu"),U.map(function(u){return u[0]+" — "+u[1]}));
sel("sv",t("ps"),t("sv").map(function(n,i){return n+" · "+brl(S[i][1])}));
$("units").innerHTML=U.map(function(u,i){return "<div class='card un'><h3>"+u[0]+"</h3><p>"+u[2]+"<br>"+u[1]+"</p><p>"+t("hrs")+"</p><p>+55 "+["11","31","21"][i]+" 4000-000"+(i+1)+"</p></div>"}).join("");
$("nm").placeholder="";slots()}
function slots(){
var d=$("dt").value,box=$("sl");slot="";
if(!d){box.innerHTML="<span style='color:var(--mu);font-size:14px'>"+t("pt_")+"</span>";return}
if(new Date(d+"T12:00").getDay()===0){box.innerHTML="<span style='color:var(--mu);font-size:14px'>"+t("closed")+"</span>";return}
var h=0,k=d+$("un").value;for(var i=0;i<k.length;i++)h=(h*31+k.charCodeAt(i))>>>0;
var out="";for(var x=9;x<20;x++){var busy=((h>>>x)+x*7)%4===0;out+="<button type='button' data-t='"+x+":00'"+(busy?" disabled":"")+">"+(x<10?"0":"")+x+":00</button>"}
box.innerHTML=out}
$("sl").addEventListener("click",function(e){var b=e.target.closest("button");if(!b||b.disabled)return;
this.querySelectorAll("button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");slot=b.textContent});
$("dt").addEventListener("change",slots);$("un").addEventListener("change",slots);
$("lang").addEventListener("change",function(){lang=this.value;try{localStorage.setItem("nc-lang",lang)}catch(e){}apply();$("msg").style.display="none"});
var today=new Date();$("dt").min=today.getFullYear()+"-"+String(today.getMonth()+1).padStart(2,"0")+"-"+String(today.getDate()).padStart(2,"0");
$("form").addEventListener("submit",function(e){e.preventDefault();
var m=$("msg"),ok=$("un").value&&$("sv").value&&$("dt").value&&$("nm").value.trim()&&$("ph").value.trim()&&slot;
m.style.display="block";m.className="msg"+(ok?"":" err");
if(!ok){m.textContent=t("err");return}
var p=$("dt").value.split("-");
m.textContent=t("ok")+$("nm").value.trim()+" — "+t("sv")[$("sv").value]+" · "+U[$("un").value][0]+" · "+p[2]+"/"+p[1]+"/"+p[0]+t("at")+slot+".";
this.reset();slot="";slots()});
apply();
