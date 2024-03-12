import moment from 'moment'

export const formateDate = (date: any) => {
    return moment(date).locale('es').format('DD/MM/YYYY H:mm:ss a')
}
