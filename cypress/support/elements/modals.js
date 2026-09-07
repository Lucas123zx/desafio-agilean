export const modalRegisterElements = {
  btnAbaRegister: '[data-cy="aba-cadastrar"]',    
  inpEmail: '[data-cy="input-email-cadastro"]',
  inpPassword: '[data-cy="input-senha-cadastro"]',
  bntRegister: '[data-cy="btn-cadastrar"]',
  pErrorRegister: '[data-cy="auth-erro"]'
};

export const modalLoginElements = {
  btnAbaEnter: '[data-cy="aba-entrar"]',
  btnAbaRegister: '[data-cy="aba-cadastrar"]',
  inpEmail: '[data-cy="input-email-login"]',
  inpPassword: '[data-cy="input-senha-login"]',
  btnEnter: '[data-cy="btn-entrar"]',
  pErrorLogin: '[data-cy="auth-erro"]'
};

export const modalActivityElements = {
  divModalActivity: '[data-cy="modal-atividade"]',
  btnCloseModalActivity: '[data-cy="modal-atividade-btn-fechar"]',
  slcStatusActivity: '[data-cy="modal-atividade-status"]',
  slcPriorityActivity: '[data-cy="modal-atividade-prioridade"]',
  inpNameActivity: '[data-cy="modal-atividade-nome"]',
  slcResponsabilityActivity: '[data-cy="modal-atividade-responsavel"]',
  btnAddResponsabilityActivity: '[data-cy="modal-atividade-btn-novo-responsavel"]',
  inpTermActivity: '[data-cy="modal-atividade-prazo"]',
  btnCancelActivity: '[data-cy="modal-atividade-btn-cancelar"]',
  btnRegisterActivity: '[data-cy="modal-atividade-btn-salvar"]',
  pErroNameActivity: '[data-cy="modal-atividade-erro-nome"]',
  pErroReponsabilityActivity: '[data-cy="modal-atividade-erro-responsavel"]',
  pErroTermActivity: '[data-cy="modal-atividade-erro-prazo"]',
  pCountActivity: '[data-cy="modal-atividade-contador"]'
};

export const modalResponsabilityElements = {
  divModalResponsability: '[data-cy="modal-responsavel"]',
  btnCloseModalResponsability: '[data-cy="modal-responsavel-btn-fechar"]',
  inpNameResponsability: '[data-cy="modal-responsavel-nome"]',
  inpEmailResponsability: '[data-cy="modal-responsavel-email"]',
  inpPhoneResponsability: '[data-cy="modal-responsavel-telefone"]',
  btnCancelResponsability: '[data-cy="modal-responsavel-btn-cancelar"]', 
  btnSaveResponsability: '[data-cy="modal-responsavel-btn-salvar"]',
  pErrorEmailResponsability: '[data-cy="modal-responsavel-erro-email"]',
  pErrorNameResponsability: '[data-cy="modal-responsavel-erro-nome"]',
  pErrorPhoneResponsability: '[data-cy="modal-responsavel-erro-telefone"]'
};

export const modalRejectElements = {
  divModalReject: '[data-cy="modal-rejeicao"]',
  bntCloseModalReject: '[data-cy="modal-rejeicao-btn-fechar"]',
  txtMotionReject: '[data-cy="modal-rejeicao-motivo"]', 
  btnCancelReject: '[data-cy="modal-rejeicao-btn-cancelar"]',
  btnConfirmReject: '[data-cy="modal-rejeicao-btn-confirmar"]',
  pErrorMotionReject: '[data-cy="modal-rejeicao-erro"]'
};

export const modalActions = {
  btnEditActivity: '[data-cy="atividade-200-btn-editar"]',
  btnDuplicatedActivity: '[data-cy="atividade-200-btn-duplicar"]',
  btnDeleteActivity: '[data-cy="atividade-200-btn-excluir"]'
};