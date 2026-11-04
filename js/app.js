// Lógica principal de la aplicación - Yamaha San Jose del Guaviare (Guaviare)

const state = {
  selectedCategory: "todas",
  searchQuery: "",
  sortBy: "destacadas",
  selectedColors: {}, // bikeId -> colorIndex
  compareList: ["nmax", "xtz-125", "mt09"], // Las 3 destacadas listas para comparar
  activeSpecBikeId: null,
  activeSpecTab: "todas",
  activeLocationId: "sede-guaviare"
};

// Logo oficial de WhatsApp en SVG
function whatsappLogoSvg(classes = "w-4 h-4") {
  return `<svg class="${classes} fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.461 3.484 1.336 5.008L2 22l5.164-1.352c1.477.805 3.141 1.234 4.867 1.234 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.82 14.125c-.242.68-1.414 1.305-1.953 1.383-.508.07-1.148.102-1.859-.125-.438-.141-.992-.328-1.695-.633-2.969-1.281-4.906-4.273-5.055-4.477-.148-.195-1.211-1.609-1.211-3.07 0-1.461.766-2.18 1.039-2.477.273-.297.594-.375.797-.375.195 0 .398.008.57.016.18.008.422-.07.664.508.242.586.828 2.016.898 2.164.07.148.117.32.023.516-.094.195-.141.32-.289.492-.148.172-.313.383-.445.516-.148.148-.305.313-.133.609.172.297.766 1.266 1.648 2.047 1.133 1.008 2.086 1.32 2.383 1.469.297.148.469.125.641-.078.172-.195.742-.867.938-1.164.195-.297.398-.242.664-.148.273.094 1.719.813 2.016.961.297.148.492.219.563.344.07.125.07.719-.172 1.398z"/>
  </svg>`;
}

// Cintilla negra interactiva y movible de tecnologías (TCS, Blue Core, Euro 3, Euro 5, Freno de disco, Smart Key, Thermo Tech)
function renderMovableTechStrip() {
  const badgesHtml = `
    <!-- 1. TCS Control de Tracción -->
    <div class="flex flex-col items-center justify-center px-7 py-2 shrink-0 select-none">
      <span class="text-2xl sm:text-3xl font-black italic tracking-tighter text-zinc-400 leading-none font-heading">TCS</span>
      <span class="text-[9px] font-extrabold tracking-[0.22em] text-zinc-400 uppercase mt-0.5">CONTROL DE TRACCIÓN</span>
    </div>

    <!-- 2. BLUE CORE -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="bg-white rounded-md px-3.5 py-1 border-2 border-white shadow flex flex-col items-center">
        <span class="bg-[#1D4ED8] text-white text-[11px] font-black italic tracking-widest px-2.5 py-0.5 rounded-sm leading-none">BLUE</span>
        <span class="text-[#1D4ED8] text-[11px] font-black italic tracking-widest leading-none mt-0.5">CORE</span>
      </div>
    </div>

    <!-- 3. EURO 3 (Imagen oficial de la carpeta motos) -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <img src="${safeImgUrl("motos/euro3 para las fichas.png")}" alt="Euro 3" class="h-9 sm:h-10 w-auto object-contain pointer-events-none" />
    </div>

    <!-- 4. EURO 5 -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="bg-[#22A91E] border-2 border-white rounded-md px-3.5 py-1 -skew-x-12 shadow">
        <span class="text-white font-black italic text-base sm:text-lg tracking-wider leading-none block">EURO 5</span>
      </div>
    </div>

    <!-- 5. Freno de disco delantero -->
    <div class="flex items-center gap-2.5 px-7 py-2 shrink-0 select-none text-zinc-400">
      <svg class="w-8 h-8 stroke-current fill-none" viewBox="0 0 24 24" stroke-width="1.8">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="3"/>
        <path d="M15 5.5A8 8 0 0 1 19.5 11"/>
      </svg>
      <div class="leading-tight text-left">
        <span class="block text-xs font-extrabold text-zinc-300">Freno de disco</span>
        <span class="block text-[11px] italic text-zinc-400">delantero.</span>
      </div>
    </div>

    <!-- 6. Smart Key -->
    <div class="flex items-center gap-2.5 px-7 py-2 shrink-0 select-none">
      <div class="border-2 border-zinc-400 rounded-lg px-2.5 py-1 flex items-center gap-2">
        <span class="w-3.5 h-3.5 rounded-full border-2 border-sky-400 inline-block"></span>
        <span class="w-3.5 h-3.5 rounded-full border-2 border-zinc-400 inline-block"></span>
      </div>
      <div class="leading-none text-left">
        <span class="block text-sm font-extrabold text-zinc-300">Smart</span>
        <span class="block text-sm font-extrabold text-zinc-400">Key</span>
      </div>
    </div>

    <!-- 7. Thermo Technology -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="border border-zinc-600 px-3.5 py-1 rounded bg-zinc-950 text-left">
        <span class="block text-xs font-extrabold text-zinc-300 tracking-wider border-b border-gradient-to-r from-red-500 via-yellow-400 to-cyan-400 pb-0.5">Thermo</span>
        <span class="block text-[10px] font-bold text-zinc-400 tracking-widest uppercase pt-0.5">TECHNOLOGY</span>
      </div>
    </div>

    <!-- 8. ABS Antibloqueo -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="border-2 border-red-600 bg-red-600/15 px-3.5 py-1 rounded-full">
        <span class="text-white font-black italic text-sm tracking-widest">ABS SYSTEM</span>
      </div>
    </div>

    <!-- 9. Y-Connect -->
    <div class="flex items-center justify-center px-7 py-2 shrink-0 select-none">
      <div class="border border-sky-500/50 bg-sky-950/40 px-3.5 py-1 rounded-lg flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
        <span class="text-sky-300 font-black italic text-xs tracking-wider">Y-CONNECT APP</span>
      </div>
    </div>
  `;

  return `
    <div class="bg-black border-y border-zinc-800 relative group no-print">
      <!-- Botón mover izquierda -->
      <button
        type="button"
        onclick="scrollTechStrip(-260)"
        title="Mover a la izquierda"
        class="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-zinc-900/90 hover:bg-red-600 text-white border border-zinc-700 flex items-center justify-center opacity-80 group-hover:opacity-100 transition shadow-lg">
        <i data-lucide="chevron-left" class="w-4 h-4"></i>
      </button>

      <!-- Contenedor deslizable y con movimiento automático -->
      <div id="activeTechStripWrapper" class="tech-strip-wrapper py-3.5 px-10" title="Arrastra con el mouse o toca para mover">
        <div class="tech-strip-track">
          ${badgesHtml}
          ${badgesHtml}
        </div>
      </div>

      <!-- Botón mover derecha -->
      <button
        type="button"
        onclick="scrollTechStrip(260)"
        title="Mover a la derecha"
        class="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-zinc-900/90 hover:bg-red-600 text-white border border-zinc-700 flex items-center justify-center opacity-80 group-hover:opacity-100 transition shadow-lg">
        <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}

function scrollTechStrip(delta) {
  const wrapper = document.getElementById("activeTechStripWrapper");
  if (!wrapper) return;
  wrapper.classList.add("is-dragging");
  wrapper.scrollBy({ left: delta, behavior: "smooth" });
  setTimeout(() => wrapper.classList.remove("is-dragging"), 1200);
}

function enableTechStripDrag() {
  const slider = document.getElementById("activeTechStripWrapper");
  if (!slider) return;
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("is-dragging");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("is-dragging");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("is-dragging");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

  // Soporte táctil nativo para Android y iPhone (iOS Safari)
  slider.addEventListener(
    "touchstart",
    () => {
      slider.classList.add("is-dragging");
    },
    { passive: true }
  );
  slider.addEventListener(
    "touchend",
    () => {
      setTimeout(() => slider.classList.remove("is-dragging"), 1200);
    },
    { passive: true }
  );
  slider.addEventListener(
    "touchcancel",
    () => {
      slider.classList.remove("is-dragging");
    },
    { passive: true }
  );
}

// Formateador de moneda Peso Colombiano (COP)
function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

// Codificar rutas de imágenes con espacios
function safeImgUrl(path) {
  if (!path) return "";
  return path
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}

// Calcular cuota mensual aproximada
function estimateMonthlyPayment(price, downPaymentPercent = 15, months = 48) {
  const principal = price * (1 - downPaymentPercent / 100);
  const monthlyRate = 0.0165;
  const payment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
    (Math.pow(1 + monthlyRate, months) - 1);
  return Math.round(payment / 1000) * 1000;
}

// Inyectar catálogo completo de las 35 motos en Schema.org JSON-LD para posicionamiento exclusivo en San Jose del Guaviare y el Guaviare
function injectCatalogSeoSchema() {
  if (!Array.isArray(YAMAHA_BIKES)) return;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Catálogo Oficial de Motocicletas Yamaha en San Jose del Guaviare — Yamaha San Jose del Guaviare",
    "description": "Precios oficiales, colores y fichas técnicas de las 35 motocicletas y cuatrimotos Yamaha en Yamaha San Jose del Guaviare (Cra. 22 # 8-43, San Jose del Guaviare, Colombia).",
    "numberOfItems": YAMAHA_BIKES.length,
    "itemListElement": YAMAHA_BIKES.map((bike, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": `Yamaha ${bike.name} en San Jose del Guaviare`,
        "description": `${bike.description} Disponible en Yamaha San Jose del Guaviare (Cra. 22 # 8-43, San Jose del Guaviare, Colombia).`,
        "brand": {
          "@type": "Brand",
          "name": "Yamaha"
        },
        "category": bike.categoryLabel,
        "sku": `YAM-GUV-${bike.id.toUpperCase()}`,
        "image": `https://yamahasanjosedeguaviare.com.co/${safeImgUrl(bike.colors[0]?.image || bike.bannerImage)}`,
        "offers": {
          "@type": "Offer",
          "url": `https://yamahasanjosedeguaviare.com.co/#catalogo-motos`,
          "priceCurrency": "COP",
          "price": bike.price,
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "areaServed": {
            "@type": "City",
            "name": "San Jose del Guaviare, Guaviare"
          },
          "seller": {
            "@type": "MotorcycleDealer",
            "name": "Yamaha San Jose del Guaviare",
            "address": "Cra. 22 # 8-43, San Jose del Guaviare, Colombia"
          }
        }
      }
    }))
  };

  const scriptEl = document.createElement("script");
  scriptEl.type = "application/ld+json";
  scriptEl.textContent = JSON.stringify(schema);
  document.head.appendChild(scriptEl);
}

