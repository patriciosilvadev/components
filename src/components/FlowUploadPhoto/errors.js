export const errors = (modais,openCamera,setMessage) => ({
    NO_PHOTO: {
        title: 'Nenhuma foto',
        message: 'Para continuar é necessário tirar uma foto'
    },
    ...modais.reduce((acc,cur,index) => {
        return {
            ...acc,
            [`${index}`]: {
                ...cur,
                firstActionButton: index===modais.length-1 ? openCamera : () => setMessage(`${index+1}`)
            }
        }
    },{})
})