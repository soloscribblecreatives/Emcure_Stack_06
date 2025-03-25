function runAnimation() {
  window.requestAnimationFrame(function () {
    /* slide 1 animation script starts here */ 
    var sec1 = document.getElementById("sec1");
    if(sec1){
    const elaxTimelineOne = gsap.timeline({
      defaults: { duration: 1, ease: "easeInOut" }
    });
     gsap.set("#sec1 .nausea-block", { transform: "translateX(-40px)", opacity: 0 });
     gsap.set("#sec1 .abdominal-pain-block", { transform: "translateX(40px)", opacity: 0 });
     gsap.set("#sec1 .diarrhea-block", { transform: "translateX(-40px)", opacity: 0 });
     gsap.set("#sec1 .constipation-block", { transform: "translateX(40px)", opacity: 0 });
   
   
    
   elaxTimelineOne
   .to("#sec1 .nausea-block", { transform: "translateX(0)", opacity: 1, duration: 0.4 })
   .to("#sec1 .abdominal-pain-block", { transform: "translateX(0)", opacity: 1, duration: 0.4 },"-=0.1")
   .to("#sec1 .diarrhea-block", { transform: "translateX(0)", opacity: 1, duration: 0.4 },"-=0.1")
   .to("#sec1 .constipation-block", { transform: "translateX(0)", opacity: 1, duration: 0.4 },"-=0.1")
     
    
    }
 
    /* slide 1 animation script ends here */


     /* slide 3 animation script starts here */ 
     var sec3 = document.getElementById("sec3");
     if(sec3){
     const elaxTimelineThree = gsap.timeline({
       defaults: { duration: 1, ease: "easeInOut" }
     });
      gsap.set("#sec3 .secLogo", { transform: "translateY(-40px)", opacity: 0 });
      gsap.set("#sec3 .product-content", { transform: "scale(0)", opacity: 0 });
     
     
    elaxTimelineThree.to("#sec3 .secLogo", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
      .to("#sec3 .product-content", { transform: "scale(1)", opacity: 1, duration: 0.4 },"-=0.2")
      
     }
  
     /* slide 3 animation script ends here */



     
/* slide 4 animation script starts here */ 
var sec4 = document.getElementById("sec4");
if(sec4){
const elaxTimelineFour = gsap.timeline({
  defaults: { duration: 1, ease: "easeInOut" }
});
 gsap.set("#sec4 .secLogo", { transform: "translateY(-40px)", opacity: 0 });
 gsap.set("#sec4 .left-side-img", { transform: "translateX(-40px)",opacity:0  });
 gsap.set("#sec4 .right-side-img", { transform: "translatex(40px)", opacity: 0 });
 gsap.set("#sec4 .center-img", { transform: "scale(0)", opacity: 0 });


elaxTimelineFour
.to("#sec4 .secLogo", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
.to("#sec4 .left-side-img", { transform: "translateX(0)", opacity: 1, duration: 0.5 },"-=0.4")
.to("#sec4 .right-side-img", { transform: "translatex(0)", opacity: 1, duration: 0.5 },"-=0.1")
.to("#sec4 .center-img", {  transform: "scale(1)", opacity: 1, duration: 0.5 },"-=0.3")

}

/* slide 4 animation script ends here */

      


     /* slide 5 animation script starts here */ 
     var sec5 = document.getElementById("sec5");
     if(sec5){
     const elaxTimelineFive = gsap.timeline({
       defaults: { duration: 1, ease: "easeInOut" }
     });
      gsap.set("#sec5 .secLogo", { transform: "translateY(-40px)", opacity: 0 });
      gsap.set("#sec5 .point-1", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec5 .point-2", { transform: "scale(0)", opacity: 0 });
      gsap.set("#sec5 .point-3", { transform: "scale(0)", opacity: 0 });
     
    elaxTimelineFive
      .to("#sec5 .secLogo", { transform: "translateY(0)", opacity: 1, duration: 0.5 })
      .to("#sec5 .point-1", { transform: "scale(1)", opacity: 1, duration: 0.5 },"-=0.1")
      .to("#sec5 .point-2", { transform: "scale(1)", opacity: 1, duration: 0.5 },"-=0.1")
      .to("#sec5 .point-3", { transform: "scale(1)", opacity: 1, duration: 0.5 },"-=0.1")
     }
  
     /* slide 5 animation script ends here */
     
  });
}



  