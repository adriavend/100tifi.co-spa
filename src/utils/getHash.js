const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; //slice(1) borramos el # -> ['', 'id', '']

export default getHash;
