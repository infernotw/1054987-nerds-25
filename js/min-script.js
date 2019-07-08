var link = document.querySelector(".map-info__button"),
  popup = document.querySelector(".write-us-form"),
  close = popup.querySelector(".write-us-form-close"),
  form = document.querySelector(".write-us-form"),
  login = popup.querySelector("[name=name]"),
  email = popup.querySelector("[name=email]"),
  free_text = popup.querySelector("[name=free-text]"),
  isStorageSupport = !0,
  storage = "";
try {
  storage = localStorage.getItem("name")
} catch (e) {
  isStorageSupport = !1
}
link.addEventListener("click", function(e) {
  e.preventDefault(), popup.classList.add("login-popup-show"), storage ? (login.value = storage, email.focus()) : login.focus()
}), close.addEventListener("click", function(e) {
  e.preventDefault(), popup.classList.remove("login-popup-show"), popup.classList.remove("login-popup-error")
}), form.addEventListener("submit", function(e) {
  login.value && email.value && free_text.value ? isStorageSupport && localStorage.setItem("name", login.value) : (e.preventDefault(), popup.classList.remove("login-popup-error"), popup.offsetWidth = popup.offsetWidth, popup.classList.add("login-popup-error"))
}), window.addEventListener("keydown", function(e) {
  27 === e.keyCode && (e.preventDefault(), popup.classList.contains("login-popup-show") && (popup.classList.remove("login-popup-show"), popup.classList.remove("login-popup-error")))
});
