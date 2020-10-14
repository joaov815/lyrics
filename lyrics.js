function findLyrics(artist, song){
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
}

const form = document.querySelector('#lyrics_form');
form.addEventListener('submit', el => {
    el.preventDefault();
    doSubmit();
})

async function doSubmit(){
    const lyrics_el = document.querySelector('#lyrics');
    const artist = document.querySelector('#artist');
    const song = document.querySelector('#song');

    

    // if(artist.value && song.value){
    //     lyrics_el.innerHTML = '<div class="spinner-grow" role="status><span class="sr-only"></span></div>';
    //     findLyrics(artist.value, song.value)
    //     .then(response => response.json())
    //     .then(data => {
    //         if(data.lyrics){
    //             lyrics_el.innerHTML = data.lyrics;
    //         }else{
    //             lyrics_el.innerHTML = data.error;
    //         }
    //     })
    //     .catch(err => lyrics_el.innerHTML = 'Ops: ' + err)
    // }
    if(artist.value && song.value){
        lyrics_el.innerHTML = '<div class="spinner-grow" role="status><span class="sr-only"></span></div>';
        try{
            const lyricsResponse = await findLyrics(artist.value, song.value);
            const data = await lyricsResponse.json();
            if(data.lyrics){
                lyrics_el.innerHTML = data.lyrics;
            }else{
                lyrics_el.innerHTML = data.error;
            }
        }catch(e){
            lyrics_el.innerHTML = `Oops! ${e}`;
        }
    }
    
    
    

}