// var url  = giphy for card top
const gitUrl = `https://api.github.com/users/themanwiththeplan-eng/repos`
const giphyKey = `sh3X7U8cBYQJ1zgGMBfuN9SYZrXPt6uN`;
const giphyUrl = `https://api.giphy.com/v1/stickers/search?api_key=${giphyKey}&q=hacker&limit=1&rating=r&SameSite=Strict`
$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: gitUrl
    }).then(function(response){
        
        for(let i = 0; i < response.length; i++){
            const li = $("<li>");
            const a = $("<a>").attr("href", response[i].html_url);
            a.attr("target", "_blank");
            li.append(a);
            a.text(response[i].html_url)
            $(".repos").append(li);

        }
    })
    $.ajax({
        method: 'GET',
        url: giphyUrl
    }).then(function(response){
        const currentGif = response.data[0].images.original.url;
        $(".image").css("background-image", `url(${currentGif})`);
        
    })
})