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
    getBooks(){
        return this.getResource(`/books`);
    }
    getHouses(){
        return this.getResource(`/houses`);
    }
}
const get = new GotServices();
get.getAllCharacters()
    .then(res => console.log(res));
get.getCharacter(15)
    .then(res => console.log(res));
get.getBooks()
    .then(res => console.log(res));
get.getHouses(4)
    .then(res => console.log(res));
