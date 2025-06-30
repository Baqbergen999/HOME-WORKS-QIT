const express = require("express")
const app = express()
app.use(express.json())

let cars = []
let idd = 1

app.post("/cars", (req, res) => {
    const { brand, model, year, color, price } = req.body

    const car = {
        id: idd,
        brand: brand,
        model: model,
        year: year,
        color: color,
        price: price
    }

    cars.push(car)
    idd++

    res.json({ message: "Car added successfully", car: car })
})

app.get("/", (req, res) => {
    res.json(cars)
})

app.get("/car/:id", (req, res) => {
    const id = req.params.id
    const found = cars.find(car => car.id == id)

    if (found) {
        res.json(found)
    } else {
        res.json({ message: "Car not found" })
    }
})

app.get("/car/search", (req, res) => {
    const brand = req.query.brand
    const result = cars.filter(car => car.brand == brand)
    res.json(result)
})

app.put("/update/:id", (req, res) => {
    const id = req.params.id
    const newBrand = req.body.brand
    const car = cars.find(car => car.id == id)

    if (car) {
        car.brand = newBrand
        res.json({ message: "Brand updated", car: car })
    } else {
        res.json({ message: "Car not found" })
    }
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id
    cars = cars.filter(car => car.id != id)
    res.json({ message: "Car deleted" })
})

app.listen(3000, () => {
    console.log("Server uryp tur!")
})
