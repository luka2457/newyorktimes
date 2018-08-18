$(document).ready(function () {


    $("#searchButton").on("click", function () {
        event.preventDefault();
        var search = $("#searchterm").val().trim();

        console.log(search);

        // var records = $("#exampleFormControlSelect1").val();

        // console.log(records);

        var begin_date = $("#startYearField").val().trim() + "0101";

        console.log(begin_date);

        var end_date = $("#endYearField").val().trim() + "0101";

        console.log(end_date);


        $.ajax({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            method: 'GET',
            data: {
                apikey: "3b70f75a0fef4ab499530770d1aec039",
                q: search,
                fl: "headline, snippet, source",
                begin_date: begin_date,
                end_date: end_date,
            }
        }).then(function (result) {
            console.log(result);
        })
    });




});