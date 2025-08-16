import './Formik.css';
import {Routes, Route} from 'react-router-dom';
import GeneralForm from './GeneralForm';
import PortalForm from './PortalForm';
function Formik() {
  return (
    <div className='formikApp'>
      <Routes>
        <Route path="/" element={<GeneralForm/>}/>
         <Route path="/portal" element={<PortalForm/>}/>
      </Routes>
    </div>
  )
}

export default Formik
