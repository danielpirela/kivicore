import axios from 'axios'

export async function getCitas(){
    const citas = await axios.get('/api/cita')
    if (!citas) throw new Error('cita no conseguida')
    return citas
}
