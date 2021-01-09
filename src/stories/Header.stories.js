import React from 'react';

import Header from '../components/Header'

export default {
    title: "Header",
    component: Header,
}

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    head: "Virtually Lolly",
    head_class: "heading",
    para: "because we all know someone who deserve some sugar!",
    para_class: "sub-heading",
};

