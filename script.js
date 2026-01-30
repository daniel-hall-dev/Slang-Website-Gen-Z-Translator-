// Translation mapping (standard English to Gen Z slang)
    const translationMapping = {
      // Basic translations
      "very": "mad",
      "really": "literally",
      "good": "bussin'",
      "great": "slaps",
      "cool": "fire",
      "amazing": "hits different",
      "wow": "sheesh",
      
      // Greetings
      "hello": "yo",
      "hi": "yo",
      "hey": "yo",
      
      // People references
      "friend": "homie",
      "friends": "squad",
      "buddy": "brody",
      "man": "bruh",
      "guys": "gang",
      "group": "squad",
      "people": "jits",
      "person": "jit",
      "boss": "OG",
      "boss-man": "OG",
      "sir": "OG",
      "everyone": "whole squad",
      
      // Emotions
      "happy": "vibing",
      "sad": "down bad",
      "excited": "hyped",
      "like": "vibe with",
      "dislike": "that's mid",
      "love": "simp for",
      "hate": "can't stand",
      "angry": "pressed",
      "upset": "pressed",
      
      // Affirmations
      "yes": "bet",
      "impressive": "low-key fire",
      "funny": "sending me",
      "quite": "low-key",
      "plans": "move",
      "awesome": "bussin'",
      "nice": "valid",
      
      // Descriptors  
      "crazy": "wildin'",
      "wild": "bussin'",
      "weird": "sus",
      "suspicious": "sus",
      "big": "lowkey huge",
      "small": "basic",
      "boring": "mid",
      "interesting": "hits different",
      "beautiful": "aesthetic",
      
      // Truth/Lies
      "lie": "cap",
      "lying": "cappin'",
      "truth": "no cap",
      "true": "fr",
      "for real": "fr",
      "absolutely": "fr fr",
      "definitely": "fr fr",
      "maybe": "might fuck around and",
      
      // Performance
      "understand": "understood the assignment",
      "understood": "ate that",
      "perfect": "ate that",
      "kill": "smoke",
      "destroy": "cook",
      "destroyed": "smoked",
      "win": "clutch",
      "lose": "get smoked",
      
      // Communication
      "talk": "spill tea",
      "tell": "spill",
      "said": "was like",
      "say": "be like",
      "thinking": "vibin' with the idea",
      "think": "vibe with",
      "idea": "vibe",
      "opinion": "take"
    };

    // Common phrase full replacements
    const fullPhraseReplacements = {
      "how are you": "what's good",
      "how are you doing": "what's poppin'",
      "how's it going": "what's the vibe",
      "how are you on this fine evening": "what's good tonight",
      "how are you on this fine morning": "what's the morning vibe",
      "how are you on this fine day": "what's poppin' today",
      "how are you today": "what's the move today",
      "how are you feeling": "how you vibin'",
      "what are your thoughts": "what's your take",
      "i agree with you": "you spittin' facts",
      "i disagree": "that's cap",
      "i don't believe you": "that's major cap",
      "i don't think so": "not the vibe",
      "this is great": "this slaps",
      "this is amazing": "this hits different",
      "i'm excited": "i'm hyped",
      "i'm very happy": "i'm mad vibin'",
      "thank you": "appreciate you",
      "thank you very much": "you a real one"
    };

    // Slang dictionary with terms and definitions
    const slangDictionary = [
      { term: "Based", definition: "Used to describe something you agree with or find cool; expressing approval" },
      { term: "No cap", definition: "Not lying; telling the truth; \"for real\"" },
      { term: "Slaps", definition: "Something that's amazing or excellent, especially music" },
      { term: "Sus", definition: "Suspicious or questionable; something that doesn't seem right" },
      { term: "Living rent free", definition: "When something is constantly on your mind without effort" },
      { term: "Main character energy", definition: "Acting like you're the protagonist of life; confidence" },
      { term: "Yeet", definition: "To throw something with force or express excitement" },
      { term: "Slay", definition: "To do something exceptionally well or successfully" },
      { term: "It's giving...", definition: "Used to describe the vibe something is projecting" },
      { term: "Understood the assignment", definition: "Did exactly what was expected and executed it well" },
      { term: "Ratio", definition: "When replies to a post get more engagement than the original" },
      { term: "Ate that", definition: "Did something extremely well; crushed it" },
      { term: "Hitting different", definition: "When something feels unusually good or has a special quality to it" },
      { term: "Sheesh", definition: "Expression of awe, disbelief, or exasperation" },
      { term: "Gang", definition: "A group of friends; your crew or squad" },
      { term: "Jit", definition: "Referring to a younger person or someone acting immature" },
      { term: "Brody", definition: "Term for a close friend, similar to 'bro' or 'buddy'" },
      { term: "Fr", definition: "For real; used to emphasize sincerity or agreement" },
      { term: "OG", definition: "Original Gangster; someone who's respected, experienced, or been around" },
      { term: "Cap", definition: "A lie or something untrue; 'no cap' means 'no lie'" },
      { term: "Bussin'", definition: "Something that's really good, especially food" },
      { term: "Bet", definition: "An affirmation or agreement; 'alright' or 'for sure'" },
      { term: "Caught in 4K", definition: "When someone is clearly caught doing something they shouldn't" },
      { term: "Sending me", definition: "Making someone laugh hard or feel strongly about something" },
      { term: "Vibe check", definition: "Assessing the mood or atmosphere" },
      { term: "Down bad", definition: "Extremely desperate, especially romantically" },
      { term: "Cooked", definition: "Completely destroyed or defeated." },
      { term: "Smoke", definition: "To defeat someone decisively, often in competition" },
      { term: "On God", definition: "Being completely honest; swearing something is true" },
      { term: "Respectfully", definition: "Used before saying something potentially offensive" },
      { term: "Pressed", definition: "Being upset or bothered by something" },
      { term: "Rent free", definition: "When something consumes your thoughts unintentionally" }
    ];

    // Random filler phrases to occasionally add to translations
    const fillerPhrases = [
      " no cap",
      " fr",
      " respectfully",
      " and I'm not even cappin'",
      " on God",
      " that's just facts",
      " deadass",
      " ngl",
      " not gonna lie",
      " low-key",
      " high-key",
      " tho",
      " bruh",
      " istg" // I swear to god
    ];

    // Multi-word phrases to check separately
    const multiWordPhrases = [
      "for real", "boss-man", "how are you", "good morning", "good evening", 
      "good night", "what's up", "on this", "not even", "to be honest"
    ];

    // DOM Elements
    const translateBtn = document.getElementById('translate-btn');
    const inputArea = document.getElementById('standard-english');
    const clearBtn = document.getElementById('clear-btn');
    const outputText = document.getElementById('output-text');
    const loading = document.getElementById('loading');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');
    const toast = document.getElementById('toast');
    const slangExamplesContainer = document.getElementById('slang-examples');
    const randomTerm = document.getElementById('random-term');
    const randomDefinition = document.getElementById('random-definition');
    const randomBtn = document.getElementById('random-btn');
    const errorDisplay = document.getElementById('error');
    const errorMessage = document.getElementById('error-message');
    const currentYearEl = document.getElementById('current-year');

    // Set current year in footer
    currentYearEl.textContent = new Date().getFullYear().toString();

    // Load slang examples
    function loadSlangExamples() {
      // Get 6 random examples from the dictionary
      const examples = [...slangDictionary]
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);
      
      slangExamplesContainer.innerHTML = '';
      examples.forEach(item => {
        const exampleEl = document.createElement('div');
        exampleEl.className = 'slang-example';
        exampleEl.innerHTML = `
          <h3>${item.term}</h3>
          <p>${item.definition}</p>
        `;
        slangExamplesContainer.appendChild(exampleEl);
      });
    }

    // Load random slang term
    function loadRandomSlang() {
      const randomContent = document.getElementById('random-content');
      randomContent.classList.add('fade-out');
      
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * slangDictionary.length);
        const slang = slangDictionary[randomIndex];
        
        randomTerm.textContent = `"${slang.term}"`;
        randomDefinition.textContent = slang.definition;
        
        randomContent.classList.remove('fade-out');
      }, 300);
    }

    // Translate function
    function translateToGenZ(text) {
      // First check for complete phrase replacements
      let modifiedText = text;
      for (const [phrase, replacement] of Object.entries(fullPhraseReplacements)) {
        const regex = new RegExp(phrase, 'gi');
        modifiedText = modifiedText.replace(regex, replacement);
      }
      
      // Check for multi-word phrases that aren't complete sentences
      for (const phrase of multiWordPhrases) {
        const lcPhrase = phrase.toLowerCase();
        const translation = translationMapping[lcPhrase];
        
        if (translation) {
          // Case-insensitive replacement with RegExp
          const regex = new RegExp('\\b' + phrase + '\\b', 'gi');
          modifiedText = modifiedText.replace(regex, (match) => {
            // Preserve capitalization
            return match[0] === match[0].toUpperCase()
              ? translation.charAt(0).toUpperCase() + translation.slice(1)
              : translation;
          });
        }
      }

      // Split text into words, preserving punctuation
      const words = modifiedText.split(/\b/);
      const translatedWords = [];

      for (const word of words) {
        // Skip empty strings and pure whitespace
        if (!word.trim()) {
          translatedWords.push(word);
          continue;
        }

        // Check if it's a word (not punctuation)
        const isWord = /[a-zA-Z]/.test(word);
        if (!isWord) {
          translatedWords.push(word);
          continue;
        }

        // Clean word for lookup (remove punctuation)
        const cleanWord = word.toLowerCase().replace(/[^\w']/g, '');
        const translation = translationMapping[cleanWord];

        if (translation) {
          // Preserve capitalization
          let translatedWord = translation;
          if (word[0] === word[0].toUpperCase()) {
            translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
          }
          
          // Preserve punctuation
          const punctuation = word.match(/[^\w']+$/);
          if (punctuation) {
            translatedWord += punctuation[0];
          }
          
          translatedWords.push(translatedWord);
        } else {
          translatedWords.push(word);
        }
      }

      // Join words back together
      let result = translatedWords.join('');
      
      // Gen Z-ify the text further with common patterns
      result = result.replace(/I'm/g, "I'm lowkey");
      result = result.replace(/\.$/g, " fr.");
      
      // Add random Gen Z filler words more frequently (about 1 in 3 sentences)
      if (Math.random() < 0.33) {
        // Add to end of sentence if sentence ends with a period
        if (result.endsWith('.')) {
          const randomFiller = fillerPhrases[Math.floor(Math.random() * fillerPhrases.length)];
          result = result.slice(0, -1) + randomFiller + ".";
        }
      }

      return result;
    }

    // Handle Translate Button Click
    translateBtn.addEventListener('click', () => {
      const text = inputArea.value.trim();
      
      if (!text) {
        showError("Please enter some text to translate!");
        return;
      }
      
      // Show loading state
      loading.style.display = 'flex';
      outputText.style.display = 'none';
      errorDisplay.style.display = 'none';
      
      // Simulate network delay for realistic feeling
      setTimeout(() => {
        try {
          const translation = translateToGenZ(text);
          
          // Hide loading, show result
          loading.style.display = 'none';
          outputText.style.display = 'block';
          outputText.textContent = translation;
          outputText.classList.add('fade-in');
          
          setTimeout(() => {
            outputText.classList.remove('fade-in');
          }, 500);
        } catch (error) {
          console.error("Translation error:", error);
          showError("We couldn't translate that. Try something else!");
        }
      }, 800);
    });

    // Handle Clear Button Click
    clearBtn.addEventListener('click', () => {
      inputArea.value = '';
      inputArea.focus();
    });

    // Handle Copy Button Click
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(outputText.textContent);
      showToast();
    });

    // Random Slang Button Click
    randomBtn.addEventListener('click', loadRandomSlang);

    // Show error message
    function showError(message) {
      errorDisplay.style.display = 'flex';
      errorMessage.textContent = message;
      loading.style.display = 'none';
    }

    // Show toast notification
    function showToast() {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }

    // Initialize the app
    function initApp() {
      loadSlangExamples();
      loadRandomSlang();
      initSettings();

      // Set current year in footer
      currentYearEl.textContent = new Date().getFullYear().toString();
    }

    /* ----------------------
       Settings & Dark mode
       ---------------------- */
    const THEME_KEY = 'slangz-theme'; // 'dark' | 'light' | null => follow system
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsOverlay = document.getElementById('settings-overlay');
    const settingsClose = document.getElementById('settings-close');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    function getStoredTheme() {
      return localStorage.getItem(THEME_KEY); // 'dark' | 'light' | null
    }

    function detectSystemTheme() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme, { save = false } = {}) {
      // theme: 'dark' | 'light' | 'system' | null
      let resolved = theme;
      if (!theme || theme === 'system') resolved = detectSystemTheme();

      // apply (explicitly set light/dark so CSS [data-theme] selectors work)
      document.documentElement.setAttribute('data-theme', resolved === 'dark' ? 'dark' : 'light');

      // hint to user agent for form controls / scrollbars
      try { document.documentElement.style.colorScheme = resolved === 'dark' ? 'dark' : 'light'; } catch (e) { /* graceful */ }

      // reflect on toggle (if present)
      if (darkModeToggle) {
        darkModeToggle.checked = resolved === 'dark';
        darkModeToggle.setAttribute('aria-checked', String(resolved === 'dark'));
      }

      // update mobile chrome / statusbar color for a cohesive look
      try {
        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
          meta = document.createElement('meta');
          meta.name = 'theme-color';
          document.head.appendChild(meta);
        }
        const bg = getComputedStyle(document.documentElement).getPropertyValue('--background').trim() || (resolved === 'dark' ? '#0B0E12' : '#F8F9FA');
        meta.setAttribute('content', bg);
      } catch (err) {
        /* no-op */
      }

      if (save) {
        if (!theme || theme === 'system') localStorage.removeItem(THEME_KEY);
        else localStorage.setItem(THEME_KEY, theme === 'dark' ? 'dark' : 'light');
      }
    }

    function initSettings() {
      // initial theme (persisted or follow system)
      const stored = getStoredTheme();
      applyTheme(stored || 'system');

      // ensure the panel is positioned relative to the fixed trigger
      positionSettingsPanel();

      // open/close handlers
      if (settingsToggle) {
        settingsToggle.addEventListener('click', () => {
          const isOpen = settingsPanel && settingsPanel.getAttribute('data-open') === 'true';
          isOpen ? closeSettings() : openSettings();
        });
      }

      if (settingsClose) settingsClose.addEventListener('click', closeSettings);
      if (settingsOverlay) settingsOverlay.addEventListener('click', closeSettings);

      // toggle theme
      if (darkModeToggle) {
        darkModeToggle.addEventListener('change', (e) => {
          const wantDark = e.target.checked;
          applyTheme(wantDark ? 'dark' : 'light', { save: true });
        });

        // Robust click/keyboard fallback: make the visible `.switch` toggle the hidden input
        try {
          const visualSwitch = settingsPanel && settingsPanel.querySelector('.switch');
          if (visualSwitch) {
            visualSwitch.addEventListener('click', (ev) => {
              // keep native behavior for label clicks, but ensure visual click toggles input
              darkModeToggle.focus();
              darkModeToggle.checked = !darkModeToggle.checked;
              darkModeToggle.dispatchEvent(new Event('change', { bubbles: true }));
            });

            visualSwitch.addEventListener('keydown', (ev) => {
              if (ev.key === ' ' || ev.key === 'Enter') {
                ev.preventDefault();
                visualSwitch.click();
              }
            });
          }
        } catch (err) {
          // defensive - don't block settings initialization
          console.warn('switch enhancement failed', err);
        }
      }

      // reposition on resize / orientation change
      window.addEventListener('resize', positionSettingsPanel, { passive: true });
      window.addEventListener('orientationchange', positionSettingsPanel, { passive: true });

      // close on ESC and restore focus
      document.addEventListener('keydown', (ev) => {
        if (ev.key === 'Escape' && settingsPanel && settingsPanel.getAttribute('data-open') === 'true') {
          closeSettings();
        }
      });

      // respond to system changes if user hasn't chosen a preference
      if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener && mq.addEventListener('change', (e) => {
          if (!getStoredTheme()) applyTheme('system');
        });
      }
    }

    // Position the settings panel so it visually anchors to the fixed settings button
    function positionSettingsPanel() {
      if (!settingsPanel || !settingsToggle) return;

      // mobile bottom-sheet uses CSS; only position when the panel is shown as a popover
      if (window.matchMedia('(max-width: 520px)').matches) {
        settingsPanel.style.removeProperty('left');
        settingsPanel.style.removeProperty('right');
        settingsPanel.style.removeProperty('top');
        settingsPanel.style.removeProperty('transform-origin');
        return;
      }

      const btnRect = settingsToggle.getBoundingClientRect();
      const pad = 12; // gap between button and panel
      // anchor panel so it doesn't overflow the viewport
      const right = Math.max(window.innerWidth - (btnRect.right + pad), 12);
      settingsPanel.style.right = `${right}px`;
      settingsPanel.style.top = `calc(${Math.max(12, btnRect.bottom + pad)}px)`;
      settingsPanel.style.transformOrigin = 'top right';
    }

    function openSettings() {
      if (!settingsPanel || !settingsOverlay || !settingsToggle) return;

      // position relative to trigger (handles responsive)
      positionSettingsPanel();

      settingsPanel.hidden = false;
      settingsOverlay.hidden = false;
      requestAnimationFrame(() => {
        settingsPanel.setAttribute('data-open', 'true');
        settingsPanel.setAttribute('aria-hidden', 'false');
        settingsOverlay.setAttribute('data-visible', 'true');
        settingsToggle.setAttribute('aria-expanded', 'true');
      });

      // focus first focusable control
      const focusTarget = settingsPanel.querySelector('.switch-input') || settingsClose;
      focusTarget && focusTarget.focus();
    }

    function closeSettings() {
      if (!settingsPanel || !settingsOverlay || !settingsToggle) return;
      settingsPanel.setAttribute('data-open', 'false');
      settingsPanel.setAttribute('aria-hidden', 'true');
      settingsOverlay.setAttribute('data-visible', 'false');
      settingsToggle.setAttribute('aria-expanded', 'false');

      // wait for animation then hide
      setTimeout(() => {
        settingsPanel.hidden = true;
        settingsOverlay.hidden = true;
        settingsToggle.focus();
      }, 260);
    }

    // Initialize on load
    document.addEventListener('DOMContentLoaded', initApp);