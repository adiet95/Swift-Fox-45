//Input Disini
let detik = 10;

//Code Below
let menit = Math.floor(detik / 60);

if (detik < 60){
    if(detik < 10){
        console.log(`Waktu Menunjukkan ${menit}:0${detik}`);
    } else {
        console.log(`Waktu Menunjukkan ${menit}:${detik}`);
    }
    
} else {
    let sec = detik - 60 * menit;
    if (sec < 10){
        console.log(`Waktu Menunjukkan ${menit}:0${sec}`);
    } else {
    console.log(`Waktu Menunjukkan ${menit}:${sec}`);
    }
}


