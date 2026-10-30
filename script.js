// Product data drives the catalog; uncertain products keep a clearly labeled photo placeholder.
const categories = ["Skincare", "Makeup", "Hair Care", "Bath & Body", "Bags", "Shoes"];
const products = [
  {id:1,name:"Medicube Foam Hydrating Gel Cleanser",price:15,category:"Skincare",image:"https://www.tobepty.com/cdn/shop/files/MedicubePDRNHydratingGelCleanser200ml.webp?v=1781906995&width=533",imageAlt:"Similar Medicube PDRN Hydrating Gel Cleanser; exact listed variant not confirmed."},
  {id:2,name:"Central Light Cleansing Oil",price:20,category:"Skincare",image:"https://www.skin1004.com/cdn/shop/files/skin1004-cleanser-centella-light-cleansing-oil-1259546240_1440x.png?v=1790066830",imageAlt:"SKIN1004 Madagascar Centella Light Cleansing Oil; likely match for the listed Centella Light Cleansing Oil."},
  {id:3,name:"Dr Rachel Face Serum",price:5,category:"Skincare",image:"https://cdn.shopify.com/s/files/1/0616/1091/8072/files/Ubtan_Face_Serum.jpg?v=1771665608",imageAlt:"Temporary Dr. Rashel face serum photo; exact listed serum not confirmed."},
  {id:4,name:"Simple Refreshing Face Wash",price:6,category:"Skincare",image:"https://www.vridhistores.com/uploads/2026/Jun/products/17808133189707.jpg"},
  {id:5,name:"St. Ives Soothing Body Wash Rose Water and Aloe Vera",price:17,category:"Skincare",image:"https://images.heb.com/is/image/HEBGrocery/003481010"},
  {id:6,name:"James Charles Morphe Palette",price:14,category:"Makeup",image:"https://static.thcdn.com/productimg/1600/1600/12007320-2054639296700191.jpg"},
  {id:7,name:"Fenty Skin Butta Drop",price:32,category:"Makeup",image:"https://fentybeauty.com/cdn/shop/files/FSB_HOL26_T2PRODUCT_ECOMM_BD_GUAVA_GETAWAY_200ML_0602_1200X1500_72DPI.jpg?format=webp&v=1788892411&width=800"},
  {id:8,name:"Huda Beauty",price:24,category:"Makeup",image:"https://kfarmacosmetics.al/cdn/shop/files/HudaBeauty_44.jpg?v=1773510505",imageAlt:"Temporary Huda Beauty lipstick brand photo; exact listed item not specified."},
  {id:9,name:"Mars",price:12,category:"Makeup",image:"https://marscosmetics.in/cdn/shop/files/AllINeedMakeupKit.jpg?v=1766145722&width=2600",imageAlt:"Temporary MARS makeup kit brand photo; exact listed item not specified."},
  {id:10,name:"Rhode",price:15,category:"Makeup",image:"https://media.sephora.eu/content/dam/gdam/europe/digital/pim/published/R/RHODE/821670/409212-media_swatch-0.jpg?scaleHeight=750&scaleMode=fit&scaleWidth=750"},
  {id:11,name:"Gisou Honey Infused Hair Mask",price:17,category:"Hair Care",image:"https://gisou.com/cdn/shop/files/01_DTC_HAIRMASK_26.jpg?v=1789379434&width=1200"},
  {id:12,name:"Mizani",price:18,category:"Hair Care",image:"https://salon500.co.za/cdn/shop/products/Mizani_Miracle_Milk_250ml_1024x1280.jpg?v=1563657078"},
  {id:13,name:"Fenty Skin",price:22,category:"Hair Care",image:"https://fentybeauty.com/cdn/shop/files/FH661950-FENTY-HAIR_LAUNCH_PDP_RICHONE-SHAMPOO_SILO_1200x1500_03ac2553-c89f-429f-a25f-58602c70d002.jpg?format=webp&v=1762284775&width=800",imageAlt:"Similar Fenty Hair The Rich One shampoo; catalog says Fenty Skin and does not specify the hair product."},
  {id:14,name:"Ouai Leave-In Conditioner",price:12,category:"Hair Care",image:"https://image-optimizer-th.production.sephora-asia.net/images/product_images/zoom_1_Product_815402023119-Ouai-Leave_in_Conditioner_-140ml_7c531967e876df5e645bc8463ec689a5aabea611_1699414929.png"},
  {id:15,name:"Paddle Brush",price:3,category:"Hair Care",image:"https://cdn.shopify.com/s/files/1/0048/0241/2642/products/image_b3e3577d-e075-40da-821d-a1260fb16c22.png?v=1678588926"},
  {id:16,name:"Warm Vanilla Sugar Body Wash",price:17,category:"Bath & Body",image:"https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdbabe4b2/hires/028032526.jpg?format=auto&q=75&sw=480"},
  {id:17,name:"Dove Nourishing Body Care",price:13,category:"Bath & Body",image:"https://media.savers.co.uk/medias/sys_master/prd-images/h69/hb4/14243343728670/prd-front-839706_600x600/prd-front-839706-600x600.jpg"},
  {id:18,name:"EOS Midnight Cocoa Bloom Body Wash",price:11.99,category:"Bath & Body",image:"https://target.scene7.com/is/image/Target/GUEST_d538a9c0-ea04-45c1-9b08-123c8bed80f3?fmt=pjpeg&hei=300&wid=300",imageAlt:"Similar eos Vanilla Cashmere Body Wash with cocoa butter; exact Midnight Cocoa Bloom product not found."},
  {id:19,name:"Olay Body Lotion",price:32,category:"Bath & Body",image:"https://i5.walmartimages.com/asr/8f23b399-3829-42d3-ad89-153ad4fe7b2c.5c9e4e95e9b626e50f52a1939567d827.jpeg"},
  {id:20,name:"Bath & Body Works Into the Night Body Lotion",price:24,category:"Bath & Body",image:"https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5276a113/hires/028003658.jpg?format=auto&q=75&sw=480"},
  {id:21,name:"Guess Bag",price:27,category:"Bags",image:"https://6c422a-occasion.akinoncloudcdn.com/products/2023/08/24/1898910/8c38f2d1-de1d-4a65-b8ac-77cc384b99ba_size3840x3840_cropCenter.jpg",imageAlt:"Temporary Guess handbag brand photo; exact listed bag not specified."},
  {id:22,name:"Coach Bag",price:34,category:"Bags",image:"https://media.johnlewiscontent.com/i/JohnLewis/109994546"},
  {id:23,name:"Hermès Bag",price:50,category:"Bags",image:"https://assets.hermes.com/is/image/hermesproduct/056289CK10_front_wm_101?$product_default_bg$=",imageAlt:"Hermès Picotin Lock 18 bag from the official Hermès product gallery; exact listed bag not specified."},
  {id:24,name:"Gucci Bag",price:36,category:"Bags",image:"https://media.gucci.com/style/DarkGray_Center_0_0_1200x1200/1745919903/837267_AAE38_1000_001_063_0000_Light-GG-Marmont-medium-shoulder-bag.jpg"},
  {id:25,name:"Dior Bag",price:36,category:"Bags",image:"https://assets.christiandior.com/is/image/diorprod/M0565OBDUM11G_E01-1?%24default_GHC%24=&bfc=on&crop=414%2C390%2C1129%2C1424&hei=2000&qlt=85&scale=0.875&wid=1850"},
  {id:26,name:"Simbas",price:29,category:"Shoes",image:"https://assets.adidas.com/images/w_500%2Cf_auto%2Cq_auto/4a21f7dbdd53406cae2164322e042102_9366/SAMBA_OG_SFTM_Shoes_Black_HQ7600_01_00_standard.jpg",imageAlt:"Similar adidas Samba OG sneaker; the catalog entry only says Simbas, so the exact shoe is unclear."},
  {id:27,name:"Zara",price:28,category:"Shoes",image:"https://static.zara.net/assets/public/0a46/e7fa/05de40a980c1/8021e6eacdf1/12222319800-f1/12222319800-f1.jpg?ts=1768555162939",imageAlt:"Temporary Zara high-heel slingback shoe brand photo; exact listed item not specified."},
  {id:28,name:"Aldo",price:37,category:"Shoes",image:"https://aldoshoes.co.uk/cdn/shop/files/stessy2.0_black_001-002-033_main_sq_nt_1600x1600_81f21fa2-7fa4-453b-997a-0466b9b3b475.jpg?v=1771965904&width=1946",imageAlt:"ALDO Stessy2.0 heeled shoes; used as a representative ALDO shoe photo."},
  {id:29,name:"Nike",price:43,category:"Shoes",image:"https://images.unsplash.com/photo-1687444334081-8ca04ed2a1a3?auto=format&fit=crop&w=900&q=85"},
  {id:30,name:"Chanel",price:35,category:"Shoes",image:"https://www.chanel.com/images/as///c_crop%2Cw_1600%2Cg_north%2Cf_auto%2Cq_auto%3Agood%2Cdpr_1.1/w_3200/-82127014.jpg",imageAlt:"CHANEL patent calfskin black slingback; exact listed shoe not specified."}
];

