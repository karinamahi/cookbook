declare var require:any

import axios from 'axios';
import Recipe from '../models/Recipe'


export class RecipeStore {

    constructor(){
        console.log('Starting RecipeStore ...');
    }

    find(id: String){
        return new Promise((resolve, reject) => {

            axios.get(`/recipe/${id}`)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
        })
    }

    save(recipe: Recipe){
        return new Promise((reject, resolve) => {
            axios.post(`/recipe`, recipe)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error);
            });
        })
    }
}