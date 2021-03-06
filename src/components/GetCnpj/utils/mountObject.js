const mountObject = ({ setStreet, setNumber, setComplement, setNeighborhood, setCep, setCity, setCityState, setReason, setFantasia, setFone }, obj) => {
    setReason(obj.reason || '');
    setFantasia(obj.fantasia || '');
    setStreet(obj.street || '');
    setNumber(obj.number || '');
    setComplement(obj.complement || '');
    setNeighborhood(obj.neighborhood || '');
    setCep(obj.cep || '');
    setCity(obj.city || '');
    setCityState(obj.cityState || '');
    setFone(obj.fone || '')
};

export default mountObject;