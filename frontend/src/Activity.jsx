import React from 'react';

const people = [
    {
        name: 'Lindsay Walton',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    {
        name: 'Jeff Smith',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
    },
    // More people...
];
const activityItems = [
    {
        id: 1,
        person: people[0],
        project: 'Workcation',
        item: 'Sent 0.1 ETH to ______',
        environment: 'production',
        time: '1h',
    },
    {
        id: 2,
        person: people[1],
        project: 'Sup',
        item: 'Received 0.4 poly from ______',
        environment: 'staging',
        time: '2h',
    },
    // More items...
];

const Activity = () => {
    return (
        <div>
            {' '}
            <div>
                <ul className="divide-y divide-gray-200">
                    {activityItems.map((activityItem) => (
                        <li key={activityItem.id} className="py-4">
                            <div className="flex space-x-3">
                                <img
                                    className="h-6 w-6 rounded-full"
                                    src={activityItem.person.imageUrl}
                                    alt=""
                                />
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium">
                                            {activityItem.person.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {activityItem.time}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {activityItem.item}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Activity;
