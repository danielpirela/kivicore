interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({children, ...props} : Props) {
    return (
        <label
            className="block text-sm font-semibold text-gray-800"
            {...props}
        >
            {children}
        </label>
    )
}
