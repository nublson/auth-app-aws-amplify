interface IResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export const signIn = (): Promise<IResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'iodce0meim3c0e2cld23ijmc02',
        user: {
          name: 'Nubelson Fernandes',
          email: 'nubelsondev@hotmail.com',
        },
      });
    }, 2000);
  });
};
