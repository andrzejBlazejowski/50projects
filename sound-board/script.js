const sounds = ["arrows", "pistols", "ascend", "bubble", "flutter", "arrowskiss", "missle", "rocket"]

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound;

    btn.addEventListener("click", () =>{
        stopSounds();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})

function stopSounds(){
    sounds.forEach(sound=>{
        const audioSound = document.getElementById(sound);
        audioSound.pause();
        audioSound.currentTime = 0;
    })
}