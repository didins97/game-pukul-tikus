const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const pSkor = document.querySelector('.papan-skor')
// const paluefek = document.querySelector('.paluefek')

let tanahSebelumnya;
let selesai;
let skor;

function paluefek(){
    document.querySelector('.paluefek').removeAttribute("autoplay",0)
}

function randomTanah(tanah){
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t]
    // console.log(t)
    if(tRandom === tanahSebelumnya){
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom
    return tRandom
}

function randomWaktu(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus(){
    const tRandom = randomTanah(tanah)
    tRandom.classList.add('muncul');
    wRandom = randomWaktu(500, 1000)
    // console.log(wRandom)

    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) return munculkanTikus()
    }, wRandom);

}

function mulai(){
    selesai=false;
    skor=0;
    pSkor.textContent=0; 
    munculkanTikus()
    setTimeout(() => {
        selesai = true
    }, 10000);
}

function pukul(){
    skor++;
    this.parentNode.classList.remove('muncul')
    // paluefek();
    pSkor.textContent=skor;   
}

tikus.forEach(t => {
    t.addEventListener('click', pukul)
});