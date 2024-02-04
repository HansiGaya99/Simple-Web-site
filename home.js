// $('.dropdown').click(function(e){
//     e.stopPropagation();
//     $('.nav-dropdown').toggle();
//   });
  
//   $('html').click(function(){
//     $('.nav-dropdown').hide();
//   })
  
//   $('#nav-toggle').on('click', function() {
//     this.classList.toggle('active');
//   });
  
//   $("#nav-toggle").click(function() {
//         $("nav ul").toggle();
//       });

arr = ["https://www.cameraegg.org/wp-content/uploads/2015/06/canon-powershot-g3-x-sample-images-1.jpg", "http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg", "http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg", "http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg"]
index = 0
img = document.querySelector("#imgSlide")
circles = document.querySelectorAll("input[name=slider]")
console.log(circles)
document.querySelector("#prev").addEventListener("click",()=>{
  circles[index].checked = false
  index = (index+1)%4
  img.src = arr[index]
  circles[index].checked = true
})
document.querySelector("#next").addEventListener("click",()=>{
  circles[index].checked = false
  index = index -  1
  if (index < 0){
    index = 3
  }
  circles[index].checked = true
  img.src = arr[index]
})




