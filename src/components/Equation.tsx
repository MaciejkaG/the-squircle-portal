'use client';

import katex from 'katex';
import 'katex/dist/katex.min.css';

export function Equation({ children }: { children: string }) {
    const html = katex.renderToString(children, {
        throwOnError: false
    });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}