"use strict";

document.getElementById('tank').style.top = '90px';
document.getElementById('tank').style.left = '320px';
document.getElementById('chargeGun').style.top = '-5px';
		var chargeGunCount = 0;

document.body.onkeydown = function (e) {
	var el = document.getElementById('tank');
		var gun = document.getElementById('topTankRound');
		var chargeGun = document.getElementById('chargeGun');
		var reloadGun = document.getElementById('reload');

  var KEYCODE_LEFT = 37;
  var KEYCODE_TOP = 38;
  var KEYCODE_RIGHT = 39;
  var KEYCODE_DOWN = 40;
  var KEYCODE_FIRE = 32;
		var KEYCODE_GUN_LEFT = 65;
		var KEYCODE_GUN_RIGTH = 68;
		var KEYCODE_GUN_FORWARD = 87;

		if (e.keyCode == KEYCODE_LEFT) {
		  el.style.left = (parseInt(el.style.left) - 10) + 'px';
		  el.className = 'tankLeft';
		}
		else if (e.keyCode == KEYCODE_RIGHT) {
		  el.style.left = (parseInt(el.style.left) + 10) + 'px';
			el.className = 'tankRight';
		}
		else if (e.keyCode == KEYCODE_TOP) {
		  el.style.top = (parseInt(el.style.top) - 10) + 'px';
			el.className = 'tankTop';
		}
		else if (e.keyCode == KEYCODE_DOWN) {
		  el.style.top = (parseInt(el.style.top) + 10) + 'px';
		  el.className = 'tankDown';
		}
		else if (e.keyCode == KEYCODE_FIRE) {
			++chargeGunCount;
			if(chargeGunCount <= 5){
				fire();
			}else{
				reloadGun.style.visibility = "visible";
				reloadGun.style.animation = "moveAround 2s";
				setTimeout(function(){
					reloadGun.style.visibility = "hidden";
					reloadGun.style.animation = "none";
					chargeGunCount = 0;
				},2000);
			}
		}
		else if (e.keyCode == KEYCODE_GUN_FORWARD) {
			gun.className = 'gunForward';
		}
		else if (e.keyCode == KEYCODE_GUN_LEFT) {
			gun.className = 'gunLeft';
		}
		else if (e.keyCode == KEYCODE_GUN_RIGTH) {
			gun.className = 'gunRigth';
		}

	function fire(){
		while(parseInt(chargeGun.style.top) != -100){
			chargeGun.style.transition = "all .4s ease-in";
			chargeGun.style.visibility = "visible";
			chargeGun.style.top = parseInt(chargeGun.style.top)-1+"px";
		}
		setTimeout(function(){
			chargeGun.style.transition = "all 0s ease-in";
			chargeGun.style.top = "-5px";
			chargeGun.style.visibility = "hidden";
		}, 400);
	}

}