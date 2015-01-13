var wardrobeModel;
var CANDIDATES = [];
var RECOMMENDATIONS = [];

var currentCalendarEvent = "";


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
    getLocation();
    
    wardrobeModel = JSON.parse(localStorage.wardrobeModel);

    RECOMMENDATIONS = recommendOutfits(5);
    
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

function recommendOutfits(num) {
    CANDIDATES.length = 0;
    RECOMMENDATIONS.length = 0;
    
    filterWardrobeByContext();
    
    // get some outfit candidates from wardrobe
    for (var i = 0; i < num * 4; ++i) {
      var outfit = {};
      outfit.isDress = false;
      if (wardrobeModel.gender == "female") {
        outfit.isDress = Math.random() * (wardrobeModel.dresses.length + wardrobeModel.tops.length) < wardrobeModel.dresses.length;
      }
      if (outfit.isDress) {
        outfit.top = "";
        outfit.bottom = "";
        var index = Math.floor(Math.random() * wardrobeModel.dresses.length);
        outfit.dress = wardrobeModel.dresses[index].url;
        outfit.dressHSV = wardrobeModel.dresses[index].hsvColor;
        outfit.dressHistory = wardrobeModel.dresses[index].historyScore;
        outfit.dressCategory = wardrobeModel.dresses[index].subcategory;
      }
      else {
        var index = Math.floor(Math.random() * wardrobeModel.tops.length);
        outfit.top = wardrobeModel.tops[index].url;
        outfit.topHSV = wardrobeModel.tops[index].hsvColor;
        outfit.topHistory = wardrobeModel.tops[index].historyScore;
        outfit.topCategory = wardrobeModel.tops[index].subcategory;
        
        index = Math.floor(Math.random() * wardrobeModel.bottoms.length);
        outfit.bottom = wardrobeModel.bottoms[index].url;
        outfit.bottomHSV = wardrobeModel.bottoms[index].hsvColor;
        outfit.bottomHistory = wardrobeModel.bottoms[index].historyScore;
        outfit.bottomCategory = wardrobeModel.bottoms[index].subcategory;
        outfit.dress = "";
      }
      var index = Math.floor(Math.random() * wardrobeModel.shoes.length);
      outfit.shoes = wardrobeModel.shoes[index].url;
      outfit.shoesHSV = wardrobeModel.shoes[index].hsvColor;
      outfit.shoesHistory = wardrobeModel.shoes[index].historyScore;
      outfit.shoesCategory = wardrobeModel.shoes[index].subcategory;
      CANDIDATES.push(outfit);
    }
    
    return rankCandidates(num);
};

/*
wardrobe model categories
  -men
  +women

tops
  -tshirt
  -hoodie
  -suitjacket
  -jacket
  +shirt
  +blouse
  +sweater
  +jacket
bottoms
  -shorts
  -pants
  -jeans
  -suitpants
  +skirt
  +shorts
  +pants
  +jeans
dresses
  +officewear
  +dress
shoes
  -shoes
  -boots
  -sandals
  +pumps
  +sandals
  +shoes
  +boots
*/

var delay = 0;

