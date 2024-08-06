
let container =document.getElementById('container')


// video output function
function videoOutPut() {
    
    
    const dataOut = `
    <div class="video-container">
         <div  id="qoutes-holder" style="position: absolute; height:100vh;" >
            <p id="qoutes-ele"></p>
            <a href="./mainPage.html" id="explore-btn"  > Explore  
            <i class="bi bi-arrow-right"></i>
      
            </a>

            
         </div>
        <video muted autoplay loop class="video-holder" id="video-ele" >
            <source src="./assets/2024_08_04_19_36_08.mp4" >
        </video>
    </div>`
  
  
    container.innerHTML += dataOut
    
   
}

  
   // page loader display function
    const loader =document.querySelector('.loader')
    function displayLoading(){
           
            loader.classList.add('display') 
           
    }

    // page loader display-none function
    function displayLoaded(){
        loader.classList.remove('display') 
    }

        // main functions calling
        function mainController(){
        
                displayLoading()
                videoOutPut()      
        }

    //   loader function calling
        function onloading(){
              displayLoaded() 
        }


    mainController()
 
    // variables for video output 
let videoEle =document.querySelector('#video-ele');
let quetes =document.querySelector('#qoutes-ele')
let exploreBtn =document.querySelector('#explore-btn')


//    setinterval for video current time
  const stopInterval = setInterval(function() {
       
  let value =videoEle.currentTime
    
        if(value > 5.66 ) {
          quetes.textContent = "1947 August 15 "
         
        }

        if(value > 7){
            exploreBtn.classList.add('btn-visible')
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
            //  window.location.href="./mainPage.html"
        }
    }
    , 1000);
   
    

