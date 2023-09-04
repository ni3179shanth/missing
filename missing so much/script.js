$(document).ready(function () {
  var count = 0;

  $(".ramya_mam").click(function () {
    var card = $(this);
    if (count < 11) {
      $(this).removeClass("top").addClass("bottom");

      count++;
    }
    if (count == 11) {
      $("div").removeClass("bottom");

      count = 0;
    }
    shuffle(card);
  });
});

function shuffle(card) {
  TweenLite.fromTo(
    card,
    0.6,
    {
      x: 410,
      y: -15,
      ease: Expo.easeOut
    },
    {
      x: 0,
      y: 0,
      ease: Expo.easeIn
    }
  );
}
