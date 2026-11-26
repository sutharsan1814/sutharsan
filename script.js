/* ==========================================================================
   PORTFOLIO DATA — Edit all portfolio content from this single object
   ========================================================================== */

const PORTFOLIO_DATA = {
  brandName: "Sutharsan",
  kicker: "Entrepreneur · B.E. CSE (AI & ML) · Vibe Coder",
  heroPhoto: {
    src: "assets/photo.jpg",
    alt: "Portrait of Sutharsan",
    fallbackLetter: "S",
  },
  taglines: [
    "Building Ideas into Reality with AI.",
    "Creative Thinker. AI-Powered Builder.",
    "Turning Ideas into Modern Digital Experiences.",
  ],
  taglineIntervalMs: 3500,

  about: {
    academic: "3rd-Year B.E. CSE (AI & ML)",
    craft: "Vibe Coding & Frontend",
    venture: "Founder & CEO, VELOWINGS TECHNOLOGY",
    bio: "I am Sutharsan, a 3rd-year B.E. Computer Science and Engineering (AI & ML) student, a passionate Vibe Coder, and an Entrepreneur. I heavily use AI tools to build modern frontend websites and turn ideas into functional digital experiences. I am interested in AI-powered development, frontend technologies, and creative problem-solving. I continuously explore new technologies and build practical projects.",
  },

  skills: {
    highlights: [
      "AI-Powered Vibe Coding",
      "Frontend Website Development",
      "AI Tools Integration",
      "Creative Problem Solving",
    ],
    groups: [
      {
        label: "Tools",
        items: ["Figma", "FlutterFlow", "Firebase"],
      },
      {
        label: "AI Tools",
        items: ["Google Antigravity", "ChatGPT"],
      },
      {
        label: "Focus Areas",
        items: [
          "AI-Assisted Vibe Coding",
          "Prompt Writing",
          "Frontend Website Building",
          "UI/UX Design",
          "Video Editing",
          "Photo Editing",
        ],
      },
    ],
  },

  project: {
    title: "TeamUp",
    badge: "Mobile Application",
    description:
      "TeamUp is a student collaboration platform designed to help college students find the right teammates for hackathons, projects, and academic activities. It connects students based on their skills, interests, departments, and availability, making teamwork easier and more effective.",
    role: "Project planning, UI/UX design, and development.",
    tags: ["Figma", "FlutterFlow", "Firebase"],
  },

  leadership: {
    eyebrow: "Leadership & Entrepreneurship",
    heading: "Founder & CEO, VELOWINGS TECHNOLOGY",
    subheading: "A student-focused learning and professional development initiative.",
    logo: {
      src: "/public/images/velowings-logo.png",
      alt: "VELOWINGS TECHNOLOGY logo",
    },
    links: [
      {
        label: "velowingstechnology.in",
        url: "https://velowingstechnology.in",
      },
      {
        label: "Instagram",
        url: "https://instagram.com/_VELOWINGS_TECHNOLOGY_official",
      },
    ],
    cards: [
      {
        title: "What we run",
        items: [
          "Free and paid webinars",
          "Technical workshops",
          "Career guidance sessions",
          "Industry expert interactions",
          "Participation certificates",
        ],
      },
      {
        title: "My responsibilities",
        items: [
          "Leading operations and business strategy",
          "Coordinating industry experts and speakers",
          "Managing marketing, branding, and student outreach",
          "Building partnerships and organisational growth",
        ],
      },
    ],
  },

  contact: {
    email: "sutharsan182007@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/sutharsan-s-785b95388",
    linkedinDisplay: "linkedin.com/in/sutharsan-s-785b95388",
    whatsappNumber: "919003749115",
    whatsappDefaultMessage:
      "Hi Sutharsan, I saw your portfolio and would like to connect",
  },

  footer: "© 2026 Sutharsan. All rights reserved.",
};

/* ==========================================================================
   Application Logic
   ========================================================================== */

