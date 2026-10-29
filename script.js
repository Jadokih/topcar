/**
 * TOP CAR VEÍCULOS — INTERATIVIDADE DO CATÁLOGO PREMIUM (MOBILE-FIRST)
 * WhatsApp Oficial: +55 37 99979-5757
 */

const WHATSAPP_NUMBER = '5537999795757';

function buildWhatsAppUrl(modelName) {
  const message = `Olá, me interessei pelo modelo ${modelName}...`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const VEHICLES_DATA = {
  'corolla-cross': {
    id: 'corolla-cross',
    name: 'Toyota Corolla Cross XRE 2.0',
    shortMeta: '2023 • 2.0 Flex 177 cv • Câmbio CVT Sequencial',
    category: 'SUV Premium • Seminovo Selecionado',
    year: '2023',
    engine: '2.0 Flex (177 cv)',
    transmission: 'Automático CVT Sequencial',
    mileage: 'Consulte km',
    highlight: '177 cv • Full LED',
    description:
      'Conforto, tecnologia e confiabilidade na Top Car! Ideal para cidade, estrada e viagens em família. Desempenho, economia e a qualidade Toyota que é referência — um dos SUVs mais procurados e valorizados do mercado!',
    images: [
      {
        src: 'catalogo/carro 1/ft1.png',
        label: 'Frente Showroom',
        alt: 'Toyota Corolla Cross XRE 2.0 2023 branco perolizado visto de frente no showroom da Top Car Veículos',
        contain: false
      },
      {
        src: 'catalogo/carro 1/ft2.png',
        label: 'Perfil Lateral',
        alt: 'Toyota Corolla Cross XRE 2.0 2023 branco visto de perfil lateral com rodas de liga leve diamantadas',
        contain: true
      }
    ],
    features: [
      'Ano: 2023',
      'Motor 2.0 Flex de 177 cv',
      'Câmbio automático CVT com modo sequencial',
      'Bancos em couro',
      'Central multimídia com Android Auto e Apple CarPlay',
      'Ar-condicionado digital automático',
      'Direção elétrica',
      'Chave presencial com partida por botão',
      'Sensor de estacionamento',
      'Câmera de ré',
      'Controle de tração e estabilidade',
      'Assistente de partida em rampa',
      'Piloto automático',
      'Rodas de liga leve',
      'Faróis em LED',
      'Rack de teto',
      'Excelente espaço interno e porta-malas'
    ]
  },
  'renegade-limited': {
    id: 'renegade-limited',
    name: 'Jeep Renegade Limited 1.8 Flex Automático 2021',
    shortMeta: '2021 • 50.000 km • Teto Solar Panorâmico • Limited',
    category: 'SUV Compacto • Versão Topo de Linha',
    year: '2021',
    engine: '1.8 Flex',
    transmission: 'Automático de 6 marchas',
    mileage: '50.000 km',
    highlight: 'Teto Solar Panorâmico',
    description:
      'Sofisticação, conforto e personalidade na Top Car! SUV com presença, teto solar panorâmico, acabamento exclusivo da versão Limited e estilo para quem quer dirigir com personalidade.',
    images: [
      {
        src: 'catalogo/carro 2/dr.png',
        label: 'Frente Full LED',
        alt: 'Jeep Renegade Limited 1.8 Flex Automático 2021 branco com faróis em LED acesos no showroom Top Car Veículos',
        contain: false
      },
      {
        src: 'catalogo/carro 2/ft2.png',
        label: 'Ângulo Lateral',
        alt: 'Jeep Renegade Limited 1.8 Flex Automático 2021 branco com teto preto e rodas esportivas pretas',
        contain: false
      }
    ],
    features: [
      'Ano: 2021',
      'Motor: 1.8 Flex',
      'Câmbio: Automático de 6 marchas',
      'Quilometragem: 50.000 km',
      'Versão: Limited',
      'Teto solar panorâmico',
      'Bancos em couro',
      'Central multimídia com Apple CarPlay e Android Auto',
      'Ar-condicionado digital dual zone',
      'Direção elétrica',
      'Chave presencial com partida por botão',
      'Câmera de ré e sensores de estacionamento',
      'Controle de estabilidade e tração',
      'Rodas de liga leve exclusivas',
      'Volante multifuncional'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const baseAssetPrefix = document.body.dataset.assetPrefix || 'top-car/';

  function resolveAsset(relPath) {
    return `${baseAssetPrefix}${relPath}`;
  }

  /* 0. Página de Carregamento (Splash Preloader com Logo e Slogan) */
  const splashLoader = document.getElementById('splash-loader');
  const splashProgressBar = document.getElementById('splash-progress-bar');
  const splashStatusText = document.getElementById('splash-status-text');
  const splashEnterBtn = document.getElementById('splash-enter-catalog-btn');

  let splashDismissed = false;

  function dismissSplash() {
    if (splashDismissed || !splashLoader) return;
    splashDismissed = true;
    if (splashProgressBar) splashProgressBar.style.width = '100%';
    if (splashStatusText) splashStatusText.textContent = 'Showroom pronto!';
    splashLoader.classList.add('is-hidden');
    document.body.classList.remove('is-loading');
  }

  if (splashLoader) {
    let progress = 12;
    if (splashProgressBar) splashProgressBar.style.width = `${progress}%`;

    const progressTimer = setInterval(() => {
      if (splashDismissed) {
        clearInterval(progressTimer);
        return;
      }
      progress += 22;
      if (progress >= 100) {
        progress = 100;
        if (splashProgressBar) splashProgressBar.style.width = '100%';
        clearInterval(progressTimer);
        setTimeout(() => dismissSplash(), 320);
      } else if (splashProgressBar) {
        splashProgressBar.style.width = `${progress}%`;
      }
    }, 380);

    if (splashEnterBtn) {
      splashEnterBtn.addEventListener('click', () => {
        clearInterval(progressTimer);
      });
    }
  }

  /* 0.5 Menu Mobile (Gaveta) */
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileNavToggle && mobileDrawer) {
    mobileNavToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileNavToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('[data-drawer-link]').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* 1. Troca de fotos dentro de cada card do catálogo */
  const photoSwitchBtns = document.querySelectorAll('[data-card-photo-btn]');
  photoSwitchBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.vehicle-card');
      if (!card) return;

      const imgSrc = btn.getAttribute('data-img-src');
      const imgAlt = btn.getAttribute('data-img-alt');
      const isContain = btn.getAttribute('data-img-contain') === 'true';

      const mainImg = card.querySelector('.vehicle-card__img');
      const backdrop = card.querySelector('.vehicle-card__backdrop');

      if (mainImg && imgSrc) {
        mainImg.src = imgSrc;
        if (imgAlt) mainImg.alt = imgAlt;
        mainImg.classList.toggle('is-contain-mode', isContain);
      }

      if (backdrop && imgSrc) {
        backdrop.style.backgroundImage = `url("${imgSrc}")`;
      }

      card.querySelectorAll('[data-card-photo-btn]').forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
    });
  });

  /* 2. Vitrine Interativa no Hero */
  const heroDots = document.querySelectorAll('[data-hero-slide]');
  const heroImg = document.getElementById('hero-showcase-img');
  const heroTitle = document.getElementById('hero-showcase-title');
  const heroSpecs = document.getElementById('hero-showcase-specs');
  const heroTag = document.getElementById('hero-showcase-tag');
  const heroWaBtn = document.getElementById('hero-showcase-wa');

  const heroSlides = [
    {
      carKey: 'corolla-cross',
      tag: 'DESTAQUE • 2023',
      img: resolveAsset('catalogo/carro 1/ft1.png')
    },
    {
      carKey: 'renegade-limited',
      tag: 'TETO SOLAR • 2021',
      img: resolveAsset('catalogo/carro 2/dr.png')
    }
  ];

  function setHeroSlide(index) {
    const slide = heroSlides[index];
    const vehicle = VEHICLES_DATA[slide.carKey];
    if (!vehicle || !heroImg) return;

    heroImg.src = slide.img;
    heroImg.alt = vehicle.images[0].alt;
    if (heroTitle) heroTitle.textContent = vehicle.name;
    if (heroSpecs) heroSpecs.textContent = vehicle.shortMeta;
    if (heroTag) heroTag.textContent = slide.tag;
    if (heroWaBtn) {
      heroWaBtn.href = buildWhatsAppUrl(vehicle.name);
      heroWaBtn.setAttribute('aria-label', `Falar com consultor sobre ${vehicle.name}`);
    }

    heroDots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });
  }

  heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => setHeroSlide(idx));
  });

  /* 3. Filtros e Busca em Tempo Real no Catálogo */
  const filterButtons = document.querySelectorAll('[data-filter]');
  const searchInput = document.getElementById('catalog-search-input');
  const vehicleCards = document.querySelectorAll('.vehicle-card');
  const emptyState = document.getElementById('catalog-empty-state');
  const resetFilterBtn = document.getElementById('reset-catalog-filters');

  let activeFilter = 'all';
  let searchQuery = '';

  function filterCatalog() {
    let visibleCount = 0;

    vehicleCards.forEach((card) => {
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();
      const textContent = card.textContent.toLowerCase();

      const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter.toLowerCase());
      const matchesSearch =
        !searchQuery ||
        textContent.includes(searchQuery) ||
        tags.includes(searchQuery);

      const shouldShow = matchesFilter && matchesSearch;
      card.style.display = shouldShow ? 'flex' : 'none';
      if (shouldShow) visibleCount++;
    });

    if (emptyState) {
      emptyState.classList.toggle('is-visible', visibleCount === 0);
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.getAttribute('data-filter') || 'all';
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      filterCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterCatalog();
    });
  }

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      activeFilter = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      filterButtons.forEach((b) => {
        b.classList.toggle('is-active', b.getAttribute('data-filter') === 'all');
      });
      filterCatalog();
    });
  }

  /* 4. Modal de Ficha Técnica Completa & Galeria (<dialog>) */
  const modal = document.getElementById('vehicle-detail-modal');
  const modalTitle = document.getElementById('modal-vehicle-title');
  const modalCategory = document.getElementById('modal-vehicle-category');
  const modalDesc = document.getElementById('modal-vehicle-desc');
  const modalMainImg = document.getElementById('modal-main-img');
  const modalThumbsContainer = document.getElementById('modal-thumbs-container');
  const modalSpecsList = document.getElementById('modal-specs-list');
  const modalWaBtn = document.getElementById('modal-wa-btn');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openVehicleModal(carId, initialPhotoIndex = 0) {
    const car = VEHICLES_DATA[carId];
    if (!car || !modal) return;

    modalTitle.textContent = car.name;
    modalCategory.textContent = car.category;
    modalDesc.textContent = car.description;

    const firstImg = car.images[initialPhotoIndex] || car.images[0];
    modalMainImg.src = resolveAsset(firstImg.src);
    modalMainImg.alt = firstImg.alt;

    modalThumbsContainer.innerHTML = '';
    car.images.forEach((imgObj, idx) => {
      const thumbBtn = document.createElement('button');
      thumbBtn.type = 'button';
      thumbBtn.className = `modal-thumb ${idx === initialPhotoIndex ? 'is-active' : ''}`;
      thumbBtn.setAttribute('aria-label', `Ver foto: ${imgObj.label}`);
      thumbBtn.innerHTML = `<img src="${resolveAsset(imgObj.src)}" alt="${imgObj.alt}">`;

      thumbBtn.addEventListener('click', () => {
        modalMainImg.src = resolveAsset(imgObj.src);
        modalMainImg.alt = imgObj.alt;
        modalThumbsContainer.querySelectorAll('.modal-thumb').forEach((t) => t.classList.remove('is-active'));
        thumbBtn.classList.add('is-active');
      });

      modalThumbsContainer.appendChild(thumbBtn);
    });

    modalSpecsList.innerHTML = '';
    car.features.forEach((feat) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${feat}</span>
      `;
      modalSpecsList.appendChild(li);
    });

    modalWaBtn.href = buildWhatsAppUrl(car.name);

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
  }

  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const carId = btn.getAttribute('data-open-modal');
      openVehicleModal(carId, 0);
    });
  });

  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => modal.close());
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const clickedOutside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;
      if (clickedOutside) modal.close();
    });
  }

  /* 5. Botão de Copiar Endereço na seção Como Chegar */
  const copyAddressBtn = document.getElementById('copy-address-btn');
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', async () => {
      const addressText = 'Avenida Professor Melo Cançado, 1705, Belvedere, Pará de Minas-MG';
      const labelSpan = copyAddressBtn.querySelector('span');
      const originalText = labelSpan ? labelSpan.textContent : 'Copiar Endereço';

      try {
        await navigator.clipboard.writeText(addressText);
        if (labelSpan) labelSpan.textContent = 'Endereço Copiado!';
        setTimeout(() => {
          if (labelSpan) labelSpan.textContent = originalText;
        }, 2500);
      } catch {
        if (labelSpan) labelSpan.textContent = 'Av. Prof. Melo Cançado, 1705';
      }
    });
  }
});
