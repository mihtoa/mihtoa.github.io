export type ProfileType = {
  name: string;
  role: string;
  description?: string;
  social?: {
    title: string;
    url: string;
    target?: '_blank' | '_self';
  }[];
};

const Profile: ProfileType = {
  name: 'Milene Toazza',
  role: 'Frontend Developer',
  description:
    'Frontend Developer from Brazil since 2018 \nSoftware Engineer student (2020 - 2024)',
  social: [
    {
      title: 'Github',
      url: 'https://github.com/mihtoa',
      target: '_blank',
    },
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/mihtoa/',
      target: '_blank',
    },
  ],
};

export { Profile };
