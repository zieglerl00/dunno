function ajaxCall() {

    let url = 'https://ziggy-todo.herokuapp.com/get_all/'

    $.ajax({

        url: url,
        type: 'GET',
        success: function (data) {
            console.log('Data: ' + data);
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });
}

$("#jstree").jstree({
    "core": {
        "themes": {
            "name": "proton",
            "dots": true,
            "icons": true,
            "responsive": true,
        }, 
        'data': [
            { "id": "ajson2", "parent": "#", "text": "Root" },
            { "id": "ajson3", "parent": "ajson2", "text": "Child 1" },
            { "id": "ajson4", "parent": "ajson2", "text": "Child 2" },
        ],
    },
    "plugins" : [
        "contextmenu",
        "dnd",
        "state",
        "types",
        "unique",
        "wholerow",
    ]
});
