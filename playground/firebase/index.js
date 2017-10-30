import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDTwxbkFHX2XoMXaZoAaXs544_LVjuNz0Y",
  authDomain: "mead-todo-app-c9fe3.firebaseapp.com",
  databaseURL: "https://mead-todo-app-c9fe3.firebaseio.com",
  projectId: "mead-todo-app-c9fe3",
  storageBucket: "mead-todo-app-c9fe3.appspot.com",
  messagingSenderId: "593526538713"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref();

dbRef.set({appName : 'Todo App'});

dbRef.set({ appName : 'Todo App', status : 'runnig'});

dbRef.set(
  {
    app : {
      name : 'Todo App',
      version : '1.0.0'
    },
    status : 'runnig',
    user : {
      name : 'Danuka',
      age : '32'
    }
  }).then(()=>{
    console.log('It worked');
  },(e)=> {
    console.log('it didnt work '+ e);
  });

dbRef.child('user').set({
      name : 'Danuka',
      age : '37'
}).then(()=>{
  console.log('It worked');
},(e)=> {
  console.log('it didnt work '+ e);
});

// ----------------------------array handling -----------------------------------

/*notes : [ -> {
  id : {
    <-id : 123,
    node : 'note 1'
  }
  ,
  id : {
    <-id : 1234,
    note : 'note 2'
  }
] -> }

*/


var noteRef = dbRef.child('notes');

noteRef.push({
  note: 'cancle the order1'
}
);

noteRef.push({
  note: 'cancle the order2'
}
);

noteRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

noteRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

noteRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});


var todosRef = dbRef.child('todos');

todosRef.push({
  text : 'clean the pool'
});

todosRef.push({
  text : 'clean the garden'
});

todosRef.on('child_added', (snapshot) => {
  console.log('todo_added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('todo_changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('todo_removed', snapshot.key, snapshot.val());
});




//-----------------------------retreive date ------------------------------------
/*dbRef.once('value').then((snapshot)=>{
  console.log('retrive entire database', snapshot.val());
}, (e) => {
  console.log('There has been a error when retreving data', e);
});


var logDate = (snapshot) => {
  console.log('retrive entire database', snapshot.key, snapshot.val());
}

dbRef.child('user').on('value', logDate);
// updating app name and version.
dbRef.update({
  app : {
    name : 'ToDo Application',
    version : '2.0.0'
  }
}).then(()=>{
  console.log('Updated version');
},(e)=>{
  console.log('error when updating', e);
});
//updating user and on should be called.
dbRef.update({
  user : {
    name : 'Danuka Wijetunge',
    age : '15'
  }
}).then(()=>{
  console.log('Updated nae/age');
},(e)=>{
  console.log('error when updating', e);
})
*/


//---------------------------- update to firebase -------------------------------
/*
dbRef.update({
  'app/name':'ToDo Application',
  'user/name':'Danuka Wijetunge'
}).then(()=>{
  console.log('It updated only name');
},(e)=>{
  console.log('It didnt work as expected' + e);
});
*/
//----------------------------- remove from firebase -----------------------------
/*dbRef.remove().then(()=>{
  console.log("Whole db was droped");
}, (e)=>{
  console.log("removing db was interrupted");
});*/

/*dbRef.child('app/name').remove().then(()=>{
  console.log('app/name removed successfully');
}, () => {
  console.log('app/name interrupted');
});

dbRef.child('app').update({
  name : null,
  version : '2.0.0'
}).then(()=>{
  console.log('only name was removed');
}, ()=>{
  console.log('interrupted');
});

*/
