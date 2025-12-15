(function () {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  // Optional: soft "subscribe" behavior without a backend.
  // Replace with Mailchimp/Substack/Buttondown later.
  const form = document.querySelector("[data-subscribe-form]");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input[type='email']")?.value?.trim();
    if (!email) return;

    // Lightweight UX only (no storing). You can wire this later.
    const msg = form.querySelector("[data-subscribe-msg]");
    if (msg) {
      msg.textContent = "Thank you. New work is shared when it is ready.";
      msg.style.opacity = "0.9";
    }
    form.reset();
  });
})();

