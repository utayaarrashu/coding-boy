//Prompt new message
let user = window.prompt("Who are you?");
if (user === "lim") {
  document.getElementsByTagName("h1")[0].innerHTML = "Hi, Power User";
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "Hi, " + user;
}
