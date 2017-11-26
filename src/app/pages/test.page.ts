import { Page, Segment } from '../page';

const lorem = `
Qu'est-ce que le Lorem Ipsum?

Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
Pourquoi l'utiliser?

On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).

`;

// Test page, to show something
export const TESTPAGE: Page = {
  id:"test",
  segments: [
    {
      text: lorem
    },
    {
      image: "/assets/test.jpg"
    },
    {
      image: "/assets/test.jpg",
      imageWidth: "20%"
    },
    {
      text: lorem,
      image: "/assets/test.jpg"
    },
    {
      text: lorem,
      imageRight: true,
      image: "/assets/test.jpg",
      height: "100px"
    },
    {
      text: "<b>Gras</b><i>Italic</i><a href='https://www.google.ch'>Google</a>"
    }
  ]
}
