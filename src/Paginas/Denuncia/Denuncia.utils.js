export function validarFormulario(form) {
  const erros = {};
  if (!form.category) erros.category = 'Selecione uma categoria.';
  if (!form.location) erros.location = 'Informe o local.';
  if (!form.description || form.description.trim().length < 20) {
    erros.description = 'Descreva com pelo menos 20 caracteres.';
  }
  return erros;
}
