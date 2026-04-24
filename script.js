/*
  Data-first approach:
  - We start with one team only (United States).
  - Later you can add more teams by adding more objects to this array.
  - The rendering code below does not need to change when you add teams.
*/
const teamsData = [
  {
    teamName: "United States",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        /*
          Image naming format for scaling:
          teamname_kitname_version_index.ext

          Example:
          united-states_home_fan_1.jpg
          united-states_home_fan_2.jpg
          united-states_home_fan_3.jpg
        */
        images: [
          "images/united-states_home_fan_3.jpg",
          "images/united-states_home_fan_2.jpg",
          "images/united-states_home_fan_1.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/united-states_away_fan_3.jpg",
          "images/united-states_away_fan_2.jpg",
          "images/united-states_away_fan_1.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Player Version",
        enabled: true,
        images: [
          "images/united-states_home_player_1.jpg",
          "images/united-states_home_player_2.jpg",
          "images/united-states_home_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Player Version",
        enabled: true,
        images: [
          "images/united-states_away_player_1.jpg",
          "images/united-states_away_player_2.jpg",
          "images/united-states_away_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Kids Version",
        enabled: false,
        images: [
          "images/united-states_home_kids_1.jpg",
          "images/united-states_home_kids_2.jpg",
          "images/united-states_home_kids_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Kids Version",
        enabled: false,
        images: [
          "images/united-states_away_kids_1.jpg",
          "images/united-states_away_kids_2.jpg",
          "images/united-states_away_kids_3.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Brazil",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/brazil_home_fan_1.jpg",
          "images/brazil_home_fan_2.jpg",
          "images/brazil_home_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/brazil_away_fan_1.jpg",
          "images/brazil_away_fan_2.jpg",
          "images/brazil_away_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Player Version",
        enabled: true,
        images: [
          "images/brazil_home_player_1.jpg",
          "images/brazil_home_player_2.jpg",
          "images/brazil_home_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Player Version",
        enabled: true,
        images: [
          "images/brazil_away_player_1.jpg",
          "images/brazil_away_player_2.jpg",
          "images/brazil_away_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Kids Version",
        enabled: true,
        images: [
          "images/brazil_home_kids_1.jpg",
          "images/brazil_home_kids_2.jpg",
          "images/brazil_home_kids_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Kids Version",
        enabled: true,
        images: [
          "images/brazil_away_kids_1.jpg",
          "images/brazil_away_kids_2.jpg",
          "images/brazil_away_kids_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "1998 Home Retro",
        enabled: true,
        images: [
          "images/brazil_retro_1.jpg",
          "images/brazil_retro_2.jpg",
          "images/brazil_retro_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Women's Version",
        enabled: true,
        images: [
          "images/brazil_home_women_1.jpg",
          "images/brazil_home_women_2.jpg",
          "images/brazil_home_women_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Women's Version",
        enabled: true,
        images: [
          "images/brazil_away_women_1.jpg",
          "images/brazil_away_women_2.jpg",
          "images/brazil_away_women_3.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Mexico",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/mexico_home_fan_1.jpg",
          "images/mexico_home_fan_2.jpg",
          "images/mexico_home_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/mexico_away_fan_1.jpg",
          "images/mexico_away_fan_2.jpg",
          "images/mexico_away_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Player Version",
        enabled: true,
        images: [
          "images/mexico_home_player_1.jpg",
          "images/mexico_home_player_2.jpg",
          "images/mexico_home_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Player Version",
        enabled: true,
        images: [
          "images/mexico_away_player_1.jpg",
          "images/mexico_away_player_2.jpg",
          "images/mexico_away_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Kids Version",
        enabled: true,
        images: [
          "images/mexico_home_kids_1.jpg",
          "images/mexico_home_kids_2.jpg",
          "images/mexico_home_kids_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Kids Version",
        enabled: false,
        images: [
          "images/mexico_away_kids_1.jpg",
          "images/mexico_away_kids_2.jpg",
          "images/mexico_away_kids_3.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Argentina",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/argentina_home_fan_1.jpg",
          "images/argentina_home_fan_2.jpg",
          "images/argentina_home_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/argentina_away_fan_1.jpg",
          "images/argentina_away_fan_2.jpg",
          "images/argentina_away_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Player Version",
        enabled: true,
        images: [
          "images/argentina_home_player_1.jpg",
          "images/argentina_home_player_2.jpg",
          "images/argentina_home_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Player Version",
        enabled: true,
        images: [
          "images/argentina_away_player_1.jpg",
          "images/argentina_away_player_2.jpg",
          "images/argentina_away_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Kids Version",
        enabled: true,
        images: [
          "images/argentina_home_kids_1.jpg",
          "images/argentina_home_kids_2.jpg",
          "images/argentina_home_kids_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Kids Version",
        enabled: true,
        images: [
          "images/argentina_away_kids_1.jpg",
          "images/argentina_away_kids_2.jpg",
          "images/argentina_away_kids_3.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Uruguay",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/uruguay_home_fan_1.jpg",
          "images/uruguay_home_fan_2.jpg",
          "images/uruguay_home_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/uruguay_away_fan_1.jpg",
          "images/uruguay_away_fan_2.jpg",
          "images/uruguay_away_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Player Version",
        enabled: false,
        images: [
          "images/uruguay_home_player_1.jpg",
          "images/uruguay_home_player_2.jpg",
          "images/uruguay_home_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Player Version",
        enabled: false,
        images: [
          "images/uruguay_away_player_1.jpg",
          "images/uruguay_away_player_2.jpg",
          "images/uruguay_away_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Kids Version",
        enabled: false,
        images: [
          "images/uruguay_home_kids_1.jpg",
          "images/uruguay_home_kids_2.jpg",
          "images/uruguay_home_kids_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Kids Version",
        enabled: false,
        images: [
          "images/uruguay_away_kids_1.jpg",
          "images/uruguay_away_kids_2.jpg",
          "images/uruguay_away_kids_3.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Colombia",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/colombia_home_fan_1.jpg",
          "images/colombia_home_fan_2.jpg",
          "images/colombia_home_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/colombia_away_fan_1.jpg",
          "images/colombia_away_fan_2.jpg",
          "images/colombia_away_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Player Version",
        enabled: true,
        images: [
          "images/colombia_home_player_1.jpg",
          "images/colombia_home_player_2.jpg",
          "images/colombia_home_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Player Version",
        enabled: true,
        images: [
          "images/colombia_away_player_1.jpg",
          "images/colombia_away_player_2.jpg",
          "images/colombia_away_player_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Home",
        version: "Kids Version",
        enabled: true,
        images: [
          "images/colombia_home_kids_1.jpg",
          "images/colombia_home_kids_2.jpg",
          "images/colombia_home_kids_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Kids Version",
        enabled: false,
        images: [
          "images/colombia_away_kids_1.jpg",
          "images/colombia_away_kids_2.jpg",
          "images/colombia_away_kids_3.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
];

const brazilianTeamsData = [
  {
    teamName: "Atlético MG",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/galo_home_1.jpg",
          "images/BrazilianTeams/galo_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/galo_away_1.jpg",
          "images/BrazilianTeams/galo_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Botafogo",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/botafogo_home_1.jpg",
          "images/BrazilianTeams/botafogo_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/botafogo_away_1.jpg",
          "images/BrazilianTeams/botafogo_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Corinthians",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/corinthians_home_1.jpg",
          "images/BrazilianTeams/corinthians_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/corinthians_away_1.jpg",
          "images/BrazilianTeams/corinthians_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Cruzeiro",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/cruzeiro_home_1.jpg",
          "images/BrazilianTeams/cruzeiro_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/cruzeiro_away_1.jpg",
          "images/BrazilianTeams/cruzeiro_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Flamengo",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/flamengo_home_1.jpg",
          "images/BrazilianTeams/flamengo_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/flamengo_away_1.jpg",
          "images/BrazilianTeams/flamengo_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Fluminense",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/fluminense_home_1.jpg",
          "images/BrazilianTeams/fluminense_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/fluminense_away_1.jpg",
          "images/BrazilianTeams/fluminense_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Grêmio",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/gremio_home_1.jpg",
          "images/BrazilianTeams/gremio_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/gremio_away_1.jpg",
          "images/BrazilianTeams/gremio_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Internacional",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/inter_home_1.jpg",
          "images/BrazilianTeams/inter_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/inter_away_1.jpg",
          "images/BrazilianTeams/inter_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Palmeiras",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/palmeiras_home_1.jpg",
          "images/BrazilianTeams/palmeiras_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/palmeiras_away_1.jpg",
          "images/BrazilianTeams/palmeiras_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "São Paulo",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/sao-paulo_home_1.jpg",
          "images/BrazilianTeams/sao-paulo_home_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
  {
    teamName: "Vasco",
    kits: [
      {
        kitName: "Home",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/vasco_home_1.jpg",
          "images/BrazilianTeams/vasco_home_2.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/BrazilianTeams/vasco_away_1.jpg",
          "images/BrazilianTeams/vasco_away_2.jpg",
        ],
        buyLink: "#",
      },
    ],
  },
];

const teamsContainer = document.getElementById("teams-container");
const brazilianTeamsContainer = document.getElementById("brazilian-teams-container");

/*
  Helper function: creates one image element.
  If the file does not exist yet, the browser shows a broken-image icon.
  This is okay while you are still adding real photos.
*/
function createKitImage(imagePath, altText) {
  const image = document.createElement("img");
  image.className = "kit-image";
  image.src = imagePath;
  image.alt = altText;
  return image;
}

const SWIPE_THRESHOLD_PX = 50;
const TAP_SUPPRESS_MS = 400;

/**
 * Fills a media node with a single image, or a swipeable/clickable carousel if multiple paths.
 * @param {HTMLElement} imageWrap
 * @param {string[]} imagePaths
 * @param {string} imageAltText - base; "photo i of n" is appended when n > 1
 */
function mountKitCardMedia(imageWrap, imagePaths, imageAltText) {
  if (!imagePaths || imagePaths.length === 0) {
    return;
  }

  if (imagePaths.length === 1) {
    const path = imagePaths[0];
    const img = createKitImage(path, imageAltText);
    img.addEventListener("click", () => {
      openImageModal(path, imageAltText);
    });
    imageWrap.appendChild(img);
    return;
  }

  const n = imagePaths.length;
  imageWrap.classList.add("kit-card__media--carousel");
  imageWrap.setAttribute("role", "group");
  imageWrap.setAttribute("aria-label", imageAltText);
  if (!imageWrap.hasAttribute("tabindex")) {
    imageWrap.setAttribute("tabindex", "0");
  }

  const track = document.createElement("div");
  track.className = "kit-card__track";
  track.style.setProperty("--n", String(n));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    track.classList.add("is-reduced-motion");
  }

  const altAt = (i) => `${imageAltText} (photo ${i + 1} of ${n})`;
  let currentIndex = 0;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchActive = false;
  let touchMoved = false;
  let suppressImageClick = false;

  const counterEl = document.createElement("div");
  counterEl.className = "kit-card__counter";
  counterEl.setAttribute("aria-hidden", "true");
  counterEl.textContent = `1 / ${n}`;

  const makeNavButton = (direction, label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `kit-card__nav-btn kit-card__nav-btn--${direction}`;
    button.setAttribute("aria-label", label);
    return button;
  };

  const prevButton = makeNavButton("prev", "Previous photo");
  const nextButton = makeNavButton("next", "Next photo");
  prevButton.textContent = "‹";
  nextButton.textContent = "›";

  const updateTransform = () => {
    track.style.setProperty("transform", `translateX(calc(-100% * ${currentIndex} / ${n}))`);
  };

  const updateUi = () => {
    updateTransform();
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === n - 1;
    counterEl.textContent = `${currentIndex + 1} / ${n}`;
    imageWrap.setAttribute(
      "aria-label",
      `${imageAltText} — photo ${currentIndex + 1} of ${n}. Use arrows, buttons, or swipe.`
    );
  };

  const go = (delta) => {
    const next = currentIndex + delta;
    if (next < 0 || next > n - 1) {
      return;
    }
    currentIndex = next;
    updateUi();
  };

  prevButton.addEventListener("click", (e) => {
    e.stopPropagation();
    go(-1);
  });
  nextButton.addEventListener("click", (e) => {
    e.stopPropagation();
    go(1);
  });

  for (let i = 0; i < n; i += 1) {
    const slide = document.createElement("div");
    slide.className = "kit-card__slide";
    const img = createKitImage(imagePaths[i], altAt(i));
    img.addEventListener("click", (event) => {
      if (suppressImageClick) {
        event.preventDefault();
        return;
      }
      openImageModal(imagePaths[currentIndex], altAt(currentIndex));
    });
    slide.appendChild(img);
    track.appendChild(slide);
  }

  const nav = document.createElement("div");
  nav.className = "kit-card__nav";
  nav.append(prevButton, nextButton);

  imageWrap.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length !== 1) {
        return;
      }
      touchActive = true;
      touchMoved = false;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    },
    { passive: true }
  );

  imageWrap.addEventListener(
    "touchmove",
    (e) => {
      if (!touchActive || e.touches.length !== 1) {
        return;
      }
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      if (Math.abs(x - touchStartX) > 10 || Math.abs(y - touchStartY) > 10) {
        touchMoved = true;
      }
    },
    { passive: true }
  );

  imageWrap.addEventListener("touchend", (e) => {
    if (!touchActive) {
      return;
    }
    touchActive = false;
    const t = e.changedTouches[0];
    if (!t) {
      return;
    }
    const endX = t.clientX;
    const endY = t.clientY;
    const dx = endX - touchStartX;
    const dy = endY - touchStartY;
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy)) {
      if (touchMoved) {
        suppressImageClick = true;
        window.setTimeout(() => {
          suppressImageClick = false;
        }, TAP_SUPPRESS_MS);
      }
      return;
    }
    suppressImageClick = true;
    window.setTimeout(() => {
      suppressImageClick = false;
    }, TAP_SUPPRESS_MS);
    if (dx < 0) {
      go(1);
    } else {
      go(-1);
    }
  });

  imageWrap.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  });

  imageWrap.append(track, counterEl, nav);
  currentIndex = 0;
  updateUi();
}

function openImageModal(src, alt) {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");

  modalImage.src = src;
  modalImage.alt = alt;
  modalCaption.textContent = alt;
  modal.classList.add("is-open");
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");
  modal.classList.remove("is-open");
}

function getPriceByVersion(version, teamName) {
  if (version === "Fan Version") {
    return 40;
  }
  if (teamName === "Brazil" && version === "Women's Version") {
    return 40;
  }
  return 45;
}

function initializeTabs() {
  const tabNav = document.querySelector(".tab-nav");
  const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
  const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

  if (!tabButtons.length || !tabPanels.length) {
    return;
  }

  if (tabNav) {
    tabNav.setAttribute("role", "tablist");
  }

  const panelById = new Map(tabPanels.map((panel) => [panel.id, panel]));

  tabButtons.forEach((button, index) => {
    const targetPanelId = button.dataset.tabTarget;
    const panel = panelById.get(targetPanelId);
    const tabId = button.id || `tab-${targetPanelId || index}`;

    button.id = tabId;
    button.setAttribute("role", "tab");
    if (targetPanelId) {
      button.setAttribute("aria-controls", targetPanelId);
    }

    if (panel) {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tabId);
    }
  });

  function setActiveTab(targetButton, options = {}) {
    const shouldFocus = options.focus === true;

    tabButtons.forEach((button) => {
      const isSelected = button === targetButton;
      const targetPanelId = button.dataset.tabTarget;
      const panel = panelById.get(targetPanelId);

      button.classList.toggle("is-active", isSelected);
      button.setAttribute("aria-selected", String(isSelected));
      button.setAttribute("tabindex", isSelected ? "0" : "-1");

      if (panel) {
        panel.classList.toggle("is-active", isSelected);
        panel.hidden = !isSelected;
      }
    });

    if (shouldFocus) {
      targetButton.focus();
    }
  }

  const initiallyActiveButton =
    tabButtons.find((button) => button.classList.contains("is-active")) ||
    tabButtons[0];
  setActiveTab(initiallyActiveButton);

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      setActiveTab(button);
    });

    button.addEventListener("keydown", (event) => {
      let nextButton = null;

      if (event.key === "ArrowRight") {
        nextButton = tabButtons[(index + 1) % tabButtons.length];
      } else if (event.key === "ArrowLeft") {
        nextButton = tabButtons[(index - 1 + tabButtons.length) % tabButtons.length];
      } else if (event.key === "Home") {
        nextButton = tabButtons[0];
      } else if (event.key === "End") {
        nextButton = tabButtons[tabButtons.length - 1];
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActiveTab(button);
        return;
      }

      if (nextButton) {
        event.preventDefault();
        setActiveTab(nextButton, { focus: true });
      }
    });
  });
}

/*
  Main renderer:
  - Loops through teams
  - Creates team sections
  - Loops through kits and creates one store-style card per style (name, version, price; multiple photos use carousel)
*/
function renderTeams(teams, containerElement) {
  if (!containerElement) {
    return;
  }

  teams.forEach((team) => {
    const teamSection = document.createElement("section");
    teamSection.className = "team-section";

    const teamName = document.createElement("h2");
    teamName.className = "team-name";
    teamName.textContent = team.teamName;
    teamSection.appendChild(teamName);

    const kitGrid = document.createElement("div");
    kitGrid.className = "kit-grid";

    team.kits.forEach((kit) => {
      if (kit.enabled === false) {
        return;
      }

      if (!kit.images || !kit.images.length) {
        return;
      }

      const kitCard = document.createElement("article");
      kitCard.className = "kit-card";
      const price = getPriceByVersion(kit.version, team.teamName);
      const productName = `${team.teamName} ${kit.kitName}`;
      const imageAlt = `${team.teamName} ${kit.kitName} ${kit.version}`;

      const imageWrap = document.createElement("div");
      imageWrap.className = "kit-card__media";
      mountKitCardMedia(imageWrap, kit.images, imageAlt);

      const textBlock = document.createElement("div");
      textBlock.className = "kit-card__body";

      const kitTitle = document.createElement("h3");
      kitTitle.className = "kit-title";
      kitTitle.textContent = productName;

      const kitVersion = document.createElement("p");
      kitVersion.className = "kit-version";
      kitVersion.textContent = kit.version;

      const priceEl = document.createElement("p");
      priceEl.className = "kit-price";
      priceEl.textContent = `$${price}`;

      textBlock.append(kitTitle, kitVersion, priceEl);
      kitCard.append(imageWrap, textBlock);
      kitGrid.appendChild(kitCard);
    });

    teamSection.appendChild(kitGrid);
    containerElement.appendChild(teamSection);
  });
}

document.getElementById("modal-close").addEventListener("click", closeImageModal);

document.getElementById("image-modal").addEventListener("click", (event) => {
  if (event.target.id === "image-modal") {
    closeImageModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageModal();
  }
});

initializeTabs();
renderTeams(
  [...teamsData].sort((a, b) => a.teamName.localeCompare(b.teamName, "en")),
  teamsContainer
);
renderTeams(brazilianTeamsData, brazilianTeamsContainer);
