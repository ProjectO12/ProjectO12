var songsList = '[{"title":"Happy Birthday ", "artist":"Cherry", "image":"images/birthday.png", "status": false, "src":"videos/birthday.mp3"}, {"title":"Bujjima Bujjima", "artist":"Run Raja Run", "image":"images/bujjima.jpeg", "status": false, "src":"videos/bujjima.mp3"}, {"title":"Maula Mere", "artist":"Cherry", "image":"images/maula.png", "status": false, "src":"videos/maula.mp3"}, {"title":"Pilla Nuvvu Leni Jeevitham ", "artist":"Cherry", "image":"images/pilla.jpeg", "status": false, "src":"videos/pilla.mp3"}, {"title":"Gumma Gumma", "artist":"Cherry", "image":"images/gumma.jpeg", "status": false, "src":"videos/gumma.mp3"}, {"title":"Saami Saami", "artist":"Pushpa", "image":"images/saami.jpeg", "status": false, "src":"videos/saami.mp3"}, {"title":"Urike Urike", "artist":"Hit 2", "image":"images/urike.jpeg", "status": false, "src":"videos/urike.mp3"}, {"title":"Marudhaani", "artist":"Cherry", "image":"images/marudhaani.jpeg", "status": false, "src":"videos/marudhaani.mp3"}, {"title":"Yela Yela", "artist":"Cherry", "image":"images/yela.jpeg", "status": false, "src":"videos/yela.mp3"}, {"title":"Madam Sir Madam Anthey", "artist":"Cherry", "image":"images/madam.jpeg", "status": false, "src":"videos/madam.mp3"}, {"title":"Anuvanuvu", "artist":"Cherry", "image":"images/anuvanuvu.jpg", "status": false, "src":"videos/anuvanuvu.mp3"}, {"title":"Maula Mere Best Part", "artist":"Cherry", "image":"videos/maula2.png", "status": false, "src":"videos/maula2.mp3"}, {"title":"Oo Sivangi", "artist":"Cherry", "image":"videos/sivangi.jpeg", "status": false, "src":"videos/sivangi.mp3"}, {"title":"Thattukoledhey", "artist":"Deepti Sunaina", "image":"videos/thattukoledhey.jpg", "status": false, "src":"videos/thattukoledhey.mp3"}, {"title":"Listen In Anger", "artist":"Cherry", "image":"videos/anger1.png", "status": false, "src":"videos/goldeyes.mp3"}, {"title":"Listen In Anger 2", "artist":"Cherry", "image":"videos/anger2.png", "status": false, "src":"videos/ocheli.mp3"}, {"title":"Listen When Emotional/Sad", "artist":"Cherry", "image":"videos/sad.png", "status": false, "src":"videos/godavari.mp3"}, {"title":"My Favourite Ringtone", "artist":"Cherry", "image":"videos/ringtone.png", "status": false, "src":"videos/ringtone.mp3"}]';

// '{"title":"Despacito", "artist":"Justin", "image":"", "status": true, "src":"../videos/bad.mp3"}'

var currentIndex = 0;

const srcList = [];

// Player 
let progress = document.getElementById("progress"),
    song = document.getElementById("songAudio"),
    playerImg = document.getElementById("playerImg"),
    playPause = document.getElementById("playPause"),
    playPauseSymbol = document.getElementById("playPauseI"),
    playNext = document.getElementById("playNext"),
    playPrev = document.getElementById("playPrev"),
    playerArtist = document.getElementById("playerArtist"),
    playerTitle = document.getElementById("playerName");

let exSong = "";

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function PlayPause(){
    if (playPause.classList.contains("play")) {
        song.play();
        setInterval(() => {
            progress.value = song.currentTime;
        }, 500);

        playPause.classList.remove("play");
        playPause.classList.add("pause");
        playPauseSymbol.classList.remove("fi-sr-play");
        playPauseSymbol.classList.add("fi-sr-pause");
    }else{
        song.pause();
        playPause.classList.remove("pause");
        playPause.classList.add("play");
        playPauseSymbol.classList.remove("fi-sr-pause");
        playPauseSymbol.classList.add("fi-sr-play");
    }
}

