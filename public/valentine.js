let noClicks = 0;
const maxClicks = 4;

const gifs = ["./assets/images/cat-woof.gif","./assets/images/gif-3.gif","./assets/images/gif-4.gif","./assets/images/gif-5.gif"];
const messages = ["Cookie please..😁", "DEER Please...🥰","Are you sure??🥲","why aren't you saying yes?😫"];

const gifElement = $("#gif");
const message = $("#message");

$("#no").on("click", ()=>{

    if(noClicks<maxClicks){
        
        gifElement.attr("src", gifs[noClicks]);
        message.text(messages[noClicks]);
        noClicks++;
    }

})

$("#yes").on("click", ()=>{
    window.location.href="yes.html";
})