var
  link = document.querySelector(".map__button"),
  popup = document.querySelector(".write-us-form"),
  close = popup.querySelector(".write-us-form-close"),
  form = document.querySelector(".write-us-form"),
  login = popup.querySelector("[name=name]"),
  email = popup.querySelector("[name=email]"),
  free_text = popup.querySelector("[name=free-text]"),
  isStorageSupport = true,
  storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("login-popup-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("login-popup-show");
  popup.classList.remove("login-popup-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value || !free_text.value) {
    evt.preventDefault();
    popup.classList.remove("login-popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("login-popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("login-popup-show")) {
      popup.classList.remove("login-popup-show");
      popup.classList.remove("login-popup-error");
    }
  }
});
