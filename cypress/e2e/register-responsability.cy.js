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
      const responsabilityValid = generateReponsability();

      ModalResponsability.registerResponsability(responsabilityValid);

      ModalActivity.validateShowNameResponsability({ label: responsabilityValid.name });
    });

    it('CT[12] - Validar cadastro de responsável informando no campo "Nome" valor maior que 51 caracteres', () => {
      const responsabilityNameExtension = { ...generateReponsability(), name: 'A'.repeat(51) };

      ModalResponsability.registerResponsability(responsabilityNameExtension);

      ModalActivity.validateShowNameResponsability(
        { label: responsabilityNameExtension.name }
      );
    });

    it('CT[13] - Validar cadastro de responsável informando no campo "Nome" valor com 50 caracteres', () => {
      const responsabilityNameMax = { ...generateReponsability(), name: 'D'.repeat(50) };

      ModalResponsability.registerResponsability(responsabilityNameMax);

      ModalActivity.validateShowNameResponsability({ label: responsabilityNameMax.name });
    });

    it('CT[14] - Validar cadastro de responsável informando no campo "Nome" valor com 49 caracteres', () => {
      const responsabilityNameRegular = { ...generateReponsability(), name: 'Z'.repeat(49) };

      ModalResponsability.registerResponsability(responsabilityNameRegular);

      ModalActivity.validateShowNameResponsability(
        { label: responsabilityNameRegular.name }
      );
    });

  });

  describe('Register resposability with "Error"', () => {
    const msgEmailInvalid = 'E-mail inválido';

    it('CT[15] - Validar mensagem de "Email inválido" ao cadastrar responsável informando no campo "Email" email inválido', () => {
      const responsabilityEmailInvalid = { ...generateReponsability(), email: 'teste@.com' };

      ModalResponsability.registerResponsability(responsabilityEmailInvalid);

      ModalResponsability.validateShowMensagenErrorEmail(msgEmailInvalid);
    });

    it('CT[16] - Validar mesagem de "Email inválido" ao cadastrar responsável informando no campo "Email" email com  "espaço"', () => {
      const responsabilityEmailInvalid = { ...generateReponsability(), email: 'teste@ .com' };

      ModalResponsability.registerResponsability(responsabilityEmailInvalid);

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
      const responsabilitiesPhoneInvalid = { ...generateReponsability(), phone: '85' };

      ModalResponsability.registerResponsability(responsabilitiesPhoneInvalid);

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