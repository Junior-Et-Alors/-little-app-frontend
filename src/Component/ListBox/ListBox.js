import React from 'react';
import ListRow from '../ListRow/ListRow';
import CustomButton from '../CustomButton/CustomButton';
import { BsThreeDots } from 'react-icons/bs';
import { BsPlusLg } from 'react-icons/bs';
import './ListBox.scss';

export default React.memo(function ListBox(props) {
  return (
    <div className='list-box'>
      <div className='list-box__header'>
        <h2>{props.name}</h2>
        <CustomButton
          txt={<BsThreeDots />}
          class='list-box__header__button dot-button xl'
          handleClick={props.handleClick}
        />
      </div>
      <CustomButton
            txt={<BsPlusLg />}
            class='list-box__add-button simple-button'
          />
      {props.task && props.task.map((task) => {
        return <ListRow key={task.id} {...task} />;
      })}
    </div>
  );
})