// Inicialización ultrarrápida al cargar el DOM (Optimizado para Core Web Vitals LCP e INP en Android, iPhone y PC)
function refreshIcons(rootEl) {
  if (!window.lucide) return;
  try {
    if (rootEl) {
      window.lucide.createIcons({ root: rootEl });
    } else {
      window.lucide.createIcons();
    }
  } catch (_) {
    window.lucide.createIcons();
  }
}

function initHeroVideoPlayback() {
  const video = document.getElementById("heroBgVideo");
  if (!video) return;
  video.muted = true;
  video.playsInline = true;
  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      // En modo ahorro de batería de iPhone (iOS Low Power Mode) o ahorro de datos en Android,
      // mantenemos el poster LCP de alta resolución limpio y reproducimos al primer toque.
      const resumeOnTouch = () => {
        video.play().catch(() => {});
        window.removeEventListener("touchstart", resumeOnTouch);
      };
      window.addEventListener("touchstart", resumeOnTouch, { once: true, passive: true });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initDefaultColors();
  renderFeaturedBikes();
  renderCategoryTabs();
  renderBikeCatalog();
  updateCompareBar();
  renderRecommendations();
  renderBlogPosts();
  renderFaqs();
  renderLocationCard();
  initCreditSimulator();
  initNavbarEvents();
  initHeroVideoPlayback();
  refreshIcons();

  // Diferir la inyección del Schema JSON-LD de 35 productos a un momento libre del hilo principal (mejora TBT e INP)
  const scheduleIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 120));
  scheduleIdle(() => {
    injectCatalogSeoSchema();
  });
});

function initDefaultColors() {
  YAMAHA_BIKES.forEach((bike) => {
    state.selectedColors[bike.id] = 0;
  });
}

