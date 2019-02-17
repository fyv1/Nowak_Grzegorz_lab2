let storage = new Storage();
let length = storage.length;

/**
 * Takes values from form and puts as Note object in local storage
 *
 */
function addNote(){

    let title = document.querySelector('#title').value;
    let content = document.querySelector('#contentInput').value;
    let color = document.querySelector('#color').value;

    let note = new Note(title, content, length+1, color);
    
    storage.saveInLocal(note.id, note);
} 


for(let key in localStorage) { 
    storage.display(key); 
}

