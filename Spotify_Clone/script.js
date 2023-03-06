const body = document.body,
  scrollWrap = document.getElementsByClassName("main")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.06;

var offset = 0;

// body.style.height = Math.floor(height) + "vh";

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  var scroll = "translateY(-" + offset + "px) translateZ(0)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
