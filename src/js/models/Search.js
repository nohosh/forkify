import axios from 'axios';
 
export default class Search {
    constructor(query){
        this.query = query;
    }
    async getResults() {
        const key= 'd44e5ec08a0347b005f9d67a761ceb56';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch(error) {
            alert(error);
        }
    }
}