// ==========================================
// 1. MOTOCICLETAS DESTACADAS (NMAX, XTZ 125, MT09)
// ==========================================
function renderFeaturedBikes() {
  const container = document.getElementById("featuredBikesGrid");
  if (!container) return;

  const featured = FEATURED_BIKE_IDS.map((id) => YAMAHA_BIKES.find((b) => b.id === id)).filter(Boolean);

  container.innerHTML = featured
    .map((bike) => {
      const colorIdx = state.selectedColors[bike.id] || 0;
      const activeColor = bike.colors[colorIdx] || bike.colors[0];

      return `
      <article data-featured-card="${bike.id}" class="bike-card bg-white rounded-3xl border-2 border-red-600/20 shadow-xl overflow-hidden flex flex-col justify-between relative group">
        <div>
          <!-- Banner superior de la ficha -->
          <div class="relative h-32 bg-slate-950 overflow-hidden cursor-pointer" onclick="openSpecModal('${bike.id}')">
            <img src="${safeImgUrl(bike.bannerImage)}" alt="Banner ${bike.name}" width="420" height="128" decoding="async" class="w-full h-full object-cover opacity-85 group-hover:scale-105 transition duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div class="absolute top-3 left-3 flex items-center gap-2">
              <span class="bg-red-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                ★ DESTACADA YAMAHA
              </span>
            </div>
            <div class="absolute bottom-2 left-4 right-4 flex items-center justify-between text-white">
              <span class="text-xs font-bold uppercase tracking-widest text-red-400">${bike.categoryLabel}</span>
              <span class="text-xs font-extrabold bg-white/15 backdrop-blur-sm px-2.5 py-0.5 rounded-full">${bike.displacement} cc</span>
            </div>
          </div>

          <!-- Foto del color seleccionado -->
          <div class="relative h-56 bg-white flex items-center justify-center p-4 cursor-pointer border-b border-slate-100" onclick="openSpecModal('${bike.id}')">
            <img data-role="bike-img" src="${safeImgUrl(activeColor.image)}" alt="Yamaha ${bike.name} - ${activeColor.name}" width="320" height="220" decoding="async" class="bike-img max-h-48 w-auto object-contain mx-auto drop-shadow-md" />
            <img src="${safeImgUrl("motos/euro3 para las fichas.png")}" alt="Euro 3" width="60" height="28" decoding="async" class="absolute bottom-2 right-3 h-7 w-auto object-contain opacity-90" />
          </div>

          <!-- Contenido -->
          <div class="p-6">
            <div class="flex items-start justify-between gap-2 mb-3">
              <div>
                <h3 class="text-2xl font-extrabold text-slate-900 font-heading tracking-wide cursor-pointer hover:text-red-600 transition" onclick="openSpecModal('${bike.id}')">
                  YAMAHA ${bike.name}
                </h3>
                <p class="text-xs text-slate-500 font-medium">Color activo: <strong data-role="color-name" class="text-slate-800">${activeColor.name}</strong></p>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-bold uppercase text-slate-400 block">Precio 2026*</span>
                <span class="text-2xl font-extrabold text-red-600 font-heading">${formatCOP(bike.price)}</span>
              </div>
            </div>

            <!-- Selector de Colores Interactivo -->
            <div class="flex items-center justify-between bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200/80 mb-4">
              <span class="text-xs font-bold text-slate-600">Elige color:</span>
              <div class="flex items-center gap-2">
                ${bike.colors
                  .map(
                    (c, idx) => `
                  <button
                    type="button"
                    data-color-btn="${idx}"
                    onclick="selectBikeColor('${bike.id}', ${idx}, event)"
                    title="${c.name}"
                    aria-label="Color ${c.name}"
                    class="w-6 h-6 rounded-full border transition-transform ${
                      idx === colorIdx
                        ? "ring-2 ring-red-600 ring-offset-2 scale-110 border-slate-500"
                        : "border-slate-300 hover:scale-110"
                    }"
                    style="background-color: ${c.hex}">
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Mini especificaciones -->
            <div class="grid grid-cols-3 gap-2 text-center bg-slate-900 text-white rounded-xl p-3 mb-4">
              <div>
                <span class="text-[10px] uppercase text-slate-400 block">Cilindraje</span>
                <span class="text-xs font-extrabold">${bike.displacement} cc</span>
              </div>
              <div class="border-x border-white/10">
                <span class="text-[10px] uppercase text-slate-400 block">Peso Lleno</span>
                <span class="text-xs font-extrabold">${bike.weight}</span>
              </div>
              <div>
                <span class="text-[10px] uppercase text-slate-400 block">Potencia</span>
                <span class="text-xs font-extrabold">${bike.power.split("@")[0].trim()}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 pt-0 grid grid-cols-2 gap-2.5">
          <button
            onclick="openSpecModal('${bike.id}')"
            class="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition shadow">
            <i data-lucide="file-spreadsheet" class="w-4 h-4 text-red-400"></i>
            Ver Ficha Técnica
          </button>
          <button
            onclick="quoteBikeWhatsApp('${bike.id}')"
            class="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition shadow-md">
            ${whatsappLogoSvg("w-4 h-4")}
            Cotizar Ahora
          </button>
        </div>
      </article>
    `;
    })
    .join("");
}

// ==========================================
// 2. PESTAÑAS DE CATEGORÍAS Y CATÁLOGO COMPLETO
// ==========================================
function renderCategoryTabs() {
  const container = document.getElementById("categoryTabsContainer");
  if (!container) return;

  container.innerHTML = CATEGORIES.map((cat) => {
    const count =
      cat.id === "todas"
        ? YAMAHA_BIKES.length
        : YAMAHA_BIKES.filter((b) => b.category === cat.id).length;
    const isSelected = state.selectedCategory === cat.id;

    return `
      <button
        onclick="setCategoryFilter('${cat.id}')"
        data-category="${cat.id}"
        class="category-tab-btn shrink-0 whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
          isSelected
            ? "bg-red-600 text-white shadow-md shadow-red-600/25"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80"
        }">
        <span>${cat.name}</span>
        <span class="px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
          isSelected ? "bg-white/20 text-white" : "bg-white text-slate-600"
        }">${count}</span>
      </button>
    `;
  }).join("");
}

function setCategoryFilter(category) {
  state.selectedCategory = category;
  renderCategoryTabs();
  renderBikeCatalog();
  const activeBtn = document.querySelector(`.category-tab-btn[data-category="${category}"]`);
  if (activeBtn && window.innerWidth < 640) {
    activeBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

let searchDebounceTimer = null;
function handleCatalogSearch(value) {
  state.searchQuery = value.trim().toLowerCase();
  if (searchDebounceTimer) clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    renderBikeCatalog();
  }, 85);
}

function handleCatalogSort(value) {
  state.sortBy = value;
  renderBikeCatalog();
}

function updateCardColorInPlace(cardEl, bike, colorIndex) {
  if (!cardEl || !bike) return;
  const activeColor = bike.colors[colorIndex] || bike.colors[0];
  const imgEl = cardEl.querySelector('[data-role="bike-img"]');
  if (imgEl) {
    imgEl.src = safeImgUrl(activeColor.image);
    imgEl.alt = `Yamaha ${bike.name} color ${activeColor.name} en San Jose del Guaviare`;
  }
  const nameEl = cardEl.querySelector('[data-role="color-name"]');
  if (nameEl) {
    nameEl.textContent = activeColor.name;
  }
  const dotEl = cardEl.querySelector('[data-role="color-dot"]');
  if (dotEl) {
    dotEl.style.backgroundColor = activeColor.hex;
  }
  cardEl.querySelectorAll("[data-color-btn]").forEach((btn) => {
    const idx = Number(btn.getAttribute("data-color-btn"));
    if (idx === colorIndex) {
      btn.className = btn.className
        .replace("border-slate-300 hover:scale-110", "")
        .trim() + " ring-2 ring-red-600 ring-offset-2 scale-110 border-slate-500";
    } else {
      btn.className = btn.className
        .replace("ring-2 ring-red-600 ring-offset-2 scale-110 border-slate-500", "")
        .trim() + " border-slate-300 hover:scale-110";
    }
  });
}

function selectBikeColor(bikeId, colorIndex, event) {
  if (event) event.stopPropagation();
  state.selectedColors[bikeId] = colorIndex;
  const bike = YAMAHA_BIKES.find((b) => b.id === bikeId);
  if (bike) {
    // Actualización quirúrgica en el DOM (<5ms INP) sin reconstruir las 35 tarjetas
    const featCard = document.querySelector(`[data-featured-card="${bikeId}"]`);
    const catCard = document.querySelector(`[data-catalog-card="${bikeId}"]`);
    if (featCard || catCard) {
      updateCardColorInPlace(featCard, bike, colorIndex);
      updateCardColorInPlace(catCard, bike, colorIndex);
    } else {
      renderFeaturedBikes();
      renderBikeCatalog();
    }
  }
  if (state.activeSpecBikeId === bikeId) {
    openSpecModal(bikeId, state.activeSpecTab);
  }
}

function getFilteredBikes() {
  let list = [...YAMAHA_BIKES];

  if (state.selectedCategory !== "todas") {
    list = list.filter((b) => b.category === state.selectedCategory);
  }

  if (state.searchQuery) {
    list = list.filter(
      (b) =>
        b.name.toLowerCase().includes(state.searchQuery) ||
        b.categoryLabel.toLowerCase().includes(state.searchQuery) ||
        String(b.displacement).includes(state.searchQuery)
    );
  }

  if (state.sortBy === "precio-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "precio-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "cilindraje-desc") {
    list.sort((a, b) => b.displacement - a.displacement);
  } else if (state.sortBy === "destacadas") {
    list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return list;
}

function renderBikeCatalog() {
  const grid = document.getElementById("bikesGrid");
  const countEl = document.getElementById("bikesCount");
  if (!grid) return;

  const filtered = getFilteredBikes();
  if (countEl) {
    countEl.textContent = `Mostrando ${filtered.length} de ${YAMAHA_BIKES.length} referencias oficiales en San Jose del Guaviare`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white rounded-2xl p-12 text-center border border-slate-200">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center text-red-600">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-2">No encontramos motocicletas con ese criterio</h3>
        <p class="text-slate-600 mb-6">Prueba buscando otra referencia (ej. Tenere, NMAX, MT09, XTZ, Raptor, YZ) o muestra todas las categorías.</p>
        <button onclick="resetCatalogFilters()" class="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition">
          Ver las ${YAMAHA_BIKES.length} Motocicletas
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered
    .map((bike) => {
      const selectedColorIdx = state.selectedColors[bike.id] || 0;
      const activeColor = bike.colors[selectedColorIdx] || bike.colors[0];
      const isCompared = state.compareList.includes(bike.id);
      const monthlyEst = estimateMonthlyPayment(bike.price);

      return `
      <article data-catalog-card="${bike.id}" class="bike-card bg-white rounded-2xl border ${
        bike.featured ? "border-red-500/50 ring-1 ring-red-500/20" : "border-slate-200"
      } overflow-hidden flex flex-col justify-between relative group">
        <div>
          <!-- Encabezado con miniatura del Banner Oficial y Foto del Color -->
          <div class="relative h-60 bg-white overflow-hidden cursor-pointer border-b border-slate-100 flex items-center justify-center p-4" onclick="openSpecModal('${bike.id}')">
            <div class="absolute top-0 inset-x-0 h-16 overflow-hidden bg-slate-900">
              <img src="${safeImgUrl(bike.bannerImage)}" alt="" width="400" height="64" decoding="async" class="w-full h-full object-cover opacity-55" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-white"></div>
            </div>

            <img
              data-role="bike-img"
              src="${safeImgUrl(activeColor.image)}"
              alt="Yamaha ${bike.name} color ${activeColor.name} en San Jose del Guaviare"
              width="300"
              height="200"
              decoding="async"
              class="bike-img relative z-10 max-h-44 w-auto object-contain mx-auto mt-4 drop-shadow-md"
              loading="lazy" />

            <div class="absolute top-2.5 left-3 z-20 flex items-center gap-1.5">
              <span class="${bike.badgeColor} text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                ${bike.badge}
              </span>
              <span class="bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                ${bike.displacement} cc
              </span>
            </div>

            <button
              type="button"
              onclick="toggleCompareBike('${bike.id}', event)"
              title="Comparar ficha técnica"
              class="absolute top-2.5 right-3 z-20 px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition ${
                isCompared
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white/95 hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200 shadow-sm"
              }">
              <i data-lucide="${isCompared ? "check-square" : "git-compare"}" class="w-3.5 h-3.5"></i>
              ${isCompared ? "Comparando" : "Comparar"}
            </button>

            <img src="${safeImgUrl("motos/euro3 para las fichas.png")}" alt="Euro 3" width="52" height="24" decoding="async" loading="lazy" class="absolute bottom-2 right-3 z-20 h-6 w-auto object-contain opacity-90" />
          </div>

          <div class="p-5">
            <div class="flex items-start justify-between gap-2 mb-3">
              <div>
                <span class="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">${bike.categoryLabel}</span>
                <h3 class="text-2xl font-extrabold text-slate-900 font-heading tracking-wide cursor-pointer hover:text-red-600 transition" onclick="openSpecModal('${bike.id}')">
                  ${bike.name}
                </h3>
              </div>
              <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                <span data-role="color-dot" class="w-2.5 h-2.5 rounded-full border border-slate-400" style="background-color: ${activeColor.hex}"></span>
                <span data-role="color-name">${activeColor.name}</span>
              </span>
            </div>

            <!-- Selector de colores -->
            <div class="flex items-center justify-between mb-4 py-2 px-3 bg-slate-50 rounded-xl border border-slate-100">
              <span class="text-xs font-semibold text-slate-500">Colores (${bike.colors.length}):</span>
              <div class="flex items-center gap-2">
                ${bike.colors
                  .map(
                    (c, idx) => `
                  <button
                    type="button"
                    data-color-btn="${idx}"
                    onclick="selectBikeColor('${bike.id}', ${idx}, event)"
                    title="Ver en color ${c.name}"
                    aria-label="Color ${c.name}"
                    class="w-5 h-5 rounded-full border transition-transform ${
                      idx === selectedColorIdx
                        ? "ring-2 ring-red-600 ring-offset-2 scale-110 border-slate-500"
                        : "border-slate-300 hover:scale-110"
                    }"
                    style="background-color: ${c.hex}">
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Cuadrícula de Resumen de Ficha Técnica -->
            <div class="grid grid-cols-2 gap-2 mb-4 bg-slate-50/70 p-2.5 rounded-xl border border-slate-100 text-xs">
              <div class="flex items-center gap-2">
                <i data-lucide="gauge" class="w-4 h-4 text-red-600 shrink-0"></i>
                <div>
                  <span class="block text-[10px] uppercase font-bold text-slate-400">Cilindraje</span>
                  <span class="font-bold text-slate-800">${bike.displacement} cc</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="scale" class="w-4 h-4 text-blue-700 shrink-0"></i>
                <div>
                  <span class="block text-[10px] uppercase font-bold text-slate-400">Peso Lleno</span>
                  <span class="font-bold text-slate-800">${bike.weight}</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="zap" class="w-4 h-4 text-amber-600 shrink-0"></i>
                <div>
                  <span class="block text-[10px] uppercase font-bold text-slate-400">Potencia</span>
                  <span class="font-bold text-slate-800 truncate block max-w-[115px]">${bike.power.split("@")[0].trim()}</span>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
                <div>
                  <span class="block text-[10px] uppercase font-bold text-slate-400">Frenos / Sist.</span>
                  <span class="font-bold text-slate-800 truncate block max-w-[115px]">${bike.abs}</span>
                </div>
              </div>
            </div>

            <!-- Precio Oficial -->
            <div class="flex items-baseline justify-between pt-1 border-t border-slate-100">
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase block">Precio Oficial*</span>
                <span class="text-2xl font-extrabold text-slate-900 font-heading">${formatCOP(bike.price)}</span>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 block">
                  Desde ${formatCOP(monthlyEst)}/mes
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="px-5 pb-5 pt-0 grid grid-cols-2 gap-2.5">
          <button
            onclick="openSpecModal('${bike.id}')"
            class="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-900 hover:bg-slate-800 text-white transition shadow-sm">
            <i data-lucide="file-spreadsheet" class="w-4 h-4 text-red-400"></i>
            Ficha Técnica
          </button>
          <button
            onclick="quoteBikeWhatsApp('${bike.id}')"
            class="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white transition shadow-sm">
            ${whatsappLogoSvg("w-4 h-4")}
            Cotizar
          </button>
        </div>
      </article>
    `;
    })
    .join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function resetCatalogFilters() {
  state.searchQuery = "";
  state.sortBy = "destacadas";
  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) searchInput.value = "";
  const sortSelect = document.getElementById("catalogSortSelect");
  if (sortSelect) sortSelect.value = "destacadas";
  setCategoryFilter("todas");
}