const categoryArt = {
  "Skincare":"https://images.heb.com/is/image/HEBGrocery/003481010",
  "Makeup":"https://static.thcdn.com/productimg/1600/1600/12007320-2054639296700191.jpg",
  "Hair Care":"https://images.asos-media.com/products/olaplex-no3-hair-perfector-100ml/20626279-1-no3?%24n_640w%24=&fit=constrain&wid=513",
  "Bath & Body":"https://www.victoriassecret.com/p/760x1013/png/zz/25/04/05/01/112603738580_OM_F.jpg",
  "Bags":"https://assets.christiandior.com/is/image/diorprod/M0565OBDUM11G_E01-1?%24default_GHC%24=&bfc=on&crop=414%2C390%2C1129%2C1424&hei=2000&qlt=85&scale=0.875&wid=1850",
  "Shoes":"https://images.unsplash.com/photo-1687444334081-8ca04ed2a1a3?auto=format&fit=crop&w=900&q=85"
};
const slides = [
  {category:"Skincare",title:"Your Glow Starts Here",text:"Discover your skincare favourites.",image:"https://images.heb.com/is/image/HEBGrocery/003481010",imageAlt:"St. Ives Rose Water and Aloe Vera body wash"},
  {category:"Bath & Body",title:"Make Every Day a Self-Care Day",text:"Find little luxuries for your daily routine.",image:"images/bath-body-slide.png",imageAlt:"Bath & Body Works body care collection"},
  {category:"Shoes",title:"Step Into Style",text:"Find your next favourite pair.",image:"https://images.unsplash.com/photo-1687444334081-8ca04ed2a1a3?auto=format&fit=crop&w=1200&q=85",imageAlt:"White and blue Nike sneakers"}
];
let selectedCategory = "all";
let visibleCount = 12;
let activeSlide = 0;
let slideTimer;
let toastTimer;
let cart = {};
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const money = value => `$${value.toFixed(2)}`;

