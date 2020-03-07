const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrayExpr = expr.split("");
    let arrayNumber = new Array();
    let start=0;
    for(let i=0; i<arrayExpr.length/10; i++){
        let number=arrayExpr.slice(start,start+10);
        arrayNumber.push(number.join(""));
        start+=10;
    }
    start=0;
    let morzeCode="";
    let str="";
    for(let i=0; i<arrayNumber.length; i++){
        for(let j=0;j<5;j++){
            let arraySign=arrayNumber[i].slice(start,start+2);
            let sing = arraySign;
            if(sing == "10"){
                morzeCode+=".";
            }else if(sing == "11"){
                morzeCode+="-";
            }else if(sing == "**"){
                morzeCode+="**";
            }
            start+=2;
        }
        start=0;
        if(morzeCode=="**********"){
            str+=" ";
        }
        for (let key in MORSE_TABLE) {
            if(morzeCode==key){
                str+=MORSE_TABLE[key];
            }
        }
        morzeCode="";
    }
    return str;
}

module.exports = {
    decode
}