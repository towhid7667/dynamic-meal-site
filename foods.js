let loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))

}

const displayMeals = meals => {
  let mealsElement = document.getElementById("meals-list");
  mealsElement.innerHTML = '';

  meals.forEach(meal => {
    let cardBody = document.createElement('div');
    cardBody.classList.add('col');
    cardBody.innerHTML = `
        <div class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      </div>
        `;
    mealsElement.appendChild(cardBody);


  });
}


const searchDisplay = () => {
  const mealFindElement = document.getElementById('mealField');
  const mealFind = mealFindElement.value;
  loadMeals(mealFind);
  mealFindElement.value = '';
}





loadMeals('');