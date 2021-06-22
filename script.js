const controls = document.querySelectorAll('input');
const resetBtn = document.querySelector('#resetBtn');
const image = document.getElementById('output');
const sliderForm = document.querySelector('.controls')

controls.forEach(control => control.addEventListener('change', editImage));
controls.forEach(control => control.addEventListener('mousemove', editImage));
controls.forEach(control => control.addEventListener('touchmove', editImage));

resetBtn.addEventListener('click', reset);

const loadFile = function(event) {
	image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = () => URL.revokeObjectURL(this.src);
};

function editImage() {
    let brightness = document.getElementById('brightness').value;
    let contrast = document.getElementById('contrast').value;
    let saturate = document.getElementById('saturate').value;
    let sepia = document.getElementById('sepia').value;
    let grayscale = document.getElementById('grayscale').value;
    let border = document.getElementById('border').value;
    let borderColor = document.getElementById('borderColor').value; 

    image.style.filter = 
        'brightness('+brightness+'%) contrast('+contrast+'%) contrast('+contrast+'%) saturate('+saturate+'%) sepia('+sepia+'%) grayscale('+grayscale+'%)';
    image.style.padding = border + 'px';
    image.style.backgroundColor = borderColor;
}

function reset() {
    document.getElementById('brightness').value = 100;
    document.getElementById('contrast').value = 100;
    document.getElementById('saturate').value = 100;
    document.getElementById('sepia').value = 0;
    document.getElementById('grayscale').value = 0;
    document.getElementById('border').value = 0;
    document.getElementById('borderColor').value = "#ffc600";

    setTimeout(editImage, 0);
}





