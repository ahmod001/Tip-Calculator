import { useMemo, useRef, useState } from 'react';
import TipButton from '../../Library/Tip-Button/Tip-Button';
import InputField from '../../Library/InputField/InputField';
import Dollar from "../../assets/images/icon-dollar.svg";
import Person from "../../assets/images/icon-person.svg"
import SmallInputField from '../../Library/SmallInputField/SmallInputField';

const Calculator = () => {
    const [billError, setBillError] = useState('');
    const [numberOfPeopleError, setNumberOfPeopleError] = useState('');

    const bill = useRef('');
    const numberOfPeople = useRef('');

    const handleTip = (e) => {
        const totalBill = bill.current.value
        const totalPeople = numberOfPeople.current.value
        const tipRate = e.target.value;

        let isBillValid = false;
        let isNumberOfPeoplesValid = false;

        // Validation
        if (totalBill) {
            if (totalBill == 0) {
                setBillError('Can\'nt be zero')
            } else {
                setBillError('');
                isBillValid = true;
            }
        } else {
            setBillError('Enter your bill')
        }

        if (totalPeople) {
            if (totalPeople == 0) {
                setNumberOfPeopleError('Can\'nt be zero')
            } else {
                setNumberOfPeopleError('');
                isNumberOfPeoplesValid = true;
            }
        } else {
            setNumberOfPeopleError('Enter number of people')
        }


        if (isBillValid && isNumberOfPeoplesValid) {
            console.log(calculate(totalBill, totalPeople, tipRate));
        }
    }

    function calculate(bill, numberOfPeople, tipRate) {
        const totalTip = (bill / 100) * tipRate;
        const tipPerPerson = totalTip / numberOfPeople;

        const billPerPerson = bill / numberOfPeople;

        return {
            tipPerPerson: tipPerPerson.toFixed(2),
            totalBillPerPerson: (billPerPerson + tipPerPerson).toFixed(2)
        }
    }


    return (
        <section className='flex justify-center'>
            <div className='bg-white p-7 rounded-xl w-full max-w-4xl md:grid grid-cols-2 shadow-md'>
                <div className='space-y-10'>

                    {/* Enter Bill */}
                    <InputField
                        refName={bill}
                        name={'Bill'}
                        icon={Dollar}
                        showError={Boolean(billError)}
                        errorMsg={billError} />

                    {/* Select Tip */}
                    <div className='space-y-2'>
                        <h1 className='text-cyan-700 font-semibold tracking-wide'>Select Tip %</h1>

                        <div className='grid grid-cols-3 gap-3.5'>
                            {[5, 10, 15, 25, 50].map((tip, i) => (
                                <TipButton
                                    key={i}
                                    value={tip}
                                    clickHandler={handleTip} />
                            ))}

                            {/* Custom Tip */}
                            <SmallInputField name={'Custom'} handleTip={handleTip} />
                        </div>
                    </div>

                    {/* Enter Number of People */}
                    <InputField
                        refName={numberOfPeople}
                        name={'Number of People'}
                        icon={Person}
                        showError={Boolean(numberOfPeopleError)}
                        errorMsg={numberOfPeopleError} />

                </div>

                <div>

                </div>
            </div>
        </section>
    );
};

export default Calculator;