(function () {
  // Active nav: match by filename regardless of subfolder
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll("[data-nav]").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    const hrefFile = href.split("/").pop();
    if (hrefFile === file) a.setAttribute("aria-current", "page");
  });

  // Subscribe handler (placeholder). Replace with your provider embed later.
  const form = document.querySelector("[data-subscribe-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = (form.querySelector('input[type="email"]')?.value || "").trim();
      if (!email) return;

      // Replace this with your list provider endpoint or embedded form.
      alert("Thanks — subscription is not yet wired to a provider. Add a Buttondown/Mailchimp embed next.");
      form.reset();
    });
  }
})();
