export const SelectMedico = ({medicos}:any) => {
    return (
        <>
            {
                medicos.length !== 0 && (
                    <select name="medico" className='ring-2 ring-slate-500 rounded-lg p-1 w-20 mt-2 border-slate-500'>
                        {
                            medicos.length !== 0 && (
                                medicos.map((medico) => {
                                    return (
                                        <option key={medico.id} value={medico.id}>{medico.name}</option>
                                    )
                                })
                            )
                        }
                    </select>
                )
            }
        </>
    )
}
