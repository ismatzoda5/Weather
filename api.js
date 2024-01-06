
let box = document.querySelector(".section1")
let box2 = document.querySelector(".section2")
let search= document.querySelector(".div input")
let btn= document.querySelector(".div button")

let apiKey = "9bc190e0e7a6b373856da2f812a5cd77"
let api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


btn.onclick=()=>{
    weather(search.value);
    box.innerHTML=""
    box2.innerHTML=""
}

export async function weather(city) {
    try {
        let { data } = await axios.get(api + city + `&appid=${apiKey}`)
        console.log(data);

        let cont = document.createElement("div")
        cont.classList.add("cont")
        let name = document.createElement("h1")
        name.innerHTML = data.name + ","
        name.classList.add("name")
        let count = document.createElement("h1")
        count.innerHTML = data.sys.country
        count.classList.add("count")
        let temp = document.createElement("h1")
        temp.innerHTML = Math.round(data.main.temp) + "°C"
        temp.classList.add("temp")
        let main = document.createElement("h2")
        main.innerHTML = data.weather[0].main
        main.classList.add("main")
        let main1 = document.createElement("img")
        main1.src = "cloud.png"
        main1.classList.add("main1")

        if(data.weather[0].main=="Clouds"){
            main1.src="cloud.png"
        }
       else if(data.weather[0].main=="Clear"){
            main1.src="clear.png"
        }
       else if(data.weather[0].main=="Rain"){
            main1.src="rain.png"
        }
        else {
            main1.src="snow.png"
        }



        let cont2 = document.createElement("div")
        cont2.classList.add("cont2")
        let cont3 = document.createElement("div")
        cont3.classList.add("cont3")
        let cont4 = document.createElement("div")
        cont4.classList.add("cont4")
        let cont5 = document.createElement("div")
        cont5.classList.add("cont5")

        let feel = document.createElement("h2")
        feel.innerHTML = data.main.feels_like + "%"
        feel.classList.add("feel")

        let p1 = document.createElement("p")
        p1.classList.add("p1")
        p1.innerHTML = "Precipation"

        let humidity = document.createElement("h2")
        humidity.innerHTML = data.main.humidity + "%"
        humidity.classList.add("humidity")

        let p2 = document.createElement("p")
        p2.classList.add("p2")
        p2.innerHTML = "Humidity"

        let wind = document.createElement("h2")
        wind.innerHTML = data.wind.speed + "km/h"
        wind.classList.add("wind")

        let p3 = document.createElement("p")
        p3.classList.add("p3")
        p3.innerHTML = "Wind"

    let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let month1 = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let date = new Date()
    let a = month[date.getMonth()]
    let c = month1[date.getDay()]
   


       let time = new Date().getFullYear()
       let b = new Date().getDate()

       cont5.append(b,a,time)

        cont2.append(feel, p1)
        cont3.append(humidity, p2)
        cont4.append(wind, p3)
        box2.append(cont2, cont3, cont4)


        cont.append(name, count)
        box.append(cont,main1, temp, main,cont5,)
    } catch (error) {
        console.error(error);
    }
}






