interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input (props : Props) {
    return (
        <input
            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            {...props}
        />
    )
}


