const people = ["Mario", "Luigi", "Shaun"]
const ages = [40, 50, 60]

const printPeople = function() {
    people.forEach(p => {
        console.log(`All people are ${p}`)
    })
}

const printAges = () => {
    ages.forEach(a => {
        console.log(`Ages: ${a}`)
    })
}

module.exports = {
    people,
    ages,
    printAges,
    printPeople
}