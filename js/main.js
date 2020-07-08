function generateCode () {
                //variable made from query
                var search = document.getElementById("query").value;
                //variable made from quantity
                var num = document.getElementById("quantity").value;
                //giphy request
                giphyRequest = "https://api.giphy.com/v1/gifs/search?q="+search+"&api_key=8zUdFzYDxUUXGaP5ydLmU0xLydgX2Vie&limit="+num;
                $('#display').text(giphyRequest);
                alert(giphyRequest);
                // alert('Did it work?');
            };