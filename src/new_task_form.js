import "./task-form.css"
import "./common.js"

function createNewTaskForm(){

  let form_dialog, form, btn_sumbit;

  form_dialog = document.createElement('dialog');
  form_dialog.setAttribute('id', "task-form-dialog");
  form = document.createElement('form');
  form.setAttribute("method", "dialog");

  form.appendChild(createTextFormFields('title', "Task Title"));
  form.appendChild(createTextFormFields('description', "Task Description"));
  form.appendChild(createDateFormField('date', "Due Date", "date"));
  form.appendChild(createRadioFormFields('priority', "Priority"));

  btn_sumbit = document.createElement("button");
  btn_sumbit.setAttribute('id', "task-submit");
  btn_sumbit.innerHTML = "Create Task";

  form.appendChild(btn_sumbit);
  form_dialog.appendChild(form);

  return form_dialog;
}

function createTextFormFields(input, label){

  let form_field_div, form_field, form_label;

  form_field_div = document.createElement('div');
  form_field = document.createElement("input");
  form_label = document.createElement('label');
  form_field.type = "text"
  form_field.setAttribute('id', `${input}`);
  form_label.setAttribute("for", `${input}`)
  form_label.innerHTML = label
  form_field_div.appendChild(form_label);
  form_field_div.appendChild(form_field);

  return form_field_div;
}

function createDateFormField() {
    
  let form_field, form_label, date_fields, date_components;

  date_components = ["d","m","y"]

  form_field = document.createElement('div');
  date_fields = document.createElement("span");
  form_field.setAttribute("class","date");
  form_label = document.createElement("label");
  form_label.setAttribute("for","date")
  form_label.innerHTML = "Due Date"

  form_field.appendChild(form_label);

  for(let i = 0; i< date_components.length; i++){
    let input_el = document.createElement("input");
    input_el.setAttribute("id",`${(date_components[i]).repeat(2)}`);
    input_el.type = "numeric";
    input_el.placeholder = `${(date_components[i]).toUpperCase().repeat(2)}`;
    form_field.appendChild(input_el)
  }

  form_field.appendChild(date_fields)

  return form_field
}
  
function createRadioFormFields(){
  let form_field, form_label, prios;

  form_field = document.createElement("div")
  prios = ["low", "medium", "high"];

  form_label = document.createElement("label");
  form_label.setAttribute("for","priority");
  form_label.innerHTML = "Priority";
  form_field.appendChild(form_label);

  for(let i = 0; i< prios.length; i++){
    let input_el = `<input type="radio" id=${prios[i]} value=${prios[i]} name=priority `
    if (prios[i]=="low"){
      input_el += `checked`;
    }
    input_el += `>`+ `${prios[i].capitalize()}`;
    form_field.innerHTML += (input_el);
  }
  
  return form_field;
}

export {createNewTaskForm}