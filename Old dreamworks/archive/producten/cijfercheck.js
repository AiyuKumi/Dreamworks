
function CheckCijfers(field) {
	if (isNaN(field.value)) {
		field.value = "1";
	}
	if ((field.value)=="0") {
		field.value = "1";
	}
}
