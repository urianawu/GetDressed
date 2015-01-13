// container for all clothing items
var allClothing = {
  gender: "",
  tops: [],
  bottoms: [],
  dresses: [],
  shoes: []
};

// Container for a user's wardrobe
var wardrobeModel = {
  gender: "",
  tops: [],
  bottoms: [],
  dresses: [],
  shoes: []
};  
  
// ClothingItem object constructor
function ClothingItem(subcategory, gender, hsvColor, historyScore, imUrl) {
  this.subcategory = subcategory;
  this.gender = gender;
  this.hsvColor = hsvColor;
  this.historyScore = historyScore;
  this.url = imUrl;
};