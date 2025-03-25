/*Code by android developers start here*/
var startLoc = null;
//var contentName = '152';
//step 1:-
var contentName = parseInt(localStorage.getItem("currentbrand"));
var currentContentId  = parseInt(localStorage.getItem('currentcontent'));
//ends
/* var currentContentNSlide ='';

//custom slides changes begins here....

//alert("++++++++++++"+custcomslideflag1+"+++++++custcomslideid+++++++"+custcomslideid1);
	if (typeof(localStorage.getItem("currentcustomslideflag"))!='undefined' &&  localStorage.getItem("currentcustomslideflag") =='true'){
		var custcomslideid1=parseInt(localStorage.getItem("currentcontentcustomslideId"));
		//step 2:

		currentContentNSlide = currentContentId+"_"+contentName+"_"+custcomslideid1;
		//step 2 ends here
		localStorage.setItem("current",currentContentNSlide);
		localStorage.setItem("currentslide",custcomslideid1);

	}else{
		//step 3 :
		currentContentNSlide = currentContentId+"_"+contentName+"_"+'1';
		//step 3 ends here
		localStorage.setItem("current",currentContentNSlide);
		localStorage.setItem("currentslide",'1');
	}
	
//custom slides changes ends here....

/* currentContentNSlide = contentName+"_"+'1';
localStorage.setItem("current",currentContentNSlide);
localStorage.setItem("currentslide",'1'); */ 
checkClickThrough();

document.getElementById("main_content").addEventListener("touchmove", touchHandler, false);
document.getElementById("main_content").addEventListener("touchstart", touchHandler, false);
function touchHandler(e) {

	if (e.type == "touchstart") {

			 if( e.touches.length == 1 ) { // one finger touch
			 	var touch = e.touches[ 0 ];
			 	startLoc = { x : touch.pageX, y : touch.pageY };
			 }

			} else if (e.type == "touchmove") {
				if( startLoc ) {
					var touch = e.touches[ 0 ];

					if( Math.abs( startLoc.x - touch.pageX ) > Math.abs( startLoc.y - touch.pageY ) )
					{
						e.preventDefault();
					}
					startLoc = null;
				}

			}
		}
		/*Code by android developers ends here*/
		$(document).ready(function(){

			var ua = navigator.userAgent;
	//var event = "touchstart";
	var event = (ua.match(/Ipad/i)) ? "touchstart" : "click";


	$(".left_arrow").click(function(event) {
		go_nav('b');
	});

	$(".right_arrow").click(function(event) {
		go_nav('f');
	});

	$(".slides").click(function(){
		var slideNum =	$(this).index()+1;
		console.log(slideNum);
		open_page("",slideNum);

	});

	$(".reference").removeClass("active");

	$('.reference').on('swipeleft swiperight', function(event) {
		event.stopPropagation();
	});

	$(".box_btn").bind("click",function(){
		$(".reference").toggleClass("active");
	});

	currentSlide();

		$("#main_content").swipe({
	   swipeLeft:function(event, direction, distance, duration, fingerCount) {
		/* //step 4:-
		console.log("swipeleft"+localStorage.getItem("currentslide"));
		localStorage.setItem("previousslide",localStorage.getItem("currentslide"));
		//step 4 ends here */
		//alert("swipeleft");
		//myconsole("swipeleft");
		var page_id =  parseInt($("#wrapper").attr("rel"));
		var last_page_id = $(".slides").length;
		var slide_jumper_open = $(".reference").hasClass("active");
		if(page_id == last_page_id+1)	{
			return
		} else{
			go_nav('f');
		}
	  },

	  swipeRight:function(event, direction, distance, duration, fingerCount) {
		/* //step 5:-
		console.log("swiperight"+localStorage.getItem("currentslide"));
		localStorage.setItem("previousslide",localStorage.getItem("currentslide"));
		//step 5 ends here  */
			//alert("swiperight");
		//myconsole("swiperight");
		var page_id =  parseInt($("#wrapper").attr("rel"));
		var slide_jumper_open = $(".reference").hasClass("active");

		if(page_id == 0){
			//console.log("First Slide");
			//myconsole("First Slide");
			return
		} else {
			go_nav('b');
		}

	  } ,

        //Default is 75px, set to 0 for demo so any distance triggers swipe
         threshold:0
	});
});



