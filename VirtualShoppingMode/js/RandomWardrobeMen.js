$(document).ready(function() {
	// var gender = "female";
	// if ( typeof localStorage.gender !== 'undefined')
		// gender = localStorage.gender;
	 show(0);

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

function show(n) {
  
  wardrobeModel.gender = "male";
  wardrobeModel.tops.length = 0;
  wardrobeModel.bottoms.length = 0;
  wardrobeModel.dresses.length = 0;
  wardrobeModel.shoes.length = 0;
	
	var T_SHIRTS_VESTSContainer = $(tshirts).find(".Container");
	T_SHIRTS_VESTSContainer.empty();
	for (var i = 0; i < T_SHIRTS_VESTS.length; ++i)
	{if(i%2==n)
		{T_SHIRTS_VESTSContainer.append("<img src='" + T_SHIRTS_VESTS[i].image + "' name= '" + "tshirts" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.tops.push(new ClothingItem("tshirt", "male", T_SHIRTS_VESTS[i].hsv, T_SHIRTS_VESTS[i].history, T_SHIRTS_VESTS[i].image));
    }}


	var HOODIES_SWEATSHIRTSContainer = $(hoodies).find(".Container");
	for (var i = 0; i < HOODIES_SWEATSHIRTS.length; ++i) {
		HOODIES_SWEATSHIRTSContainer.append("<img src='" + HOODIES_SWEATSHIRTS[i].image + "' name= '" + "hoodies" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.tops.push(new ClothingItem("hoodie", "male", HOODIES_SWEATSHIRTS[i].hsv, HOODIES_SWEATSHIRTS[i].history, HOODIES_SWEATSHIRTS[i].image));
  }
    
	var SkirtsShortsContainer = $(SkirtsShorts).find(".Container");
	SkirtsShortsContainer.empty();
	for (var i = 0; i < SHORTS.length; ++i)
	{if(i%2==n)
		{SkirtsShortsContainer.append("<img src='" + SHORTS[i].image + "' name= '" + "sksh" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.bottoms.push(new ClothingItem("shorts", "male", SHORTS[i].hsv, SHORTS[i].history, SHORTS[i].image));
    }}

	var PantsJeansContainer = $(PantsJeans).find(".Container");
	PantsJeansContainer.empty();
	for (var i = 0; i < PANTS.length; ++i)
	{if(i%2==n)
		{PantsJeansContainer.append("<img src='" + PANTS[i].image + "' name= '" + "pj" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.bottoms.push(new ClothingItem("pants", "male", PANTS[i].hsv, PANTS[i].history, PANTS[i].image));
    }}
	for (var i = 0; i < JEANS.length; ++i)
	{if(i%2==n)
		{PantsJeansContainer.append("<img src='" + JEANS[i].image + "' name= '" + "pj" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.bottoms.push(new ClothingItem("jeans", "male", JEANS[i].hsv, JEANS[i].history, JEANS[i].image));
    }}

	var SportsContainer = $(Sports).find(".Container");
	for (var i = 0; i < SPORTSWEAR.length; ++i)
		SportsContainer.append("<img src='" + SPORTSWEAR[i].image + "' name= '" + "sports" + "' draggable='true' ondragstart='drag(event)'>");

	var JACKETS_SUITSContainer = $(jacket).find(".Container");
	for (var i = 0; i < JACKETS_SUITS.length; ++i) {
    if (i == 0 || i == 2 || i == 4) {     // HACK TO FIX MIS-CATEGORIZATION
		JACKETS_SUITSContainer.append("<img src='" + JACKETS_SUITS[i].image + "' name= '" + "suitjacket" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.tops.push(new ClothingItem("suitjacket", "male", JACKETS_SUITS[i].hsv, JACKETS_SUITS[i].history, JACKETS_SUITS[i].image));
    }
    else {                                // HACK TO FIX MIS-CATEGORIZATION
		JACKETS_SUITSContainer.append("<img src='" + JACKETS_SUITS[i].image + "' name= '" + "suitpants" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.bottoms.push(new ClothingItem("suitpants", "male", JACKETS_SUITS[i].hsv, JACKETS_SUITS[i].history, JACKETS_SUITS[i].image));
    }
  }

	var JACKETS_COATSContainer = $(outer).find(".Container");
	for (var i = 0; i < JACKETS_COATS.length; ++i) {
		JACKETS_COATSContainer.append("<img src='" + JACKETS_COATS[i].image + "' name= '" + "outer" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.tops.push(new ClothingItem("jacket", "male", JACKETS_COATS[i].hsv, JACKETS_COATS[i].history, JACKETS_COATS[i].image));
  }

	var shoesContainer = $(shoes).find(".Container");
	shoesContainer.empty();
	for (var i = 0; i < SHOES.length; ++i)
	{if(i%2==n)
		{shoesContainer.append("<img src='" + SHOES[i].image + "' name= '" + "shoes" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.shoes.push(new ClothingItem("shoes", "male", SHOES[i].hsv, SHOES[i].history, SHOES[i].image));
    }}
	for (var i = 0; i < BOOTS.length; ++i)
	{if(i%2==n)
		{shoesContainer.append("<img src='" + BOOTS[i].image + "' name= '" + "shoes" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.shoes.push(new ClothingItem("boots", "male", BOOTS[i].hsv, BOOTS[i].history, BOOTS[i].image));
    }}
	for (var i = 0; i < SANDALS_ESPADRILLES.length; ++i)
	{if(i%2==n)
		{shoesContainer.append("<img src='" + SANDALS_ESPADRILLES[i].image + "' name= '" + "shoes" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.shoes.push(new ClothingItem("sandals", "male", SANDALS_ESPADRILLES[i].hsv, SANDALS_ESPADRILLES[i].history, SANDALS_ESPADRILLES[i].image));
    }}
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

function drag(event) {
	event.dataTransfer.setData("url", event.target.src);
	event.dataTransfer.setData("category", event.target.name);

};

function finish() {
	//alert("Congratulation! You have made your own wardrobe!");
  localStorage.wardrobeModel = JSON.stringify(wardrobeModel);

	window.location = "../AdvisorMode/index" + advisorModeVersion + ".html";
}

function goHome() {
	//window.location = "../ModePicker/index.html";
};
