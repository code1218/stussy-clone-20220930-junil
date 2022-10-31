class ProductApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ProductApi();
        }
        return this.#instance;
    }

    getProductData() {
        let responseData = null;
        const url = location.href;
        const pdtId = url.substring(url.lastIndexOf("/") + 1);

        $.ajax({
            async: false,
            type: "get",
            url: "/api/product/" + pdtId,
            dataType: "json",
            success: response => {
                responseData = response.data;
            },
            error: error => {
                console.log(error);
            }
        });

        return responseData;

    }
}

class ProductDetail {

    constructor() {
        const responseData = ProductApi.getInstance().getProductData();
        this.loadProductImgs(responseData);
        this.loadProductDetail(responseData);
        this.loadProductColors(responseData);
        this.loadProductSizes(responseData);
    }

    loadProductImgs(responseData) {
        const productImages = document.querySelector(".product-images");
        productImages.innerHTML = ``;

        responseData.pdtImgs.forEach(img => {
            productImages.innerHTML += `
                <div class="product-image">
                    <img src="/static/upload/product/${img}">
                </div>
            `;
        });
    }

    loadProductDetail(responseData) {
        document.querySelector(".product-title").textContent = responseData.pdtName;
        document.querySelector(".product-price").textContent = "\\" + responseData.pdtPrice;
        document.querySelector(".simple-info").innerHTML = responseData.pdtSimpleInfo;
        document.querySelector(".detail-info").innerHTML = `<strong>PRODUCT DETAILS</strong>
${responseData.pdtDetailInfo}`;
        document.querySelector(".option-info").innerHTML = responseData.pdtOptionInfo;
        document.querySelector(".management-info").innerHTML = responseData.pdtManagementInfo;
        document.querySelector(".shipping-info").innerHTML = responseData.pdtShippingInfo;
        
    }

    loadProductColors(responseData) {
        const productColors = document.querySelector(".product-colors");
        productColors.innerHTML = ``;

        Object.keys(responseData.pdtColors).forEach(color => {
            productColors.innerHTML += `<option value="${color}">${color}</option>`;
        });
    }

    loadProductSizes(responseData) {
        const productColors = document.querySelector(".product-colors");
        const productSizes = document.querySelector(".product-sizes");
        productSizes.innerHTML = "";
        Object.entries(responseData.pdtColors).forEach(entry => {
            if(productColors.value == entry[0]) {
                entry[1].forEach(value => {
                    productSizes.innerHTML += `
                        <input type="hidden" id="pdtDtlId" value="${value.pdtDtlId}">
                        <input type="radio" id="product-size-${value.sizeName}" class="product-size" name="pdtSize" value="${value.sizeId}" ${value.pdtStock == 0 ? 'disabled' : ''}>
                        <label for="product-size-${value.sizeName}" ${value.pdtStock == 0 ? 'class="no-stock"' : ''}>${value.sizeName}</label>
                    `;
                })
                
            }
        });

        this.addColorsSelectEvent(responseData);
    }

    addColorsSelectEvent(responseData) {
        const productColors = document.querySelector(".product-colors");
        productColors.onchange = () => {
            this.loadProductSizes(responseData);
        }
    }

}

window.onload = () => {
    new ProductDetail();
}