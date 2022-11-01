class AddressApi {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AddressApi();
        }

        return this.#instance;
    }

    #daumApi = null;
    constructor() {
        this.#daumApi = new daum.Postcode({
            oncomplete: function(data) {
                const addressZonecode = document.querySelector(".address-zonecode");
                const addressSido = document.querySelector(".address-sido");
                const addressSigungu = document.querySelector(".address-sigungu");
                const addressAll = document.querySelector(".address-all");

                addressZonecode.value = data.zonecode;
                addressSido.value = data.sido;
                addressSigungu.value = data.sigungu;
                addressAll.value = data.address + `${data.buildingName != "" ? "(" + data.buildingName + ")" : ""}`;
            }
        });
    }

    addAddressButtonEvent() {
        document.querySelector(".address-button").onclick = () => {
            this.#daumApi.open();
        }
    }
}