function initCategoryControls() {
  const menu = document.querySelector("#category-menu-items");
  menu.innerHTML = `<button class="menu-all" type="button" data-category="all">View All Products</button>${categories.map(c => `<button type="button" data-category="${c}">${c}</button>`).join("")}`;
  document.querySelector("#category-grid").innerHTML = categories.map(c => `<button class="category-card" type="button" data-category="${c}" aria-label="Shop ${c}"><img src="${categoryArt[c]}" alt="${c} product photograph" data-fallback><span>${c}</span></button>`).join("");
  applyImageFallbacks(document.querySelector("#category-grid"));
  document.addEventListener("click", event => {
    const choice = event.target.closest("[data-category]");
    if (!choice) return;
    filterCategory(choice.dataset.category);
    document.querySelector(".category-menu").open = false;
  });
}

function filterCategory(category) {
  selectedCategory = category;
  visibleCount = 12;
  renderProducts();
  document.querySelector("#products").scrollIntoView({behavior: reduceMotion.matches ? "auto" : "smooth", block:"start"});
}

function renderProducts() {
  const categoryProducts = products.filter(p => selectedCategory === "all" || p.category === selectedCategory);
  const sort = document.querySelector("#sort-products").value;
  if (sort === "price-low") categoryProducts.sort((a,b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  if (sort === "price-high") categoryProducts.sort((a,b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
  if (sort === "name") categoryProducts.sort((a,b) => a.name.localeCompare(b.name));
  const shown = categoryProducts.slice(0, visibleCount);
  document.querySelector("#product-grid").innerHTML = shown.map(p => `<article class="product-card"><div class="product-image-wrap"><img class="product-image" src="${p.image}" alt="${escapeHtml(p.imageAlt || (p.image.endsWith('.svg') ? `Product photograph coming soon: ${p.name}` : `Photo of ${p.name}`))}" loading="lazy" data-fallback></div><div class="product-copy"><h3 class="product-name">${escapeHtml(p.name)}</h3><p class="product-price">${p.price === null ? "Price coming soon" : money(p.price)}</p><button class="add-button" type="button" data-add="${p.id}" ${p.price === null ? "disabled aria-disabled=\"true\"" : ""}>${p.price === null ? "Price coming soon" : "Add to Cart"}</button></div></article>`).join("");
  applyImageFallbacks(document.querySelector("#product-grid"));
  const empty = categoryProducts.length === 0;
  document.querySelector("#empty-state").hidden = !empty;
  document.querySelector("#load-more").hidden = categoryProducts.length <= visibleCount;
  document.querySelector("#filter-note").textContent = selectedCategory === "all" ? `Showing all ${products.length} favourites` : `Showing ${categoryProducts.length} ${selectedCategory} ${categoryProducts.length === 1 ? "favourite" : "favourites"}`;
  document.querySelector("#products-heading").textContent = selectedCategory === "all" ? "Featured Products" : selectedCategory;
}
function escapeHtml(value) { return value.replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])); }

function initSlideshow() {
  const host = document.querySelector("#slides");
  host.innerHTML = slides.map((s,i) => `<article class="slide ${i===0 ? "active" : ""}" aria-hidden="${i!==0}"><div class="slide-visual"><img src="${s.image}" alt="${s.imageAlt}" data-fallback></div><div class="slide-copy"><p class="eyebrow">A moment for you · ${s.category}</p><h1>${s.title}</h1><p>${s.text}</p><button class="pink-button" type="button" data-category="${s.category}">Shop Now</button></div></article>`).join("");
  applyImageFallbacks(host);
  const dots = document.querySelector(".slide-dots");
  dots.innerHTML = slides.map((s,i) => `<button type="button" aria-label="Show slide ${i+1}: ${s.category}" aria-current="${i===0}"></button>`).join("");
  dots.addEventListener("click", e => {const dot=e.target.closest("button");if(dot){showSlide([...dots.children].indexOf(dot));restartSlides();}});
  document.querySelector(".prev").addEventListener("click",()=>{showSlide(activeSlide-1);restartSlides();});
  document.querySelector(".next").addEventListener("click",()=>{showSlide(activeSlide+1);restartSlides();});
  document.querySelector(".hero").addEventListener("mouseenter",stopSlides);
  document.querySelector(".hero").addEventListener("mouseleave",startSlides);
  document.querySelector(".hero").addEventListener("focusin",stopSlides);
  document.querySelector(".hero").addEventListener("focusout",e=>{if(!e.currentTarget.contains(e.relatedTarget))startSlides();});
  if (!reduceMotion.matches) startSlides();
}
function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  document.querySelectorAll(".slide").forEach((el,i)=>{el.classList.toggle("active",i===activeSlide);el.setAttribute("aria-hidden",String(i!==activeSlide));});
  document.querySelectorAll(".slide-dots button").forEach((el,i)=>el.setAttribute("aria-current",String(i===activeSlide)));
}
function startSlides(){stopSlides();if(!reduceMotion.matches)slideTimer=setInterval(()=>showSlide(activeSlide+1),5000);}
function stopSlides(){clearInterval(slideTimer);}
function restartSlides(){startSlides();}

