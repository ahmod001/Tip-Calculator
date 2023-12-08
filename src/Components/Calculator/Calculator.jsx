import { useMemo, useRef, useState } from 'react';
import TipButton from '../../Library/Tip-Button/Tip-Button';
import InputField from '../../Library/InputField/InputField';
import Dollar from "../../assets/images/icon-dollar.svg";
import Person from "../../assets/images/icon-person.svg"
import SmallInputField from '../../Library/SmallInputField/SmallInputField';
import ResetButton from '../../Library/ResetButton/ResetButton';

const Calculator = () => {
    const [billError, setBillError] = useState('');
    const [numberOfPeopleError, setNumberOfPeopleError] = useState('');

    const bill = useRef('');
    const numberOfPeople = useRef('');

    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

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
            const { tipPerPerson, totalBillPerPerson } = calculate(totalBill, totalPeople, tipRate);
            setTipAmount(tipPerPerson)
            setTotal(totalBillPerPerson)
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

    const handleReset = () => {
        bill.current.value = '';
        numberOfPeople.current.value = '';

        setTipAmount(0)
        setTotal(0)
    }

    return (
        <section className='flex justify-center '>
            <div className='bg-white p-8 rounded-xl w-full h-full md:max-w-4xl max-w-md grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-8 shadow-xl'>
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

                <div className='h-full bg-cyan-800 rounded-lg px-8 py-10 space-y-28'>
                    <div className='space-y-8'>
                        {/* Tip Amount */}
                        <div className='flex justify-between items-center'>
                            <h1 className='text-white font-medium lg:text-lg tracking-wide'>
                                Tip Amount
                                <span className='block text-gray-300/70 text-sm '>
                                    / person
                                </span>
                            </h1>

                            <h1 className={`${tipAmount.length <= 7 ? ('lg:text-5xl text-4xl') : ('lg:text-4xl text-3xl')} font-semibold inline-flex items-center space-x-1 text-cyan-300`}>
                                <span className='text-3xl'>$</span> <span>{tipAmount > 9 ? (tipAmount.slice(0, 10) + '+') : (tipAmount)}</span>
                            </h1>
                        </div>

                        {/* Total */}
                        <div className='flex justify-between items-center'>
                            <h1 className='text-white font-medium lg:text-lg tracking-wide'>
                                Total
                                <span className='block text-gray-300/70 text-sm '>
                                    / person
                                </span>
                            </h1>

                            <h1 className={`${total.length <= 7 ? ('lg:text-5xl text-4xl') : ('lg:text-4xl text-3xl')} font-semibold inline-flex items-center space-x-1 text-cyan-300`}>
                                <span className='text-3xl'>$</span> <span>{total > 9 ? (total.slice(0, 10) + '+') : (total)}</span>
                            </h1>
                        </div>
                    </div>

                    <ResetButton handleReset={handleReset} />
                </div>
            </div>
        </section>
    );
};

export default Calculator;