import Header from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
export const Default = Template.bind({});
