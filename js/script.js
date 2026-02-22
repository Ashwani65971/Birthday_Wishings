// LOGIN DETAILS JS CODE TOGGLE 
let toggleIcon = document.querySelector('.toggle-icon');
let loginDetails = document.querySelector('.login-details');

toggleIcon.addEventListener('click',()=>{
    toggleIcon.classList.toggle('active');
    loginDetails.classList.toggle('active');
})

// FLASH SINGLE IMAGE ON FIRST PAGE ON EVERY CLICK
let audioSrc = document.querySelector('#playClick');
function playClick()
{
    if(audioSrc.paused)
    {
        audioSrc.play();
    }
    // else
    // {
    //     audioSrc.pause();
    // }
}

let imagesArray = [
    {
        img: "../images/img-1.jpg",
        text : "🎂 Happy Birthday Bhabhi ji! Stay blessed always 💖",
        bgColor : "#7B7D26",
        rotateText : 10,
    },
    {
        img: "../images/img-2.jpg",
        text : "🌸 Wishing you happiness and success today and always ✨",
        bgColor : "crimson",
        rotateText : -10,
    },
    {
        img: "../images/img-3.jpg",
        text : "💕 Happy Birthday to the sweetest Bhabhi ji 🎉",
        bgColor : "#11151E",
        rotateText : 10,
    },
    {
        img: "../images/img-4.jpg",
        text : "🌷 May your life be full of joy and love 💝",
        bgColor : "#FEBA57",
        rotateText : -10,
    },
    {
        img: "../images/img-5.jpg",
        text : "🎉 Stay smiling and shining always 🌟",
        bgColor : "#316D56",
        rotateText : 10,
    },
    {
        img: "../images/img-6.jpg",
        text : "💐 Happy Birthday! You are truly special 💖",
        bgColor : "#058256",
        rotateText : -10
    },
    {
        img: "../images/img-7.jpg",
        text : "🎂 May all your dreams come true 🙏✨",
        bgColor : "#79A27E",
        rotateText : 10
    },
    {
        img: "../images/img-8.jpg",
        text : "🌺 Lots of love and warm wishes today 💕",
        bgColor : "#979649",
        rotateText : -10
    },
    {
        img: "../images/img-9.jpg",
        text : "💝 Stay happy, healthy, and blessed always 😊",
        bgColor : "#4D6283",
        rotateText : 10,
    },
    {
        img: "../images/img-10.jpg",
        text : "🎉 Happy Birthday to our family’s queen 👑",
        bgColor : "#094499",
        rotateText : -10,
    },
    {
        img: "../images/img-11.jpg",
        text : "🌸 Wishing you a year full of beautiful moments 💖",
        bgColor : "#EB1D3E",
        rotateText : 10
    },
    {
        img: "../images/img-12.jpg",
        text : "🎂 Keep spreading love and positivity ✨",
        bgColor : "#9C3E90",
        rotateText : -10,
    },
    {
        img: "../images/img-13.jpg",
        text : "💕 So grateful to have you in our family 🌷",
        bgColor : "#67B8B3",
        rotateText : 10
    },
    {
        img: "../images/img-14.jpg",
        text : "🌟 Have a fantastic and joyful birthday 🎉",
        bgColor : "#880009",
        rotateText : -10
    }
]

let imageIndex = 0;
let imagesBox = document.querySelector('.images-box');

imagesBox.addEventListener('click',(e)=>{
    let getBoxProperties = imagesBox.getBoundingClientRect();
    let getX = e.clientX - getBoxProperties.left;
    let getY = e.clientY - getBoxProperties.top;

    let createImage = document.createElement('img');

    createImage.src = `${imagesArray[imageIndex].img}`;

    createImage.style.left = getX + 'px';
    createImage.style.top = getY + 'px';
    imagesBox.appendChild(createImage);
    imageIndex = (imageIndex + 1) % imagesArray.length;
    playClick();
})

// JS CODE TO ACTIVE USERNAME AND PASSWORD FIELDS 
let firstLoginPage = document.querySelector('.first-login-page');
let userName = document.getElementById('username');
let passWord = document.getElementById('password');
let loginButton = document.querySelector('.login-btn');

loginButton.addEventListener('click',()=>{
    if(userName.value === "" || passWord.value === "")
    {
        alert("please Enter the username and the Password");
    }
    else if(userName.value === "HappyBirthdayBhabhiJi" && passWord.value ==="23Feb")
    {
        firstLoginPage.classList.add('active');
    }
    else
    {

        alert('wrong username or Password !');
    }
})

