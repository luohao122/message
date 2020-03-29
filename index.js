const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector("[data-message-form]").classList.add("hide");
  document.querySelector("[data-message-show]").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();

  document.querySelector("[data-message-form]").classList.add("hide");
  document.querySelector("[data-share-form]").classList.remove("hide");

  const messageInput = document.querySelector("[data-message-input]");
  const encrypted = btoa(messageInput.value);

  const shareInput = document.querySelector("[data-share-input]");
  shareInput.value = `${window.location}#${encrypted}`;
  shareInput.select();
});
