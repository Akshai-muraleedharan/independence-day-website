
let container =document.getElementById('container')

const loader =document.querySelector('.loader')
function displayLoading(){
    
     
        loader.classList.add('display')
     
   
    
}

function loadFunction(){
    console.log('hello');
    
}

function videoOutPut() {
    
    const dataOut = `
    <div class="video-container">
        <div style="position: absolute;">
            <img src="./assets/—Pngtree—calligraphy of happy independence day_8451875.png" class="logo_video" alt="logo">
        </div>
        <video muted autoplay loop class="video-holder" id="video-ele">
            <source src="./assets/2024_08_04_19_36_08.mp4" >
        </video>
    </div>`

    container.innerHTML += dataOut
}
function mainController(){

        displayLoading()
        videoOutPut()
       
        
}

mainController()
let videoEle =document.querySelector('#video-ele');


  const stopInterval = setInterval(function() {
       
  let value =videoEle.currentTime

     console.log(value);
        
        if(value > 5.66 ) {
          console.log('hai');
          clearInterval(stopInterval)
          videoEle.pause()
        }           
    }
    , 1000);
   
    

