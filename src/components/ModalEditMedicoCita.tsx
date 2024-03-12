export const ModalEditMedicoCita = ({ children }) => {
    return (
        <>
            <div className='fixed top-0 left-0 min-h-full min-w-full flex justify-center items-center'>
                <div className=' bg-slate-100 w-auto  h-96 rounded-md opacity-100 z-40 shadow-lg ring-2 ring-indigo-700 '>
                    {children}
                </div>
            </div>
        </>
    )
}
