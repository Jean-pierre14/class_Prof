const exp = require('express')
const app = exp()
const PORT = 7000

const { success, error } = require('consola')

app.get('/api/student', (req, res) => {
    const student = [
        { id: 1, name: 'grace', class: 'year 1' },
        { id: 2, name: 'Laure', class: 'year 1' },
        { id: 4, name: 'Light', class: 'year 3' },
        { id: 3, name: 'Zoode', class: 'year 2' },
    ]
    res.json(student)
})

app.listen(PORT, (err) => {
    if (err) throw err
    success({ message: `server run on port ${PORT}`, badge: true })
})