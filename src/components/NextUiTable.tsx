'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';

type Props = {
  users: {
    id: number;
    name: string;
    email: string;
    website: string;
  }[];
};

// const rows = [
//   {
//     key: '1',
//     name: 'Tony Reichert',
//     role: 'CEO',
//     status: 'Active',
//   },
//   {
//     key: '2',
//     name: 'Zoey Lang',
//     role: 'Technical Lead',
//     status: 'Paused',
//   },
//   {
//     key: '3',
//     name: 'Jane Fisher',
//     role: 'Senior Developer',
//     status: 'Active',
//   },
//   {
//     key: '4',
//     name: 'William Howard',
//     role: 'Community Manager',
//     status: 'Vacation',
//   },
// ];

const columns = [
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'email',
    label: 'EMAIL',
  },
  {
    key: 'website',
    label: 'WEBSITE',
  },
];

export default function NextUiTable({ users }: Props) {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
