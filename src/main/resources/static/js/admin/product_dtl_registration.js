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

class ProductApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ProductApi();
        }
        return this.#instance;
    }

    registProductDtl(productDtlParams) {
        $.ajax({
            async: false,
            type: "post",
            url: "/api/admin/product/dtl",
            contentType: "application/json",
            data: JSON.stringify(productDtlParams),
            dataType: "json",
            success: (response) => {
                alert("추가 완료!");
                location.reload();
            },
            error: (error) => {
                console.log(error);
                alert(`상품 추가 실패.
${error.responseJSON.data.error}
                `)
            }
        })
    }

    registImgFiles(formData) {
        $.ajax({
            async: false,
            type: "post",
            url: "/api/admin/product/img",
            enctype: "multipart/form-data",
            contentType: false,
            processData: false,
            data: formData,
            dataType: "json",
            success: (response) => {
                alert("이미지 등록 완료");
                location.reload();
            },
            error: (error) => {
                console.log(error);
            }
        });
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

    constructor() {
        this.setProductMstSelectOptions();
        this.addSubmitEvent();
    }

    setProductMstSelectOptions() {
        const pdtMstSelect = document.querySelector(".product-select");
        const responseData = CommonApi.getInstance().getProductMstList();
        if(responseData != null) {
            if(responseData.length > 0) {
                responseData.forEach(product => {
                    console.log(product)
                    pdtMstSelect.innerHTML += `
                        <option value="${product.pdtId}">(${product.category})${product.pdtName}</option>
                    `;
                });
                this.addMstSelectEvent();
            }
        }

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

    addSubmitEvent() {
        const registButton = document.querySelectorAll(".regist-button")[0];
        registButton.onclick = () => {
            const productDtlParams = {
                "pdtId": document.querySelector(".product-select").value,
                "pdtSize": document.querySelector(".product-size").value,
                "pdtColor": document.querySelector(".product-color").value,
                "pdtStock": document.querySelector(".product-stock").value
            }
            ProductApi.getInstance().registProductDtl(productDtlParams);
        }
    }
}

class ProductImgFile {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ProductImgFile();
        }
        return this.#instance;
    }

    newImgList = new Array();

    constructor() {
        this.addFileInputEvent();
        this.addUploadEvent();
    }

    addUploadEvent() {
        const uploadButton = document.querySelector(".upload-button");
        uploadButton.onclick = () => {
            const formData = new FormData();

            const productId = document.querySelector(".product-select").value;
            formData.append("pdtId", productId);

            this.newImgList.forEach(imgFile => {
                formData.append("files", imgFile);
            });

            ProductApi.getInstance().registImgFiles(formData);
            
        }
    }

    addFileInputEvent() {
        const filesInput = document.querySelector(".files-input");
        const imgAddButton = document.querySelector(".img-add-button");
        imgAddButton.onclick = () => {
            filesInput.click();
        }

        filesInput.onchange = () => {
            const formData = new FormData(document.querySelector("form"));

            let changeFlag = false;

            formData.forEach(value => {
                if(value.size != 0) {
                    this.newImgList.push(value);
                    changeFlag = true;
                }
            })

            if(changeFlag) {
                this.loadImgs();
                filesInput.value = null;
            }

        }
    }

    loadImgs() {
        const fileList = document.querySelector(".file-list");
        fileList.innerHTML = "";

        this.newImgList.forEach((imgFile, i) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                fileList.innerHTML += `
                    <li class="file-info">
                        <div class="file-img">
                            <img src="${e.target.result}">
                        </div>
                        <div class="file-name">${imgFile.name}</div>
                        <button type="button" class="btn delete-button">삭제</button>
                    </li>
                `;
            }

            setTimeout(() => {
                reader.readAsDataURL(imgFile);
            }, i * 300);

        });

        setTimeout(() => {
            this.addDeleteEvent();
        }, this.newImgList.length * 300);

        
    }

    addDeleteEvent() {
        const deleteButtons = document.querySelectorAll(".delete-button");

        deleteButtons.forEach((deleteButton, i) => {
            deleteButton.onclick = () => {
                if(confirm("상품을 지우시겠습니까?")) {
                    this.newImgList.splice(i, 1);
                    this.loadImgs();
                }
            }
        });
    }

    
}



window.onload = () => {
    ProductImgFile.getInstance();
    Option.getInstance();
}