function go_nav(direction) {
												
															 
					
				   
 
										 
 
																																	   

   
																					 
   
	
								  
		
   
	var page_id =  parseInt($("#wrapper").attr("rel"));
	
		
									

		   
						  
															   
																			
				   
																  
var flag=0;
if(direction == 'b') {

										 

																									 
																																		
		 
																				
																																					


  
 
									

	  
	if(page_id >= 0){
		page_id = page_id - 1;
		//alert(page_id);
		//console.log(page_id);
		if(page_id == 0){
            flag=2;
        }
	}
	 if(flag == 2){
        localStorage.setItem("gotoNextPrevBrand" ,2);//if one than next if 2 than prev
        //flag == 0;
var objectData={

				 "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
				  "previousslide": localStorage.getItem("previousslide"),
				 "slideId": page_id
				 };
		  var params = {
		  "query" : objectData,

		  "type" : "brandNavigation",
		  "callback" : "checkLastPgFn"
		  };
			//window.messageHandler.postMessage(JSON.stringify(params));
		
		//window.location = "js-call:" + "1" + ":" + encodeURIComponent(JSON.stringify({query:'NODATA', type:'brandNavigation', callback:'checkLastPgFn'}));
    }else{
        localStorage.setItem("gotoNextPrevBrand" ,0);
var objectData={

				 "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
				  "previousslide": localStorage.getItem("previousslide"),
				 "slideId": page_id
				 };
		  var params = {
		  "query" : objectData,

		  "type" : "brandNavigation",
		  "callback" : "checkLastPgFn"
		  };
			//window.messageHandler.postMessage(JSON.stringify(params));
		
    }

	
}else {
	
	if(page_id <= 6){
		page_id = page_id + 1;
		//alert(page_id);
		if(page_id == 7){
            flag=1;
        }
	}
	    if(flag == 1){
        localStorage.setItem("gotoNextPrevBrand" ,1);//if one than next if 2 than prev
         flag == 0;
var objectData={

				 "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
				  "previousslide": localStorage.getItem("previousslide"),
				 "slideId": page_id
				 };
		  var params = {
		  "query" : objectData,

		  "type" : "brandNavigation",
		  "callback" : "checkLastPgFn"
		  };
			//window.messageHandler.postMessage(JSON.stringify(params));
		
		// window.location = "js-call:" + "1" + ":" + encodeURIComponent(JSON.stringify({query:'NODATA', type:'brandNavigation', callback:'checkLastPgFn'}));
    }else{
        localStorage.setItem("gotoNextPrevBrand" ,0);
var objectData={

				 "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
				  "previousslide": localStorage.getItem("previousslide"),
				 "slideId": page_id
				 };
		  var params = {
		  "query" : objectData,

		  "type" : "brandNavigation",
		  "callback" : "checkLastPgFn"
		  };
			//window.messageHandler.postMessage(JSON.stringify(params));
		
    }


}



/* //step 8:
currentContentNSlide = currentContentId+"_"+contentName+"_"+page_id;
//step 8 ends here
localStorage.setItem("current",currentContentNSlide);
localStorage.setItem("currentslide",page_id); */

$("#wrapper").attr("rel",page_id);

var content="";
if(flag==0){
var pg_content = set_pg_content(page_id);

	$("#main_content").html(pg_content);
}
	//console.log("pg : "+page_id);
	if(page_id==4){
		$(".box2").click(function(event) {
			open_page("",5)
		});
		$(".box3").click(function(event) {
			open_page("",6)
		});
		$(".box4").click(function(event) {
	 		open_page("",7)
	 	});
		$(".box5").click(function(event) {
	 		open_page("",8)
	 	});
		$(".box6").click(function(event) {
	 		open_page("",9)
	 	});
		$(".box7").click(function(event) {
	 		open_page("",10)
	 	});
		$(".box8").click(function(event) {
	 		open_page("",11)
	 	});
		
	}
	 checkClickThrough();
}

