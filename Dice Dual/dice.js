function showimage(){
    let randomnumber1 = Math.floor(Math.random() * 6) + 1;
    let randomnumber2 = Math.floor(Math.random() * 6) + 1;

    // Array of dice images
    const images = [
        '/images/dice1.png',
        '/images/dice2.png',
        '/images/dice3.png',
        '/images/dice4.png',
        '/images/dice5.png',
        '/images/dice6.png',
    ];
    const selectedimage1 = images[randomnumber1 -1]
    const selectedimage2 = images[randomnumber2-1]

    let img1 = document.querySelector('.img1')
    let img2 = document.querySelector('.img2')

    img1.src = selectedimage1
    img2.src = selectedimage2

    if(selectedimage1>selectedimage2){
        document.querySelector("h1").innerHTML = "🚩Player 1 wins";
    } else if(selectedimage2>selectedimage1){
        document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
    } else{
        document.querySelector("h1").innerHTML = "Draw😒"
    }
}


