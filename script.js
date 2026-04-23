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
          "images/united-states_home_fan_1.jpg",
          "images/united-states_home_fan_2.jpg",
          "images/united-states_home_fan_3.jpg",
        ],
        buyLink: "#",
      },
      {
        kitName: "Away",
        version: "Fan Version",
        enabled: true,
        images: [
          "images/united-states_away_fan_1.jpg",
          "images/united-states_away_fan_2.jpg",
          "images/united-states_away_fan_3.jpg",
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

const teamsContainer = document.getElementById("teams-container");

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

function getPriceByVersion(version) {
  if (version === "Fan Version") {
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
  - Loops through kits and creates cards
*/
function renderTeams(teams) {
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

      const kitCard = document.createElement("article");
      kitCard.className = "kit-card";
      const price = getPriceByVersion(kit.version);

      const kitTitle = document.createElement("h3");
      kitTitle.className = "kit-title";
      kitTitle.textContent = kit.version;

      const kitVersion = document.createElement("p");
      kitVersion.className = "kit-version";
      kitVersion.textContent = `${kit.kitName} Kit - $${price}`;

      const imageRow = document.createElement("div");
      imageRow.className = "image-row";

      // Show multiple images side by side (at least 3 in our sample data)
      kit.images.forEach((imagePath, index) => {
        const imageElement = createKitImage(
          imagePath,
          `${team.teamName} ${kit.kitName} ${kit.version} image ${index + 1}`
        );
        imageElement.addEventListener("click", () => {
          openImageModal(imagePath, imageElement.alt);
        });
        imageRow.appendChild(imageElement);
      });

      kitCard.append(kitTitle, kitVersion, imageRow);
      kitGrid.appendChild(kitCard);
    });

    teamSection.appendChild(kitGrid);
    teamsContainer.appendChild(teamSection);
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
renderTeams(teamsData);
