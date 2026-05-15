// CSS
import "./css/index.css";

// Картинки
import visa from "./pic/visa-logo.png";
import mastercard from "./pic/master-card.jpg";
import mir from "./pic/mir.png";
import jcb from "./pic/jcb.png";
import unionpay from "./pic/unionPay.png";
import amex from "./pic/American-Express-Logo.png";

// Логика
import { detectPaymentSystem } from "./js/detectPaymentSystem.js";
import { isValidCardNumber } from "./js/validation.js";

// Вставляем картинки в HTML
document.getElementById("visa").src = visa;
document.getElementById("mastercard").src = mastercard;
document.getElementById("mir").src = mir;
document.getElementById("jcb").src = jcb;
document.getElementById("unionpay").src = unionpay;
document.getElementById("amex").src = amex;

// Подсветка логотипов
function showSystemLogo(system) {
  const cards = document.querySelectorAll(".cards div");

  cards.forEach(card => {
    const sys = card.getAttribute("data-system");
    card.classList.toggle("active", sys === system);
  });
}

// Основная логика
const input = document.querySelector(".input");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const number = input.value.trim();

  // Определяем систему
  const system = detectPaymentSystem(number);
  showSystemLogo(system);
});

