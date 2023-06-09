import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var root = ReactDOM.createRoot(document.getElementById('root'));

class Interest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-hedered text-bg-primary ">
                            <h3>intrest calculatore</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div ><label className='form-labl' htmlfor='amount'> Amount</label>
                                    <input className='form-control' type="number" name="amount" id="amount" value={this.state.amount} />
                                    <label htmlfor="rate" className='form-label'> Rate</label></div>
                                <div>         <input className='form-control' type="number" name="rate" id="rate" value={this.state.rate}></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

root.render(< Interest />);
// class InterestCalculator extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {}; //empty state object
//     }
//     onInputChange = (event) => {
//         this.setState({
//             [event.target.name] : event.target.value
//         });
//     }

//     onsubmit = () => {
//         console.log(this.state);
//     }
//     render()
//     {
//         return (<div className='container'>
//             <div className='row'>
//                 <div className='col-6 offset-3'>
//                     <div className='card shadow'>
//                         <div className='card-header text-bg-primary'>
//                             <h2>Interest Calculator</h2>
//                         </div>
//                         <div className='card-body'>
//                             <form>
//                                 <div className='mb-3'>
//                                     <label  className='form-label' htmlFor='amount'>Amount</label>
//                                     <input id= 'amount' className='form-control' 
//                                     onChange={this.onInputChange} name='amount' value={this.state.amount} required />
//                                 </div>
//                                 <div className='mb-3'>
//                                     <label  className='form-label' htmlFor='rate'>Rate</label>
//                                     <input id= 'rate' className='form-control' name='rate' value={this.state.rate} onChange={this.onInputChange} required />
//                                 </div>
//                                 <div className='mb-3'>
//                                     <label  className='form-label' htmlFor='year'>Year</label>
//                                     <input id= 'year' className='form-control' name='year' value={this.state.year} required onChange={this.onInputChange} />
//                                 </div>
//                                 <div>
//                                     <button type='button' className='btn btn-primary' onClick={this.onsubmit}>Calculate Interest</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>)
//     }
// }
// root.render(< InterestCalculator />);