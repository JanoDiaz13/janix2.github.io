
function comprobar()
{
	var pregunta1= document.cuestionario.preg1.value;
	var pregunta2= document.cuestionario.preg2.value;
	var pregunta3= document.cuestionario.preg3.value;
	var contador= 0;

	if(pregunta1=="Arduino Uno")
	{
		contador= contador + 1;
	}
	if(pregunta2=="MQ3")
	{
		contador= contador + 1;
	}
	if(pregunta3=="0-50")
	{
		contador= contador + 1;
	}
switch(contador)
{
	case 0:
	$.Zebra_Dialog('<strong>INCORRECTO</strong>, ninguna pregunta correcta', {
    'type':     'error',
    'title':    'INCORRECTO'
});
	break;
case 1:
	$.Zebra_Dialog('<strong>BIEN</strong>, respondiste 1 pregunta correctamente', {
    'type':     'confirmation',
    'title':    'BIEN'
});
	break;
case 2:
	$.Zebra_Dialog('<strong>MUY BIEN</strong>, respondiste 2 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'MUY BIEN'
});
	break;
case 3:
	$.Zebra_Dialog('<strong>PERFECTO</strong>, respondiste 3 preguntas correctamente', {
    'type':     'confirmation',
    'title':    'PERFECTO'
});
	break;

}


}



