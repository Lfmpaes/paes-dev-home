/** @type {import('tailwindcss').Config} */

// /* Black: #1b222a */
// /* White: #f2f4f1 */
// /* Red: #d90231 */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'lfm-black': '#1b222a',
            'lfm-white': '#f2f4f1',
            'lfm-red': '#d90231',
        },
        plugins: [require('@tailwindcss/typography')],
    },
};