function set_pg_content(pg_id){

$(".reference").removeClass("active");
currentSlide();
var selectedContentPath='';
switch(pg_id){
		
        
        case 1:
        content='<link rel="stylesheet" type="text/css" href="slide1/slide1.css" media="screen"/><section id=sec1><div class=secwrap><div class=right-top-logo><img alt=""src=slide1/emcure-logo.svg></div><div class=content-main-wrap><div class=content-wrap><div class=middel-top-product><img alt=""src=slide1/middle-top-text.png></div><div class=middel-product><img alt=""src=slide1/middle-text.png></div></div><div class=sec-content><div class=nausea-block><img alt=""src=slide1/nausea.svg></div><div class=abdominal-pain-block><img alt=""src=slide1/abdominal-pain.svg></div><div class=diarrhea-block><img alt=""src=slide1/diarrhea.svg></div><div class=constipation-block><img alt=""src=slide1/constipation.svg></div></div><div class=ref-text><p class=ref>Reference: 1. Gereklioglu C, Asma S, Korur A, Erdogan F, Kut A. Medication adherence to oral iron therapy in patients with iron deficiency anemia. Pak J Med Sci. 2016;32(3):604-607, doi: http://dx.doi.org/10.12669/pjms.323.9799</div></div></div></section>';
        break;
       
        case 2:
        content='<link rel="stylesheet" type="text/css" href="slide2/slide2.css" media="screen"/><section id=sec2><div class=secwrap><div class=right-top-logo><img alt=""src=slide2/emcure-logo.svg></div><div class=content-main-wrap><div class=background-img><img alt=""src=slide2/slide2-background.jpg></div><div class=left-top-logo><img alt=""src=slide2/left-top-logo.png></div><div class=right-mid-logo><img alt=""src=slide2/right-top-logo.png></div><div class=right-bottom-logo><img alt=""src=slide2/right-bottom-logo.png></div><div class=ref-text><p class=ref>Reference: 1. Gereklioglu C, Asma S, Korur A, Erdogan F, Kut A. Medication adherence to oral iron therapy in patients with iron deficiency anemia. Pak J Med Sci. 2016;32(3):604-607, doi: http://dx.doi.org/10.12669/pjms.323.9799</div></div></div></section>';
        break;


		case 3:
        content='<link rel="stylesheet" type="text/css" href="slide3/slide3.css" media="screen"/><section id=sec3><div class=secwrap><div class=secLogo><img alt=emcure src=slide3/femzact-logo.png></div><div class=content-main-wrap><div class=content-wrap><div class=product-content><img alt=""src=slide3/middle-product.png></div></div></div><footer><div class=footer><img alt=""src=slide3/slide3-footer.png></div></footer></div></section>';
        break;


		case 4:
        content='<link rel="stylesheet" type="text/css" href="slide4/slide4.css" media="screen"/><section id=sec5><div class=secwrap><div class=secLogo><img alt=emcure src=slide4/femzact-logo.png></div><div class=content-main-wrap><div class=content-wrap><div class=point-1><a href=#point1><img alt=""src=slide4/point-1.png></a></div><div class=point-2><a href=#point2><img alt=""src=slide4/point-2.png></a></div><div class=point-3><a href=#point3><img alt=""src=slide4/point-3.png></a></div></div></div><footer><div class=footer><img alt=""src=slide4/slide4-footer-band.png></div></footer><div class=popup-wrapper id=point1><div class="popup-container slide-container"><a href=# class="close popup-close"><img alt=""src=slide4/popup-close.png></a><div class="popup-content slide-popup-content"><div class=popup-img><img alt=""src=slide4/point1-popup.png></div><div class=popup-text><p class=References-text><span>References:</span><br><span>1.</span> C Schmidt et al. Ferric maltol therapy for iron deficiency anaemia in patients with inflammatory bowel disease: long-term extension data from a Phase 3 study. Aliment Pharmacol Ther 2016; 44: 259-270 <span>2.</span> Lindgren S, Wikman O. Befrits R, et al Intravenous iron sucrose is superior to oral iron sulphate for correcting anaemia and restoring iron stores in IBD patients: a randomized, controlled, evaluator-blind, multicentre study. Scand J Gastroenterol 2009; 44: 838-45 <span>3.</span> Chauhan N, Dogra P, Sharma R, et al. (February 11, 2023) Randomized Controlled Trial Comparing Ferrous Sulfate and Iron Sucrose in Iron Deficiency Anemia in Pregnancy. Cureus 15(2): e34858 <span>4.</span> María Jesús Cancelo- Hidalgo, Camil Castelo-Branco, Santiago Palacios, Javier Haya-Palazuelos, Manel Ciria-Recasens, José Manasanch & Lluís Pérez-Edo (2013) Tolerability of different oral iron supplements: a systematic review, Current Medical Research and Opinion, 29:4, 291-303 <span>5.</span> Bhavi and Jaju. Intravenous iron sucrose v/s oral ferrous fumarate for treatment of anemia in pregnancy. A randomized controlled trial. BMC Pregnancy and Childbirth (2017) 17:137</div></div></div></div><div class=popup-wrapper id=point2><div class="popup-container slide-container"><a href=# class="close popup-close"><img alt=""src=slide4/popup-close.png></a><div class="popup-content slide-popup-content"><div class=popup-img><img alt=""src=slide4/point2-popup.png></div><div class=popup-text><p class=References-text><span>References:</span><br>1. Schmidt C, Ahmad T, Tulassay Z, et al. Ferric malol therapy for iron deficiency anaemia in patients with inflammatory bowel disease: long-term extension data from a Phase 3 study. Aliment Pharmacol Ther. 2016;44:259-270</div></div></div></div><div class=popup-wrapper id=point3><div class="popup-container slide-container"><a href=# class="close popup-close"><img alt=""src=slide4/popup-close.png></a><div class="popup-content slide-popup-content"><div class=popup-img><img alt=""src=slide4/point3-popup.png></div><div class=popup-text><p class=References-text><span>References:</span><br>1. Mahmood L. The metabolic processes of folic acid and Vitamin B12 deficiency. Journal of Health Research and Reviews (In Developing Countries). 2014 Jan 1:1(1):5-9.</div></div></div></div></section>';
        break;
		
		case 5:
        content='<link rel="stylesheet" type="text/css" href="slide5/slide5.css" media="screen"/><section id=sec4><div class=secwrap><div class="s1"><img src="slide5/s1.png" width="1024" height="768" alt=""/></div><div class="s2"><img src="slide5/s2.png"/></div><div class="s3"><img src="slide5/s3.png"/></div><div class="s4"><img src="slide5/s4.png"/></div><div class="s5"><img src="slide5/s5.png"/></div><div class="s6"><img src="slide5/s6.png"/></div><div class="s7"><img src="slide5/s7.png"/></div><div class="s8"><img src="slide5/s8.png"/></div><div class="s9"><img src="slide5/s9.png"/></div></div></section>';
        break;
		
		case 6:
        content='<link rel="stylesheet" type="text/css" href="slide6/slide6.css" media="screen"/><section id=sec4><div class=secwrap><div class=secLogo><img alt=emcure src=slide6/femzact-logo_1.png></div><div class=content-main-wrap><div class=content-wrap><div class=left-side-img><img alt=""src=slide6/left-img.png></div><div class=center-img><img alt=""src=slide6/center-img.png></div><div class=right-side-img><img alt=""src=slide6/right-img.png></div></div></div><footer><div class=footer><img alt=""src=slide6/slide6-footer-band.png></div></footer></div></section>';
        break;

}

return content;

}

