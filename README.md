# Update Button Flow.

Added the update definition inside todoSlice.js file and update functionality inside the Todos component.

First i have created local state for editingId and updateText.
inside HTML code there's a simple if else condition , 
if the editingId=== todo.id then, it'll show an input box,save and cancel buttons.
else it'll only show the todo which you'll see at first because editingId is null by default.

when you click the update button it'll call setEditingId method which sets editingId = todo.id.

now when you type something inside input and click save button a function is called handleSave that 
dispatches the todo to the updateTodo method/reducer in todoSlice.js .
finally the editingId is again set to null.


 
 