function filterWardrobeByContext() {
  console.log('high: ' + weatherInfo.high + ', low: '+ weatherInfo.low);
  
  // wait until weather context is loaded
  if (delay > 3000) {
    alert("problem with weather context extraction");
    return;
  }
  if (typeof weatherInfo.high === 'undefined' || typeof weatherInfo.low === 'undefined') {
    console.log("still undefined");
    delay += 100;
    setTimeout(function(){filterWardrobeByContext()}, 100);
  }
  console.log("total delay:" + delay);
  
  
  if (weatherInfo.high < 50) {                                    // COLD
    console.log("It's cold, filtering out shorts, short-sleeves, and skirts");
    // remove short sleeve shirts
    for (var i = wardrobeModel.tops.length - 1; i >= 0; --i) {
      if (wardrobeModel.tops[i].subcategory == "tshirt" ||
          wardrobeModel.tops[i].subcategory == "shirt") {
        wardrobeModel.tops.splice(i,1);
      }
    }
    // remove skirts and shorts
    for (var i = wardrobeModel.bottoms.length - 1; i >= 0; --i) {
      if (wardrobeModel.bottoms[i].subcategory == "skirt" ||
          wardrobeModel.bottoms[i].subcategory == "shorts") {
        wardrobeModel.bottoms.splice(i,1);
      }
    }
  }
  else if(weatherInfo.low > 60 || weatherInfo.high > 85) {        // HOT
    console.log("It's hot, filtering out jackets, sweaters, and hoodies");
    // remove jackets, sweaters, and hoodies
    for (var i = wardrobeModel.tops.length - 1; i >= 0; --i) {
      if (wardrobeModel.tops[i].subcategory == "jacket" ||
          wardrobeModel.tops[i].subcategory == "sweater" ||
          wardrobeModel.tops[i].subcategory == "hoodie") {
        wardrobeModel.tops.splice(i,1);
      }
    }
  }
  
  if (currentCalendarEvent.match(/meeting/i)) {
    // no short-sleeve shirts or hoodies
    for (var i = wardrobeModel.tops.length - 1; i >= 0; --i) {
      if (wardrobeModel.tops[i].subcategory == "tshirt" ||
          wardrobeModel.tops[i].subcategory == "shirt" ||
          wardrobeModel.tops[i].subcategory == "hoodie") {
        wardrobeModel.tops.splice(i,1);
      }
    }
    // no shorts
    for (var i = wardrobeModel.bottoms.length - 1; i >= 0; --i) {
      if (wardrobeModel.bottoms[i].subcategory == "shorts") {
        wardrobeModel.bottoms.splice(i,1);
      }
    }
    // no sandals
    for (var i = wardrobeModel.shoes.length - 1; i >= 0; --i) {
      if (wardrobeModel.shoes[i].subcategory == "sandals") {
        wardrobeModel.shoes.splice(i,1);
      }
    }
  }
};

function mod(a, n) { return (a % n + n) % n; };

function rankCandidates(num) {
  var candidateScores = [];
  
  for (var i = 0; i < CANDIDATES.length; ++i) {
    var outfitScore = 20;   // baseline
    
    // evaluate score based on color preference and harmony, and history
    if (CANDIDATES[i].isDress) {
      var colorDiff = CANDIDATES[i].dressHSV.h - CANDIDATES[i].shoesHSV.h;
      colorDiff = mod((colorDiff + 180), 360) - 180;
      outfitScore += 5 * colorDiff / 180;               // prefer complimentary colors
    }
    else {
      var colorDiff = CANDIDATES[i].topHSV.h - CANDIDATES[i].shoesHSV.h;
      colorDiff = mod((colorDiff + 180), 360) - 180;
      outfitScore += 5 * colorDiff / 180;               // prefer complimentary colors
    
      // demote dressy clothing with sandals
      if ((CANDIDATES[i].topCategory == "suitjacket" || CANDIDATES[i].bottomCategory == "suitpants") &&
           CANDIDATES[i].shoesCategory == "sandals") {
        outfitScore -= 20;
      }
      // demote mismatched dressy clothing
      if ((CANDIDATES[i].topCategory == "suitjacket" && CANDIDATES[i].bottomCategory != "suitpants") ||
          (CANDIDATES[i].topCategory != "suitjacket" && CANDIDATES[i].bottomCategory == "suitpants")) {
        outfitScore -= 20;
      }
    }
    
    // subtract history score (expect scale of 0-10)
    outfitScore -= CANDIDATES[i].topHistory + CANDIDATES[i].bottomHistory + CANDIDATES[i].dressHistory + CANDIDATES[i].shoesHistory;
  
    candidateScores.push({index: i, score: outfitScore});
  }
  candidateScores.sort(function(a, b){return b.score - a.score});
  console.log(candidateScores);

  for (var i = 0; i < num; ++i) {
    RECOMMENDATIONS.push(CANDIDATES[candidateScores[i].index]);
  }
  return RECOMMENDATIONS;
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
  currentCalendarEvent = calendarEvent;
  setup();
};

function goHome() {
    window.location = "../ModePicker/index.html";
};
