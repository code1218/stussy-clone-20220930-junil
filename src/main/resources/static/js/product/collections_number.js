class CollectionsApi {
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new CollectionsApi();
        }
        return this.#instance;
    }

    getCollections(page) {
        let responseData = null;

        const url = location.href;
        const category = url.substring(url.lastIndexOf("/") + 1);

        $.ajax({
            async: false,
            type: "get",
            url: "/api/collections/" + category,
            data: {
                "page": page
            },
            dataType: "json",
            success: (response) => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });

        return responseData;

    }
}

class PageNumber {
    #page = 0;
    #totalCount = 0;

    constructor(page, totalCount) {
        this.#page = page;
        this.#totalCount = totalCount;
        loadPageNumbers();
    }

    loadPageNumbers() {
        this.createPreButton();
        this.createNumberButtons();
        this.createNextButton();
    }

    createPreButton() {

    }

    createNumberButtons() {

    }

    createNextButton() {

    }

}

class CollectionsService {
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new CollectionsService();
        }
        return this.#instance;
    }

    collectionsEntity = {
        page: 1,
        totalCount: 0
    }

    loadCollections() {
        const responseData = CollectionsApi.getInstance().getCollections(this.collectionsEntity.page);
        this.collectionsEntity.totalCount = responseData[0].productTotalCount;
        
    }

}

window.onload = () => {
    console.log();
}