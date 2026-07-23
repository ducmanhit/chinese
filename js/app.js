"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const flashcard = document.querySelector(".flashcard");
  const favoriteButtons = document.querySelectorAll(".favorite-button");
  const answerButtons = document.querySelectorAll(".answer-button");
  const navItems = document.querySelectorAll(".nav-item");
  const quizFeedback = document.querySelector(".quiz-feedback");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("theme-soft");
    });
  }

  if (flashcard) {
    flashcard.addEventListener("click", () => {
      flashcard.classList.toggle("is-flipped");
    });
  }

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-selected");
    });
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((navItem) => {
        navItem.classList.remove("is-active");
      });

      item.classList.add("is-active");
    });
  });

  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      answerButtons.forEach((answer) => {
        answer.classList.remove("is-correct", "is-wrong");
      });

      if (button.dataset.correct === "true") {
        button.classList.add("is-correct");
        if (quizFeedback) {
          quizFeedback.textContent = "Correct. 你好 means hello.";
        }
      } else {
        button.classList.add("is-wrong");
        if (quizFeedback) {
          quizFeedback.textContent = "Try again. Listen for the greeting phrase.";
        }
      }
    });
  });
});
