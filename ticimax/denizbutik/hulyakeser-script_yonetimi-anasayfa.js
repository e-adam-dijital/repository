// Anasayfa
  /*
  var html = $('<div class="storyMainCont" id="story">' +
    '<div class="slideLeftBTN">' +
    '<img class="slideLeftBTNimg" src="/Uploads/EditorUploads/left.jpg" >' +
    '</div>' +
    '<div class="hiza">' +
    '<div class="storyCont">' +
    '</div>' +
    '</div>' +
    '<div class="slideRightBTN">' +
    '<img class="slideRightBTNimg" src="/Uploads/EditorUploads/right.jpg" >' +
    '</div>' +
    '</div>');
  */
  //$("#mainHolder_divDesign > section:first-child").before(html);

  $(".slideRightBTN").on("click", function () {
    var aaRight = document.querySelector("#story > div.hiza");
    aaRight.scrollLeft += 1000;
    $('.slideLeftBTNimg').css({ "opacity": "1", "transitionDuration": "0.5s" })

    var strSyi = document.querySelectorAll("div.storyCont > a.linkstr");
    var totalWidth = strSyi.length * 100;
    var getScrollWidth = totalWidth - 1000;

    setTimeout(function () {
      if (aaRight.scrollLeft == getScrollWidth) {
        $('.slideRightBTNimg').css({ "opacity": "0", "transitionDuration": "0.5s" })
      }
    }, 650);

  });

  $(".slideLeftBTN").on("click", function () {
    var aaLeft = document.querySelector("#story > div.hiza");
    aaLeft.scrollLeft -= 1000;
    $('.slideRightBTNimg').css({ "opacity": "1", "transitionDuration": "0.5s" })

    setTimeout(function () {
      if (aaLeft.scrollLeft == 0) {
        $('.slideLeftBTNimg').css({ "opacity": "0", "transitionDuration": "0.5s" })
      }

    }, 650);


  })

  // Variables

  var Json = [
    { "Name": "Yeni Gelenler", "PictureUrl": "/Uploads/EditorUploads/0006843.jpeg", "Url": "/hk-collection" },
    { "Name": "Tesettür Abiyeler", "PictureUrl": "/Uploads/EditorUploads/0006844.jpeg", "Url": "/abiye-16" },
    { "Name": "Tarz Abiyeler", "PictureUrl": "/Uploads/EditorUploads/0006842.jpeg", "Url": "/abiye-16" },
    { "Name": "Şık Elbiseler", "PictureUrl": "/Uploads/EditorUploads/0006840.jpeg", "Url": "/elbise-25" },
    { "Name": "Zarif Elbiseler", "PictureUrl": "/Uploads/EditorUploads/0006845.jpeg", "Url": "/elbise-25" },
    { "Name": "Pantolon Takımlar", "PictureUrl": "/Uploads/EditorUploads/0006848.jpeg", "Url": "/takim-18" },
    { "Name": "Etekli Takımlar", "PictureUrl": "/Uploads/EditorUploads/0006847.jpeg", "Url": "/takim-18" },
    { "Name": "Şal", "PictureUrl": "/Uploads/EditorUploads/0006839.jpeg", "Url": "/sal-23" },
    { "Name": "Sosyal Medya", "PictureUrl": "/Uploads/EditorUploads/0006841.jpeg", "Url": "https://www.instagram.com/hulyakeser.officiall/" }
  ];


  // Slide Array
  var stories = new Array();
  stories = Json;

  // Each slide items in story
  $.each(stories, function (index, picture) {

    //var storyItem = $('<a href="' + picture.Url + '" class="linkstr"><div class="storyRing"><div class="colorRing"><img class="storyimg" src="' + picture.PictureUrl + '" alt="' + picture.Name + '"/></div><div class="storyText">' + picture.Name + '</div></div></a>');

    //$(".storyCont").append(storyItem);
  });
