/* Santiago Peñuela Arcila - 31/07/2015 
Evento Trigger que se ejecuta en la línea de tiempo principal de "_edgeActions.js" bajo el nombre "enviar"
Función: recibe "evt" - evento que se ejecuta en "_edgeActions.js".
Llama, mediante ajax, el archivo html para incrustarlo en el símbolo dentro del Edge, pues se creó un archivo nuevo (html)
que se encarga de tener todas las acciones ".sortable" de jQuery UI y parametrización del "config.json".
Posteriormente, llama el "config.json" para poblar la lista "ul#list_sort" con las palabras al azar, modificadas para
que no siempre se muestren en el órden correcto. Al finalizar, le da el evento jQuery UI "sortable", para que los
elementos de la lista se pueda arrastrar y acomodar cuando se suelta en algún lugar de la lista misma, además 
guarda el "config.json" dentro de el simbolo principal y la cantidad de intentos con la que inicia el usuario. */

function EDGE_Recurso_Submit(sym)
{
    $('body').trigger({
            type: 'EDGE_Recurso_Submit',
            sym: sym
         });
}

$('body').on('EDGE_Recurso_Submit', function(evt) {
    do_submit(evt.sym);
});

function do_submit(sym) {

    var stage = $(sym.getComposition().getStage().ele);
    var retorno_datos = {};
    retorno_datos.user_answer = [];
    retorno_datos.position_which_is_right = [];
    var json_content = stage.prop('ed_json_property_object');
    retorno_datos.attempts_to = stage.prop('ed_user_attempts');

    if (stage.prop('ed_blocked')) {
        return;
    }
    $("ul#list_sort li").each(function(index) {
        retorno_datos.user_answer[index] = $(this).html();
        if ($(this).html() == json_content.words[index].word)
        {
            retorno_datos.position_which_is_right[index] = true;
            retorno_datos.final_stage = "correct";
        } else {
            //No debe sumar puntos si su respuesta es incorrecta
            retorno_datos.position_which_is_right[index] = false;
            retorno_datos.final_stage = "incorrect";
        }
    });
    
    console.log(retorno_datos);

    var ed_obj_evt = 
    {
        type: "EDGE_Plantilla_submitApplied",
        interactionType: "fill-in",
        json: json_content,
        answer: retorno_datos.user_answer,
        results: retorno_datos.final_stage,
        position_which_is_right: retorno_datos.position_which_is_right,
        attempts: retorno_datos.attempts_to,
        attempts_limit: retorno_datos.json_content.attempts,
        sym: sym,
        identify: stage.prop("ed_identify")
    };
    $('body').trigger(ed_obj_evt);

    return retorno_datos;

    /*$('body').trigger({
        type: "Edge_Plantilla_Retroalimentacion",
        ans: check_order(),
        activity: "sort_1",
        sym: evt.sym
    });*/
}


function ed_send_data(sym)
{
    var position_array = [];
    var j, temp;

    $.ajax({
        url: "index.html",
        success: function(result) {
            sym.$('contenedor_padre').html(result);
            $.getJSON('config.json', function(json_content) {
                $.each(json_content.words, function(pos, json_word) {
                    position_array[pos] = json_word.word;
                });
                for (var i = position_array.length - 1; i >= 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    temp = position_array[i];
                    position_array[i] = position_array[j];
                    position_array[j] = temp;
                    $("ul#list_sort li:nth-child(" + (i + 1) + ")", sym.$('contenedor_padre')).css(json_content.css_config);
                    $("ul#list_sort li:nth-child(" + (i + 1) + ")", sym.$('contenedor_padre')).html(position_array[i]);
                }
                $("ul#list_sort", sym.$('contenedor_padre')).sortable();
                var stage = $(sym.getComposition().getStage().ele);
                stage.prop('ed_json_property_object', json_content);
                stage.prop('ed_user_attempts',json_content.attempts);
            });
        }
    });
}

$('body').on("EDGE_Plantilla_creationComplete", function(evt) {

    $('body').trigger({
        type: "EDGE_Recurso_sendPreviousData",
        block: false,
        previous_data: ["value_2", "value_1_2", "ok"],
        attempts: 2,
        sym: evt.sym,
        identify: {}
    });
});

$('body').on('EDGE_Recurso_sendPreviousData EDGE_Recurso_postSubmitApplied', function(evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    var json_content = stage.prop('ed_json_property_object');

    if (typeof(evt.previous_data) != "undefined") { // Falta respuestas del usuario.
        //console.log(evt.previous_data);
        /*for (var i = evt.previous_data.length - 1; i >= 0; i--) {
            evt.sym.$('text_' + (i + 1)).find('select option[value=' + evt.previous_data[i] + ']').attr('selected', 'selected');
        };*/
    }

    if (evt.block) {
        //Debe bloquear la actividad
        stage.prop('ed_blocked', true);
        $('#block_it').show();
    } else {
        //nada
    }

    if (typeof(evt.attempts) != "undefined") {
        stage.prop('ed_attempts', evt.attempts);
    }

    if (evt.reset)
    {
        var position_array = [];
        var j, temp;

        $.each(json_content.words, function(pos, json_word) {
            position_array[pos] = json_word.word;
        });

        for (var i = position_array.length - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = position_array[i];
            position_array[i] = position_array[j];
            position_array[j] = temp;
            $("ul#list_sort li:nth-child(" + (i + 1) + ")", sym.$('contenedor_padre')).html(position_array[i]);
        }
    }

    if(evt.show_answers)
    {
        $("ul#list_sort li", evt.sym.$('contenedor_padre')).each(function(index) {
            $(this).html(json_content.words[index].word);
        });
    }
});