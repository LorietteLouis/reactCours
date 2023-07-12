const UpdateCoworking = ({ coworking }) => {
 
    const handleUpdateSubmit = (event) => {
      event.preventDefault();
  
    
      
      const coworkingRequest = {
        name: event.target.title.value,
        phone: event.target.phone.value,
        address: event.target.address.value,
      };
  
      
    };
  
    return (
      <div>
        <h3>Mettre à jour le coworking</h3>
        <form onSubmit={handleUpdateSubmit}>
          <label>Titre</label>
          <input type="text" name="title" defaultValue={coworking.name} />
  
          <label>Téléphone</label>
          <input type="text" name="phone" defaultValue={coworking.phone} />
  
          <label>Adresse</label>
          <input type="text" name="address" defaultValue={coworking.address} />
  
          <button type="submit">Créer</button>
        </form>
      </div>
    );
  };
  
  export default UpdateCoworking;