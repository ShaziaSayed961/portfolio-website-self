const spotlight = document.querySelector(".spotlight");

window.addEventListener("mousemove",(e)=>{

spotlight.style.background =
`radial-gradient(
circle 250px at ${e.clientX}px ${e.clientY}px,

rgba(200, 217, 116, 0.15),

transparent 80%
)`;

});

 rgba(100,255,218,.15),