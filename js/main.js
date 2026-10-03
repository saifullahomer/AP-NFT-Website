(function () {
  "use strict";

  /* ---------- Helpers ---------- */

  // Lucide icon paths (https://lucide.dev, ISC license), inlined so the site has no dependencies.
  const ICONS = {
    "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    "chevron-left": '<path d="m15 18-6-6 6-6"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    minus: '<path d="M5 12h14"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    "shopping-bag":
      '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    instagram:
      '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    youtube:
      '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
    "flower-2":
      '<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12"/><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"/><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"/>',
    truck:
      '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
    "ticket-percent":
      '<path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M9 9h.01"/><path d="m15 9-6 6"/><path d="M15 15h.01"/>',
    sprout:
      '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
    "flask-conical":
      '<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/>',
    pause:
      '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  };

  function icon(name, size) {
    size = size || 24;
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="lucide lucide-' +
      name + '">' + ICONS[name] + "</svg>"
    );
  }

  // Swap every <i data-icon> placeholder for its inline SVG.
  function hydrateIcons(root) {
    root.querySelectorAll("i[data-icon]").forEach(function (el) {
      el.outerHTML = icon(el.dataset.icon, el.dataset.size);
    });
  }

  const $ = function (selector) {
    return document.querySelector(selector);
  };
  const image = function (name) {
    return "images/" + name + ".jpg";
  };
  const money = function (price) {
    return "$" + (Math.round((price + Number.EPSILON) * 100) / 100).toFixed(2).replace(".", ",") + "USD";
  };
  const escapeHtml = function (text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  const findProduct = function (id) {
    return products.find(function (p) {
      return p.id === id;
    });
  };

  function productCard(product) {
    return (
      '<article class="product-card">' +
      '<button class="product-image" data-open="' + product.id + '" aria-label="View ' + escapeHtml(product.name) + '">' +
      '<img src="' + image(product.image) + '" alt="' + escapeHtml(product.name) + ' perfume" loading="lazy" />' +
      (product.badge ? '<span class="badge">' + escapeHtml(product.badge) + "</span>" : "") +
      "</button>" +
      '<h3><button data-open="' + product.id + '">' + escapeHtml(product.name) + "</button></h3>" +
      '<p class="price">' + money(product.price) + "</p>" +
      '<button class="button" data-buy="' + product.id + '">Buy Now</button>' +
      "</article>"
    );
  }

  /* ---------- Modals ---------- */

  const productModal = $("#product-modal");
  const bagModal = $("#bag-modal");
  const lastFocus = new Map();

  function openModal(dialog) {
    if (!dialog.open) {
      lastFocus.set(dialog, document.activeElement);
      dialog.showModal();
    }
    carousel.update();
  }

  function closeModal(dialog) {
    if (dialog.open) dialog.close();
  }

  [productModal, bagModal].forEach(function (dialog) {
    dialog.querySelector(".close-button").addEventListener("click", function () {
      closeModal(dialog);
    });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) closeModal(dialog);
    });
    dialog.addEventListener("close", function () {
      const previous = lastFocus.get(dialog);
      if (previous && previous.focus) previous.focus();
      carousel.update();
    });
  });

  function openProduct(product) {
    productModal.setAttribute("aria-label", product.name);
    $("#product-detail").innerHTML =
      '<img src="' + image(product.image) + '" alt="' + escapeHtml(product.name) + '" />' +
      "<div>" +
      '<p class="eyebrow">- ' + escapeHtml(product.category) + " -</p>" +
      "<h2>" + escapeHtml(product.name) + "</h2>" +
      '<p class="price">' + money(product.price) + "</p>" +
      "<p>A fragrance that becomes part of your story. Thoughtfully composed, beautifully balanced, and made to linger.</p>" +
      '<p class="fragrance-notes">' + escapeHtml(product.notes) + "</p>" +
      "<p>EAU DE PARFUM · 50 ML</p>" +
      '<button class="button" data-buy="' + product.id + '">Add to Bag</button>' +
      "</div>";
    openModal(productModal);
  }

  /* ---------- Bag ---------- */

  let bag = [];
  let discount = false;
  let toastTimer;

  function buy(product) {
    const existing = bag.find(function (p) {
      return p.id === product.id;
    });
    if (existing) existing.quantity += 1;
    else bag.push(Object.assign({}, product, { quantity: 1 }));
    renderBag();
    showToast(product.name + " added to your bag");
  }

  function changeQuantity(id, delta) {
    bag = bag
      .map(function (p) {
        return p.id === id ? Object.assign({}, p, { quantity: p.quantity + delta }) : p;
      })
      .filter(function (p) {
        return p.quantity > 0;
      });
    renderBag();
  }

  function renderBag() {
    const count = bag.reduce(function (sum, p) {
      return sum + p.quantity;
    }, 0);
    const total = bag.reduce(function (sum, p) {
      return sum + p.price * p.quantity;
    }, 0);

    $("#bag-button").setAttribute("aria-label", "Shopping bag, " + count + " items");
    const badge = $("#bag-count");
    badge.textContent = count;
    badge.hidden = count === 0;

    let html = '<p class="eyebrow">- YOUR SELECTION -</p><h2>Your Fragrance Bag</h2>';
    if (bag.length === 0) {
      html += "<p>Your bag is waiting for its first story.</p>";
    } else {
      bag.forEach(function (p) {
        const name = escapeHtml(p.name);
        html +=
          '<div class="bag-item">' +
          '<img src="' + image(p.image) + '" alt="' + name + '" />' +
          "<div><h3>" + name + "</h3><p>" + money(p.price) + "</p>" +
          '<div class="quantity">' +
          '<button data-qty="-1" data-id="' + p.id + '" aria-label="Remove one ' + name + '">' + icon("minus", 16) + "</button>" +
          "<span>" + p.quantity + "</span>" +
          '<button data-qty="1" data-id="' + p.id + '" aria-label="Add one ' + name + '">' + icon("plus", 16) + "</button>" +
          "</div></div>" +
          '<button class="remove-item" data-remove="' + p.id + '" aria-label="Remove ' + name + '">' + icon("x", 18) + "</button>" +
          "</div>";
      });
      html +=
        '<button class="discount-toggle" data-discount>' +
        (discount ? "✓ WINTER15 applied · Remove" : "Apply WINTER15 for 15% off") +
        "</button>" +
        '<div class="bag-total"><span>Total</span><strong>' + money(total * (discount ? 0.85 : 1)) + "</strong></div>" +
        '<p class="preview-note">Store preview — checkout and payments are not connected yet.</p>';
    }
    html += '<button class="button" data-continue>Continue Exploring</button>';
    $("#bag-content").innerHTML = html;
  }

  $("#bag-content").addEventListener("click", function (e) {
    const target = e.target.closest("button");
    if (!target) return;
    if (target.dataset.qty) changeQuantity(target.dataset.id, Number(target.dataset.qty));
    else if (target.dataset.remove) changeQuantity(target.dataset.remove, -Infinity);
    else if (target.hasAttribute("data-discount")) {
      discount = !discount;
      renderBag();
    } else if (target.hasAttribute("data-continue")) {
      closeModal(bagModal);
      $("#catalog").scrollIntoView({ behavior: "smooth" });
    }
  });

  $("#bag-button").addEventListener("click", function () {
    openModal(bagModal);
  });

  function showToast(text) {
    $("#toast-text").textContent = text;
    $("#toast").hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      $("#toast").hidden = true;
    }, 3500);
  }

  $("#toast-view").addEventListener("click", function () {
    openModal(bagModal);
  });

  // Delegate "open product" and "buy" clicks from anywhere on the page.
  document.addEventListener("click", function (e) {
    const opener = e.target.closest("[data-open]");
    if (opener) return openProduct(findProduct(opener.dataset.open));
    const buyer = e.target.closest("[data-buy]");
    if (buyer) buy(findProduct(buyer.dataset.buy));
  });

  /* ---------- Mobile navigation ---------- */

  const menuToggle = $("#menu-toggle");
  const navigation = $("#navigation");

  function setMenu(open) {
    navigation.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.innerHTML = icon(open ? "x" : "menu");
  }

  menuToggle.addEventListener("click", function () {
    setMenu(!navigation.classList.contains("open"));
  });
  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  /* ---------- Catalog ---------- */

  let category = "All";
  let price = 55;
  let showAll = false;

  function renderCatalog() {
    const filtered = products.filter(function (p) {
      return (category === "All" || p.category === category) && p.price <= price;
    });
    $("#catalog-grid").innerHTML = filtered.slice(0, showAll ? 20 : 8).map(productCard).join("");
    $("#empty-state").hidden = filtered.length !== 0;
    $("#show-more").hidden = !(filtered.length > 8 && !showAll);
    document.querySelectorAll("#category-filters [data-filter]").forEach(function (button) {
      button.classList.toggle("active", button.dataset.filter === category);
    });
    $("#price-output").textContent = price.toFixed(2);
  }

  function setCategory(value) {
    category = value;
    showAll = true;
    renderCatalog();
  }

  document.querySelectorAll("#category-filters [data-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      setCategory(button.dataset.filter);
    });
  });
  document.querySelectorAll(".category-card").forEach(function (card) {
    card.addEventListener("click", function () {
      setCategory(card.dataset.category);
      $("#catalog").scrollIntoView({ behavior: "smooth" });
    });
  });
  $("#price").addEventListener("input", function (e) {
    price = Number(e.target.value);
    showAll = true;
    renderCatalog();
  });
  $("#show-more").addEventListener("click", function () {
    showAll = true;
    renderCatalog();
  });

  /* ---------- Best sellers carousel ---------- */

  const carousel = (function () {
    const ids = ["verdelia", "elan", "carmine", "velour", "bonne", "ferox", "bleu"];
    const length = ids.length;
    const root = $("#carousel");
    const viewport = root.querySelector(".carousel-viewport");
    const track = root.querySelector(".best-grid");
    const positionLabel = root.querySelector(".carousel-position");
    const playback = root.querySelector(".carousel-playback");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let position = length;
    let step = 0;
    let visible = 5;
    let moving = false;
    let hovered = false;
    let focused = false;
    let paused = false;
    let inView = false;
    let reducedMotion = motionQuery.matches;
    let fallback;
    let timer;

    // Three copies of the list let the track loop seamlessly in both directions.
    let slides = "";
    for (let i = 0; i < length * 3; i++) {
      slides += '<div class="best-slide">' + productCard(findProduct(ids[i % length])) + "</div>";
    }
    track.innerHTML = slides;
    const slideEls = Array.from(track.children);

    function render() {
      track.style.transform = "translate3d(" + -position * step + "px, 0, 0)";
      slideEls.forEach(function (slide, index) {
        const hidden = index < position || index >= position + visible;
        slide.inert = hidden;
        slide.setAttribute("aria-hidden", String(hidden));
      });
      const current = (position % length) + 1;
      positionLabel.setAttribute("aria-label", "Collection " + current + " of " + length);
      positionLabel.innerHTML =
        String(current).padStart(2, "0") + " <span>/ " + String(length).padStart(2, "0") + "</span>";
      playback.hidden = reducedMotion;
      playback.setAttribute("aria-label", paused ? "Start automatic sliding" : "Pause automatic sliding");
      playback.innerHTML = icon(paused ? "play" : "pause", 13) + " " + (paused ? "Play" : "Pause");
      track.classList.toggle("is-animated", !reducedMotion);
    }

    function measure() {
      const style = getComputedStyle(track);
      visible = Number(style.getPropertyValue("--visible")) || 5;
      const gap = parseFloat(style.columnGap) || 0;
      step = (track.clientWidth + gap) / visible;
      // Jump without animating so a resize never shows a sliding correction.
      track.classList.remove("is-animated");
      render();
      void track.offsetWidth;
      track.classList.toggle("is-animated", !reducedMotion);
    }

    function settle() {
      clearTimeout(fallback);
      moving = false;
      if (position >= length * 2 || position < length) {
        // Switch to the identical middle copy without a visible rewind.
        position = length + (((position % length) + length) % length);
        track.classList.remove("is-animated");
        render();
        void track.offsetWidth;
        track.classList.toggle("is-animated", !reducedMotion);
      }
    }

    function advance(direction) {
      if (moving || !step) return;
      if (reducedMotion) {
        position = length + ((position - length + direction + length) % length);
        render();
        return;
      }
      moving = true;
      position += direction;
      render();
      // Also unlock if a resize or a changed motion preference cancels the transition.
      fallback = setTimeout(settle, 850);
    }

    function update() {
      const dialogOpen = productModal.open || bagModal.open;
      const canPlay = !paused && !hovered && !focused && !dialogOpen && inView && !document.hidden && !reducedMotion;
      clearInterval(timer);
      timer = null;
      if (canPlay) {
        timer = setInterval(function () {
          advance(1);
        }, 4200);
      }
    }

    track.addEventListener("transitionend", function (e) {
      if (e.target === track && e.propertyName === "transform") settle();
    });
    root.querySelector(".carousel-arrow.previous").addEventListener("click", function () {
      advance(-1);
    });
    root.querySelector(".carousel-arrow.next").addEventListener("click", function () {
      advance(1);
    });
    playback.addEventListener("click", function () {
      paused = !paused;
      render();
      update();
    });

    root.addEventListener("mouseenter", function () {
      hovered = true;
      update();
    });
    root.addEventListener("mouseleave", function () {
      hovered = false;
      update();
    });
    root.addEventListener("focusin", function () {
      focused = true;
      update();
    });
    root.addEventListener("focusout", function (e) {
      if (!root.contains(e.relatedTarget)) {
        focused = false;
        update();
      }
    });

    let touch = null;
    viewport.addEventListener(
      "touchstart",
      function (e) {
        touch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      },
      { passive: true },
    );
    viewport.addEventListener("touchend", function (e) {
      if (!touch) return;
      const dx = e.changedTouches[0].clientX - touch.x;
      const dy = e.changedTouches[0].clientY - touch.y;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) advance(dx < 0 ? 1 : -1);
      touch = null;
    });

    new ResizeObserver(measure).observe(viewport);
    new IntersectionObserver(
      function (entries) {
        inView = entries[0].isIntersecting;
        update();
      },
      { threshold: 0.2 },
    ).observe(viewport);
    motionQuery.addEventListener("change", function () {
      reducedMotion = motionQuery.matches;
      render();
      update();
    });
    document.addEventListener("visibilitychange", update);

    render();
    return { update: update };
  })();

  /* ---------- Testimonials ---------- */

  let reviewIndex = 0;

  function renderReview() {
    const review = reviews[reviewIndex];
    const quote = $("#review-quote");
    // Replace the node so the CSS entrance animation replays.
    const fresh = quote.cloneNode(false);
    fresh.textContent = review.quote;
    quote.replaceWith(fresh);
    $("#review-name").textContent = review.name;
    $("#review-role").textContent = review.role;
  }

  $("#review-prev").addEventListener("click", function () {
    reviewIndex = (reviewIndex + reviews.length - 1) % reviews.length;
    renderReview();
  });
  $("#review-next").addEventListener("click", function () {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    renderReview();
  });

  /* ---------- Newsletter ---------- */

  const form = $("#newsletter-form");
  const newsletterButton = $("#newsletter-button");

  function setSubscribed(subscribed) {
    newsletterButton.innerHTML = subscribed
      ? "Thank You " + icon("check", 18)
      : "Subscribe " + icon("arrow-right", 18);
    $("#newsletter-message").textContent = subscribed
      ? "Thanks for your interest! Newsletter signup will be available when the store launches."
      : "";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    setSubscribed(true);
  });
  $("#newsletter-email").addEventListener("input", function () {
    setSubscribed(false);
  });

  /* ---------- Init ---------- */

  hydrateIcons(document);
  $("#year").textContent = new Date().getFullYear();
  renderBag();
  renderCatalog();
  renderReview();
  setSubscribed(false);
})();
