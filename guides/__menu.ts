import { PageMenu } from '../types';

const menu: PageMenu = {
  name: 'User Guides',
  dir: 'guides',
  pages: [
    {
      name: 'Startup Guide',
      path: 'startup',
    },
    {
      name: 'Fermentation Quick Start',
      path: 'ferment_guide',
    },
    {
      name: 'Control chains',
      path: 'control_chains',
    },
    {
      name: 'Adding services',
      path: 'adding_services',
    },
    {
      name: 'Configuring connection settings',
      path: 'connect_settings',
    },
    {
      name: 'Advanced Guides',
      path: 'advanced',
    },
    {
      name: 'Docker-compose configuration',
      path: 'compose',
    },
    {
      name: 'Release notes',
      path: 'release_notes',
    },
    {
      name: 'Troubleshooting',
      path: 'troubleshooting',
    },
    {
      name: 'Vue doc',
      path: 'vue-doc',
      ext: 'vue',
    },
  ],
};

export default menu;