function applyImageFallbacks(root) {
  root.querySelectorAll("img[data-fallback]").forEach(img => {
    const useFallback = () => {
      if (img.dataset.failed) return;
      img.dataset.failed = "true";
      img.src = "images/photo-coming-soon.svg";
      img.alt = "Product photograph coming soon";
      img.classList.add("photo-placeholder");
    };
    img.addEventListener("error", useFallback, {once:true});
    if (img.complete && img.naturalWidth === 0) useFallback();
  });
}

function addToCart(id) {
  const product = products.find(p=>p.id===Number(id));
  if (!product || product.price === null) return;
  cart[product.id]=(cart[product.id]||0)+1;
  renderCart();
  const toast=document.querySelector(".toast");toast.textContent=`${product.name} added to cart!`;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2300);
}
function renderCart() {
  const count=Object.values(cart).reduce((sum,q)=>sum+q,0);
  document.querySelector(".cart-count").textContent=count;
  document.querySelector(".cart-trigger").setAttribute("aria-label",`Open shopping cart, ${count} ${count===1?"item":"items"}`);
  document.querySelector(".drawer-count").textContent=`(${count})`;
  const entries=Object.entries(cart).filter(([,q])=>q>0).map(([id,quantity])=>({product:products.find(p=>p.id===Number(id)),quantity}));
  const items=document.querySelector(".cart-items");
  items.innerHTML=entries.length?entries.map(({product,quantity})=>`<div class="cart-row"><img src="${product.image}" alt="" data-fallback><div><strong>${escapeHtml(product.name)}</strong><small>${money(product.price)} · Qty ${quantity}</small></div><button type="button" class="remove-item" data-remove="${product.id}">Remove</button></div>`).join(""):`<p class="cart-empty">Your cart is waiting for something lovely.</p>`;
  applyImageFallbacks(items);
  const total=entries.reduce((sum,e)=>sum+e.product.price*e.quantity,0);
  document.querySelector(".cart-subtotal").textContent=money(total);
}
function openCart(){const drawer=document.querySelector(".cart-drawer");drawer.classList.add("open");drawer.setAttribute("aria-hidden","false");document.querySelector(".drawer-backdrop").hidden=false;document.querySelector(".close-cart").focus();}
function closeCart(){const drawer=document.querySelector(".cart-drawer");drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true");document.querySelector(".drawer-backdrop").hidden=true;document.querySelector(".cart-trigger").focus();}

initCategoryControls();
initSlideshow();
renderProducts();
renderCart();
document.querySelector("#sort-products").addEventListener("change",renderProducts);
document.querySelector("#load-more").addEventListener("click",()=>{visibleCount+=12;renderProducts();});
document.querySelector("#product-grid").addEventListener("click",e=>{const button=e.target.closest("[data-add]");if(button)addToCart(button.dataset.add);});
document.querySelector(".cart-items").addEventListener("click",e=>{const button=e.target.closest("[data-remove]");if(button){delete cart[button.dataset.remove];renderCart();}});
document.querySelector(".cart-trigger").addEventListener("click",openCart);
document.querySelector(".close-cart").addEventListener("click",closeCart);
document.querySelector(".drawer-backdrop").addEventListener("click",closeCart);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!document.querySelector(".drawer-backdrop").hidden)closeCart();});
document.querySelector("#year").textContent=new Date().getFullYear();
