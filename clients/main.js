
let container =document.getElementById('container')

const loader =document.querySelector('.loader')
function displayLoading(){
    
     
        loader.classList.add('display')  
}

// function displayLoaded(){
//     loader.classList.remove('display') 
// }



function videoOutPut() {
    
    const dataOut = `
    <div class="video-container">
        <video muted autoplay loop class="video-holder" id="video-ele" onload="loadFunction()">
            <source src="./assets/2024_08_04_19_36_08.mp4" >
        </video>
    </div>`

    container.innerHTML += dataOut
}


function loadFunction(){
    console.log('hello');
    
}
function mainController(){

        displayLoading()
        videoOutPut()
        // displayLoaded()
        
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
   
    

