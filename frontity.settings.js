const settings = {
  name: "Piso Deportivo",
  state: {
    frontity: {
      url: "https://pisodeportivo.com",
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
            ["Entrevistas", "/entrevistas"],
            ["Opiniones", "/opinion"],
            ["Nosotros", "/nosotros"],
            ["Servicios", "/servicios"],
            ["Contactos", "/contactos"],
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