// JS CODE FOR STORY SWIPER 
var swiper = new Swiper(".story-swiper", {
      slidesPerView: 5,
      spaceBetween: 0,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

// JS CODE TO SHOW STORY SWIPER DATA 
let storySwiperWrapper = document.querySelector('.story-swiper .swiper-wrapper');

for(let i= 0; i < imagesArray.length; i++)
{
    let createStory = document.createElement('div');
    createStory.setAttribute('class','swiper-slide');
    createStory.innerHTML = `<img src="${imagesArray[i].img}" onclick = "clickIMG(${i+1}, this)"><small style="transform:translateX(20px); display:block; font-weight:500; font-size:11px;">Fav ${i+1} 💖</small>`;
    storySwiperWrapper.appendChild(createStory);
}

let storyShow = document.querySelector('.story-show');
let wishingText = document.querySelector('.story-show h3');

function clickIMG(target, addActive)
{
    // alert("clicked" +` ${target}`);
    storyShow.style.display = "flex";
    storyShow.style.background = `url(${imagesArray[target-1].img})`;
    storyShow.style.backgroundSize = "cover";
    storyShow.style.backgroundRepeat = "no-repeat";
    storyShow.style.backgroundPosition = "center";

    wishingText.textContent = `${imagesArray[target-1].text}`;
    wishingText.style.backgroundColor = `${imagesArray[target-1].bgColor}`;
    wishingText.style.padding = "10px";
    wishingText.style.transform = `rotate(${imagesArray[target-1].rotateText}deg)`;

    document.querySelector('.second-page-data-row').style.overflow = "hidden";


    // Remove active class from all images
    document.querySelectorAll('.swiper-slide img').forEach(img => {
        img.classList.remove('active');
    });

    // Add active class to clicked image
    addActive.classList.add('active');
}
function cutStoryBtn()
{
    storyShow.style.display = "none";
    document.querySelector('.second-page-data-row').style.overflowY = "visible";
    
}

// JS CODE FOR ADD QUOTES SECTION 
let bhabhiBirthdayTexts = [
  "जन्मदिन की हार्दिक शुभकामनाएं भाभी जी 🎂💐 भगवान आपको हमेशा खुश और स्वस्थ रखें 🙏✨",
  
  "प्रिय भाभी जी, आपका हर दिन खुशियों से भरा रहे 🌸😊 जन्मदिन मुबारक हो 🎉🎈",
  
  "आपकी मुस्कान हमेशा ऐसे ही खिलती रहे 😄🌹 जन्मदिन की ढेर सारी शुभकामनाएं 🎂💖",
  
  "भाभी जी, आपका जीवन प्यार और खुशियों से भरा रहे 💕✨ हैप्पी बर्थडे 🎉🎂",
  
  "आप हमारे परिवार की शान हैं 🌟👑 जन्मदिन पर ढेर सारा प्यार और आशीर्वाद 💐🙏",
  
  "भगवान आपकी हर इच्छा पूरी करें 🙏🌺 जन्मदिन की बहुत-बहुत बधाई 🎂🎊",
  
  "आपकी जिंदगी में हमेशा सफलता और खुशियां बनी रहें 🌈😊 हैप्पी बर्थडे भाभी जी 🎉💝",
  
  "भाभी जी, आपका हर सपना सच हो ✨🌟 जन्मदिन की शुभकामनाएं 🎂🌸",
  
  "आपकी हंसी हमारे घर की रौनक है 😄🏡 जन्मदिन मुबारक हो 🎈🎉",
  
  "आपका जीवन हमेशा प्यार और सम्मान से भरा रहे 💖🌹 हैप्पी बर्थडे 🎂🎊",
  
  "भगवान आपको लंबी उम्र और ढेर सारी खुशियां दें 🙏🎁 जन्मदिन की बधाई 🎉🎂",
  
  "भाभी जी, आप हमेशा यूं ही मुस्कुराती रहें 😊🌼 जन्मदिन की हार्दिक शुभकामनाएं 🎈💐",
  
  "आपके आने से हमारा घर खुशियों से भर गया है 🏡💞 हैप्पी बर्थडे 🎂✨",
  
  "आपकी हर सुबह नई उम्मीद और खुशियां लेकर आए 🌅🌸 जन्मदिन मुबारक हो 🎉🎊",
  
  "भाभी जी, आपका जीवन सदा सुख, शांति और समृद्धि से भरा रहे 🌟🙏 जन्मदिन की ढेर सारी शुभकामनाएं 🎂💖"
];

let addQuoteBtn = document.querySelector('.add-img');
let quotesBox = document.querySelector('.quotes-box');
let quoteIndex = 0;

addQuoteBtn.addEventListener('click', () => {

    let createQuote = document.createElement('div');
    createQuote.classList.add('quote-data');
    createQuote.innerHTML = `<p>${bhabhiBirthdayTexts[quoteIndex]}</p>`;
    
    quotesBox.appendChild(createQuote);

    requestAnimationFrame(() => {
        createQuote.classList.add('show');
    });

    // ✅ Scroll 50px down smoothly
   quotesBox.scrollTo({
  top: quotesBox.scrollHeight,
  behavior: "smooth"
});
    quoteIndex = (quoteIndex + 1) % bhabhiBirthdayTexts.length;
});

// ACTIVE THE FEATURES BUTTONS 
let featuresButtons = document.querySelectorAll('.features');
let MainPages = document.querySelectorAll('.second-page-data-row');

featuresButtons.forEach((targetButton,index)=>{
    targetButton.addEventListener('click',()=>{
        featuresButtons.forEach((removeClass)=>{
            removeClass.classList.remove('active');
        })
        MainPages.forEach((removeClass)=>{
            removeClass.classList.remove('active');
        })
        targetButton.classList.add('active');
        MainPages[index].classList.add('active');
    })  
})


// LOGOUT
function logout()
{
    firstLoginPage.classList.remove('active');
    userName.value = "";
    passWord.value = "";
}