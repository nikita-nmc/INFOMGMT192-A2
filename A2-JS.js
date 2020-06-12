function toggle(id, ele) {
    let cont = document.getElementById(id);         //fetch the specific html element to work with
    if (cont.style.visibility == 'visible') {       //check whether it is already visible or hidden and flip
        cont.style.visibility = 'hidden';
        document.getElementById(ele.id).innerText = 'Show More';
    }
    else {
        cont.style.visibility = 'visible';
        document.getElementById(ele.id).innerText = 'Show Less';
    }
}

$(document).ready(function(){
    $("#myInput").on("keyup", function() {          //when the user stops typing in search field, perform function
        let exchanges = $("#exchanges li");
        let value = $(this).val().toLowerCase().trim();
        for (let li of exchanges) {                //loops through the list items of the list of exchanges and hides all
            let exchange = $(li);
            exchange.hide();
        }
        for (let li of exchanges) {
            let toView = $(li);
            if (toView.text().toLowerCase().includes(value)) {  //if an element matches the search query, un-hide it
                toView.show();
            }
        }
        });
    });
