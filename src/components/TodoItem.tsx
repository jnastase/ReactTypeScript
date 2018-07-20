import React from 'react';

export interface TodoItemProps { text: string, index: number };

export default (props: TodoItemProps) => {
    return (
        <div>
            <span>{props.index}:</span>
            <span>{props.text}</span>
        </div>
    );
}