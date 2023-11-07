const buttons = document.querySelectorAll(".colorful-button");

buttons.forEach((button) => {
  button.addEventListener("mousedown", function (event) {
    const ripple = document.createElement("div");
    ripple.classList.add("click-effect");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    button.appendChild(ripple);

    ripple.addEventListener("animationend", function () {
      ripple.remove();
    });
  });
});
