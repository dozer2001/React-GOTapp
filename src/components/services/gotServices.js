export default class GotServices {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api";
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

  async  getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharater)
    }

   async getCharacter(id) {
       const charcter = await this.getResource(`/characters/${id}`);
       return this._transformCharater((charcter))
    }

   async getAllBooks() {
        const allbooks =  await this.getResource(`/books`);
        return allbooks.map(this._transformCharater)
    }

    async  getBook(id) {
        const book = await this.getResource(`/books/${id}`);
        return this._transformCharater((book));
    }

    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformCharater((house))
    }

    async getAllHouses() {
       const allhouse = await this.getResource(`/houses`);
       return allhouse.map(this._transformCharater)
    }

    _transformCharater(char) {
        return {
            url: char.url,
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,

        }
    }

    _transformHouse(house){
        return{
            name:house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlod: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook(book){
        return{
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }

}
