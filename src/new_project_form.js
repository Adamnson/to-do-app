import "./form_style.css"

function createNewProjectForm(){

  let form_dialog, form,form_field_div, form_field, form_label, btn_sumbit;

  form_dialog = document.createElement('dialog');
  form_dialog.setAttribute('id', "project-form-dialog");
  form = document.createElement('form');
  form.setAttribute("method", "dialog");
  form.setAttribute('id', 'project-form')

  form_field_div = document.createElement('div');
  form_field = document.createElement("input");
  form_field.type = "text"
  form_field.setAttribute('id', `project-name`);
  form_label = document.createElement('label');
  form_label.setAttribute("for", `project-name`);
  form_label.innerHTML = "Project Name"
  form_field_div.appendChild(form_label);
  form_field_div.appendChild(form_field);

  btn_sumbit = document.createElement("button");
  btn_sumbit.setAttribute('id', "project-submit");
  btn_sumbit.innerHTML = "Create Project"

  form.appendChild(form_field_div);
  form.appendChild(btn_sumbit);
  form_dialog.appendChild(form);

  return form_dialog;
}

export {createNewProjectForm}
