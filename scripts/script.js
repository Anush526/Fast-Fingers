let time = 10;
let hScore;
let score = 0;
let playButton = document.getElementById("PlayBut")
let centerEl = document.getElementById("FFP")
let typArm = document.getElementById("typingArm")
let buttonOne = document.getElementById("Button1")
let figureJumping = document.getElementById("figure-jumping")
let keyboard = document.getElementById("keyboard")
let countDown = document.getElementById("count-down")
let buttonSecond = document.getElementById("Button2")
let startCount = document.getElementById("start-count")
let count = 3
let gamestart = document.getElementById("gamestart")
startCount.innerHTML= count;
let backButton = document.getElementById('back');
let wordDiv = document.getElementById("worddiv")
playButton.addEventListener("click",chooseType)
buttonOne.addEventListener("click",chooseButton)
buttonSecond.addEventListener("click",chooseButtonSecond)

// let timeDiv = document.getElementById("time-div")
let wordsp = document.getElementById("text-ell")


let highScoreEl = document.getElementById("higher-scoreEl");
let yourScoreEl = document.getElementById("your-scoreEl");
let timeEl = document.getElementById("time-divT");
// let timeEl = document.getElementById("time-divTSec");
let textEl = document.getElementById("text-ell");
let inputEl = document.getElementById("InputText");

function chooseButtonSecond (){
    centerEl.style.display= "none"  
    typArm.style.display= "none"
    figureJumping.style.display = "none"
    countDown.style.display= "block"

    let id = setInterval(function(){
        count--;
        startCount.innerHTML= count;
        if (count<=-1){
            clearInterval(id)
            startCount.style.display="none"
            gamestart.style.display="block"
            generalGame()
            // location.reload()
        }
    },1000)

    hScore = localStorage.score
    highScoreEl.innerHTML = hScore;
    yourScoreEl.innerHTML = score;
    timeEl.innerHTML = time
    let oneWord = randomWord(wordsArr);
    textEl.innerHTML = oneWord;

    inputEl.addEventListener("keypress", function(e){
        if (e.code == "Enter" && inputEl.value !="") {
            if (inputEl.value ==oneWord) {
                score++
                time +=5;
                yourScoreEl.innerHTML = score;
                if (score>=hScore) {
                    hScore =score;
                    localStorage.score =hScore
                    highScoreEl.innerHTML = hScore
                }
            }else{
               if(time > 1) time-=2

            }
            // oneWord = "Համակարգիչ"
            oneWord = randomWord(wordsArr);
            textEl.innerHTML =oneWord;
            inputEl.value =""
            timeEl.innerHTML = time
        }
    })
    console.log(textEl)
    
}



function chooseType (){
    centerEl.style.display= "none"  
    typArm.style.display= "block"
    backButton.style.display = 'block';
}

function chooseButton (){
    centerEl.style.display= "none"  
    typArm.style.display= "none"
    figureJumping.style.display = "none"
    buttonOne.style.display= "block"
    keyboard.style.display= "block"
    backButton.style.display = 'block';
    gameKeyboard()
}

function generalGame() {
    if (!localStorage.score) {
        localStorage.score=0
    }
    let id1 = setInterval(function() {
        time--
        timeEl.innerHTML = time
        if (time < 0){
            clearInterval(id1)
            typArm.style.display = "block"
            gamestart.style.display = "none"  
            location.reload()          
    }
    }, 1000);
    
}

    // // ------
    // hScore = localStorage.score
    // highScoreEl.innerHTML = hScore;
    // yourScoreEl.innerHTML = score;
    // timeEl.innerHTML = time
    // // let oneWord = "Ինքնաթիռ"
    // // textEl.innerHTML = oneWord;

    // let oneWord = randomItem(wordsArr);
    // wordsp.innerHTML = oneWord;

    // inputEl.addEventListener("keypress", function(e){
    //     if (e.code == "Enter" && inputEl.value !="") {
    //         if (inputEl.value ==oneWord) {
    //             score++

    //             inputEl.value = ""
    //             oneWord = randomItem(wordsArr);
    //             time +=5;
    //             yourScoreEl.innerHTML = score;
    //             if (score>=hScore) {
    //                 hScore =score;
    //                 localStorage.score =hScore
    //                 highScoreEl.innerHTML = hScore
    //             }
    //         }else{
    //             time-=2
    //             if (time-=2) {
    //                 timeEl.innerHTML = time
    //                 oneWord = randomItem(wordsArr);
    //                 textEl.innerHTML =oneWord;
    //                 inputEl.value =""
    //             }   
    //         }
            
    //     }
    // // ------






