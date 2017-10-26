// alert("Hello from your Chrome extension!");

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       var firstHref = $("a[href^='http']").eq(0).attr("href");
//
//       console.log(firstHref);
//
//       // This line is new!
//       chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
//     }
//   }
// );

//"https://go.twitch.tv/"+username

console.log("talk");
var streamername1 = "ppd";
var streamername2 = "FearDota";
var streamername3 = "PGL_Dota";
var streamername4 = "esl_csgo";
var streamername5 = "haha";
var streamername6 = "riotgames";
var streamername = [streamername1,streamername2,streamername3,streamername4,streamername5,streamername6];
var url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamername;

function upup() {
    //alert("Hello from your Chrome extension!");
    var number_high = document.getElementById("number_high").value;
    var number_low = document.getElementById("number_low").value;
    var streamer_search = document.getElementById("streamername-id").value;

    if(number_high-number_low>0)
    {
        document.getElementById("test").style.visibility = "visible";
    }

    document.getElementById("player-5-id").innerHTML = streamer_search;
    streamername5 = streamer_search;


    url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamername5;
    $.getJSON(url,function(data1){
        if(data1.stream===null)
        {
                //
                $("#status5").html("offline!!!");
                $("#status5").css("color","darkgrey");

            }
            else{
                //$("#status6").css('color':'black');
                $("#status5").html("Online   !!!");
                $("#status5").css("color","black");

            }
    });

    // var csgo_streamer_url = "https://wind-bow.gomix.me/twitch-api/streams";
    // $.getJSON(csgo_streamer_url,function(data2){
    //         var num_online = data2._total;
    //         $("#status5").html("jler");
    // });
}

//submit the form
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("submit-id");
    // onClick's logic below:
    if(link!=null)
    {
        link.addEventListener('click', function() {
            upup();
        });
    }
});



$(document).ready(function(){

    // for(var i=1;i<7;i++)
    // {
    //     var temp_statusname = "#status" + i;
    //     console.log(temp_statusname);
    //     url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamername[i-1];
    //     console.log(url);
    //     $.getJSON(url,function(data1){
    //             if(data1.stream===null)
    //             {
    //                 $(temp_statusname).html("offline!!!");
    //             }
    //             else{
    //                 $(temp_statusname).html("Online   !!!");
    //             }
    //     });
    // }



        url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamername1;
        $.getJSON(url,function(data1){
            if(data1.stream===null)
            {
                //
                $("#status1").html("offline!!!");
                $("#status1").css("color","darkgrey");
            }
            else{
                //$("#status6").css('color':'black');
                $("#status1").html("Online   !!!");
                $("#status1").css("color","black");
            }
        });

        url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamername2;
        $.getJSON(url,function(data1){
            if(data1.stream===null)
            {
                //
                $("#status2").html("offline!!!");
                $("#status2").css("color","darkgrey");
            }
            else{
                //$("#status6").css('color':'black');
                $("#status2").html("Online   !!!");
                $("#status2").css("color","black");
            }
        });

        url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamername3;
        $.getJSON(url,function(data1){
            if(data1.stream===null)
            {
                //
                $("#status3").html("offline!!!");
                $("#status3").css("color","darkgrey");
            }
            else{
                //$("#status6").css('color':'black');
                $("#status3").html("Online   !!!");
                $("#status3").css("color","black");
            }
        });

        url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamername4;
        $.getJSON(url,function(data1){
            if(data1.stream===null)
            {
                //
                $("#status4").html("offline!!!");
                $("#status4").css("color","darkgrey");
            }
            else{
                //$("#status6").css('color':'black');
                $("#status4").html("Online   !!!");
                $("#status4").css("color","black");
            }
        });

        url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamername5;
        $.getJSON(url,function(data1){
            if(data1.stream===null)
            {
                //
                $("#status5").html("offline!!!");
                $("#status5").css("color","darkgrey");
            }
            else{
                //$("#status6").css('color':'black');
                $("#status5").html("Online   !!!");
                $("#status5").css("color","black");
            }
        });



        url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamername6;
        $.getJSON(url,function(data1){
            if(data1.stream===null)
            {
                    //
                    $("#status6").html("offline!!!");
                    $("#status6").css("color","darkgrey");

                }
                else{
                    //$("#status6").css('color':'black');
                    $("#status6").html("Online   !!!");
                    $("#status6").css("color","black");

                }
        });

        // var csgo_streamer_url = "https://wind-bow.gomix.me/twitch-api/streams/?game=CS:GO";
        // $.getJSON(csgo_streamer_url,function(data2){
        //         var num_online = data2._total;
        //
        // });

        // var following = [];
        // var follower_url = "https://wind-bow.gomix.me/twitch-api/users/ppd/follows/channels";
        //
        // $.getJSON(follower_url,function(data2){
        //     for(var i=0;i<data2.follows.length;i++){
        //         var displayname = data2.follows[i].channel.display_name;
        //         following.push(displayname);
        //     }
        //
        //     $("#status6").html(following[1]);
        //
        // })


});
