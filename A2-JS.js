function toggle(id, ele) {
    let cont = document.getElementById(id);
    if (cont.style.visibility == 'visible') {
        cont.style.visibility = 'hidden';

        document.getElementById(ele.id).value = 'Show More';
    }
    else {
        cont.style.visibility = 'visible';
        document.getElementById(ele.id).value = 'Show Less';
    }
}
/*
$('ul.expandible').each(function(){
    var $ul = $(this),
        $lis = $ul.find('li:gt(4)'),
        isExpanded = $ul.hasClass('expanded');
    $lis[isExpanded ? 'show' : 'hide']();

    if($lis.length > 0){
        $ul
            .append($('<li class="expand"><span>' + (isExpanded ? 'Less' : 'More') + '</span></li>')
                .click(function(event){
                    var isExpanded = $ul.hasClass('expanded');
                    event.preventDefault();
                    $(this).text(isExpanded ? 'More' : 'Less');
                    $ul.toggleClass('expanded');
                    $lis.toggle();
                }));
    }
});


/!*
var flag = false;

$(function () {
    if (flag == false) {
    //$('#myList li').slice(0, 0).show();
    $('#loadMore').on('click', function (e) {
        e.preventDefault();
        $('#myList li').slice(0, 5).slideDown();
        document.getElementById("loadMore").innerText = "See Less";
        flag = true;
    });
    }
    if (flag == true) {
        x = 0;
        $('#loadMore').on('click', function (e) {
        $('#myList li').slice(5,0).slideUp();
    });
        }
});*!/
*/
