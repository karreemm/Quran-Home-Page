const languageSelect = document.getElementById("language-select");
const elementsToTranslate = {
  "navbar-brand": {
    english: "Dr/ Bassil Tawfik",
    arabic: "د/ باسل توفيق",
  },
  "nav-login": {
    english: "Log In",
    arabic: "تسجيل الدخول",
  },
  "nav-signup": {
    english: "Sign Up",
    arabic: "التسجيل",
  },
  "sidebar-lectures": {
    english: "Lectures",
    arabic: "المحاضرات",
  },
  "sidebar-articles": {
    english: "Articles",
    arabic: "المقالات",
  },
  "sidebar-signup": {
    english: "Sign Up",
    arabic: "التسجيل",
  },
  "sidebar-login": {
    english: "Log In",
    arabic: "تسجيل الدخول",
  },
  "sidebar-about": {
    english: "About",
    arabic: "عن الدكتور",
  },
  "search-input": {
    english: "Search Now",
    arabic: "ابحث الان",
  },
  "search-button": {
    english: "Search",
    arabic: "بحث",
  },
  "language-label": {
    english: "Language",
    arabic: "اللغة",
  },
  "home-content": {
    english: "Explore The Miracles of the Holy Quran With Dr/ Bassil",
    arabic: "اكتشف الاعجاز العلمي في القران الكريم عن طريق د/ باسل",
  },
  footer: {
    english: "© 2023 Dr/Bassil Tawfik. All Rights Reserved.",
    arabic: "© ٢٠٢٣ دكتور/باسل توفيق. جميع الحقوق محفوظة",
  },
};

const originalEnglishContent = elementsToTranslate["english-content"];

function updateContent(_language) {
  for (const elementId in elementsToTranslate) {
    const element = document.getElementById(elementId);
    if (element) {
      if (typeof elementsToTranslate[elementId] === "object") {
        element.textContent = elementsToTranslate[elementId][_language];
      } else {
        element.textContent = elementsToTranslate[elementId];
      }
    }
  }
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.placeholder = elementsToTranslate["search-input"][_language];
  }
}

languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value;
  updateContent(selectedLanguage);
});

languageSelect.value = "english";
