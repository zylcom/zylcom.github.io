const button = document.querySelector("#dark-mode");
const html = document.querySelector("html");

// ketika tombol diklik
button.addEventListener("click", function () {
  // cek color mode
  if (html.dataset.colorMode === "light") {
    html.dataset.colorMode = "dark";
    this.textContent = "Light Mode";
  } else {
    html.dataset.colorMode = "light";
    this.textContent = "Dark Mode";
  }
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });
});
