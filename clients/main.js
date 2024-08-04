
let container =document.getElementById('container')

function videoOutPut() {
    
    const dataOut = `
    <div class="video-container">
         <div  id="qoutes-holder" style="position: absolute; height:100vh;" >
            <p id="qoutes-ele"></p>
            
         </div>
        <video muted autoplay loop class="video-holder" id="video-ele" onload="loadFunction()">
            <source src="./assets/2024_08_04_19_36_08.mp4" >
        </video>
    </div>`

    container.innerHTML += dataOut
}

  
  
  

    const loader =document.querySelector('.loader')
    function displayLoading(){
           
            loader.classList.add('display')  
    }

    function displayLoaded(){
        loader.classList.remove('display') 
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
let quetes =document.querySelector('#qoutes-ele')



  const stopInterval = setInterval(function() {
       
  let value =videoEle.currentTime

     console.log(value);
        
        if(value > 5.66 ) {
          quetes.textContent = "1947 August 15 "
          
        }
        
        if(value > 10 ){
            quetes.textContent = ""   
        }

        if(value > 14){
            quetes.textContent ="Our Freedom start"
        }

        if(value > 17){
            quetes.textContent =""
        }

        if(value > 20){
            quetes.textContent ="At red fort"
        }

        if(value > 26){
            quetes.textContent =""
        }

        if(value > 35){
            window.location.href="./main.html"
        }
    }
    , 1000);
   
    

