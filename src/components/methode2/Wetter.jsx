

import { useEffect, useState } from "react"


function Wetter() {
    const [wetterData, setWetterData] = useState()
    const [city, setCity] = useState("Brasilien")

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab2195502cd0245484dec00c47137016&units=Metric`)
            .then((res) => res.json())
            .then((wetterData) => {
                setWetterData(wetterData)
            })
    }, [city])

    if (wetterData === undefined) {
        return
    }
    return (
        <>
            <section className="btnSection">
                <button onClick={() => setCity("brazil")}>Brasilien</button>
                <button onClick={() => setCity("uganda")}>Uganda</button>
                <button onClick={() => setCity("groenland")}>Grönland</button>
                <button onClick={() => setCity("turkey")}>Türkei</button>
            </section>
            <section>
                <article>
                    <p>{wetterData.weather[0].description} in {wetterData.name} </p>
                    <img src={`http://openweathermap.org/img/wn/${wetterData.weather?.[0]?.icon}@2x.png`} alt={wetterData.weather[0].description}></img>
                </article>
                <p>Aktuell: {wetterData.main.temp}°C</p>
                <p>Windg.: {wetterData.wind.speed} meter/sec</p>
            </section>
        </>
    )
}

export default Wetter