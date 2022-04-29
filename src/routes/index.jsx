import {Routes, Route} from 'react-router-dom';

import {EmployeeCreate} from '../pages/EmployeeCreate';
import {EmployeeList} from '../pages/EmployeeList';


export function Router () {
    return ( //path é o caminho que a rota vai ter www.anne.com/ir/naacademia
        <Routes> 
            <Route path="/" element={<EmployeeList />}/>
            <Route path="/create" element={<EmployeeCreate />}/>
            <Route path="/update" element={<EmployeeCreate />}/>
        </Routes>
    );
}