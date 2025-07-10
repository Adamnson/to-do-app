import "./form_style.css"
import "./common.js"

function createNewTaskForm(){

  let form_dialog, form, btn_sumbit;

  form_dialog = document.createElement('dialog');
  form_dialog.setAttribute('id', "task-form-dialog");
  form = document.createElement('form');
  form.setAttribute("method", "dialog");
  form.setAttribute("id", "task-form")

  form.appendChild( createTextFormFields() );
  form.appendChild( createTextAreaFormFields() );
  form.appendChild( createDateFormField() );
  form.appendChild( createRadioFormFields() );

  btn_sumbit = document.createElement("button");
  btn_sumbit.setAttribute('id', "task-submit");
  btn_sumbit.innerHTML = "Create Task";

  form.appendChild(btn_sumbit);
  form_dialog.appendChild(form);

  return form_dialog;
}

function createTextFormFields(){

  let form_field_div, form_field, form_label;

  form_field_div = document.createElement('div');
  form_field = document.createElement("input");
  form_label = document.createElement('label');
  form_field.type = "text";
  form_field.setAttribute('id', `title`);
  form_label.setAttribute("for", `title`);
  form_label.innerHTML = "Task Title";
  form_field_div.appendChild(form_label);
  form_field_div.appendChild(form_field);

  return form_field_div;
}
function createTextAreaFormFields(){
  let form_field_div, form_field, form_label;

  form_field_div = document.createElement('div');
  form_field = document.createElement("textarea");
  form_label = document.createElement('label');
  form_field.setAttribute('id', `description`);
  form_label.setAttribute("for", `description`);
  form_label.innerHTML = "Task Description";
  form_field_div.appendChild(form_label);
  form_field_div.appendChild(form_field);

  return form_field_div;
}

function createDateFormField() {
    
  let form_field, form_label, date_components;

  date_components = ["d","m","y"]

  form_field = document.createElement('div');
  form_field.setAttribute("class","due-date");
  form_label = document.createElement("label");
  form_label.setAttribute("for","due-date")
  form_label.innerHTML = "Due Date"

  form_field.appendChild(form_label);

  for(let i = 0; i< date_components.length; i++){
    let input_el = document.createElement("input");
    input_el.setAttribute("id",`${(date_components[i]).repeat(2)}`);
    input_el.type = "numeric";
    input_el.placeholder = `${(date_components[i]).toUpperCase().repeat(2)}`;
    form_field.appendChild(input_el)
  }

  return form_field
}
  
function createRadioFormFields(){
  let form_field, form_label, prios;

  form_field = document.createElement("div");
  form_field.setAttribute("class", "prio-field")
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
    input_el += `>`+ `<p id=${prios[i]}-text>${prios[i].capitalize()}</p>`;
    form_field.innerHTML += (input_el);
  }
  
  return form_field;
}

export {createNewTaskForm}
