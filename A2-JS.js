function toggle(id, ele) {
    let cont = document.getElementById(id);
    if (cont.style.visibility == 'visible') {
        cont.style.visibility = 'hidden';

        document.getElementById(ele.id).innerText = 'Show More';
    }
    else {
        cont.style.visibility = 'visible';
        document.getElementById(ele.id).innerText = 'Show Less';
    }
}

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#exchanges li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});