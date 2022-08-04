//註冊
const signUpEmail = document.querySelector('#signUpEmail');
const signUpPassword = document.querySelector('#signUpPassword');
const submitBtnSignUp = document.querySelector('#submitBtnSignUp');
submitBtnSignUp.addEventListener(('click'),(e) => {
	callSingUp();
})

function callSingUp(){
	if(signUpEmail.value.trim()=="" || signUpPassword.value.trim()==""){
		alert("請輸入正確資料");
		return;
	}
	let obj = {};
	obj.email = signUpEmail.value.trim();
	obj.password = signUpPassword.value.trim();

	axios.post('https://hexschool-tutorial.herokuapp.com/api/signup',obj)
	.then(function (response) {
		if(response.data.message=="帳號註冊成功"){
			alert("恭喜帳號註冊成功")
		}else{
			alert("帳號註冊失敗，請重新輸入")
		}
		signUpEmail.value="";
		signUpPassword.value="";
	})
	.catch(function (error) {
		console.log(error);
	});
}

//登入
const signInEmail = document.querySelector('#signInEmail');
const signInPassword = document.querySelector('#signInPassword');
const submitBtnSignIn = document.querySelector('#submitBtnSignIn');
submitBtnSignIn.addEventListener(('click'),(e) => {
	callSingIn();
})

function callSingIn(){
	if(signInEmail.value.trim()=="" || signInPassword.value.trim()==""){
		alert("請輸入正確資料");
		return;
	}
	let obj= {};
	obj.email= signInEmail.value.trim();
	obj.password = signInPassword.value.trim();	

axios.post('https://hexschool-tutorial.herokuapp.com/api/signin',obj)
	.then(function (response) {
		if(response.data.message=="登入成功"){
			alert("恭喜登入成功")
		}else{
			alert("登入失敗，請重新輸入")
		}
		signInEmail.value="";
		signInPassword.value="";
	})
	.catch(function (error) {
		console.log(error);
	});
}

$(document).ready(function () {
	$('.newAccount').click(function (e) { 
		e.preventDefault();
		$('.signInForm').toggle();
		$('.signUpForm').show();
	});
	$('.back').click(function (e) {
		e.preventDefault();
		$('.signUpForm').toggle();
		$('.signInForm').show();
	});
});