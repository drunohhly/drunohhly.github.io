function openModal(modalId, caption) {
  let modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.classList.add("show");
  let message = modal.querySelector(".caption");
  message.innerText = caption;
}

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".caption").innerText = "";
  }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    const current = window.location.pathname;
    document.querySelectorAll('ul.topnav a').forEach(link => {
        const href = link.getAttribute('href');
        // если текущий путь начинается с href ссылки
        if (href !== '/' && current.startsWith(href)) {
            link.classList.add('active');
        }
        // отдельно для главной
        if (href === '/' && (current === '/' || current.endsWith('/index.html'))) {
            link.classList.add('active');
        }
    });
});