function showDiv() {
   document.getElementById('welcomeDiv').style.display = "block";
}
function showDiv2() {
   document.getElementById('welcomeDiv2').style.display = "block";
}


function open_page(url,page_id){
	localStorage.getItem('currentbrand');
    localStorage.getItem('currentcontent');
    localStorage.getItem('currentcontentbrandId');
    localStorage.getItem('current');
	localStorage.setItem("gotoNextPrevBrand" ,0);
	//alert("====currentbrand======"+localStorage.getItem('currentbrand'));
	//alert("====currentcontent======"+localStorage.getItem('currentcontent'));
	//alert("====currentcontentbrandId======"+localStorage.getItem('currentcontentbrandId'));
	//alert("====current======"+localStorage.getItem('current'));
	//alert("====previousslide======"+localStorage.getItem("previousslide"));
  
 
	//alert("====page_id======"+page_id);
		var objectData={

         "gotoNextPrevBrand": localStorage.getItem("gotoNextPrevBrand"),
          "previousslide": localStorage.getItem("previousslide"),
         "slideId": page_id
         };
  var params = {
  "query" : objectData,
  "type" : "brandNavigation",
  "callback" : "checkLastPgFn"
  };


    //window.messageHandler.postMessage(JSON.stringify(params)); 
	 /* // alert(page_id);
	//step 10:
	if (typeof(localStorage.getItem("currentslide"))!='undefined'){
		//to checked previous slide has god end time...
		var slideid=localStorage.getItem("currentslide");
		toCaptureTime(slideid);
		
	}
	
	// toCaptureTime(page_id);
	 localStorage.setItem("currentslide",page_id);
	 currentContentNSlide = currentContentId+"_"+contentName+"_"+page_id;
	 localStorage.setItem("current",currentContentNSlide);
	//step 10 ends here */

	 $("#wrapper").attr("rel",page_id);
	 var content="";
	 var pg_content = set_pg_content(page_id);

	 	$("#main_content").html(pg_content);

	 if(page_id==4){
		$(".box2").click(function(event) {
			open_page("",5)
		});
		$(".box3").click(function(event) {
			open_page("",6)
		});
		$(".box4").click(function(event) {
	 		open_page("",7)
	 	});
		$(".box5").click(function(event) {
	 		open_page("",8)
	 	});
		$(".box6").click(function(event) {
	 		open_page("",9)
	 	});
		$(".box7").click(function(event) {
	 		open_page("",10)
	 	});
		$(".box8").click(function(event) {
	 		open_page("",11)
	 	});
	 }
	  checkClickThrough();
	}

	function checkClickThrough(){
	var currentslide=localStorage.getItem("currentslide");
	//alert(currentslide);
	document.getElementById("click_through").innerHTML='';

	if(currentslide == 1){
	document.getElementById("click_through").innerHTML='';
		}
    if(currentslide == 2){
	document.getElementById("click_through").innerHTML='';
		}

	}

	function checkBtns(refNum){
		switch(refNum){
			case 1:
			open_page('',1);
            break;
		}
	}

	function currentSlide(){
		var curr_id =  parseInt($("#wrapper").attr("rel"));
		$(".slides").removeClass("active");
		$(".slides:nth-child("+curr_id+")").addClass("active");
        runAnimation();
	}

	var ln = 0;
	function myconsole(msg){

		var oldMsg = "</br>"+ln+". "+$("#myconsole").html();
		ln++
		$("#myconsole").html(msg+oldMsg);
	}

