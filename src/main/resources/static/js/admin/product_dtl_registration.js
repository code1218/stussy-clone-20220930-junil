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

    getProductSizeList(productId) {
        let responseData = null;
        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/option/products/size/" + productId,
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

        this.addMstSelectEvent();
    }

    addMstSelectEvent() {
        const pdtMstSelect = document.querySelector(".product-select");
        pdtMstSelect.onchange = () => {
            this.setSizeSelectOptions(pdtMstSelect.value);
        }
    }

    setSizeSelectOptions(productId) {
        const pdtSizeSelect = document.querySelector(".product-size");
        pdtSizeSelect.innerHTML = "";
        CommonApi.getInstance().getProductSizeList(productId).forEach(size => {
            pdtSizeSelect.innerHTML += `
                <option value="${size.sizeId}">${size.sizeName}</option>
            `;
        })
    }
}

window.onload = () => {
    Option.getInstance().setProductMstSelectOptions();
}