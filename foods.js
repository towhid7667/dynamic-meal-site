let loadMeals = () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals))

}
loadMeals();