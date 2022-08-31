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
    <div onclick="mealDetails(${meal.idMeal})" class="card h-100">
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


let mealDetails = (idMeals) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealdetails(data.meals[0]))
}

let displayMealdetails = meal => {
  const detailContainer = document.getElementById('detail-container');
  detailContainer.innerHTML = ``;
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('card');
  mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
  detailContainer.appendChild(mealDiv);
}





loadMeals('');