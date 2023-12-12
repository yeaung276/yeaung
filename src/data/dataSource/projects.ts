import NSTImage from './images/nst.png';
import SarifAnnotator from './images/sarif-annotator.png';
import ImageSearch from './images/image-sch.png';
import path from 'path';

export const projects = [
  {
    unique: "nst",
    title: "Neural style transfer",
    cover: NSTImage,
    description:
      "An nst program which can blend two image together to get artistic images",
    md: path.resolve('src/data/dataSource/markdowns/nst.md'),
    githubLink: 'https://github.com/yeaung276/NeuralStyleTransfer',
    demoLink: '',
  },
  {
    unique: "image-search",
    title: "Image search",
    cover: ImageSearch,
    description:
      "An nst program which can blend two image together to get artistic images",
    md: path.resolve('./markdowns/nst.md'),
  },
  {
    unique: "sso-by-face-recognization",
    title: "Single sign on with face recognization",
    cover: NSTImage,
    description:
      "An nst program which can blend two image together to get artistic images",
    md: path.resolve('./markdowns/nst.md'),
  },
  {
    unique: "status-annotator",
    title: "Test result annotator",
    cover: SarifAnnotator,
    description:
      "An nst program which can blend two image together to get artistic images",
    md: path.resolve('./markdowns/nst.md'),
  },
];
