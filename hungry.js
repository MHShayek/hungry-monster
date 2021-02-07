fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
     .then(res => res.json())
    .then(data => console.log(data));

const displayMeals = meals => {
    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        
        console.log(meal.strCategory);
    }

}  



