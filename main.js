$(document).ready(function(){
$('form').on('submit',function(e){
    e.preventDefault();
const Tarefa = $('#tarefa').val();
const novaTarefa =$('<li></li>');
$(`<div class="lista"> ${Tarefa} </div>`).appendTo(novaTarefa);
$(novaTarefa).appendTo("ul");
$(novaTarefa).val('');
})
$('.lista').click(function() {
    $(this).css('text-decoration', 'line-through');
})
})
