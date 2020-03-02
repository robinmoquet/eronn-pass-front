/** @format */

import { RefObject } from 'react';
import _locale from '../config/yup';

export default function equalTo(
    this: any,
    targetNode: RefObject<HTMLInputElement>,
    message?: string
) {
    if (!message) {
        message = _locale.string.equalTo;
    }

    return this.test({
        message,
        name: 'equalTo',
        exclusive: true,
        test: function test(value: any) {
            return value === targetNode.current?.value;
        },
    });
}
