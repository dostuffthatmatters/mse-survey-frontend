import {range} from 'lodash';
import React from 'react';
import {icons} from '/src/assets/icons';

export default function Pagination(props: {
    index: number;
    setIndex(i: number): void;
    length: number;
}) {
    const {index, setIndex, length} = props;

    let visiblePageRange = [];
    if (length <= 5) {
        visiblePageRange = range(length);
    } else if (index <= 2) {
        visiblePageRange = [0, 1, 2, 3, -1];
    } else if (index >= length - 3) {
        visiblePageRange = [-2, ...range(length - 4, length)];
    } else {
        visiblePageRange = [-2, ...range(index - 1, index + 2), -1];
    }

    return (
        <nav
            className={
                'text-base md:text-sm h-10 sm:h-8 md:h-7 ' +
                'bg-white shadow-sm rounded ' +
                'flex items-stretch divide-x divide-gray-200 '
            }
        >
            <button
                onClick={() => setIndex(index !== 0 ? index - 1 : 0)}
                className={
                    'flex items-center justify-center w-10 ' +
                    'ringable focus:rounded focus:!border-blue-50 ' +
                    'focus:bg-blue-50 focus:z-20'
                }
            >
                <div className='w-5 h-5 svg-pagination'>
                    {icons.chevronLeftCircle}
                </div>
            </button>
            {visiblePageRange.map((i) =>
                i < 0 ? (
                    <div
                        className={
                            'flex items-center justify-center z-0 cursor-default ' +
                            'w-10 text-sm text-gray-500 font-weight-500 '
                        }
                        key={i}
                    >
                        ...
                    </div>
                ) : (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={
                            'flex items-center justify-center ' +
                            'w-10 text-sm ' +
                            'ringable focus:rounded focus:!border-blue-50 focus:bg-blue-50 ' +
                            (i === index
                                ? 'text-black font-weight-600 bg-gray-200 z-10 '
                                : 'text-gray-600 font-weight-500 z-0 focus:z-20')
                        }
                    >
                        {i + 1}
                    </button>
                ),
            )}
            <button
                onClick={() =>
                    setIndex(index !== length - 1 ? index + 1 : length - 1)
                }
                className={
                    'flex items-center justify-center w-10 ' +
                    'ringable focus:rounded focus:!border-blue-50 ' +
                    'focus:bg-blue-50 focus:z-20'
                }
            >
                <div className='w-5 h-5 rotate-180 svg-pagination'>
                    {icons.chevronLeftCircle}
                </div>
            </button>
        </nav>
    );
}
