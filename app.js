const header = document.querySelector('#header');
const btn = document.querySelector('#btn');

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const sum = r + g + b;
    if (sum < 300) {
        header.style.color = 'white';
    } else {
        header.style.color = 'black';
    }
    return `rgb(${r},${g},${b})`;

}

btn.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    header.innerText = newColor;
})