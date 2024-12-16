import { useState } from 'react';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SecondStep = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      sdsd
      <Field name="eventDate">
        {() => (
          <DatePicker
            selected={startDate}
            onChange={date => {
              setStartDate(date);
            }}
            dateFormat="yyyy/MM/dd"
          />
        )}
      </Field>
    </>
  );
};

export default SecondStep;
