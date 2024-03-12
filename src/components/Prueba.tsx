interface Props {
    historia: History
}

interface Paciente {
    id: string
    dni: string
    phone: string
    name: string
    status: string
}

interface History {
    id: number
    createdAt: string
    updatedAt: string
    content: string
    pacienteId: number
}

export const Prueba = ({ historia }: Props) => {
    return (
        <>
            {historia && (
                <textarea
                    name={'historyOld'}
                    rows={6}
                    cols={20}
                    className='ring-2 ring-slate-700 rounded-lg
                    hover:ring-indigo-500 flex-1
                    '
                    value={historia.content}
                />
            )}
        </>
    )
}