(function initPortfolio() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Bind image fallbacks before populating content so fast/cached load errors are never missed
  setupImageFallbacks();
  renderContent();
  setupMobileMenu();
  setupScrollProgressAndNavbar();
  setupTaglineRotator();
  setupSectionHeaderReveals();
  setupAboutWordReveal();
  setupSkillTagsReveal();
  setupLeadershipCardsReveal();
  setupProjectsHorizontalTrack();
  setupContactForm();

  /* ------------------------------------------------------------------------
     1. Populate Content
     ------------------------------------------------------------------------ */
  function renderContent() {
    // Brand & Hero
    const navBrandText = document.querySelector(".nav-brand-text");
    if (navBrandText) navBrandText.textContent = PORTFOLIO_DATA.brandName;

    const heroKicker = document.getElementById("heroKicker");
    if (heroKicker) heroKicker.textContent = PORTFOLIO_DATA.kicker;

    renderHeroName(PORTFOLIO_DATA.brandName);

    const heroPhoto = document.getElementById("heroPhoto");
    if (heroPhoto) {
      heroPhoto.src = PORTFOLIO_DATA.heroPhoto.src;
      heroPhoto.alt = PORTFOLIO_DATA.heroPhoto.alt;
    }
    const heroFallbackMonogram = document.querySelector(".fallback-monogram");
    if (heroFallbackMonogram) {
      heroFallbackMonogram.textContent = PORTFOLIO_DATA.heroPhoto.fallbackLetter;
    }

    // About
    const aboutAcademic = document.getElementById("aboutAcademic");
    const aboutCraft = document.getElementById("aboutCraft");
    const aboutVenture = document.getElementById("aboutVenture");
    if (aboutAcademic) aboutAcademic.textContent = PORTFOLIO_DATA.about.academic;
    if (aboutCraft) aboutCraft.textContent = PORTFOLIO_DATA.about.craft;
    if (aboutVenture) aboutVenture.textContent = PORTFOLIO_DATA.about.venture;

    renderAboutWords(PORTFOLIO_DATA.about.bio);

    // Skills Highlights
    const highlightsGrid = document.getElementById("highlightsGrid");
    if (highlightsGrid) {
      highlightsGrid.innerHTML = "";
      PORTFOLIO_DATA.skills.highlights.forEach((title, index) => {
        const card = document.createElement("article");
        card.className = "highlight-card";

        const num = document.createElement("span");
        num.className = "highlight-num";
        num.textContent = String(index + 1).padStart(2, "0");

        const heading = document.createElement("h3");
        heading.className = "highlight-title";
        heading.textContent = title;

        card.append(num, heading);
        highlightsGrid.appendChild(card);
      });
    }

    // Skills Groups
    const skillsGroups = document.getElementById("skillsGroups");
    if (skillsGroups) {
      skillsGroups.innerHTML = "";
      PORTFOLIO_DATA.skills.groups.forEach((group) => {
        const row = document.createElement("div");
        row.className = "skill-group-row";

        const label = document.createElement("h3");
        label.className = "skill-group-label";
        label.textContent = group.label;

        const list = document.createElement("div");
        list.className = "skill-tags-list";

        group.items.forEach((item) => {
          const tag = document.createElement("span");
          tag.className = "skill-tag";
          tag.textContent = item;
          list.appendChild(tag);
        });

        row.append(label, list);
        skillsGroups.appendChild(row);
      });
    }

    // Project (TeamUp)
    setText("projectBadge", PORTFOLIO_DATA.project.badge);
    setText("projectTitle", PORTFOLIO_DATA.project.title);
    setText("projectDesc", PORTFOLIO_DATA.project.description);
    setText("projectRole", PORTFOLIO_DATA.project.role);

    const projectTags = document.getElementById("projectTags");
    if (projectTags) {
      projectTags.innerHTML = "";
      PORTFOLIO_DATA.project.tags.forEach((tagName) => {
        const li = document.createElement("li");
        li.className = "project-tag";
        li.textContent = tagName;
        projectTags.appendChild(li);
      });
    }

    // Leadership & Entrepreneurship
    setText("leadershipEyebrow", PORTFOLIO_DATA.leadership.eyebrow);
    setText("leadershipHeading", PORTFOLIO_DATA.leadership.heading);
    setText("leadershipSubheading", PORTFOLIO_DATA.leadership.subheading);

    const leadershipLogo = document.getElementById("leadershipLogo");
    if (leadershipLogo) {
      if (
        leadershipLogo.getAttribute("src") !== PORTFOLIO_DATA.leadership.logo.src
      ) {
        leadershipLogo.src = PORTFOLIO_DATA.leadership.logo.src;
      }
      leadershipLogo.alt = PORTFOLIO_DATA.leadership.logo.alt;
    }

    const leadershipLinks = document.getElementById("leadershipLinks");
    if (leadershipLinks) {
      leadershipLinks.innerHTML = "";
      PORTFOLIO_DATA.leadership.links.forEach((linkItem, index) => {
        const anchor = document.createElement("a");
        anchor.href = linkItem.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.className =
          index === 0
            ? "btn btn-company leadership-link"
            : "btn btn-secondary leadership-link";
        anchor.textContent = linkItem.label;
        leadershipLinks.appendChild(anchor);
      });
    }

    const leadershipCards = document.getElementById("leadershipCards");
    if (leadershipCards) {
      leadershipCards.innerHTML = "";
      PORTFOLIO_DATA.leadership.cards.forEach((cardData) => {
        const card = document.createElement("article");
        card.className = "leadership-card";

        const title = document.createElement("h3");
        title.className = "leadership-card-title";
        title.textContent = cardData.title;

        const list = document.createElement("ul");
        list.className = "leadership-card-list";

        cardData.items.forEach((itemText) => {
          const li = document.createElement("li");
          li.className = "leadership-card-item";
          li.textContent = itemText;
          list.appendChild(li);
        });

        card.append(title, list);
        leadershipCards.appendChild(card);
      });
    }

    // Contact & WhatsApp Float
    const emailLink = document.getElementById("contactEmailLink");
    if (emailLink) {
      emailLink.href = `mailto:${PORTFOLIO_DATA.contact.email}`;
      emailLink.textContent = PORTFOLIO_DATA.contact.email;
    }

    const linkedinLink = document.getElementById("contactLinkedinLink");
    if (linkedinLink) {
      linkedinLink.href = PORTFOLIO_DATA.contact.linkedinUrl;
      linkedinLink.textContent = PORTFOLIO_DATA.contact.linkedinDisplay;
    }

    const whatsappFloat = document.getElementById("whatsappFloat");
    if (whatsappFloat) {
      const encoded = encodeURIComponent(
        PORTFOLIO_DATA.contact.whatsappDefaultMessage
      );
      whatsappFloat.href = `https://wa.me/${PORTFOLIO_DATA.contact.whatsappNumber}?text=${encoded}`;
    }

    setText("footerCopy", PORTFOLIO_DATA.footer);
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function renderHeroName(name) {
    const heroName = document.getElementById("heroName");
    if (!heroName) return;

    heroName.setAttribute("aria-label", name);
    heroName.innerHTML = "";

    Array.from(name).forEach((char, idx) => {
      const clip = document.createElement("span");
      clip.className = "hero-letter-clip";
      clip.setAttribute("aria-hidden", "true");

      const letter = document.createElement("span");
      letter.className = "hero-letter";
      letter.textContent = char === " " ? "\u00A0" : char;
      if (!prefersReducedMotion) {
        letter.style.animationDelay = `${idx * 0.055 + 0.08}s`;
      }

      clip.appendChild(letter);
      heroName.appendChild(clip);
    });
  }

  function renderAboutWords(text) {
    const aboutEl = document.getElementById("aboutText");
    if (!aboutEl) return;

    aboutEl.innerHTML = "";
    const words = text.trim().split(/\s+/);

    words.forEach((word, idx) => {
      const span = document.createElement("span");
      span.className = "reveal-word";
      if (prefersReducedMotion) {
        span.classList.add("is-revealed");
      }
      span.textContent = word;
      aboutEl.appendChild(span);

      if (idx < words.length - 1) {
        aboutEl.appendChild(document.createTextNode(" "));
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. Image Fallbacks (when assets/*.jpg|png are missing)
     ------------------------------------------------------------------------ */
  function setupImageFallbacks() {
    bindFallback("heroPhoto", "heroPhotoFallback");
    setupOptionalImage("leadershipLogo", "leadershipLogoWrap");
  }

  function setupOptionalImage(imgId, wrapId) {
    const img = document.getElementById(imgId);
    const wrap = document.getElementById(wrapId);
    if (!img || !wrap) return;

    const hideLogo = () => {
      wrap.hidden = true;
    };

    const showLogo = () => {
      wrap.hidden = false;
    };

    img.addEventListener("error", hideLogo);
    img.addEventListener("load", () => {
      if (img.naturalWidth === 0) {
        hideLogo();
      } else {
        showLogo();
      }
    });

    if (img.complete && img.naturalWidth === 0) {
      hideLogo();
    }
  }

  function bindFallback(imgId, fallbackId) {
    const img = document.getElementById(imgId);
    const fallback = document.getElementById(fallbackId);
    if (!img || !fallback) return;

    const showFallback = () => {
      img.hidden = true;
      fallback.hidden = false;
    };

    const showImage = () => {
      img.hidden = false;
      fallback.hidden = true;
    };

    img.addEventListener("error", showFallback);
    img.addEventListener("load", () => {
      if (img.naturalWidth === 0) {
        showFallback();
      } else {
        showImage();
      }
    });

    if (img.complete && img.naturalWidth === 0) {
      showFallback();
    }
  }

  /* ------------------------------------------------------------------------
     3. Mobile Hamburger Menu
     ------------------------------------------------------------------------ */
  function setupMobileMenu() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;

    const setOpen = (isOpen) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
      menu.hidden = !isOpen;
    };

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!expanded);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth >= 768 && toggle.getAttribute("aria-expanded") === "true") {
          setOpen(false);
        }
      },
      { passive: true }
    );
  }

  /* ------------------------------------------------------------------------
     4. Scroll Progress Bar & Navbar Blur State (via IntersectionObserver)
     ------------------------------------------------------------------------ */
  function setupScrollProgressAndNavbar() {
    const progressBar = document.getElementById("scrollProgressBar");
    const header = document.getElementById("siteHeader");
    const hero = document.getElementById("hero");

    if (header && hero) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            header.classList.toggle("is-scrolled", !entry.isIntersecting);
          });
        },
        {
          root: null,
          threshold: 0,
          rootMargin: "-80px 0px 0px 0px",
        }
      );
      heroObserver.observe(hero);
    }

    if (!progressBar) return;

    let ticking = false;
    const updateProgress = () => {
      ticking = false;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio =
        docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;
      progressBar.style.transform = `scaleX(${ratio})`;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(updateProgress);
        }
      },
      { passive: true }
    );

    window.addEventListener("resize", updateProgress, { passive: true });
    updateProgress();
  }

  /* ------------------------------------------------------------------------
     5. Rotating Taglines (3.5s interval with smooth fade)
     ------------------------------------------------------------------------ */
  function setupTaglineRotator() {
    const taglineEl = document.getElementById("heroTagline");
    const list = PORTFOLIO_DATA.taglines;
    if (!taglineEl || !list.length) return;

    let currentIdx = 0;
    taglineEl.textContent = list[currentIdx];

    if (prefersReducedMotion || list.length < 2) return;

    window.setInterval(() => {
      taglineEl.classList.add("is-fading");
      window.setTimeout(() => {
        currentIdx = (currentIdx + 1) % list.length;
        taglineEl.textContent = list[currentIdx];
        taglineEl.classList.remove("is-fading");
      }, 420);
    }, PORTFOLIO_DATA.taglineIntervalMs);
  }

  /* ------------------------------------------------------------------------
     6. Section Heading Slide-In + Thin Blue Line Draw
     ------------------------------------------------------------------------ */
  function setupSectionHeaderReveals() {
    const headers = document.querySelectorAll(".section-reveal");
    if (!headers.length) return;

    if (prefersReducedMotion) {
      headers.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    headers.forEach((header) => observer.observe(header));
  }

  /* ------------------------------------------------------------------------
     7. About Word-by-Word Scroll Reveal (IntersectionObserver + rAF)
     ------------------------------------------------------------------------ */
  function setupAboutWordReveal() {
    const aboutEl = document.getElementById("aboutText");
    if (!aboutEl) return;

    const words = Array.from(aboutEl.querySelectorAll(".reveal-word"));
    if (!words.length) return;

    if (prefersReducedMotion) {
      words.forEach((word) => word.classList.add("is-revealed"));
      return;
    }

    let isObservingScroll = false;
    let rafId = 0;

    const updateWords = () => {
      rafId = 0;
      const rect = aboutEl.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Map paragraph traversal from entering lower viewport to reaching upper reading zone
      const startY = viewportH * 0.85;
      const endY = viewportH * 0.28;
      const rawProgress = (startY - rect.top) / (startY - endY);
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      const revealedCount = Math.round(progress * words.length);

      words.forEach((word, index) => {
        word.classList.toggle("is-revealed", index < revealedCount);
      });
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateWords);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isObservingScroll) {
            isObservingScroll = true;
            window.addEventListener("scroll", onScroll, { passive: true });
            updateWords();
          } else if (!entry.isIntersecting && isObservingScroll) {
            isObservingScroll = false;
            window.removeEventListener("scroll", onScroll);
            updateWords();
          }
        });
      },
      { rootMargin: "120px 0px 120px 0px", threshold: 0 }
    );

    observer.observe(aboutEl);
    updateWords();
  }

  /* ------------------------------------------------------------------------
     8. Skill Tags Pop-In With Stagger
     ------------------------------------------------------------------------ */
  function setupSkillTagsReveal() {
    const groupsContainer = document.getElementById("skillsGroups");
    if (!groupsContainer) return;

    const rows = groupsContainer.querySelectorAll(".skill-group-row");
    if (!rows.length) return;

    if (prefersReducedMotion) {
      groupsContainer
        .querySelectorAll(".skill-tag")
        .forEach((tag) => tag.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tags = entry.target.querySelectorAll(".skill-tag");
            tags.forEach((tag, idx) => {
              tag.style.transitionDelay = `${idx * 65}ms`;
              tag.classList.add("is-visible");
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -40px 0px" }
    );

    rows.forEach((row) => observer.observe(row));
  }

  /* ------------------------------------------------------------------------
     9. Leadership Cards Fade-In (Sticky Left + Scrolling Right)
     ------------------------------------------------------------------------ */
  function setupLeadershipCardsReveal() {
    const cards = document.querySelectorAll(".leadership-card");
    if (!cards.length) return;

    if (prefersReducedMotion) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card) => observer.observe(card));
  }

  /* ------------------------------------------------------------------------
     10. Projects Horizontal Scroll Track (Transform Only)
     ------------------------------------------------------------------------ */
  function setupProjectsHorizontalTrack() {
    const wrapper = document.getElementById("projectsTrackWrapper");
    const rail = document.getElementById("projectsRail");
    const progressFill = document.getElementById("projectsProgressFill");
    if (!wrapper || !rail) return;

    if (prefersReducedMotion) {
      rail.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    let isActive = false;
    let rafId = 0;

    const updateTrack = () => {
      rafId = 0;

      if (window.innerWidth < 768) {
        rail.style.transform = "translate3d(0, 0, 0)";
        if (progressFill) progressFill.style.transform = "scaleX(1)";
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const totalTravel = wrapper.offsetHeight - window.innerHeight;
      if (totalTravel <= 0) {
        rail.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalTravel, 0), 1);

      // Glide TeamUp card sideways from right across the pinned screen to resting focal point
      const startX = Math.min(window.innerWidth * 0.36, 460);
      const endX = -Math.min(window.innerWidth * 0.04, 48);
      const currentX = startX + (endX - startX) * progress;

      rail.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;

      if (progressFill) {
        progressFill.style.transform = `scaleX(${progress.toFixed(4)})`;
      }
    };

    const onScrollOrResize = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateTrack);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isActive) {
            isActive = true;
            window.addEventListener("scroll", onScrollOrResize, { passive: true });
            updateTrack();
          } else if (!entry.isIntersecting && isActive) {
            isActive = false;
            window.removeEventListener("scroll", onScrollOrResize);
            updateTrack();
          }
        });
      },
      { rootMargin: "150px 0px 150px 0px", threshold: 0 }
    );

    observer.observe(wrapper);
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    updateTrack();
  }

  /* ------------------------------------------------------------------------
     11. Contact Form Validation & WhatsApp Redirect
     ------------------------------------------------------------------------ */
  function setupContactForm() {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const messageInput = document.getElementById("contactMessage");
    const statusEl = document.getElementById("formStatus");

    if (!form || !nameInput || !emailInput || !messageInput || !statusEl) return;

    const inputs = [nameInput, emailInput, messageInput];
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        input.classList.remove("is-invalid");
        if (statusEl.classList.contains("is-error")) {
          statusEl.textContent = "";
          statusEl.classList.remove("is-error");
        }
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      inputs.forEach((input) => input.classList.remove("is-invalid"));
      statusEl.classList.remove("is-error", "is-success");

      if (!name || !email || !message) {
        if (!name) nameInput.classList.add("is-invalid");
        if (!email) emailInput.classList.add("is-invalid");
        if (!message) messageInput.classList.add("is-invalid");

        statusEl.textContent =
          "Please fill in your name, email, and message before sending.";
        statusEl.classList.add("is-error");

        const firstInvalid = inputs.find((el) =>
          el.classList.contains("is-invalid")
        );
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        emailInput.classList.add("is-invalid");
        statusEl.textContent = "Please enter a valid email address.";
        statusEl.classList.add("is-error");
        emailInput.focus();
        return;
      }

      const whatsappText = `Hi Sutharsan, I'm ${name} (${email}).\n\n${message}`;
      const whatsappUrl = `https://wa.me/${PORTFOLIO_DATA.contact.whatsappNumber}?text=${encodeURIComponent(
        whatsappText
      )}`;

      statusEl.textContent =
        "WhatsApp is opening with your message. Press Send there to finish.";
      statusEl.classList.add("is-success");

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }
})();
