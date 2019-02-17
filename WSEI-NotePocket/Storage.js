/**
 * 
 * @class Storage
 */
class Storage {
    constructor() {
        
    }

    /**
     * 
     * @param {*} id
     * @param {*} note
     * @memberof Storage
     */
    saveInLocal(id, note) {
       localStorage.setItem(id, JSON.stringify(note));
    }



    /**
     *
     * @param {*} id
     * @returns
     * @memberof Storage
     */
    getFromLocal(id) {
        return JSON.parse(localStorage.getItem(id));
    }

    /**
     *
     * @param {*} id
     * @memberof Storage
     */
    display(id) {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.style.background = this.getFromLocal(id).color;
        noteDiv.innerHTML = this.getFromLocal(id).title;

        let noteDesc = document.createElement("div");
        noteDesc.className = "noteDesc";
        noteDiv.appendChild(noteDesc);
        noteDesc.innerHTML = this.getFromLocal(id).content;

   
        document.querySelector("#content").appendChild(noteDiv);  // = "<div class=\"note\" style=\"background-color: "+this.getFromLocal(id).color+"\">"+ this.getFromLocal(id).content +"</div>";

    }
}