// ==========================================
// 3. MODAL DE FICHA TÉCNICA CON BANNER + CINTILLA MOVIBLE DE TECNOLOGÍAS
// ==========================================
function openSpecModal(bikeId, tab = "todas") {
  const bike = YAMAHA_BIKES.find((b) => b.id === bikeId);
  if (!bike) return;

  state.activeSpecBikeId = bikeId;
  state.activeSpecTab = tab;

  const modal = document.getElementById("specModal");
  const container = document.getElementById("specModalBody");
  if (!modal || !container) return;

  const selectedColorIdx = state.selectedColors[bike.id] || 0;
  const activeColor = bike.colors[selectedColorIdx] || bike.colors[0];
  const monthlyEst = estimateMonthlyPayment(bike.price);

  const renderSpecRows = (obj) =>
    Object.entries(obj)
      .map(
        ([key, val], idx) => `
      <tr class="${idx % 2 === 0 ? "bg-slate-50/90" : "bg-white"} border-b border-slate-100">
        <td class="py-3.5 px-5 text-xs sm:text-sm font-bold text-slate-600 w-2/5">${key}</td>
        <td class="py-3.5 px-5 text-xs sm:text-sm font-extrabold text-slate-900">${val}</td>
      </tr>
    `
      )
      .join("");

  container.innerHTML = `
    <!-- 1. Cinta Superior con Logo Yamaha en la parte superior izquierda -->
    <div class="bg-white px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-200 flex items-center justify-between">
      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        <img src="${safeImgUrl("motos/yamaha logo en la parte superior izquierda.jpg")}" alt="Yamaha Logo" class="h-6 sm:h-9 w-auto object-contain shrink-0" />
        <span class="h-5 sm:h-6 w-px bg-slate-200 shrink-0"></span>
        <img src="${safeImgUrl("motos/yamaha-guaviare-logo.svg")}" alt="Yamaha San Jose del Guaviare" class="h-8 sm:h-10 w-8 sm:w-10 rounded-full object-contain shrink-0" />
        <div class="whitespace-nowrap leading-tight">
          <span class="block text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
            YAMAHA <span class="text-red-600">SAN JOSE DEL GUAVIARE</span>
          </span>
          <span class="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Cra. 22 # 8-43, San Jose del Guaviare, Colombia
          </span>
        </div>
      </div>
      <div class="hidden sm:flex items-center gap-2 pr-12 shrink-0">
        <img src="${safeImgUrl("motos/euro3 para las fichas.png")}" alt="Euro 3" class="h-7 sm:h-8 w-auto object-contain" />
      </div>
    </div>

    <!-- 2. BANNER OFICIAL DE LA FICHA DE LA MOTOCICLETA -->
    <div class="relative w-full h-56 sm:h-80 md:h-96 bg-slate-950 overflow-hidden">
      <img
        src="${safeImgUrl(bike.bannerImage)}"
        alt="Banner Oficial Ficha Técnica Yamaha ${bike.name}"
        class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      <div class="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 text-white">
        <div>
          <span class="${bike.badgeColor} text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full shadow-lg inline-block mb-1 sm:mb-2">
            ${bike.categoryLabel} • ${bike.badge}
          </span>
          <h2 class="text-2xl sm:text-5xl font-extrabold font-heading tracking-wide drop-shadow-lg leading-none">
            YAMAHA ${bike.name}
          </h2>
        </div>
        <div class="bg-black/80 backdrop-blur-md px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white/15 sm:text-right self-start sm:self-auto">
          <span class="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 block font-bold">Precio Lista Oficial 2026*</span>
          <span class="text-xl sm:text-4xl font-extrabold text-white font-heading">${formatCOP(bike.price)}</span>
          <span class="text-[11px] sm:text-xs text-emerald-400 block font-bold">Financiación desde ${formatCOP(monthlyEst)}/mes</span>
        </div>
      </div>
    </div>

    <!-- 2.5 CINTILLA NEGRA MOVIBLE DE TECNOLOGÍAS (TCS, BLUE CORE, EURO 3, EURO 5, FRENO DE DISCO, SMART KEY, THERMO TECH) -->
    ${renderMovableTechStrip()}

    <!-- 3. SECCIÓN INTERACTIVA: FOTO POR COLOR + ESPECIFICACIONES PRINCIPALES -->
    <div class="p-6 sm:p-8 bg-white border-b border-slate-200">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Visor de Color Interactivo -->
        <div class="lg:col-span-6 bg-slate-50 rounded-3xl p-6 border border-slate-200/80 text-center relative">
          <span class="absolute top-4 left-4 text-xs font-extrabold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            Color: <strong class="text-slate-900">${activeColor.name}</strong>
          </span>
          <img
            src="${safeImgUrl("motos/euro3 para las fichas.png")}"
            alt="Norma Euro 3"
            class="absolute top-4 right-4 h-7 w-auto object-contain" />

          <div class="h-64 sm:h-72 flex items-center justify-center my-4">
            <img
              src="${safeImgUrl(activeColor.image)}"
              alt="Yamaha ${bike.name} en color ${activeColor.name}"
              class="max-h-64 sm:max-h-72 w-auto object-contain mx-auto drop-shadow-xl transition-all duration-300" />
          </div>

          <!-- Botones de selección de color -->
          <div class="pt-3 border-t border-slate-200/80 no-print">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
              Haz clic para cambiar el color de la ${bike.name}:
            </span>
            <div class="flex flex-wrap items-center justify-center gap-2.5">
              ${bike.colors
                .map(
                  (c, idx) => `
                <button
                  onclick="selectBikeColor('${bike.id}', ${idx}, event)"
                  class="px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition ${
                    idx === selectedColorIdx
                      ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                  }">
                  <span class="w-4 h-4 rounded-full border border-slate-400 shrink-0" style="background-color: ${c.hex}"></span>
                  ${c.name}
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <!-- Resumen de la Ficha Técnica -->
        <div class="lg:col-span-6 space-y-5">
          <div>
            <span class="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-1">
              RESUMEN DEL MODELO
            </span>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              ESPECIFICACIONES DESTACADAS — ${bike.name}
            </h3>
            <p class="text-sm text-slate-600 leading-relaxed mt-2">${bike.description}</p>
          </div>

          <!-- 4 Bloques Técnicos Principales -->
          <div class="grid grid-cols-2 gap-3.5">
            <div class="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800">
              <span class="text-[11px] uppercase font-bold text-red-400 block">CILINDRAJE</span>
              <span class="text-xl sm:text-2xl font-extrabold font-heading">${bike.displacement} cc</span>
            </div>
            <div class="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800">
              <span class="text-[11px] uppercase font-bold text-red-400 block">PESO (CON ACEITE Y TANQUE LLENO)</span>
              <span class="text-xl sm:text-2xl font-extrabold font-heading">${bike.weight}</span>
            </div>
            <div class="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800">
              <span class="text-[11px] uppercase font-bold text-red-400 block">POTENCIA MÁXIMA</span>
              <span class="text-base sm:text-lg font-extrabold font-heading">${bike.power}</span>
            </div>
            <div class="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800">
              <span class="text-[11px] uppercase font-bold text-red-400 block">TORQUE MÁXIMO</span>
              <span class="text-base sm:text-lg font-extrabold font-heading">${bike.torque}</span>
            </div>
          </div>

          <!-- Tecnologías -->
          <div>
            <span class="text-xs font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
              Atributos y Tecnologías Yamaha:
            </span>
            <div class="flex flex-wrap gap-2">
              ${bike.technologies
                .map(
                  (t) => `
                <span class="inline-flex items-center gap-1.5 text-xs font-bold bg-red-50 text-red-700 border border-red-200 px-3 py-1.5 rounded-xl">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-red-600"></i> ${t}
                </span>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Botones de Acción Directa -->
          <div class="pt-2 flex flex-wrap gap-3 no-print">
            <button
              onclick="quoteBikeWhatsApp('${bike.id}')"
              class="flex-1 min-w-[200px] py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition">
              ${whatsappLogoSvg("w-5 h-5")}
              Cotizar ${bike.name} (${activeColor.name}) por WhatsApp
            </button>
            <button
              onclick="loadBikeIntoSimulator('${bike.id}')"
              class="py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition">
              <i data-lucide="calculator" class="w-4 h-4"></i>
              Simular Crédito
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. PESTAÑAS DE LA TABLA DE FICHA TÉCNICA COMPLETA (DESLIZABLE EN CELULAR) -->
    <div class="bg-slate-100 px-4 sm:px-6 py-3 sm:py-3.5 border-b border-slate-200">
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar sm:flex-wrap pb-0.5">
        <button onclick="openSpecModal('${bike.id}', 'todas')" class="shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-extrabold transition ${
    tab === "todas" ? "bg-red-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
  }">Ficha Técnica Completa</button>
        <button onclick="openSpecModal('${bike.id}', 'motor')" class="shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-extrabold transition ${
    tab === "motor" ? "bg-red-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
  }">Motor y Transmisión</button>
        <button onclick="openSpecModal('${bike.id}', 'chasis')" class="shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-extrabold transition ${
    tab === "chasis" ? "bg-red-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
  }">Chasis, Frenos y Suspensión</button>
        <button onclick="openSpecModal('${bike.id}', 'dimensiones')" class="shrink-0 whitespace-nowrap px-4 py-2 rounded-xl text-xs font-extrabold transition ${
    tab === "dimensiones" ? "bg-red-600 text-white shadow-sm" : "bg-white text-slate-700 hover:bg-slate-200"
  }">Dimensiones y Peso</button>
      </div>
    </div>

    <!-- 5. TABLAS EXHAUSTIVAS DE ESPECIFICACIONES -->
    <div class="p-4 sm:p-8 space-y-6 bg-white safe-bottom-bar">
      ${
        tab === "todas" || tab === "motor"
          ? `
        <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div class="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <i data-lucide="cpu" class="w-5 h-5 text-red-500"></i>
              <h4 class="font-extrabold text-sm sm:text-base uppercase tracking-wider">1. Especificaciones de Motor y Transmisión</h4>
            </div>
            <span class="text-xs text-slate-400 font-semibold">${bike.name}</span>
          </div>
          <table class="w-full text-left border-collapse">
            <tbody>
              ${renderSpecRows(bike.specs.motor)}
            </tbody>
          </table>
        </div>
      `
          : ""
      }

      ${
        tab === "todas" || tab === "chasis"
          ? `
        <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div class="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <i data-lucide="disc" class="w-5 h-5 text-red-500"></i>
              <h4 class="font-extrabold text-sm sm:text-base uppercase tracking-wider">2. Chasis, Suspensión, Frenos y Neumáticos</h4>
            </div>
            <span class="text-xs text-slate-400 font-semibold">${bike.name}</span>
          </div>
          <table class="w-full text-left border-collapse">
            <tbody>
              ${renderSpecRows(bike.specs.chasis)}
            </tbody>
          </table>
        </div>
      `
          : ""
      }

      ${
        tab === "todas" || tab === "dimensiones"
          ? `
        <div class="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div class="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <i data-lucide="ruler" class="w-5 h-5 text-red-500"></i>
              <h4 class="font-extrabold text-sm sm:text-base uppercase tracking-wider">3. Dimensiones, Peso y Capacidades</h4>
            </div>
            <span class="text-xs text-slate-400 font-semibold">${bike.name}</span>
          </div>
          <table class="w-full text-left border-collapse">
            <tbody>
              ${renderSpecRows(bike.specs.dimensiones)}
            </tbody>
          </table>
        </div>
      `
          : ""
      }
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  enableTechStripDrag();
  if (window.lucide) window.lucide.createIcons();
}

function closeSpecModal() {
  const modal = document.getElementById("specModal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// ==========================================
// 4. COMPARADOR DE MOTOCICLETAS
// ==========================================
function toggleCompareBike(bikeId, event) {
  if (event) event.stopPropagation();
  const idx = state.compareList.indexOf(bikeId);
  if (idx >= 0) {
    state.compareList.splice(idx, 1);
  } else {
    if (state.compareList.length >= 3) {
      showToast("Puedes comparar hasta 3 motocicletas al mismo tiempo.");
      return;
    }
    state.compareList.push(bikeId);
  }
  renderBikeCatalog();
  updateCompareBar();
}

function updateCompareBar() {
  const bar = document.getElementById("compareStickyBar");
  const slotsContainer = document.getElementById("compareSlots");
  if (!bar || !slotsContainer) return;

  if (state.compareList.length === 0) {
    bar.classList.add("translate-y-full");
    return;
  }

  bar.classList.remove("translate-y-full");
  const bikes = state.compareList.map((id) => YAMAHA_BIKES.find((b) => b.id === id)).filter(Boolean);

  slotsContainer.innerHTML = bikes
    .map(
      (b) => `
      <div class="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl text-xs text-white">
        <span class="font-bold">${b.name}</span>
        <button onclick="toggleCompareBike('${b.id}')" class="text-slate-400 hover:text-red-400">
          <i data-lucide="x" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
}

function openCompareModal() {
  if (state.compareList.length < 2) {
    showToast("Selecciona al menos 2 motocicletas para compararlas lado a lado.");
    return;
  }

  const modal = document.getElementById("compareModal");
  const body = document.getElementById("compareModalBody");
  if (!modal || !body) return;

  const bikes = state.compareList.map((id) => YAMAHA_BIKES.find((b) => b.id === id)).filter(Boolean);

  body.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse min-w-[640px]">
        <thead>
          <tr class="border-b border-slate-200 bg-slate-50">
            <th class="p-4 text-xs font-extrabold uppercase text-slate-500 w-1/4">Especificación</th>
            ${bikes
              .map((b) => {
                const col = b.colors[state.selectedColors[b.id] || 0] || b.colors[0];
                return `
              <th class="p-4 w-1/4 align-top">
                <div class="relative rounded-xl overflow-hidden h-36 mb-3 bg-white border border-slate-200 flex items-center justify-center p-2">
                  <img src="${safeImgUrl(col.image)}" alt="${b.name}" class="max-h-32 w-auto object-contain" />
                  <span class="absolute top-2 left-2 ${b.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full">${b.displacement} cc</span>
                </div>
                <h4 class="text-lg font-extrabold text-slate-900 font-heading">YAMAHA ${b.name}</h4>
                <p class="text-red-600 font-extrabold text-base mt-0.5">${formatCOP(b.price)}</p>
              </th>
            `;
              })
              .join("")}
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 text-xs sm:text-sm">
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Categoría</td>
            ${bikes.map((b) => `<td class="p-3.5 font-semibold text-slate-900">${b.categoryLabel}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Cilindraje</td>
            ${bikes.map((b) => `<td class="p-3.5 font-bold text-slate-900">${b.displacement} cc</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Potencia Máxima</td>
            ${bikes.map((b) => `<td class="p-3.5 font-semibold text-slate-900">${b.power}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Torque Máximo</td>
            ${bikes.map((b) => `<td class="p-3.5 font-semibold text-slate-900">${b.torque}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Transmisión</td>
            ${bikes.map((b) => `<td class="p-3.5 text-slate-800">${b.transmission}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Frenos / Asistencias</td>
            ${bikes.map((b) => `<td class="p-3.5 font-bold text-emerald-700">${b.abs}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Peso (con aceite y tanque lleno)</td>
            ${bikes.map((b) => `<td class="p-3.5 font-bold text-slate-900">${b.weight}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Capacidad de Combustible</td>
            ${bikes.map((b) => `<td class="p-3.5 text-slate-800">${b.fuelCapacity}</td>`).join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Cuota Mensual Estimada</td>
            ${bikes
              .map(
                (b) =>
                  `<td class="p-3.5 font-extrabold text-emerald-700">${formatCOP(
                    estimateMonthlyPayment(b.price)
                  )} / mes</td>`
              )
              .join("")}
          </tr>
          <tr>
            <td class="p-3.5 font-bold text-slate-700 bg-slate-50">Acción</td>
            ${bikes
              .map(
                (b) => `
              <td class="p-3.5">
                <button onclick="closeCompareModal(); openSpecModal('${b.id}')" class="w-full mb-2 py-2 px-3 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition">
                  Ver Ficha Completa
                </button>
                <button onclick="quoteBikeWhatsApp('${b.id}')" class="w-full py-2 px-3 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition flex items-center justify-center gap-1.5">
                  ${whatsappLogoSvg("w-3.5 h-3.5")} Cotizar ${b.name}
                </button>
              </td>
            `
              )
              .join("")}
          </tr>
        </tbody>
      </table>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCompareModal() {
  const modal = document.getElementById("compareModal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// ==========================================
// 5. SIMULADOR DE CRÉDITO YAMAHA
// ==========================================
function initCreditSimulator() {
  const select = document.getElementById("simBikeSelect");
  if (!select) return;

  select.innerHTML = YAMAHA_BIKES.map(
    (b) => `<option value="${b.id}">Yamaha ${b.name} (${b.categoryLabel}) — ${formatCOP(b.price)}</option>`
  ).join("");

  select.value = "nmax";
  updateCreditCalculation();
}

function updateCreditCalculation() {
  const select = document.getElementById("simBikeSelect");
  const downInput = document.getElementById("simDownPaymentRange");
  const monthsSelect = document.getElementById("simMonthsSelect");

  if (!select || !downInput || !monthsSelect) return;

  const bike = YAMAHA_BIKES.find((b) => b.id === select.value) || YAMAHA_BIKES[0];
  const downPercent = Number(downInput.value);
  const months = Number(monthsSelect.value);

  const downAmount = Math.round((bike.price * downPercent) / 100);
  const financedAmount = bike.price - downAmount;
  const monthlyPayment = estimateMonthlyPayment(bike.price, downPercent, months);

  document.getElementById("simDownPercentLabel").textContent = `${downPercent}% (${formatCOP(downAmount)})`;
  document.getElementById("simBikePriceLabel").textContent = formatCOP(bike.price);
  document.getElementById("simFinancedLabel").textContent = formatCOP(financedAmount);
  document.getElementById("simMonthlyResult").textContent = formatCOP(monthlyPayment);
}

function loadBikeIntoSimulator(bikeId) {
  closeSpecModal();
  const select = document.getElementById("simBikeSelect");
  if (select) {
    select.value = bikeId;
    updateCreditCalculation();
  }
  const section = document.getElementById("simulador-credito");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function sendCreditSimulationWhatsApp() {
  const select = document.getElementById("simBikeSelect");
  const downInput = document.getElementById("simDownPaymentRange");
  const monthsSelect = document.getElementById("simMonthsSelect");
  const bike = YAMAHA_BIKES.find((b) => b.id === select.value) || YAMAHA_BIKES[0];
  const downPercent = Number(downInput.value);
  const months = Number(monthsSelect.value);
  const downAmount = Math.round((bike.price * downPercent) / 100);
  const monthlyPayment = estimateMonthlyPayment(bike.price, downPercent, months);

  const msg = `¡Hola Yamaha San Jose del Guaviare! Realicé una simulación en la página web y deseo solicitar estudio de crédito para:\n\n• Motocicleta: *Yamaha ${bike.name}*\n• Precio oficial: ${formatCOP(bike.price)}\n• Cuota inicial (${downPercent}%): ${formatCOP(downAmount)}\n• Plazo deseado: ${months} meses\n• Cuota estimada: ${formatCOP(monthlyPayment)}/mes\n\n¿Me pueden indicar los requisitos para iniciar mi aprobación en San Jose del Guaviare?`;

  window.open(`https://wa.me/573003162824?text=${encodeURIComponent(msg)}`, "_blank");
}

// ==========================================
// 6. RECOMENDACIONES Y ÚLTIMAS ENTRADAS (BLOG)
// ==========================================
function renderRecommendations() {
  const container = document.getElementById("recommendationsGrid");
  if (!container) return;

  container.innerHTML = RECOMMENDATIONS.map(
    (item) => `
    <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${item.tagColor}">
            ${item.tag}
          </span>
          <div class="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
            <i data-lucide="${item.icon}" class="w-5 h-5 text-red-500"></i>
          </div>
        </div>
        <h3 class="text-xl font-extrabold text-slate-900 mb-2">${item.title}</h3>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">${item.description}</p>
      </div>
      <ul class="space-y-2 pt-3 border-t border-slate-100">
        ${item.points
          .map(
            (pt) => `
          <li class="flex items-start gap-2 text-xs font-medium text-slate-700">
            <i data-lucide="check-circle" class="w-4 h-4 text-red-600 shrink-0 mt-0.5"></i>
            <span>${pt}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `
  ).join("");
}

function renderBlogPosts() {
  const container = document.getElementById("blogGrid");
  if (!container) return;

  container.innerHTML = BLOG_POSTS.map(
    (post) => `
    <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between group">
      <div>
        <div class="relative h-52 overflow-hidden bg-slate-900 cursor-pointer" onclick="openBlogModal('${post.id}')">
          <img src="${safeImgUrl(post.image)}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
          <div class="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            ${post.category}
          </div>
        </div>
        <div class="p-6">
          <div class="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
            <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${post.date}</span>
            <span>•</span>
            <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${post.readTime}</span>
          </div>
          <h3 class="text-lg font-extrabold text-slate-900 mb-2.5 group-hover:text-red-600 transition cursor-pointer" onclick="openBlogModal('${post.id}')">
            ${post.title}
          </h3>
          <p class="text-sm text-slate-600 line-clamp-3 leading-relaxed">${post.excerpt}</p>
        </div>
      </div>
      <div class="px-6 pb-6">
        <button onclick="openBlogModal('${post.id}')" class="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-red-600 hover:text-red-700">
          Leer artículo completo <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    </article>
  `
  ).join("");
}

function openBlogModal(postId) {
  const post = BLOG_POSTS.find((p) => p.id === postId);
  if (!post) return;

  const modal = document.getElementById("blogModal");
  const body = document.getElementById("blogModalBody");
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="relative h-64 sm:h-72 bg-slate-900">
      <img src="${safeImgUrl(post.image)}" alt="${post.title}" class="w-full h-full object-cover opacity-85" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
      <div class="absolute bottom-5 left-6 right-6 text-white">
        <span class="bg-red-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">${post.category}</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold font-heading">${post.title}</h2>
        <p class="text-xs text-slate-300 mt-1">${post.date} • ${post.readTime} • Yamaha San Jose del Guaviare</p>
      </div>
    </div>
    <div class="p-6 sm:p-8 text-slate-700 text-sm sm:text-base leading-relaxed">
      ${post.content}
      <div class="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <span class="text-xs font-semibold text-slate-500">¿Deseas asesoría sobre este tema en San Jose del Guaviare?</span>
        <button onclick="closeBlogModal(); document.getElementById('necesitas-ayuda').scrollIntoView({behavior: 'smooth'})" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition">
          Hablar con un Especialista Yamaha
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeBlogModal() {
  const modal = document.getElementById("blogModal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

// ==========================================
// 7. PREGUNTAS FRECUENTES (FAQ)
// ==========================================
function renderFaqs() {
  const container = document.getElementById("faqAccordion");
  if (!container) return;

  container.innerHTML = FAQS.map(
    (faq, index) => `
    <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden transition">
      <button
        onclick="toggleFaqItem(${index})"
        class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition">
        <span class="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-3">
          <span class="w-7 h-7 rounded-lg bg-red-50 text-red-600 font-extrabold text-xs flex items-center justify-center shrink-0">0${
            index + 1
          }</span>
          ${faq.question}
        </span>
        <i id="faqIcon-${index}" data-lucide="chevron-down" class="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
      index === 0 ? "rotate-180 text-red-600" : ""
    }"></i>
      </button>
      <div id="faqContent-${index}" class="${
      index === 0 ? "block" : "hidden"
    } px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
        ${faq.answer}
      </div>
    </div>
  `
  ).join("");

  if (window.lucide) window.lucide.createIcons();
}

function toggleFaqItem(index) {
  const content = document.getElementById(`faqContent-${index}`);
  const icon = document.getElementById(`faqIcon-${index}`);
  if (!content) return;

  const isHidden = content.classList.contains("hidden");
  if (isHidden) {
    content.classList.remove("hidden");
    if (icon) icon.classList.add("rotate-180", "text-red-600");
  } else {
    content.classList.add("hidden");
    if (icon) icon.classList.remove("rotate-180", "text-red-600");
  }
}

// ==========================================
// 8. FICHA DE UBICACIÓN EN SAN JOSE DEL GUAVIARE (Cra. 22 # 8-43, San Jose del Guaviare, Colombia)
// ==========================================
function selectLocation(locationId) {
  state.activeLocationId = locationId;
  renderLocationCard();
}

function renderLocationCard() {
  const container = document.getElementById("locationCardContainer");
  if (!container) return;

  const loc = GUAVIARE_LOCATIONS[0];

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
      <div class="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <span class="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 mb-3">
            ${loc.badge}
          </span>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-2">${loc.name}</h3>
          <p class="text-xs text-slate-500 mb-6">${loc.reference}</p>

          <div class="space-y-4">
            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                <i data-lucide="map-pin" class="w-5 h-5"></i>
              </div>
              <div>
                <span class="text-xs font-bold uppercase text-slate-400 block">Dirección Oficial en San Jose del Guaviare</span>
                <p class="text-base sm:text-lg font-extrabold text-slate-900">${loc.address}</p>
                <p class="text-xs text-slate-600">${loc.city}</p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <i data-lucide="clock" class="w-5 h-5"></i>
              </div>
              <div>
                <span class="text-xs font-bold uppercase text-slate-400 block">Horarios de Atención</span>
                <p class="text-sm font-semibold text-slate-800">${loc.hoursWeekdays}</p>
                <p class="text-sm font-semibold text-slate-800">${loc.hoursSaturday}</p>
                <p class="text-xs text-slate-500">${loc.hoursSunday}</p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <i data-lucide="phone-call" class="w-5 h-5"></i>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span class="text-[10px] font-bold uppercase text-slate-400 block">Ventas Motos</span>
                  <a href="tel:${loc.phoneVentas.replace(/\s+/g, "")}" class="text-xs font-extrabold text-slate-900 hover:text-red-600">${loc.phoneVentas}</a>
                </div>
                <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span class="text-[10px] font-bold uppercase text-slate-400 block">Taller Autorizado</span>
                  <a href="tel:${loc.phoneTaller.replace(/\s+/g, "")}" class="text-xs font-extrabold text-slate-900 hover:text-red-600">${loc.phoneTaller}</a>
                </div>
                <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span class="text-[10px] font-bold uppercase text-slate-400 block">Repuestos</span>
                  <a href="tel:${loc.phoneRepuestos.replace(/\s+/g, "")}" class="text-xs font-extrabold text-slate-900 hover:text-red-600">${loc.phoneRepuestos}</a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-5 border-t border-slate-100">
            <span class="text-xs font-bold uppercase text-slate-400 block mb-2.5">Servicios disponibles en nuestra sede:</span>
            <div class="flex flex-wrap gap-1.5">
              ${loc.services
                .map(
                  (s) => `
                <span class="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> ${s}
                </span>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <div class="mt-6 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="${loc.googleMapsLink}"
            target="_blank"
            rel="noopener noreferrer"
            class="py-3 px-4 rounded-xl font-bold text-xs bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition">
            <i data-lucide="map" class="w-4 h-4 text-red-400"></i>
            Cómo Llegar (Google Maps)
          </a>
          <a
            href="https://wa.me/${loc.whatsapp}?text=${encodeURIComponent(
              `¡Hola! Quiero visitar o cotizar en Yamaha San Jose del Guaviare (${loc.address}).`
            )}"
            target="_blank"
            rel="noopener noreferrer"
            class="py-3 px-4 rounded-xl font-bold text-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center gap-2 transition shadow-md">
            ${whatsappLogoSvg("w-4 h-4")}
            WhatsApp Directo Sede
          </a>
        </div>
      </div>

      <div class="lg:col-span-6 min-h-[380px] bg-slate-100 relative">
        <iframe
          title="Mapa de ubicación ${loc.address}"
          src="${loc.mapEmbedUrl}"
          class="w-full h-full min-h-[380px] border-0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 9. AGENDAMIENTO DE TALLER Y AYUDA / WHATSAPP
// ==========================================
function openWorkshopModal() {
  const modal = document.getElementById("workshopModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeWorkshopModal() {
  const modal = document.getElementById("workshopModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function submitWorkshopForm(event) {
  event.preventDefault();
  const name = document.getElementById("wsName").value.trim();
  const phone = document.getElementById("wsPhone").value.trim();
  const model = document.getElementById("wsBikeModel").value.trim();
  const serviceType = document.getElementById("wsServiceType").value;
  const sede = document.getElementById("wsSede").value;
  const date = document.getElementById("wsDate").value;

  const msg = `¡Hola Servicio Técnico Yamaha San Jose del Guaviare! Deseo agendar una cita de taller:\n\n• Cliente: *${name}*\n• Teléfono: ${phone}\n• Motocicleta: *${model}*\n• Servicio requerido: ${serviceType}\n• Sede: ${sede}\n• Fecha solicitada: ${date}\n\nQuedo atento a la confirmación de mi turno.`;

  closeWorkshopModal();
  showToast("Redirigiendo al WhatsApp de Servicio Técnico Autorizado...");
  window.open(`https://wa.me/573003162824?text=${encodeURIComponent(msg)}`, "_blank");
}

function openPartsModal() {
  const modal = document.getElementById("partsModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closePartsModal() {
  const modal = document.getElementById("partsModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function submitPartsForm(event) {
  event.preventDefault();
  const name = document.getElementById("ptName").value.trim();
  const phone = document.getElementById("ptPhone").value.trim();
  const bikeModel = document.getElementById("ptBikeModel").value.trim();
  const bikeYear = document.getElementById("ptBikeYear").value.trim();
  const partCategory = document.getElementById("ptCategory").value;
  const partDetails = document.getElementById("ptDetails").value.trim();

  const msg = `¡Hola Almacén de Repuestos Yamaha San Jose del Guaviare! Solicito cotización de repuesto bajo el siguiente formato:\n\n• Cliente: *${name}*\n• Celular: ${phone}\n• Motocicleta Yamaha: *${bikeModel}*\n• Modelo / Año: ${bikeYear}\n• Categoría de pieza: ${partCategory}\n• Repuesto solicitado / Referencia: *${partDetails}*\n\nQuedo atento a disponibilidad y precio en Cra. 22 # 8-43, San Jose del Guaviare, Colombia.`;

  closePartsModal();
  showToast("Enviando formato de solicitud de repuesto por WhatsApp...");
  window.open(`https://wa.me/573003162824?text=${encodeURIComponent(msg)}`, "_blank");
  event.target.reset();
}

function submitHelpForm(event) {
  event.preventDefault();
  const name = document.getElementById("helpName").value.trim();
  const phone = document.getElementById("helpPhone").value.trim();
  const area = document.getElementById("helpArea").value;
  const message = document.getElementById("helpMessage").value.trim();

  const text = `¡Hola Yamaha San Jose del Guaviare! Necesito ayuda desde el sitio web:\n\n• Nombre: *${name}*\n• Celular: ${phone}\n• Área de consulta: *${area}*\n• Mensaje: ${message}`;

  showToast("¡Solicitud lista! Conectando con un asesor en San Jose del Guaviare...");
  window.open(`https://wa.me/573003162824?text=${encodeURIComponent(text)}`, "_blank");
  event.target.reset();
}

function quoteBikeWhatsApp(bikeId) {
  const bike = YAMAHA_BIKES.find((b) => b.id === bikeId);
  if (!bike) return;
  const colorIdx = state.selectedColors[bike.id] || 0;
  const color = bike.colors[colorIdx]?.name || bike.colors[0].name;

  const text = `¡Hola Yamaha San Jose del Guaviare! Estoy interesado en cotizar la motocicleta *Yamaha ${bike.name}* (${bike.displacement} cc) en color *${color}* vista en su página web (Precio oficial: ${formatCOP(
    bike.price
  )}).\n\n¿Me pueden brindar información de disponibilidad inmediata, precio con matrícula en San Jose del Guaviare y planes de financiación?`;

  window.open(`https://wa.me/573003162824?text=${encodeURIComponent(text)}`, "_blank");
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.classList.add("hidden");
  }
}

function initNavbarEvents() {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Cerrar menú móvil automáticamente al tocar cualquier sección en Android o iPhone
    mobileMenu.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });
  }

  // Cerrar modales al tocar el fondo oscuro exterior en celulares y escritorio
  const modalMap = [
    { id: "specModal", closeFn: closeSpecModal },
    { id: "compareModal", closeFn: closeCompareModal },
    { id: "workshopModal", closeFn: closeWorkshopModal },
    { id: "partsModal", closeFn: closePartsModal },
    { id: "blogModal", closeFn: closeBlogModal }
  ];

  modalMap.forEach(({ id, closeFn }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", (e) => {
        if (e.target === el) closeFn();
      });
    }
  });

  // Soporte de tecla Escape para usuarios en PC (Windows / macOS)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalMap.forEach(({ id, closeFn }) => {
        const el = document.getElementById(id);
        if (el && !el.classList.contains("hidden")) {
          closeFn();
        }
      });
      closeMobileMenu();
    }
  });
}

function showToast(message) {
  const toast = document.getElementById("appToast");
  const toastText = document.getElementById("appToastText");
  if (!toast || !toastText) return;
  toastText.textContent = message;
  toast.classList.remove("translate-y-24", "opacity-0");
  setTimeout(() => {
    toast.classList.add("translate-y-24", "opacity-0");
  }, 3600);
}
