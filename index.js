
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const popImage = document.querySelector(".full-image");
const caption = document.querySelector(".caption");
const randombtn = document.querySelector("button");
const btn = document.querySelector(".btn");
const imageList = [
  "images/blue-stones.jpeg",
  "images/cage_d_elephant.webp",
  "images/cold-war-kids.jpg",
  "images/foster-the-people.webp",
  "images/nujabes.jpeg",
  "images/omam.webp",
  "images/senor-loop.jpeg",
  "images/tameimpala.jpeg",
  "images/viniloversus.jpeg"
];

btn.addEventListener("click", function(event) {
    const random_index = Math.floor(Math.random()*imageList.length);
    const selected_image = imageList[random_index];
    modal.classList.add("open");
    popImage.classList.add("open");
    popImage.src = selected_image;
  /*  const alterText = selected_image.getAttribute("alt");*/
    caption.textContent = captionText(selected_image);
    playSound();
  });

previews.forEach(preview => {
  preview.addEventListener("click",() => {
    modal.classList.add("open");
    popImage.classList.add("open");
    const originalSrc = preview.getAttribute("src");
    popImage.src = originalSrc;
    const altText = preview.getAttribute("alt");
    caption.textContent = altText;
    playSound();
  });
});

modal.addEventListener("click",(e)=>{
  if(e.target.classList.contains("modal")){
    modal.classList.remove("open");
    popImage.classList.remove("open")
  }
});

function playSound(){
  const audio = new Audio();
  audio.src = "./sounds/click.mp3";
  audio.play();
}

function captionText (name){
  if (name == "images/blue-stones.jpeg"){
    return "Blue Stones";
  } else if (name == "images/cage_d_elephant.webp"){
    return "Cage The Elephant";
  }else if (name == "images/cold-war-kids.jpg"){
    return "Cold War Kids";
  }else if (name == "images/foster-the-people.webp"){
    return "Foster The People";
  }else if (name ==   "images/nujabes.jpeg"){
    return "Nujabess";
  }else if (name == "images/omam.webp"){
    return "Of Monsters and Men";
  }else if (name == "images/senor-loop.jpeg"){
    return "Señor Loop";
  }else if (name == "images/tameimpala.jpeg"){
    return "Tame Impala";
  }else {
    return "Viniloversus";
  }
}
