import React, { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Child = ReactNode | any | React.ReactElement | null | false;
export type Children = Child | Child[];

export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY/MM/DD';

export interface Option {
   label: string;
   value: number;
}
