const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let length = 4

function increment(){
    if (length >= 4) {
        length += 1
        document.getElementById("length-digit").innerHTML = length
        console.log(length)
    }else if (length < 4){
        length = 4
    }
}

function decrement(){

    if (length < 4){
        length = 4
    }else if (length > 4){
        length -= 1
        document.getElementById("length-digit").innerHTML = length
        console.log(length)
    }
}

function generatePassword(){
    let randomNoPlaceholder = []
    for (let i = 0; randomNoPlaceholder.length < length; i++){
        randomNoPlaceholder.push(characters[Math.floor(Math.random()*characters.length) + 1])
    }
    document.getElementById("new-password").innerHTML = randomNoPlaceholder.join("")
}