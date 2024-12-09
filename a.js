// window.onload = function() {window.location.replace("https://www.google.com/");}

async function fetchDataAsync(url) {
    const response = await fetch(url);
    console.log(await response.json());
}

fetchDataAsync('https://start-trezoir-cdn.github.io/test/xyz.json');
