const videos = document.getElementById("playlistVideos");
const videoPlayer = document.getElementById("videoPlayer");
const API_KEY = "AIzaSyBGy1NNAcPgxFgZ7E2gOXnl1fgF0PYJcAU";
const PLAYLIST_ID = "PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q";
const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;

const addEvents = (elements) => {
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      videoPlayer.src=`https://www.youtube.com/embed/${element.getAttribute("data-src")}`;
    });
  });
};
const populateDom = (parent, elements) => {
  elements.forEach((element) => {
    parent.innerHTML += `<img class="playlist_video_thumbnail" data-src=${element.snippet.resourceId.videoId} 
    src=${element.snippet.thumbnails.high.url} alt="Java playlist video"></img>`;
  });
};
//snippet.thumbnails/default/high medium
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    populateDom(videos, data.items);
  } catch (error) {
    console.log(error);
  }
};

const init = async () => {
  await fetchData(URL);
  addEvents(document.querySelectorAll(".playlist_video_thumbnail"));
};
init();