function randomWord(arr){
    let indexWord  =  Math.floor(Math.random() * arr.length);
    return arr[indexWord]
}


function gameKeyboard(){
    let oneletter = randItm(letterArr)
    let oneElement  =  document.getElementById(oneletter)
    oneElement.classList.add("selected");
    document.addEventListener("keyup", function(e) {
        if (e.code ==oneletter) {
            oneElement.classList.remove("selected")
            oneletter = randItm(letterArr)
            oneElement  =  document.getElementById(oneletter)
            oneElement.classList.add("selected")
            console.log("YES");
        }
        else if(event.code != oneletter){
            let  falseEl  = document.getElementById(e.code) 
            falseEl.classList.add("hit")
            setTimeout(function(){
                falseEl.classList.remove("hit")
            },10)
            console.log("NO");
        }
        
        console.log(e)
    })

    console.log(oneElement)
}

function randItm(arr){
    let index  =  Math.floor(Math.random() * arr.length);
    return arr[index]
}






// --------------------------------------------------------------------------
// function timeDivGame (){
//     // centerEl.style.display= "none"  
//     // typArm.style.display= "none"
//     // figureJumping.style.display = "none"

//     timeDiv.style.display= "block"

//     let id = gameTimeDivG(function(){
//         count--;
//         // startCount.innerHTML= count;
//         if (count<=-1){
//             gameTimeDivG(id)
//             // startCount.style.display="none"
//             // gamest()
//         }
//     },1000)
// }

// wordDiv.innerHTML = "Write Word"
// console.log(wordDiv)

// backButton.addEventListener('click', function() {
//     if(keyboard.style.display === "block"){  
//        keyboard.style.display = "none"
//        choose.style.display = "block";
//        figureJumpingn.style.display = "block"
//        backButton.style.display = 'none'
//    }else if(game.style.display === "block"){
//        game.style.display = "none"
//        choose.style.display = "block";
//        figureJumpingn.style.display = "block"
//        backButton.style.display = 'none'
//    }
// })

// function gamest(){
//     // centerEl.style.display= "none"  
//     // typArm.style.display= "none"
//     // figureJumping.style.display = "none"
//     // countDown.style.display= "none"
//     gamestart.style.display= "block"
// }

// / function generalGame() {
    //     let oneword = randomWord(wordsArr)
    //     console.log(oneword)
    //     let oneWordElement  =  document.getElementById(wordsArr)
        
    //     oneWordElement.classList.add("selected");
    //     document.addEventListener(function(Word){
    //         if (Word.code ==oneword) {
    //                         oneWordElement.classList.remove("selected")
    //                         oneword = randomWord(wordsArr)
    //                         oneWordElement  =  document.getElementById(oneword)
    //                         oneWordElement.classList.add("selected")
    //                         console.log("Right");
    //                     }
    //             else if(Word.code != oneword){
    //                 let  fallseEl  = document.getElementById(Word.code) 
    //                 fallseEl.classList.add("fallse")
    //                 setTimeout(function(){
    //                     fallseEl.classList.remove("fallse")
    //                 },1000)
    //                 console.log("fallse");
    //             }
    //         console.log(Word)
    //     })
    //     console.log(oneWordElement)
    // }

// --------------------------------------------------------------------------

// document.addEventListener("keyup", function(e){
//     console.log(e)
// })

// let textA = document.getElementById("textA")

// textA.innerHTML = "BBB"
// console.log(textA)

// InputText

// let InputText = document.getElementById("InputText")
// InputText.placeholder = "Write here"
// console.log(InputText)

// document.addEventListener("click" IinputTextt)

// function IinputTextt (){
//     IinputTextt.innerHTML= "Click2023"
// }

// console.log(Math.round(5,6))
// console.log(window.document)

// document.addEventListener("click" Cli)

// function Cli (){
//     textA.innerHTML= "Click2023"
// }

// let block = block
// let start = playButton
// if (playButton = block ) {
//     let id = setInterval(function(){
    
//         // if (chooseButtonSecond = block) {
            
//         // }
//         count--;
//         startCount.innerHTML= count;
//         if (count<=0){
//             clearInterval(id)
//             startCount.style.display="none"
//             game()
//         }
//     },2000)  
// }
