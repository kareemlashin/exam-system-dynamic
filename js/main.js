$(document).ready(function () {
    /*finish */
    let myQuiz =
    {
        examName: "math",
        teacher: "mohamed basem",
        totalMark: "100",
        timeExam: 2000,
        idExam: 2,
        question: [
            {
                type: "multi",
                q: 'question 1?',
                mark: 1,
                options: [
                    'Answer1',
                    'Answer2',
                    'Answer3',
                ],
                correctIndex: 1,
                correctResponse: 'Custom correct response.',
                incorrectResponse: 'Custom incorrect response.'
            },

            {
                type: "multi",
                q: 'question 2?',
                mark: 1,
                options: [
                    'Answer1',
                    'Answer2',
                    'Answer3',
                ],
                correctIndex: 1,
                correctResponse: 'Custom correct response.',
                incorrectResponse: 'Custom incorrect response.'
            },

            {
                type: "multi",
                q: 'question 3?',
                mark: 1,
                options: [
                    'Answer1',
                    'Answer2',
                    'Answer3',
                ],
                correctIndex: 1,
                correctResponse: 'Custom correct response.',
                incorrectResponse: 'Custom incorrect response.'
            },

            {
                type: "multi",
                q: 'question 4?',
                mark: 1,
                options: [
                    'Answer1',
                    'Answer2',
                    'Answer3',
                ],
                correctIndex: 1,
                correctResponse: 'Custom correct response.',
                incorrectResponse: 'Custom incorrect response.'
            },
            {
                type: "multi",
                q: 'question 5?',
                mark: 1,
                options: [
                    'Answer1',
                    'Answer2',
                    'Answer3',
                ],
                correctIndex: 1,
                correctResponse: 'Custom correct response.',
                incorrectResponse: 'Custom incorrect response.'
            },
            {
                type: "write",
                q: 'question 6?',
                mark: 1,
                correctResponse: 'correct',
                incorrectResponse: 'Custom incorrect response.'
            },
            {
                type: "write",
                q: 'question 7?',
                mark: 1,
                correctResponse: 'correct',
                incorrectResponse: 'Custom incorrect response.'
            },
            {
                type: "write",
                q: 'question 8?',
                mark: 1,
                correctResponse: 'correct',
                incorrectResponse: 'Custom incorrect response.'
            },
            {
                type: "write",
                q: 'question 9?',
                mark: 1,
                correctResponse: 'correct',
                incorrectResponse: 'Custom incorrect response.'
            }
        ]
    }
    let containerExam = myQuiz.question;
    let myAnswer = [];
    /*finish */
    let questionIndex = containerExam.length;
    let index = 0;
    $("#numQu").text(index + 1);
    $("#totalAll").text(questionIndex);
    function showQuestion(index) {
        let temp = "";
        let temp2 = "";
        if (containerExam[index].type == "multi") {
            temp += `<h2 class="my-3 pl-4">${containerExam[index].q}</h2>
                  <div class="marks">${containerExam[index].mark} marks</div>
            `
            for (let i = 0; i < containerExam[index].options.length; i++) {
                temp2 += `
                <div class="pl-5 my-2" id="form">
                <input type='radio' id="${index}" name="${containerExam[index].q}" value="${containerExam[index].options[i]}"><label class="ml-2">${containerExam[index].options[i]}</label><br>
                </div>
             `
            }

        }
        else {
            temp += `<h2 class="my-3 pl-4">${containerExam[index].q}</h2>
                    <div class="marks">${containerExam[index].mark} marks</div>`;
            temp2 += `
        <div class="row">
            <div class="col-md-12">
                <div class="form-group mt-3" id="form">
            <textarea  class="form-control w-100" placeholder="write answer" rows="3"></textarea>
                </div>
            </div>
        </div>`;

        }
        $("#exam").html(temp)
        $("#chose").html(temp2)
        $("#save").attr({
            "idExam": myQuiz.idExam,
            "indexQuestion": index
        }
        )
    }
    $("#nameExam").text(" " + myQuiz.examName);
    $("#totalQuestion").text(containerExam.length);
    $("#Instructions").text(myQuiz.teacher);
    $("#Duration").text(Math.floor(myQuiz.timeExam / 60) + "Min");
    $("#Created").text(myQuiz.teacher);
    $("#totalMark").text(myQuiz.totalMark);
    showQuestion(index);
    /* */
    /* */
    $("#next").click(function () {
        index++;
        if (index >= containerExam.length) {
            index = containerExam.length - 1;
            showQuestion(index);
            $("#numQu").text(index + 1);

        } else {
            showQuestion(index);
            $("#numQu").text(index + 1);

        }

    });
    /* */
    $("#prev").click(function () {
        index--;
        if (index < 0) {
            index = 0;
            showQuestion(0);
            $("#numQu").text(index + 1);

        } else {
            showQuestion(index);
            $("#numQu").text(index + 1);

        }
    });
    /* */
    function palettes() {
        let tempPalettes = "";
        for (let i = 0; i < containerExam.length; i++) {
            tempPalettes += `
            <div class="palette palettes  text-center m-2" id="${i}">${i + 1}</div>
             `
        }
        document.getElementById("palettes").innerHTML = tempPalettes;
    }
    /* */
    $("#finish").click(function () {
        //window.location = "http://www.google.com";
        alert(myAnswer)
    })

    palettes();
    $(".palette").click(function () {
        let plateNum = $(this).attr("id");
        index = plateNum;
        showQuestion(index);
        $("#numQu").text(plateNum);
    })
    /*finish */
    var nowStart = new Date().getTime();
    var countDownDate = new Date(nowStart + myQuiz.timeExam * 1000).getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#hour").text(hours);
        $("#minute").text(minutes);
        $("#second").text(seconds);
        if (distance < 0) {
            clearInterval(x);
            $(".time-count").css({ display: "none" });
            $("#finish-exam").css({ display: "block" });
            window.location = "http://www.google.com";
        }
    }, 1000);
    $("#save").click(function () {
        let idExam = $("#save").attr("idExam");
        let indexQuestion = $("#save").attr("indexQuestion")
        alert("idExam" + idExam)
        alert("indexQuestion" + indexQuestion)

        if (containerExam[index].type == "multi") {
            var radioValue = $("input[type='radio']:checked").val();
            if (radioValue) {
                alert(radioValue)
                let AnswerIndex = {
                    idExamAnswer: idExam,
                    indexQuestionAnswer: indexQuestion,
                    answer: radioValue
                }
                myAnswer.push(AnswerIndex);
                localStorage.setItem('myAnswer', JSON.stringify(myAnswer));
                $("#palettes #" + indexQuestion).addClass("paletteAnswered")
                $("#palettes #" + indexQuestion).removeClass("palette")
            }
        }
        else if (containerExam[index].type == "write") {
            var textAreaValue = $("textarea").val();
            alert(textAreaValue)
            if (textAreaValue) {
                let AnswerIndex = {
                    idExamAnswer: idExam,
                    indexQuestionAnswer: indexQuestion,
                    answer: textAreaValue
                }
                myAnswer.push(AnswerIndex);
                localStorage.setItem('myAnswer', JSON.stringify(myAnswer));
                $("#palettes #" + indexQuestion).addClass("paletteAnswered");
                $("#palettes #" + indexQuestion).removeClass("palette");
            }
        }
    }
    )

})
