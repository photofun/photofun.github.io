function initialize() {
  $(".service-description").hide();

  $(".service-icon").click(function(e) {
    $(e.currentTarget).closest(".service").find(".service-description").toggle(200);
  });
}

$(document).ready(initialize);
