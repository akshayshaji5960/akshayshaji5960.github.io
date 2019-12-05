
var imgpath = 
    {
   "Summer Drinks": "images/img10.jpg",
  "Blue Sky": "images/img2.jpg",
  "Fire of Life": "images/img3.jpg",
  "Dragon Exhale": "images/img1.jpg",
  "Cloudy Day": "images/img4.jpg",
  "Beauty of Nature": "images/img5.jpg",
  "Lake": "images/img8.jpg",
  "Its Fall Time": "images/img11.jpg",
  "Regular Guest": "images/img9.jpg",
  "Winter is here": "images/img7.jpg",
  "Party Time": "images/img6.jpg",
  "X mas Glows": "images/img12.jpg"
}
window.onload = function()
{
    loadGraphics();
};


function loadGraphics()
{
    for(var key in imgpath)
    {
      var anim = document.getElementById('anim');
      var animImg = document.getElementById('animImg');
      var caption = document.getElementById('caption');
      var imgContainer = document.createElement('div');
      var imgDesc = document.createElement('div');
      var img = document.createElement('img'); 
      imgContainer.setAttribute("id", "imageContainer"+key);
      imgContainer.className = "itemContainer";
      imgDesc.className = "overlay";
      img.src = imgpath[key];
      img.className = "item";
      img.alt = key;
      img.onclick = function()
      {
        anim.style.display = "block";
        animImg.src = this.src;
        caption.innerHTML = this.alt;
      }
      var span = document.getElementById('close'); 
      span.onclick = function()
      {
        anim.style.display = "none";
      }

      imgDesc.innerHTML = key;
      document.getElementById('container').appendChild(imgContainer);
      document.getElementById('imageContainer'+key).appendChild(img);
      document.getElementById('imageContainer'+key).appendChild(imgDesc);

    }
}

function hoverEffect()
{
  $(".item").wrap('<div class="alt-wrap"/>');
  $(".item").each(function() {
  $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
  })
}

