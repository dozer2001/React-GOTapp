export default class GotServices {
    constructor(){
        this._apiBase = "https://www.anapioficeandfire.com/api";
    }
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}`+
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters(){
        return this.getResource(`/characters?page=5&pageSize=10`);
    }
    getCharacter(id){
        return this.getResource(`/characters/${id}`);
    }
    getBook(id){
        return this.getResource(`/books/${id}`);
    }
    getHouse(id){
        return this.getResource(`/houses/${id}`);
    }
}
const get = new GotServices();
get.getAllCharacters()
    .then(res => console.log(res));
get.getCharacter(15)
    .then(res => console.log(res));
get.getBook(1)
    .then(res => console.log(res));
get.getHouse(4)
    .then(res => console.log(res));
