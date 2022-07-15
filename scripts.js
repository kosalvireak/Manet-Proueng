
function black() {
    document.getElementById('text').style.color = "black";
    window.location = "https://github.com/kosalvireak";
}

function swapImage2() {
    var img = document.getElementById('pic2').src;
    const div = document.querySelector('body')
    const style = window.getComputedStyle(div, false)
    const bac_grou = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    globalThis.bac_img = "image2.jpg";

    document.body.style.backgroundImage = "url(" + img + ")";
    document.getElementById('pic2').src = bac_grou;

}
newimg = bac_img;
function swapImage3() {
    var img = document.getElementById('pic3').src;
    const div = document.querySelector('body')
    const style = window.getComputedStyle(div, false)
    const bac_grou = style.backgroundImage.slice(4, -1).replace(/"/g, "");

    document.body.style.backgroundImage = "url(" + img + ")";
    document.getElementById('pic3').src = bac_grou;

}
function swapImage4() {
    var img = document.getElementById('pic4').src;
    const div = document.querySelector('body')
    const style = window.getComputedStyle(div, false)
    const bac_grou = style.backgroundImage.slice(4, -1).replace(/"/g, "");

    document.body.style.backgroundImage = "url(" + img + ")";
    document.getElementById('pic4').src = bac_grou;

}
function swapImage5() {
    var img = document.getElementById('pic5').src;
    const div = document.querySelector('body')
    const style = window.getComputedStyle(div, false)
    const bac_grou = style.backgroundImage.slice(4, -1).replace(/"/g, "");

    document.body.style.backgroundImage = "url(" + img + ")";
    document.getElementById('pic5').src = bac_grou;

}
function swapImage6() {
    var img = document.getElementById('pic6').src;
    const div = document.querySelector('body')
    const style = window.getComputedStyle(div, false)
    const bac_grou = style.backgroundImage.slice(4, -1).replace(/"/g, "");

    document.body.style.backgroundImage = "url(" + img + ")";
    document.getElementById('pic6').src = bac_grou;

}
function swapImage7() {
    var img = document.getElementById('pic7').src;
    const div = document.querySelector('body')
    const style = window.getComputedStyle(div, false)
    const bac_grou = style.backgroundImage.slice(4, -1).replace(/"/g, "");

    document.body.style.backgroundImage = "url(" + img + ")";
    document.getElementById('pic7').src = bac_grou;

}
function swapImage8() {
    var img = document.getElementById('pic8').src;
    const div = document.querySelector('body')
    const style = window.getComputedStyle(div, false)
    const bac_grou = style.backgroundImage.slice(4, -1).replace(/"/g, "");

        
    document.getElementById('pic8').src = bac_grou;

}
function About_Me(){
    document.body.style.backgroundImage = "url(" + newimg + ")";

}