import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../../rootReducer';

import { RiAddFill } from 'react-icons/ri';
import FloatingButton from '../../../components/navigation/FloatingButton/FloatingButton';
import RecipeListPageStyles from './RecipeListPage.styles';
import RecipeCard from '../RecipeCard/RecipeCard';

function RecipeListPage() {
  const navigate = useNavigate();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  const handleNewRecipe = () => navigate('/recipes/new');

  return (
    <RecipeListPageStyles>
      {recipes.map(recipe => <RecipeCard key={recipe.name} recipe={recipe} />)}
      <FloatingButton handleClickEvent={handleNewRecipe}><RiAddFill /></FloatingButton>
    </RecipeListPageStyles>
  );
}

export default RecipeListPage;