import React from 'react';

import Lolly from '../components/Lolly'

export default {
    title: "Lolly",
    component: Lolly,
}

const Template = (args) => <Lolly {...args} />;

export const Default = Template.bind({});
Default.args = {
    top: "red",
    middle: "green",
    bottom: "yellow"
};

