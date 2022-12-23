const headerText = "Hyvää joulua Otava 😘";
const p1 = "Tämä kuponki oikeuttaa yhteen (1) [yksi] illalliseen <a href='http://restaurangmessob.se'>Ravintola Messobissa</a>.";
const p2 = "t. Vinö";

function timeleft(targetIso) {
	let target = new Date(targetIso);
	var diff = target - new Date();
	if (diff < 0) {
		return [0,0,0,0];
	} else {
		let days = Math.floor(diff / (1000 * 60 * 60 * 24));
		diff = diff - days * (1000 * 60 * 60 * 24);
		let hours = Math.floor(diff / (1000 * 60 * 60));
		diff = diff - hours * (1000 * 60 * 60);
		let minutes = Math.floor(diff / (1000 * 60));
		diff = diff - minutes * (1000 * 60);
		let seconds = Math.floor(diff / (1000));
		diff = diff - seconds * (1000);
		return [days, hours, minutes, seconds];
	}
}

function refresh(targetIso) {
	let left = timeleft(targetIso);
	if (left[0] == 0 && left[1] == 0 && left[2] == 0 && left[3] == 0) {
		$("#header").html(headerText);
    	$("#target1").html(p1);
    	$("#target2").html(p2);
	} else {
		let countdown = left[0] + " päivää " + left[1] + " tuntia " + left[2] + " minuuttia " + left[3] + " sekuntia...";
		$("#header").html("Yllätykseen " + countdown);
    	$("#target1").html(targetIso);
	}
}

$( document ).ready(function() {
	let targetIso = "2022-12-24T17:00";
	setInterval(() => refresh(targetIso), 100);
});
