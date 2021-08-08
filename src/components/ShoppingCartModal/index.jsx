import React from 'react';
import { Modal, Content, Head } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../redux/actions';

const ShoppingCartModal = ({open, setOpen}) => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal.modal);

  if (!modal) {
    return null;
  }

  const close = () => {
    dispatch(openModal(false));
  }

  return (
    <Modal>
      <Content>
        <Head>
          <button 
            type='button'
            onClick={() => close()}
          >
            ❮
          </button> 
          Volver a la tienda
        </Head>
      </Content>
    </Modal>
  );
};

export default ShoppingCartModal;
