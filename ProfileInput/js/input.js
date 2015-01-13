var userInfo = {};

$(document).ready(function () {
  console.log("page loaded");
  
  $('#info').show();
  $('#name').show();
  $(colorList).sortable();  
  $('input[name=Male]').attr('checked',false);
  $('input[name=Female]').attr('checked',false);
});

function getInput(event) {
  if (event.target.id == "nameButton" ||
      event.target.id == "nameInput" && event.keyCode == 13) {
    console.log("got name: " + $(nameInput).val());
    userInfo.name = $(nameInput).val();
    $(age).fadeIn();
  }
  else if (event.target.id == "ageButton" ||
      event.target.id == "ageInput" && event.keyCode == 13) {
    console.log("got age: " + $(ageInput).val());
    userInfo.age = $(ageInput).val();
    $(gender).fadeIn();
  }
  else if (event.target.id == "genderM") {
    console.log("got gender: male");
    $('input[name=Female]').attr('checked',false);
    userInfo.gender = 'M';
    localStorage.gender = "male";
    $(content).css("background-color", "#F5FAFF");
    populateStyles("male");
    $(endInfo).fadeIn();
  }
  else if (event.target.id == "genderF") {
    console.log("got gender: female");
    $('input[name=Male]').attr('checked',false);
    userInfo.gender = 'F';
    localStorage.gender = "female";
    $(content).css("background-color", "ivory");
    populateStyles("female");
    $(endInfo).fadeIn();
  }
};

function populateStyles(gender) {
  $(styleList).empty();
  if (gender == "male") {
    for (var i = 1; i <= 38; ++i) {
      $(styleList).append("<img class='styleImage' height='200px' onclick='selectImage(event)'" +
      "src='images/styles/men/men" + i + ".jpg'>");
    }
  }
  else {
    for (var i = 1; i <= 58; ++i) {
      $(styleList).append("<img class='styleImage' height='200px' onclick='selectImage(event)'" +
      "src='images/styles/women/women" + i + ".jpg'>");
    }
  }
};

function nextSlide(event) {
  if (event.target.id == "endInfo") {
    console.log("Done with Info, go to next slide");
    $(info).fadeOut();
    $(color).delay(500).fadeIn();
  }
  if (event.target.id == "endColor") {
    console.log("Done with Color, go to next slide");
    $(color).fadeOut();
    $(style).delay(500).fadeIn();
  }
  if (event.target.id == "endStyle") {
    console.log("Done with Style, go to last slide");
    $(style).fadeOut();
    $(done).delay(500).fadeIn();
  }
};

function selectImage(event) {
  if (typeof event.target.selected === 'undefined')
    event.target.selected = true;
  else
    event.target.selected = !event.target.selected;
  
  if (event.target.selected)
    $(event.target).css("border", "3px solid green");
  else
    $(event.target).css("border", "none");    
};

function nextPage(event) {
  /*if (event.target.id == "gotoAdvisor") {
    console.log("Done with User Input, go to Outfit Advisor Mode");
    $(slideArea).fadeOut();
    window.location = "../AdvisorMode/index.html";
  }*/
  if (event.target.id == "gotoVirtualShopping") {
    console.log("Done with User Input, go to Virtual Shopping Mode");
    $(slideArea).fadeOut();
    var baseNum = 0;
    if (userInfo.gender == 'M') {
      baseNum = 3;
    }
    var targetPage = 'index' + (baseNum + shoppingModeVersion) + '.html';
    
    window.location = "../VirtualShoppingMode/" + targetPage;
  }
}