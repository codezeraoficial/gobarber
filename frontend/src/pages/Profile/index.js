import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import {useSelector, useDispatch} from 'react-redux';

import {signOut} from '~/store/modules/auth/actions';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

export default function Profile() {
  const dispath = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data){
    dispath(updateProfileRequest(data));
  }

  function handleSignOut(){
    dispath(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input type="password" name="oldPassword" placeholder="Sua senha atual" />
        <Input type="password" name="password" placeholder="Sua novo senha" />
        <Input type="password" name="confirmPassword" placeholder="Confirme sua senha" />


        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>Sair do GoBarber</button>
    </Container>
  );
}
