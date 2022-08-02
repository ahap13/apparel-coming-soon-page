
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

$("button[type=submit]").click(function() {
    let email = $("#email").val();
    
    if (!isEmail(email)) {
        $("#email").css("border", "2.5px solid red");
        $(".error").removeClass("hidden");
        $(".error-message").removeClass("hidden");
    } else {
        $("#email").css("border", "1.5px solid hsl(0, 36%, 70%)");
        $(".error").addClass("hidden");
        $(".error-message").addClass("hidden");
    }
})