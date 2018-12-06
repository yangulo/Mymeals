import {ADD_RECIPE, REMOVE_FROM_CALENDAR} from '../actions'
import { combineReducers } from 'redux'

const initialCalendarState = {
    sunday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    monday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    tuesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    wednesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    thursday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    friday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    saturday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
  }

const food = (state={}, action)=>{
    const {recipe} = action
    switch(action.type){
        case ADD_RECIPE:
        return {
            ...state,
            [recipe.label]: recipe
        }
        default:
            return state
    }
}
  
const calendar = (state=initialCalendarState, action)=>{
    const {day, recipe, meal} = action
    switch(action.type){
        case ADD_RECIPE:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: recipe.label
                }
            }
        case REMOVE_FROM_CALENDAR:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: null
                }
            }
        default:
            return state
    }
}

export default combineReducers({
    calendar,
    food
})