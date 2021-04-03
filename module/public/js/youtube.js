var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '550',
          width: '850',
          videoId: 'stsJe7pJaKU' //insert the YouTube video id here  <------------
        });
      }
        
window.onclick = () => {
        console.log(player);
        //alert(player.playerInfo.currentTime);
        console.log(player.playerInfo.currentTime);
    }

function displayTimeStamp(){
  var t =  player.playerInfo.currentTime;
  document.getElementById("timestamp").innerHTML = t;
}