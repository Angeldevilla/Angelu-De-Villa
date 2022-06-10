var imgCount = 0;
var title;
var desc;
var imgContent = [
 ["imgOption1", "With Honors", " An acknowledgement of a job well done and justification for the agony, the self-doubt, and the hard work that went into winning them. Awards can make us feel proud, happy, overwhelmed, and delighted."],
 ["imgOption2", "Medals", "A form of recognition for sporting, military, scientific, cultural, academic, or various other achievements. Military awards and decorations are more precise terms for certain types of state decoration."],
 ["imgOption3", "Most Flexible", "Ability to flexibly regulate emotions in a context-appropriate manner, and to recover from the primary emotional response when the context changes"],
 ["imgOption4", "Most Trustworthy", "You are reliable, dependable, and worthy of trust. People who are trustworthy will do what they say they will do. They never break their promises or let anyone down."],
 ["imgOption5", "Calculator", "Pre finals Task Performance to create and design a simple working calculator using Javascript "],
 ["imgOption6", "Calendar", "Program that encode your birthmonth"],
 ["imgOption7", "Image Viewer", "Create a program that manipulates the elements of an HTML document; "],
 ["imgOption8", "Login", "Create a program that Design an HTML/CSS log in page."],

];
function previewImg(imgSrc){
    document.getElementById("imgViewer").src = imgSrc.src;
    var imgInput = imgSrc.id;
    console.log(imgInput);

    if(imgInput == imgContent[0][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[0][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[0][2];
    }
    else if(imgInput == imgContent[1][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[1][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[1][2];
    }
    else if(imgInput == imgContent[2][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[2][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[2][2];
    }
    else if(imgInput == imgContent[3][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[3][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[3][2];
    }
    else if(imgInput == imgContent[4][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[4][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[4][2];
    }
    else if(imgInput == imgContent[5][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[5][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[5][2];
    }
    else if(imgInput == imgContent[6][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[6][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[6][2];
    }
    else if(imgInput == imgContent[7][0]){
        document.getElementById('topicTtl').innerHTML = imgContent[7][1];
        document.getElementById('topicDescrpt').innerHTML = imgContent[7][2];
    }
   
    else{
        title = document.getElementById('topicTtl').innerHTML = "Title";
        document.getElementById('topicDescrpt').innerHTML = "Description";
    }
}