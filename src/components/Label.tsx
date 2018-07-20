import * as React from 'react';

export interface LabelProps { text: string }

export const Label = (props: LabelProps) => {
    return (
        <span>{props.text}</span>
    );
}