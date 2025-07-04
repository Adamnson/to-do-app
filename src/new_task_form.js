
function createNewTaskForm(){

  let form_dialog = document.createElement('dialog');
  form_dialog.setAttribute('id', "task-form-dialog");
  let form = document.createElement('form');
  form.setAttribute("method", "dialog");

  form.appendChild(createFormFields('title', "Task Title"));
  form.appendChild(createFormFields('description', "Task Description"));
  form.appendChild(createFormFields('date', "Due Date"));
  form.appendChild(createFormFields('priority', "Priority"));

  let btn_sumbit = document.createElement("button");
  btn_sumbit.setAttribute('id', "task-submit");
  btn_sumbit.innerHTML = "Create Task";

  form.appendChild(btn_sumbit);

  form_dialog.appendChild(form);

  return form_dialog;
}

function createFormFields(input, label){

  let form_field_div = document.createElement('div');
  let form_field = document.createElement("input");
  let form_label = document.createElement('label');
  form_field.type = "text"
  form_field.setAttribute('id', `${input}`);
  form_label.setAttribute("for", `${input}`)
  form_label.innerHTML = label
  form_field_div.appendChild(form_label);
  form_field_div.appendChild(form_field);

  return form_field_div;
}

export {createNewTaskForm}