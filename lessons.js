const videos = {
  math: [
    { title: "Algebra Basics", url: "https://www.youtube.com/embed/5ANcspdYh_U" },
    { title: "Geometry Introduction", url: "https://www.youtube.com/embed/Nhv5Y1Yw2zE" }
  ],
  cs: [
    { title: "Intro to Programming", url: "https://www.youtube.com/embed/zOjov-2OZ0E" },
    { title: "Data Structures", url: "https://www.youtube.com/embed/RBSGKlAvoiM" }
  ],
  history: [
    { title: "World War II Overview", url: "https://www.youtube.com/embed/HUqy-OQvVtI" },
    { title: "Ancient Civilizations", url: "https://www.youtube.com/embed/lKRoakKkQjI" }
  ]
}

function showVideos(subject) {
  const videoList = document.getElementById("videoList")
  videoList.innerHTML = `<h3>${subject.toUpperCase()} Videos</h3><ul>` +
    videos[subject].map((v, i) => `<li onclick="playVideo('${subject}', ${i})">${v.title}</li>`).join('') +
    `</ul>`
}

function playVideo(subject, index) {
  const player = document.getElementById("player")
  const videoPlayer = document.getElementById("videoPlayer")
  player.src = videos[subject][index].url
  videoPlayer.style.display = "block"
}