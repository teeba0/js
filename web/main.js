var counter = 1;

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#submit').disabled = true;

    document.querySelector('#input_name').onkeyup = () => {
        if (document.querySelector('#input_name').value.length > 0)
            document.querySelector('#submit').disabled = false;
        else
            document.querySelector('#submit').disabled = true;
    };

    document.querySelector('#form').onsubmit = () => {

        let index = "<td>" + counter + "</td>"
        let name = "<td>" + document.querySelector('#input_name').value + "</td>"
        let availability = "<td>" + document.querySelector('#input_available').value + "</td>"

        let tr = "<tr>" + index + name + availability + "</tr>";

        document.querySelector("#table").innerHTML += tr;

        document.querySelector('#input_name').value = '';
        document.querySelector('#input_available').value = '';
        document.querySelector('#submit').disabled = true;

        counter++;
        return false;
    };

});