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
const money = n => n.toLocaleString("es-AR",{style:"currency", currency:"ARS", maximumFractionDigits:0});
const CART_KEY = "rg_cart_v1";

function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) ?? [] } catch { return [] } }
function setCart(v){ localStorage.setItem(CART_KEY, JSON.stringify(v)); updateCartUI(); }
function cartTotal(){ return getCart().reduce((acc,i)=> acc + (AUTOS.find(a=>a.id===i.id)?.precio||0)*i.qty ,0) }


// === TABLA (Render listado estilo “tabla visual”) ===
function renderCatalogo(){
  const grid = $('#catalogo-grid');
  grid.innerHTML = '';
  const frag = document.createDocumentFragment();

  AUTOS.forEach(a=>{
    const article = document.createElement('article');
    article.className = 'card';

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
    frag.appendChild(article);
  });

  grid.appendChild(frag);

  grid.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-add]');
    if(!btn) return;
    const id = btn.dataset.add;
    const cart = getCart();
    const item = cart.find(i=>i.id===id);
    if(item) item.qty += 1; else cart.push({id, qty:1});
    setCart(cart);
    refreshQtyBadges();
  });

  refreshQtyBadges();
}