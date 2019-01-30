export default class GotServices {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api";
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharater)
    };

    getCharacter = async (id) => {
        const charcter = await this.getResource(`/characters/${id}`);
        return this._transformCharater((charcter))
    };

    getAllBooks = async () => {
        const allbooks = await this.getResource(`/books`);
        return allbooks.map(this._transformCharater)
    };

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformCharater((book));
    };

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformCharater((house))
    };

    getAllHouses = async (id) => {
        const allhouse = await this.getResource(`/houses`);
        return allhouse.map(this._transformCharater)
    };

    noData = (data) => {
        if (data) {
            return data
        } else {
            return ' no data'
        }
    };

    itemKey = (item) => {
        const reg = /\/([0-9]*)$/;
        return item.url.match(reg)[1]
    };

    _transformCharater = (char) => {
        return {
            id: this.itemKey(char),
            name: this.noData(char.name),
            gender: this.noData(char.gender),
            born: this.noData(char.born),
            died: this.noData(char.died),
            culture: this.noData(char.culture),
        }


    }

    _transformHouse = (house) => {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlod: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    };

    _transformBook = (book) => {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }

}
