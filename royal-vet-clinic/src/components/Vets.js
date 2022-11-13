import React from 'react';
import VetCard from './VetCard';
import Row from 'react-bootstrap/Row';


function Vets({vets}) {


    const renderVets = vets.map((vet) => (
        <div key={vet.id} className="item">
            <VetCard vet={vet}/>
        </div>
    ));

    return (
        <div >
            <h3 className='title'>Veterinarians</h3>       
            <Row md={2} className="justify-content-md-center" id="row">
                {renderVets}
            </Row>  
         </div>
    );
}

export default Vets;











