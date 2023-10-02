function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction2() {
    var y = document.getElementById("myDIV2");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }
  function myFunction3() {
    var z = document.getElementById("myDIV3");
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
  }
  function myFunction4() {
    var a = document.getElementById("myDIV4");
    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
    }
  }

  function myFunction5() {
    var b = document.getElementById("myDIV5");
    if (b.style.display === "none") {
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }
  }
  function myFunction6() {
    var c = document.getElementById("myDIV6");
    if (c.style.display === "none") {
      c.style.display = "block";
    } else {
      c.style.display = "none";
    }
  }
  function myFunction7() {
    var d = document.getElementById("myDIV7");
    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none";
    }
  }
  function myFunction8() {
    var e = document.getElementById("myDIV8");
    if (e.style.display === "none") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  }
  function search() {
    var s = document.getElementById("search-box");
    if (s.style.display === "none") {
      s.style.display = "block";
    } else {
      s.style.display = "none";
    }
  }
  $(function(){
    $('#top').click(function () {
    $('body,html').animate({
      scrollTop: 0
      }, 600);
      return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 15) {
    $('.totop a').fadeIn(500);
    } else {
    $('.totop a').fadeOut(500);
    }
  });
});
function myFunctionD() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunctionD2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
}
window.addEventListener("scroll",function(){
  var header=document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0)
})