// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)







const app = Vue.createApp({
    data(){ //or function() 
  
        
       return {
            
            
           todos: [
            {
                text: "Comprare il latte",
                done: false,
            },
            {
                text: "Comprare i Pomodori",
                done: false,
            },
            {
                text: "Comprare le uova",
                done: false,
            },
            {
                text: "Esercitarmi sul codice",
                done: false,
            },
            {
                text: "Stirare i vestiti",
                done: false,
            },
            {
                text: "Comprare il latte",
                done: false,
            },
           ],

           newTodo: "",
           notdone: "notdone",
           done: "done",
       }
    },

    methods: {
        AddTodo(){
            
            if(this.newTodo.length >= 5){
                this.todos.unshift({
                    // CREO GLI OGGETTI DENTRO IL NEWTODO
                    text: this.newTodo,
                    done: false,
                })
                this.newTodo= " ";
                
            }

        },

        Done(i){
            this.todos[i].done = !this.todos[i].done;
        },
        RemoveToDo(i){
            this.todos.splice(i,1)
        },

        
    },
    
   });
   
   
   app.mount(`#app`);
