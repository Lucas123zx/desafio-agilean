import '../support/hooks/login-system';
import ModalResponsability from '../support/components/modal-responsability';
import { generateReponsability } from '../support/utils/gen-responsability';
import ModalActivity from '../support/components/modal-activity';
import HomePage from '../support/pages/home-page';
import { screenShot } from '../support/helpers/actions';

describe('Register responsability', () => {

  beforeEach('Modal register responsability is open', () => {
    HomePage.clickBtnRegisterActivity();
    ModalActivity.clickBtnAddReponsability();
  });

  afterEach('screenshot', () => {
    screenShot();
  });

  describe('Register resposability with "Success"', () => {

    it('CT[11] - Validar cadastro de responsável com dados válidos', () => {
      const responsability = generateReponsability();

      ModalResponsability.registerResponsability(responsability);

      ModalActivity.validateShowNameResponsability({ label: responsability.name });
    });

    it('CT[12] - Validar cadastro de responsável informando no campo "Nome" valor maior que 51 caracteres', () => {
      const responsability = generateReponsability();
      responsability.name = 'A'.repeat(51);

      ModalResponsability.registerResponsability(responsability);

      ModalActivity.validateShowNameResponsability({ label: responsability.name });
    });

    it('CT[13] - Validar cadastro de atividade informando no campo "Atividade" valor com 50 caracteres', () => {
      const responsability = generateReponsability();
      responsability.name = 'D'.repeat(50);

      ModalResponsability.registerResponsability(responsability);

      ModalActivity.validateShowNameResponsability({ label: responsability.name });
    });

    it('CT[14] - Validar cadastro de atividade informando no campo "Atividade" valor com 49 caracteres', () => {
      const responsability = generateReponsability();
      responsability.name = 'Z'.repeat(49);

      ModalResponsability.registerResponsability(responsability);

      ModalActivity.validateShowNameResponsability({ label: responsability.name });
    });
  
  });

  describe('Register resposability with "Error"', () => { 
    const msgEmailInvalid = 'E-mail inválido';

    it('CT[15] - Validar mensagem de "Email inválido" ao cadastrar responsável informando no campo "Email" email inválido', () => {
      const responsability = generateReponsability();
      responsability.email = 'teste@.com';

      ModalResponsability.registerResponsability(responsability);

      ModalResponsability.validateShowMensagenErrorEmail(msgEmailInvalid);
    });

    it('CT[16] - Validar mesagem de "Email inválido" ao cadastrar responsável informando no campo "Email" email com  "espaço"', () => {
      const responsability = generateReponsability();
      responsability.email = 'teste@ .com';

      ModalResponsability.registerResponsability(responsability);

      ModalResponsability.validateShowMensagenErrorEmail(msgEmailInvalid);
    });

    it('CT[17] - Validar mensagem de "Obrigatoriedade" ao cadastrar responsável sem informar campos obrigatórios', () => {
      const msgsErrors = {
        email: 'E-mail é obrigatório',
        name: 'Nome é obrigatório',
        phone: 'Telefone é obrigatório'
      };

      ModalResponsability.clickBtnSalve();

      ModalResponsability.validateShowMensagensError(msgsErrors);
    });

    it('CT[21] - Validar mensagem "Telefone inválido" ao cadastrar responsável informando "85" no campo telefone', () => {
      const responsabilities = generateReponsability();
      responsabilities.phone = '85';

      ModalResponsability.registerResponsability(responsabilities);

      ModalResponsability.validateShowMensagenErrorPhone('Telefone inválido');
    });

  });

  describe('Modal register responsability "interface"', () => { 

    it('CT[19] - Validar o cancelamento ao cadastrar Responsável', () => {
      const txt = 'Cadastrar Atividade';

      ModalResponsability.clickBtnCancelResponsability();

      ModalActivity.validateShowModalActivity(txt);
    });

    it('CT[20] - Validar o fechamento da modal de cadastro do Responsável', () => {
      const txt = 'Cadastrar Atividade';

      ModalResponsability.clickCloseResponsability();

      ModalActivity.validateShowModalActivity(txt);
    });

  });

});