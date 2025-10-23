// === catalogo de lujo, ingreso de autos ===
const AUTOS = [
  { id:"a1", marca:"BMW", modelo:"3.0 335i Coupe Sportive 306cv", anio:2013, km:11600, precio:41000000,
    img:"./fotos/bm.png", transmision:"AT", combustible:"Nafta" },
  { id:"a2", marca:"DS", modelo:"7 crossback", anio:2021, km:24000, precio:46800000,
    img:"./fotos/ds.png", transmision:"AT", combustible:"Nafta" },
  { id:"a3", marca:"Audi", modelo:"A7 Sportback", anio:2020, km:30000, precio:98000000,
    img:"./fotos/audi.png", transmision:"AT", combustible:"Nafta" },
  { id:"a4", marca:"Porsche", modelo:"911", anio:1987, km:22000, precio:145000000,
    img:"./fotos/porsche.png", transmision:"AT", combustible:"Nafta" },
  { id:"a5", marca:"Land Rover", modelo:"Range Rover Vogue", anio:2010, km:5560, precio:102000000,
    img:"./fotos/rangerover.png", transmision:"AT", combustible:"Diésel" },
  { id:"a6", marca:"Lexus", modelo:"LS 500", anio:2022, km:12000, precio:109000000,
    img:"./fotos/lexus.png", transmision:"AT", combustible:"Nafta" },
  { id:"a7", marca:"Maserati", modelo:"Levante GranSport", anio:2020, km:28000, precio:99000000,
    img:"./fotos/maserat.png", transmision:"AT", combustible:"Nafta" },
  { id:"a8", marca:"Jaguar", modelo:"F-Type R", anio:2019, km:25000, precio:102000000,
    img:"./fotos/jag.png", transmision:"AT", combustible:"Nafta" }
];


// === Utilidades carrito ===
const $ = s => document.querySelector(s);
const money = n => n.toLocaleString("es-AR",{style:"currency", currency:"ARS", maximumFractionDigits:0}); // recomendacion IA --> formato pesos argentinos
const CART_KEY = "rg_cart_v1";  

function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) ?? [] } catch { return [] } } //lee lo guardado, transforma a array
function setCart(v){ localStorage.setItem(CART_KEY, JSON.stringify(v)); updateCartUI(); } //actualiza carrito en LS
function cartTotal(){ return getCart().reduce((acc,i)=> acc + (AUTOS.find(a=>a.id===i.id)?.precio||0)*i.qty ,0) } //precio total carrito


// TABLA "visual" -> muestro la lista de autos con "grilla de cartas" 
function renderCatalogo(){
  const grid = $('#catalogo-grid'); //
  grid.innerHTML = '';
  const frag = document.createDocumentFragment(); // 

  AUTOS.forEach(a=>{   // creo CARTA para cada uno de los autos
    const article = document.createElement('article');
    article.className = 'card'; 
//html de cada tarjeta con datos del auto -- posible agregar cateogoria tipo coupé, suv, etc? 
    article.innerHTML = ` 
      <img class="card__img" src="${a.img}" alt="${a.marca} ${a.modelo} ${a.anio}">
      <div class="card__row">
        <div>
          <h3 class="card__title">${a.marca} ${a.modelo}</h3>
          <p class="tagline">${a.anio} • ${a.km.toLocaleString('es-AR')} km</p>
          <div class="meta">
            <span>${a.transmision}</span><span>${a.combustible}</span>
          </div>
        </div>
        <div style="text-align:right">
          <div class="price">${money(a.precio)}</div>
        </div>
      </div>
      <div class="card__foot">
        <button class="btn btn--primary" data-add="${a.id}">Agregar</button>
        <span class="qty" id="qty-${a.id}"></span>
      </div>
    `; 
    frag.appendChild(article); //recomendación de IA ---> no pegar directo en la página, sumar al fragment y pegarlo todo junto (para mayor "fluidez")
  });

  grid.appendChild(frag); //meto todas las cartas

  grid.addEventListener('click', (e)=>{ //boton agregar
    const btn = e.target.closest('[data-add]');
    if(!btn) return;
    const id = btn.dataset.add;
    const cart = getCart();
    const item = cart.find(i=>i.id===id); //¿auto esta en el carrito?
    if(item) item.qty += 1; else cart.push({id, qty:1}); // CORREGIR IMPORTANTE ---> !!!!!!!!!!NO PUEDO SUMAR 2 AUTOS IGUALES AL CARRITO!!!!!!!!
    setCart(cart);
    refreshQtyBadges();
  });

  refreshQtyBadges();
}

//  Carrito de compras, agregar datos de domicilio para home delivery? 
function refreshQtyBadges(){
  const map = Object.fromEntries(getCart().map(i=>[i.id, i.qty])); //recomendacion IA, armar map para busqueda rápida
  AUTOS.forEach(a=>{
    const el = document.getElementById(`qty-${a.id}`);
    if(el) el.textContent = map[a.id] ? `En carrito: ${map[a.id]}` : '';
  });
  $('#cart-count').textContent = getCart().reduce((n,i)=>n+i.qty,0); //contador total
}

function updateCartUI(){  //panel carrito
  const wrap = $('#cart-items');
  const items = getCart();
  refreshQtyBadges();

  if(items.length===0){  // si no hay nada, cartel de vacío
    wrap.innerHTML = '<p class="muted">Vacío. Agregá desde el catálogo.</p>';
    $('#cart-total').textContent = money(0);
    return;
  }}

 // igual que con las cartas de los autos --> fragment y despues pego todo junto
const frag = document.createDocumentFragment(); // contenedor memoria 
  items.forEach(({id, qty})=>{ //recorro
    const a = AUTOS.find(x=>x.id===id); //  busco autos completos 
    const div = document.createElement('div');
    div.className = 'cart-item'; 
    //  meto todo el html del item:
    div.innerHTML = `
      <img src="${a.img}" alt="${a.marca} ${a.modelo}">
      <div>
        <strong>${a.marca} ${a.modelo}</strong><br>
        <span class="muted">${a.anio} • ${a.km.toLocaleString('es-AR')} km</span>
        <div class="meta" style="margin-top:6px">
          <button class="rm" data-qty="${id}" data-d="-1">−</button>
          <span>${qty}</span>
          <button class="rm" data-qty="${id}" data-d="+1">+</button>
          <button class="rm" data-remove="${id}">Quitar</button>
        </div>
      </div>
      <b>${money(a.precio*qty)}</b>
    `;
    frag.appendChild(div);  // sumo al fragment
  });

