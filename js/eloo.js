function score()
{

var q1 = document.forms.form.q1.value;
var q2 = document.forms.form.q2.value;
var q3 = document.forms.form.q3.value;
var q4 = document.forms.form.q4.value;
var q5 = document.forms.form.q5.value;

var questions = [q1, q2, q3, q4, q5];
var answers = ["Alcohol", "Co", "Hidrogeno acumulado", "calidad del aire", "monoxido de carbono, gases inflamables"];

var points = 0;
var total = 5;

	for(var i = 0; i < total; i++)
		{
			if (questions[i] === answers[i])
			 {
				points = points + 1;
				}
		}

var q = document.getElementById("rada");
q.style.fontSize = "40px";
q.style.textAlign = "center";
alert("Acertaste " + points + " de " + total); 



}
