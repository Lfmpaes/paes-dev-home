import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head />
            <body className="max-md:bg-gradient-to-t max-md:from-neutral-900 max-md:to-neutral-800">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
