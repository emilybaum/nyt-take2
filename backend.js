$(document).ready(function () {
    $(document).on("click", "_______", displayArticles);
    
    function displayArticles() {
        // pulling in info from form that user input
        var searchTerm = $("#search-term").val().trim();
        var records = $("#records").val().trim();
        var startYear = $("#start-year").val().trim();
        var endYear = $("#end-year").val().trim();

        // making the API call
        var api = "6o2NDMTAd7Dis3U3TT5jo5aMTEQz3aSU";
        
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear "0101" + "&end_date=" + endYear "1231" + "&page=0&api-key=" + api;
        // add in more filters with Lucene Query Syntax....

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response)

            $("#article-items").append(JSON.stringify(response))
        })

    };

});





