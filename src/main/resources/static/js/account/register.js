const registerButton = document.querySelector(".account-button");

registerButton.onclick = () => {
    const accountInputs = document.querySelectorAll(".account-input");
    
    let user = {
        lastName: accountInputs[0].value,
        firstName: accountInputs[1].value,
        email: accountInputs[2].value,
        password: accountInputs[3].value
    }

    //JSON.stringify()  ->  js 객체를 JSON문자열로 변환
    //JSON.parse()      ->  JSON문자열을 js 객체로 변환
    $.ajax({
        async: false,                       //필수
        type: "post",                       //필수
        url: "/api/account/register",       //필수
        contentType: "application/json",    //전송할 데이터가 json인 경우
        data: JSON.stringify(user),         //전송할 데이터가 있으면
        dataType: "json",                   //json외 text 등을 사용할 수 있지만 json 사용함
        success: (response) => {              //성공시에 실행될 메소드
            alert("회원가입 요청 성공");
            console.log(response);
        },
        error: (error) => {                 //실패시에 실행될 메소드
            alert("회원가입 요청 실패");
            console.log(error.responseJSON);

        }
    });
}