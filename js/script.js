const form = document.querySelector('.form');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#r_password');

const nameCheck = document.querySelector('#name_check');
const ageCheck = document.querySelector('#age_check');
const emailCheck = document.querySelector('#email_check');
const passwordCheck = document.querySelector('#password_check');
const repeatPasswordCheck = document.querySelector('#r_password_check');

const checkContainers = document.querySelectorAll('.verify__container div');
//*previene el comportamiento por defecto del formulario
form.addEventListener('submit', (e) => verifyForm(e));

function verifyForm(event) {
	event.preventDefault();

	verifyChecks(name.value.trim() != '', nameCheck, 0, 'Falta el nombre');
	verifyChecks(
		age.value >= 18 && age.value <= 100,
		ageCheck,
		1,
		'No se aceptan menores de 18 años'
	);
	verifyChecks(
		email.value.includes('@'),
		emailCheck,
		2,
		"El email no incluye '@'"
	);
	verifyChecks(
		password.value.length >= 6,
		passwordCheck,
		3,
		'La contraseña debe ser mayor a 6 caracteres'
	);
	verifyChecks(
		repeatPassword.value === password.value &&
			repeatPassword.value.trim() != '',
		repeatPasswordCheck,
		4,
		'la contraseña y la confirmacion no son iguales'
	);
}
//funcion para verificar los campos del form, usando los checks
function verifyChecks(condition, nameCheck, position, messageError) {
	if (condition) {
		nameCheck.checked = true;
		checkContainers[position].classList.remove('invalid');
		checkContainers[position].classList.add('valid');
	} else {
		nameCheck.checked = false;
		checkContainers[position].classList.remove('valid');
		checkContainers[position].classList.add('invalid');
		console.log(messageError);
	}
}
