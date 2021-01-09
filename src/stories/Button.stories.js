import React from 'react';

import Button from '../components/Button'

export default {
    title: "Button",
    component: Button,
}

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    button_val: "Create lolly!",
    button_class: "homepage-btn"
};