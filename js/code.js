
let alarmTime = [];
let degrees;
let actual = 66;
let alarms = [];

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
        actual = degrees;
    }
     degrees = actual + (6*segundos);
     
    $(".circle").css("transform", `rotate(${degrees}deg)`)

    alarms.forEach((item) => {
        if(item == `${dateFormat(horas)}:${dateFormat(minutos)}` && segundos<1){
            console.log("ALARMAAAAAA")
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
