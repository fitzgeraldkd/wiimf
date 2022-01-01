import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../../utils/types/record.types';
import RecipeCardStyles from './RecipeCard.styles';

interface RecipeCardProps {
  recipe: Recipe
};

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <RecipeCardStyles>
      <Link to={`/recipes/${recipe.id}`}>
        <div className='card'>
          <span className='card-title'>{recipe.name}</span>
          {recipe.course ? recipe.course : null}
          {(recipe.course && recipe.cuisine) ? ' | ' : null}
          {recipe.cuisine ? recipe.cuisine : null}
        </div>
      </Link>
    </RecipeCardStyles>
  );
}

export default RecipeCard;
