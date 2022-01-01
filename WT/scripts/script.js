var boolean=1;

scaleUp=()=>{
	var uiux = document.getElementsByClassName("uiux-main");
	var heading = document.getElementsByClassName("make-it-diff");
	var img = document.getElementsByClassName("uxui_img");
	uiux[0].style.fontSize="1.5em";
	heading[0].style.color="purple";
	img[0].style.width="70%";
}

backToNormal=()=>{
	var uiux = document.getElementsByClassName("uiux-main");
	var heading = document.getElementsByClassName("make-it-diff");
	var img = document.getElementsByClassName("uxui_img");
	uiux[0].style.fontSize="1em";
	heading[0].style.color="white";
	img[0].style.width="30%";
}


checkScreenSize=()=>{
		var dynamic700 = document.getElementsByClassName("dynamic700");
		var dynamic900 = document.getElementsByClassName("dynamic900");
		var dynamic1300 = document.getElementsByClassName("dynamic1300");
		var dynamic1600 = document.getElementsByClassName("dynamic1600");

		window.addEventListener('resize', function(event){
   		switch (screen.width) {
			  case 700:
			    dynamic700[0].disabled = false;
			    dynamic900[0].disabled = true;
				dynamic1300[0].disabled = true;
				dynamic1600[0].disabled = true;
			    break;
			  case 900:
			  	dynamic700[0].disabled = true;
			    dynamic900[0].disabled = false;
			    dynamic1300[0].disabled = true;
				dynamic1600[0].disabled = true;
			    break;
			  case 1300:
			  	 dynamic700[0].disabled = true;
				 dynamic900[0].disabled = true;
			     dynamic1300[0].disabled = false;
			     dynamic1600[0].disabled = true;
			    break;
			  case 1600:
			    dynamic700[0].disabled = true;
				dynamic900[0].disabled = true;
				dynamic1300[0].disabled = true;
			    dynamic1600[0].disabled = false;
			    break;
			}	

		});

		
}


ImgDetailed=()=>{
	var img = document.getElementsByClassName("uxui_img");


	doubbledSize=img[0].width*2;

	img[0].style.position="absolute";
	img[0].style.left="50%";
	img[0].style.top="50%";
	img[0].style.transform='translate(-50% , -50%)';
	img[0].style.width=doubbledSize+"px";
}

ImgNormal=()=>{
	var img = document.getElementsByClassName("uxui_img");


	doubbledSize=img[0].width/2;

	img[0].style.position="initial";
	img[0].style.left="0";
	img[0].style.top="0";
	img[0].style.transform='none';
	img[0].style.width=doubbledSize+"px";
}



switchBool=()=>{
	boolean*=(-1);
}

onPosion=()=>{
	
	window.addEventListener('scroll', function(event){
   		var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollY>116 & boolean===1){
			scaleUp();
		}
		else if(boolean===-1){
			return;
		}
		else{
			backToNormal();
		}
	});
	
	
}


checkScreenSize();
onPosion();

