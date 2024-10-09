// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper0 = document.querySelector("#p0");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 6;
let maxLocation = numOfPapers + 1;
document.getElementById("skipBtn").onclick = function(){
    location.replace("songs.html");
}

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper0.classList.add("flipped");
                paper0.style.zIndex = 1;
                break;
            case 2:
                paper1.classList.add("flipped");
                paper1.style.zIndex = 2;
                document.querySelector("#f1 video").pause();
                break;
            case 3:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 3;
                paper3.style.zIndex = 4;
                document.querySelector("#f2 video").pause();
                break;
            case 4:
                paper3.classList.add("flipped");
                paper4.style.zIndex = 5;
                document.querySelector("#f3 video").pause();
                break;
            case 5:
                paper4.classList.add("flipped");
                paper5.style.zIndex = 6;
                document.querySelector("#f4 video").pause();
                break;
            case 6:
                paper5.classList.add("flipped");
                document.querySelector("#f5 video").pause();
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;


    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper0.classList.remove("flipped");
                paper0.style.zIndex = 6;
                document.querySelector("#f1 video").pause();
                break;
            case 3:
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                document.querySelector("#f2 video").pause();
                break;
            case 4:
                paper2.classList.remove("flipped");
                paper3.style.zIndex = 3;
                paper2.style.zIndex = 4;
                document.querySelector("#f3 video").pause();
                break;
            case 5:
                paper3.classList.remove("flipped");
                paper4.style.zIndex = 2;
                document.querySelector("#f4 video").pause();
                break;
            case 6:
                paper4.classList.remove("flipped");
                paper5.style.zIndex = 1;
                document.querySelector("#f5 video").pause();
                break;
            case 7:
                openBook();
                paper5.classList.remove("flipped");
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}