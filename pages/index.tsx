import { useServer } from '@/common/hooks';
import LoginPage from '@/modules/login-page';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

const Home = ({ context }: { context: GetServerSidePropsContext }) => {
  return <LoginPage />;
};

export const getServerSideProps = useServer(
  async (context: GetServerSidePropsContext) => {
    return { context };
  }
);

export default Home;
