// window.onload = function() {window.location.replace("https://www.google.com/");}

async function load() {
    let url = 'https://start-trezoir-cdn.github.io/test/xyz.json';
    let obj = await (await fetch(url)).json();
    console.log(JSON.parse(obj));
}

load();
