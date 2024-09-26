import Logo from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Logo',
  component: Logo,
};

const Template = () => (
  <MemoryRouter>
    <Logo />
  </MemoryRouter>
);

export const Default = Template.bind({});
