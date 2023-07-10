const imageBox = document.getElementById('imgBox')
const qrImage = document.getElementById('qrImg')
const inputF = document.getElementById('input_field')

function generateQR()
{
     if(inputF.value.length>0) {
     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputF.value;
     imageBox.classList.add('show-img')
     }
     else{
          inputF.classList.add('error');
          setTimeout(() => {
             inputF.classList.remove('error');
          },1000)
     }
}

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click' , () => {
     generateQR();
})