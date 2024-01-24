let apikey = "9d3f9991018e4783a7295109242301";
let cityEle = document.querySelector(".city");
let tempEle = document.querySelector(".temp");
let iconEle = document.querySelector(".icon");
let humidEle = document.querySelector(".humid");

let input = document.querySelector(".cityInput");
let btn = document.querySelector("#search-addon");

btn.addEventListener('click',function(){
    let city = input.value;
    input.value = "";

    // getData(city);
});


async function getData(city="gwalior"){

    let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)

    data = await data.json();
    console.log(data);
    screenUpdate(data);
}

// getData();


function screenUpdate(obj){
    let cityname = obj.location.name;
    let temp = obj.current.temp_c;
    let humidity = obj.current.humidity;
    let icon = obj.current.condition.icon;

    // console.table([cityname,temp,humidity,icon]);


    tempEle.innerHTML = temp;
    cityEle.innerHTML = cityname;
    humidEle.innerHTML = humidity;
    iconEle.src= icon;

}


