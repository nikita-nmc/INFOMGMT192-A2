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

