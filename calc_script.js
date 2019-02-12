function insert(num) {
    document.form.textview.value += num;
}

function result() {
    if(document.form.textview.value != "") {
        document.form.textview.value = eval(document.form.textview.value);
    }    
}

function clr() {
    document.form.textview.value = "";
}

function erase() {
    var num_clear = document.form.textview.value;
    document.form.textview.value = num_clear.substring(0, num_clear.length - 1);
}