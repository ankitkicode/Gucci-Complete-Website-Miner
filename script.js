gsap.to("#page1 svg", {
  scale: 0.12,
  marginTop: "-125px",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers:true,
    start: "top -7%",
    end: "top -20%",
    scrub: 3,
  },
});
gsap.to("#page1 #img-div", {
  marginTop: "300px",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers:true,
    start: "top -7%",
    end: "top -20%",
  },
});

// Containt Box items
gsap.to("#page1 .container2", {
  position: "absolute",
  bottom: 0,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers:true,
    start: "top 100%",
    end: "top 88%",
    scrub: 2,
  },
  color: "black",
});

gsap.to("#page1 #nav h4", {
  // visibility: "visible",
  opacity: "1",
  // duration:1.5,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    // markers:true,
    start: "top -5%",
    end: "top -10%",
    scrub: 2,
  },
});

//menu click effect

var menu = document.querySelector("#menu");
console.log(menu);
var menubtn = document.querySelector("#menubtn");
console.log(menubtn);
var closes = document.querySelector("#close");
console.log(closes);

menubtn.addEventListener("click", function () {
  menu.style.display = "block";
  menu.style.right = "0%";
  console.log("clicked");
});
closes.addEventListener("click", function () {
  // menu.style.display="none"
  menu.style.right = "-50%";
});

// menu close

//search

var search = document.querySelector("#search");
var searchbox = document.querySelector("#searchbox");
var flag = 0;
search.addEventListener("click", function () {
  if (flag == 0) {
    searchbox.style.display = "block";
    flag = 1;
  } else {
    searchbox.style.display = "none";
    flag = 0;
  }
});

//search close

//profile start

var profile = document.querySelector("#profile");
var profilebtn = document.querySelector("#profilebtn");
console.log(profile);
console.log(profilebtn);

var flag1 = 0;

profilebtn.addEventListener("click", function () {
  if (flag1 == 0) {
    profile.style.display = "block";
    flag1 = 1;
  } else {
    profile.style.display = "none";
    flag1 = 0;
  }
});

// second page slider
// code

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// End slider


//page3

// gsap.to("#page3 .center3 .box1", {
//   // marginTop: "300px",/
//   z:"50px",
//   // scrollTrigger: {
//   //   trigger: "#page3",
//   //   scroller: "body",
//   //   // markers:true,
//   //   start: "top -7%",
//   //   end: "top -20%",
//   //   scrub:2,
//   // },
// });

gsap.to("#page4 #image4", {
  // marginTop: "300px",/
  x:"30px",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers:true,
    start: "top -7%",
    end: "top -20%",
    scrub:2,
  },
});
gsap.to("#page4 #container", {
  // marginTop: "300px",/
  x:"-40px",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers:true,
    start: "top -7%",
    end: "top -20%",
    scrub:2,
  },
});

gsap.from("#page5 a", {
   y:50,
   opacity:0,
   stagger:0.5,
   scrollTrigger: {
    trigger: "#page5",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 0%",
    scrub:2,
  },
  },);
  gsap.from("#page5 .bottom svg", {
    y:80,
    opacity:0,
    stagger:0.5,
    scrollTrigger: {
     trigger: "#page5",
     scroller: "body",
    //  markers:true,
     start: "top 10%",
     end: "top -30%",
     scrub:2,
   },
   },);

