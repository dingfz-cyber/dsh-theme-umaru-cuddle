/** 小埋耶 · 抱枕小窝 — reference canvas 1487 × 1058. */
window.__ModuleLoader__.load({
  id: 'dsh-theme-umaru-cuddle',
  factory: (require) => {
    const React = require('react');
    const ART = /*__CUDDLE_ASSETS__*/ {};
    const CSS = /*__CUDDLE_CSS__*/ "";
    const ID = 'dsh-theme-umaru-cuddle';
    const ATTRIBUTE = 'data-umaru-cuddle';
    const SCALE = '--cuddle-scale';
    const ROOT_SELECTOR = '[data-slot="main"] .an3WzG_root';
    const BRAND_SELECTOR = '[data-slot="sidebar"] .wtg9ga_root:not(.wtg9ga_collapsed) .wtg9ga_logoRow';
    const palette = {
      '--dsw-alias-bg-base': ['#fffdfb', '#2c2224'],
      '--dsw-alias-bg-layer-1': ['#fffaf7', '#37292c'],
      '--dsw-alias-bg-layer-2': ['#fff1eb', '#423034'],
      '--dsw-alias-bg-layer-3': ['#fce5df', '#513b40'],
      '--dsw-alias-bg-overlay': ['#fffaf7', '#3c2c30'],
      '--dsw-alias-bg-module-platform': ['#fffdfb', '#2c2224'],
      '--dsw-alias-bg-multi-select': ['#ffd9df', '#68434c'],
      '--dsw-alias-bg-skeleton': ['#f4e1dd', '#4b363c'],
      '--dsw-alias-label-primary': ['#593b39', '#ffede8'],
      '--dsw-alias-label-primary-bluish': ['#593b39', '#ffede8'],
      '--dsw-alias-label-secondary': ['#8b6864', '#e7c7c4'],
      '--dsw-alias-label-tertiary': ['#a47e77', '#cda6a4'],
      '--dsw-alias-label-caption': ['#a68d89', '#bc9799'],
      '--dsw-alias-label-dimmed': ['#c6aaa4', '#99777b'],
      '--dsw-alias-border-l1': ['#f3b8b9', '#975d6c'],
      '--dsw-alias-border-l2': ['#ffdad1', '#78515b'],
      '--dsw-alias-border-l3': ['#f9e1d9', '#573d45'],
      '--dsw-alias-border-l4': ['#f2b5b7', '#956273'],
      '--dsw-alias-border-l2-darkmode-thin': ['#ffdad1', '#78515b'],
      '--dsw-alias-brand-primary': ['#ed8c90', '#f5a3b1'],
      '--dsw-alias-brand-text': ['#ffffff', '#37222b'],
      '--dsw-alias-brand-primary-invert': ['#f5a3b1', '#ed8c90'],
      '--dsw-alias-button-primary-fill': ['#ed8c90', '#ed9aaa'],
      '--dsw-alias-button-primary-hover': ['#e57c84', '#ffb2c0'],
      '--dsw-alias-button-primary-dimmed': ['#f5bdc3', '#9c626f'],
      '--dsw-alias-button-info-fill': ['#f59bab', '#ed9aaa'],
      '--dsw-alias-button-info-hover': ['#ed8c9e', '#ffb2c0'],
      '--dsw-alias-button-elevated-fill': ['#fffaf7', '#403035'],
      '--dsw-alias-button-floating-fill': ['#fffaf7', '#403035'],
      '--dsw-alias-button-floating-hover': ['#ffe5e3', '#5b3f48'],
      '--dsw-alias-button-tool-bar-fill': ['#fff5ef', '#403035'],
      '--dsw-alias-button-tool-bar-hover': ['#ffe4df', '#5b3f48'],
      '--dsw-alias-button-ghost-active-border': ['#ed8c90', '#ed9aaa'],
      '--dsw-alias-button-ghost-active-fill': ['#ffe5e3', '#68434c'],
      '--dsw-alias-button-ghost-active-hover': ['#ffd2d6', '#7b515e'],
      '--dsw-alias-state-business-primary': ['#d47480', '#f5a3b1'],
      '--dsw-alias-state-business-tertiary': ['#ffe5e3', '#68434c'],
      '--dsw-alias-interactive-bg-hover': ['#ffe7e1', '#543940'],
      '--dsw-alias-interactive-bg-active': ['#ffd4d8', '#6c4651'],
      '--dsw-alias-interactive-bg-hover-solid': ['#ffe7e1', '#543940'],
      '--dsw-alias-interactive-bg-hover-accent': ['#ffdcdf', '#68434c'],
      '--dsw-alias-markdown-code-block': ['#faf0ec', '#34272c'],
      '--dsw-alias-markdown-code-block-banner': ['#f3e0dc', '#4e3840'],
      '--dsw-alias-markdown-inline-code': ['#f9e7e3', '#593d48'],
      '--dsw-alias-markdown-citation': ['#fcf0ec', '#45323a'],
      '--dsw-alias-separator-primary': ['#f5d7cb', '#6e4854'],
      '--dsw-alias-scrollbar-bg-l1': ['#eab4b4', '#93616e'],
      '--dsw-alias-scrollbar-bg-l2': ['#f0c9c6', '#805360'],
      '--dsw-alias-scrollbar-hover-l1': ['#d98a98', '#c8889c'],
      '--dsw-alias-scrollbar-hover-l2': ['#e5a2ac', '#b1778a'],
      '--dsw-specific-sidebar-fill': ['#ffede0', '#3c2b2d'],
      '--dsw-specific-sidebar-nav-item-active': ['#ffd4d8', '#6c4651'],
      '--dsw-specific-sidebar-nav-item-active-accent': ['#f7bec8', '#7d5160'],
      '--dsw-specific-sidebar-nav-item-hover': ['#ffe3dc', '#563b41'],
      '--dsw-specific-bubble': ['#fff0eb', '#63424b'],
      '--dsw-specific-bubble-highlight': ['#f9c8cf', '#7d5262'],
      '--dsw-specific-input-major': ['#fffdfb', '#382a30'],
      '--dsw-specific-login-input': ['#fffdfb', '#382a30'],
      '--dsw-specific-menu': ['#fffaf7', '#403036'],
      '--dsw-specific-selector': ['#fff5ef', '#593c47'],
      '--dsw-specific-tip': ['#fff3e7', '#5c4544']
    };
    const tokens = Object.fromEntries(Object.entries(palette).map(([key, [light, dark]]) => [key, {light, dark}]));

    function SidebarArtwork({wide}) {
      return wide ? React.createElement('div', {className: 'cuddle-sidebar-art', 'aria-hidden': true},
        React.createElement('span', {className: 'cuddle-sidebar-crop'},
          React.createElement('img', {src: ART.source, alt: '', draggable: false}))) : null;
    }

    function apply(ctx) {
      ctx.effect(() => ctx.theme.overrideTokens(ID, tokens), 'cuddle: palette');
      ctx.effect(() => {
        const body = document.body;
        const previousAttribute = body.getAttribute(ATTRIBUTE);
        const previousScale = body.style.getPropertyValue(SCALE);
        const previousScalePriority = body.style.getPropertyPriority(SCALE);
        const previousChrome = body.style.getPropertyValue('--cuddle-top-chrome');
        const previousChromePriority = body.style.getPropertyPriority('--cuddle-top-chrome');
        const style = document.createElement('style');
        style.dataset.plugin = ID;
        const sourceSelectors = [
          '.cuddle-original-art', '.cuddle-theme-label', '.cuddle-brand',
          '.WOwLGG_headline::after', '.WOwLGG_body::after', '.GRgSLq_add::after',
          '.GRgSLq_primary[aria-label="发送消息"]::before',
          '.GRgSLq_primary[aria-label="Send message"]::before'
        ].map(selector => `body[${ATTRIBUTE}] ${selector}`).join(',');
        // Direct image declarations avoid Chromium's large custom-property limit.
        style.textContent = CSS
          + `\nbody[${ATTRIBUTE}] .cuddle-room{background-image:url(${JSON.stringify(ART.room)})}`
          + `\n${sourceSelectors}{background-image:url(${JSON.stringify(ART.source)})}`;
        document.head.appendChild(style);
        body.setAttribute(ATTRIBUTE, '1');

        const mounted = new Map();
        const observed = new Set();
        let frame = 0;
        let disposed = false;
        const schedule = () => {
          if (!disposed && !frame) frame = requestAnimationFrame(update);
        };
        const resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(schedule) : null;

        function make(className, parent) {
          const element = document.createElement('div');
          element.className = className;
          element.setAttribute('aria-hidden', 'true');
          element.dataset.cuddleOwned = '';
          parent.prepend(element);
          return element;
        }

        function update() {
          frame = 0;
          if (disposed) return;
          const roots = [...document.querySelectorAll(ROOT_SELECTOR)];
          const brands = [...document.querySelectorAll(BRAND_SELECTOR)];
          const shell = document.querySelector('.mP3x-q_frame');
          const root = roots.find(element => element.getBoundingClientRect().height > 0);
          const area = (root || shell)?.getBoundingClientRect();
          // The reference includes the window chrome. Use that complete height
          // once, then compensate for DSH's real title bar in the layout.
          const chrome = root ? Math.max(0, area.top)
            : shell ? parseFloat(getComputedStyle(shell).paddingTop) || 0 : 0;
          const height = root ? area.height + chrome : area?.height || window.innerHeight;
          const scale = Math.max(.62, Math.min(1.5, height / 1058)).toFixed(5);
          if (body.style.getPropertyValue(SCALE) !== scale) body.style.setProperty(SCALE, scale);
          const chromeValue = `${chrome.toFixed(3)}px`;
          if (body.style.getPropertyValue('--cuddle-top-chrome') !== chromeValue) body.style.setProperty('--cuddle-top-chrome', chromeValue);

          const targets = new Set([...roots, ...brands]);
          for (const [element, nodes] of mounted) {
            if (!targets.has(element) || !element.isConnected || nodes.some(node => node.parentNode !== element)) {
              nodes.forEach(node => node.remove());
              mounted.delete(element);
            }
          }
          for (const element of targets) {
            if (mounted.has(element)) continue;
            const names = brands.includes(element)
              ? ['cuddle-brand']
              : ['cuddle-room', 'cuddle-original-art', 'cuddle-theme-label'];
            mounted.set(element, names.map(name => make(name, element)));
          }

          const nextObserved = new Set([...roots, ...(shell ? [shell] : [])]);
          for (const element of observed) {
            if (!nextObserved.has(element)) {
              resizeObserver?.unobserve(element);
              observed.delete(element);
            }
          }
          for (const element of nextObserved) {
            if (!observed.has(element)) {
              resizeObserver?.observe(element);
              observed.add(element);
            }
          }
        }

        const observer = new MutationObserver(records => {
          if (records.some(record => record.type === 'childList'
            || record.attributeName === 'data-phase'
            || record.attributeName === 'data-sidebar-collapsed')) schedule();
        });
        observer.observe(document.getElementById('root') || body, {
          childList: true, subtree: true, attributes: true,
          attributeFilter: ['data-phase', 'data-sidebar-collapsed']
        });
        window.addEventListener('resize', schedule);
        update();

        return () => {
          disposed = true;
          observer.disconnect();
          resizeObserver?.disconnect();
          observed.clear();
          window.removeEventListener('resize', schedule);
          if (frame) cancelAnimationFrame(frame);
          for (const nodes of mounted.values()) nodes.forEach(node => node.remove());
          mounted.clear();
          style.remove();
          if (previousScale) body.style.setProperty(SCALE, previousScale, previousScalePriority);
          else body.style.removeProperty(SCALE);
          if (previousChrome) body.style.setProperty('--cuddle-top-chrome', previousChrome, previousChromePriority);
          else body.style.removeProperty('--cuddle-top-chrome');
          if (body.getAttribute(ATTRIBUTE) === '1') {
            if (previousAttribute === null) body.removeAttribute(ATTRIBUTE);
            else body.setAttribute(ATTRIBUTE, previousAttribute);
          }
        };
      }, 'cuddle: scoped layout and artwork');
      ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
        name: 'sidebar.footer.action', id: 'cuddle-sidebar-art', order: 15
      }, SidebarArtwork));
    }

    return {inject: ['theme', 'slots'], apply};
  }
});
