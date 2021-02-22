const settings = {
  name: "Piso Deportivo",
  state: {
    frontity: {
      url: "https://pisodeportivo.vercel.app",
      title: "Piso Deportivo",
      description: "Opinión e Información",
    },
  },
  packages: [
    {
      name: "@awsmin/f1",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Entrevistas", "/entradas/"],
            ["Beis", "/category/opinion/"],
            ["Vol", "/category/entrevistas/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://pisodeportivo.tk",
          homepage: "/home",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