function currentTimeInDatabaseFormat(){//to get current time in dd-mm-yyyy hh:mm:ss
	var year = new Date().getFullYear();
	var month = new Date().getMonth();
		month = parseInt(month)+1;
	if(month.toString().length==1){
		month="0"+month;
	}

	var date = new Date().getDate();
	if(date.toString().length==1){
		date="0"+date;
	}

	var hour = new Date().getHours();
	if(hour.toString().length==1){
		hour="0"+hour;
	}

	var minutes = new Date().getMinutes();
	if(minutes.toString().length==1){
		minutes="0"+minutes;
	}

	var seconds = new Date().getSeconds();
	if(seconds.toString().length==1){
		seconds="0"+seconds;
	}

	var duration= year+"-"+month+"-"+date+"-"+hour + ":" + minutes + ":" + seconds;
	return duration;
}

$(document).ready(function(){
	$('body').on('click','.touchbtn',function(){
		$('.right_arrow').trigger( "click" );
	})

	$(document).on('click','.btnshow',function(){
//alert('hi')
		$('.touchbtn').css("display","block");
	})
})


/*--------------------- animation javascript -----------------------*/

function s9_pop1() {
	$('.s9_1').css("display","block");
	$('.s9_c1ose1').css("display","block");
	$('.s9_pop1').css("display","none");
}

//Additional Jquery animation code can start from here

function framepop(){
	setTimeout( function(){
		$('.frame').show();
		$('.frameclose').show();
		$('.frameopen').hide();
	},100);
}

function frameclose(){
	setTimeout( function(){
		$('.frame').hide();
		$('.frameclose').hide();
		$('.frameopen').show();
	},100);
}