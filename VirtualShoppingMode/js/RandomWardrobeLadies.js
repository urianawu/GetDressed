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
  
  wardrobeModel.gender = "female";
  wardrobeModel.tops.length = 0;
  wardrobeModel.bottoms.length = 0;
  wardrobeModel.dresses.length = 0;
  wardrobeModel.shoes.length = 0;
	
	var topsContainer = $(tops).find(".Container");
	topsContainer.empty();
	for (var i = 0; i < TOP.length; ++i)
	{if(i%2==n)
		{topsContainer.append("<img src='" + TOP[i].image + "' name= '" + "tops" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.tops.push(new ClothingItem("shirt", "female", TOP[i].hsv, TOP[i].history, TOP[i].image));
    }}

	var SBContainer = $(ShirtsBlouses).find(".Container");
	SBContainer.empty();
	for (var i = 0; i < SHIRTS_BLOUSES.length; ++i)
	{if(i%2==n)
		{SBContainer.append("<img src='" + SHIRTS_BLOUSES[i].image + "' name= '" + "sbs" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.tops.push(new ClothingItem("blouse", "female", SHIRTS_BLOUSES[i].hsv, SHIRTS_BLOUSES[i].history, SHIRTS_BLOUSES[i].image));
    }}
	for (var i = 0; i < CARDIGANS_SWEATERS.length; ++i)
	{if(i%2==n)
		{SBContainer.append("<img src='" + CARDIGANS_SWEATERS[i].image + "' name= '" + "sbs" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.tops.push(new ClothingItem("sweater", "female", CARDIGANS_SWEATERS[i].hsv, CARDIGANS_SWEATERS[i].history, CARDIGANS_SWEATERS[i].image));
    }}

	var SkirtsShortsContainer = $(SkirtsShorts).find(".Container");
	SkirtsShortsContainer.empty();
	for (var i = 0; i < SKIRTS.length; ++i)
	{if(i%2==n)
		{SkirtsShortsContainer.append("<img src='" + SKIRTS[i].image + "' name= '" + "sksh" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.bottoms.push(new ClothingItem("skirt", "female", SKIRTS[i].hsv, SKIRTS[i].history, SKIRTS[i].image));
    }}
	for (var i = 0; i < SHORTS.length; ++i)
	{if(i%2==n)
		{SkirtsShortsContainer.append("<img src='" + SHORTS[i].image + "' name= '" + "sksh" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.bottoms.push(new ClothingItem("shorts", "female", SHORTS[i].hsv, SHORTS[i].history, SHORTS[i].image));
    }}

	var PantsJeansContainer = $(PantsJeans).find(".Container");
	PantsJeansContainer.empty();
	for (var i = 0; i < PANTS.length; ++i)
	{if(i%2==n)
		{PantsJeansContainer.append("<img src='" + PANTS[i].image + "' name= '" + "pj" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.bottoms.push(new ClothingItem("pants", "female", PANTS[i].hsv, PANTS[i].history, PANTS[i].image));
    }}
	for (var i = 0; i < JEANS.length; ++i)
	{if(i%2==n)
		{PantsJeansContainer.append("<img src='" + JEANS[i].image + "' name= '" + "pj" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.bottoms.push(new ClothingItem("jeans", "female", JEANS[i].hsv, JEANS[i].history, JEANS[i].image));
    }}

	var SportsContainer = $(Sports).find(".Container");
	for (var i = 0; i < SPORTSWEAR.length; ++i)
		SportsContainer.append("<img src='" + SPORTSWEAR[i].image + "' name= '" + "sports" + "' draggable='true' ondragstart='drag(event)'>");

	var OfficeContainer = $(Office).find(".Container");
	OfficeContainer.empty();
	for (var i = 0; i < OFFICE_WEAR.length; ++i)
	{if(i%2==n)
		{OfficeContainer.append("<img src='" + OFFICE_WEAR[i].image + "' name= '" + "od" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.dresses.push(new ClothingItem("officewear", "female", OFFICE_WEAR[i].hsv, OFFICE_WEAR[i].history, OFFICE_WEAR[i].image));
    }}
	for (var i = 0; i < DRESSES.length; ++i)
	{if(i%2==n)
		{OfficeContainer.append("<img src='" + DRESSES[i].image + "' name= '" + "od" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.dresses.push(new ClothingItem("dress", "female", DRESSES[i].hsv, DRESSES[i].history, DRESSES[i].image));
    }}

	var outerwearContainer = $(outerwear).find(".Container");
	for (var i = 0; i < JACKETS_COATS.length; ++i) {
		outerwearContainer.append("<img src='" + JACKETS_COATS[i].image + "' name= '" + "outer" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.tops.push(new ClothingItem("jacket", "female", JACKETS_COATS[i].hsv, JACKETS_COATS[i].history, JACKETS_COATS[i].image));
  }

	var shoesContainer = $(shoes).find(".Container");
	shoesContainer.empty();
	for (var i = 0; i < PUMPS_HIGH_HEELS.length; ++i)
	{if(i%2==n)
		{shoesContainer.append("<img src='" + PUMPS_HIGH_HEELS[i].image + "' name= '" + "shoes" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.shoes.push(new ClothingItem("pumps", "female", PUMPS_HIGH_HEELS[i].hsv, PUMPS_HIGH_HEELS[i].history, PUMPS_HIGH_HEELS[i].image));
    }}
	for (var i = 0; i < SANDALS.length; ++i)
	{if(i%2==n)
		{shoesContainer.append("<img src='" + SANDALS[i].image + "' name= '" + "shoes" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.shoes.push(new ClothingItem("sandals", "female", SANDALS[i].hsv, SANDALS[i].history, SANDALS[i].image));
    }}
	for (var i = 0; i < SHOES.length; ++i)
	{if(i%2==n)
		{shoesContainer.append("<img src='" + SHOES[i].image + "' name= '" + "shoes" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.shoes.push(new ClothingItem("shoes", "female", SHOES[i].hsv, SHOES[i].history, SHOES[i].image));
    }}
	for (var i = 0; i < BOOTS.length; ++i)
	{if(i%2==n)
		{shoesContainer.append("<img src='" + BOOTS[i].image + "' name= '" + "shoes" + "' draggable='true' ondragstart='drag(event)'>");
    wardrobeModel.shoes.push(new ClothingItem("boots", "female", BOOTS[i].hsv, BOOTS[i].history, BOOTS[i].image));
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
