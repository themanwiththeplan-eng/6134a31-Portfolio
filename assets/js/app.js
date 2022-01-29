// var url  = giphy for card top
const gitUrl = `https://api.github.com/users/themanwiththeplan-eng/repos`

$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: gitUrl
    }).then(function(response){
        console.log(response);
        for(let i = 0; i < response.length; i++){
            const li = $("<li>");
            const a = $("<a>").attr("href", response[i].html_url);
            li.append(a);
            a.text(response[i].html_url)
            $(".repos").append(li);
        }
    })
})