const music = document.getElementById("music");
const btn = document.getElementById("music-btn");

/* Recuperar estado */
let playing = localStorage.getItem("musicPlaying") === "true";

/* Si estaba sonando, vuelve a sonar */
if (playing) {
  music.play();
  btn.textContent = "⏸ Pausar música";
}

/* Botón */
btn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    btn.textContent = "⏸ Pausar música";
    localStorage.setItem("musicPlaying", "true");
  } else {
    music.pause();
    btn.textContent = "🎵 Reproducir música";
    localStorage.setItem("musicPlaying", "false");
  }
  playing = !playing;
});
