import React from 'react';
import {types} from '@types';
import {icons} from '@assets/icons';

function RadioForm(props: {
    fieldConfig: types.RadioField;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldData} = props;

    const toggle = (fieldOption: string) => () => {
        let newFieldData: any = fieldData;

        if (fieldData === fieldOption) {
            newFieldData = '';
        } else {
            newFieldData = fieldOption;
        }

        props.modifyFieldData(newFieldData);
        props.modifyFieldValidation(newFieldData !== '');
    };

    return (
        <>
            {fieldConfig.options.map((fieldOption, optionIndex: number) => (
                <button
                    key={optionIndex}
                    onClick={toggle(fieldOption)}
                    className={
                        'w-full mt-2 ringable rounded ' +
                        (fieldData === fieldOption
                            ? 'font-weight-700 bg-gray-100 text-black dark:bg-gray-800 dark:text-white '
                            : 'font-weight-600 bg-gray-200 text-gray-500 dark:bg-gray-600 dark:text-gray-100 ')
                    }
                >
                    <div
                        className={
                            'w-full flex-row-left no-selection ' +
                            'pl-3 pr-2 py-2 cursor-pointer ' +
                            'text-base leading-7 md:leading-6 md:text-sm '
                        }
                    >
                        {fieldOption}
                        <div className='flex-grow' />
                        {fieldData === fieldOption && (
                            <div className='w-5 h-5 icon-dark-blue'>
                                {icons.check}
                            </div>
                        )}
                    </div>
                </button>
            ))}
        </>
    );
}

export default RadioForm;
