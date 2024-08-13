/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		'bg-red-500',
		'bg-green-500',
		'bg-blue-500',
		'bg-yellow-500',
		'bg-purple-500',
		'bg-pink-500',
		'bg-indigo-500',
		'bg-teal-500',
		'bg-orange-500',
		'bg-gray-500',
		'bg-black',
		'bg-white',
		'bg-gray-100',
		'bg-gray-200',
		'bg-gray-300',
		'bg-gray-400',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
