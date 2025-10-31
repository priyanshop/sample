import { JSXElementConstructor, ReactElement } from 'react';

interface StepGroup {
   id: string;
}

export interface Step {
   name?: string;
   title: string;
   group?: StepGroup;
   description?: string;
   component: ReactElement<any, string | JSXElementConstructor<any>>;
}
