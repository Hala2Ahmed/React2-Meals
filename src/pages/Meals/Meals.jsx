import React, { useEffect, useState } from 'react';
import style from "./Meals.module.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

export default function Meals() {
  const [categories, setCategories] = useState([]);
  const [Meal, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [subCategories, setSubCategories] = useState("All");


  useEffect(() => {
    getCategory();
  }, []);

  async function getCategory() {
      const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      setCategories(data.categories);
    }
    useEffect(() => {
        getSubCategory(subCategories);
      }, [subCategories]);
function getSubCategory(subCategories){
    setIsLoading(true);
    axios.get(`${subCategories === "All" ? "https://www.themealdb.com/api/json/v1/1/search.php?s=":`https://www.themealdb.com/api/json/v1/1/filter.php?c=${subCategories}`}`).
    then(({data}) => setMeal(data.meals)).
    catch((error) => console.error(error)).finally(() => setIsLoading(false));
}
  if (isLoading) {
    return <LoadingScreen></LoadingScreen>;
  }

  return (
    <>
    <div className={style.meals}>
      <div>
        <h1>Learn, Cook, Eat Your Food</h1>
      </div>
      <ul>
        <li className={`${subCategories === "All" && style.active }`} onClick={() => setSubCategories("All")}>
            <Link className={style.allLink}>
              All
            </Link>
        </li>
        {categories.map((category) => (
          <li className={`${subCategories === category.strCategory && style.active }`} key={category.idCategory} onClick={() => setSubCategories(category.strCategory)}>
            <Link className={style.link}>{category.strCategory}</Link>
          </li>
        ))}
      </ul>
        <div className={style.mealsList}>
        {Meal.map(meal=>(
            <div key={meal.idMeal}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
                {meal.strArea !== undefined &&<h4><svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg>{meal.strArea}</h4>
            }
          <Link to={`/mealDetails/${meal.idMeal}`} className={style.btn}> View Recipe</Link>
            </div>
        ))}
    </div>
    </div>
    </>
  );
}
