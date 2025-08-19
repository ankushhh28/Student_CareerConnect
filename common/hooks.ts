import { GetServerSidePropsContext } from 'next';

export const useServer = (
  getData: (context: GetServerSidePropsContext) => Promise<any>
) => {
  return async (context: GetServerSidePropsContext) => {
    const data = await getData(context);
    return { props: data };
  };
};
