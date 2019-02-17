/**
 * 
 * @class Note
 */
class Note {

    /**
     *Creates an instance of Note.
     * @param {*} title
     * @param {*} content
     * @param {*} order
     * @param {*} color
     * @memberof Note
     */
    constructor(title,content,order,color){  
        this.id = Date.now();
        this.title = title;
        this.content = content;
        this.order = order;
        this.color = color;
    }   

}