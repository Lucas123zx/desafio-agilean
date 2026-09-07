import ModalAuth from '../support/components/modal-auth';
import '../support/hooks/login-system';
import HomePage from '../support/pages/home-page';

describe('Logout', () => {

  describe('Logout with "Success"', () => {

    it('Ct[64] - Validar logout do sistema', () => {
      const title = 'Gerenciador de Atividades';

      HomePage.clickBtnLogout();

      ModalAuth.validateShowModalAuth(title);
    });

  });

});