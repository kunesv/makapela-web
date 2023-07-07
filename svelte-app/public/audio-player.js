var playSong = function(listElement, playNow = true) {
    document.querySelector('#player header').textContent = listElement.querySelector('.song-name').textContent
    let player = document.querySelector('#player audio')
    player.src = listElement.dataset.url
    player.dataset.id = listElement.id
    if (playNow) {
        player.play()
    }
    location.hash = listElement.id
}

var nextSong = function(currentSong) {
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].id == currentSong.id && i < songs.length - 1) {
            return songs[i+1]
        }
    }
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    var songs = document.querySelectorAll('#playlist li li');

    for (let i = 0; i < songs.length; i++) {
        songs[i].addEventListener("click", function(e) {
            playSong(e.target)
        })
    }

    document.querySelector('#player audio').addEventListener('ended', function(e) {
        let next = nextSong(document.querySelector('li#' + document.querySelector('#player audio').dataset.id))
        if (next) {
            playSong(next)
        }
    })

    document.addEventListener('DOMContentLoaded', function() {
        songId = document.location.hash
        if (songId) {
            playSong(document.querySelector(songId), true)
        } else {
            playSong(songs[0], false)
        }
    })

})
