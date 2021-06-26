import React from 'react'
import {Link} from "react-router-dom";

export default function History() {
    return (
        <div className="container-fluid bg-dark bg-gradient text-white p-5" style = {{ minHeight : "100vh"}}>

            <h3 className = "text-muted">
                The list of Emails sent 
            </h3>
            
           <h1>User logged in</h1>

            <div class="container-fluid bg-gradient rounded-3 p-3">
            <table class="table text-white">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Reciepents</th>
                    <th scope="col">CC</th>
                    <th scope="col">body</th>
                    <th scope="col">date</th>
                    <th scope="col">time</th>


                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    
                    <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veritatis, ipsam consequuntur quos quod maxime voluptas blanditiis nisi aliquam nobis neque fuga,
                         sint ullam debitis dignissimos totam necessitatibus saepe amet! Aperiam!
                    </td>
                    <td>26th July</td>
                    <td>9:50 am</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>sayan.ee.nitd@gmail.com , sanatamdev404@gmail.com , bnara@xvideos.com </td>
                    <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veritatis, ipsam consequuntur quos quod maxime voluptas blanditiis nisi aliquam nobis neque fuga,
                         sint ullam debitis dignissimos totam necessitatibus saepe amet! Aperiam!
                    </td>
                    <td>26th July</td>
                    <td>9:50 am</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Veritatis, ipsam consequuntur quos quod maxime voluptas blanditiis nisi aliquam nobis neque fuga,
                         sint ullam debitis dignissimos totam necessitatibus saepe amet! Aperiam!
                    </td>
                    <td>26th July</td>
                    <td>9:50 am</td>
                    </tr>
                </tbody>
                </table>
            
    
            </div>

            <br />

        </div>
    )
}
