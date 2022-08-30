let loadMeals = (search) => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=${search}'
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))

}

const displayMeals = (meals) => {
    let mealsElement = document.getElementById("meals");

    meals.forEach(meal => {
        let cardBody = document.createElement('div');
        cardBody.classList.add('col');
        cardBody.innerHTML = `
        <div class="card h-100">
      <img src="${meals[0].strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meals[0].strMeal}</h5>
        <p class="card-text">${meals[0].strInstructions.slice(0, 200)}</p>
      </div>
        `
        mealsElement.appendChild(cardBody);


    });



}


loadMeals();