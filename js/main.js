const app  = {
    item :  {
        name: undefined,
        comment: undefined
    },
    init : function () {
        app.item.name =   $('#nombre');
		app.item.comment =   $('#comentarios');
		app.limpiaComentario();
        app.setup ();
    },

    setup: function () {
        $('#btnGuardar').click (app.agregaComentario);
		$('#btnLimpiar').click (app.limpiaComentario);
    },

    agregaComentario: function () {
		localStorage.setItem(app.item.name.val(), app.item.comment.val());
		$('#addComentario').append ( `<p> ${app.item.name.val()} </p>\
		                             <p>  ${app.item.comment.val()} </p>`);
		
	},
	mostrar: function(){
		for(var i=0 ; i<localStorage.length ; i++)
		{
			let clave = localStorage.key(i);
			let value = localStorage.getItem(nombre);
			$('#addComentario').append(`<p> ${clave} </p>\
			                            <p>  ${value} </p>`);
		}
	},
    limpiaComentario: function () {
        localStorage.clear();
    }
};
$(document).ready ( app.init );


