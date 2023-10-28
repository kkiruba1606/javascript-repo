function bulboff()
{
    let a=document.getElementById("onimg");
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
     let b=document.getElementById("offimg");
     b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
     document.getElementById("heading").innerHTML="Switched OFF"
}
function bulbon()
{
    let a=document.getElementById("onimg");
    a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    let b=document.getElementById("offimg");
    b.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    b.style.width= "20%"
    document.getElementById("heading").innerHTML="Switched ON"
}