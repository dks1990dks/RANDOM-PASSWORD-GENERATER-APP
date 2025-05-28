const passwordBox = document.getElementById(`password`)
const length = 12



const uppercase  = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
const lowercase = `abcdefghijklmnopqrstuvwxyz`
const number = `0123456789`
const symbol = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;
const allchar = uppercase+lowercase+number+symbol

function generatePassword() {
    let password = ``
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    console.log(password);
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    console.log(password);
    password += number[Math.floor(Math.random()*number.length)]
    console.log(password);
    password += symbol[Math.floor(Math.random()*symbol.length)]
    
    console.log(password);
    
    for (let index = 4; index < length; index++) {
        password+=allchar[Math.floor(Math.random()*allchar.length)]
        console.log(password);
        
        
    }
    // Shuffle password to avoid predictable order
passwordBox.value = password.split('').sort(() => Math.random() - 0.5).join('');
console.log(password);

    
}

function copyPassword() {
    passwordBox.select()
    document.execCommand(`copy`)
}


