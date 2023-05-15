import React from 'react';

interface TitleH1Props {
    text: string;
}

export const TitleH1: React.FC<TitleH1Props> = ({ text }) => {
    return <p className="text-cyan-400">{text}</p>;
};
