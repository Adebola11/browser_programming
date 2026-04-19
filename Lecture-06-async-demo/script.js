/**
 * Lecture 6 – Asynchronous JavaScript
 * Topics: setTimeout, Promise, async/await, fetch
 */

(() => {
  'use strict';

  /* =========================================================
     DOM CACHE & VALIDATION
     ========================================================= */
  const $ = (id) => document.getElementById(id);

  const elements = {
    output: $('output'),
    status: $('status'),
    buttons: {
      timeout: $('btnTimeout'),
      promise: $('btnPromise'),
      await:   $('btnAwait'),
      fetch:   $('btnFetch')
    }
  };

  // Guard clause — bail if critical elements are missing
  if (!elements.output || !elements.status) {
    console.error('Critical DOM elements missing');
    return;
  }

  /* =========================================================
     UI HELPERS
     ========================================================= */
  const ui = {
    log(message) {
      if (elements.output.textContent.trim() === '...') {
        elements.output.textContent = '';
      }
      elements.output.textContent += `${message}\n`;
      // Auto-scroll to bottom
      elements.output.scrollTop = elements.output.scrollHeight;
    },

    clear() {
      elements.output.textContent = '';
    },

    /**
     * @param {string} text 
     * @param {'idle'|'active'|'error'} [state='idle'] 
     */
    setStatus(text, state = 'idle') {
      elements.status.textContent = `Status: ${text}`;
      elements.status.className = 'status-badge';
      if (state !== 'idle') elements.status.classList.add(state);
    },

    setLoading(isLoading) {
      document.body.classList.toggle('updating', isLoading);
      Object.values(elements.buttons).forEach(btn => {
        if (btn) btn.disabled = isLoading;
      });
    }
  };

  /* =========================================================
     ASYNC UTILITIES
     ========================================================= */
  const delay = (ms, value = `Resolved after ${ms}ms`) => 
    new Promise(resolve => setTimeout(() => resolve(value), ms));

  /* =========================================================
     EXERCISE HANDLERS
     ========================================================= */

  // 1) Async Timeout
  const runTimeout = () => {
    ui.clear();
    ui.setStatus('Timeout scheduled', 'active');
    
    ui.log('▶ Start');
    
    setTimeout(() => ui.log('⏱ Timeout fired (500ms later)'), 500);
    
    ui.log('▶ End (non-blocking)');
    
    // Clear status shortly after timeout completes
    setTimeout(() => ui.setStatus('Idle'), 600);
  };

  // 2) Async Promise
  const runPromise = () => {
    ui.clear();
    ui.setStatus('Promise pending...', 'active');
    ui.log('Waiting for Promise...');

    delay(1000, 'Promise resolved!').then(result => {
      ui.log(`✓ ${result}`);
      ui.setStatus('Idle');
    });
  };

  // 3) Async / Await
  const runAwait = async () => {
    ui.clear();
    ui.setStatus('Awaiting...', 'active');
    ui.log('Before await');

    const result = await delay(1000, 'Await complete!');
    
    ui.log('After await');
    ui.log(`✓ ${result}`);
    ui.setStatus('Idle');
  };

  // 4) Async Fetch
  const runFetch = async () => {
    ui.clear();
    ui.setStatus('Fetching data...', 'active');
    ui.setLoading(true);

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} — ${response.statusText}`);
      }

      const { id, title, completed } = await response.json();

      ui.log('📦 Response:');
      ui.log(`  ID:        ${id}`);
      ui.log(`  Title:     ${title}`);
      ui.log(`  Completed: ${completed}`);
      ui.setStatus('Fetch successful');

    } catch (err) {
      ui.log(`✗ Error: ${err.message}`);
      ui.setStatus('Fetch failed', 'error');
    } finally {
      ui.setLoading(false);
    }
  };

  /* =========================================================
     EVENT BINDING
     ========================================================= */
  const bindings = [
    [elements.buttons.timeout, runTimeout],
    [elements.buttons.promise, runPromise],
    [elements.buttons.await,   runAwait],
    [elements.buttons.fetch,   runFetch]
  ];

  bindings.forEach(([btn, handler]) => {
    if (btn) btn.addEventListener('click', handler);
  });

  console.log('JS connected ✅');
})();
