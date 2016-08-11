$(document).ready(function() {
  $("form#input").submit(function(event) {
    var colorPolitics = $("input:radio[name=color]:checked").val();
    var gunPolitics = $("input:radio[name=gun]:checked").val();
    var choicePolitics = $("input:radio[name=choice]:checked").val();

    var red = 0;
    var blue = 0;
    if (colorPolitics === "red") {
      red += 1;
    } else if (colorPolitics === "blue") {
      blue += 1;
    }

    if (gunPolitics === "yes") {
      red += 1;
    } else if (gunPolitics === "no") {
      blue += 1;
    }

    if (choicePolitics === "no") {
      red += 1;
    } else if (choicePolitics === "yes") {
      blue += 1;
    }

    if (red === 3) {
      $(".red-progress").css("width", "100%");
    } else if (blue === 3) {
      $(".blue-progress").css("width", "100%");
    } else {
      $(".red-progress").css("width", red * 33 + "%");
      $(".blue-progress").css("width", blue * 33 + "%");
    }

    $(".results").show();
    event.preventDefault();
  });
});
