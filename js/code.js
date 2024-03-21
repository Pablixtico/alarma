
let alarmTime = [];
let degrees;
let actual = 66;
let alarms = [];
let audio = new Audio("audio/audio1.mp3");
console.log(audio.src)

$("#alarmNotice").on("click", "span", (e) => {
    delete alarms[alarms.indexOf($(e.target).parent().children("p").html())];
    console.log(alarms)
    $(e.target).parent().remove();
  });

  $("#setAlarm").click((e) => {
    addTime()
})

function Time(){
    
    const date = new Date();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    $("#hours").html(dateFormat(horas));
    $("#minutes").html(dateFormat(minutos));

    if(segundos == 0){
        actual = degrees+6;
    }
     degrees = actual + (6*segundos);
     
    $(".circle").css("transform", `rotate(${degrees}deg)`)

    alarms.forEach((item) => {
        if(item == `${dateFormat(horas)}:${dateFormat(minutos)}` && segundos<1){
            audio.pause();
            audio.play();
            audio.volume = 1;
        }
    })

}setInterval(Time, 1000);


function dateFormat(num){
    if(num<10){
        return `0${num}`;
    }
    return num;
}

function addTime(){
    $("#alarmNotice").append(`<div class="alarm"><p>${$("#setTime").val()}</p><span class="material-symbols-outlined">close</span></div>`)
    alarms.push($("#setTime").val());
}

$(".file-input__input").on("change", ((item) => {
    let files = $(".file-input__input").prop("files");
    $(".name-file").html(files[0].name);
    console.log(files)
    let utl = URL.createObjectURL(files[0]);
    console.log(utl);
    audio.src = utl;
}));

