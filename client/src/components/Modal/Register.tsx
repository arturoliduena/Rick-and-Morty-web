import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import Input from '../Input/Input';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalRegister } from '../../store/actions/modal';
import { register } from '../../store/actions/auth';
import ModaContainer from './ModaContainer';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import { RootState } from '../../store';

const Modal = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkFields, setCheckFields] = useState(false);
  const [error, setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.auth.loading);
  const message = useSelector((state: RootState) => state.auth.message);
  const authorized = useSelector((state: RootState) => state.auth.authorized);

  useEffect(() => {
    if(!isLoading && isSubmit){
      authorized ? onClose() : setError(message);
    }
  }, [isLoading]);

  const validateFields = (fields: string[]) => !fields.some(field => !field);

  const onClose = () => {
    dispatch(closeModalRegister())
  }

  const submit = () => { 
    const isValid = validateFields([email, username, password]);
    if(isValid){
      const item = {
        username,
        email,
        password,
      }
      setIsSubmit(true)
      dispatch(register(item));
    } else {
      setCheckFields(true);
    }
  }
  return (
    <ModaContainer>
        <ModalHeader title='REGISTER' onClose={onClose}/>
        <ModalBody>
          <form className={styles.container}>
            <Input label='Email' value={email} onChange={setEmail} checkFields={checkFields}/>
            <Input label='Username' value={username} onChange={setUsername} checkFields={checkFields}/>
            <Input label='password' value={password} onChange={setPassword} checkFields={checkFields}/>
          </form>
            <Button onClick={submit} text='register' />
            <div className={styles.error}>
              { error }
            </div>
        </ModalBody>
    </ModaContainer>
  )
};

export default Modal;