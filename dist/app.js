(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const readableText = (element) => {
    if (!element) return '';
    const fallback = element.cloneNode(true);
    $$('br', fallback).forEach((lineBreak) => lineBreak.replaceWith(' '));
    return (element.innerText || fallback.textContent || '').replace(/\s+/g, ' ').trim();
  };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const programData = {
    coding: {
      title: 'Dasturiy injiniring',
      description: 'Raqamli yechimlar yaratishga qiziqasizmi? Ushbu yo‘nalish dasturlash asoslari, kompyuter tizimlari va amaliy loyihalar bilan tanishtiradi.',
      themes: ['Dasturlash va algoritmik fikrlash', 'Veb-sahifalar yaratish asoslari', 'Ma’lumotlar bilan ishlash', 'Amaliy loyiha va jamoada ishlash']
    },
    auto: {
      title: 'Avtomobillarni ta’mirlash',
      description: 'Avtomobil tuzilishini tushunish, texnik holatini tekshirish va unga xizmat ko‘rsatish bo‘yicha kasbiy bilimlar bilan tanishing.',
      themes: ['Avtomobilning asosiy tizimlari', 'Texnik xizmat va diagnostika', 'Ta’mirlash asboblaridan foydalanish', 'Ustaxonada mehnat xavfsizligi']
    },
    sewing: {
      title: 'Tikuvchilik',
      description: 'G‘oyadan tayyor mahsulotgacha: mato tanlash, bichish va tikish jarayonlari orqali kasbiy mahoratni rivojlantirishga yo‘naltirilgan soha.',
      themes: ['Materiallar va ularning xususiyatlari', 'Andaza tayyorlash va bichish', 'Tikuv uskunalari bilan ishlash', 'Tayyor mahsulot sifatini tekshirish']
    },
    tractor: {
      title: 'Traktorchi-mashinist',
      description: 'Qishloq xo‘jaligi texnikasining tuzilishi, undan foydalanish va texnik xizmat ko‘rsatish bo‘yicha yo‘nalish bilan tanishing.',
      themes: ['Traktor va qishloq xo‘jaligi mashinalari', 'Texnik xizmat ko‘rsatish asoslari', 'Agrotexnik ishlar bilan tanishish', 'Texnikadan xavfsiz foydalanish']
    },
    energy: {
      title: 'Elektr jihozlari',
      description: 'Elektr tizimlarini tushunish, elektr jihozlariga xizmat ko‘rsatish va xavfsiz ishlash ko‘nikmalariga yo‘naltirilgan kasbiy soha.',
      themes: ['Elektrotexnika asoslari', 'Elektr sxemalarini o‘qish', 'O‘lchov asboblari bilan ishlash', 'Elektr xavfsizligi va texnik xizmat']
    },
    accounting: {
      title: 'Buxgalteriya hisobi',
      description: 'Hisob-kitob, hujjatlar va moliyaviy ma’lumotlar bilan tartibli ishlashga qiziquvchilar uchun yo‘nalish haqida umumiy ma’lumot.',
      themes: ['Buxgalteriya hisobining asoslari', 'Boshlang‘ich hujjatlar bilan ishlash', 'Elektron jadvallarda hisob-kitob', 'Hisobot va ma’lumotlarni tekshirish']
    },
    transport: {
      title: 'Transport logistikasi',
      description: 'Yuk va yo‘lovchi tashish jarayonlarini tushunish, tashishni rejalashtirish va transport hujjatlari bilan ishlashga oid soha.',
      themes: ['Transport va logistika asoslari', 'Tashish jarayonlarini rejalashtirish', 'Transport hujjatlari bilan tanishish', 'Xizmat sifati va harakat xavfsizligi']
    },
    sport: {
      title: 'Sport faoliyati',
      description: 'Jismoniy tayyorgarlik, sog‘lom turmush tarzi va sport mashg‘ulotlarini tashkil etish bilan bog‘liq yo‘nalish haqida tanishing.',
      themes: ['Jismoniy tayyorgarlik asoslari', 'Mashg‘ulotlarni tashkil etish', 'Sport tadbirlarida ishtirok etish', 'Mashg‘ulotlarda xavfsizlik va sog‘lom turmush']
    }
  };

  const newsData = {
    admission: {
      title: 'Qabulga tayyorlanish: nimadan boshlash kerak?',
      paragraphs: [
        '1. Yo‘nalishni tanlang. Sizga qiziq bo‘lgan kasblarning mazmunini o‘rganing va joriy o‘quv yilida qaysi yo‘nalishlarga qabul ochilganini rasmiy portaldan tekshiring.',
        '2. Talablarni bilib oling. Qabul muddati, ta’lim shakli, hujjatlar ro‘yxati va tanlov tartibi bo‘yicha amaldagi rasmiy e’lon bilan tanishing. Kerakli ma’lumotlarni oldindan tayyorlab qo‘ying.',
        '3. Arizani topshiring. my.edu.uz portalidagi ko‘rsatmalarga amal qiling, kiritilgan ma’lumotlarni yuborishdan oldin tekshiring va ariza holatini shaxsiy kabinetingizda kuzating.',
        'Saytdagi yo‘nalishlar 2025/2026-yil ro‘yxati asosida berilgan. Joriy qabulda ochiq yo‘nalishlar va o‘rinlar bo‘yicha rasmiy portal ma’lumotiga tayaning.'
      ]
    },
    programs: {
      title: 'Ta’lim yo‘nalishlari va qabul ma’lumotlari',
      paragraphs: [
        'Saytdagi ta’lim yo‘nalishlari 2025/2026-o‘quv yili uchun e’lon qilingan rasmiy qabul hujjatlariga tayangan. Quyidagi hujjatlarda So‘x tuman texnikumiga tegishli ma’lumotlarni muassasa nomi bo‘yicha topishingiz mumkin.',
        'Ro‘yxat texnikumda ko‘rsatilgan kasbiy sohalar bilan tanishish uchun berilgan. Bu tarixiy ma’lumot bo‘lib, joriy o‘quv yilida aynan shu yo‘nalishlarga qabul ochilganini anglatmaydi.',
        'Joriy qabul yo‘nalishlari, ta’lim shakli, muddati, o‘rinlar soni va talablarni amaldagi rasmiy e’lon yoki my.edu.uz portalidan tekshiring.'
      ],
      showSources: true
    },
    guide: {
      title: 'O‘zingizga mos kasbni qanday tanlaysiz?',
      paragraphs: [
        'Qiziqishlaringizdan boshlang. Qaysi mashg‘ulotlarni bajarayotganda vaqt tez o‘tadi? Texnika, hisob-kitob, ijod yoki odamlar bilan ishlash — o‘zingizga yoqadigan faoliyatlarni yozib chiqing.',
        'Kuchli tomonlaringizni baholang. Maktabdagi fanlar, amaliy ishlar va kundalik tajribangizdan misollar toping. Ustozlar va yaqinlaringizning fikrini tinglab, o‘zingizning xulosangizni shakllantiring.',
        'Kasbning kundalik ishini o‘rganing. Shu sohada ishlaydigan mutaxassis bilan suhbatlashing, oddiy amaliy topshiriqni sinab ko‘ring va ish muhiti sizga mos kelishini baholang.',
        'Bir nechta yo‘nalishni solishtiring. Nimalarni o‘rganishingiz, qanday ko‘nikmalar kerakligi va keyingi rivojlanish imkoniyatlarini hisobga oling. So‘ng tanlagan yo‘nalishingizning joriy qabul talablarini rasmiy manbadan tekshiring.'
      ]
    }
  };

  const openDialog = (dialog) => {
    if (!dialog || dialog.open) return;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    document.body.classList.add('dialog-open');
  };
  const closeDialog = (dialog) => {
    if (!dialog) return;
    if (typeof dialog.close === 'function') dialog.close();
    else dialog.removeAttribute('open');
    if (!$('dialog[open]')) document.body.classList.remove('dialog-open');
  };

  $$('dialog').forEach((dialog) => {
    dialog.addEventListener('close', () => {
      if (!$('dialog[open]')) document.body.classList.remove('dialog-open');
    });
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog);
    });
  });
  $$('[data-close]').forEach((button) => button.addEventListener('click', () => closeDialog(button.closest('dialog'))));

  const menuToggle = $('#menu-toggle');
  const mainNav = $('#main-nav');
  const closeMenu = () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Menyuni ochish');
    mainNav?.classList.remove('is-open');
  };
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Menyuni yopish' : 'Menyuni ochish');
    mainNav?.classList.toggle('is-open', isOpen);
  });
  $$('a', mainNav || document.createElement('div')).forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', (event) => {
    if (mainNav?.classList.contains('is-open') && !mainNav.contains(event.target) && !menuToggle?.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });

  const getProgramTitle = (key) => {
    const trigger = $(`[data-program="${key}"]`);
    const card = trigger?.closest('[data-category]');
    return trigger?.dataset.title || readableText(card?.querySelector('h3')) || programData[key]?.title || '';
  };
  const showProgram = (key) => {
    const program = programData[key];
    if (!program) return;
    const title = $('#program-title');
    const description = $('#program-description');
    const list = $('#program-list');
    if (title) title.textContent = getProgramTitle(key);
    if (description) description.textContent = program.description;
    if (list) {
      list.replaceChildren(...program.themes.map((theme) => {
        const item = document.createElement('li');
        item.textContent = theme;
        return item;
      }));
    }
    openDialog($('#program-dialog'));
  };
  $$('[data-program]').forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault();
    showProgram(button.dataset.program);
  }));

  $$('[data-news]').forEach((button) => button.addEventListener('click', (event) => {
    const news = newsData[button.dataset.news];
    if (!news) return;
    event.preventDefault();
    const title = $('#news-title');
    const body = $('#news-body');
    if (title) title.textContent = readableText($('h3', button)) || news.title;
    if (body) {
      body.replaceChildren(...news.paragraphs.map((text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph;
      }));
      if (news.showSources) {
        const links = $$('#sources-dialog a[href]').filter((link) => /\.pdf(?:[?#]|$)/i.test(link.href));
        if (links.length) {
          const heading = document.createElement('h3');
          heading.className = 'dialog-subtitle';
          heading.textContent = '2025/2026-yil rasmiy hujjatlari';
          const list = document.createElement('ul');
          list.className = 'source-list';
          links.forEach((link) => {
            const item = document.createElement('li');
            item.append(link.cloneNode(true));
            list.append(item);
          });
          body.append(heading, list);
        }
      }
    }
    openDialog($('#news-dialog'));
  }));

  const programCards = $$('[data-category]');
  const filterButtons = $$('[data-filter]');
  const allProgramsButton = $('#show-all-programs');
  let currentFilter = 'all';
  let programsExpanded = false;
  const renderPrograms = () => {
    programCards.forEach((card) => {
      const matches = currentFilter === 'all' || card.dataset.category.split(/\s+/).includes(currentFilter);
      card.hidden = !matches || (currentFilter === 'all' && !programsExpanded && card.classList.contains('extra-program'));
    });
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === currentFilter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (allProgramsButton) {
      allProgramsButton.hidden = currentFilter !== 'all';
      allProgramsButton.setAttribute('aria-expanded', String(programsExpanded));
      const label = $('[data-show-label]', allProgramsButton) || allProgramsButton;
      label.textContent = programsExpanded ? 'Kamroq ko‘rsatish' : 'Barcha yo‘nalishlar';
    }
    const status = $('#program-results-status');
    if (status) status.textContent = `${programCards.filter((card) => !card.hidden).length} ta yo‘nalish ko‘rsatilmoqda`;
  };
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    renderPrograms();
  }));
  allProgramsButton?.addEventListener('click', () => {
    programsExpanded = !programsExpanded;
    renderPrograms();
  });
  renderPrograms();

  const accessDialog = $('#access-dialog');
  let textScale = 1;
  const applyTextScale = () => {
    document.documentElement.style.setProperty('--text-scale', textScale.toFixed(1));
    const plus = $('#font-plus');
    const minus = $('#font-minus');
    if (plus) plus.disabled = textScale >= 1.2;
    if (minus) minus.disabled = textScale <= 1;
    const value = $('#font-value');
    if (value) value.textContent = `${Math.round(textScale * 100)}%`;
  };
  const applyContrast = (value) => {
    document.body.classList.toggle('high-contrast', value);
    const toggle = $('#contrast-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(value));
      toggle.textContent = value ? 'O‘chirish' : 'Yoqish';
    }
  };
  $('#access-open')?.addEventListener('click', () => {
    closeMenu();
    openDialog(accessDialog);
  });
  $('#font-plus')?.addEventListener('click', () => {
    textScale = Math.min(1.2, Math.round((textScale + 0.1) * 10) / 10);
    applyTextScale();
  });
  $('#font-minus')?.addEventListener('click', () => {
    textScale = Math.max(1, Math.round((textScale - 0.1) * 10) / 10);
    applyTextScale();
  });
  $('#contrast-toggle')?.addEventListener('click', () => applyContrast(!document.body.classList.contains('high-contrast')));
  $('#access-reset')?.addEventListener('click', () => {
    textScale = 1;
    applyTextScale();
    applyContrast(false);
  });
  applyTextScale();
  applyContrast(false);

  const searchDialog = $('#search-dialog');
  const searchInput = $('#search-input');
  const searchResults = $('#search-results');
  const normalize = (text) => text.toLocaleLowerCase('uz').replace(/[‘’ʻʼ'`]/g, '').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();
  const sectionEntries = $$('main section[id]').map((section) => {
    const title = readableText($('h2', section));
    const linkLabels = $$('a[href^="#"]').filter((link) => link.hash === `#${section.id}`).map(readableText).join(' ');
    const keywords = [section.dataset.search || '', section.id, readableText($('.eyebrow', section)), linkLabels].join(' ');
    return title ? { title, type: 'section', target: section.id, keywords } : null;
  }).filter(Boolean);
  const programEntries = Object.keys(programData).map((key) => ({ title: getProgramTitle(key), type: 'program', target: key, keywords: programData[key].themes.join(' ') }));
  const searchEntries = [...sectionEntries, ...programEntries];
  const renderSearch = () => {
    if (!searchResults) return;
    const query = normalize(searchInput?.value || '');
    const matches = searchEntries.filter((entry) => !query || normalize(`${entry.title} ${entry.keywords}`).includes(query)).slice(0, query ? 12 : 7);
    searchResults.replaceChildren();
    if (!matches.length) {
      const empty = document.createElement('p');
      empty.className = 'search-empty';
      empty.textContent = 'Hech narsa topilmadi. Boshqa so‘z bilan qidirib ko‘ring.';
      searchResults.append(empty);
    }
    matches.forEach((entry) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'search-result';
      const title = document.createElement('strong');
      title.textContent = entry.title;
      const type = document.createElement('span');
      type.textContent = entry.type === 'program' ? 'Ta’lim yo‘nalishi' : 'Sayt bo‘limi';
      button.append(title, type);
      button.addEventListener('click', () => {
        closeDialog(searchDialog);
        if (entry.type === 'program') {
          showProgram(entry.target);
        } else {
          const target = document.getElementById(entry.target);
          if (target) {
            target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
            if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
          }
        }
      });
      searchResults.append(button);
    });
    const status = $('#search-status');
    if (status) status.textContent = query ? `${matches.length} ta natija topildi` : 'Sayt bo‘limlari va yo‘nalishlar';
  };
  $('#search-open')?.addEventListener('click', () => {
    closeMenu();
    if (searchInput) searchInput.value = '';
    renderSearch();
    openDialog(searchDialog);
    searchInput?.focus();
  });
  searchInput?.addEventListener('input', renderSearch);
  searchInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      $('button', searchResults || document.createElement('div'))?.click();
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      $('button', searchResults || document.createElement('div'))?.focus();
    }
  });
  searchResults?.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    const buttons = $$('button', searchResults);
    const index = buttons.indexOf(document.activeElement);
    if (index < 0) return;
    event.preventDefault();
    if (event.key === 'ArrowUp' && index === 0) searchInput?.focus();
    else buttons[Math.max(0, Math.min(buttons.length - 1, index + (event.key === 'ArrowDown' ? 1 : -1)))]?.focus();
  });

  const navLinks = mainNav ? $$('a[href^="#"]', mainNav) : [];
  const observedSections = navLinks.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean);
  if ('IntersectionObserver' in window && observedSections.length) {
    const visibleSections = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibleSections.set(entry.target.id, entry.isIntersecting));
      const activeSection = observedSections.find((section) => visibleSections.get(section.id));
      if (!activeSection) return;
      navLinks.forEach((link) => {
        const active = link.hash === `#${activeSection.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-18% 0px -58% 0px', threshold: 0 });
    observedSections.forEach((section) => observer.observe(section));
  }

  const backTop = $('#back-top');
  const updateBackTop = () => {
    if (backTop) backTop.hidden = window.scrollY < 600;
  };
  backTop?.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
  window.addEventListener('scroll', updateBackTop, { passive: true });
  updateBackTop();
})();
