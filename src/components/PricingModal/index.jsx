import { useState } from 'react';
import { Formik, Form } from 'formik';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { HeaderText, Price } from './PricingModal.styled';

const initialValues = {
  firstName: '',
  secondName: '',
  phoneNumber: '',
  email: '',
  bedrooms: '',
  bathrooms: '',
  people: '',
  pets: '',
  squareFootage: '',
  optionCleaning: '',
  cleaningPackage: '',
};

// Цены за единицу
const unitPrices = {
  bedrooms: 50, // Цена за одну спальню
  bathrooms: 40, // Цена за одну ванную
  people: 10, // Цена за одного человека
  pets: 20, // Цена за одно животное
  squareFootage: 15, // Цена за квадратный метр
  cleaningPackage: {
    'Design with Time': 246,
    'Deep Clean': 400,
    'Move In/Move Out': 343,
    'Premium Weekly': 765,
    'Alternating Weekly': 486,
    'Premium Biweekly': 200,
    'Alternating Biweekly': 246,
    'Premium Monthly': 100,
  },
};

const PricingModal = ({ handleSubmit }) => {
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(0); // Для хранения общей суммы

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  // Функция для подсчёта итоговой цены
  const calculatePrice = values => {
    return Object.entries(values).reduce((total, [key, value]) => {
      if (unitPrices[key]) {
        // Если это объект (например, optionCleaning), используем соответствующее значение
        if (typeof unitPrices[key] === 'object') {
          return total + (unitPrices[key][value] || 0);
        }
        // Для числовых значений умножаем на цену за единицу
        return total + (parseFloat(value) || 0) * unitPrices[key];
      }
      return total;
    }, 0);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        handleSubmit(values, price); // Передаём итоговую цену в обработчик
      }}
    >
      {({ isSubmitting, values }) => {
        // Пересчитываем цену при изменении значений

        setPrice(calculatePrice(values));

        return (
          <Form>
            {step === 1 && (
              <FirstStep isSubmitting={isSubmitting} values={values} />
            )}
            {step === 2 && (
              <SecondStep isSubmitting={isSubmitting} values={values} />
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 20,
              }}
            >
              <div>
                <HeaderText>Estimated Price</HeaderText>
                <Price>$ {price.toFixed(2)}</Price>{' '}
                {/* Отображаем итоговую цену */}
              </div>
              <button
                disabled={Object.values(values).some(value => value === '')} // Активируем кнопку, если все поля заполнены
                onClick={() => {
                  nextStep();
                }}
                type="button"
                className="heroButton hvr-grow"
              >
                Schedule cleaning
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PricingModal;
