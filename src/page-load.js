export const pageLoad = () => {
    const content = document.querySelector('.content');
      
    const logoText = document.createElement('h1');
    logoText.classList.add('logoText');
    logoText.textContent = "TO DO LIST";
    content.append(logoText);

    const section = document.createElement('div');
    section.classList.add("container");
    content.appendChild(section);

    const app = document.createElement('div');
    app.classList.add('app')


    

    const form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
    app.append(form);

    const task = document.createElement("input");
    task.setAttribute("type", "text");
    task.setAttribute("name", "Task");
    task.classList.add('input-type');
    task.setAttribute("placeholder", "ADD NEW TASK");
    task.classList.add("input-task")
    form.appendChild(task);

    const add = document.createElement("input");
    add.setAttribute("type", "submit");
    add.classList.add('input-button');
    add.setAttribute("value", "Add Task");
    form.appendChild(add)

    const ul = document.createElement("ul")
    app.append(ul)

    const li = document.createElement("li")
    ul.appendChild(li)

    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("name", "checkbox")
    checkbox.setAttribute("value", "Completed")
    li.appendChild(checkbox)

    section.appendChild(app);
}