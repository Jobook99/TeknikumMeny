$(document).ready(() => {
    var run = 1;
    console.log("laddat");
    $.getJSON("http://94.46.140.3:8080/teknikum_menu", function(data){
        console.log(data);
        var t_week = `${data.week}`;
        console.log(t_week);
        $(".this_week").text(t_week);
        data.meals.forEach(meny => {
            console.log(meny.dish);
            var meal = `${meny.dish}`;
            var meal_alt = `${meny.alt_dish}`;
            if(run == 1){
                $(".day_one_meal").text(meal).toggle();
                $(".day_one_meal_alt").text(meal_alt).toggle();
                run = 2;
            }else if(run == 2){
                $(".day_two_meal").text(meal).toggle();
                $(".day_two_meal_alt").text(meal_alt).toggle();
                run = 3;
            }else if(run == 3){
                $(".day_three_meal").text(meal).toggle();
                $(".day_three_meal_alt").text(meal_alt).toggle();
                run = 4;
            }else if(run == 4){
                $(".day_four_meal").text(meal).toggle();
                $(".day_four_meal_alt").text(meal_alt).toggle();
                run = 5;
            }else if(run == 5){
                $(".day_five_meal").text(meal).toggle();
                $(".day_five_meal_alt").text(meal_alt).toggle();
            }
        });
    })
    var today = new Date();
    var date_t = today.getDay();
    var date_b = date_t + 1;
    console.log(date_t);
    $(".show_day_left").css({"grid-column" : `1 / 2`, "grid-row" : `${date_t}/ ${date_b}`});
    $(".show_day_right").css({"grid-column" : `3 / 4`, "grid-row" : `${date_t}/ ${date_b}`});
    if (date_t == 1) {
        $(".show_day_left").css({"background-color" : "#0097A7"});
        $(".show_day_right").css({"background-color" : "#0097A7"});
        $(".this_day").text("Måndag");
    }else if (date_t == 2) {
        $(".show_day_left").css({"background-color" : "#00ACC1"});
        $(".show_day_right").css({"background-color" : "#00ACC1"});
        $(".this_day").text("Tisdag");
    }else if (date_t == 3) {
        $(".show_day_left").css({"background-color" : "#00BCD4"});
        $(".show_day_right").css({"background-color" : "#00BCD4"});
        $(".this_day").text("Onsdag");
    }else if (date_t == 4) {
        $(".show_day_left").css({"background-color" : "#26C6DA"});
        $(".show_day_right").css({"background-color" : "#26C6DA"});
        $(".this_day").text("Torsdag");
    }else if (date_t == 5) {
        $(".show_day_left").css({"background-color" : "#4DD0E1"});
        $(".show_day_right").css({"background-color" : "#4DD0E1"});
        $(".this_day").text("Fredag");
    }

    $(".button_meny_one").on("click", function(){
        $(".day_one_meal").toggle();
        $(".day_one_meal_alt").toggle();
    });
    $(".button_meny_two").on("click", function(){
        $(".day_two_meal").toggle();
        $(".day_two_meal_alt").toggle();
    });
    $(".button_meny_three").on("click", function(){
        $(".day_three_meal").toggle();
        $(".day_three_meal_alt").toggle();
    });
    $(".button_meny_four").on("click", function(){
        $(".day_four_meal").toggle();
        $(".day_four_meal_alt").toggle();
    });
    $(".button_meny_five").on("click", function(){
        $(".day_five_meal").toggle();
        $(".day_five_meal_alt").toggle();
    });
})