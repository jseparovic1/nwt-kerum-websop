import {Product} from './product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Vrećica kerum',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac lectus sapien. Suspendisse venenatis commodo mauris id tempor. Donec vel tellus non leo lobortis fermentum id sed urna. Fusce id est interdum, consectetur tellus a, luctus ex. Sed fringilla, sem sed laoreet lacinia, nulla est tristique justo, vitae euismod dui elit quis purus. Donec laoreet ligula a viverra efficitur. Pellentesque in malesuada erat. Sed blandit porttitor mattis. Phasellus mollis elit lectus, et rhoncus nibh convallis vitae. Nam vitae leo et odio vehicula aliquet. Quisque sagittis odio quis efficitur suscipit. Morbi pellentesque eu dolor ac malesuada. Mauris eget ipsum id nisl efficitur vestibulum. Phasellus vehicula felis accumsan tellus blandit ultricies. Morbi at nunc risus. Vivamus at nulla neque. Suspendisse condimentum, purus a pharetra finibus, quam quam molestie enim, et malesuada purus metus quis tellus. Suspendisse lacinia varius semper. Etiam eu felis ullamcorper, vulputate nisl at, tincidunt metus. Suspendisse sed pulvinar elit. Aliquam vel diam mollis, lobortis sem eu, auctor nulla.',
    rating: 5,
    image: './assets/kesica.jpeg',
    reviews: [
      {
        username: 'mako69',
        rating: 5,
        title: 'Super!',
        text: 'Stane 100kg bez problema.',
      },
      {
        username: 'roki',
        rating: 1,
        title: 'Super!',
        text: 'Stavio sam kil pršuta unutra i pukla je. Kako to?.',
      },
    ]
  },
  {
    id: 2,
    name: 'Drniški pršut',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac lectus sapien. Suspendisse venenatis commodo mauris id tempor. Donec vel tellus non leo lobortis fermentum id sed urna. Fusce id est interdum, consectetur tellus a, luctus ex. Sed fringilla, sem sed laoreet lacinia, nulla est tristique justo, vitae euismod dui elit quis purus. Donec laoreet ligula a viverra efficitur. Pellentesque in malesuada erat. Sed blandit porttitor mattis. Phasellus mollis elit lectus, et rhoncus nibh convallis vitae. Nam vitae leo et odio vehicula aliquet. Quisque sagittis odio quis efficitur suscipit. Morbi pellentesque eu dolor ac malesuada. Mauris eget ipsum id nisl efficitur vestibulum. Phasellus vehicula felis accumsan tellus blandit ultricies. Morbi at nunc risus. Vivamus at nulla neque. Suspendisse condimentum, purus a pharetra finibus, quam quam molestie enim, et malesuada purus metus quis tellus. Suspendisse lacinia varius semper. Etiam eu felis ullamcorper, vulputate nisl at, tincidunt metus. Suspendisse sed pulvinar elit. Aliquam vel diam mollis, lobortis sem eu, auctor nulla.',
    rating: 5,
    image: './assets/prsut.jpg',
    reviews: [
      {
        username: 'nemoze',
        rating: 5,
        title: 'Super!',
        text: 'Sve pohvale za proizvod',
      },
      {
        username: 'torca1950',
        rating: 3,
        title: 'Super!',
        text: 'Sve pohvale za proizvod',
      },
    ]
  },
  {
    id: 3,
    name: 'Čokolada braco i seka',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac lectus sapien. Suspendisse venenatis commodo mauris id tempor. Donec vel tellus non leo lobortis fermentum id sed urna. Fusce id est interdum, consectetur tellus a, luctus ex. Sed fringilla, sem sed laoreet lacinia, nulla est tristique justo, vitae euismod dui elit quis purus. Donec laoreet ligula a viverra efficitur. Pellentesque in malesuada erat. Sed blandit porttitor mattis. Phasellus mollis elit lectus, et rhoncus nibh convallis vitae. Nam vitae leo et odio vehicula aliquet. Quisque sagittis odio quis efficitur suscipit. Morbi pellentesque eu dolor ac malesuada. Mauris eget ipsum id nisl efficitur vestibulum. Phasellus vehicula felis accumsan tellus blandit ultricies. Morbi at nunc risus. Vivamus at nulla neque. Suspendisse condimentum, purus a pharetra finibus, quam quam molestie enim, et malesuada purus metus quis tellus. Suspendisse lacinia varius semper. Etiam eu felis ullamcorper, vulputate nisl at, tincidunt metus. Suspendisse sed pulvinar elit. Aliquam vel diam mollis, lobortis sem eu, auctor nulla.',
    rating: 5,
    image: './assets/braco_seka.jpg',
    reviews: [
      {
        username: 'mako69',
        rating: 5,
        title: 'Super!',
        text: 'Sve pohvale za proizvod. Ubacila sam kil pršuta unutra bez problema',
      },
      {
        username: 'ivo12',
        rating: 2,
        title: 'Super!',
        text: 'Sve pohvale za proizvod!',
      },
    ]
  },
  {
    id: 4,
    name: 'Drniški pršut',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac lectus sapien. Suspendisse venenatis commodo mauris id tempor. Donec vel tellus non leo lobortis fermentum id sed urna. Fusce id est interdum, consectetur tellus a, luctus ex. Sed fringilla, sem sed laoreet lacinia, nulla est tristique justo, vitae euismod dui elit quis purus. Donec laoreet ligula a viverra efficitur. Pellentesque in malesuada erat. Sed blandit porttitor mattis. Phasellus mollis elit lectus, et rhoncus nibh convallis vitae. Nam vitae leo et odio vehicula aliquet. Quisque sagittis odio quis efficitur suscipit. Morbi pellentesque eu dolor ac malesuada. Mauris eget ipsum id nisl efficitur vestibulum. Phasellus vehicula felis accumsan tellus blandit ultricies. Morbi at nunc risus. Vivamus at nulla neque. Suspendisse condimentum, purus a pharetra finibus, quam quam molestie enim, et malesuada purus metus quis tellus. Suspendisse lacinia varius semper. Etiam eu felis ullamcorper, vulputate nisl at, tincidunt metus. Suspendisse sed pulvinar elit. Aliquam vel diam mollis, lobortis sem eu, auctor nulla.',
    rating: 5,
    image: './assets/prsut.jpg',
    reviews: [
      {
        username: 'anja',
        rating: 1,
        title: 'Super!',
        text: 'Sve pohvale za proizvod. Kržala sam kil pršuta unutra bez problema',
      },
    ]
  },
];
