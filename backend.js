function displayArticles() {

    // info from user input form
    var searchTerm = $("#search-term").val().trim();
    var startYear = $("#start-year").val().trim();
    var endYear = $("#end-year").val().trim();
        
    // making the API call
    var api = "6o2NDMTAd7Dis3U3TT5jo5aMTEQz3aSU";

    // restricting results to source
    var fq = "source:('The New York Times')"

    // nytimes api information request
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&" + fq + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&page=0&api-key=" + api

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        assignToDOM(response);
    })
};

function assignToDOM(response) {

    var articles = response.response.docs;

    var count = $( "#records option:selected" ).val();

    for(var i = 0; i < count; i++){

        var headline = articles[i].headline.main
        var author = articles[i].byline.original
        var section = articles[i].news_desk
        var pub_date = articles[i].pub_date
        var url = articles[i].web_url

        var result = '<div class="article-item"><p class="headline"><h5>' + headline + '</h5></p><p class="author">' +  author + '</p><p class="section">Section: ' + section + '</p><p class="pub-date">' + pub_date + '</p><p class="url">' + url + '</p></div><br>'

        $("#article-items").append(result)
    }
}

function clear(){
    $("#article-items").empty()
}

$(document).ready(function () {
    $(document).on("click", "#search", displayArticles);
    $(document).on("click", "#clear", clear);     
});





