import React, {useState, useEffect} from 'react';

export const LANG = { 
    en: {
      languajes : {
        en: 'english',
        es: 'spanish',
      },
      title: 'Recipe Search',
      search_placeholder: 'Type a recipe',
      search_btn: 'Search',
      helper_text_question: 'Do you have an idea for the kitchen?',
      helper_text_not_found: `sorry i can't find it in my kitchen`,
      helper_text: 'Let me help you',
      publisher: 'Publisher',
      website: 'Website',
      go_home: 'Go Home',
      source: 'Source',
      view_recipe_btn: 'View Recipe',
      loading_text: 'Cooking Recipes',
      calories: 'Calories',
      cautions: 'Cautions',
      healts: 'Healts',
      ingredients: 'Ingredients',
      weight: 'Weight',
    },
    es: {
      languajes : {
        en: 'inglés',
        es: 'español',
      },
      title: 'Buscador de recetas',
      search_placeholder: 'Escriba una receta',
      search_btn: 'Buscar',
      helper_text_question: '¿Tienes una idea para la cocina?',
      helper_text_not_found: `Lo siento, no lo encuentro en mi cocina`,
      helper_text: 'Déjame ayudarte',
      publisher: 'Editor',
      website: 'Sitio web',
      go_home: 'Regresar',
      source: 'Fuente',
      view_recipe_btn: 'Ver Receta',
      loading_text: 'Preparando Recetas',
      calories: 'Calorías',
      cautions: 'Precauciones',
      healts: 'Saludable',
      ingredients: 'Ingredientes',
      weight: 'Peso',
    },
  }

export const LangContext = React.createContext();

const LangProvider = (props) => {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('LANG') || 'en');

  useEffect(() => {
    localStorage.setItem('LANG', currentLang);
  }, [currentLang]);

  return (
    <LangContext.Provider value={{currentLang, setCurrentLang}}>
      {props.children}
    </LangContext.Provider>
  );
}


export default LangProvider;