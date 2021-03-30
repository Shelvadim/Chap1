import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

axios.get(url).then(response=>{
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo=(id:number, title:string, completed:boolean)=>{
    console.log(`
        The todo with id:${id}
        Has a title:${title}
        Is it finished :${completed}
    `);
}

//  git init.
//git remote add origin https://github.com/apex-user/RepoName.git
//git add -A
//git commit -m "Message you would like to put"
//git push origin master