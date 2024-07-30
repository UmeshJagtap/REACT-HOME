// AXIOS ---

import { useEffect, useState } from 'react';
import axios from 'axios';
const Axios = () => {
  const [meals, setMeals] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('https://www.themealdb.com/api/json/v1/1/random.php')
  //     .then((res) => {
  //       setMeals(res.data.meals);
  //     });
  // }, []);

  useEffect(() => {
    async function getActivity() {
      let response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );
      const data = await response.data.meals;
      console.log(data);
      setMeals(data);
    }
    getActivity();
  }, []);

  return (
    <div>
      {/* {JSON.stringify(meals)} */}
      {/* <button onClick={getActivity}>FETCH MEAL</button> */}
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="flex flex-col justify-center items-center"
        >
          <h2 className="text-xl font-bold">{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} width={400} />
        </div>
      ))}
    </div>
  );
};

export default Axios;
