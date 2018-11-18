import axios from 'axios';
import { FETCH_DATA } from '../constants';


// function createActionCreator(type, mapper) {
//     const action = payload => {
//         type,
//         payload: mapper(payload)
//     }
//     action.type = type;
//     return action;
// }


// const selectData = createActionCreator("FETCH_DATA", ()=>   
//     `https://api.nasa.gov/planetary/apod?api_key=6RV51WKsd5CDQ5s2OTpI21KWqYPmbuNYQ1IW1NiN&date=${selectedDate}`)

export const selectData = selectedDate => {
    return {
        type: FETCH_DATA,
        payload: axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=6RV51WKsd5CDQ5s2OTpI21KWqYPmbuNYQ1IW1NiN&date=${selectedDate}`
        )
    }
}