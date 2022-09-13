import React from 'react';
import { useSelector } from 'react-redux';
import { status } from '../../app/state/selectors';

export const IndexPage: React.FC = () => {
  const { name, version } = useSelector(status);

  return (
    <>
      <h1>{name}</h1>

      <i>{version}</i>
    </>
  );
};