progress.onchange = function(){

    song.play();
    song.currentTime = progress.value;

    playPause.classList.remove("play");
    playPause.classList.add("pause");
    playPauseSymbol.classList.remove("fi-sr-play");
    playPauseSymbol.classList.add("fi-sr-pause");

}

var parsed = JSON.parse(songsList);

exSong = parsed[0].src;

parsed.forEach(function (item){
      srcList.push(item.src);
      addProduct(item.title, item.artist, item.image, item.status, item.src);
});

defaultSong();

function defaultSong(){

    currentIndex = 0;

    exSong = parsed[0].src;

    song.src = parsed[0].src;

    playerImg.src = parsed[0].image;
    playerName.innerHTML = parsed[0].title;
    playerArtist.innerHTML = parsed[0].artist;

    song.onloadedmetadata = function() {
        progress.max = song.duration;
        progress.value = song.currentTime;
    }

    playPause.onclick = function(){
        PlayPause();
    }

    playNext.onclick = function() {
        PlayNext();
    }


    playPrev.onclick = function() {
        PlayPrev();
    }

}

function addProduct(title, artist, image, status, src) {

  // add product
  const list = document.querySelector('.songs_list');
  const myLi = document.createElement('li');
  myLi.setAttribute("id", src);
  myLi.setAttribute("class", "song");

  if (exSong == src) {
      myLi.classList.add("selected");
  }

  myLi.onclick = function(){

    if (exSong != src) {

        song.src = src;

        playerImg.src = image;

        currentIndex = srcList.indexOf(src);

        song.onloadedmetadata = function() {
            progress.max = song.duration;
            progress.value = song.currentTime;
        }

        myLi.classList.add("selected");

        if (exSong != "") {
            document.getElementById(exSong).classList.remove("selected");
        }
        exSong = src;

        playerImg.src = image;
        playerName.innerHTML = title;
        playerArtist.innerHTML = artist;

        playPause.classList.remove("pause");
        playPause.classList.add("play");
        playPauseSymbol.classList.remove("fi-sr-pause");
        playPauseSymbol.classList.add("fi-sr-play");
        PlayPause();

    }

  }

  const icon = document.createElement('span');
  icon.innerHTML = "&#127925;"

  if (status) {
    icon.setAttribute("class", "active");
  } else {
    icon.setAttribute("class", "inactive");
  }

  const songImage = document.createElement('img');
  songImage.setAttribute("class", "songImg");
  songImage.setAttribute("src", image);

  const songTitles = document.createElement('div');
  songTitles.setAttribute("class", "songTitles");

  const name = document.createElement('h2');
  name.setAttribute("class", "songName");
  name.setAttribute("id", "songName");
  name.innerText = title;

  const artistName = document.createElement('h5');
  artistName.setAttribute("class", "songArtist");
  artistName.setAttribute("id", "songArtist");
  artistName.innerText = artist;

  songTitles.appendChild(name);
  songTitles.appendChild(artistName);

  myLi.appendChild(songImage);
  myLi.appendChild(songTitles);
  myLi.appendChild(icon);



  list.appendChild(myLi);
}

function PlayNext(){

    if (currentIndex < (srcList.length-1)) {
        currentIndex += 1;

        PlayCurrentIndex(currentIndex);
    }
}

function PlayPrev(){

    if (currentIndex >= 1) {
        currentIndex -= 1;

        PlayCurrentIndex(currentIndex);
    }   
}


function PlayCurrentIndex(index){

    document.getElementById(exSong).classList.remove("selected");

    exSong = parsed[index].src;

    song.src = parsed[index].src;

    document.getElementById(exSong).classList.add("selected");

    playerImg.src = parsed[index].image;
    playerName.innerHTML = parsed[index].title;
    playerArtist.innerHTML = parsed[index].artist;

    song.onloadedmetadata = function() {
        progress.max = song.duration;
        progress.value = song.currentTime;
    }

    playPause.classList.remove("pause");
    playPause.classList.add("play");

    playPauseSymbol.classList.remove("fi-sr-pause");
    playPauseSymbol.classList.add("fi-sr-play");

    PlayPause();
    
    playPause.onclick = function(){
        PlayPause();
    }
}

function SkipToNextSlide(){
    location.replace("message.html");
}
