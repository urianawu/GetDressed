var wardrobeModel;
var RECOMMENDATIONS = [];


$(document).ready(function() {
    var h = $(main).height();
    $(main).width(h / 711 * 600);

    var leftpos = ($(document).width() - $(main).width()) / 2;
    $(main).css("left", leftpos + "px");
});

$(window).resize(function() {
    var h = $(main).height();
    $(main).width(h / 711 * 600);

    var leftpos = ($(document).width() - $(main).width()) / 2;
    $(main).css("left", leftpos + "px");
});

function setup() {
    wardrobeModel = JSON.parse(localStorage.wardrobeModel);
    getLocation();
    RECOMMENDATIONS.length = 0;
    
    // get 5 random outfit recommendations from wardrobe
    for (var i = 0; i < 5; ++i) {
      var outfit = {};
      outfit.isDress = false;
      if (wardrobeModel.gender == "female") {
        outfit.isDress = Math.random() * (wardrobeModel.dresses.length + wardrobeModel.tops.length) < wardrobeModel.dresses.length;
      }
      if (outfit.isDress) {
        outfit.top = "";
        outfit.bottom = "";
        outfit.dress = wardrobeModel.dresses[Math.floor(Math.random() * wardrobeModel.dresses.length)].url;
      }
      else {
        outfit.top = wardrobeModel.tops[Math.floor(Math.random() * wardrobeModel.tops.length)].url;
        outfit.bottom = wardrobeModel.bottoms[Math.floor(Math.random() * wardrobeModel.bottoms.length)].url;
        outfit.dress = "";
      }
      outfit.shoes = wardrobeModel.shoes[Math.floor(Math.random() * wardrobeModel.shoes.length)].url;
      RECOMMENDATIONS.push(outfit);
    }
    /*
    var list = {};
    for (var i = 0; i < 3; i++) {
        list = {};
        list["top"] = TOP[i]["image"];
        list["bottom"] = PANTS[i]["image"];
        list["shoes"] = SHOES[i]["image"];
        RECOMMENDATIONS.push(list);
    }*/
    
    console.log(RECOMMENDATIONS);
    var top = document.getElementById("top");
    //console.log(pics);
    top.src = RECOMMENDATIONS[0]["top"];
    top.value = 0;
    var bottom = document.getElementById("bottom");
    //console.log(pics);
    bottom.src = RECOMMENDATIONS[0]["bottom"];
    bottom.value = 0;
    var dress = document.getElementById("dress");
    //console.log(pics);
    dress.src = RECOMMENDATIONS[0]["dress"];
    dress.value = 0;
    var shoes = document.getElementById("shoes");
    //console.log(pics);
    shoes.src = RECOMMENDATIONS[0]["shoes"];
    shoes.value = 0;

    //console.log(pics.value);
    picArea.appendChild(top);
    picArea.appendChild(bottom);
    //picArea.appendChild(dress);
    picArea.appendChild(shoes);

};

function forward() {
    var top = document.getElementById("top");
    var bottom = document.getElementById("bottom");
    var dress = document.getElementById("dress");
    var shoes = document.getElementById("shoes");

    var position = top.value;
    //console.log(position);
    if (position == RECOMMENDATIONS.length - 1) {
        position = -1;
        top.value = -1;
    }
    top.src = RECOMMENDATIONS[position + 1]["top"];
    bottom.src = RECOMMENDATIONS[position + 1]["bottom"];
    dress.src = RECOMMENDATIONS[position + 1]["dress"];
    shoes.src = RECOMMENDATIONS[position + 1]["shoes"];
    top.value += 1;
    //console.log(pic.value);
};

function backward() {

    var top = document.getElementById("top");
    var bottom = document.getElementById("bottom");
    var dress = document.getElementById("dress");
    var shoes = document.getElementById("shoes");

    var position = top.value;
    //console.log(position);
    if (position == 0) {
        position = RECOMMENDATIONS.length;
        top.value = RECOMMENDATIONS.length;
    }
    top.src = RECOMMENDATIONS[position - 1]["top"];
    bottom.src = RECOMMENDATIONS[position - 1]["bottom"];
    dress.src = RECOMMENDATIONS[position - 1]["dress"];
    shoes.src = RECOMMENDATIONS[position - 1]["shoes"];
    top.value -= 1;


};
function like(str) {

	var ldid = document.getElementById(str);
	if (ldid.style.opacity == 1.0) {
		ldid.style.opacity = 0.3;
	}
	
	else ldid.style.opacity = 1.0;
};
function popupMood() {
	$("#choosemood").show();
	$("#choosemood").animate({
		top : "55%",
		left : "50%",
		height : "35%"
	});
	
};

function chooseMood(str) {

	$("#choosemood").animate({
		top : "90%",
		left : "85%",
		height : "3%"
	});
	$("#choosemood").fadeOut(100);
	var c = document.getElementById("mood");
	c.src = str;
};

function selectEvent(calendarEvent) {
  console.log(calendarEvent);
  setup();
};

function goHome() {
    window.location = "../ModePicker/index.html";
};
