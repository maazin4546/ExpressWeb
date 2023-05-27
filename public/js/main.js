const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp = document.getElementById('temp')

const getInfo = async (event) => {
    event.preventDefault()
    let cityVal = cityName.value

    if (cityVal === "") {
        city_name.innerText = `Please write the name before search`
    }
    else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a972c51c501694b37ba4438af79f3ca2`
            const resp = await fetch(url);
            const data = await resp.json();
            const arrdata = [data];
            console.log(data);

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`
            temp.innerText = arrdata[0].main.temp;
            temp_status.innerText = arrdata[0].weather[0].main;
        }
        catch {
            city_name.innerText = `Please Enter the City name properly`;
        }

    }
}

submitBtn.addEventListener('click', getInfo)