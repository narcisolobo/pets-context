import PetForm from './PetForm';
import PetTable from './PetTable';

function Hero() {
  return (
    <div className="px-4 py-5 my-5">
      <h1 className="display-1 my-5 text-center">Here are all the pets!</h1>
      <div className="col-lg-6 mx-auto">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <PetTable />
              </div>
              <div className="col">
                <PetForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
