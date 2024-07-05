document.addEventListener('DOMContentLoaded', (event)=>{
   document.getElementById('generate_QRCode_button').addEventListener('click',(event)=>{
      event.preventDefault();
      generateQRocde();
   })
   document.getElementById('share_button').addEventListener('click', (event)=>{
            event.preventDefault();
            copyToClipboard();
   })
   
});
const generateQRocde = ()=>{
    let url_input_value = document.querySelector('input[type="url"]').value;
     
    if(isValidUrl(url_input_value)){
        document.getElementById('logo_bg_1').style.display='none';
        document.getElementById('logo_bg_1').style.display='none';
        document.querySelector('.generatorContainer').style.display ='none';
        let qrcode = new QRCode(document.getElementById("qrcode"), {
            text: url_input_value,//"http://jindo.dev.naver.com/collie",
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.M
        });
        
        document.getElementById('result_container').style.display='grid';
        setTimeout(()=>{
            let imageUrl = document.querySelector('#qrcode>img').src;
             console.log(imageUrl);
             document.getElementById('download_button').setAttribute('href', imageUrl);
        },10)
       

    }else{
      //handle incase invalid url
      document.querySelector('.generatorContainer>div').style.borderColor= 'red';
      
      console.log()
      Toastify({
        text: "please, Enter vaild url.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }
   
}
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}

const copyToClipboard = ()=>{
    const url_content = document.querySelector('input[type="url"]').value;
    navigator.clipboard.writeText(url_content);
    
    Toastify({
        text: "the quote copied to clipboard.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
 