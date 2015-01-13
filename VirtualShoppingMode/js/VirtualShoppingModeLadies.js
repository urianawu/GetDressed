$(document).ready(function() {
	var gender = "female";
	if ( typeof localStorage.gender !== 'undefined')
		gender = localStorage.gender;
	populateImages(gender);

	// $("#searchBox")[0].addEventListener("keydown", function(e) {
	// if (!e) {
	// var e = window.event;
	// }
	// if (e.keyCode == 13) {// Enter key is pressed
	// searchFromOnline();
	// }
	// }, false);

});

$(window).load(function() {
	fixContainerSizes();
});

$(window).resize(function() {
	fixContainerSizes();
});

function populateImages(gender) {
	//var genderCategory = women;
	// if (gender == "male") {
	// genderCategory = men;
	// $(content).css("background-color", "#F5FAFF");
	// $(ClosetPic).find("img").attr("src", "images/ui/closet_gen.png");
	// $(dresses).hide();
	// }
	// else {
	// var dressesContainer = $(dresses).find(".Container");
	// for (var i = 0; i < DRESSES.length; ++i)
	// dressesContainer.append("<img src='" + DRESSES[i].image + "' draggable='true' ondragstart='drag(event)'>");
	// for (var i = 0; i < genderCategory.dresses.length; ++i)
	// dressesContainer.append("<img src='" + genderCategory.dresses[i] + "' draggable='true' ondragstart='drag(event)'>");
	// for (var i = 0; i < unisex.dresses.length; ++i)
	// dressesContainer.append("<img src='" + unisex.dresses[i] + "' draggable='true' ondragstart='drag(event)'>");
	// }
  
  allClothing.gender = gender;
  wardrobeModel.gender = gender;

	var topsContainer = $(tops).find(".Container");
	for (var i = 0; i < TOP.length; ++i) {
		topsContainer.append("<img src='" + TOP[i].image + "' name= '" + "tops" + "' index= '" + allClothing.tops.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.tops.push(new ClothingItem("shirt", "female", TOP[i].hsv, TOP[i].history, TOP[i].image));
  }

	// for (var i = 0; i < unisex.bottoms.length; ++i)
	// bottomssContainer.append("<img src='" + unisex.bottoms[i] + "' draggable='true' ondragstart='drag(event)'>");
	// for (var i = 0; i < unisex.tops.length; ++i)
	// topsContainer.append("<img src='" + unisex.tops[i] + "' draggable='true' ondragstart='drag(event)'>");
	// topsContainer.append("<img src='" + image + "' draggable='true' ondragstart='drag(event)'>");

	var SBContainer = $(ShirtsBlouses).find(".Container");
	for (var i = 0; i < SHIRTS_BLOUSES.length; ++i) {
		SBContainer.append("<img src='" + SHIRTS_BLOUSES[i].image + "' name= '" + "sbs" + "' index= '" + allClothing.tops.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.tops.push(new ClothingItem("blouse", "female", SHIRTS_BLOUSES[i].hsv, SHIRTS_BLOUSES[i].history, SHIRTS_BLOUSES[i].image));
  }
	for (var i = 0; i < CARDIGANS_SWEATERS.length; ++i) {
		SBContainer.append("<img src='" + CARDIGANS_SWEATERS[i].image + "' name= '" + "sbs" + "' index= '" + allClothing.tops.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.tops.push(new ClothingItem("sweater", "female", CARDIGANS_SWEATERS[i].hsv, CARDIGANS_SWEATERS[i].history, CARDIGANS_SWEATERS[i].image));
  }

	var SkirtsShortsContainer = $(SkirtsShorts).find(".Container");
	for (var i = 0; i < SKIRTS.length; ++i) {
		SkirtsShortsContainer.append("<img src='" + SKIRTS[i].image + "' name= '" + "sksh" + "' index= '" + allClothing.bottoms.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.bottoms.push(new ClothingItem("skirt", "female", SKIRTS[i].hsv, SKIRTS[i].history, SKIRTS[i].image));
  }
	for (var i = 0; i < SHORTS.length; ++i) {
		SkirtsShortsContainer.append("<img src='" + SHORTS[i].image + "' name= '" + "sksh" + "' index= '" + allClothing.bottoms.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.bottoms.push(new ClothingItem("shorts", "female", SHORTS[i].hsv, SHORTS[i].history, SHORTS[i].image));
  }

	var PantsJeansContainer = $(PantsJeans).find(".Container");
	for (var i = 0; i < PANTS.length; ++i) {
		PantsJeansContainer.append("<img src='" + PANTS[i].image + "' name= '" + "pj" + "' index= '" + allClothing.bottoms.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.bottoms.push(new ClothingItem("pants", "female", PANTS[i].hsv, PANTS[i].history, PANTS[i].image));
  }
	for (var i = 0; i < JEANS.length; ++i) {
		PantsJeansContainer.append("<img src='" + JEANS[i].image + "' name= '" + "pj" + "' index= '" + allClothing.bottoms.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.bottoms.push(new ClothingItem("jeans", "female", JEANS[i].hsv, JEANS[i].history, JEANS[i].image));
  }

	var SportsContainer = $(Sports).find(".Container");
	for (var i = 0; i < SPORTSWEAR.length; ++i)
		SportsContainer.append("<img src='" + SPORTSWEAR[i].image + "' name= '" + "sports" + "' draggable='true' ondragstart='drag(event)'>");

	var OfficeContainer = $(Office).find(".Container");
	for (var i = 0; i < OFFICE_WEAR.length; ++i) {
		OfficeContainer.append("<img src='" + OFFICE_WEAR[i].image + "' name= '" + "od" + "' index= '" + allClothing.dresses.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.dresses.push(new ClothingItem("officewear", "female", OFFICE_WEAR[i].hsv, OFFICE_WEAR[i].history, OFFICE_WEAR[i].image));
  }
	for (var i = 0; i < DRESSES.length; ++i) {
		OfficeContainer.append("<img src='" + DRESSES[i].image + "' name= '" + "od" + "' index= '" + allClothing.dresses.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.dresses.push(new ClothingItem("dress", "female", DRESSES[i].hsv, DRESSES[i].history, DRESSES[i].image));
  }

	var outerwearContainer = $(outerwear).find(".Container");
	for (var i = 0; i < JACKETS_COATS.length; ++i) {
		outerwearContainer.append("<img src='" + JACKETS_COATS[i].image + "' name= '" + "outer" + "' index= '" + allClothing.tops.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.tops.push(new ClothingItem("jacket", "female", JACKETS_COATS[i].hsv, JACKETS_COATS[i].history, JACKETS_COATS[i].image));
  }

	var shoesContainer = $(shoes).find(".Container");
	for (var i = 0; i < PUMPS_HIGH_HEELS.length; ++i) {
		shoesContainer.append("<img src='" + PUMPS_HIGH_HEELS[i].image + "' name= '" + "shoes" + "' index= '" + allClothing.shoes.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.shoes.push(new ClothingItem("pumps", "female", PUMPS_HIGH_HEELS[i].hsv, PUMPS_HIGH_HEELS[i].history, PUMPS_HIGH_HEELS[i].image));
  }
	for (var i = 0; i < SANDALS.length; ++i) {
		shoesContainer.append("<img src='" + SANDALS[i].image + "' name= '" + "shoes" + "' index= '" + allClothing.shoes.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.shoes.push(new ClothingItem("sandals", "female", SANDALS[i].hsv, SANDALS[i].history, SANDALS[i].image));
  }
	for (var i = 0; i < SHOES.length; ++i) {
		shoesContainer.append("<img src='" + SHOES[i].image + "' name= '" + "shoes" + "' index= '" + allClothing.shoes.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.shoes.push(new ClothingItem("shoes", "female", SHOES[i].hsv, SHOES[i].history, SHOES[i].image));
  }
	for (var i = 0; i < BOOTS.length; ++i) {
		shoesContainer.append("<img src='" + BOOTS[i].image + "' name= '" + "shoes" + "' index= '" + allClothing.shoes.length + "' draggable='true' ondragstart='drag(event)'>");
    allClothing.shoes.push(new ClothingItem("boots", "female", BOOTS[i].hsv, BOOTS[i].history, BOOTS[i].image));
  }

	// var accesoriesContainer = $(accessories).find(".Container");
	// for (var i = 0; i < TOP.length; ++i)
	// topsContainer.append("<img src='" + TOP[i].image + "' draggable='true' ondragstart='drag(event)'>");
};

function fixContainerSizes() {
	var allcontainers = $(".Container");
	for (var i = 0; i < allcontainers.length; ++i) {
		var container = $(allcontainers[i]);
		var images = container.find("img");
		var sum_width = 0;
		for (var j = 0; j < images.length; ++j) {
			sum_width += images[j].width + 20;
		}
		sum_width += 10;
		container.width(sum_width);
	}
};

function allowDrop(event) {
	event.preventDefault();
};

function drag(event) {
	event.dataTransfer.setData("url", event.target.src);
	event.dataTransfer.setData("category", event.target.name);
	event.dataTransfer.setData("index", event.target.getAttribute('index'));
};

var wardrobeUrl = [];
var wardrobeCate = [];
function drop(event) {
	event.preventDefault();
	var imUrl = event.dataTransfer.getData("url");
	var imCat = event.dataTransfer.getData("category");
  var imInd = event.dataTransfer.getData("index");
  
  //console.log(imCat + ": " + imInd);
  if (imCat == "tops" || imCat == "sbs" || imCat == "outer") {
    wardrobeModel.tops.push(JSON.parse(JSON.stringify(allClothing.tops[imInd])));
  }
  else if (imCat == "sksh" || imCat == "pj") {
    wardrobeModel.bottoms.push(JSON.parse(JSON.stringify(allClothing.bottoms[imInd])));
  }
  else if (imCat == "od") {
    wardrobeModel.dresses.push(JSON.parse(JSON.stringify(allClothing.dresses[imInd])));
  }
  else if (imCat == "shoes") {
    wardrobeModel.shoes.push(JSON.parse(JSON.stringify(allClothing.shoes[imInd])));
  }

	if ( typeof imUrl === 'undefined' || imUrl.length == 0)
		return;

	wardrobeUrl.push(imUrl);
	wardrobeCate.push(imCat);
	document.getElementById("ClothingNum").innerHTML = wardrobeCate.length;

	// $("#wardrobe").append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	// $("#wdress").append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	var topsContainer = $(wtops).find(".wContainer");
	if (imCat == "tops") {
		topsContainer.append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	}
	var wShirtsBlousesContainer = $(wShirtsBlouses).find(".wContainer");
	if (imCat == "sbs") {
		wShirtsBlousesContainer.append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	}
	var wSkirtsShortsContainer = $(wSkirtsShorts).find(".wContainer");
	if (imCat == "sksh") {
		wSkirtsShortsContainer.append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	}
	var wPantsJeansContainer = $(wPantsJeans).find(".wContainer");
	if (imCat == "pj") {
		wPantsJeansContainer.append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	}
	var wSportsContainer = $(wSports).find(".wContainer");
	if (imCat == "sports") {
		wSportsContainer.append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	}
	var wOfficeContainer = $(wOffice).find(".wContainer");
	if (imCat == "od") {
		wOfficeContainer.append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	}

	var wouterwearContainer = $(wouterwear).find(".wContainer");
	if (imCat == "outer") {
		wouterwearContainer.append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	}
	var wshoesContainer = $(wshoes).find(".wContainer");
	if (imCat == "shoes") {
		wshoesContainer.append("<img src='" + imUrl + "' onclick='hideWardrobe()'>");
	}
};

function finish() {
	//alert("Congratulation! You have made your own wardrobe!");

  if (wardrobeModel.shoes.length == 0 ||
      wardrobeModel.tops.length == 0 ||
      wardrobeModel.bottoms.length == 0) {
    alert("You need to select at least one top, one bottom, and one pair of shoes to continue.");
    return;
  }
  
  localStorage.wardrobeModel = JSON.stringify(wardrobeModel);

	window.location = "../AdvisorMode/index" + advisorModeVersion + ".html";
}

function showWardrobe() {
	console.log("clicked show");
	$("#wardrobe").show();
	$("#wardrobe").animate({
		left : "10%",
		width : "80%",
		top : "10%",
		height : "80%"
	});
};

function hideWardrobe() {
	console.log("clicked hide");
	$("#wardrobe").animate({
		left : "90%",
		width : "5%",
		top : "50%",
		height : "8%"
	});
	$("#wardrobe").fadeOut(100);
};

function goHome() {
	//window.location = "../ModePicker/index.html";
};

/********************************* search functionality  *********************************/

// var SEMANTIC_SERVICE_URL = "http://ecology-service.cse.tamu.edu/BigSemanticsService/";
//
// function searchFromOnline() {
// var div = document.getElementById("SearchImages");
// while (div.firstChild) {
// div.removeChild(div.firstChild);
// }
//
// var searchWords = document.getElementById("searchBox").value.split(" ");
// var searchString = searchWords[0]
// for (var i = 1; i < searchWords.length; i++) {
// searchString = searchString + "+" + searchWords[i];
// }
// var searchAddr = "http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=" + searchString;
// getMetadata(searchAddr, "showPic");
// };
//
// function showPic(metadata) {
// var list = metadata["amazon_list"]["items"];
// for (var i = 0; i < list.length; i++) {
// getMetadata(list[i]["location"], "getImageSrc");
// }
// };
//
// function getImageSrc(productData) {
// var div = document.getElementById("SearchImages");
// var pic = document.createElement("img");
// pic.className = "clothImage";
// pic.src = productData["amazon_product"]["main_images"][0]["location"];
// div.appendChild(pic);
// fixContainerSizes();
// };
//
// function getMetadata(url, callback) {
// var script = document.createElement('script');
// script.src = SEMANTIC_SERVICE_URL + "metadata.jsonp?callback=" + callback + "&url=" + encodeURIComponent(url);
// document.head.appendChild(script);
// console.log("requesting semantics service for metadata: " + script.src);
// };
