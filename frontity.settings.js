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
            ["Nature", "/piso1/"],
            ["Travel", "/piso4/"],
            ["Japan", "/piso2/"],
            ["About Us", "/piso3/"],
            ["About", "/piso5/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
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
