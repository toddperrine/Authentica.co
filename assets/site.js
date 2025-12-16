(function () {
  /* --------------------------------------------------
     Active navigation
     -------------------------------------------------- */

  // Normalize current path
  let path = window.location.pathname.toLowerCase();

  // Treat "/" and "/index.html" the same
  if (path === "/" || path.endsWith("/index.html")) {
    path = "/";
  }

  document.querySelectorAll("[data-nav]").forEach((link) => {
    const href = link.getAttribute("href")?.toLowerCase() || "";

    // Normalize href
    let normalizedHref = href;
    if (normalizedHref.endsWith("/index.html")) {
      normalizedHref = normalizedHref.replace("/index.html", "/");
    }

    // Match root or section paths
    if (
      normalizedHref === path ||
      (normalizedHref !== "/" && path.startsWith(normalizedHref))
    ) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  /* --------------------------------------------------
     Subscribe placeholder (intentionally quiet)
     -------------------------------------------------- */

  const form = document.querySelector("[data-subscribe-form]");
  if (!form) return;

  const status = document.createElement("p");
  status.className = "form-status";
  status.setAttribute("aria-live", "polite");
  form.appendChild(status);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput?.value.trim();

    if (!email) return;

    // Placeholder behavior until provider is wired
    status.textContent =
      "Thank you. Subscriptions will open shortly.";
    emailInput.value = "";
  });
})();
