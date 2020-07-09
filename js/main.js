function generateCode () {
    $('#inner').empty();
    //variable made from query
    var search = document.getElementById("query").value;
    //variable made from quantity
    var num = document.getElementById("quantity").value;
    //giphy request
    var giphyCode = "https://api.giphy.com/v1/gifs/search?q="+search+"&api_key=8zUdFzYDxUUXGaP5ydLmU0xLydgX2Vie&limit="+num;
    var giphyRequest = $.get(giphyCode);
                
    //giphy code
    giphyRequest.done(function(response) {
        console.log("Success! Got data!!", response);
        var pics = response.data
        for (i in pics) {
            $('#inner').append("<img class='pic' src="+pics[i].images.original.url+"/>");
        };
    });
};

