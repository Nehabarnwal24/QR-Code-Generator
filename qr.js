const qrText = document.getElementById('qr-text'); //querySelector can also be used
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault(); //this function will stop to submit the form and refresh also.
    isEmptyInput();
});

sizes.addEventListener('change', (e)=>{
    size = e.target.value; //to get and change the size
    isEmptyInput();
});

downloadBtn.addEventListener('click', ()=> {
    let img = document.querySelector('.qr-body img');
    
    if(img !== null){
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAttr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`); //it will give a blank rectangle whenever img is null
    }
})

function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR Code");
    // }

    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR Code");
}

function generateQRCode(){
    qrContainer.innerHTML = ""; //before creating new qr code , remove previous one
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}