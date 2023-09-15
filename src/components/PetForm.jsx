import { useState } from 'react';

const blankPet = {
  name: '',
  type: '',
  age: '',
};

function PetForm() {
  const [pet, setPet] = useState(blankPet);

  const handleChange = (e) => {
    setPet({
      ...pet,
      // computed property name
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={pet.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="type" className="form-label">
          Type:
        </label>
        <input
          type="text"
          name="type"
          id="type"
          className="form-control"
          value={pet.type}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        <input
          type="text"
          name="age"
          id="age"
          className="form-control"
          value={pet.age}
          onChange={handleChange}
        />
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Add Pet
        </button>
      </div>
    </form>
  );
}
export default PetForm;
