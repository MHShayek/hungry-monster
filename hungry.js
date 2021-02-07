fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then(res => res.json())
    .then(data => displayMeals(data.meal));

const displayMeals = meals => {
    for (let i = 0; i < meals.length; i++) {
        const meal = data.meals[i];
        console.log(meal.strCategory);
    }

}



