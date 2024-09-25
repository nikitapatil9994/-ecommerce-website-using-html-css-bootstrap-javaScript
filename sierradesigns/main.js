
// let pitchTitleInput = document.getElementById("pitch-title");
// let pitchImageInput = document.getElementById("pitch-image");
// let pitchCategoryInput = document.getElementById("pitch-Category");



let mainSection = document.getElementById("data-list-wrapper");
let mainSection1 = document.getElementById("data-list1-wrapper");
let productData = [];
let gearData=[];

function  fetchData(){


    fetch("http://localhost:3000/products")
    .then((res)=>res.json())
    .then((data)=>{
        showData(data)
   
        
      
})
    }
    fetchData();

    function showData(thData)
{
    let show = thData.map((el)=>
        getDatat(el.image,el.title,el.price),



        

    )
  mainSection.innerHTML=show.join(" ")


 

   
   

    

}

function getDatat(image,title,price){
    let mainData=`         <div class="row" >
            <div class="grid" style="display: flex; width: 100%;  margin: auto;" >
                
                <div class="images">
               
                <a href="description.html?image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)},price=${encodeURIComponent(title)}">

                       <img src=${image}  alt=""  height="500px" width="100%">
                       </a>
             
                     <div class="box2">
                      
                         <h4 id="pitch-title">${ title}</h4>
                         <h6 >${price}</h6>
                     </div> 
                </div>
             
                
             
                    
                </div>
          
            </div>    `

          return mainData;



}
function getDatat(image,title,price){
    let mainData=`         <div class="row" >
            <div class="col-4" style="display: flex; width: 100%;  margin: auto;" >
                
                <div class="images">
               
                <a href="description.html?image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)},price=${encodeURIComponent(title)}">

                       <img src=${image}  alt=""  height="500px" width="100%">
                       </a>
             
                     <div class="box2">
                      
                         <h4 id="pitch-title">${ title}</h4>
                         <h6 >${price}</h6>
                     </div> 
                </div>
             
                
             
                    
                </div>
          
            </div>    `

          return mainData;



}



console.log(mainSection)



let slideIndex = 6;
showSlides(slideIndex);

function showSlides(index) {
    const slides = document.querySelectorAll('.shem');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
}



function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}


setInterval(() => {
    nextSlide();
}, 2000); 
       



 var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
interval: Infinity,
wrap: false
})


var swiper = new swiper  (".mySwiper", {
slidesPerView: 2,
spaceBetween: 0,
centeredSlides: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
});


