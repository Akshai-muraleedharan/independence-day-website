
function imageOut(){
    const imageInput =document.querySelector('.banner')

   
        const imageoptPut =`
    
        <div class="image_holder">
        
        </div>
       
       `
         imageInput.innerHTML = imageoptPut

   
     
} 


const imageHolder =document.querySelector('.mainPageloader')
console.log(imageHolder);

function ImageLoding() {
    imageHolder.classList.add('dis-image')
}

function mainOut() {
    ImageLoding()
    imageOut()
}

mainOut()


const imgArr =['./assets/full-shot-people-celebrating-indian-republic-day.jpg','./assets/banner1.jpg']
const imageSrc =document.querySelector('.image_holder')
let imageDataOut;
let scrennSize = window.screen.width;

console.log(imageSrc.children);


if(scrennSize >= 320 && scrennSize <= 519){
    imageDataOut =`
   <img src="${imgArr[0]}" style="width:100%; height:80vh" alt="logo" >
   `
   
    imageSrc.innerHTML = imageDataOut
    // imageSrc.classList.add("mobile_responsive") 
}

if (scrennSize >= 520 && scrennSize < 767) {
    imageDataOut =`
    <img src="${imgArr[1]}" style="max-width:500px;" alt="logo" >
    `
    imageSrc.classList.add('dis_flex')
     imageSrc.innerHTML = imageDataOut
}

if(scrennSize >= 768 && scrennSize <= 1000 ){
    imageDataOut =`
    <img src="${imgArr[1]}" style="max-width:570px;" alt="logo" >
    `
    imageSrc.classList.add('dis_flex')
     imageSrc.innerHTML = imageDataOut
}


if(scrennSize >= 1001   ){
    imageDataOut =`
    <img src="${imgArr[1]}" style="max-width:680px;" alt="logo" >
    `
    imageSrc.classList.add('dis_flex')
     imageSrc.innerHTML = imageDataOut
}
     




