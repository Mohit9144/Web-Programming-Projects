const videos = [
  { title: "AI in 5 Minutes", url: "https://www.youtube.com/embed/2ePf9rue1Ao" },
  { title: "Lofi Chill Beats", url: "https://www.youtube.com/embed/jfKfPfyJRdk" },
  { title: "Web Dev Full Course", url: "https://www.youtube.com/embed/zJSY8tbf_ys" },
  { title: "Python for Data Science", url: "https://www.youtube.com/embed/r-uOLxNrNk8" },
  { title: "10 Min Yoga", url: "https://www.youtube.com/embed/4pKly2JojMw" },
  { title: "JS Crash Course", url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
  { title: "Python Basics", url: "https://www.youtube.com/embed/_uQrJ0TkZlc" },
  { title: "Motivation Video", url: "https://www.youtube.com/embed/UNQhuFL6CWg" },
  { title: "Street Food India", url: "https://www.youtube.com/embed/t1-NsnlPc54" },
  { title: "HTML & CSS", url: "https://www.youtube.com/embed/mU6anWqZJcc" },
  { title: "React JS Fast", url: "https://www.youtube.com/embed/bMknfKXIFA8" },
  { title: "Study Tips", url: "https://www.youtube.com/embed/O0vCz2KWMMs" }

];

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.display = sidebar.style.display === "block" ? "none" : "block";
}

window.onload = () => {
  const container = document.getElementById("videoContainer");
  videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.innerHTML = `
      <iframe src="${video.url}" allowfullscreen></iframe>
      <h3>${video.title}</h3>
    `;
    container.appendChild(card);
  });
};
