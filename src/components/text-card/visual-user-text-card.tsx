import React from 'react';
import '@styles/markdown.css';

// TODO: Replace links in text as well (starting with https:// or www.)

function VisualUserTextCard(props: {title: string; text: string}) {
    return (
        <div className='w-full px-4 py-2 bg-white rounded shadow lg:px-6 lg:py-4 centering-col'>
            <div className='text-xl text-blue-800 font-weight-700'>
                {props.title}
            </div>
            {props.text.replace(/\s*/, '').length > 0 && (
                <div
                    className='w-full mt-2 text-sm text-gray-800 lg:mt-3 markdown font-weight-500'
                    dangerouslySetInnerHTML={{
                        __html: ''.concat(
                            ...props.text
                                .replaceAll(/<[^>]*>/g, '')
                                .split('\n')
                                .map((s) => `<p>${s}</p>`),
                        ),
                    }}
                />
            )}
        </div>
    );
}

export default VisualUserTextCard;
