window.onload = init;

function init(){
    $("#sumBtn").click(function(){
        execSum(true);
    });
    $("#nextBtn").click(function(){
        nextDay();
    });
    
    execLoad();
}

function execSum(withSave){
    execSumSub($("#day1Box"));
    execSumSub($("#day2Box"));
    
    if (withSave){
        execSave();
    }
}
function execSumSub(dayBox){
    let water1St = Number(dayBox.find(".water1St").val());
    let water2St = Number(dayBox.find(".water2St").val());
    let water3St = Number(dayBox.find(".water3St").val());
    let waterStSum = water1St + water2St + water3St;
    dayBox.find(".waterStSum").text(waterStSum);

    let water1En = Number(dayBox.find(".water1En").val());
    let water2En = Number(dayBox.find(".water2En").val());
    let water3En = Number(dayBox.find(".water3En").val());
    let waterEnSum = water1En + water2En + water3En;
    dayBox.find(".waterEnSum").text(waterEnSum);

    dayBox.find(".water1Sum").text(water1En - water1St);
    dayBox.find(".water2Sum").text(water2En - water2St);
    dayBox.find(".water3Sum").text(water3En - water3St);
    dayBox.find(".waterAllSum").text(waterEnSum - waterStSum);
    
}

function nextDay(){
    let day1Box = $("#day1Box");
    let day2Box = $("#day2Box");

    day1Box.find(".water1St").val(day2Box.find(".water1St").val());
    day1Box.find(".water2St").val(day2Box.find(".water2St").val());
    day1Box.find(".water3St").val(day2Box.find(".water3St").val());
    day1Box.find(".water1En").val(day2Box.find(".water1En").val());
    day1Box.find(".water2En").val(day2Box.find(".water2En").val());
    day1Box.find(".water3En").val(day2Box.find(".water3En").val());

    day2Box.find(".water1St").val("");
    day2Box.find(".water2St").val("");
    day2Box.find(".water3St").val("");
    day2Box.find(".water1En").val("");
    day2Box.find(".water2En").val("");
    day2Box.find(".water3En").val("");

    execSum(false);
}

function execLoad(){
    execLoadSub("day1", $("#day1Box"));
    execLoadSub("day2", $("#day2Box"));

    execSum(false);
}
function execLoadSub(key, dayBox){
    let valueJson = localStorage.getItem("catWater-" + key);
    let inputValueMap;
    if (valueJson){
        inputValueMap = JSON.parse(valueJson);
    } else {
        inputValueMap = {};
    }

    dayBox.find(".water1St").val(inputValueMap.water1St);
    dayBox.find(".water2St").val(inputValueMap.water2St);
    dayBox.find(".water3St").val(inputValueMap.water3St);
    dayBox.find(".water1En").val(inputValueMap.water1En);
    dayBox.find(".water2En").val(inputValueMap.water2En);
    dayBox.find(".water3En").val(inputValueMap.water3En);
}

function execSave(){
    execSaveSub("day1", $("#day1Box"));
    execSaveSub("day2", $("#day2Box"));
}
function execSaveSub(key, dayBox){
    let inputValueMap = {
        water1St: dayBox.find(".water1St").val(),
        water2St: dayBox.find(".water2St").val(),
        water3St: dayBox.find(".water3St").val(),
        water1En: dayBox.find(".water1En").val(),
        water2En: dayBox.find(".water2En").val(),
        water3En: dayBox.find(".water3En").val(),
    };

    let valueJson = JSON.stringify(inputValueMap);
    localStorage.setItem("catWater-" + key, valueJson);
}
