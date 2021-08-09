/* eslint-disable no-loop-func */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, removeData } from '../../redux/actions';
import bin from '../../assets/img/delete.png';
import { totalValue } from '../Helper/Total';
import noProducts from '../../assets/img/noProducts.png';
import less from '../../assets/img/less.png';
import more from '../../assets/img/more.png';
import { 
  Modal, 
  Content, 
  Head, 
  Body,
  Table,
  Tr,
  TrTitle,
  Th,
  Td,
  TableDelete,
  TdImg,
  TableImg,
  TableProduct,
  TableDivImg,
  TdData,
  ContainerDiv,
  TableTitle,
  TableInits,
  TableSupplier,
  TdCount,
  TableImgButton,
  ButtonImg
} from './style';

let dataModal = [];
let repeated = [];
let dataOnly = [];
let info = [];
let infoValues = [];
let infoUpdate ={};

const ShoppingCartModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal.modal);
  const data = useSelector(state => state.data.data);
  const add = useSelector(state => state.add.add);
  const [dataOnlyState, setDataOnlyState] = useState([]);

  useEffect(() => {
    dataModal = [];
    repeated = [];
    info = [];
    infoValues = [];
    dataOnly = [];
    for(let i=0; i<data.length; i++) {
      for(let j=0; j<add.length; j++) {
        if(data[i].id === add[j]) {
            dataModal.push(data[i]);
        }
      }
    }

    dataModal.forEach(function(value){
      repeated[value.id] = (repeated[value.id] || 0) + 1;
    });

    info = Object.keys(repeated);
    infoValues = Object.values(repeated);

    for(let i=0; i<info.length; i++) {
      infoUpdate = {};
      infoUpdate = {
        ...data.filter(text => text.id === parseInt(info[i]))[0],
        idUpdate: infoValues[i]
      }
      dataOnly.push(infoUpdate);
      setDataOnlyState(dataOnly);
    };
  }, [add, data])

  if (!modal) {
    return null;
  }

  const close = () => {
    dispatch(openModal(false));
  }

  const deleteShopping = (i, id) => {
    dispatch(removeData(id));
    dataOnly = [];
    setDataOnlyState([]);
    dispatch(openModal(false));
    setTimeout(() => {
      dispatch(openModal(true));
    }, 1000);
  }

  const moreValue = (id) => {
    for(let i=0; i<dataOnlyState.length; i++) {
      if(dataOnlyState[i].id === parseInt(id)) {
        dataOnlyState[i].idUpdate = dataOnlyState[i].idUpdate + 1;
      }
    }
    dispatch(openModal(false));
    setTimeout(() => {
      dispatch(openModal(true));
    }, 0.5);
  }

  const lessValue = (id) => {
    for(let i=0; i<dataOnlyState.length; i++) {
      if(dataOnlyState[i].id === parseInt(id)) {
        if(dataOnlyState[i].idUpdate > 1) {
          dataOnlyState[i].idUpdate = dataOnlyState[i].idUpdate - 1;
        }
      }
    }
    dispatch(openModal(false));
    setTimeout(() => {
      dispatch(openModal(true));
    }, 0.5);
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
        <Body>
          <h2>Carrito de compras</h2>
          <dir>{`${add.length} Items`}</dir>
        </Body>
        <Table> 
          <thead>
            <TrTitle>
              <Th>Item</Th>
              <Th>Cantidad</Th>
              <Th>Precio</Th>
              <Th>Eliminar</Th>
            </TrTitle>
          </thead>
          {console.log('dataOnlyState', dataOnlyState)}
          {dataOnlyState.length !== 0 && 
            dataOnlyState.map((item, i) => (
              <tbody key={item.id}>
                <Tr>
                  <TdData>
                    <TableImg src={item.image} alt={item.title} />
                    <ContainerDiv>
                      <TableTitle>{item.title}</TableTitle>
                      <TableInits>{`x ${item.units_sf} unids - ${item.net_content} c/u`}</TableInits>
                      <TableSupplier>{item.supplier}</TableSupplier>
                    </ContainerDiv>
                  </TdData>
                  <TdCount>
                    <ButtonImg type='button' onClick={() => lessValue(item.id)} >
                      <TableImgButton src={less} alt='Menos' />
                    </ButtonImg>
                    {item.idUpdate}
                    <ButtonImg type='button' onClick={() => moreValue(item.id)} >
                      <TableImgButton src={more} alt='Mas' />
                    </ButtonImg>
                  </TdCount>
                  <Td>{`$ ${totalValue(item.price_real)}`}</Td>
                  <TdImg>
                    <TableDelete type='button' onClick={() => deleteShopping(i, item.id)} >
                      <img src={bin} alt='Delete' />
                    </TableDelete>
                  </TdImg>
                </Tr>
              </tbody>
            ))
          }
          {add.length === 0 && 
            <TableDivImg>
              <TableProduct src={noProducts} alt='No hay productos' />
            </TableDivImg>
          }
        </Table>
      </Content>
    </Modal>
  );
};

export default ShoppingCartModal;
