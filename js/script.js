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
        img: "https://scontent.fslv1-4.fna.fbcdn.net/v/t39.30808-6/599945974_2618899351826922_4367244891270833964_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=S5dOWjM9rSwQ7kNvwFqCA4o&_nc_oc=Adn7YSKUryd1vVKeXcFvIVYgTn2agnKPdPYfY1LsSLjprJI68lsj4OjryzfwS38qeM_FPxmj61JQbFaxSkRPRUIq&_nc_zt=23&_nc_ht=scontent.fslv1-4.fna&_nc_gid=l3FzMfmazp4H3mPJoxrwRw&oh=00_Aft46r6lesf_WNkvxZJwIf6UXxvJOZx10b_NXfV3VQ_jvA&oe=69A0ECE9",
        text : "🎂 Happy Birthday Bhabhi ji! Stay blessed always 💖",
        bgColor : "#7B7D26",
        rotateText : 10,
    },
    {
        img: "https://scontent.fslv1-1.fna.fbcdn.net/v/t39.30808-6/623422007_2655337158183141_1458329983684427798_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=V2ea8puog8oQ7kNvwF3GjwJ&_nc_oc=AdltYHd24dguD80xIXtFoW5tFfMiggReQoLurv3kFP5GTW73_zLHODrKCmXeKqgtPOrjhqVfIK38Ei_QHaEE3676&_nc_zt=23&_nc_ht=scontent.fslv1-1.fna&_nc_gid=bjyYJFpBVyeiQjMQO6HTOQ&oh=00_AfvBX616i1OLd4bsbI4cDTP2y5DqMCi71u_Vt6qbCxfZAQ&oe=69A0EAA9",
        text : "🌸 Wishing you happiness and success today and always ✨",
        bgColor : "crimson",
        rotateText : -10,
    },
    {
        img: "https://scontent.fslv1-1.fna.fbcdn.net/v/t39.30808-6/616183238_2647301482320042_6839229822135481983_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xyPTbzbYacwQ7kNvwHzjjvf&_nc_oc=AdlloWdPYzrxtLEZXXtAlkA0bSeZtU8R_KsBYIYnyb34iP4PDHhyVewRDZLczKu4tSxuLjB5gwo_fk1N2aI9qzap&_nc_zt=23&_nc_ht=scontent.fslv1-1.fna&_nc_gid=YU8tH6EEs98G4DaLBnejAA&oh=00_AfsoO20mq4VjP4C116y7d1QKoBiRa0MQBWcyysBLoim-bQ&oe=69A0F307",
        text : "💕 Happy Birthday to the sweetest Bhabhi ji 🎉",
        bgColor : "#11151E",
        rotateText : 10,
    },
    {
        img: "https://scontent.fslv1-4.fna.fbcdn.net/v/t39.30808-6/638238067_2673443519705838_6660821439316053764_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=YBNfO1KEDh8Q7kNvwGxPpIf&_nc_oc=Adm8ZAgSDa93unZE3po7Boza-rE4YE5ea1GjEr0z7HDEnIkyNKHlKIew-AEeDmaw_ImkQ7z0mXXPEjfODZv7EloS&_nc_zt=23&_nc_ht=scontent.fslv1-4.fna&_nc_gid=rja1jPtk2uJHOqMoa7uJAA&oh=00_AfsxLZRNYcJLMh7ntuqoJg_nZsmxzM-nXGX6_976LrCMMg&oe=69A0DA1D",
        text : "🌷 May your life be full of joy and love 💝",
        bgColor : "#FEBA57",
        rotateText : -10,
    },
    {
        img: "https://scontent.fslv1-3.fna.fbcdn.net/v/t39.30808-6/637900572_2673005279749662_4737671454092338249_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=mBewrblP1q4Q7kNvwGYVAG6&_nc_oc=AdklPdshEFBmgICGdz8PL7HEuN7W4N94S0BnLi--YssSZJ_VNMYzrrlAgqyjQNEyX8DvmGcdJGNiy0U6zrFqlstj&_nc_zt=23&_nc_ht=scontent.fslv1-3.fna&_nc_gid=Yz1rNjNACDITj9u468nAjg&oh=00_AfsObkvLgnbye7K2hPxqdn4z_cWPPAt6hG5snOb8avtwQg&oe=69A0E190",
        text : "🎉 Stay smiling and shining always 🌟",
        bgColor : "#316D56",
        rotateText : 10,
    },
    {
        img: "https://scontent.fslv1-4.fna.fbcdn.net/v/t39.30808-6/626156666_2660815154302008_9178300669602644073_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2Ds_XmDg5j8Q7kNvwHUpQSx&_nc_oc=AdlnRWNiDCto-KvoaB0oGXqOywrjm2rxnVsMKXDn7gw0K2MQu3CMQAlLn8tAZgs3P7HBR7ng7sCGODKx3EwT_Wsv&_nc_zt=23&_nc_ht=scontent.fslv1-4.fna&_nc_gid=u5904pV7HaDPTk23jW8XrA&oh=00_Afv6kXiNvO1ek-bKZJAXQdWAwXJvtnR0CpGXx7N560zzGQ&oe=69A0E24B",
        text : "💐 Happy Birthday! You are truly special 💖",
        bgColor : "#058256",
        rotateText : -10
    },
    {
        img: "https://scontent.fslv1-1.fna.fbcdn.net/v/t39.30808-6/624679259_2656709148045942_5500542408724273625_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=vKytFnFD0AoQ7kNvwHeEa4v&_nc_oc=AdkJJywWE7FouygOV3Og3uTieIqOeaHniGyKWj9_ypD7eXsVMR3ho9XAkl1O5aFxc9POBGZZG8ZDZazMpUXn-DkA&_nc_zt=23&_nc_ht=scontent.fslv1-1.fna&_nc_gid=KNX4KtOHmJQnIb0WrpnXPw&oh=00_AfsuL-u_9YhpgVj9EZv4iNGbhC3P-pCnuNnUML8X2-h3Dg&oe=69A0DCA7",
        text : "🎂 May all your dreams come true 🙏✨",
        bgColor : "#79A27E",
        rotateText : 10
    },
    {
        img: "https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-6/621812847_2653051421745048_9150007083159863225_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pzvb9jP5XFkQ7kNvwFyl521&_nc_oc=AdlryXjtRQLYeL_CQaQtCRZfKigFe6dPC_R9btFcbd-DzoRXzk5kk8ADnV1U8ArHtClPl8h0tNieRVTjYy7FX7fq&_nc_zt=23&_nc_ht=scontent.fslv1-2.fna&_nc_gid=1uDJL8TwTNEx-f57jYKFTA&oh=00_Afvc7Jm3t5R8BdfPBffSaDPfBAQl5XQ2_h0WW45PU-V7Iw&oe=69A10512",
        text : "🌺 Lots of love and warm wishes today 💕",
        bgColor : "#979649",
        rotateText : -10
    },
    {
        img: "https://scontent.fslv1-1.fna.fbcdn.net/v/t39.30808-6/621890809_2652122468504610_1627548753454916506_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=IX7bizjCP9AQ7kNvwHV9Nm-&_nc_oc=AdnP33O-fdsLKxNO4zHafhCIaCih8zBcEswWUzYu4O4uQyJ1ygv3D117rzMkcdNe1twcmr18CRNu2zTwffWFwoIA&_nc_zt=23&_nc_ht=scontent.fslv1-1.fna&_nc_gid=1uDJL8TwTNEx-f57jYKFTA&oh=00_AfvJ7X0cjm19_4SkZyC8mxEnIzwAk5GeEdhc4G6zA-JuIg&oe=69A0EF32",
        text : "💝 Stay happy, healthy, and blessed always 😊",
        bgColor : "#4D6283",
        rotateText : 10,
    },
    {
        img: "https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-6/612358993_2634777476905776_4535479805928371104_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=OY1xTRGXVm0Q7kNvwFg97KT&_nc_oc=AdmdCezmXghGcR_yGZeAaRcMW_Rdtms18pG0ScPXfzjYlgIRlHFZUh9-ZObHD-Ci9lQ0I1b6XUvFdOYVycCK5xHk&_nc_zt=23&_nc_ht=scontent.fslv1-2.fna&_nc_gid=K5XVpvlXQ3e9KVk0lrlgsQ&oh=00_AfuwmRILmR5rr9bMhkSxWZXrFAJXzJZTM6BONIRVCkZDHg&oe=69A0F8B3",
        text : "🎉 Happy Birthday to our family’s queen 👑",
        bgColor : "#094499",
        rotateText : -10,
    },
    {
        img: "https://scontent.fslv1-1.fna.fbcdn.net/v/t39.30808-6/633896147_2670207446696112_7496057211392250871_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=rFCwQ84anxsQ7kNvwHLl9xs&_nc_oc=AdnaUcInFOuQUDnqGFt4xKPJk8nVDuwaQB9wcevZ-KWftgrAsIuBzPIRZ3EV7Qc3YWpQZbC022kX6JtS_EIhpleq&_nc_zt=23&_nc_ht=scontent.fslv1-1.fna&_nc_gid=6O-4Sb-bC1ZzhF4IBrt9GA&oh=00_AftN0QZZW1tlHpQpb8yO3Evyp_O4JTkNsUS9NNq0Htu0gA&oe=69A1011E",
        text : "🌸 Wishing you a year full of beautiful moments 💖",
        bgColor : "#EB1D3E",
        rotateText : 10
    },
    {
        img: "https://scontent.fslv1-2.fna.fbcdn.net/v/t39.30808-6/344540617_183750907935963_5293934274719386117_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_ohc=Kz22bNz7DwsQ7kNvwHG1ubN&_nc_oc=Admu_KKAyDsBWhaDuhfTEX2T3srHobTs2xWCdz11qCbyBxlVrvClWku3WT4mooJum8HUxqF4jNudVPt31iSqaqrg&_nc_zt=23&_nc_ht=scontent.fslv1-2.fna&_nc_gid=xJN5S2vyCQUcpw3xP6pf1A&oh=00_Afsxwo_jCYneEyo5YMvYqvfRu1bx64Ccg8jo087cwbOA1w&oe=69A0ED95",
        text : "🎂 Keep spreading love and positivity ✨",
        bgColor : "#9C3E90",
        rotateText : -10,
    },
    {
        img: "https://scontent.fslv1-4.fna.fbcdn.net/v/t1.6435-9/84515178_1042111959505677_3642917812231471104_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Zhm07j2bX9sQ7kNvwEKO7hB&_nc_oc=Adnyk221U-548Yl3oPLkc_5q_JIp04xnqCsS1AaUbEjAfbTaSwTSF9KFGbfGDth6RnEhP7ILYntOyjgm9mZFLpQC&_nc_zt=23&_nc_ht=scontent.fslv1-4.fna&_nc_gid=TwMiiOWR_HeGHWJIPmq0hQ&oh=00_AftFVXgB4hT8n7ZdoIXyz3tPYseybLYFOAX1XVki5-bRiw&oe=69C28362",
        text : "💕 So grateful to have you in our family 🌷",
        bgColor : "#67B8B3",
        rotateText : 10
    },
    {
        img: "https://scontent.fslv1-1.fna.fbcdn.net/v/t39.30808-6/615922938_2644916579225199_6983505549514259219_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=DWFS8JmpQHIQ7kNvwGe7bnK&_nc_oc=AdmNpcJjff77Z9zbJw51BR6pwmMfuHLClnujEA2K5qJIBneGyyRvpiJO5Or_QPtWXGBxWfxWFJzI9gpPhMwMUkjR&_nc_zt=23&_nc_ht=scontent.fslv1-1.fna&_nc_gid=eHj2LWhLbMxrhoJ2N8YuyA&oh=00_Afs4UG2ry0KRFCr8Dr8oPiTzOOt0B5Nk74OYN7loE4u8aQ&oe=69A0F570",
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