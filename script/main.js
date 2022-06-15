let arrKey = Array.from(document.querySelectorAll('.key'))
let letters = []
let capsCl = true

for(i=0; i<arrKey.length; i++){
    letters.push(arrKey[i].id)
}
for(a=0; a<letters.length; a++){
    if(letters[a].length>1){
        letters[a] = ''
    }
}
arrKey.forEach(element => {
    element.onclick = function () {
        element.style.boxShadow = '0 0 3px #999'
        element.style.transform = 'scale(0.9)'
        setTimeout(function () {
            element.style.boxShadow = '0 0 9px #999'
            element.style.transform = 'scale(1)'
        }, 150)
        if(capsCl == true){
            input.value += letters[arrKey.indexOf(element)]
        }else{
            input.value += letters[arrKey.indexOf(element)].toUpperCase()
        }
    }
});

backspace.onclick = function(){
    backspace.style.boxShadow = '0 0 3px #999'
    backspace.style.transform = 'scale(0.9)'
    setTimeout(function () {
        backspace.style.boxShadow = '0 0 9px #999'
        backspace.style.transform = 'scale(1)'
    }, 150)
    input.value = input.value.slice(0,-1)
}

caps.onclick = function () {
    caps.style.boxShadow = '0 0 3px #999'
    caps.style.transform = 'scale(0.9)'
    setTimeout(function () {
        caps.style.boxShadow = '0 0 9px #999'
        caps.style.transform = 'scale(1)'
    }, 150)
    if (capsCl == true) {
        capsCl = false
        document.querySelector('.capsCircle').style.backgroundColor = 'lime'
    } else {
        capsCl = true
        document.querySelector('.capsCircle').style.backgroundColor = 'gray'
    }
}

function pressKey(key) {
    arrKey.forEach(element => {
        element.style.boxShadow = '0 0 9px #999'
        element.style.transform = 'scale(1)'
    });
    document.getElementById(key).style.boxShadow = '0 0 3px #999'
    document.getElementById(key).style.transform = 'scale(0.9)'
    document.body.onkeyup = function () {
        document.getElementById(key).style.boxShadow = '0 0 9px #999'
        document.getElementById(key).style.transform = 'scale(1)'
    }
}

