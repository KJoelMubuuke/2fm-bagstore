/**
 * Contact Page Module
 * Handles the contact form submission
 */

import { showToast } from "../utils/helpers.js";

/**
 * Initialize the contact page form
 */
function initContact() {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("contactSuccess");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Basic validation
    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    // Simulate sending (in a real app, this would be an API call)
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }

    setTimeout(() => {
      form.style.display = "none";
      if (successMsg) {
        successMsg.classList.add("visible");
      }
      showToast("Message sent successfully! 🎉");
    }, 1200);
  });

  // FAQ accordion
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.classList.contains("open");

      // Close all
      document.querySelectorAll(".faq-item").forEach((fi) => {
        fi.classList.remove("open");
        fi.querySelector(".faq-answer").style.maxHeight = "0";
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

export { initContact };
