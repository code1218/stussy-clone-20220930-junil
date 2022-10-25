class CommonApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new CommonApi();
        }
        return this.#instance;
    }
    
    getProductMstList() {
        let responseData = null;
        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/option/products/mst",
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

class Option {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new Option();
        }
        return this.#instance;
    }

    setProductMstSelectOptions() {
        const pdtMstSelect = document.querySelector(".product-select");
        CommonApi.getInstance().getProductMstList().forEach(product => {
            console.log(product)
            pdtMstSelect.innerHTML += `
                <option value="${product.pdtId}">(${product.category})${product.pdtName}</option>
            `;
        });
    }
}

window.onload = () => {
    Option.getInstance().setProductMstSelectOptions();
}