document.body.onkeydown = function (e) {
    if (e.keyCode == 27) {
        pressKey('esc')
    } else if (e.keyCode == 112) {
        pressKey('f1')
    } else if (e.keyCode == 113) {
        pressKey('f2')
    } else if (e.keyCode == 114) {
        pressKey('f3')
    } else if (e.keyCode == 115) {
        pressKey('f4')
    } else if (e.keyCode == 116) {
        pressKey('f5')
    } else if (e.keyCode == 117) {
        pressKey('f6')
    } else if (e.keyCode == 118) {
        pressKey('f7')
    } else if (e.keyCode == 119) {
        pressKey('f8')
    } else if (e.keyCode == 120) {
        pressKey('f9')
    } else if (e.keyCode == 121) {
        pressKey('f10')
    } else if (e.keyCode == 122) {
        pressKey('f11')
    } else if (e.keyCode == 123) {
        pressKey('f12')
    } else if (e.keyCode == 44) {
        pressKey('prtSc')
    } else if (e.keyCode == 45) {
        pressKey('insert')
    } else if (e.keyCode == 46) {
        pressKey('delete')
    } else if (e.keyCode == 192) {
        pressKey('`')
    } else if (e.keyCode == 49) {
        pressKey('1')
    } else if (e.keyCode == 50) {
        pressKey('2')
    } else if (e.keyCode == 51) {
        pressKey('3')
    } else if (e.keyCode == 52) {
        pressKey('4')
    } else if (e.keyCode == 53) {
        pressKey('5')
    } else if (e.keyCode == 54) {
        pressKey('6')
    } else if (e.keyCode == 55) {
        pressKey('7')
    } else if (e.keyCode == 56) {
        pressKey('8')
    } else if (e.keyCode == 57) {
        pressKey('9')
    } else if (e.keyCode == 48) {
        pressKey('0')
    } else if (e.keyCode == 189) {
        pressKey('-')
    } else if (e.keyCode == 187) {
        pressKey('=')
    } else if (e.keyCode == 8) {
        pressKey('backspace')
    } else if (e.keyCode == 9) {
        pressKey('tab')
    } else if (e.keyCode == 81) {
        pressKey('q')
    } else if (e.keyCode == 87) {
        pressKey('w')
    } else if (e.keyCode == 69) {
        pressKey('e')
    } else if (e.keyCode == 82) {
        pressKey('r')
    } else if (e.keyCode == 84) {
        pressKey('t')
    } else if (e.keyCode == 89) {
        pressKey('y')
    } else if (e.keyCode == 85) {
        pressKey('u')
    } else if (e.keyCode == 73) {
        pressKey('i')
    } else if (e.keyCode == 79) {
        pressKey('o')
    } else if (e.keyCode == 80) {
        pressKey('p')
    } else if (e.keyCode == 219) {
        pressKey('{')
    } else if (e.keyCode == 221) {
        pressKey('}')
    } else if (e.keyCode == 220) {
        pressKey('/')
    } else if (e.keyCode == 20) {
        pressKey('caps')
        if (capsCl == true) {
            capsCl = false
            document.querySelector('.capsCircle').style.backgroundColor = 'lime'
        } else {
            capsCl = true
            document.querySelector('.capsCircle').style.backgroundColor = 'gray'
        }
    } else if (e.keyCode == 65) {
        pressKey('a')
    } else if (e.keyCode == 83) {
        pressKey('s')
    } else if (e.keyCode == 68) {
        pressKey('d')
    } else if (e.keyCode == 70) {
        pressKey('f')
    } else if (e.keyCode == 71) {
        pressKey('g')
    } else if (e.keyCode == 72) {
        pressKey('h')
    } else if (e.keyCode == 74) {
        pressKey('j')
    } else if (e.keyCode == 75) {
        pressKey('k')
    } else if (e.keyCode == 76) {
        pressKey('l')
    } else if (e.keyCode == 186) {
        pressKey(';')
    } else if (e.keyCode == 222) {
        pressKey("'")
    } else if (e.keyCode == 13) {
        pressKey('enter')
    } else if (e.keyCode == 16 && e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        pressKey('lshift')
    } else if (e.keyCode == 16 && e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        pressKey('rshift')
    } else if (e.keyCode == 90) {
        pressKey('z')
    } else if (e.keyCode == 88) {
        pressKey('x')
    } else if (e.keyCode == 67) {
        pressKey('c')
    } else if (e.keyCode == 86) {
        pressKey('v')
    } else if (e.keyCode == 66) {
        pressKey('b')
    } else if (e.keyCode == 78) {
        pressKey('n')
    } else if (e.keyCode == 77) {
        pressKey('m')
    } else if (e.keyCode == 188) {
        pressKey(',')
    } else if (e.keyCode == 190) {
        pressKey('.')
    } else if (e.keyCode == 191) {
        pressKey('?')
    } else if (e.keyCode == 17 && e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        pressKey('lctrl')
    } else if (e.keyCode == 17 && e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        pressKey('rctrl')
    } else if (e.keyCode == 18 && e.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
        pressKey('lalt')
    } else if (e.keyCode == 18 && e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        pressKey('ralt')
    } else if (e.keyCode == 32) {
        pressKey(' ')
    } else if (e.keyCode == 91) {
        pressKey('windows')
    } else if (e.keyCode == 93) {
        pressKey('contextMenu')
    } else if (e.keyCode == 38) {
        pressKey('topArrow')
    } else if (e.keyCode == 37) {
        pressKey('leftArrow')
    } else if (e.keyCode == 40) {
        pressKey('bottomArrow')
    } else if (e.keyCode == 39) {
        pressKey('rightArrow')
    }
}