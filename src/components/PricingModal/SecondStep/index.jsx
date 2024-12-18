import { useState } from 'react';
import { Field } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

import { HeaderText, ContainerList } from './SecondStep.styled';

const SecondStep = ({ values }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(
    dayjs('2022-04-17T11:00')
  );

  return (
    <>
      <HeaderText>Chose your date and time</HeaderText>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Field name="eventDateTime">
          {() => (
            <div>
              <StaticDateTimePicker
                orientation="landscape"
                value={selectedDateTime}
                onChange={newValue => setSelectedDateTime(newValue)}
                renderInput={params => <TextField {...params} />}
                ampm={false}
              />
            </div>
          )}
        </Field>
        <HeaderText>What Type of Cleaning Would You Like?</HeaderText>
      </LocalizationProvider>
      <ContainerList>
        <li>{values.squareFootage} sq. ft.</li>
        <li>{values.bedrooms} bedrooms</li>
        <li>{values.bathrooms} bathrooms</li>
        <li>{values.people} people</li>
        <li>{values.pets} pets</li>
      </ContainerList>
    </>
  );
};

export default SecondStep;
