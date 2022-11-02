class ImportApi {
    #IMP = null;

    constructor() {
        this.#IMP = window.IMP;
        this.#IMP.init("imp14519436");
        this.addPaymentEvent();
    }
    
    addPaymentEvent() {
        document.querySelector(".payment-button").onclick = () => {
            this.requestPay();
        }
    }

    requestPay() {
        const pdtName = document.querySelector(".product-name").textContent;
        const pdtPrice = document.querySelector(".product-price").textContent;
        const email = document.querySelector(".principal-email").value;
        const name = document.querySelector(".principal-name").value;
        const zoneCode = document.querySelector(".address-zonecode").value;
        const addressAll = document.querySelector(".address-all").value;
        const addressDetail = document.querySelector(".address-detail").value;
        const address = addressAll + " " + addressDetail;
        const phone = document.querySelector(".phone-number").value;

        // IMP.request_pay(param, callback) 결제창 호출
        IMP.request_pay({ // param
            pg: "kakaopay",
            pay_method: "card",
            merchant_uid: "PRODUCT-" + new Date().getTime(),
            name: pdtName,
            amount: pdtPrice,
            buyer_email: email,
            buyer_name: name,
            buyer_tel: phone,
            buyer_addr: address,
            buyer_postcode: zoneCode
        }, function (rsp) { // callback
            if (rsp.success) {

            } else {

            }

        });
    }

}


window.onload = () => {
    AddressApi.getInstance().addAddressButtonEvent();
    new ImportApi();
}