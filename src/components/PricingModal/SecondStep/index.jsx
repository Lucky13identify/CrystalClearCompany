import { useState } from 'react';
import { Field, useFormikContext } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

import { theme } from '../../../theme';
import { HeaderText, ContainerList } from './SecondStep.styled';

const SecondStep = ({ values }) => {
  const { setFieldValue } = useFormikContext();
  const [selectedDateTime, setSelectedDateTime] = useState(dayjs());

  const handleDateChange = newValue => {
    const formattedDate = dayjs(newValue).format('YYYY-MM-DD HH:mm');
    setSelectedDateTime(newValue);
    setFieldValue('eventDateTime', formattedDate);
  };

  return (
    <>
      <HeaderText>Choose your date and time</HeaderText>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Field name="eventDateTime">
          {() => (
            <div>
              <StaticDateTimePicker
                orientation="landscape"
                value={selectedDateTime}
                onChange={handleDateChange}
                renderInput={params => <TextField {...params} />}
                ampm={false}
                slots={{
                  actionBar: () => null,
                }}
                sx={{
                  '& .MuiPickersDay-root.Mui-selected': {
                    backgroundColor: theme.colors.primary,
                  },
                  '& .MuiButtonBase-root.MuiTab-root.Mui-selected': {
                    color: theme.colors.primary,
                  },
                  '& .MuiTabs-indicator ': {
                    backgroundColor: theme.colors.primary,
                  },
                  '& .MuiClockPointer-root': {
                    backgroundColor: theme.colors.primary,
                  },
                  '& .MuiClock-pin': {
                    backgroundColor: theme.colors.primary,
                  },
                  '& .MuiClockPointer-thumb': {
                    borderColor: theme.colors.primary,
                    backgroundColor: theme.colors.primary,
                  },
                  '& .MuiClockNumber-root.Mui-selected': {
                    backgroundColor: theme.colors.primary,
                  },
                }}
              />
            </div>
          )}
        </Field>
      </LocalizationProvider>
      <HeaderText>What Type of Cleaning Would You Like?</HeaderText>
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
